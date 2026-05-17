"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function UniversityAssociation() {
  return (
    <section className="py-24 bg-[var(--color-light-silver)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Header Area representing a certificate top */}
            <div className="bg-[var(--color-primary)] p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
              
              <motion.div 
                className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                {/* University Logo Placeholder */}
                <div className="w-16 h-16 border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center">
                  <ShieldCheck size={32} className="text-[var(--color-primary)]" />
                </div>
              </motion.div>
              
              <h3 className="text-yellow-400 font-medium tracking-widest uppercase text-sm mb-2">
                Proudly Associated With
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                Makhanlal Chaturvedi National University
              </h2>
              <p className="text-blue-100 text-lg md:text-xl font-medium">
                of Journalism & Communication, Bhopal
              </p>
              <p className="text-blue-200/80 text-sm mt-3">
                (Set by Act No. 15, 1990 of M.P. Legislative Assembly)
              </p>
            </div>

            {/* Certificate Body */}
            <div className="p-8 md:p-12 text-center bg-[url('/certificate-bg-pattern.svg')] bg-center bg-no-repeat bg-cover bg-opacity-5">
              
              <div className="inline-block border-2 border-gray-200 rounded-lg px-8 py-4 mb-10 bg-gray-50">
                <span className="block text-gray-500 text-sm uppercase font-semibold mb-1">
                  Official Association Number
                </span>
                <span className="text-2xl md:text-3xl font-mono font-bold text-gray-900 tracking-wider">
                  MCRPSV/ASI/JAN/2018/8657
                </span>
              </div>

              <div className="max-w-2xl mx-auto">
                <h4 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wide border-b border-gray-200 pb-4 inline-block">
                  Permitted University Courses
                </h4>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-4">
                  <motion.div 
                    className="flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 px-8 rounded-xl shadow-sm"
                    whileHover={{ scale: 1.05, borderColor: 'var(--color-primary)' }}
                  >
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-xl font-bold text-gray-900">PGDCA</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 px-8 rounded-xl shadow-sm"
                    whileHover={{ scale: 1.05, borderColor: 'var(--color-primary)' }}
                  >
                    <CheckCircle className="text-green-500" size={24} />
                    <span className="text-xl font-bold text-gray-900">DCA</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="w-48 h-px bg-gray-300 mx-auto mb-6"></div>
                <p className="text-gray-500 italic">
                  Guaranteeing quality education with recognized credentials for a brighter future.
                </p>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
