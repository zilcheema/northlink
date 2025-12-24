"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Edit, Users, Eye, MapPin, DollarSign, Briefcase, Shield, Save } from "lucide-react";

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
  geoFence: true,
  postedDate: "2025-01-10",
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
  applications: 24,
  views: 156,
  status: "active",
};

export default function EmployerJobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: mockJob.title,
    company: mockJob.company,
    location: mockJob.location,
    province: mockJob.province,
    type: mockJob.type,
    salaryMin: mockJob.salaryMin,
    salaryMax: mockJob.salaryMax,
    requireVerification: mockJob.requireVerification,
    geoFence: mockJob.geoFence,
    description: mockJob.description,
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      alert("Job updated successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/employer/jobs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Jobs
        </Link>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            {/* Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="text-3xl font-bold text-gray-900 border-b-2 border-blue-900 focus:outline-none"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold text-gray-900">{mockJob.title}</h1>
                  )}
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="text-xl text-gray-700 font-medium mt-2 border-b-2 border-blue-900 focus:outline-none"
                    />
                  ) : (
                    <p className="text-xl text-gray-700 font-medium mt-2">{mockJob.company}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/employer/jobs/${jobId}/applicants`}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Users size={18} />
                    View Applicants ({mockJob.applications})
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800"
                  >
                    <Edit size={18} />
                    {isEditing ? "Cancel" : "Edit"}
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
                <span className="flex items-center gap-1">
                  <Eye size={18} />
                  {mockJob.views} views
                </span>
              </div>

              {mockJob.requireVerification && (
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <Shield size={20} className="text-blue-700" />
                  <p className="text-sm text-blue-800">
                    This job requires identity verification for applicants.
                  </p>
                </div>
              )}
            </div>

            {/* Job Description */}
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Job Description</h2>
              {isEditing ? (
                <textarea
                  rows={15}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                />
              ) : (
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {mockJob.description}
                </div>
              )}
            </div>

            {/* Settings (if editing) */}
            {isEditing && (
              <div className="p-8 border-t border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    >
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="MB">Manitoba</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="ON">Ontario</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="QC">Quebec</option>
                      <option value="SK">Saskatchewan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Temporary</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Min Salary (CAD)</label>
                    <input
                      type="number"
                      value={formData.salaryMin}
                      onChange={(e) => setFormData({ ...formData, salaryMin: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Salary (CAD)</label>
                    <input
                      type="number"
                      value={formData.salaryMax}
                      onChange={(e) => setFormData({ ...formData, salaryMax: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="verification"
                      checked={formData.requireVerification}
                      onChange={(e) => setFormData({ ...formData, requireVerification: e.target.checked })}
                      className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                    />
                    <label htmlFor="verification" className="ml-3 text-sm font-medium text-gray-900">
                      Require Identity Verification
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="geofence"
                      checked={formData.geoFence}
                      onChange={(e) => setFormData({ ...formData, geoFence: e.target.checked })}
                      className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                    />
                    <label htmlFor="geofence" className="ml-3 text-sm font-medium text-gray-900">
                      Enable Canadian Geo-Fencing
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            {isEditing && (
              <div className="p-8 border-t border-gray-200 bg-gray-50">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <Save size={18} />
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

