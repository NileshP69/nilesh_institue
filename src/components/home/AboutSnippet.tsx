"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

export default function AboutSnippet() {
  const cards = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Quality Education",
      desc: "Providing top-notch computer education for rural empowerment.",
    },
    {
      icon: <Award className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Certified Courses",
      desc: "University-approved programs ensuring valid certification.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Practical Learning",
      desc: "Focus on hands-on practical skills rather than just theory.",
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Expert Faculty",
      desc: "Learn from experienced and dedicated teaching professionals.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Left */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[var(--color-primary)] font-semibold text-sm mb-6 border border-blue-100">
              About Institute
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A Legacy of Educational Excellence in Lalgaon
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p className="font-[var(--font-noto-devanagari)] text-xl text-gray-800 border-l-4 border-[var(--color-primary)] pl-4">
                श्री अमर कंप्यूटर इंस्टीट्यूशन, लालगाँव।<br/>
                <span className="text-gray-600 text-base">श्री अमर शिक्षा कल्याण समिति अंतर्गत संचालित।</span>
              </p>
              
              <p>
                <strong>Shri Amar Computer Institution, Lalgaon</strong> is running under the prestigious <strong>Shri Amar Shiksha Kalyan Samiti</strong>. We are dedicated to bridging the digital divide by offering comprehensive computer education to students in rural and semi-urban areas.
              </p>
              
              <p>
                Our mission is to empower the youth with practical technology skills that open doors to better career opportunities and professional growth.
              </p>
            </div>
            
            <motion.div 
              className="mt-10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <div className="bg-[var(--color-primary)] text-white p-3 rounded-xl shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Government Registered</h4>
                  <p className="text-gray-500 text-sm">Our institution operates with full legal compliance and recognition, ensuring your certificates hold immense value.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Cards Right */}
          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  {/* Clone element to change color on hover using standard CSS logic but since it's an icon, we handle it via group-hover styling on parents or just keep the primary color */}
                  <div className="group-hover:text-white transition-colors [&>svg]:text-[var(--color-primary)] group-hover:[&>svg]:text-white">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
