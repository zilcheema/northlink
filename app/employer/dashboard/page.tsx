"use client";

import Link from "next/link";
import { Briefcase, Users, Eye, TrendingUp, Plus } from "lucide-react";

// Mock data
const stats = {
  activeJobs: 8,
  totalApplications: 142,
  views: 1250,
  avgResponseTime: "2.5 days",
};

const recentJobs = [
  {
    id: "1",
    title: "Senior React Developer",
    applications: 24,
    views: 156,
    status: "active",
  },
  {
    id: "2",
    title: "UX Designer",
    applications: 18,
    views: 142,
    status: "active",
  },
  {
    id: "3",
    title: "Marketing Manager",
    applications: 12,
    views: 98,
    status: "active",
  },
];

export default function EmployerDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
            <p className="mt-2 text-gray-600">Manage your job postings and applicants</p>
          </div>
          <Link
            href="/post"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            <Plus size={18} />
            Post New Job
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Jobs</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeJobs}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Briefcase className="h-6 w-6 text-blue-900" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalApplications}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.views.toLocaleString()}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Response Time</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.avgResponseTime}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Recent Job Postings</h2>
              <Link href="/employer/jobs" className="text-sm text-red-600 hover:text-red-700">
                View all →
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentJobs.map((job) => (
              <Link
                key={job.id}
                href={`/employer/jobs/${job.id}`}
                className="block p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {job.applications} applications
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={16} />
                        {job.views} views
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {job.status}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-400">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/post"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Plus className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Post a Job</h3>
                <p className="text-sm text-gray-600">Create a new job posting</p>
              </div>
            </div>
          </Link>

          <Link
            href="/employer/jobs"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Briefcase className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Manage Jobs</h3>
                <p className="text-sm text-gray-600">View and edit your job postings</p>
              </div>
            </div>
          </Link>

          <Link
            href="/employer/settings"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Settings</h3>
                <p className="text-sm text-gray-600">Manage company settings</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

