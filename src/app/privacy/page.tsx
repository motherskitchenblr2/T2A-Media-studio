import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NightWaveAI",
  description: "NightWaveAI privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mb-8 text-sm text-zinc-500">Last updated: June 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-sm text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>
              When you use NightWaveAI, we collect information necessary to provide our services:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Account Information:</strong> Email address, name, and profile details provided during sign-up via Clerk authentication.</li>
              <li><strong>Usage Data:</strong> Generation history, prompts, uploaded images, and tool interactions.</li>
              <li><strong>Payment Information:</strong> Processed securely through Stripe. We do not store full credit card numbers.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies for session management.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain our AI generation services</li>
              <li>To process payments and manage your account</li>
              <li>To improve our AI models and generation quality</li>
              <li>To send service updates, security alerts, and account notifications</li>
              <li>To display your public generations in the community gallery (only if you opt in)</li>
              <li>To comply with legal obligations and prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage & Security</h2>
            <p>
              Your data is stored securely on Supabase infrastructure with encryption at rest and in transit.
              We implement Row-Level Security (RLS) policies to ensure you can only access your own data.
              Uploaded images and generated content are stored in private storage buckets accessible only through authenticated requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>We use the following trusted third-party services:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Clerk:</strong> Authentication and user management</li>
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>Supabase:</strong> Database and file storage</li>
              <li><strong>UseProof:</strong> Social proof notifications</li>
              <li><strong>External AI Providers:</strong> Model inference for generation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time through your
              account settings. You can also request a full data export or account deletion by contacting
              our support team. Public gallery items can be removed by toggling their visibility in your settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>
              For privacy-related inquiries, contact us at{" "}
              <a href="mailto:privacy@nightwaveai.com" className="text-cyan-400 hover:text-cyan-300">
                privacy@nightwaveai.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
