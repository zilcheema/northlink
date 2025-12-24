"use client";

import { useState } from "react";
import { AlertCircle, Check, Lock } from "lucide-react";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    legalStatus: null as boolean | null,
  });

  // Step 2 Logic: Legal Attestation
  const handleAttestation = (isEligible: boolean) => {
    if (!isEligible) {
      alert("We are sorry. NorthLink is currently only available to candidates with active authorization to work in Canada.");
      return;
    }
    setFormData({ ...formData, legalStatus: true });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {step === 1 && "Create your account"}
          {step === 2 && "Eligibility Check"}
          {step === 3 && "Verify Identity"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {step === 3 ? "Secure verification via Third-Party Provider" : "Join Canada's verified workforce"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          {/* STEP 1: Basic Creds */}
          {step === 1 && (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
              </div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800">
                Next
              </button>
            </form>
          )}

          {/* STEP 2: The Legal Filter */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-md flex gap-3">
                <AlertCircle className="text-blue-700 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  To comply with Canadian labour laws and platform rules, you must confirm your status.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Are you legally entitled to work in Canada?</h3>
                <p className="text-sm text-gray-500 mt-2">
                  This includes Citizens, Permanent Residents, and holders of valid Work Permits.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button onClick={() => handleAttestation(true)} className="flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                  YES
                </button>
                <button onClick={() => handleAttestation(false)} className="flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  NO
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: The API Placeholder */}
          {step === 3 && (
            <div className="space-y-6 text-center">
               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Verify to Apply</h3>
              <p className="text-sm text-gray-500">
                We use an external provider (like Interac Verified) to confirm you are real. We <strong>do not</strong> see or store your ID documents.
              </p>

              <button 
                onClick={() => alert("This would open the Interac/Trulioo Modal")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800"
              >
                <Shield size={18} /> Verify with ID Provider
              </button>
              
              <p className="text-xs text-gray-400 mt-4">
                By clicking verify, you agree to our Terms of Service.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}