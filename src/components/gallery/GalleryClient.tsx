"use client";

import { useState, useMemo } from "react";
import type { ToolType } from "@/types/gallery";
import type { GalleryItemWithUser } from "@/types/gallery";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryFilter from "@/components/gallery/GalleryFilter";

interface GalleryClientProps {
  items: GalleryItemWithUser[];
  counts: Partial<Record<ToolType, number>>;
  totalCount: number;
}

export default function GalleryClient({
  items: initialItems,
  counts,
  totalCount,
}: GalleryClientProps) {
  const [selectedTool, setSelectedTool] = useState<ToolType | "all">("all");

  const filteredItems = useMemo(() => {
    if (selectedTool === "all") return initialItems;
    return initialItems.filter((item) => item.tool_type === selectedTool);
  }, [initialItems, selectedTool]);

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-0 z-30 -mt-4 pt-4 pb-4 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
        <GalleryFilter
          selected={selectedTool}
          counts={counts}
          totalCount={totalCount}
          onSelect={setSelectedTool}
        />
      </div>

      {/* Grid */}
      <div className="py-8">
        <GalleryGrid items={filteredItems} />
      </div>
    </>
  );
}
