'use client'
import { useRef, useState } from "react";
import Image from 'next/image';
import React from 'react';
import triangle from '../../../public/Images/actangle.svg';
import logo from '../../../public/Images/logo.svg';

const logos = [
    "border-blue-500",
    "border-green-500",
    "border-orange-500",
    "border-pink-500",
    "border-purple-500"
];

export default function Footer() {
    const [items, setItems] = useState([]);
    const canAddItemRef = useRef(true); 
    const handleMouseMove = (e) => {
        if (!canAddItemRef.current || items.length >= 6) {
            return;
        }
        canAddItemRef.current = false; 

        const rect = e.currentTarget.getBoundingClientRect();
        const newItem = {
            id: Date.now(),
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            color: logos[Math.floor(Math.random() * logos.length)]
        };

        setItems((prev) => [...prev, newItem]);

        setTimeout(() => {
            canAddItemRef.current = true;
        }, 500); 

        setTimeout(() => {
            setItems((prev) => prev.filter((item) => item.id !== newItem.id));
        }, 3000);
    };

    return (
        <div
            className="relative w-full overflow-hidden font-sans text-slate-900"
            onMouseMove={handleMouseMove}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fade-up-out {
                    0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -150%) scale(0.8); }
                }
                .animate-fade-custom {
                    animation: fade-up-out 1.5s forwards;
                }
            `}} />

            {items.map((item) => (
                <div
                    key={item.id}
                    className={`absolute px-4 py-2 bg-white border-4 ${item.color} font-bold text-xl shadow-lg rounded-lg animate-fade-custom pointer-events-none z-50`}
                    style={{
                        left: item.x,
                        top: item.y,
                        transform: "translate(-50%, -50%)" 
                    }}
                >
                    GETHYPED
                </div>
            ))}

                <div className="text-center px-4 relative hidden md:block">
                    <h2 className="text-6xl md:text-[6.5rem] font-semibold mb-8">
                        Let's Get Hyped!
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button className="flex items-center gap-3 px-1 py-1 pl-5 border border-slate-900 rounded-2xl font-bold text-[0.95rem] hover:bg-slate-100 transition-colors duration-200">
                            <span>Mail ons direct</span>
                            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                        </button>

                        <button className="flex items-center gap-3 px-1 py-1 pl-5 bg-[#FF5E2A] border border-[#FF5E2A] text-white rounded-2xl font-bold text-[0.95rem] hover:bg-[#e04d1f] transition-colors duration-200 shadow-sm">
                            <span>Get Results</span>
                            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-[#FF5E2A] shrink-0">
                                <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                                    🔥
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="relative w-full pt-12 md:pt-5 px-6 md:px-16 lg:px-24 overflow-hidden md:overflow-visible">

                    <div className="absolute inset-0 -top-12 z-0">
                        <Image
                            src={triangle}
                            alt=''
                            className="w-full md:w-[93vw] object-cover object-top md:ml-10 h-full md:h-[52vh]"
                        />
                    </div>

                    <div className="absolute top-[-5%] right-[-5%] md:top-[-20%] md:right-[10%] w-24 h-24 md:w-32 md:h-32 bg-[#F692D1] rounded-full z-20 shadow-md hidden md:block">
                        <div className="absolute text-[2rem] md:text-[2.5rem] font-black tracking-tighter text-black md:ml-8 md:top-8">GH</div>
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                            <path id="circleTextPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                            <text fontSize="10.5" fontWeight="bold" fill="black" letterSpacing="1.5">
                                <textPath href="#circleTextPath" startOffset="0%">
                                    • GET HYPED • GET NOTICED • GET RESULTS
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    <div className="mt-8 md:mt-21 flex flex-col md:grid md:grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center md:items-end relative z-10 md:ml-[-48px]">

                        <div className="lg:col-span-5 flex justify-center md:justify-start items-end w-full">
                            <div className="w-[18rem] md:w-[22rem] lg:w-[24rem]">
                                <Image
                                    src={logo}
                                    alt="Get Hyped logo"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="md:hidden w-full flex justify-center mt-2 mb-2">
                            <a href="#contact" className="bg-[#FF5A36] text-white w-[90%] max-w-[22rem] py-2 px-2.5 rounded-[1.25rem] font-bold text-[1.05rem] flex items-center justify-between shadow-md">
                                <span className="flex-1 text-center">Get Hyped! Neem contact op</span>
                                <div className="bg-white text-[#FF5A36] w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.64 5.93h-.04a.2.2 0 0 0-.17.1 12.33 12.33 0 0 0-1.28 2.65 3.32 3.32 0 0 1-1.35 1.54 2.84 2.84 0 0 1-1.89.28 1.83 1.83 0 0 0-1.46.2 1.81 1.81 0 0 0-.85 1.34 5.57 5.57 0 0 0 .28 2.63A8.47 8.47 0 0 0 12 21.98a8.38 8.38 0 0 0 7.05-3.84 8.23 8.23 0 0 0 1.25-5.23 6.36 6.36 0 0 0-2.48-4.48c-1.35-1.07-2.92-1.74-4.59-2.07a12.87 12.87 0 0 1-1.59-.43z" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        <div className="lg:col-span-4 flex flex-col items-center md:items-start gap-8 lg:pb-4 md:ml-35 w-full md:w-[28vw]">
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full">
                                {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="bg-white px-2 py-2.5 rounded-lg text-[0.9rem] font-bold hover:bg-slate-100 transition shadow-sm md:shadow-none">
                                        {item}
                                    </a>
                                ))}
                            </div>

                            {/* Social Icons */}
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <span className="font-bold text-[0.95rem] hidden md:block">Follow us</span>
                                <div className="flex justify-center gap-4 md:gap-2">
                                    {[
                                        // LinkedIn
                                        <svg key="in" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>,
                                        // TikTok
                                        <svg key="tk" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.38-2.9 5.8-1.75 1.41-4.08 2.01-6.31 1.71-2.2-.29-4.21-1.39-5.6-3.08-1.38-1.68-2.12-3.88-2.04-6.08.06-2.16 1.01-4.22 2.6-5.68 1.58-1.45 3.75-2.13 5.92-1.92v4.06c-1.04-.08-2.11.23-2.94.88-.82.63-1.35 1.6-1.46 2.65-.1 1.05.18 2.12.8 2.95.63.84 1.6 1.37 2.66 1.48 1.04.1 2.12-.17 2.95-.78.84-.6 1.38-1.57 1.5-2.62.03-.31.04-.62.04-.94V.02h.01z" /></svg>,
                                        // Instagram
                                        <svg key="ig" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                                        // YouTube
                                        <svg key="yt" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.625 2.625 0 0 0-1.846-1.854C18.106 3.9 12 3.9 12 3.9s-6.106 0-7.736.432A2.625 2.625 0 0 0 2.418 6.186C2 7.82 2 12 2 12s0 4.18.418 5.814a2.625 2.625 0 0 0 1.846 1.854c1.63.432 7.736.432 7.736.432s6.106 0 7.736-.432a2.625 2.625 0 0 0 1.846-1.854C22 16.18 22 12 22 12s0-4.18-.418-5.814zM9.75 15.021V8.979l6.103 3.021-6.103 3.021z" /></svg>
                                    ].map((icon, i) => (
                                        <a key={i} href="#" className="w-11 h-11 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-200 transition shadow-sm md:shadow-none">
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 flex flex-col items-center md:items-start gap-4 md:gap-6 lg:pb-4 text-[1rem] md:text-[0.9rem] text-slate-800 md:ml-40 text-center md:text-left mt-2 md:mt-0 font-medium md:font-normal">
                            <div className="flex flex-col items-center md:items-start gap-1 md:gap-0">
                                <h4 className="font-bold text-black mb-1 hidden md:block">Contact</h4>
                                <p>info@gethyped.nl</p>
                                <p>+31 6 1533 7496</p>
                            </div>

                            <div className="flex flex-col items-center md:items-start gap-1 md:gap-0 mt-3 md:mt-0">
                                <h4 className="font-bold text-black mb-1 hidden md:block">Adres</h4>
                                <p>Beltrumsestraat 6,</p>
                                <p>7141 AL Groenlo</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 md:mt-0 flex flex-col md:flex-row md:justify-end text-[0.8rem] md:text-xs text-slate-500 font-medium pb-8 md:pb-2 relative z-10 md:mr-8 text-center">
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-36">
                            <a href="#" className="hover:text-slate-800 transition order-1 md:order-3 mb-1 md:mb-0">Privacyvoorwaarden</a>
                            <p className="order-2 md:order-1">© 2025 Get Hyped</p>
                            <p className="order-3 md:order-2">© Design by Dylan</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}