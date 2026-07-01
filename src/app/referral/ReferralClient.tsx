"use client";

import { useState } from "react";
import Link from "next/link";

interface ReferralEntry {
  id: string;
  name: string;
  date: string;
  status: "completed" | "pending";
  credits: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number;
  credits: number;
  avatar: string;
}

interface ReferralData {
  referralCode: string;
  referralLink: string;
  creditsEarned: number;
  totalReferrals: number;
  pendingReferrals: number;
  recentReferrals: ReferralEntry[];
}

interface ReferralClientProps {
  referralData: ReferralData;
  leaderboard: LeaderboardEntry[];
}

export default function ReferralClient({ referralData, leaderboard }: ReferralClientProps) {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralData.referralLink);
    } catch {
      const input = document.createElement("input");
      input.value = referralData.referralLink;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-zinc-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Rewards Program
            </div>

            <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Earn{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                50 Free AI Credits
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-zinc-400">
              Invite fellow creators to NightWaveAI. For every friend who signs up
              and runs their first generation, you both earn 50 free credits.
            </p>

            {/* Referral Link Box */}
            <div className="w-full max-w-lg">
              <label className="mb-2 block text-left text-xs font-medium uppercase tracking-wider text-zinc-500">
                Your Referral Link
              </label>
              <div className="flex overflow-hidden rounded-xl border border-zinc-700/60 bg-zinc-900/60">
                <input
                  type="text"
                  readOnly
                  value={referralData.referralLink}
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-zinc-300 outline-none font-mono"
                />
                <button
                  onClick={copyReferralLink}
                  className={`shrink-0 px-5 text-sm font-semibold transition-all cursor-pointer ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500"
                  }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="mt-2 text-xs text-zinc-600">
                Share this link anywhere — social media, Discord, email, or your blog.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ===== STATS CARDS ===== */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 text-center">
              <div className="mb-2 text-3xl text-emerald-400">{referralData.creditsEarned}</div>
              <div className="text-sm text-zinc-500">Credits Earned</div>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 text-center">
              <div className="mb-2 text-3xl text-cyan-400">{referralData.totalReferrals}</div>
              <div className="text-sm text-zinc-500">Successful Referrals</div>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 text-center">
              <div className="mb-2 text-3xl text-purple-400">{referralData.pendingReferrals}</div>
              <div className="text-sm text-zinc-500">Pending</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-t border-zinc-800/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
            How It Works
          </h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                icon: "🔗",
                title: "Share Your Link",
                desc: "Copy your unique referral link and share it with friends on any platform.",
              },
              {
                step: "02",
                icon: "✨",
                title: "They Sign Up & Create",
                desc: "When a friend signs up using your link and runs their first AI generation, they're verified.",
              },
              {
                step: "03",
                icon: "🎁",
                title: "You Both Earn 50 Credits",
                desc: "Once verified, you and your friend each receive 50 free AI credits. No limits!",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/40"
              >
                <div className="mb-2 text-xs font-bold tracking-widest text-zinc-700 group-hover:text-cyan-500 transition-colors">
                  {item.step}
                </div>
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHARE BUTTONS ===== */}
      <section className="border-t border-zinc-800/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-6 text-lg font-semibold text-zinc-300">
            Share your link now
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              {
                label: "X / Twitter",
                href: `https://twitter.com/intent/tweet?text=${encodeURIComponent("Join me on NightWaveAI and get 50 free AI credits! Use my link: " + referralData.referralLink)}`,
                bg: "hover:bg-zinc-700 hover:text-cyan-400",
              },
              {
                label: "Facebook",
                href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralData.referralLink)}`,
                bg: "hover:bg-zinc-700 hover:text-blue-400",
              },
              {
                label: "Reddit",
                href: `https://www.reddit.com/submit?url=${encodeURIComponent(referralData.referralLink)}&title=${encodeURIComponent("Earn 50 free AI credits on NightWaveAI!")}`,
                bg: "hover:bg-zinc-700 hover:text-orange-400",
              },
              {
                label: "Discord",
                href: "#",
                bg: "hover:bg-zinc-700 hover:text-indigo-400",
              },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-400 transition-all ${btn.bg}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT REFERRALS TABLE ===== */}
      <section className="border-t border-zinc-800/50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Recent Referrals</h2>

          <div className="overflow-hidden rounded-xl border border-zinc-800/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-800/60 bg-zinc-900/40">
                  <th className="px-4 py-3 font-medium text-zinc-500">User</th>
                  <th className="px-4 py-3 font-medium text-zinc-500">Date</th>
                  <th className="px-4 py-3 font-medium text-zinc-500">Status</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-500">Credits</th>
                </tr>
              </thead>
              <tbody>
                {referralData.recentReferrals.map((ref) => (
                  <tr
                    key={ref.id}
                    className="border-b border-zinc-800/30 last:border-b-0 transition-colors hover:bg-zinc-900/30"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-500">
                          {ref.name.charAt(0)}
                        </div>
                        <span className="text-zinc-300">{ref.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-zinc-600">{ref.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                          ref.status === "completed"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            ref.status === "completed" ? "bg-emerald-400" : "bg-yellow-400"
                          }`}
                        />
                        {ref.status === "completed" ? "Completed" : "Pending"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={ref.credits > 0 ? "text-emerald-400 font-medium" : "text-zinc-600"}>
                        {ref.credits > 0 ? `+${ref.credits}` : "—"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== LEADERBOARD ===== */}
      <section className="border-t border-zinc-800/50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white">🏆 Top Referrers</h2>

          <div className="space-y-2">
            {leaderboard.map((entry) => {
              const rankColors: Record<number, string> = {
                1: "from-yellow-500 to-amber-600",
                2: "from-zinc-400 to-zinc-500",
                3: "from-amber-600 to-amber-700",
              };

              return (
                <div
                  key={entry.rank}
                  className="flex items-center gap-4 rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/40"
                >
                  {/* Rank */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      entry.rank <= 3
                        ? `bg-gradient-to-br ${rankColors[entry.rank] ?? "from-zinc-500 to-zinc-600"} text-black`
                        : "bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {entry.rank}
                  </div>

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-500">
                      {entry.avatar}
                    </div>
                    <span className="text-sm font-medium text-zinc-300 truncate">
                      {entry.name}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm shrink-0">
                    <div className="text-right">
                      <div className="text-zinc-300 font-medium">{entry.referrals}</div>
                      <div className="text-xs text-zinc-600">referrals</div>
                    </div>
                    <div className="text-right min-w-[60px]">
                      <div className="text-emerald-400 font-medium">{entry.credits}</div>
                      <div className="text-xs text-zinc-600">credits</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-t border-zinc-800/50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How do I earn credits from referrals?",
                a: "Share your unique referral link. When someone signs up through your link and completes their first AI generation, you both receive 50 free credits.",
              },
              {
                q: "Is there a limit to how many credits I can earn?",
                a: "No! There's no cap on referral earnings. Invite as many friends as you want and keep earning 50 credits per successful referral.",
              },
              {
                q: "How long does it take for credits to appear?",
                a: "Credits are added to your account within minutes after your referral completes their first generation. You'll see them in your dashboard.",
              },
              {
                q: "Can I share my link anywhere?",
                a: "Yes! Share on social media, Discord servers, YouTube, your blog, or directly with friends. Any platform is fine as long as it's organic.",
              },
              {
                q: "What happens if someone uses my link but doesn't generate?",
                a: "Credits are only awarded when the referred user completes at least one AI generation. This prevents abuse and ensures quality referrals.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-zinc-800/60 bg-zinc-900/20 transition-all hover:border-zinc-700"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-zinc-300 select-none">
                  {faq.q}
                  <svg
                    className="h-4 w-4 shrink-0 text-zinc-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-zinc-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-zinc-800/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to start earning?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Every friend you bring to NightWaveAI means more free generations for both of you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <button
              onClick={copyReferralLink}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105 cursor-pointer"
            >
              {copied ? "✓ Link Copied!" : "Copy My Referral Link"}
            </button>
            <Link
              href="/gallery"
              className="rounded-full border border-zinc-700 bg-zinc-900/60 px-8 py-3 text-base font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800/80"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
