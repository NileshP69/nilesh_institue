"use client";

import { motion } from "framer-motion";
import { Smile, Users, TrendingUp, MapPin } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: <Smile className="text-yellow-500" size={28} />,
      count: "5000+",
      label: "HAPPY STUDENTS",
    },
    {
      id: 2,
      icon: <Users className="text-yellow-500" size={28} />,
      count: "2000+",
      label: "VERIFIED TUTORS",
    },
    {
      id: 3,
      icon: <TrendingUp className="text-yellow-500" size={28} />,
      count: "98%",
      label: "SUCCESS RATE",
    },
    {
      id: 4,
      icon: <MapPin className="text-yellow-500" size={28} />,
      count: "25+",
      label: "CITIES COVERED",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4"
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "#ffedd5" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-3 tracking-tight">
                {stat.count}
              </h3>
              <p className="text-sm font-bold text-slate-500 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
