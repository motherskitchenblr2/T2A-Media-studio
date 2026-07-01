export type ToolType =
  | "text2image"
  | "img2video"
  | "add-audio"
  | "extendVideo"
  | "wan2.5";

export interface GalleryItem {
  id: string;
  user_id?: string;
  tool_type: ToolType;
  title: string | null;
  prompt: string | null;
  thumbnail_url: string;
  output_url: string | null;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryUser {
  display_name: string | null;
  avatar_url: string | null;
}

export type GalleryItemWithUser = GalleryItem & {
  user: GalleryUser | null;
};

export const TOOL_LABELS: Record<ToolType, string> = {
  text2image: "Text → Image",
  img2video: "Image → Video",
  "add-audio": "Add Audio",
  extendVideo: "Extend Video",
  "wan2.5": "Wan 2.7",
};

export const TOOL_ICONS: Record<ToolType, string> = {
  text2image: "🖼️",
  img2video: "🎬",
  "add-audio": "🔊",
  extendVideo: "⏩",
  "wan2.5": "🔥",
};

export const TOOL_COLORS: Record<ToolType, string> = {
  text2image: "from-cyan-500 to-blue-500",
  img2video: "from-purple-500 to-pink-500",
  "add-audio": "from-emerald-500 to-teal-500",
  extendVideo: "from-orange-500 to-red-500",
  "wan2.5": "from-yellow-500 to-rose-500",
};
