"use client";

import React from "react";
import { motion } from "framer-motion";

export function HomeVideoSection() {
  return (
    <section className="section-md overflow-hidden relative" style={{ backgroundColor: "#f8f8f6" }}>
      {/* Subtle glow behind video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1e90ff] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black border border-gray-200/50 group cursor-pointer"
          onClick={(e) => {
            const iframe = document.createElement("iframe");
            iframe.src = "https://www.youtube.com/embed/e8wFXikidSM?autoplay=1&rel=0";
            iframe.title = "YouTube video player";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            iframe.className = "absolute inset-0 w-full h-full border-0";
            e.currentTarget.innerHTML = "";
            e.currentTarget.appendChild(iframe);
          }}
        >
          <img 
            src="https://img.youtube.com/vi/e8wFXikidSM/maxresdefault.jpg" 
            alt="Video thumbnail" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
            loading="lazy" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-300">
            <div className="w-20 h-20 bg-[#1e90ff] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
