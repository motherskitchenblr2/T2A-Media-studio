import type { Metadata } from "next";
import { getGalleryItems, getGalleryItemCount } from "@/lib/gallery/queries";
import { getMockGalleryItems, getMockGalleryCount } from "@/lib/gallery/mock";
import type { ToolType } from "@/types/gallery";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery - AI Generated Videos & Images | NightWaveAI",
  description:
    "Explore stunning AI-generated videos and images created by the NightWaveAI community. Browse text-to-image, image-to-video, and more.",
  openGraph: {
    title: "Gallery - AI Generated Videos & Images | NightWaveAI",
    description:
      "Explore stunning AI-generated videos and images created by the NightWaveAI community.",
    type: "website",
  },
};

const ALL_TOOL_TYPES: (ToolType | "all")[] = [
  "all",
  "text2image",
  "img2video",
  "add-audio",
  "extendVideo",
  "wan2.5",
];

export default async function GalleryPage() {
  // Detect if Supabase is configured
  const hasSupabase =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://your-project.supabase.co";

  let items;
  let counts: Partial<Record<ToolType, number>> = {};
  let totalCount: number;

  if (hasSupabase) {
    // Fetch from Supabase
    items = await getGalleryItems("all", 50, 0);
    totalCount = await getGalleryItemCount("all");

    // Get per-tool counts
    for (const tool of ALL_TOOL_TYPES) {
      if (tool !== "all") {
        const count = await getGalleryItemCount(tool);
        counts[tool] = count;
      }
    }
  } else {
    // Use mock data for development
    items = getMockGalleryItems("all", 50, 0);
    totalCount = items.length;

    // Count per tool from mock data
    for (const tool of ALL_TOOL_TYPES) {
      if (tool !== "all") {
        counts[tool] = getMockGalleryCount(tool);
      }
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero header */}
      <div className="relative overflow-hidden border-b border-zinc-800/50">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center text-center">
            {/* Neon accent line */}
            <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Community{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-zinc-400">
              Explore stunning creations from the NightWaveAI community.
              Filter by tool type to find inspiration for your next project.
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-8 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-cyan-400">{totalCount}+</span>
                <span className="text-zinc-500">Creations</span>
              </div>
              <div className="h-10 w-px bg-zinc-800" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-purple-400">5</span>
                <span className="text-zinc-500">AI Tools</span>
              </div>
              <div className="h-10 w-px bg-zinc-800" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-emerald-400">24/7</span>
                <span className="text-zinc-500">Generating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Gallery content */}
      <div className="mx-auto max-w-[1600px]">
        <GalleryClient
          items={items}
          counts={counts}
          totalCount={totalCount}
        />
      </div>

      {/* Footer note */}
      <div className="border-t border-zinc-800/50 py-8 text-center">
        <p className="text-sm text-zinc-600">
          Want to see your creations here?{" "}
          <a href="/text2image" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            Start generating
          </a>{" "}
          and make them public in your account settings.
        </p>
      </div>
    </div>
  );
}
