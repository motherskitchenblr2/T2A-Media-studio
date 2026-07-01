"use client";

import Link from "next/link";
import { TOOL_LABELS, TOOL_ICONS } from "@/types/gallery";
import type { ToolType } from "@/types/gallery";

interface Generation {
  id: string;
  tool: ToolType;
  prompt: string;
  status: "completed" | "processing" | "failed";
  createdAt: string;
  credits: number;
  thumbnail: string | null;
}

interface DashboardData {
  credits: number;
  creditsUsedThisMonth: number;
  totalGenerations: number;
  recentGenerations: Generation[];
  stats: {
    imagesGenerated: number;
    videosGenerated: number;
    totalCreditsSpent: number;
    avgGenTime: string;
  };
}

interface DashboardClientProps {
  data: DashboardData;
}

export default function DashboardClient({ data }: DashboardClientProps) {
  return (
    <div>
      {/* ===== HEADER ===== */}
      <section className="border-b border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="mt-1 text-sm text-zinc-500">
                Welcome back! Here&apos;s what&apos;s happening with your account.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/pricing"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105"
              >
                Buy Credits
              </Link>
              <Link
                href="/text2image"
                className="rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800/80"
              >
                New Generation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ===== CREDIT CARD ===== */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/60 via-cyan-900/30 to-zinc-900 p-6">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="relative">
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-400/70">
                Available Credits
              </div>
              <div className="text-3xl font-bold text-cyan-400">{data.credits.toLocaleString()}</div>
              <div className="mt-1 text-xs text-zinc-600">{data.creditsUsedThisMonth} used this month</div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6">
            <div className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Total Generations
            </div>
            <div className="text-3xl font-bold text-white">{data.totalGenerations}</div>
            <div className="mt-1 text-xs text-zinc-600">All time</div>
          </div>

          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6">
            <div className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Images
            </div>
            <div className="text-3xl font-bold text-purple-400">{data.stats.imagesGenerated}</div>
            <div className="mt-1 text-xs text-zinc-600">{data.stats.videosGenerated} videos</div>
          </div>

          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6">
            <div className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Avg. Gen Time
            </div>
            <div className="text-3xl font-bold text-emerald-400">{data.stats.avgGenTime}</div>
            <div className="mt-1 text-xs text-zinc-600">{data.stats.totalCreditsSpent} credits spent</div>
          </div>
        </div>

        {/* ===== QUICK ACTIONS ===== */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { label: "Text → Image", href: "/text2image", icon: "🖼️" },
            { label: "Image → Video", href: "/img2video", icon: "🎬" },
            { label: "Add Audio", href: "/add-audio", icon: "🔊" },
            { label: "Wan 2.7", href: "/wan2.5", icon: "🔥" },
            { label: "Extend Video", href: "/extendVideo", icon: "⏩" },
            { label: "Wan 2.2", href: "/wan2.2", icon: "💎" },
          ].map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400 transition-all hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/80"
            >
              <span>{action.icon}</span>
              {action.label}
            </Link>
          ))}
        </div>

        {/* ===== GENERATION HISTORY ===== */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">Recent Generations</h2>

          <div className="overflow-hidden rounded-xl border border-zinc-800/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-800/60 bg-zinc-900/40">
                  <th className="px-4 py-3 font-medium text-zinc-500">Tool</th>
                  <th className="px-4 py-3 font-medium text-zinc-500 hidden sm:table-cell">Prompt</th>
                  <th className="px-4 py-3 font-medium text-zinc-500">Status</th>
                  <th className="px-4 py-3 font-medium text-zinc-500 hidden md:table-cell">Date</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-500">Credits</th>
                </tr>
              </thead>
              <tbody>
                {data.recentGenerations.map((gen) => (
                  <tr
                    key={gen.id}
                    className="border-b border-zinc-800/30 last:border-b-0 transition-colors hover:bg-zinc-900/30"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span>{TOOL_ICONS[gen.tool]}</span>
                        <span className="text-zinc-300 text-xs font-medium">
                          {TOOL_LABELS[gen.tool]}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="text-zinc-500 text-xs line-clamp-1 max-w-[240px] block">
                        {gen.prompt}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={gen.status} />
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs text-zinc-600">{gen.createdAt}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={gen.status === "failed" ? "text-zinc-600 text-xs" : "text-emerald-400 text-xs font-medium"}>
                        {gen.status === "failed" ? "—" : `-${gen.credits}`}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center">
            <button className="text-sm text-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer">
              View all generations →
            </button>
          </div>
        </div>

        {/* ===== ACCOUNT ACTIONS ===== */}
        <div className="mt-12 border-t border-zinc-800/50 pt-8">
          <h2 className="mb-4 text-xl font-bold text-white">Account</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Profile Settings", desc: "Name, avatar, bio", href: "#" },
              { label: "Billing & Payments", desc: "Invoices, payment methods", href: "/pricing" },
              { label: "Referral Program", desc: "Earn free credits", href: "/referral" },
              { label: "API Keys", desc: "Developer access", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/40"
              >
                <div className="text-sm font-semibold text-zinc-300">{item.label}</div>
                <div className="mt-1 text-xs text-zinc-600">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Generation["status"] }) {
  const config = {
    completed: { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400", label: "Completed" },
    processing: { bg: "bg-cyan-500/10", text: "text-cyan-400", dot: "bg-cyan-400 animate-pulse", label: "Processing" },
    failed: { bg: "bg-red-500/10", text: "text-red-400", dot: "bg-red-400", label: "Failed" },
  };

  const c = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${c.bg} px-2 py-0.5 text-xs font-medium ${c.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
