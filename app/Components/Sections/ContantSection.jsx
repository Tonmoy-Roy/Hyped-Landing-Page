'use client';
import React, { useRef } from 'react';
import cards from '@/app/Constants/CONTENT';
const VideoCard = ({ title, tag, colorHex, videoSrc, offsetClass, className = "" }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`relative w-[340px] h-[500px] rounded-[2rem] border-[4px] overflow-hidden shrink-0 shadow-sm bg-gray-100 transition-transform duration-300 ${offsetClass} ${className}`}
      style={{ borderColor: colorHex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 h-[45%]">
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundColor: colorHex,
            clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-6 justify-end">
          <div className="absolute top-[12%] right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black shadow-md cursor-pointer hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="19" x2="19" y2="5"></line>
              <polyline points="9 5 19 5 19 15"></polyline>
            </svg>
          </div>

          <h3 className="text-2xl text-white font-bold mb-4 pr-4 md:w-[15vw] mt-5">
            {title}
          </h3>

          <div className="mt-auto">
            <span className="inline-block bg-white/30 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold tracking-wide">
              {tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ContentSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-8 font-sans overflow-hidden text-slate-900 md:ml-20">
      <div className="max-w-[1400px] w-full items-center xl:items-stretch justify-between gap-12">

        <div className="w-full xl:w-[35%] flex flex-col items-start space-y-6 pt-10 xl:pt-24">
          <h1 className="text-5xl md:text-[5rem] font-extrabold tracking-tight leading-[0.95]">
            Content<br />dat scoort.
          </h1>
          <p className="text-2xl font-bold text-slate-800 max-w-sm">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          
          <button className="mt-2 flex items-center gap-3 px-1 py-1 pr-4 border rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors duration-200">
            <span className="pl-4 text-md">Bekijk al ons werk</span>
            <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </div>

        <div className="w-full xl:w-full flex flex-col xl:flex-row items-center justify-center gap-8 md:gap-16 py-10 xl:py-24 px-4">
          {cards.map((card) => (
            <VideoCard className="md:w-[25vw]" key={card.id} {...card} />
          ))}
        </div>

      </div>
    </div>
  );
}