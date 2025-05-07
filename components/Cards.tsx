"use client";
import { Button } from "@heroui/button";
import Aos from "aos";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaExchangeAlt, FaGlobe } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import Customers from "./Customers";
import Footer from "./Footer";

const productData = [
  {
    title: "Raw Cashew Nuts/Kernels",
    description: "High-yield RCN for food and industrial use.",
    image: "/images/cashew-raw.png",
  },
  {
    title: "Cocoa",
    description: "Fermented beans for premium chocolate.",
    image: "/images/cocoa.png",
  },
  {
    title: "Cassava Chips",
    description: "Sun-dried, high-starch chips for ethanol.",
    image: "/images/cassava-chips.png",
  },
  {
    title: "Shea Nuts",
    description: "Organic, butter-grade, traceable origin.",
    image: "/images/shea-nuts.png",
  },
  {
    title: "Yam",
    description: "Cleaned & hulled. High oil content.",
    image: "/images/yam.png",
  },
];

const stepTwoProduct = [
  {
    title: "Maize",
    description: "Organic, butter-grade, traceable origin.",
    image: "/images/maize.png",
  },
  {
    title: "Tiger nut",
    description: "Cleaned & hulled. High oil content.",
    image: "/images/tiger-nut.png",
  },
  {
    title: "bitter kola",
    description: "GMO-free, protein-rich.",
    image: "/images/bitter-kola.png",
  },
  {
    title: "kola nut",
    description: "Organic, butter-grade, traceable origin.",
    image: "/images/kola-nut.png",
  },
  {
    title: "Groundnut",
    description: "Cleaned & hulled. High oil content.",
    image: "/images/groundnut.png",
  },
  {
    title: "Garlic",
    description: "GMO-free, protein-rich.",
    image: "/images/garlic.png",
  },
  {
    title: "Ginger",
    description: "Organic, butter-grade, traceable origin.",
    image: "/images/ginger1.png",
  },
];


