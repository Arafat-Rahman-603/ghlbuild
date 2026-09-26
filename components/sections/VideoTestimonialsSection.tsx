"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const videoIds = [
  "earlAVf24cM",
  "TzkyDafye9E",
  "TpcrX0F4Iac",
  "kYy3Fl2VxF8",
  "fMoxqmHfmBg",
  "USEMF1xhOTs",
  "2ex2Zz6_YCk",
];

function VideoFacade({ id }: { id: string }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      ></iframe>
    );
  }

  return (
    <div 
      className="absolute inset-0 w-full h-full cursor-pointer group bg-gray-900"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Video thumbnail"
        className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#1e90ff] text-white flex items-center justify-center shadow-[0_0_30px_rgba(30,144,255,0.4)] transform group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonialsSection() {
  return (
    <section className="section-md bg-[#f5f4f0] border-b border-gray-200" aria-labelledby="video-testimonials-heading">
      <div className="container-page">
        <SectionHeading
          heading="Real GHL Setups. Real Results."
          align="center"
          className="mb-12"
        />
        
        {/* Horizontal scroll container for the Shorts */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Hide scrollbar for webkit in a custom style block just for this container */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
          <div className="flex gap-6 hide-scrollbar max-w-full">
            {videoIds.map((id) => (
              <div 
                key={id} 
                className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] snap-center rounded-3xl overflow-hidden bg-black shadow-lg border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200"
              >
                <VideoFacade id={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
