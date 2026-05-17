"use client";

import { Download, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="bg-[var(--color-primary)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Application</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Start your journey towards a bright career in technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Instructions and Download */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Offline Admission</h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Prefer offline submission? Download the admission form, print it, fill it out completely, and submit it at our Lalgaon office along with required documents.
              </p>
              
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-medium transition-colors">
                <Download size={18} />
                Download Form (PDF)
              </button>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                  <span>10th / 12th Marksheet (Copy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                  <span>Graduation Marksheet (For PGDCA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                  <span>Aadhar Card (Copy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                  <span>4 Passport Size Photographs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Online Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Online Registration Form</h2>
              
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center border border-green-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
                  <p className="mb-6">Your application details have been sent. Our team will contact you shortly regarding the next steps and fee submission.</p>
                  <Link href="/courses" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline">
                    Explore Courses <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Student's Full Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Father's Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                      <input type="date" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Select Course</label>
                      <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none bg-white">
                        <option value="">-- Choose Course --</option>
                        <option value="pgdca">PGDCA</option>
                        <option value="dca">DCA</option>
                        <option value="cpct">CPCT Preparation</option>
                        <option value="basic">Basic Computer</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Highest Qualification</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none bg-white">
                      <option value="">-- Select Qualification --</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pass</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Post Graduate</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Address</label>
                    <textarea rows={3} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-xl font-bold text-lg transition-colors shadow-md disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Registration Request"}
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting this form, you agree to our terms and conditions. Your data will be used only for admission purposes.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
