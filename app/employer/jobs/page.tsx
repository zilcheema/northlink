"use client";

import Link from "next/link";
import { Plus, Eye, Users, Edit, MoreVertical, Briefcase } from "lucide-react";

// Mock data
const jobs = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "TechCorp Canada",
    location: "Toronto, ON",
    applications: 24,
    views: 156,
    status: "active",
    postedDate: "2025-01-10",
  },
  {
    id: "2",
    title: "UX Designer",
    company: "Design Studio Inc",
    location: "Vancouver, BC",
    applications: 18,
    views: 142,
    status: "active",
    postedDate: "2025-01-08",
  },
  {
    id: "3",
    title: "Marketing Manager",
    company: "Growth Partners",
    location: "Calgary, AB",
    applications: 12,
    views: 98,
    status: "active",
    postedDate: "2025-01-05",
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Montreal, QC",
    applications: 8,
    views: 67,
    status: "closed",
    postedDate: "2024-12-20",
  },
];

const statusColors = {
  active: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
  draft: "bg-yellow-100 text-yellow-800",
};

export default function EmployerJobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Postings</h1>
            <p className="mt-2 text-gray-600">Manage all your job postings</p>
          </div>
          <Link
            href="/post"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            <Plus size={18} />
            Post New Job
          </Link>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {jobs.length} Job{jobs.length !== 1 ? "s" : ""} Posted
              </h2>
              <div className="flex gap-2">
                <select className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Closed</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          statusColors[job.status as keyof typeof statusColors]
                        }`}
                      >
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 font-medium mb-3">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>Posted {job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Users size={16} />
                        {job.applications} applications
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Eye size={16} />
                        {job.views} views
                      </span>
                    </div>
                  </div>
                  <div className="ml-6 flex gap-2">
                    <Link
                      href={`/employer/jobs/${job.id}/applicants`}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      View Applicants
                    </Link>
                    <Link
                      href={`/employer/jobs/${job.id}`}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 flex items-center gap-1"
                    >
                      <Edit size={16} />
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {jobs.length === 0 && (
            <div className="p-12 text-center">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs posted yet</h3>
              <p className="text-gray-600 mb-4">Start by posting your first job opening.</p>
              <Link
                href="/post"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700"
              >
                <Plus size={18} />
                Post Your First Job
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

