import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ShieldCheck, MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NorthLink | Verified Canadian Talent",
  description: "Connecting Canadian employers with verified local talent.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                  <span className="text-red-600 font-bold text-2xl">NorthLink</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full border border-red-200">CA</span>
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <Link href="/jobs" className="text-gray-600 hover:text-gray-900">Find Jobs</Link>
                <Link href="/post" className="text-gray-600 hover:text-gray-900">Post a Job</Link>
                <div className="h-6 w-px bg-gray-300"></div>
                <Link href="/login" className="text-gray-600 font-medium">Log in</Link>
                <Link href="/signup" className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-50 border-t mt-20 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-1"><ShieldCheck size={16}/> PIPEDA Compliant</div>
              <div className="flex items-center gap-1"><MapPin size={16}/> Hosted in Canada</div>
            </div>
            <div className="flex justify-center items-center gap-6 mb-4 text-sm">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            </div>
            <div className="text-center text-sm text-gray-500">
              &copy; 2025 NorthLink Inc.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}