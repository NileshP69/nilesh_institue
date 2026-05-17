"use client";

import { motion } from "framer-motion";
import { Users, MonitorPlay, Settings, FileBadge, Compass, HeartHandshake } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Experienced Faculty",
      desc: "Learn from industry experts and highly qualified teachers dedicated to your success.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MonitorPlay size={32} />,
      title: "Modern Computer Lab",
      desc: "Fully equipped computer labs with the latest hardware and software for uninterrupted learning.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Settings size={32} />,
      title: "Practical Training",
      desc: "100% practical approach focusing on real-world projects and hands-on experience.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FileBadge size={32} />,
      title: "Certificate Courses",
      desc: "Valid, university-approved certifications that add immense value to your resume.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Compass size={32} />,
      title: "Career Guidance",
      desc: "Comprehensive counseling to help you choose the right path and secure job opportunities.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Rural Education Support",
      desc: "Special focus on empowering students from rural backgrounds with modern technology skills.",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-[var(--color-primary)]">Us?</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide a comprehensive learning environment that prepares you for the digital future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
