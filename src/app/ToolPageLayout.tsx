import Link from "next/link";

interface SampleOutput {
  title: string;
  prompt: string;
  gradient: string;
}

interface ToolPageLayoutProps {
  toolIcon: string;
  toolName: string;
  toolBadge: string;
  badgeGradient: string;
  description: string;
  inputPlaceholder: string;
  inputHint: string;
  sampleOutputs: SampleOutput[];
}

export default function ToolPageLayout({
  toolIcon,
  toolName,
  toolBadge,
  badgeGradient,
  description,
  inputPlaceholder,
  inputHint,
  sampleOutputs,
}: ToolPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid lg:grid-cols-2 lg:h-[calc(100vh-65px)]">
          {/* ===== LEFT: Input Panel ===== */}
          <div className="flex flex-col border-r border-zinc-800/50 p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/60 px-3 py-1 text-sm">
                <span>{toolIcon}</span>
                <span className="text-zinc-400">{toolBadge}</span>
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">{toolName}</h1>
              <p className="mt-3 text-sm text-zinc-500 leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            {/* Prompt Input */}
            <div className="flex-1 flex flex-col">
              <label className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Your Prompt
              </label>
              <textarea
                placeholder={inputPlaceholder}
                rows={4}
                className="w-full rounded-xl border border-zinc-700/60 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-600 outline-none transition-colors focus:border-cyan-500/50 focus:bg-zinc-900 resize-none"
              />

              {/* Prompt suggestions */}
              <details className="mt-3 group">
                <summary className="flex cursor-pointer items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors select-none">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  Need ideas? Show prompt suggestions
                </summary>
                <div className="mt-3 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-3">
                  <p className="text-xs text-zinc-500 leading-relaxed">{inputHint}</p>
                </div>
              </details>

              {/* Generate button */}
              <div className="mt-6">
                <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-[1.02] cursor-pointer">
                  Generate →
                </button>
                <p className="mt-2 text-center text-xs text-zinc-600">
                  Cost: 5 credits per generation
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Output Panel ===== */}
          <div className="flex flex-col bg-zinc-950/50 p-6 sm:p-8 lg:p-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                Output
              </h2>
              <span className="text-xs text-zinc-600">Preview</span>
            </div>

            {/* Main output area */}
            <div className="flex-1 rounded-2xl border border-dashed border-zinc-700/40 bg-zinc-900/30 flex items-center justify-center mb-6">
              <div className="text-center p-8">
                <div className="mb-3 text-5xl opacity-30">{toolIcon}</div>
                <p className="text-sm text-zinc-600">
                  Your generated content will appear here.
                </p>
                <p className="mt-1 text-xs text-zinc-700">
                  Enter a prompt on the left and click Generate to start.
                </p>
              </div>
            </div>

            {/* Sample outputs */}
            <div>
              <h3 className="mb-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Example Generations
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {sampleOutputs.map((sample) => (
                  <div
                    key={sample.title}
                    className="group relative overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/40 transition-all hover:border-zinc-700 cursor-pointer"
                  >
                    <div className={`aspect-square bg-gradient-to-br ${sample.gradient} flex items-center justify-center`}>
                      <span className="text-2xl opacity-20">{toolIcon}</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2">
                      <div className="text-[10px] font-medium text-zinc-300 truncate">
                        {sample.title}
                      </div>
                      <div className="text-[9px] text-zinc-500 truncate">
                        {sample.prompt.length > 40 ? sample.prompt.slice(0, 40) + "…" : sample.prompt}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM: More examples ===== */}
      <section className="border-t border-zinc-800/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-2 text-sm font-semibold text-zinc-500 uppercase tracking-wider">
            More from the Community
          </h3>
          <p className="mb-6 text-zinc-400">
            See what others have created with {toolName}
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800/80"
          >
            Browse Gallery →
          </Link>
        </div>
      </section>
    </div>
  );
}
