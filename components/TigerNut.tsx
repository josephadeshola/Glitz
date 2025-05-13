"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const TigerNut = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/chufatigernut.avif"
          fill
          alt="Tiger Nut Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Tiger Nuts</h1>

          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <Link href="https://wa.me/2348123456789">
              <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Message Us
              </Button>
            </Link>
            <Link href="tel:2348123456789">
              <Button className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-10 space-y-12">
        <div>
          <p className="font-bold text-3xl">
            Exporter of Tiger Nuts from Nigeria
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Nigeria is one of the leading producers and exporters of tiger nuts,
            locally known as *aya*. Tiger nuts have grown in popularity across
            global markets due to their versatility and nutritional value. They
            are increasingly used in plant-based milk, flour, and healthy
            snacks.
          </p>
          <p className="mt-4">
            With increasing demand from health-conscious consumers, Nigeria's
            tiger nut industry presents a lucrative opportunity for buyers and
            investors. Our tiger nuts are sourced directly from local farms and
            are carefully selected for export.
          </p>
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              What are Tiger Nuts?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Despite their name, tiger nuts are not actually nuts but small
              tubers that grow underground. They have a naturally sweet, nutty
              flavor and are packed with fiber, healthy fats, and various
              vitamins and minerals. Tiger nuts have been consumed since ancient
              times and are especially popular in West Africa and parts of
              Europe.
            </p>
          </div>

          <section className="px-4 lg:w-1/2 md:px-8">
            <h2 className="text-3xl text-[#CC2837] font-bold mb-4">
              Tiger Nuts
            </h2>
            <div className="flex justify-center">
              <Zoom>
                <Image
                  src="/images/chufatigernut.avif"
                  width={900}
                  height={400}
                  alt="Tiger Nuts"
                  className="rounded-lg h-[60vh] object-cover shadow-md cursor-zoom-in"
                />
              </Zoom>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Click the image to zoom.
            </p>
          </section>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Nutritional Value
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              High in dietary fiber – supports digestion and improves gut
              health.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Rich in resistant starch – helps regulate blood sugar levels and
              promotes weight management.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Contains vitamins E and C – supports immune function and protects
              against free radicals.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Good source of minerals like iron, magnesium, phosphorus, and
              potassium.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Naturally lactose- and gluten-free – ideal for people with dietary
              restrictions.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Provides plant-based energy – great for athletes and active
              lifestyles.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Supports cardiovascular health due to its healthy fat content.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Key Properties of Tiger Nuts
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Small, round tubers with a wrinkled surface and a nutty flavor.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Brownish in color when dried and yellowish-white when fresh.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Can be eaten raw, soaked, roasted, or processed into milk and
              flour.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Long shelf life when properly dried and stored in a cool, dry
              place.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Commonly used in traditional beverages like "kunu aya" or
              "horchata de chufa."
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Naturally sweet flavor makes it a great sugar alternative in
              snacks.
            </li>
          </ul>
        </div>
        <div className="lg:py-7 py-7 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl text-[#CC2837] font-medium mb-12">
              Why Choose Us
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Premium Quality",
                  text: "We source only the finest cocoa beans, ensuring top-grade quality in every batch.",
                },
                {
                  title: "Eco-Friendly Processing",
                  text: "Our techniques minimize environmental impact while maximizing efficiency.",
                },
                {
                  title: "Experienced Team",
                  text: "Our skilled professionals ensure consistent excellence.",
                },
                {
                  title: "Timely Delivery",
                  text: "We prioritize reliability, ensuring your orders arrive on time.",
                },
                {
                  title: "Customer Satisfaction",
                  text: "Expect responsive support and tailored services.",
                },
                {
                  title: "Global Standards",
                  text: "We comply with international export and quality benchmarks.",
                },
              ].map(({ title, text }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl cursor-pointer p-6 shadow-md hover:shadow-xl transition border border-gray-200 hover:border-transparent hover:bg-gradient-to-r from-[#cc2837]/10 to-[#cc2837]/5"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#CC2837] text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-[#e0424f] transition"
              >
                Make Enquiry
              </a>
            </div>
            <SimilarProducts />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TigerNut;
