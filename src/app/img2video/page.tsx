import type { Metadata } from "next";
import ToolPageLayout from "../ToolPageLayout";

export const metadata: Metadata = {
  title: "Image to Video - AI Video Generator from Images | NightWaveAI",
  description:
    "Bring your static images to life with AI-powered video generation. Upload any image and watch it animate with fluid motion and dynamic effects.",
  openGraph: {
    title: "Image to Video - AI Video Generator from Images | NightWaveAI",
    description: "Bring your static images to life with AI-powered video generation.",
    type: "website",
  },
};

const SAMPLE_OUTPUTS = [
  {
    title: "Robot Dance",
    prompt: "A robot breaking into dance in a neon alleyway, smooth fluid motion",
    gradient: "from-purple-900/60 via-pink-900/40 to-zinc-900",
  },
  {
    title: "Ocean Waves",
    prompt: "Static ocean image coming to life with crashing waves and sea spray",
    gradient: "from-blue-900/60 via-cyan-900/40 to-zinc-900",
  },
  {
    title: "Phoenix Rising",
    prompt: "A phoenix erupting from flames, feathers glowing gold and crimson",
    gradient: "from-orange-900/60 via-red-900/40 to-zinc-900",
  },
];

export default function Img2VideoPage() {
  return (
    <ToolPageLayout
      toolIcon="🎬"
      toolName="Image to Video"
      toolBadge="Image → Video"
      badgeGradient="from-purple-500 to-pink-600"
      description="Upload any image and bring it to life. Our AI analyzes your image and generates smooth, natural motion — turning a single frame into a cinematic video clip."
      inputPlaceholder="Describe the motion and effects you want..."
      inputHint='Try: "A gentle breeze blowing through the trees, camera slowly panning right, cinematic lighting"'
      sampleOutputs={SAMPLE_OUTPUTS}
    />
  );
}
