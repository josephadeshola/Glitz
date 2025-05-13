"use client";
import React, { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CountUp from "react-countup";
import Cards from "./Cards";
import Link from "next/link";


const heroImages = [
  {
    image: "/images/landing-page.png",
    heading:
      "Empowering Global Trade in Premium African Agricultural Commodities",
    subtext:
      "From sourcing to export, we deliver quality, compliance, and transparency in every shipment.",
    animationClass: "fade-in",
  },
  {
    image: "/images/cashewman.webp",
    heading: "Quality Raw Cashew Nuts Ready For Export",
    subtext: "Streamlining the process from farm to shipment.",
    animationClass: "slide-in",
  },
  {
    image: "/images/chatcashew.webp",
    heading: "Premium Cashew Kernels for Industrial Use and Export.",
    subtext: "Sun-dried and unprocessed, ideal for export and processing.",
    animationClass: "zoom-in",
  },
  {
    image: "/images/chatshea.webp",
    heading: "Shea Nuts – Rich in Natural Fats for Skincare & Cosmetics",
    subtext: "Streamlining the process from farm to shipment.",
    animationClass: "fade-left",
  },
  {
    image: "/images/chatSesame.webp",
    heading: "Sesame Seeds – Oil-Rich and Perfect for Food & Extraction",
    subtext: "Oil-rich and clean, great for food and oil extraction.",
    animationClass: "flip-in",
  },
  {
    image: "/images/chatsoya.webp",
    heading: "Soybeans – High Protein for Feed, Tofu & Food Production",
    subtext: "Nutritious, versatile, and ideal for feed or food.",
    animationClass: "slide-up ",
  },
  {
    image: "/images/chatcocoa.webp",
    heading: "Premium cocoa beans for chocolate and beverages, farm-sourced.",
    subtext: "Top-grade beans used in chocolate and beverages.",
    animationClass: "bounce-in",
  },
];

const stats = [
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 5, suffix: "k", label: "Happy clients" },
  { value: 72, suffix: "k", label: "Trusted by over 300 global clients" },
];
const HeroSection = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      autoScroll();

      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setTimeout(() => {
        }, 100);
      };

      emblaApi.on("select", onSelect);
      emblaApi.on("pointerDown", () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      });

      onSelect();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi, autoScroll]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroImages[currentIndex];


  return (
    <>
      <div className="relative top-0 -mt-9  w-full h-screen overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide.animationClass}`}>
          <Image
            src={currentSlide.image}
            fill
            alt="Hero Background"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="lg:text-5xl text-2xl md:text-5xl max-w-4xl leading-tight font-bold mb-4">{currentSlide.heading}</h1>
            <p className="max-w-2xl lg:mt-5 mt-2 lg:text-lg text-md">{currentSlide.subtext}</p>
            <div className="mt-6 flex gap-4">
              <button className="bg-[#CC2837] hover:scale-105 transition text-sm lg:px-8 px-7 py-3 rounded-full text-white font-semibold">
                <Link href="/products">
                  View Product
                </Link>
              </button>
              <button className="border text-sm border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-full font-semibold">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-[#F9F9F9] text-black py-8 px-4 lg:px-2">
        <div className="lg:hidden">
          <div ref={emblaRef} className="embla overflow-hidden">
            <div className="embla__container flex">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="embla__slide flex-shrink-0 w-full flex justify-center"
                >
                  <div className="h-48 w-48 rounded-full bg-[#CC2837] flex flex-col items-center justify-center text-white mx-auto">
                    <p className="text-5xl font-semibold">
                      <CountUp end={item.value} duration={4} suffix={item.suffix} />
                    </p>
                    <p className="text-sm mt-2 px-4 text-center">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="hidden lg:flex flex-row items-center justify-around gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="h-48 w-48 rounded-full bg-[#CC2837] flex flex-col items-center justify-center text-white"
              data-aos="fade-up"
            >
              <p className="text-5xl font-semibold">
                <CountUp end={item.value} duration={4} suffix={item.suffix} />
              </p>
              <p className="text-sm mt-2 px-4 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <Cards />
      </div>
    </>
  );
};

export default HeroSection;
