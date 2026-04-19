import Image from "next/image";
import Navbar from "./Components/Layout/Navbar";
import HeroSection from "./Components/Sections/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
}
