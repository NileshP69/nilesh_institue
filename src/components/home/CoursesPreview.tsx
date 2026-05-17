"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, BookCheck, Star, ArrowRight } from "lucide-react";

export default function CoursesPreview() {
  const courses = [
    {
      id: "pgdca",
      title: "PGDCA",
      fullName: "Post Graduate Diploma in Computer Applications",
      duration: "1 Year",
      eligibility: "Graduate in any discipline",
      features: [
        "Advanced programming skills",
        "Database management systems",
        "Web development",
        "IT infrastructure management"
      ],
      color: "bg-blue-600",
      lightColor: "bg-blue-50"
    },
    {
      id: "dca",
      title: "DCA",
      fullName: "Diploma in Computer Applications",
      duration: "1 Year",
      eligibility: "12th Pass (Any Stream)",
      features: [
        "Basic computer operations",
        "MS Office Suite mastery",
        "Internet & web basics",
        "Desktop publishing"
      ],
      color: "bg-indigo-600",
      lightColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Top <span className="text-[var(--color-primary)]">Courses</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            University-recognized professional courses designed to make you industry-ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden group relative flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Header */}
              <div className={`${course.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
                <h3 className="text-4xl font-black mb-2 relative z-10 tracking-tight">{course.title}</h3>
                <p className="text-white/90 font-medium text-sm md:text-base relative z-10">{course.fullName}</p>
              </div>

              {/* Body */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase">
                      <Clock size={16} className="text-[var(--color-primary)]" />
                      Duration
                    </span>
                    <span className="font-bold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase">
                      <BookCheck size={16} className="text-[var(--color-primary)]" />
                      Eligibility
                    </span>
                    <span className="font-bold text-gray-900">{course.eligibility}</span>
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star size={18} className="text-yellow-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {course.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-gray-600">
                        <div className={`mt-1 rounded-full p-1 ${course.lightColor} text-${course.color.split('-')[1]}-600`}>
                          <CheckCircleIcon />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/courses#${course.id}`}
                  className={`mt-auto w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all
                    bg-gray-50 hover:${course.color} text-gray-900 group-hover:bg-[var(--color-primary)] group-hover:text-white border border-gray-200 group-hover:border-transparent`}
                >
                  Apply for {course.title}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
