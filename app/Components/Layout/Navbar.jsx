'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from '../../../public/Images/logo.svg'

export default function Navbar() {
    const [navVisible, setNavVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lastY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (y > lastY.current && y > 60) {
                setNavVisible(false);
                setIsMenuOpen(false); 
            } else {
                setNavVisible(true);
            }
            lastY.current = y;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-[100]
                transition-transform duration-300 ease-in-out font-['Inter',sans-serif]
                ${navVisible ? "translate-y-0" : "-translate-y-full"}
            `}
        >
            <div className="flex items-center justify-between px-5 md:px-10 py-3">

                <Image
                    src={logo}
                    alt="GetHyped logo"
                    width={150}
                    height={100}
                    className="w-24 md:w-[150px] h-auto"
                />

                <nav className="hidden md:flex gap-8 bg-white rounded-full px-7 py-2.5 shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
                    {["Expertises", "Work", "About", "Contact"].map(link => (
                        <a
                            key={link}
                            href={`/${link.toLowerCase()}`}
                            className="text-[#111] font-bold text-[15px] no-underline hover:opacity-60 transition-opacity duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <a
                    href="#"
                    className="hidden md:flex items-center gap-2 bg-[#fcb8fa] rounded-[20px] px-5 py-2.5 no-underline font-semibold text-[15px] text-[#111] hover:brightness-95 transition-all duration-200"
                >
                    Get Results
                    <span className="w-7 h-7 bg-white rounded-[30%] flex items-center justify-center text-sm">
                        🔥
                    </span>
                </a>

                <button
                    className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            <div
                className={`
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <nav className="flex flex-col items-center gap-3 px-5 pb-5 pt-2">
                    {["Expertises", "Work", "About", "Contact"].map(link => (
                        <a
                            key={link}
                            href={`/${link.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full text-center text-[#111] font-bold text-[15px] no-underline py-2.5 border border-black/10 rounded-xl bg-white hover:bg-black/5 transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}

                    <a
                        href="#"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full flex items-center justify-center gap-2 bg-[#fcb8fa] rounded-xl px-5 py-2.5 no-underline font-semibold text-[15px] text-[#111] hover:brightness-95 transition-all duration-200 mt-1"
                    >
                        Get Results
                        <span className="w-7 h-7 bg-white rounded-[30%] flex items-center justify-center text-sm">
                            🔥
                        </span>
                    </a>
                </nav>
            </div>
        </header>
    );
}