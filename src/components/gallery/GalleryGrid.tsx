import type { GalleryItemWithUser } from "@/types/gallery";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  items: GalleryItemWithUser[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-4 text-6xl opacity-30">🎨</div>
        <h3 className="mb-2 text-lg font-semibold text-zinc-400">No creations found</h3>
        <p className="max-w-sm text-sm text-zinc-600">
          No public gallery items match your current filter. Try selecting a different category or check back later.
        </p>
      </div>
    );
  }

  return (
    <div
      className="columns-1 gap-4 px-4 sm:columns-2 sm:px-6 lg:columns-3 xl:columns-4 lg:px-8"
      style={{ columnFill: "balance" } as React.CSSProperties}
    >
      {items.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          priority={index < 8}
        />
      ))}
    </div>
  );
}
