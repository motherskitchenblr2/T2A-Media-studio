"use client";

import { TOOL_LABELS, TOOL_ICONS } from "@/types/gallery";
import type { ToolType } from "@/types/gallery";

const ALL_TOOLS: (ToolType | "all")[] = [
  "all",
  "text2image",
  "img2video",
  "add-audio",
  "extendVideo",
  "wan2.5",
];

interface GalleryFilterProps {
  selected: ToolType | "all";
  counts: Partial<Record<ToolType, number>>;
  totalCount: number;
  onSelect: (tool: ToolType | "all") => void;
}

export default function GalleryFilter({
  selected,
  counts,
  totalCount,
  onSelect,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 px-4 sm:px-6 lg:px-8">
      <span className="text-xs uppercase tracking-widest text-zinc-600 mr-2 hidden sm:inline">
        Filter
      </span>
      {ALL_TOOLS.map((tool) => {
        const isActive = selected === tool;
        const label =
          tool === "all"
            ? `All (${totalCount})`
            : `${TOOL_ICONS[tool]} ${TOOL_LABELS[tool]}${counts[tool] !== undefined ? ` (${counts[tool]})` : ""}`;
        const isAll = tool === "all";

        const baseClasses =
          "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer border";

        const activeClasses = isActive
          ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/80";

        const allClasses = isAll
          ? isActive
            ? "border-zinc-500/50 bg-zinc-700/40 text-zinc-200"
            : "border-zinc-800 bg-zinc-900/40 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
          : "";

        return (
          <button
            key={tool}
            onClick={() => onSelect(tool)}
            className={`${baseClasses} ${isAll ? allClasses : activeClasses}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
