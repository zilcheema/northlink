"use client";

import Link from "next/link";
import { FileText, Clock, CheckCircle2, XCircle, Eye } from "lucide-react";

// Mock data
const applications = [
  {
    id: "1",
    jobTitle: "Senior React Developer",
    company: "TechCorp Canada",
    location: "Toronto, ON",
    status: "submitted",
    date: "2025-01-15",
    salary: "$90,000 - $120,000",
  },
  {
    id: "2",
    jobTitle: "UX Designer",
    company: "Design Studio Inc",
    location: "Vancouver, BC",
    status: "viewed",
    date: "2025-01-14",
    salary: "$75,000 - $95,000",
  },
  {
    id: "3",
    jobTitle: "Product Manager",
    company: "Innovation Labs",
    location: "Ottawa, ON",
    status: "shortlisted",
    date: "2025-01-10",
    salary: "$100,000 - $130,000",
  },
  {
    id: "4",
    jobTitle: "Data Analyst",
    company: "Analytics Pro",
    location: "Montreal, QC",
    status: "rejected",
    date: "2025-01-08",
    salary: "$70,000 - $90,000",
  },
];

const statusConfig = {
  submitted: { icon: Clock, color: "bg-gray-100 text-gray-800", label: "Submitted" },
  viewed: { icon: Eye, color: "bg-blue-100 text-blue-800", label: "Viewed" },
  shortlisted: { icon: CheckCircle2, color: "bg-green-100 text-green-800", label: "Shortlisted" },
  rejected: { icon: XCircle, color: "bg-red-100 text-red-800", label: "Rejected" },
};

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
          <p className="mt-2 text-gray-600">Track the status of your job applications</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {applications.length} Application{applications.length !== 1 ? "s" : ""}
              </h2>
              <Link
                href="/jobs"
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                Browse Jobs →
              </Link>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {applications.map((app) => {
              const StatusIcon = statusConfig[app.status as keyof typeof statusConfig].icon;
              const statusStyle = statusConfig[app.status as keyof typeof statusConfig].color;
              const statusLabel = statusConfig[app.status as keyof typeof statusConfig].label;

              return (
                <div key={app.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{app.jobTitle}</h3>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusStyle}`}>
                          <StatusIcon size={14} />
                          {statusLabel}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 font-medium mb-2">{app.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{app.location}</span>
                        <span>•</span>
                        <span>{app.salary}</span>
                      </div>
                      <p className="text-sm text-gray-500">Applied on {app.date}</p>
                    </div>
                    <div className="ml-6 flex gap-2">
                      <Link
                        href={`/jobs/${app.id}`}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        View Job
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {applications.length === 0 && (
            <div className="p-12 text-center">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
              <p className="text-gray-600 mb-4">Start applying to jobs to see them here.</p>
              <Link
                href="/jobs"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700"
              >
                Browse Jobs
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

