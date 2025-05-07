"use client";
import React, { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CountUp from "react-countup";
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

  return (
    <>
      <div className="relative top-0  w-full h-screen overflow-hidden">
        <button
          className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
          onClick={() => emblaApi?.scrollNext()}
        >
          <FaChevronRight size={20} />
        </button>

        <div ref={emblaRef} className="embla">
          <div className="embla__container flex h-screen">
            {heroImages.map((slide, index) => (
              <div
                key={index}
                className="embla__slide relative flex-shrink-0 w-full h-full"
              >
                <Image
                  fill
                  priority
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                  src={slide.image}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
                  <h1
                    className="lg:text-5xl text-2xl md:text-5xl font-bold max-w-4xl leading-tight"
                    data-aos={index === selectedIndex ? slide.aosType : ""}
                  >
                    {slide.heading}
                  </h1>
                  <p
                    className="lg:mt-5 mt-2 lg:text-lg text-md max-w-2xl"
                    data-aos={index === selectedIndex ? slide.aosType : ""}
                  >
                    {slide.subtext}
                  </p>
                  <div className="mt-9 flex gap-4" data-aos="fade-up">
                    <button className="bg-[#CC2837] transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white px-6 py-2 rounded-full font-semibold">
                      View Product
                    </button>
                    <button className="border border-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black">
                      Request a Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
