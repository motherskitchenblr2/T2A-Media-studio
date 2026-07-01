import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NightWaveAI",
  description: "NightWaveAI terms of service — rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-white">Terms of Service</h1>
        <p className="mb-8 text-sm text-zinc-500">Last updated: June 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-sm text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using NightWaveAI (&ldquo;the Service&rdquo;), you agree to be bound by
              these Terms of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Account Registration</h2>
            <p>
              You must be at least 18 years old to create an account. You are responsible for maintaining
              the confidentiality of your account credentials and for all activities under your account.
              Each person may maintain only one account unless explicitly authorized.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Credits & Payments</h2>
            <p>
              AI generations consume credits as displayed on the pricing page. Credits are non-refundable
              except where required by law. Free daily credits reset at midnight UTC. We reserve the right
              to modify pricing and credit costs with 30 days&apos; notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Content Guidelines</h2>
            <p>You agree not to use the Service to generate or upload:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Illegal content or content that violates applicable laws</li>
              <li>Content that infringes on intellectual property rights</li>
              <li>Content involving minors in inappropriate contexts</li>
              <li>Content that promotes violence, harassment, or hate speech</li>
              <li>Content designed to deceive, defraud, or impersonate others</li>
            </ul>
            <p className="mt-2">
              Wan 2.2 supports NSFW content generation for consenting adults only. All such content
              must comply with our content policy and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>
              You retain ownership of the content you upload. For content you generate using our Service,
              you are granted a worldwide, non-exclusive license to use, distribute, and monetize the output.
              NightWaveAI retains the right to use anonymized generation data to improve our models.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Service Availability</h2>
            <p>
              We strive to maintain high availability but do not guarantee uninterrupted service.
              We may perform maintenance that temporarily affects availability. We are not liable
              for damages resulting from service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>
              NightWaveAI is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable
              for any indirect, incidental, or consequential damages arising from the use of the Service.
              Our total liability is limited to the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these terms or engage
              in abusive behavior. You may delete your account at any time from your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:legal@nightwaveai.com" className="text-cyan-400 hover:text-cyan-300">
                legal@nightwaveai.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
