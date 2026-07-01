import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NightWaveAI - Free AI Video Generator & Image Creator",
    template: "%s | NightWaveAI",
  },
  description:
    "Create stunning AI videos and images in seconds. Turn your imagination into reality with our free AI video generator and image creator.",
  keywords: [
    "AI video generator",
    "AI image creator",
    "text to image",
    "image to video",
    "AI art",
    "NSFW AI",
    "Wan AI",
  ],
  openGraph: {
    type: "website",
    siteName: "NightWaveAI",
    title: "NightWaveAI - Free AI Video Generator & Image Creator",
    description:
      "Create stunning AI videos and images in seconds. Turn your imagination into reality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-200">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-black/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-white hover:text-cyan-400 transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-sm font-bold text-white">
                N
              </div>
              <span className="hidden sm:inline">NightWaveAI</span>
            </Link>

            {/* Nav links */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/gallery"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white hover:bg-zinc-800/60"
              >
                Gallery
              </Link>
              <Link
                href="/text2image"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white hover:bg-zinc-800/60"
              >
                Create
              </Link>
              <Link
                href="/pricing"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white hover:bg-zinc-800/60"
              >
                Pricing
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-white hover:bg-zinc-800/60"
              >
                Dashboard
              </Link>
              <div className="ml-2 flex items-center gap-2">
                <Link
                  href="/pricing"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-800/50 py-8">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-sm text-zinc-500 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-zinc-300 transition-colors">
                  Terms
                </Link>
                <Link href="/referral" className="hover:text-zinc-300 transition-colors">
                  Referral
                </Link>
              </div>
              <p>© {new Date().getFullYear()} NightWaveAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
