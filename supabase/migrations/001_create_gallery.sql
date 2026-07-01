-- Gallery items table for public gallery
CREATE TABLE IF NOT EXISTS gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  tool_type TEXT NOT NULL CHECK (tool_type IN ('text2image', 'img2video', 'add-audio', 'extendVideo', 'wan2.5')),
  title TEXT,
  prompt TEXT,
  thumbnail_url TEXT NOT NULL,
  output_url TEXT,
  is_public BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast filtering
CREATE INDEX idx_gallery_items_tool_type ON gallery_items(tool_type);
CREATE INDEX idx_gallery_items_public_created ON gallery_items(is_public, created_at DESC);
CREATE INDEX idx_gallery_items_user_id ON gallery_items(user_id);

-- Enable Row Level Security
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read public items
CREATE POLICY "Public gallery items are viewable by everyone"
  ON gallery_items FOR SELECT
  USING (is_public = true);

-- Policy: Users can insert their own items
CREATE POLICY "Users can insert their own gallery items"
  ON gallery_items FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own items
CREATE POLICY "Users can update their own gallery items"
  ON gallery_items FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own items
CREATE POLICY "Users can delete their own gallery items"
  ON gallery_items FOR DELETE
  USING (auth.uid() = user_id);

-- User profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User profiles are viewable by everyone"
  ON user_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Trigger to auto-create user_profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, display_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop trigger if exists, then create
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Storage buckets (create these via Supabase Dashboard or API)
-- bucket: gallery-thumbnails (public)
-- bucket: gallery-outputs (public)
