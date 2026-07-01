import type { Metadata } from "next";
import ReferralClient from "./ReferralClient";

export const metadata: Metadata = {
  title: "Referral Program - Earn 50 Free AI Credits | NightWaveAI",
  description:
    "Invite friends to NightWaveAI and earn 50 free AI credits for every successful referral. Unlock unlimited free generations with our referral rewards.",
  openGraph: {
    title: "Referral Program - Earn 50 Free AI Credits | NightWaveAI",
    description:
      "Invite friends to NightWaveAI and earn 50 free AI credits for every successful referral.",
    type: "website",
  },
};

// Mock referral data for development
const MOCK_REFERRAL_DATA = {
  referralCode: "NIGHTWAVE-REF-8XK2M",
  referralLink: "https://nightwaveai.com/ref/NIGHTWAVE-REF-8XK2M",
  creditsEarned: 350,
  totalReferrals: 7,
  pendingReferrals: 2,
  recentReferrals: [
    { id: "ref-1", name: "CyberPunk_2077", date: "2 days ago", status: "completed" as const, credits: 50 },
    { id: "ref-2", name: "NeonViper", date: "5 days ago", status: "completed" as const, credits: 50 },
    { id: "ref-3", name: "GlitchQueen", date: "1 week ago", status: "completed" as const, credits: 50 },
    { id: "ref-4", name: "DataWraith", date: "1 week ago", status: "pending" as const, credits: 0 },
    { id: "ref-5", name: "SynthWave404", date: "2 weeks ago", status: "completed" as const, credits: 50 },
  ],
};

// Mock leaderboard
const MOCK_LEADERBOARD = [
  { rank: 1, name: "NeonViper", referrals: 42, credits: 2100, avatar: "N" },
  { rank: 2, name: "GlitchQueen", referrals: 38, credits: 1900, avatar: "G" },
  { rank: 3, name: "CyberPunk_2077", referrals: 31, credits: 1550, avatar: "C" },
  { rank: 4, name: "PromptWizard", referrals: 25, credits: 1250, avatar: "P" },
  { rank: 5, name: "NightOwl", referrals: 19, credits: 950, avatar: "N" },
];

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-black">
      <ReferralClient
        referralData={MOCK_REFERRAL_DATA}
        leaderboard={MOCK_LEADERBOARD}
      />
    </div>
  );
}
