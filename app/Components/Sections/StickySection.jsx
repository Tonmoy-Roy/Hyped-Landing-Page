'use client'
import expertises from "@/app/Constants/EXPERTISES";

export default function ExpertiseSection() {
    return (
        <section className="w-full font-['Inter',sans-serif]">
            {expertises.map((item, index) => {
                const isColored = item.id !== "01";

                return (
                    <div
                        key={item.id}
                        className={`sticky top-0 w-[95%] mx-auto min-h-screen flex items-center border-b border-black/10 px-5 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-20 rounded-[2.5rem] md:rounded-[4rem] shadow-sm ${item.bg}`}
                        style={{ zIndex: 10 + index }}
                    >
                        <div className="w-full max-w-7xl mx-auto">

                            {/* ── MOBILE ── */}
                            <div className="flex flex-col gap-5 md:hidden">

                                <span className={`inline-flex w-fit px-3 py-1 text-xs font-medium rounded-lg
                                    ${isColored ? "bg-white text-black" : "bg-black/10 text-[#111]"}`}>
                                    {item.badge}
                                </span>

                                <h2 className="text-[clamp(36px,10vw,56px)] font-semibold text-[#111] tracking-[-1.5px]">
                                    {item.title}
                                </h2>

                                <div className="relative flex justify-center">
                                    <span className="absolute -top-4 right-2 text-[64px] font-black text-black/10 select-none leading-none z-0">
                                        {item.id}
                                    </span>
                                    <div className={`relative z-10 rounded-3xl overflow-hidden rotate-2 w-[200px] h-[255px] border-[4px]
                                        ${isColored ? "border-white" : "border-[#e05c2a]"}`}>
                                        <video
                                            src={item.videoSrc}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                        />
                                    </div>
                                </div>

                                <p className="text-sm font-bold text-[#111]">
                                    {item.subtitle}
                                </p>

                                <p className="text-sm text-[#333] leading-relaxed">
                                    {item.description}
                                </p>

                                <a
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-full px-5 py-2.5 w-fit text-sm font-semibold transition-all duration-200 group
                                        ${isColored
                                            ? "bg-white text-black hover:bg-white/80"
                                            : "bg-[#e05c2a] text-white hover:brightness-110"}`}
                                >
                                    {item.cta}
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center
                                        ${isColored ? "bg-black text-white" : "bg-white text-[#e05c2a]"}`}>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </a>
                            </div>

                            <div className="hidden md:flex items-center justify-between gap-16">

                                <div className="flex-1 flex flex-col gap-6 sm:gap-8">

                                    <span className={`inline-flex w-fit px-3 py-1 text-sm font-medium rounded-lg
                                        ${isColored ? "bg-white text-black" : "bg-black/10 text-[#111]"}`}>
                                        {item.badge}
                                    </span>

                                    <h2 className="text-[clamp(40px,6vw,88px)] font-semibold mt-[-40px] mb-10">
                                        {item.title}
                                    </h2>

                                    <div className="flex flex-col gap-2 max-w-sm">
                                        <p className="text-2xl font-bold text-[#111]">
                                            {item.subtitle}
                                        </p>
                                        <p className="text-base font-semibold">
                                            {item.description}
                                        </p>
                                    </div>

                                    <a
                                        href={item.href}
                                        className={`flex items-center gap-3 rounded-full px-6 py-3 w-fit text-base font-semibold transition-all duration-200
                                            ${isColored
                                                ? "bg-white text-black hover:bg-white/80"
                                                : "bg-[#e05c2a] text-white hover:brightness-110"}`}
                                    >
                                        {item.cta}
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center
                                            ${isColored ? "bg-black text-white" : "bg-white text-[#e05c2a]"}`}>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>

                                <div className="relative flex-shrink-0 flex items-end justify-center">

                                    <span className="absolute -top-20 right-4 text-[120px] font-black select-none leading-none z-0 text-black/15">
                                        {item.id}
                                    </span>

                                    <div className={`relative z-10 rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl w-[300px] h-[380px] lg:w-[340px] lg:h-[420px] border-[5px]
                                     ${isColored ? "border-white" : "border-[#e05c2a]"}`}>
                                        <video
                                            src={item.videoSrc}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                );
            })}
        </section>
    );
}