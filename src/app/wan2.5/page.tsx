import type { Metadata } from "next";
import ToolPageLayout from "../ToolPageLayout";

export const metadata: Metadata = {
  title: "Wan 2.7-spicy - Next-Gen AI Video Generator | NightWaveAI",
  description:
    "Wan 2.7-spicy is our most advanced AI video synthesis model. Generate stunning videos from images with lifelike motion, built-in audio, and cinematic quality.",
  openGraph: {
    title: "Wan 2.7-spicy - Next-Gen AI Video Generator | NightWaveAI",
    description: "Generate stunning videos from images with lifelike motion and built-in audio.",
    type: "website",
  },
};

const SAMPLE_OUTPUTS = [
  {
    title: "Cyberpunk Chase",
    prompt: "High-speed hoverbike chase through a neon metropolis, 1080p cinematic",
    gradient: "from-rose-900/60 via-pink-900/40 to-zinc-900",
  },
  {
    title: "Space Colony",
    prompt: "Dome colony on Mars watching the sunrise, people walking, flags waving",
    gradient: "from-cyan-900/60 via-blue-900/40 to-zinc-900",
  },
  {
    title: "Undersea City",
    prompt: "Bioluminescent deep-sea city with glowing creatures swimming through towers",
    gradient: "from-teal-900/60 via-emerald-900/40 to-zinc-900",
  },
];

export default function Wan25Page() {
  return (
    <ToolPageLayout
      toolIcon="🔥"
      toolName="Wan 2.7-spicy"
      toolBadge="Wan 2.7"
      badgeGradient="from-yellow-500 to-rose-600"
      description="The most advanced model in our lineup. Wan 2.7-spicy generates stunning 1080p video from images with lifelike motion physics, built-in audio synthesis, and cinematic quality that rivals professional animation."
      inputPlaceholder="Describe the motion, camera movement, and atmosphere..."
      inputHint='Try: "Slow camera orbit around the subject, dramatic lighting shift from warm sunset to cool moonlight, particles floating in the air"'
      sampleOutputs={SAMPLE_OUTPUTS}
    />
  );
}
