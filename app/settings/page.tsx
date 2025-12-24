"use client";

import { useState } from "react";
import { Bell, Lock, Shield, Mail, Globe } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    jobAlerts: true,
    applicationUpdates: true,
    marketingEmails: false,
    twoFactorAuth: false,
    language: "en",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings saved successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Manage your account preferences and notifications</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Bell size={20} className="text-blue-900" />
                Notifications
              </h2>
              <p className="text-sm text-gray-600 mt-1">Choose what notifications you want to receive</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">Email Notifications</label>
                  <p className="text-sm text-gray-500">Receive email notifications for important updates</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                  className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">Job Alerts</label>
                  <p className="text-sm text-gray-500">Get notified about new jobs matching your preferences</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.jobAlerts}
                  onChange={(e) => setSettings({ ...settings, jobAlerts: e.target.checked })}
                  className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">Application Updates</label>
                  <p className="text-sm text-gray-500">Notifications when employers view or update your applications</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.applicationUpdates}
                  onChange={(e) => setSettings({ ...settings, applicationUpdates: e.target.checked })}
                  className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">Marketing Emails</label>
                  <p className="text-sm text-gray-500">Receive tips, updates, and promotional content</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketingEmails}
                  onChange={(e) => setSettings({ ...settings, marketingEmails: e.target.checked })}
                  className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Shield size={20} className="text-blue-900" />
                Security
              </h2>
              <p className="text-sm text-gray-600 mt-1">Manage your account security settings</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">Two-Factor Authentication</label>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={(e) => setSettings({ ...settings, twoFactorAuth: e.target.checked })}
                  className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                />
              </div>
              <div className="pt-4 border-t border-gray-200">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Lock size={16} />
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Globe size={20} className="text-blue-900" />
                Preferences
              </h2>
              <p className="text-sm text-gray-600 mt-1">Customize your experience</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Mail size={20} className="text-blue-900" />
                Account Actions
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <button
                type="button"
                className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100"
              >
                Delete Account
              </button>
              <p className="text-xs text-gray-500">
                Deleting your account will permanently remove all your data. This action cannot be undone.
              </p>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSaving ? "Saving..." : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

