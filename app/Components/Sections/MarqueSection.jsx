import React from 'react';
import logos from '@/app/Constants/MARQUE';
import Image from 'next/image';
export default function MarqueSection() {

    const duplicatedLogos = [...logos, ...logos];

    return (

        <div>
            <h1 className="text-3xl md:text-6xl font-semibold font-['Inter',sans-serif] w-60 md:w-[35vw] px-5 md:px-10 py-3">
                These brands got hyped.
            </h1>
            <div className="w-full py-12 overflow-hidden flex flex-col items-center">
                <style>
                    {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: infinite-scroll 30s linear infinite;
            /* width: max-content ensures the container is exactly as wide as all items combined */
            width: max-content; 
          }
          /* Optional: Pause the animation when the user hovers over the track */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
                </style>

                <div className="w-full max-w-[100vw] overflow-hidden relative mb-15">

                    <div className="absolute top-0 left-0 w-24 h-full" />
                    <div className="absolute top-0 right-0 w-24 h-full" />

                    <div className="animate-marquee flex flex-row items-center gap-2 md:gap-4 px-2">
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className="w-[40vw] h-[20vh] md:w-[20vw] md:h-[40vh] shrink-0 border border-slate-500 rounded-2xl flex items-center justify-center p-6"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    height={350}
                                    width={300}
                                    className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className='border-t border-bs-zinc-500 md:w-[94vw] ml-10 mb-50'></div>
        </div>

    );
}