import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, GraduationCap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses | Nilesh Institute",
  description: "Explore our university-recognized computer courses including PGDCA, DCA, and Basic Computer.",
};

export default function CoursesPage() {
  const allCourses = [
    {
      id: "pgdca",
      title: "PGDCA",
      fullName: "Post Graduate Diploma in Computer Applications",
      duration: "1 Year (2 Semesters)",
      eligibility: "Graduation (Any Stream)",
      careerOps: ["Software Developer", "Database Administrator", "System Analyst", "IT Support Engineer", "Teacher/Instructor"],
      syllabus: ["Programming in C & C++", "PC Packages", "Database Management", "System Analysis & Design", "Internet & Web Designing", "Financial Accounting with Tally"],
      color: "bg-blue-600"
    },
    {
      id: "dca",
      title: "DCA",
      fullName: "Diploma in Computer Applications",
      duration: "1 Year (2 Semesters)",
      eligibility: "12th Pass (Any Stream)",
      careerOps: ["Data Entry Operator", "Computer Operator", "Office Assistant", "BPO Executive", "Basic Programmer"],
      syllabus: ["Computer Fundamentals", "PC Packages (Word, Excel, PPT)", "FoxPro", "Internet & E-commerce", "Multimedia Tools", "PageMaker & CorelDraw"],
      color: "bg-indigo-600"
    },
    {
      id: "cpct",
      title: "CPCT Preparation",
      fullName: "Computer Proficiency Certification Test",
      duration: "3-6 Months",
      eligibility: "10th / 12th Pass",
      careerOps: ["Govt. Clerk Jobs (MP)", "Patwari", "Data Entry Operator in MP Govt", "Stenographer"],
      syllabus: ["Computer Fundamentals", "Operating Systems", "MS Office", "Internet usage", "Hindi Typing (Remington Gail)", "English Typing"],
      color: "bg-green-600"
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="bg-[var(--color-primary)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Industry-oriented and university-recognized computer programs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-16">
          {allCourses.map((course) => (
            <div key={course.id} id={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-24">
              <div className={`${course.color} p-8 text-white`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h2>
                <p className="text-white/90 text-lg font-medium">{course.fullName}</p>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                    <Clock className="text-[var(--color-primary)]" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Duration</p>
                      <p className="font-bold text-gray-900">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                    <GraduationCap className="text-[var(--color-primary)]" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Eligibility</p>
                      <p className="font-bold text-gray-900">{course.eligibility}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpen size={20} className="text-[var(--color-primary)]" />
                      Syllabus Overview
                    </h3>
                    <ul className="space-y-3">
                      {course.syllabus.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.careerOps.map((career, idx) => (
                        <span key={idx} className="bg-blue-50 text-[var(--color-primary)] px-3 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                          {career}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-2">Admission Process</h4>
                      <p className="text-sm text-gray-700 mb-4">
                        Admissions are currently open. Download the form, fill it, and submit it at our Manpur Gaya Bihar branch.
                      </p>
                      <Link 
                        href="/apply"
                        className={`inline-block w-full text-center py-3 rounded-lg font-bold text-white transition-colors ${course.color} hover:opacity-90`}
                      >
                        Apply for {course.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
