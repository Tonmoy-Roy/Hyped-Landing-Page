'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from '../../../public/Images/download (1).svg'

export default function Navbar() {
    const [navVisible, setNavVisible] = useState(true);
    const lastY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (y > lastY.current && y > 60) {
                setNavVisible(false); 
            } else {
                setNavVisible(true);  
            }
            lastY.current = y;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={{
            position: "fixed", top: 10, left: 0, right: 0,
            background: "#faf4ec", padding: "12px 28px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            zIndex: 100,
        }}>
            <Image
                src={logo} 
                alt="Description of image"
                width={150}                
                height={100}               
            />

            <nav style={{
                background: "#fff", borderRadius: 100, padding: "10px 28px",
                display: "flex", gap: 32, boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                opacity: navVisible ? 1 : 0,
                transform: navVisible ? "translateY(0)" : "translateY(-8px)",
                pointerEvents: navVisible ? "auto" : "none",
            }}>
                {["Expertises", "Work", "About", "Contact"].map(link => (
                    <a key={link} href={`/${link.toLowerCase()}`}
                        style={{ textDecoration: "none", color: "#111", fontWeight: 'bold', fontSize: 15 }}>
                        {link}
                    </a>
                ))}
            </nav>

            <a href="#" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "#fcb8fa", borderRadius: 20, padding: "10px 20px",
                textDecoration: "none", fontWeight: 600, fontSize: 15, color: "#111",
            }}>
                Get Results
                <span style={{
                    width: 28, height: 28, background: "#fff", borderRadius: "30%",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                }}>🔥</span>
            </a>
        </header>
    );
}