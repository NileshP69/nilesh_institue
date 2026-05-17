"use client";

import Image from "next/image";
import logoImg from "@/assets/image/logo.png";

export default function AdmissionFormPrint() {
  return (
    <>
      {/* Print Button - hidden on print */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.print()}
          className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:bg-[#1e40af] transition-colors flex items-center gap-2"
        >
          🖨️ Print / Save as PDF
        </button>
        <a
          href="/apply"
          className="bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:bg-gray-300 transition-colors"
        >
          ← Back
        </a>
      </div>

      <div id="admission-form-page" className="bg-white min-h-screen">
        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { margin: 0; }
            @page { size: A4; margin: 10mm 12mm; }
          }
          body { font-family: 'Times New Roman', serif; }
          .form-field {
            border-bottom: 1.5px solid #000;
            min-height: 24px;
            display: inline-block;
            width: 100%;
          }
        `}</style>

        {/* Form Container */}
        <div className="max-w-[210mm] mx-auto bg-white p-8 pt-20 print:pt-0">

          {/* Header */}
          <div className="text-center border-b-4 border-double border-[#1E3A8A] pb-4 mb-6">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="relative w-16 h-16">
                <Image src={logoImg} alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1E3A8A] leading-tight">
                  Shri Amar Computer Institution
                </h1>
                <p className="text-sm text-gray-600">श्री अमर कंप्यूटर इंस्टीट्यूशन, लालगाँव</p>
                <p className="text-xs text-gray-500 mt-1">
                  N.H. 135, B.D. Kyoti Road, New Bus Stand, Lalgaon, Rewa (M.P.)
                </p>
                <p className="text-xs text-gray-500">
                  📞 +91 9424927574 | +91 7000685215 &nbsp;|&nbsp; ✉ Saics8657@gmail.com
                </p>
              </div>
            </div>
            <div className="bg-[#1E3A8A] text-white py-1.5 text-sm font-bold tracking-widest rounded">
              ADMISSION APPLICATION FORM
            </div>
            <p className="text-xs mt-1 text-gray-500 italic">
              (Affiliated to Makhanlal Chaturvedi National University of Journalism &amp; Communication, Bhopal — No. MCRPSV/ASI/JAN/2018/8657)
            </p>
          </div>

          {/* Course Selection */}
          <div className="mb-5">
            <p className="font-bold text-sm mb-2 text-gray-800 underline">COURSE APPLIED FOR:</p>
            <div className="flex flex-wrap gap-6 text-sm">
              {["PGDCA (1 Year)", "DCA (1 Year)", "CPCT Preparation", "Basic Computer", "Tally", "Other"].map((c) => (
                <label key={c} className="flex items-center gap-2 cursor-pointer">
                  <span className="w-4 h-4 border-2 border-gray-700 inline-block rounded-sm" />
                  {c}
                </label>
              ))}
            </div>
          </div>

          {/* Photo Box */}
          <div className="flex justify-end -mt-24 mb-2 print:-mt-24">
            <div className="border-2 border-gray-400 w-28 h-36 flex items-center justify-center text-xs text-gray-400 text-center p-1 rounded">
              Paste<br />Passport<br />Size<br />Photo
            </div>
          </div>

          {/* Personal Details */}
          <table className="w-full text-sm border-collapse mb-4">
            <tbody>
              {[
                ["1.", "Student's Full Name (Block Letters)", ""],
                ["2.", "Father's / Husband's Name", ""],
                ["3.", "Mother's Name", ""],
                ["4.", "Date of Birth", "                             Age:"],
                ["5.", "Gender", "☐ Male  ☐ Female  ☐ Other"],
                ["6.", "Mobile Number", ""],
                ["7.", "Alternate Mobile / WhatsApp", ""],
                ["8.", "Email Address", ""],
                ["9.", "Aadhar Card Number", ""],
              ].map(([num, label, hint]) => (
                <tr key={label} className="border-b border-gray-200">
                  <td className="py-2.5 pr-2 font-semibold text-gray-600 whitespace-nowrap w-6">{num}</td>
                  <td className="py-2.5 pr-3 text-gray-700 whitespace-nowrap w-52">{label}</td>
                  <td className="py-2.5 flex-1">
                    {hint ? (
                      <span className="text-gray-500 italic text-xs">{hint}</span>
                    ) : (
                      <div className="form-field" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Address */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-1">10. Full Permanent Address:</p>
            <div className="border border-gray-400 rounded p-2 min-h-[60px]" />
          </div>

          {/* Academic Qualification */}
          <div className="mb-4">
            <p className="font-bold text-sm mb-2 text-gray-800 underline">EDUCATIONAL QUALIFICATIONS:</p>
            <table className="w-full text-xs border border-gray-400 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  {["Examination", "Board / University", "Year", "Division / Grade", "% Marks"].map((h) => (
                    <th key={h} className="border border-gray-400 px-2 py-2 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["10th (High School)", "12th (Intermediate)", "Graduation / Diploma", "Post Graduation"].map((row) => (
                  <tr key={row}>
                    <td className="border border-gray-400 px-2 py-3 text-gray-600 whitespace-nowrap">{row}</td>
                    <td className="border border-gray-400 px-2 py-3" />
                    <td className="border border-gray-400 px-2 py-3" />
                    <td className="border border-gray-400 px-2 py-3" />
                    <td className="border border-gray-400 px-2 py-3" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Declaration */}
          <div className="mb-6 bg-gray-50 border border-gray-300 rounded p-3 text-xs text-gray-600 leading-relaxed">
            <strong>Declaration:</strong> I hereby declare that all the information furnished above is true and correct to the best of my knowledge and belief. I understand that my admission is subject to the rules and regulations of Shri Amar Computer Institution and will be liable to cancellation if any of the information provided is found to be false.
          </div>

          {/* Signatures */}
          <div className="flex justify-between mt-6 text-sm">
            <div className="text-center w-44">
              <div className="border-b border-gray-700 h-10" />
              <p className="mt-1 text-xs text-gray-600">Signature of Parent / Guardian</p>
            </div>
            <div className="text-center w-44">
              <p className="text-xs text-gray-500 mb-1">Date: _____ / _____ / _______</p>
              <div className="border-b border-gray-700 h-10" />
              <p className="mt-1 text-xs text-gray-600">Signature of Applicant</p>
            </div>
          </div>

          {/* Office Use Only */}
          <div className="mt-6 border-2 border-dashed border-gray-400 rounded p-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 text-center">For Office Use Only</p>
            <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
              <div>Registration No.: <div className="form-field" /></div>
              <div>Admission Date: <div className="form-field" /></div>
              <div>Fee Received: ₹ <div className="form-field" /></div>
            </div>
            <div className="flex justify-end mt-4">
              <div className="text-center w-44">
                <div className="border-b border-gray-700 h-8" />
                <p className="mt-1 text-xs text-gray-500">Authorized Signature &amp; Stamp</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
