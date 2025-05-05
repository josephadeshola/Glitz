"use client";
import React, { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import Cards from "./Cards";

const heroImages = [
  {
    image: "/images/landing-page.png",
    heading:
      "Empowering Global Trade in Premium African Agricultural Commodities",
    subtext:
      "From sourcing to export, we deliver quality, compliance, and transparency in every shipment.",
    aosType: "fade-up",
  },
  {
    image: "/images/cashew-tree2.avif",
    heading: "Quality Cashew Nuts Ready For Export",
    subtext: "Streamlining the process from farm to shipment.",
    aosType: "flip-left",
  },
  {
    image: "/images/raw-cashew.jpg",
    heading:
      "Naturally sun-dried and unprocessed, ideal for industrial use and export.",
    subtext: "Sun-dried and unprocessed, ideal for export and processing.",
    aosType: "flip-right",
  },
  {
    image: "/images/Sheanut.jpg",
    heading: "Rich in natural fats, widely used in cosmetics and skincare.",
    subtext: "Streamlining the process from farm to shipment.",
    aosType: "flip-up",
  },
  {
    image: "/images/Sesame-seed.jpg",
    heading: "Oil-rich seeds, great for food production and seasoning.",
    subtext: "Oil-rich and clean, great for food and oil extraction.",
    aosType: "zoom-in",
  },
  {
    image: "/images/soyabeans.jpg",
    heading: "Protein-packed and versatile—ideal for feed, tofu, and more.",
    subtext: "Nutritious, versatile, and ideal for feed or food.",
    aosType: "zoom-in-up",
  },
  {
    image: "/images/cocoa-beans.avif",
    heading: "Premium cocoa beans for chocolate and beverages, farm-sourced.",
    subtext: "Top-grade beans used in chocolate and beverages.",
    aosType: "zoom-out-down",
  },
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
    Aos.init({ once: false });
  }, []);

  useEffect(() => {
    if (emblaApi) {
      autoScroll();

      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setTimeout(() => {
          Aos.refresh();
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

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <FaChevronRight size={20} />
        </button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex h-screen">
            {heroImages.map((slide, index) => (
              <div
                key={index}
                className="embla__slide relative flex-shrink-0 w-full h-full"
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
                  <h1
                    data-aos={index === selectedIndex ? slide.aosType : ""}
                    className="lg:text-5xl text-2xl md:text-5xl font-bold max-w-4xl leading-tight"
                  >
                    {slide.heading}
                  </h1>
                  <p
                    data-aos={index === selectedIndex ? slide.aosType : ""}
                    className="lg:mt-5 mt-2 lg:text-lg text-md max-w-2xl"
                  >
                    {slide.subtext}
                  </p>
                  <div data-aos="fade-up" className="mt-9 flex gap-4">
                    <button className="bg-[#CC2837] text-white px-6 py-2 rounded-full font-semibold">
                      View Product
                    </button>
                    <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                      Request a Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] text-black flex flex-col lg:flex-row items-center justify-center text-center px-4 lg:px-24 py-8 gap-6">
        <div className="w-full lg:w-1/3">
          <p className="text-5xl text-gray-800 font-semibold">100%</p>
          <p className="text-gray-500 mt-2">Client satisfaction</p>
        </div>
        <div className="w-full lg:w-1/3">
          <p className="text-5xl text-gray-800 font-semibold">5K</p>
          <p className="text-gray-500 mt-2">Happy clients</p>
        </div>
        <div className="w-full lg:w-1/3">
          <p className="text-5xl text-gray-800 font-semibold">72K</p>
          <p className="text-gray-500 mt-2">Trusted by over 300 global clients</p>
        </div>
      </div>

      <div className="bg-white">
        <Cards />
      </div>
    </>
  );
};

export default HeroSection;
