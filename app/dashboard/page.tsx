"use client";

import Link from "next/link";
import { Briefcase, FileText, Shield, CheckCircle2, Clock, TrendingUp } from "lucide-react";

// Mock data
const mockStats = {
  applications: 12,
  savedJobs: 5,
  isVerified: true,
  profileComplete: 85,
};

const recentApplications = [
  {
    id: "1",
    jobTitle: "Senior React Developer",
    company: "TechCorp Canada",
    status: "submitted",
    date: "2025-01-15",
  },
  {
    id: "2",
    jobTitle: "UX Designer",
    company: "Design Studio Inc",
    status: "viewed",
    date: "2025-01-14",
  },
  {
    id: "3",
    jobTitle: "Product Manager",
    company: "Innovation Labs",
    status: "shortlisted",
    date: "2025-01-10",
  },
];

const savedJobs = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "TechCorp Canada",
    location: "Toronto, ON",
  },
  {
    id: "2",
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Montreal, QC",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here's your job search overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Applications</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{mockStats.applications}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <FileText className="h-6 w-6 text-blue-900" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Saved Jobs</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{mockStats.savedJobs}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Briefcase className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Verification</p>
                <p className="text-sm font-semibold text-gray-900 mt-2 flex items-center gap-1">
                  {mockStats.isVerified ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Verified
                    </>
                  ) : (
                    "Not Verified"
                  )}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Profile Complete</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{mockStats.profileComplete}%</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
              <Link href="/applications" className="text-sm text-red-600 hover:text-red-700">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{app.jobTitle}</h3>
                      <p className="text-sm text-gray-600">{app.company}</p>
                      <p className="text-xs text-gray-500 mt-1">Applied {app.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        app.status === "shortlisted"
                          ? "bg-green-100 text-green-800"
                          : app.status === "viewed"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Jobs */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Saved Jobs</h2>
              <Link href="/jobs" className="text-sm text-red-600 hover:text-red-700">
                Browse more
              </Link>
            </div>
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/jobs/${job.id}`}
                  className="block border-b border-gray-200 pb-4 last:border-0 last:pb-0 hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{job.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/jobs"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Briefcase className="h-6 w-6 text-blue-900" />
              <span className="font-medium text-gray-900">Browse Jobs</span>
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <TrendingUp className="h-6 w-6 text-blue-900" />
              <span className="font-medium text-gray-900">Update Profile</span>
            </Link>
            {!mockStats.isVerified && (
              <Link
                href="/signup"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Shield className="h-6 w-6 text-blue-900" />
                <span className="font-medium text-gray-900">Verify Identity</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

