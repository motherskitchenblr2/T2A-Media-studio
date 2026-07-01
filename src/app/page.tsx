import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-purple-900/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              Now with Wan 2.7-spicy
            </div>

            <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn your imagination{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                into reality
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl">
              Create stunning AI videos and images in seconds. The fastest,
              most affordable AI generation platform built for creators.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/img2video"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105"
              >
                Get daily FREE →
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-zinc-700 bg-zinc-900/60 px-8 py-3 text-base font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800/80"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEE THE MAGIC — Demo Showcase ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-3 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              See the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Magic
              </span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-zinc-400">
              Click on any video to watch static frames come alive. Every
              creation below was made with NightWaveAI in under 60 seconds.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseDemos.map((demo) => (
              <Link
                key={demo.href}
                href={demo.href}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 transition-all hover:border-zinc-700 hover:bg-zinc-900/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.08)]"
              >
                {/* Demo visual placeholder */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${demo.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl opacity-20">{demo.icon}</div>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 transition-transform group-hover:scale-110">
                      <svg className="h-7 w-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/80">
                    {demo.label}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {demo.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2">
                    {demo.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/40 px-6 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-zinc-500 hover:text-zinc-200"
            >
              View more in Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            What We Offer
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500">{feature.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-cyan-500">
                  Try it out
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Creators
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                {/* Stars */}
                <div className="mb-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm text-zinc-400 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-xs font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-300">{t.name}</div>
                    <div className="text-xs text-zinc-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY — Discord ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-zinc-900 p-8 sm:p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
            <div className="relative">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-4xl">
                💬
              </div>
              <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
                Join Our Discord Community
              </h2>
              <p className="mb-6 max-w-2xl mx-auto text-zinc-400">
                Get help, share tips, and connect with thousands of AI creators.
                Show off your generations, get prompt ideas, and be the first to
                try new features.
              </p>

              <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 rounded-full bg-zinc-900/60 px-4 py-2 border border-zinc-800">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-zinc-400">
                    <span className="text-emerald-400 font-semibold">2,847</span> online
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-zinc-900/60 px-4 py-2 border border-zinc-800">
                  <span className="text-zinc-400">
                    <span className="text-purple-400 font-semibold">12,430</span> members
                  </span>
                </div>
              </div>

              <a
                href="https://discord.gg/nightwaveai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-105"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord Server
              </a>

              <p className="mt-4 text-xs text-zinc-600">
                Free to join. No spam. Unsubscribe notifications anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REFERRAL CTA ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-2xl">
            🎁
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Earn 50 Free AI Credits
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-zinc-400">
            Invite your friends to NightWaveAI. When they sign up and run their
            first generation, you both earn 50 free credits. No limits.
          </p>
          <Link
            href="/referral"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105"
          >
            Start Referring →
          </Link>
        </div>
      </section>

      {/* ===== GALLERY CTA ===== */}
      <section className="border-t border-zinc-800/50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            See What Others Are Creating
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-zinc-400">
            Browse the community gallery for inspiration. Thousands of stunning
            AI-generated videos and images — all created with NightWaveAI.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105"
          >
            Explore Gallery →
          </Link>
        </div>
      </section>
    </div>
  );
}

const showcaseDemos = [
  {
    title: "Neon City — Text to Image",
    desc: "A futuristic neon-lit city at sunset with flying cars and holographic billboards, 4K photorealistic.",
    icon: "🖼️",
    label: "Text → Image",
    href: "/text2image",
    gradient: "from-cyan-900/60 via-blue-900/40 to-zinc-900",
  },
  {
    title: "Robot Dance — Image to Video",
    desc: "A robot breaking into dance in a neon alleyway — static image brought to life with fluid motion.",
    icon: "🎬",
    label: "Image → Video",
    href: "/img2video",
    gradient: "from-purple-900/60 via-pink-900/40 to-zinc-900",
  },
  {
    title: "Cyberpunk Chase — Wan 2.7",
    desc: "High-speed hoverbike chase through a densely packed neon metropolis, 1080p cinematic quality.",
    icon: "🔥",
    label: "Wan 2.7",
    href: "/wan2.5",
    gradient: "from-rose-900/60 via-orange-900/40 to-zinc-900",
  },
];

const features = [
  {
    title: "Text to Image",
    icon: "🖼️",
    description:
      "Transform your words into stunning, high-quality AI images in 4K resolution.",
    href: "/text2image",
  },
  {
    title: "Image to Video",
    icon: "🎬",
    description:
      "Bring your static images to life with fluid motion and dynamic animations.",
    href: "/img2video",
  },
  {
    title: "Generate Audio",
    icon: "🔊",
    description:
      "Bring your videos to life with AI-generated sound effects and audio.",
    href: "/add-audio",
  },
  {
    title: "Wan 2.7-spicy",
    icon: "🔥",
    description:
      "Next-gen video synthesis with audio. Stunning lifelike motion in 1080p.",
    href: "/wan2.5",
  },
  {
    title: "Extend Video",
    icon: "⏩",
    description:
      "Make your videos longer — AI generates continuations from the last frame.",
    href: "/extendVideo",
  },
  {
    title: "Referral Rewards",
    icon: "🎁",
    description:
      "Invite friends and earn 50 free credits each. Unlimited referrals, unlimited rewards.",
    href: "/referral",
  },
];

const testimonials = [
  {
    name: "NeonViper",
    role: "Digital Artist",
    quote:
      "NightWaveAI completely changed my creative workflow. The image-to-video quality is mind-blowing — I went from static concept art to full motion pieces in minutes.",
  },
  {
    name: "GlitchQueen",
    role: "Content Creator",
    quote:
      "I was skeptical at first, but the Wan 2.7 model produces results that look like they took days to render. My YouTube thumbnails have never looked better.",
  },
  {
    name: "CyberPunk_2077",
    role: "Indie Game Dev",
    quote:
      "Using NightWaveAI for my game's cutscenes saved me months of animation work. The AI understands motion physics better than any other tool I've tried.",
  },
  {
    name: "PromptWizard",
    role: "AI Enthusiast",
    quote:
      "The text-to-image quality at 4K resolution is unmatched. I've tried every AI image generator out there and NightWaveAI consistently produces the best results.",
  },
  {
    name: "NightOwl",
    role: "Music Producer",
    quote:
      "The add-audio feature is a game-changer. I can generate music videos with perfectly synced AI audio — something that used to take weeks now takes hours.",
  },
  {
    name: "RetroGamer",
    role: "Streamer",
    quote:
      "Being able to extend my clips with AI is incredible. I upload a 5-second clip and get a full 15-second scene back. My viewers think I have a production team.",
  },
];
