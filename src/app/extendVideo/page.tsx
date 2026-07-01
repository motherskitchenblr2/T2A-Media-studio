import type { Metadata } from "next";
import ToolPageLayout from "../ToolPageLayout";

export const metadata: Metadata = {
  title: "Extend Video - AI Video Extender | NightWaveAI",
  description:
    "Make your videos longer with AI. Upload a short clip and our AI generates natural continuations from the last frame — extend any video up to 3x its original length.",
  openGraph: {
    title: "Extend Video - AI Video Extender | NightWaveAI",
    description: "Make your videos longer with AI-powered video extension.",
    type: "website",
  },
};

const SAMPLE_OUTPUTS = [
  {
    title: "Forest Portal",
    prompt: "Extend the video beyond the glowing portal into an enchanted alien forest",
    gradient: "from-orange-900/60 via-amber-900/40 to-zinc-900",
  },
  {
    title: "Desert Storm",
    prompt: "Extend the sandstorm sequence as it rolls over ancient ruins with lightning",
    gradient: "from-yellow-900/60 via-orange-900/40 to-zinc-900",
  },
  {
    title: "Space Walk",
    prompt: "Continue the spacewalk sequence as the astronaut discovers a derelict alien ship",
    gradient: "from-indigo-900/60 via-blue-900/40 to-zinc-900",
  },
];

export default function ExtendVideoPage() {
  return (
    <ToolPageLayout
      toolIcon="⏩"
      toolName="Extend Video"
      toolBadge="Extend Video"
      badgeGradient="from-orange-500 to-red-600"
      description="Got a video that's too short? Upload it and our AI will generate a seamless continuation from the last frame. Extend any clip up to 3x its length with natural motion and consistent style."
      inputPlaceholder="Describe what should happen next..."
      inputHint='Try: "The character continues walking through the neon-lit market, camera follows from behind, ambient city noise"'
      sampleOutputs={SAMPLE_OUTPUTS}
    />
  );
}
