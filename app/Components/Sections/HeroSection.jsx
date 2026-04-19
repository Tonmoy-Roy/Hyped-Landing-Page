'use client'
import { useRef, useState } from "react";
import cards from '../../Constants/CARDS';
function StatCard({ card, className = "" }) {
    return (
        <div>
            <div
                className={`
                ${card.bg} ${card.rotate}
                relative rounded-3xl p-6 sm:p-8
                w-[160px] sm:w-[210px] md:w-[240px] lg:w-[270px]
                h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]
                flex flex-col justify-between
                cursor-pointer select-none
                transition-all duration-300 ease-out
                hover:scale-105 hover:rotate-0 hover:shadow-2xl hover:z-10
                ${className}
            `}
            >
                <span className="text-[#111] text-4xl sm:text-5xl md:text-6xl font-black leading-none">
                    {card.stat}
                </span>
                <div>
                    <p className="text-[#111] text-sm sm:text-base md:text-lg font-bold mb-1">
                        {card.title}
                    </p>
                    <hr className="border-black/30 mb-1" />
                    <p className="text-[#111] text-xs sm:text-sm font-normal">
                        {card.subtitle}
                    </p>
                </div>
            </div>
        </div>

    );
}

function VideoCard({ card, className = "" }) {
    const videoRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        videoRef.current?.play();
    };
    const handleMouseLeave = () => {
        setHovered(false);
        videoRef.current?.pause();
    };

    return (
        <div
            className={`
                ${card.rotate}
                relative rounded-3xl overflow-hidden
                w-[160px] sm:w-[210px] md:w-[240px] lg:w-[270px]
                h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]
                cursor-pointer select-none
                transition-all duration-300 ease-out
                hover:scale-105 hover:rotate-0 hover:shadow-2xl hover:z-10
                bg-black
                ${className}
            `}
        >
            <video
                src={card.videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />
        </div>
    );
}

export default function StatsCards() {
    return (
        <div>
            <div className="">
                <section className="w-full bg-[#faf4ec] px-5 md:px-10 pt-16 sm:pt-20 pb-10 sm:pb-16 font-['Inter',sans-serif] mt-15">
                    <div className="md:w-[70vw]">
                        <h1 className="text-5xl md:text-5xl font-semibold  text-[#161616] leading-[1.05] tracking-[-1px] sm:tracking-[-2px] mb-4 sm:mb-6">
                            Get Hyped. <span className="md:hidden"><br /></span>
                            Get Noticed.<span className="md:hidden"><br /></span> Get Results.
                        </h1>
                        <p className="text-md md:text-2xl font-semibold text-[#222] leading-relaxed">
                            Klaar met gokken op content<br />
                            die niets oplevert?
                        </p>
                    </div>
                </section>
            </div>
            <div>
                <section className="w-full bg-[#faf4ec] py-16 sm:py-20 px-4 sm:px-8 overflow-hidden">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap font-['Inter',sans-serif]">
                        {cards.map((card, index) =>
                            card.type === "stat"
                                ? (
                                    <StatCard
                                        key={card.id}
                                        card={card}
                                        className={index >= 2 ? "hidden sm:flex" : ""}
                                    />
                                )
                                : (
                                    <VideoCard
                                        key={card.id}
                                        card={card}
                                        className={index >= 2 ? "hidden sm:flex" : ""}
                                    />
                                )
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}