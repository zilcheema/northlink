import Link from "next/link";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-blue-900" size={32} />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-gray-600">Last updated: January 15, 2025</p>
        </div>

        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using NorthLink ("the Platform"), you agree to be bound by these Terms
              of Service ("Terms"). If you disagree with any part of these terms, you may not
              access the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">For Job Seekers</h3>
            <p>
              You must be at least 18 years old and legally entitled to work in Canada (as a
              citizen, permanent resident, or holder of a valid work permit) to use our platform as
              a job seeker.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">For Employers</h3>
            <p>
              You must use an official company email address to post jobs. We verify company
              domains to ensure legitimate job postings. Public email providers (Gmail, Yahoo, etc.)
              are not permitted for employer accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Identity Verification</h2>
            <p>
              Job seekers may be required to verify their identity through third-party providers.
              This verification is used to confirm that applicants are real people located in
              Canada. We do not see, store, or have access to your identification documents.
            </p>
            <p className="mt-4">
              Employers may require identity verification for job applications. By applying to such
              jobs, you consent to the verification process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Job Postings</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Employer Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Post only legitimate job openings</li>
              <li>Provide accurate job descriptions and requirements</li>
              <li>Comply with Canadian Human Rights laws and employment standards</li>
              <li>Respond to applications in a timely manner</li>
              <li>Do not discriminate based on protected grounds</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Prohibited Content</h3>
            <p>Job postings must not contain:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Discriminatory language or requirements</li>
              <li>Pyramid schemes or multi-level marketing</li>
              <li>Requests for upfront payment or fees</li>
              <li>Misleading or fraudulent information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applications</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You may only apply to jobs for which you are qualified</li>
              <li>You must provide accurate information in your application</li>
              <li>You may not apply to the same job multiple times</li>
              <li>Applications are shared with employers and cannot be withdrawn after submission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Platform for any illegal purpose</li>
              <li>Impersonate any person or entity</li>
              <li>Harvest or collect information about other users</li>
              <li>Interfere with or disrupt the Platform's operation</li>
              <li>Use automated systems to access the Platform without permission</li>
              <li>Post false, misleading, or fraudulent information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p>
              The Platform and its content, including logos, text, graphics, and software, are
              owned by NorthLink Inc. and protected by Canadian and international copyright laws.
              You may not reproduce, distribute, or create derivative works without our written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p>
              NorthLink acts as a platform connecting job seekers and employers. We are not
              responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The accuracy of job postings or applications</li>
              <li>Employment decisions made by employers</li>
              <li>Disputes between job seekers and employers</li>
              <li>Verification outcomes from third-party providers</li>
            </ul>
            <p className="mt-4">
              To the maximum extent permitted by law, NorthLink shall not be liable for any indirect,
              incidental, special, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time, with or
              without cause, if you violate these Terms or engage in fraudulent or illegal
              activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify users of material changes by
              posting the updated Terms on this page. Your continued use of the Platform after
              changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p>
              These Terms are governed by the laws of Canada and the province in which NorthLink
              operates. Any disputes shall be resolved in the appropriate Canadian courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p>If you have questions about these Terms, please contact us at:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold">NorthLink Inc.</p>
              <p>Email: legal@northlink.ca</p>
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

