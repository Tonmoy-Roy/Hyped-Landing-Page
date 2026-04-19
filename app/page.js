import Image from "next/image";
import Navbar from "./Components/Layout/Navbar";
import HeroSection from "./Components/Sections/HeroSection";
import WijSection from "./Components/Sections/WijSection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <WijSection></WijSection>
    </div>
  );
}
