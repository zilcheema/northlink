import Link from "next/link";
import { Shield, CheckCircle2, Users, MapPin, Lock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">About NorthLink</h1>
          <p className="text-xl text-gray-300">
            The job board that connects Canadian employers with verified, local talent.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            NorthLink was founded to solve a critical problem in the Canadian job market: connecting
            employers with verified, legitimate candidates while filtering out spam, bots, and
            unqualified applicants from outside Canada.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that every job posting deserves real applicants, and every candidate deserves
            a fair chance. That's why we've built identity verification and legal work authorization
            checks directly into our platform.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">For Job Seekers</h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Create your account with email and password</li>
                <li>Attest to your legal right to work in Canada</li>
                <li>Verify your identity through our secure third-party provider</li>
                <li>Browse and apply to verified job postings</li>
              </ol>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">For Employers</h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Verify your company email domain</li>
                <li>Post job openings with our simple form</li>
                <li>Choose to require identity verification for applicants</li>
                <li>Receive applications only from verified, eligible candidates</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose NorthLink</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-blue-900 mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Identity Verification</h3>
              <p className="text-gray-600">
                Bank-grade verification ensures every applicant is a real person located in Canada.
                We never see or store your ID documents.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-blue-900 mb-4">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-gray-600">
                Every candidate attests to their legal right to work in Canada before applying,
                ensuring compliance with Canadian labour laws.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-blue-900 mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">
                PIPEDA compliant. Your data is hosted in Canada and protected by industry-leading
                security measures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Canada's verified workforce or find your next great hire.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/signup?type=seeker"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-gray-50"
            >
              Browse Jobs
            </Link>
            <Link
              href="/signup?type=employer"
              className="rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-slate-900"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

