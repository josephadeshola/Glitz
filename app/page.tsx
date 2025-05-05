"use client";
import HeroSection from "@/components/HeroSection";
import NavbarComponent from "@/components/NavbarComponent";

export default function Home() {
  return (
    <div className="relative h-screen">
     <NavbarComponent />
     <HeroSection/>
    </div>
  );
}
