"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItemWithUser, ToolType } from "@/types/gallery";
import { TOOL_LABELS, TOOL_ICONS, TOOL_COLORS } from "@/types/gallery";
import SocialShare from "./SocialShare";

interface GalleryCardProps {
  item: GalleryItemWithUser;
  priority?: boolean;
}

export default function GalleryCard({ item, priority = false }: GalleryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://nightwaveai.com"}/gallery/${item.id}`;
  const shareTitle = item.title ?? "Check out this AI-generated creation on NightWaveAI";

  const gradientClass = TOOL_COLORS[item.tool_type] ?? "from-cyan-500 to-blue-500";
  const timeAgo = getTimeAgo(item.created_at);

  return (
    <div
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)]"
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-zinc-950">
        {!hasError ? (
          <>
            {/* Skeleton loader */}
            {!isLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
            )}
            <Image
              src={item.thumbnail_url}
              alt={item.title ?? "Gallery item"}
              width={600}
              height={400}
              className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              priority={priority}
              unoptimized={item.thumbnail_url.startsWith("/gallery/")}
            />
            {/* Play overlay for video types */}
            {(item.tool_type === "img2video" ||
              item.tool_type === "extendVideo" ||
              item.tool_type === "wan2.5") && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Fallback when image fails */
          <div className="flex aspect-[3/2] w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
            <div className={`text-4xl opacity-30 ${gradientClass.includes("cyan") ? "text-cyan-500" : "text-zinc-600"}`}>
              {TOOL_ICONS[item.tool_type]}
            </div>
          </div>
        )}

        {/* Tool badge */}
        <div
          className={`absolute top-3 left-3 rounded-full bg-gradient-to-r ${gradientClass} px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg`}
        >
          {TOOL_LABELS[item.tool_type]}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="mb-1 text-sm font-semibold text-zinc-200 line-clamp-1 group-hover:text-white transition-colors">
          {item.title ?? "Untitled"}
        </h3>

        {/* Prompt preview */}
        {item.prompt && (
          <div className="mb-3">
            <p
              className={`text-xs text-zinc-500 leading-relaxed transition-all duration-200 ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {item.prompt}
            </p>
            {item.prompt.length > 80 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 text-[10px] text-cyan-500/70 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            {/* User avatar placeholder */}
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-medium text-zinc-500">
              {item.user?.display_name?.charAt(0)?.toUpperCase() ?? "?"}
            </div>
            <span className="text-xs text-zinc-500 truncate">
              {item.user?.display_name ?? "Anonymous"}
            </span>
            <span className="text-[10px] text-zinc-700">·</span>
            <span className="text-xs text-zinc-600 shrink-0">{timeAgo}</span>
          </div>

          {/* Social share */}
          <div className="opacity-0 transition-opacity group-hover:opacity-100">
            <SocialShare url={shareUrl} title={shareTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function getTimeAgo(dateString: string): string {
  const now = Date.now();
  const date = new Date(dateString).getTime();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}
