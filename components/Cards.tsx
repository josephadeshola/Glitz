"use client";
import { Button } from "@heroui/button";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { FaGlobe, FaHandshake, FaExchangeAlt, FaTimes } from "react-icons/fa";
import procurementImg from "@/public/images/procurement.webp";
import exportImg from "@/public/images/exportoffer.webp";
import tradingImg from "@/public/images/tradingoffer.webp";
import Customers from "./Customers";
import Footer from "./Footer";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import products from "@/data/products";

type Service = {
  id: string;
  title: string;
  image: StaticImageData;
  icon: JSX.Element;
  summary: string;
  details: string;
};

const services: Service[] = [
  {
    id: "export",
    title: "Export Services",
    image: exportImg,
    icon: <FaGlobe className="text-blue-600 text-3xl" />,
    summary:
      "Global logistics, certified documentation, and port-to-port handling.",
    details:
      "We provide seamless export solutions including international logistics, certified export documentation, and full port-to-port coordination, ensuring timely delivery and compliance with global trade regulations.",
  },
  {
    id: "procurement",
    title: "Procurement",
    image: procurementImg,
    icon: <FaHandshake className="text-green-600 text-3xl" />,
    summary:
      "Sourcing directly from farmers, with aggregation, storage, and QA controls.",
    details:
      "Our procurement services involve working directly with local farmers to source high-quality agricultural products. We handle aggregation, ensure proper storage, and maintain strict quality assurance controls.",
  },
  {
    id: "trading",
    title: "Trading",
    image: tradingImg,
    icon: <FaExchangeAlt className="text-yellow-600 text-3xl" />,
    summary: "Spot and forward contract options for high-volume B2B deals.",
    details:
      "We offer flexible trading models including spot deals and forward contracts to meet the diverse needs of our B2B clients. Our team ensures reliable transactions and transparent pricing.",
  },
];

const Cards = () => {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true });

  const intervalRef1 = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRef2 = useRef<ReturnType<typeof setInterval> | null>(null);

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


  const shuffledProducts = useMemo(() => {
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const openModal = (service: any) => {
    setSelectedService(service);
  };
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div data-aos="fade-up" className="text-black lg:py-20 py-14">
        <p className="text-center lg:text-5xl text-[#CC2837] text-3xl font-bold ">
          Featured and Export Products
        </p>
        <p className="text-center lg:text-lg text-sm mx-auto lg:w-1/2 mt-3">
          Carefully sourced, expertly processed—our top-selling agricultural
          commodities are trusted by buyers worldwide for their quality,
          consistency, and compliance.
        </p>
      </div>

      <div data-aos="fade-up" className="bg-[#F9F9F9]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="lg:px-4"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/products/${item.slug}`}>
                <div className="p-4">
                  <div className="bg-white py-7 px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <div className="mx-auto lg:w-72">
                      <h3
                        data-aos="fade-down"
                        className="text-lg text-black font-semibold mb-1"
                      >
                        {item.title}
                      </h3>
                      <p
                        data-aos="fade-up"
                        className="text-sm text-gray-500 mb-3"
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="lg:w-[300px] h-[30vh] cursor-pointer lg:mx-auto lg:h-[200px] overflow-hidden rounded-md">
                      <Image
                        data-aos="zoom-in"
                        alt={item.title}
                        src={item.image}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div data-aos="fade-up" className="bg-[#F9F9F9] mt-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
          className="lg:px-4"
        >
          {shuffledProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/products/${item.slug}`}>
                <div className="p-4">
                  <div className="bg-white py-7 px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <div className="mx-auto lg:w-72">
                      <h3
                        data-aos="fade-down"
                        className="text-lg text-black font-semibold mb-1"
                      >
                        {item.title}
                      </h3>
                      <p
                        data-aos="fade-up"
                        className="text-sm text-gray-500 mb-3"
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="lg:w-[300px] h-[30vh] cursor-pointer lg:mx-auto lg:h-[200px] overflow-hidden rounded-md">
                      <Image
                        data-aos="zoom-in"
                        alt={item.title}
                        src={item.image}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div className="text-center text-black px-4 lg:mt-20 mt-5">
          <p
            data-aos="fade-up"
            className="lg:text-5xl text-3xl text-[#CC2837] font-bold"
          >
            What We Offer
          </p>
          <p
            data-aos="fade-up"
            className="lg:text-lg text-sm lg:w-1/2 mx-auto mt-3"
          >
            GLITZ COMMODITIES NIG. LTD connects African producers to global
            buyers, exporting traceable, high-quality agricultural goods to 15+
            countries.
          </p>
        </div>
        <div className="text-black flex flex-col lg:flex-row gap-6 px-6 lg:px-20 py-10 justify-center items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => openModal(service)}
              className="w-full lg:w-1/3 cursor-pointer border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-all duration-300"
            >
              <div
                className="grid grid-cols-1 items-center gap-4 mb-4"
                data-aos="fade-up"
              >
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p data-aos="fade-up" className="text-sm text-gray-600">
                {service.summary}
              </p>
            </div>
          ))}
        </div>
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <FaTimes size={18} />
              </button>
              <div className="flex items-center mb-4 gap-3">
                {selectedService.icon}
                <h3 className="text-xl font-bold">{selectedService.title}</h3>
              </div>
              <div className="relative mx-auto lg:mx-0 lg:w-44 w-full h-80 lg:h-44 rounded-lg overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt="offer image"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 mt-3 lg:text-start text-center">{selectedService.details}</p>
            </div>
          </div>
        )}
      </div>
      <div className="text-black">
        <div className="max-w-6xl mx-auto my-8 mt-24 lg:rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div data-aos="fade-up" className="w-full md:w-1/2">
              <img
                alt="Warehouse worker checking commodity bags"
                className="w-full h-full rounded-tl-none object-cover"
                src="/images/let-build.png"
              />
            </div>

            <div className="w-full md:w-1/2 bg-[#CC2837] text-white p-8 flex flex-col justify-center">
              <h1
                data-aos="fade-up"
                className="lg:text-4xl text-3xl font-bold mb-7"
              >
                Lets Build Your Next Commodity Deal Together
              </h1>

              <p data-aos="fade-up" className="lg:text-lg text mb-7 ">
                Lets Build Your Next Commodity Deal Together From inquiry to
                delivery—your trusted export partner in Africa
              </p>

              <div data-aos="fade-up" className="mb-4">
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
