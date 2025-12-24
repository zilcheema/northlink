"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MapPin, DollarSign, Briefcase, Shield, Share2, Heart, ArrowLeft } from "lucide-react";

// Mock data - in real app, fetch by ID
const mockJob = {
  id: "1",
  title: "Senior React Developer",
  company: "TechCorp Canada",
  location: "Toronto",
  province: "ON",
  type: "Full-time",
  salaryMin: 90000,
  salaryMax: 120000,
  requireVerification: true,
  postedDate: "2025-01-15",
  description: `We are looking for an experienced Senior React Developer to join our growing team. You will be responsible for building and maintaining high-quality web applications using React and modern JavaScript frameworks.

## Responsibilities:
- Develop and maintain React-based web applications
- Collaborate with cross-functional teams to design and implement new features
- Write clean, maintainable, and well-documented code
- Participate in code reviews and provide constructive feedback
- Stay up-to-date with the latest React and web development trends

## Requirements:
- 5+ years of experience with React and JavaScript
- Strong understanding of React hooks, context, and state management
- Experience with TypeScript
- Familiarity with modern build tools (Webpack, Vite)
- Excellent problem-solving and communication skills

## Benefits:
- Competitive salary and benefits package
- Flexible work arrangements
- Professional development opportunities
- Health and dental insurance
- RRSP matching program`,
  companyDescription: "TechCorp Canada is a leading technology company specializing in innovative software solutions for businesses across Canada.",
};

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const [isSaved, setIsSaved] = useState(false);
  const [isVerified] = useState(false); // In real app, check user verification status

  const handleApply = () => {
    if (!isVerified && mockJob.requireVerification) {
      alert("Please verify your identity before applying. Redirecting to verification...");
      return;
    }
    alert("Application submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Jobs
        </Link>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockJob.title}</h1>
                <p className="text-xl text-gray-700 font-medium">{mockJob.company}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-2 rounded-lg border ${
                    isSaved
                      ? "bg-red-50 border-red-200 text-red-600"
                      : "border-gray-300 text-gray-600 hover:bg-gray-50"
                  }`}
                  aria-label={isSaved ? "Unsave job" : "Save job"}
                >
                  <Heart size={20} fill={isSaved ? "currentColor" : "none"} />
                </button>
                <button
                  className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
                  aria-label="Share job"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <MapPin size={18} />
                {mockJob.location}, {mockJob.province}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase size={18} />
                {mockJob.type}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign size={18} />
                ${mockJob.salaryMin.toLocaleString()} - ${mockJob.salaryMax.toLocaleString()} CAD
              </span>
            </div>

            {mockJob.requireVerification && (
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <Shield size={20} className="text-blue-700" />
                <p className="text-sm text-blue-800">
                  This job requires identity verification. Only verified candidates can apply.
                </p>
              </div>
            )}
          </div>

          {/* Job Description */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Job Description</h2>
            <div className="prose max-w-none text-gray-700 whitespace-pre-line">
              {mockJob.description}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About {mockJob.company}</h3>
              <p className="text-gray-700">{mockJob.companyDescription}</p>
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-gray-50 border-t border-gray-200 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Ready to apply?</p>
                {!isVerified && mockJob.requireVerification && (
                  <p className="text-xs text-red-600">
                    Identity verification required to apply
                  </p>
                )}
              </div>
              <button
                onClick={handleApply}
                disabled={!isVerified && mockJob.requireVerification}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

