"use client";
import HeroSection from "@/components/HeroSection";
import NavbarComponent from "@/components/NavbarComponent";

export default function Home() {
  return (
    <div className="relative bg-light h-screen">
     <NavbarComponent />
     <HeroSection/>
    </div>
  );
}
