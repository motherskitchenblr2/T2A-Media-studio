"use client";

import { useState } from "react";
import { TOOL_LABELS } from "@/types/gallery";

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="flex items-center gap-1"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Twitter/X */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-cyan-400"
        aria-label="Share on X"
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-blue-400"
        aria-label="Share on Facebook"
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* Reddit */}
      <a
        href={shareLinks.reddit}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-orange-400"
        aria-label="Share on Reddit"
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.6 12.6a1.8 1.8 0 01-3.055 1.265 9.03 9.03 0 01-4.92-1.595.15.15 0 01-.015-.225.15.15 0 01.21-.03 8.73 8.73 0 004.74 1.53c.105 0 .21-.015.315-.03a1.8 1.8 0 012.715.09l.01.015-.015-.015a1.8 1.8 0 01.015-.99v-.015zm-9.6-2.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm6 0a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm-3.9 5.7c.285.3.69.45 1.2.45s.915-.15 1.2-.45c.105-.12.27-.12.375 0 .12.12.12.3 0 .42-.405.45-.96.675-1.575.675s-1.17-.225-1.575-.675c-.12-.12-.12-.3 0-.42.12-.12.27-.12.375 0z" />
        </svg>
      </a>

      {/* Copy Link */}
      <button
        onClick={copyLink}
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-emerald-400 cursor-pointer"
        aria-label="Copy link"
      >
        {copied ? (
          <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        )}
        {showTooltip && !copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300 shadow-lg">
            Copy link
          </span>
        )}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-emerald-900/80 px-2 py-1 text-xs text-emerald-300 shadow-lg">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}