const Cards = () => {

  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true });

  const intervalRef1 = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRef2 = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  useEffect(() => {
    if (emblaApi1) {
      intervalRef1.current = setInterval(() => {
        emblaApi1.scrollNext();
      }, 4000);
    }

    return () => {
      if (intervalRef1.current) clearInterval(intervalRef1.current);
    };
  }, [emblaApi1]);

  useEffect(() => {
    if (emblaApi2) {
      intervalRef2.current = setInterval(() => {
        emblaApi2.scrollPrev();
      }, 4000);
    }

    return () => {
      if (intervalRef2.current) clearInterval(intervalRef2.current);
    };
  }, [emblaApi2]);

  return (
    <>
      <div className="text-black lg:py-20 py-14">
        <p className="text-center lg:text-5xl text-[#CC2837] text-3xl font-bold ">
          Featured Products
        </p>
        <p className="text-center lg:text-lg text-sm mx-auto lg:w-1/2 mt-3">
          Carefully sourced, expertly processed—our top-selling agricultural
          commodities are trusted by buyers worldwide for their quality,
          consistency, and compliance.
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 -mt-2 md:grid-cols-3 gap-6 lg:px-14 mx-auto">
          {productData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] shadow-sm cursor-pointer mx-auto rounded-lg py-8 px-7 hover:shadow-md transition"
            >
              <h3 className="text-lg text-black font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{item.description}</p>
              <Image
                src={item.image}
                alt={item.title}
                height={200}
                width={300}
                className=" object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        {/* Carousel for productData */}
<div ref={emblaRef1} className="embla overflow-hidden px-4">
  <div className="embla__container flex gap-6">
    {productData.map((slide, index) => (
      <div
        key={index}
        className="embla__slide flex-shrink-0 w-[90%] sm:w-[60%] md:w-[33%] p-4"
      >
        <div className="bg-[#F9F9F9] cursor-pointer py-7 px-6 rounded-md shadow-sm hover:shadow-md transition">
          <h3 className="text-lg text-black font-semibold mb-1">
            {slide.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{slide.description}</p>
          <Image
            alt={slide.title}
            src={slide.image}
            width={300}
            height={200}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    ))}
  </div>
</div>


        {/* <div ref={emblaRef1} className="embla lg:px-8 mx-auto">
          <div className="embla__container flex mx-auto justify-around">
            {productData.map((slide, index) => (
              <div
                key={index}
                className="embla__slide flex-shrink-0 lg:w-1/3 mx-auto p-4"
              >
                <div className="bg-[#F9F9F9] cursor-pointer py-7 px-10 rounded-md">
                  <div className="w-72 mx-auto">
                    <h3 className="text-lg text-black font-semibold mb-1">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {slide.description}
                    </p>
                  </div>
                  <div className="w-[300px] h-[200px] mx-auto rounded-md overflow-hidden">
                    <Image
                      alt={slide.title}
                      className="object-cover mx-auto rounded-md"
                      height={200}
                      src={slide.image}
                      width={300}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className="relative w-full overflow-hidden">
        {/* <div ref={emblaRef2} className="embla lg:px-8 mx-auto">
          <div className="embla__container flex mx-auto justify-around">
            {stepTwoProduct.map((slide, index) => (
              <div
                key={index}
                className="embla__slide flex-shrink-0 lg:w-1/3 mx-auto p-4"
              >
                <div className="bg-[#F9F9F9] py-7 px-10 rounded-md">
                  <div className="w-72 mx-auto">
                    <h3 className="text-lg text-black font-semibold mb-1">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {slide.description}
                    </p>
                  </div>
                  <div className="w-[300px] h-[200px] mx-auto rounded-md overflow-hidden">
                    <Image
                      alt={slide.title}
                      className="object-cover  w-full h-full"
                      height={200}
                      unoptimized
                      src={slide.image}
                      width={300}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div>
        <div className="text-center text-black px-4 lg:mt-20 mt-14">
          <p className="lg:text-5xl text-3xl text-[#CC2837] font-bold">
            What We Offer
          </p>
          <p className="lg:text-lg text-sm lg:w-1/2 mx-auto mt-3">
            GLITZ COMMODITIES NIG. LTD connects African producers to global
            buyers, exporting traceable, high-quality agricultural goods to 15+
            countries.
          </p>
        </div>
        <div className="text-black flex flex-col lg:flex-row gap-6 px-6 lg:px-20 py-10 justify-center items-stretch">
          <div className="w-full lg:w-1/3 border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 items-center gap-4 mb-4">
              <FaGlobe className="text-blue-600 text-3xl" />
              <h3 className="text-xl font-semibold">Export Services</h3>
            </div>
            <p className="text-sm text-gray-600">
              Global logistics, certified documentation, and port-to-port
              handling.
            </p>
          </div>

          <div className="w-full lg:w-1/3 border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 items-center  gap-4 mb-4">
              <FaHandshake className="text-green-600 text-3xl" />
              <h3 className="text-xl font-semibold">Procurement</h3>
            </div>
            <p className="text-sm text-gray-600">
              Sourcing directly from farmers, with aggregation, storage, and QA
              controls.
            </p>
          </div>

          <div className="w-full lg:w-1/3 border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 items-center gap-4 mb-4">
              <FaExchangeAlt className="text-yellow-600 text-3xl" />
              <h3 className="text-xl font-semibold">Trading</h3>
            </div>
            <p className="text-sm text-gray-600">
              Spot and forward contract options for high-volume B2B deals.
            </p>
          </div>
        </div>
      </div>
      <div className="text-black">
        <div className="max-w-6xl mx-auto my-8 mt-24 rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                alt="Warehouse worker checking commodity bags"
                className="w-full h-full object-cover"
                src="/images/let-build.png"
              />
            </div>

            <div className="w-full md:w-1/2 bg-[#CC2837] text-white p-8 flex flex-col justify-center">
              <h1 className="lg:text-4xl text-3xl font-bold mb-7">
                Lets Build Your Next Commodity Deal Together
              </h1>

              <p className="lg:text-lg text mb-7 ">
                Lets Build Your Next Commodity Deal Together From inquiry to
                delivery—your trusted export partner in Africa
              </p>

              <div className="mb-4">
                <Button className="bg-[#FFFFFF] text-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-md px-10 font-semibold">
                  Generate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Customers />
      <Footer />
    </>
  );
};

export default Cards;
