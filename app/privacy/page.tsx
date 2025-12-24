import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="text-blue-900" size={32} />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600">Last updated: January 15, 2025</p>
        </div>

        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p>
              NorthLink Inc. ("we," "our," or "us") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our job board platform. We comply with the Personal Information
              Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian privacy
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, and password</li>
              <li>Resume, cover letter, and other application materials</li>
              <li>Job preferences and search history</li>
              <li>Company information (for employers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Identity Verification</h3>
            <p>
              We use third-party identity verification services (such as Interac Verified or
              Trulioo) to verify your identity. We do not see, store, or have access to your
              government-issued identification documents. The verification provider confirms your
              identity status to us, but we never receive copies of your ID.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process job applications and match candidates with employers</li>
              <li>Verify user identity and eligibility to work in Canada</li>
              <li>Send you job recommendations and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
            <p>
              All data is stored on servers located in Canada. We implement industry-standard
              security measures to protect your personal information, including encryption,
              secure access controls, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Employers:</strong> When you apply to a job, we share your application
                materials with the employer
              </li>
              <li>
                <strong>Identity Verification Providers:</strong> To verify your identity (we do not
                share your ID documents)
              </li>
              <li>
                <strong>Service Providers:</strong> Third-party services that help us operate our
                platform (hosting, analytics, etc.)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p>Under PIPEDA, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Withdraw consent (subject to legal and contractual restrictions)</li>
              <li>File a complaint with the Privacy Commissioner of Canada</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at privacy@northlink.ca
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to improve your experience, analyze usage
              patterns, and provide personalized content. You can control cookies through your
              browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by posting the new policy on this page and updating the "Last
              updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold">NorthLink Inc.</p>
              <p>Email: privacy@northlink.ca</p>
              <p>Address: [Your Address], Canada</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-red-600 hover:text-red-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

