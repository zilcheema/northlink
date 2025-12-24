"use client";

import { useState } from "react";
import { Shield, MapPin, DollarSign, Briefcase, Info } from "lucide-react";

export default function PostJobPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Simple form state management
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    province: "ON",
    type: "Full-time",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requireVerification: true, // Default to true for your niche
    geoFence: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("Job Posted! In a real app, this would save to the database.");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Post a Job</h1>
          <p className="mt-2 text-gray-600">
            Reach candidates who are already verified and legally entitled to work in Canada.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          
          {/* Section 1: Job Details */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-900" />
              Job Details
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              
              {/* Job Title */}
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior React Developer"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 border p-2"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              {/* Employment Type */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 border p-2 bg-white"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Temporary</option>
                </select>
              </div>

              {/* Company Name */}
              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 border p-2"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              {/* Description */}
              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700">Job Description</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 border p-2"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8"></div>

          {/* Section 2: Location & Salary */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2">
              <MapPin size={20} className="text-blue-900" />
              Location & Pay
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              
              {/* City */}
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Calgary"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 border p-2"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              {/* Province */}
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Province</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 border p-2 bg-white"
                  value={formData.province}
                  onChange={(e) => setFormData({...formData, province: e.target.value})}
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

              {/* Salary Min */}
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Min Salary (CAD)</label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-blue-900 focus:ring-blue-900 border p-2"
                    placeholder="50,000"
                    value={formData.salaryMin}
                    onChange={(e) => setFormData({...formData, salaryMin: e.target.value})}
                  />
                </div>
              </div>

               {/* Salary Max */}
               <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Max Salary (CAD)</label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-blue-900 focus:ring-blue-900 border p-2"
                    placeholder="80,000"
                    value={formData.salaryMax}
                    onChange={(e) => setFormData({...formData, salaryMax: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8"></div>

          {/* Section 3: The NorthLink Protection (The Selling Point) */}
          <div className="bg-blue-50 -mx-8 px-8 py-6 border-y border-blue-100">
            <h3 className="text-lg font-medium leading-6 text-blue-900 flex items-center gap-2">
              <Shield size={20} className="text-blue-900" />
              NorthLink Protection
            </h3>
            <p className="mt-1 text-sm text-blue-800 mb-4">
              Configure who can see and apply to this job.
            </p>

            <div className="space-y-4">
              
              {/* Toggle 1: Verified Only */}
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="verification"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                    checked={formData.requireVerification}
                    onChange={(e) => setFormData({...formData, requireVerification: e.target.checked})}
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="verification" className="font-medium text-gray-900">
                    Require Identity Verification
                  </label>
                  <p className="text-gray-500">Only allow candidates who have verified their identity via Interac/Trulioo to apply.</p>
                </div>
              </div>

              {/* Toggle 2: Geo Fencing */}
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="geo"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                    checked={formData.geoFence}
                    onChange={(e) => setFormData({...formData, geoFence: e.target.checked})}
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="geo" className="font-medium text-gray-900">
                    Canadian Geo-Fencing
                  </label>
                  <p className="text-gray-500">Only allow applications from IP addresses located within Canada.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-400"
            >
              {isLoading ? "Posting..." : "Post Job for $0.00"}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
              <Info size={14} /> By posting, you agree to comply with Canadian Human Rights laws.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}