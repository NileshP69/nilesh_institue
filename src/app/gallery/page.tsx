"use client";

import { useState } from "react";
import { ImageIcon, Monitor, Users, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "campus", name: "Campus" },
    { id: "labs", name: "Labs" },
    { id: "students", name: "Students" },
    { id: "events", name: "Events" }
  ];

  const galleryItems = [
    { id: 1, category: "campus", title: "Main Building Front View", color: "bg-blue-100", icon: <ImageIcon size={48} className="text-blue-300" /> },
    { id: 2, category: "labs", title: "Computer Lab 1", color: "bg-purple-100", icon: <Monitor size={48} className="text-purple-300" /> },
    { id: 3, category: "students", title: "Class of 2023", color: "bg-green-100", icon: <Users size={48} className="text-green-300" /> },
    { id: 4, category: "events", title: "Annual Function", color: "bg-yellow-100", icon: <Calendar size={48} className="text-yellow-300" /> },
    { id: 5, category: "labs", title: "Hardware Practice Session", color: "bg-red-100", icon: <Monitor size={48} className="text-red-300" /> },
    { id: 6, category: "campus", title: "Library", color: "bg-indigo-100", icon: <ImageIcon size={48} className="text-indigo-300" /> },
    { id: 7, category: "students", title: "Group Study", color: "bg-teal-100", icon: <Users size={48} className="text-teal-300" /> },
    { id: 8, category: "events", title: "Certificate Distribution", color: "bg-orange-100", icon: <Calendar size={48} className="text-orange-300" /> },
  ];

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="bg-[var(--color-primary)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Glimpses of life at Shri Amar Computer Institution.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === cat.id 
                  ? "bg-[var(--color-primary)] text-white shadow-md" 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-square border border-gray-100 cursor-pointer"
              >
                {/* Placeholder Image */}
                <div className={`w-full h-full ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-yellow-400 text-xs uppercase font-bold tracking-wider mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No images found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
