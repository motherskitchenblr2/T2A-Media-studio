import type { GalleryItem, GalleryItemWithUser, ToolType } from "@/types/gallery";
import { TOOL_LABELS } from "@/types/gallery";

/**
 * Mock gallery data used as fallback when Supabase is not configured.
 * This matches nightwaveai.com's design language and tool offerings.
 */
const MOCK_ITEMS: GalleryItem[] = [
  {
    id: "mock-1",
    tool_type: "text2image",
    title: "Neon City Sunset",
    prompt: "A futuristic neon-lit city at sunset with flying cars and holographic billboards",
    thumbnail_url: "/gallery/placeholders/text2image-1.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 3600000).toISOString(),
    updated_at: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "mock-2",
    tool_type: "img2video",
    title: "Dancing Robot",
    prompt: "A robot breaking into dance in a neon alleyway, smooth fluid motion",
    thumbnail_url: "/gallery/placeholders/img2video-1.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 7200000).toISOString(),
    updated_at: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: "mock-3",
    tool_type: "add-audio",
    title: "Thunderstorm Soundscape",
    prompt: "Add realistic thunder and rain sounds to this night cityscape timelapse",
    thumbnail_url: "/gallery/placeholders/add-audio-1.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 10800000).toISOString(),
    updated_at: new Date(Date.now() - 10800000).toISOString(),
  },
  {
    id: "mock-4",
    tool_type: "wan2.5",
    title: "Cyberpunk Chase Scene",
    prompt: "High-speed hoverbike chase through a densely packed neon metropolis, 1080p cinematic",
    thumbnail_url: "/gallery/placeholders/wan-1.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 14400000).toISOString(),
    updated_at: new Date(Date.now() - 14400000).toISOString(),
  },
  {
    id: "mock-5",
    tool_type: "extendVideo",
    title: "Forest Portal Extension",
    prompt: "Extend the video beyond the glowing portal revealing an enchanted alien forest",
    thumbnail_url: "/gallery/placeholders/extend-1.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 18000000).toISOString(),
    updated_at: new Date(Date.now() - 18000000).toISOString(),
  },
  {
    id: "mock-6",
    tool_type: "text2image",
    title: "Crystal Dragon",
    prompt: "A majestic dragon made of translucent crystal, 4K photorealistic, rim lighting, dark background",
    thumbnail_url: "/gallery/placeholders/text2image-2.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 21600000).toISOString(),
    updated_at: new Date(Date.now() - 21600000).toISOString(),
  },
  {
    id: "mock-7",
    tool_type: "img2video",
    title: "Ocean Wave Crash",
    prompt: "Static ocean image coming to life with crashing waves and sea spray particles",
    thumbnail_url: "/gallery/placeholders/img2video-2.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 25200000).toISOString(),
    updated_at: new Date(Date.now() - 25200000).toISOString(),
  },
  {
    id: "mock-8",
    tool_type: "wan2.5",
    title: "Space Colony Sunrise",
    prompt: "Dome colony on Mars watching the sunrise, people walking, flags waving in artificial wind",
    thumbnail_url: "/gallery/placeholders/wan-2.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 28800000).toISOString(),
    updated_at: new Date(Date.now() - 28800000).toISOString(),
  },
  {
    id: "mock-9",
    tool_type: "text2image",
    title: "Samurai in Tokyo",
    prompt: "A cyber samurai standing on a rooftop in Shinjuku, neon reflections on armor, rain",
    thumbnail_url: "/gallery/placeholders/text2image-3.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 32400000).toISOString(),
    updated_at: new Date(Date.now() - 32400000).toISOString(),
  },
  {
    id: "mock-10",
    tool_type: "img2video",
    title: "Phoenix Rising",
    prompt: "A phoenix erupting from flames, feathers glowing gold and crimson, dynamic camera movement",
    thumbnail_url: "/gallery/placeholders/img2video-3.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 36000000).toISOString(),
    updated_at: new Date(Date.now() - 36000000).toISOString(),
  },
  {
    id: "mock-11",
    tool_type: "add-audio",
    title: "Synthwave Beat",
    prompt: "Retro 80s synthwave beat with driving bass for this neon city driving sequence",
    thumbnail_url: "/gallery/placeholders/add-audio-2.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 39600000).toISOString(),
    updated_at: new Date(Date.now() - 39600000).toISOString(),
  },
  {
    id: "mock-12",
    tool_type: "extendVideo",
    title: "Desert Storm Roll",
    prompt: "Extend the sandstorm sequence as it rolls over ancient ruins, adding dramatic lightning",
    thumbnail_url: "/gallery/placeholders/extend-2.svg",
    output_url: null,
    is_public: true,
    created_at: new Date(Date.now() - 43200000).toISOString(),
    updated_at: new Date(Date.now() - 43200000).toISOString(),
  },
];

const MOCK_USERS: Record<number, { display_name: string; avatar_url: string | null }> = {
  0: { display_name: "NeonViper", avatar_url: null },
  1: { display_name: "GlitchQueen", avatar_url: null },
  2: { display_name: "CyberPunk_2077", avatar_url: null },
  3: { display_name: "PromptWizard", avatar_url: null },
  4: { display_name: "NightOwl", avatar_url: null },
};

/**
 * Returns mock gallery data for development when Supabase is not configured.
 */
export function getMockGalleryItems(
  toolType?: ToolType | "all",
  limit = 50,
  page = 0
): GalleryItemWithUser[] {
  let filtered = MOCK_ITEMS;
  if (toolType && toolType !== "all") {
    filtered = MOCK_ITEMS.filter((item) => item.tool_type === toolType);
  }

  const start = page * limit;
  const items = filtered.slice(start, start + limit);

  return items.map((item, idx) => ({
    ...item,
    user: MOCK_USERS[(start + idx) % 5] ?? null,
  }));
}

export function getMockGalleryCount(toolType?: ToolType | "all"): number {
  if (toolType && toolType !== "all") {
    return MOCK_ITEMS.filter((item) => item.tool_type === toolType).length;
  }
  return MOCK_ITEMS.length;
}
