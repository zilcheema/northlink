"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, User, Mail, Phone, MapPin, FileText, CheckCircle2, XCircle, Clock, Filter } from "lucide-react";

// Mock data
const mockJob = {
  id: "1",
  title: "Senior React Developer",
  company: "TechCorp Canada",
};

const applicants = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (416) 555-0101",
    location: "Toronto, ON",
    status: "new",
    appliedDate: "2025-01-15",
    isVerified: true,
    resume: "sarah_johnson_resume.pdf",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (416) 555-0102",
    location: "Toronto, ON",
    status: "reviewed",
    appliedDate: "2025-01-14",
    isVerified: true,
    resume: "michael_chen_resume.pdf",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    phone: "+1 (416) 555-0103",
    location: "Mississauga, ON",
    status: "shortlisted",
    appliedDate: "2025-01-13",
    isVerified: true,
    resume: "emily_rodriguez_resume.pdf",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    phone: "+1 (416) 555-0104",
    location: "Vancouver, BC",
    status: "rejected",
    appliedDate: "2025-01-12",
    isVerified: false,
    resume: "david_kim_resume.pdf",
  },
];

const statusConfig = {
  new: { icon: Clock, color: "bg-gray-100 text-gray-800", label: "New" },
  reviewed: { icon: FileText, color: "bg-blue-100 text-blue-800", label: "Reviewed" },
  shortlisted: { icon: CheckCircle2, color: "bg-green-100 text-green-800", label: "Shortlisted" },
  rejected: { icon: XCircle, color: "bg-red-100 text-red-800", label: "Rejected" },
};

export default function ApplicantsPage() {
  const params = useParams();
  const jobId = params.id as string;
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredApplicants =
    selectedStatus === "all"
      ? applicants
      : applicants.filter((app) => app.status === selectedStatus);

  const handleStatusChange = (applicantId: string, newStatus: string) => {
    alert(`Status changed to ${newStatus} for applicant ${applicantId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href={`/employer/jobs/${jobId}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Job
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Applicants</h1>
          <p className="mt-2 text-gray-600">
            {mockJob.title} at {mockJob.company}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="reviewed">Reviewed</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            Showing {filteredApplicants.length} of {applicants.length} applicants
          </div>
        </div>

        {/* Applicants List */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="divide-y divide-gray-200">
            {filteredApplicants.map((applicant) => {
              const StatusIcon = statusConfig[applicant.status as keyof typeof statusConfig].icon;
              const statusStyle = statusConfig[applicant.status as keyof typeof statusConfig].color;
              const statusLabel = statusConfig[applicant.status as keyof typeof statusConfig].label;

              return (
                <div key={applicant.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white text-lg font-bold">
                          {applicant.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-gray-900">{applicant.name}</h3>
                            {applicant.isVerified && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                Verified
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-1">
                            <span className="flex items-center gap-1">
                              <Mail size={14} />
                              {applicant.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone size={14} />
                              {applicant.phone}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {applicant.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 ml-15">
                        <span className="flex items-center gap-1">
                          <FileText size={14} />
                          {applicant.resume}
                        </span>
                        <span>Applied on {applicant.appliedDate}</span>
                      </div>
                    </div>
                    <div className="ml-6 flex flex-col gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusStyle}`}
                      >
                        <StatusIcon size={14} />
                        {statusLabel}
                      </span>
                      <div className="flex gap-2">
                        <select
                          value={applicant.status}
                          onChange={(e) => handleStatusChange(applicant.id, e.target.value)}
                          className="text-xs px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                        >
                          <option value="new">Mark as New</option>
                          <option value="reviewed">Mark as Reviewed</option>
                          <option value="shortlisted">Shortlist</option>
                          <option value="rejected">Reject</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredApplicants.length === 0 && (
            <div className="p-12 text-center">
              <User className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applicants found</h3>
              <p className="text-gray-600">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

