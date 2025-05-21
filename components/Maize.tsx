"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Maize = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/maizeimg.jpg"
          fill
          alt="Maize Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Maize</h1>
          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <Link href="https://wa.me/2348136851352">
              <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Message Us
              </Button>
            </Link>
            <Link href="tel:2348136851352">
              <Button className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-10 space-y-12">
        <div>
          <p className="font-bold text-3xl">Exporter of Maize from Nigeria</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Nigeria is a major producer and exporter of maize (corn), supplying
            both domestic and international markets. Maize is a staple crop that
            plays a significant role in food security and animal feed
            industries. Nigerian maize is known for its quality, with varieties
            suitable for both human consumption and industrial processing.
          </p>
          <p className="mt-4">
            With a supportive agricultural sector and increasing investment in
            storage and logistics, maize exports from Nigeria offer promising
            opportunities to international buyers and agribusiness investors.
          </p>
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              What is Maize?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Maize, also known as corn, is a cereal grain first domesticated by
              indigenous peoples in southern Mexico. It is one of the world’s
              most important food crops. Maize is used for human consumption,
              livestock feed, and as a raw material in industrial products like
              biofuel, starch, and alcohol.
            </p>
          </div>
          <section className="px-4 lg:w-1/2 md:px-8">
            <h2 className="text-3xl text-[#CC2837] font-bold mb-4">Maize</h2>
            <Zoom>
              <Image
                src="/images/maizeimg.jpg"
                width={900}
                height={400}
                alt="Maize"
                className="rounded-lg lg:h-[60vh] h-[35vh] object-cover shadow-md cursor-zoom-in"
              />
            </Zoom>
            <p className="text-sm text-gray-500 mt-2">
              Click the image to zoom.
            </p>
          </section>
        </div>

        <div className="overflow-x-auto mt-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Top Maize Producing Countries
          </h2>
          <table className="min-w-full bg-white border border-gray-300 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 border-b">Country</th>
                <th className="px-4 py-2 border-b">Production Volume (2023)</th>
                <th className="px-4 py-2 border-b">Key Markets</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">United States</td>
                <td className="px-4 py-2">≈ 384 million MT</td>
                <td className="px-4 py-2">China, Mexico, Japan</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">China</td>
                <td className="px-4 py-2">≈ 277 million MT</td>
                <td className="px-4 py-2">Domestic Use</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Brazil</td>
                <td className="px-4 py-2">≈ 127 million MT</td>
                <td className="px-4 py-2">EU, Asia, Middle East</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Nigeria</td>
                <td className="px-4 py-2">≈ 11 million MT</td>
                <td className="px-4 py-2">West Africa, Middle East</td>
              </tr>
              <tr>
                <td className="px-4 py-2">India</td>
                <td className="px-4 py-2">≈ 30 million MT</td>
                <td className="px-4 py-2">Asia, Africa</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Nutritional Value
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              High in carbohydrates – a great energy source.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Rich in fiber – supports digestive health.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Contains essential vitamins like B-complex (B1, B5, B9) and
              antioxidants.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Gluten-free – ideal for people with gluten intolerance.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Maize Properties
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Yellow or white kernels, depending on the variety.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Can be dried and stored for long periods.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Grown in various climates, especially tropical and subtropical
              zones.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Used as both food and industrial raw material.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Uses of Maize</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Staple food (e.g., pap, cornmeal, tortillas).
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Used in animal feed production.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Industrial uses like ethanol, corn starch, and bio-plastics.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Processed into snacks like popcorn and cornflakes.
            </li>
          </ul>
        </div>

        <div className="lg:py-20 py-7 bg-gradient-to-b from-white via-gray-50 to-white">
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
                href="https://wa.me/2348136851352"
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
    </div>
  );
};

export default Maize;
