import { createServerSupabase } from "@/lib/supabase/server";
import type { GalleryItem, GalleryItemWithUser, ToolType } from "@/types/gallery";

export async function getGalleryItems(
  toolType?: ToolType | "all",
  limit = 50,
  page = 0
): Promise<GalleryItemWithUser[]> {
  const supabase = await createServerSupabase();

  let query = supabase
    .from("gallery_items")
    .select(
      `
      id,
      user_id,
      tool_type,
      title,
      prompt,
      thumbnail_url,
      output_url,
      is_public,
      created_at,
      updated_at,
      user:user_id (
        display_name,
        avatar_url
      )
    `
    )
    .eq("is_public", true)
    .order("created_at", { ascending: false })
    .range(page * limit, (page + 1) * limit - 1);

  if (toolType && toolType !== "all") {
    query = query.eq("tool_type", toolType);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching gallery items:", error);
    return [];
  }

  // Transform response to match GalleryItemWithUser shape
  return (data as unknown[]).map((item: unknown) => {
    const row = item as Record<string, unknown>;
    const userData = row.user as Record<string, unknown> | null;
    return {
      id: row.id as string,
      user_id: row.user_id as string | undefined,
      tool_type: row.tool_type as ToolType,
      title: row.title as string | null,
      prompt: row.prompt as string | null,
      thumbnail_url: row.thumbnail_url as string,
      output_url: row.output_url as string | null,
      is_public: row.is_public as boolean,
      created_at: row.created_at as string,
      updated_at: row.updated_at as string,
      user: userData
        ? {
            display_name: userData.display_name as string | null,
            avatar_url: userData.avatar_url as string | null,
          }
        : null,
    };
  });
}

export async function getGalleryItemCount(
  toolType?: ToolType | "all"
): Promise<number> {
  const supabase = await createServerSupabase();

  let query = supabase
    .from("gallery_items")
    .select("*", { count: "exact", head: true })
    .eq("is_public", true);

  if (toolType && toolType !== "all") {
    query = query.eq("tool_type", toolType);
  }

  const { count, error } = await query;

  if (error) {
    console.error("Error counting gallery items:", error);
    return 0;
  }

  return count ?? 0;
}
