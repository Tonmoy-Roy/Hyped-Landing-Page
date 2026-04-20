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
        <>
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

                    <nav className="hidden md:flex gap-8 bg-white rounded-xl px-7 py-2.5 shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
                        {["Expertises", "Work", "About", "Contact"].map(link => (
                            <a
                                key={link}
                                href={`/${link.toLowerCase()}`}
                                className="text-[#111] font-bold text-[15px] hover:opacity-60 transition"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 bg-[#fcb8fa] rounded-[20px] px-5 py-2.5 font-semibold text-[15px] text-[#111]"
                    >
                        Get Results
                        <span className="w-7 h-7 bg-white rounded-[30%] flex items-center justify-center text-sm">
                            🔥
                        </span>
                    </a>

                    <button
                        className={`md:hidden p-2 rounded-lg ${isMenuOpen ? 'bg-white' : 'bg-[#fcb8fa]'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-8 h-8 text-[#111] rounded" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                </div>
            </header>

            <div
                className={`
                    fixed inset-0 bg-white z-[90]
                    transition-all duration-500 font-['Inter',sans-serif]
                    ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
            >
                <div className={`absolute inset-2 bg-[#FCB8FA] rounded-[1rem] transition-transform duration-500 ease-in-out flex flex-col ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <nav className="flex flex-col items-center gap-3">
                            {["Expertises", "Work", "About", "Contact"].map(link => (
                                <a
                                    key={link}
                                    href={`/${link.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[#111] font-bold text-2xl no-underline hover:opacity-60 transition bg-white p-3 rounded-2xl"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="pb-16 flex justify-center px-5">
                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center gap-3 bg-black rounded-2xl px-6 py-4 no-underline font-bold text-xl text-white hover:brightness-95 transition-all duration-200 shadow-md"
                        >
                            Get Results
                            <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm">
                                🔥
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}