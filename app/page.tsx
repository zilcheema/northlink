import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hire Local. <span className="text-red-500">Hire Verified.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The only job platform that guarantees applicants are legally entitled to work in Canada. No bots. No offshore spam. 100% Verified Identity.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/signup?type=employer" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                I am Hiring in Canada
              </Link>
              <Link href="/signup?type=seeker" className="text-sm font-semibold leading-6 text-white border border-white/30 px-3.5 py-2.5 rounded-md hover:bg-white/10">
                I Want to Work in Canada <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Compliance First</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why NorthLink is different
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  Identity Verification
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We use bank-grade verification (like Interac®) to confirm applicants are real people located in Canada. We never store passports.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  Legal Right to Work
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Every applicant attests to being a Citizen, Permanent Resident, or holding a valid Work Permit before applying.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}