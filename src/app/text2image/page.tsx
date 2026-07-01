import type { Metadata } from "next";
import ToolPageLayout from "../ToolPageLayout";

export const metadata: Metadata = {
  title: "Text to Image - Free AI Image Generator | NightWaveAI",
  description:
    "Transform your words into stunning 4K AI images. Enter a prompt, choose your style, and generate high-quality images in seconds.",
  openGraph: {
    title: "Text to Image - Free AI Image Generator | NightWaveAI",
    description: "Transform your words into stunning 4K AI images in seconds.",
    type: "website",
  },
};

const SAMPLE_OUTPUTS = [
  {
    title: "Neon City Sunset",
    prompt: "A futuristic neon-lit city at sunset with flying cars and holographic billboards",
    gradient: "from-cyan-900/60 via-blue-900/40 to-zinc-900",
  },
  {
    title: "Crystal Dragon",
    prompt: "A majestic dragon made of translucent crystal, 4K photorealistic, rim lighting",
    gradient: "from-purple-900/60 via-violet-900/40 to-zinc-900",
  },
  {
    title: "Cyber Samurai",
    prompt: "A cyber samurai standing on a rooftop in Shinjuku, neon reflections on armor",
    gradient: "from-pink-900/60 via-rose-900/40 to-zinc-900",
  },
];

export default function Text2ImagePage() {
  return (
    <ToolPageLayout
      toolIcon="🖼️"
      toolName="Text to Image"
      toolBadge="Text → Image"
      badgeGradient="from-cyan-500 to-blue-600"
      description="Describe anything you can imagine and our AI will generate a stunning 4K image. From photorealistic portraits to fantasy landscapes — the only limit is your creativity."
      inputPlaceholder="Describe the image you want to create..."
      inputHint='Try: "A cyberpunk street market at night, neon signs reflecting in puddles, 4K cinematic"'
      sampleOutputs={SAMPLE_OUTPUTS}
    />
  );
}
