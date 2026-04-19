import Image from "next/image";
import Navbar from "./Components/Layout/Navbar";
import HeroSection from "./Components/Sections/HeroSection";
import WijSection from "./Components/Sections/WijSection";
import StickySection from "./Components/Sections/StickySection";
import ContentSection from "./Components/Sections/ContantSection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <WijSection></WijSection>
      <StickySection></StickySection>
      <ContentSection></ContentSection>
    </div>
  );
}
