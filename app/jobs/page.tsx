"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, DollarSign, Briefcase, Shield, Filter } from "lucide-react";

// Mock data
const mockJobs = [
  {
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
  },
  {
    id: "2",
    title: "UX Designer",
    company: "Design Studio Inc",
    location: "Vancouver",
    province: "BC",
    type: "Full-time",
    salaryMin: 75000,
    salaryMax: 95000,
    requireVerification: true,
    postedDate: "2025-01-14",
  },
  {
    id: "3",
    title: "Marketing Manager",
    company: "Growth Partners",
    location: "Calgary",
    province: "AB",
    type: "Full-time",
    salaryMin: 80000,
    salaryMax: 100000,
    requireVerification: false,
    postedDate: "2025-01-13",
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Montreal",
    province: "QC",
    type: "Contract",
    salaryMin: 70000,
    salaryMax: 90000,
    requireVerification: true,
    postedDate: "2025-01-12",
  },
  {
    id: "5",
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Ottawa",
    province: "ON",
    type: "Full-time",
    salaryMin: 100000,
    salaryMax: 130000,
    requireVerification: true,
    postedDate: "2025-01-11",
  },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProvince = selectedProvince === "all" || job.province === selectedProvince;
    const matchesType = selectedType === "all" || job.type === selectedType;
    return matchesSearch && matchesProvince && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Opportunity</h1>
          <p className="text-gray-600">Browse verified jobs from Canadian employers</p>

          {/* Search Bar */}
          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs, companies..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter size={18} />
              Filters
            </button>
            {showFilters && (
              <div className="flex gap-4">
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                >
                  <option value="all">All Provinces</option>
                  <option value="ON">Ontario</option>
                  <option value="BC">British Columbia</option>
                  <option value="AB">Alberta</option>
                  <option value="QC">Quebec</option>
                  <option value="MB">Manitoba</option>
                  <option value="SK">Saskatchewan</option>
                  <option value="NS">Nova Scotia</option>
                  <option value="NB">New Brunswick</option>
                  <option value="NL">Newfoundland</option>
                  <option value="PE">PEI</option>
                </select>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                >
                  <option value="all">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""}
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    {job.requireVerification && (
                      <span className="flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        <Shield size={12} />
                        Verified Only
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-3">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}, {job.province}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={16} />
                      ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 ml-4">Posted {job.postedDate}</div>
              </div>
            </Link>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedProvince("all");
                setSelectedType("all");
              }}
              className="mt-4 text-blue-900 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

