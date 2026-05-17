"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1e40af] to-[#0f172a]">
      {/* Background decoration & Banner */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/image/institute_banner.png" 
          alt="Institute Banner" 
          fill
          priority
          className="object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Logo Placeholder */}
          <motion.div 
            className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl p-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image 
              src="/image/logo.png" 
              alt="Shri Amar Computer Institution Logo" 
              fill
              className="object-contain p-2"
            />
          </motion.div>

          <motion.h2 
            className="text-white text-xl md:text-2xl font-medium mb-2 opacity-90 font-[var(--font-noto-devanagari)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            श्री अमर कंप्यूटर इंस्टीट्यूशन, लालगाँव
          </motion.h2>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Shri Amar Computer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Institution
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            "Empowering Rural Education Through Technology"
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link 
              href="/apply"
              className="group flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transform hover:-translate-y-1"
            >
              Apply Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/courses"
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1"
            >
              <BookOpen size={20} className="opacity-80" />
              View Courses
            </Link>

            <Link 
              href="/contact"
              className="flex items-center gap-2 text-white/80 hover:text-white px-6 py-4 font-medium transition-colors"
            >
              <Phone size={20} />
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-white text-sm font-medium tracking-widest uppercase">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
