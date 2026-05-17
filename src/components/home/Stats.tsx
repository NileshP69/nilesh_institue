"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Smile, Users, TrendingUp, MapPin } from "lucide-react";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toLocaleString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: <Smile className="text-yellow-400" size={32} />,
      count: 5000,
      suffix: "+",
      label: "HAPPY STUDENTS",
    },
    {
      id: 2,
      icon: <Users className="text-yellow-400" size={32} />,
      count: 2000,
      suffix: "+",
      label: "VERIFIED TUTORS",
    },
    {
      id: 3,
      icon: <TrendingUp className="text-yellow-400" size={32} />,
      count: 98,
      suffix: "%",
      label: "SUCCESS RATE",
    },
    {
      id: 4,
      icon: <MapPin className="text-yellow-400" size={32} />,
      count: 25,
      suffix: "+",
      label: "CITIES COVERED",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#1e40af] to-[#0f172a]">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4 group"
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "rgba(250, 204, 21, 0.5)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
                <Counter value={stat.count} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-bold text-blue-200 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
