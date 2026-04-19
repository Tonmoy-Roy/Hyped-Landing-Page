'use client'
import Image from "next/image";
import personImage from "../../../public/Images/imgi_3_6894757aa6dd3f84f6e463a2_Anniek Bril.jpg";

export default function WijSection() {
    return (
        <section className="w-full bg-[#faf4ec] px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">

            {/* Big Heading */}
            <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.5px] mb-10 sm:mb-14 max-w-5xl">
                Wij maken content die opvalt. Die blijft hangen. Die jouw
                doelgroep raakt en jouw merk in beweging brengt. Snel,
                krachtig en energiek.
            </h2>

            {/* Bottom Row — Image + Text */}
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 md:gap-16 lg:gap-24">

                {/* Left — Person Image */}
                <div className="flex-shrink-0">

                    {/* Large devices — show image */}
                    <div className="hidden sm:block">
                        <Image
                            src={personImage}
                            alt="Team member"
                            width={220}
                            height={280}
                            className="rounded-2xl object-cover
                            sm:w-[180px] sm:h-[230px]
                            md:w-[200px] md:h-[260px]
                            lg:w-[220px] lg:h-[280px]"
                        />
                    </div>

                    {/* Small devices — show video */}
                    <div className="block sm:hidden">
                        <video
                            src="/Videos/petrolhead-loop.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="rounded-2xl object-cover w-[350px] h-[300px]"
                        />
                    </div>

                </div>

                {/* Right — Description + CTA */}
                <div className="flex flex-col justify-center gap-5 sm:gap-6 max-w-xs sm:max-w-sm md:max-w-md pt-0 sm:pt-4 md:pt-8">
                    <p className="text-md sm:text-lg md:text-lg font-semibold text-[#111] leading-relaxed">
                        We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
                        Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
                        Nooit meer content zonder resultaat.
                    </p>

                    <a
                        href="/about"
                        className="flex items-center gap-3 border border-[#111] rounded-2xl px-4 sm:px-5 py-2 sm:py-2.5 w-fit font-semibold text-[#111] hover:bg-[#111] hover:text-white transition-all duration-200 group text-md sm:text-lg md:text-lg"
                    >
                        Leer ons kennen
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#111] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#111] transition-all duration-200">
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Bottom-right scroll arrow */}
            <div className="flex justify-end mt-6 sm:mt-[-30px] md:mt-[-50px]">
                <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl border border-[#e05c2a] text-[#e05c2a] flex items-center justify-center hover:bg-[#e05c2a] hover:text-white transition-all duration-200">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}