import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard - Your Account | NightWaveAI",
  description:
    "Manage your NightWaveAI account, view credit balance, generation history, and account settings.",
  openGraph: {
    title: "Dashboard - Your Account | NightWaveAI",
    description: "Manage your NightWaveAI account and view your generation history.",
    type: "website",
  },
};

// Mock dashboard data
const MOCK_DASHBOARD = {
  credits: 2450,
  creditsUsedThisMonth: 320,
  totalGenerations: 156,
  recentGenerations: [
    {
      id: "gen-1",
      tool: "text2image" as const,
      prompt: "A futuristic neon-lit city at sunset with flying cars",
      status: "completed" as const,
      createdAt: "10 minutes ago",
      credits: 5,
      thumbnail: null,
    },
    {
      id: "gen-2",
      tool: "img2video" as const,
      prompt: "Static ocean image coming to life with crashing waves",
      status: "completed" as const,
      createdAt: "1 hour ago",
      credits: 20,
      thumbnail: null,
    },
    {
      id: "gen-3",
      tool: "wan2.5" as const,
      prompt: "Cyberpunk chase scene through neon metropolis, 1080p",
      status: "completed" as const,
      createdAt: "3 hours ago",
      credits: 30,
      thumbnail: null,
    },
    {
      id: "gen-4",
      tool: "add-audio" as const,
      prompt: "Add synthwave beat to this neon city driving sequence",
      status: "processing" as const,
      createdAt: "5 hours ago",
      credits: 15,
      thumbnail: null,
    },
    {
      id: "gen-5",
      tool: "extendVideo" as const,
      prompt: "Extend the sandstorm sequence over ancient ruins",
      status: "completed" as const,
      createdAt: "1 day ago",
      credits: 10,
      thumbnail: null,
    },
    {
      id: "gen-6",
      tool: "text2image" as const,
      prompt: "A cyber samurai standing on a rooftop in Shinjuku, neon reflections",
      status: "failed" as const,
      createdAt: "1 day ago",
      credits: 0,
      thumbnail: null,
    },
  ],
  stats: {
    imagesGenerated: 89,
    videosGenerated: 67,
    totalCreditsSpent: 1240,
    avgGenTime: "32s",
  },
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardClient data={MOCK_DASHBOARD} />
    </div>
  );
}
