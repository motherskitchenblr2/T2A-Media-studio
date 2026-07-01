import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wan 2.2 - Premium NSFW AI Video Generator | NightWaveAI",
  description:
    "Wan 2.2 is our most powerful model for NSFW content creation. Generate uncensored AI videos from images with lifelike motion, natural physics, and stunning detail.",
  openGraph: {
    title: "Wan 2.2 - Premium NSFW AI Video Generator | NightWaveAI",
    description:
      "Generate uncensored AI videos from images with lifelike motion and stunning detail.",
    type: "website",
  },
};

export default function Wan22Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-zinc-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/5 px-4 py-1.5 text-sm text-rose-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                Premium Model
              </div>

              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Wan{" "}
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  2.2
                </span>
              </h1>
              <p className="mb-2 text-xl font-semibold text-zinc-300">
                The Best Model for NSFW AI Generation
              </p>
              <p className="mb-8 text-lg text-zinc-400 leading-relaxed">
                Wan 2.2 is our uncensored video generation model optimized for
                adult and artistic NSFW content. Built on a specialized training
                pipeline, it delivers the most realistic human motion, natural
                physics, and expressive detail of any open-weight video model.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Uncensored Output",
                  "Lifelike Motion",
                  "1080p Resolution",
                  "Natural Physics",
                  "Fast Generation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/pricing"
                  className="rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all hover:shadow-[0_0_40px_rgba(244,63,94,0.6)] hover:scale-105 text-center"
                >
                  Try Wan 2.2 →
                </Link>
                <Link
                  href="/wan2.5"
                  className="rounded-full border border-zinc-700 bg-zinc-900/60 px-8 py-3 text-base font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800/80 text-center"
                >
                  Compare with Wan 2.7
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl border border-zinc-800/60 bg-gradient-to-br from-rose-900/40 via-pink-900/30 to-zinc-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-4">🔥</div>
                    <p className="text-sm text-zinc-500 px-8">
                      Wan 2.2 generates uncensored video from your images with
                      industry-leading realism
                    </p>
                  </div>
                </div>
                {/* Decorative glow */}
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl" />
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            What Wan 2.2 Can Do
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🎭",
                title: "Facial Expression",
                desc: "Natural eye movement, subtle smiles, and realistic micro-expressions.",
              },
              {
                icon: "💃",
                title: "Body Motion",
                desc: "Fluid full-body animation with accurate joint articulation and weight distribution.",
              },
              {
                icon: "🧵",
                title: "Cloth & Fabric",
                desc: "Realistic clothing movement with proper draping, wrinkles, and wind effects.",
              },
              {
                icon: "💡",
                title: "Lighting",
                desc: "Dynamic lighting that adapts to motion — shadows, rim lights, and ambient occlusion.",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/40"
              >
                <div className="mb-3 text-3xl">{cap.icon}</div>
                <h3 className="mb-2 text-base font-semibold text-white">{cap.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">
            Wan 2.2 vs Wan 2.7
          </h2>

          <div className="overflow-hidden rounded-2xl border border-zinc-800/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-800/60 bg-zinc-900/40">
                  <th className="px-6 py-4 font-medium text-zinc-300">Feature</th>
                  <th className="px-6 py-4 font-medium text-zinc-300">
                    <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                      Wan 2.2
                    </span>
                  </th>
                  <th className="px-6 py-4 font-medium text-zinc-300">
                    <span className="text-cyan-400">Wan 2.7</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "NSFW Support", wan22: "✅ Full uncensored", wan27: "⚠️ Limited" },
                  { feature: "Resolution", wan22: "1080p", wan27: "1080p" },
                  { feature: "Human Motion", wan22: "⭐ Best-in-class", wan27: "✅ Excellent" },
                  { feature: "Facial Detail", wan22: "⭐ Superior", wan27: "✅ Great" },
                  { feature: "Audio Generation", wan22: "❌ Not included", wan27: "✅ Built-in" },
                  { feature: "Generation Speed", wan22: "~45s", wan27: "~30s" },
                  { feature: "Scene Complexity", wan22: "✅ High", wan27: "⭐ Very High" },
                ].map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-zinc-800/30 last:border-b-0 transition-colors hover:bg-zinc-900/20"
                  >
                    <td className="px-6 py-3 font-medium text-zinc-300">{row.feature}</td>
                    <td className="px-6 py-3 text-zinc-400">{row.wan22}</td>
                    <td className="px-6 py-3 text-zinc-400">{row.wan27}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== HOW TO USE ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            How to Use Wan 2.2
          </h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload an Image",
                desc: "Start with any photo or artwork. Wan 2.2 works best with clear, well-lit images showing full figures.",
              },
              {
                step: "02",
                title: "Describe the Motion",
                desc: "Tell Wan 2.2 what you want. Describe the action, camera movement, lighting changes, and mood.",
              },
              {
                step: "03",
                title: "Generate & Download",
                desc: "Click generate and get your video in under a minute. Download in 1080p or share directly.",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/40"
              >
                <div className="mb-2 text-xs font-bold tracking-widest text-zinc-700 group-hover:text-rose-400 transition-colors">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Create Without Limits?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Wan 2.2 is available with any paid plan. Get uncensored, lifelike
            AI video generation starting at just a few credits per video.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/pricing"
              className="rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all hover:shadow-[0_0_40px_rgba(244,63,94,0.6)] hover:scale-105"
            >
              View Pricing →
            </Link>
            <Link
              href="/wan2.5"
              className="rounded-full border border-zinc-700 bg-zinc-900/60 px-8 py-3 text-base font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800/80"
            >
              Try Wan 2.7 Instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
