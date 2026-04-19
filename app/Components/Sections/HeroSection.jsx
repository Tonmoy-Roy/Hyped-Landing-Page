'use client'

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen bg-[#faf4ec] px-5 md:px-10 pt-16 sm:pt-20 pb-10 sm:pb-16 font-['Inter',sans-serif] mt-15">
            <div className="md:w-[70vw]">
                <h1 className="text-[clamp(53px,7vw,96px)] font-semibold  text-[#161616] leading-[1.05] tracking-[-1px] sm:tracking-[-2px] mb-4 sm:mb-6">
                    Get Hyped. <span className="md:hidden"><br /></span>
                    Get Noticed.<span className="md:hidden"><br /></span> Get Results.
                </h1>
                <p className="text-2xl font-semibold text-[#222] leading-relaxed">
                    Klaar met gokken op content<br />
                    die niets oplevert?
                </p>
            </div>
        </section>
    );
}