import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - Affordable AI Video & Image Generation | NightWaveAI",
  description:
    "Choose the perfect plan for your creative needs. From free daily generations to unlimited premium access — NightWaveAI offers the most affordable AI creation platform.",
  openGraph: {
    title: "Pricing - Affordable AI Video & Image Generation | NightWaveAI",
    description: "Choose the perfect plan for your creative needs.",
    type: "website",
  },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with free daily generations. Perfect for trying out the platform.",
    gradient: "from-zinc-500 to-zinc-600",
    features: [
      "1 free Image-to-Video per day",
      "5 Text-to-Image generations per day",
      "720p output resolution",
      "Community gallery access",
      "Basic support",
    ],
    cta: "Start Free",
    href: "/img2video",
    featured: false,
  },
  {
    name: "Creator",
    price: "$15",
    period: "/month",
    description: "For serious creators who need more power. The most popular plan.",
    gradient: "from-cyan-500 to-purple-600",
    features: [
      "200 credits per month (~40 videos)",
      "1080p output resolution",
      "All AI tools (Text2Image, Img2Video, Audio, Extend)",
      "Wan 2.7-spicy access",
      "Priority generation queue",
      "Download without watermark",
      "Email support",
    ],
    cta: "Get Creator",
    href: "/pricing",
    featured: true,
  },
  {
    name: "Pro",
    price: "$40",
    period: "/month",
    description: "For power users and professionals who need unlimited creativity.",
    gradient: "from-purple-500 to-pink-600",
    features: [
      "600 credits per month (~120 videos)",
      "4K output resolution",
      "All AI tools + Wan 2.2 access",
      "Uncensored NSFW generation",
      "Fastest generation speed",
      "API access (beta)",
      "Priority email + chat support",
      "Early access to new features",
    ],
    cta: "Go Pro",
    href: "/pricing",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 text-center">
          <div className="mb-3 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Simple,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
            No hidden fees. No surprise charges. Start free and upgrade when you need more.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all ${
                  plan.featured
                    ? "border-cyan-500/30 bg-gradient-to-b from-cyan-950/30 to-zinc-900 shadow-[0_0_30px_rgba(6,182,212,0.08)]"
                    : "border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-zinc-400">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-[1.02]"
                      : "border border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/80"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800/50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What are credits and how do they work?", a: "Credits are the currency for AI generations. Different tools cost different amounts: Text-to-Image costs 5 credits, Image-to-Video costs 20 credits, and Wan models cost 30 credits. Credits never expire." },
              { q: "Can I upgrade or downgrade my plan anytime?", a: "Yes! You can switch plans at any time. When upgrading, you get immediate access to the higher tier. When downgrading, changes take effect at the next billing cycle." },
              { q: "Is there a free trial?", a: "Yes! The Free plan gives you 1 free Image-to-Video generation and 5 Text-to-Image generations every day. No credit card required." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, and cryptocurrency payments through our secure Stripe checkout." },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-zinc-800/60 bg-zinc-900/20 transition-all hover:border-zinc-700">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-zinc-300 select-none">
                  {faq.q}
                  <svg className="h-4 w-4 shrink-0 text-zinc-600 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-zinc-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
