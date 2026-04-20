'use client'
import Image from "next/image";
import personImage from "../../../public/Images/imgi_3_6894757aa6dd3f84f6e463a2_Anniek Bril.jpg";

export default function WijSection() {
    return (
        <section className="w-full bg-[#faf4ec] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 font-['Inter',sans-serif]">

            <h2 className="text-2xl md:text-6xl font-bold leading-[1.15] tracking-[-0.5px] mb-10 sm:mb-14 max-w-5xl md:ml-30">
                Wij maken content die opvalt. Die blijft hangen. Die jouw
                doelgroep raakt en jouw merk in beweging brengt. Snel,
                krachtig en energiek.
            </h2>

            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 md:gap-16 lg:gap-24">

                <div className="flex-shrink-0">

                    <div className="hidden sm:block">
                        <Image
                            src={personImage}
                            alt="Team member"
                            width={270}
                            height={300}
                            className="rounded-2xl object-cover md:ml-[-1.5vw]"
                        />
                    </div>

                    <div className="block sm:hidden">
                        <video
                            src="/Videos/petrolhead-loop.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="rounded-2xl object-cover h-[50vh] w-[90vw]"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-5 sm:gap-6 max-w-xs sm:max-w-sm md:max-w-md pt-0 sm:pt-4 md:pt-8 md:ml-40 mt-11">
                    <p className="text-xl font-bold text-[#111] leading-relaxed md:w-[27vw]">
                        We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
                        Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
                        Nooit meer content zonder resultaat.
                    </p>

                    <a
                        href="/about"
                        className="flex items-center gap-3 border border-[#111] rounded-2xl px-4 sm:px-5 py-2 sm:py-2.5 w-fit font-semibold text-[#111] transition-all duration-200 group text-md sm:text-lg md:text-lg hover:-rotate-5"
                    >
                        Leer ons kennen
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#111] text-white flex items-center justify-center transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            <div className="hidden sm:flex justify-end mt-6 sm:mt-[-30px] md:mt-[-50px]">
                <button className="group relative overflow-hidden w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl border border-black text-[#e05c2a] flex items-center justify-center transition-all duration-200">
                    <div className="absolute transition-all duration-300 transform translate-y-0 group-hover:translate-y-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                    <div className="absolute transition-all duration-300 transform -translate-y-12 group-hover:translate-y-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
}