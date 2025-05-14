"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const BitterKola = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/bitterkola.jpg"
          fill
          alt="Bitter Kola Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
          <h1 data-aos="zoom-in" className="text-3xl md:text-5xl font-bold mb-4">Bitter Kola</h1>
          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <Link href="https://wa.me/2348123456789">
              <Button data-aos="zoom-in" className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Message Us
              </Button>
            </Link>
            <Link href="tel:2348123456789">
              <Button data-aos="zoom-in" className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="px-4 md:px-8 lg:px-16 py-10 space-y-12">
        <div>
          <p className="font-bold text-3xl">
            Exporter of Bitter Kola from Nigeria
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Bitter kola, also known as *Garcinia kola*, is a highly valued
            agricultural product native to Nigeria and other West African
            countries. Known for its medicinal and health-promoting properties,
            bitter kola is a significant export product with increasing global
            demand.
          </p>
          <p className="mt-4">
            Nigeria is one of the largest producers and exporters of bitter
            kola, offering quality products for pharmaceutical, food, and
            beverage industries across the globe.
          </p>
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              What is Bitter Kola?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Bitter kola is a flowering plant found in Central and Western
              Africa that produces brown, nut-like seeds known for their bitter
              taste and health benefits. It is traditionally used in African
              medicine and widely consumed for its stimulating properties,
              similar to caffeine.
            </p>
          </div>
          <section className="px-4 lg:w-1/2 md:px-8">
            <h2 className="text-3xl text-[#CC2837] font-bold mb-4">
              Bitter Kola
            </h2>
            <Zoom>
              <Image
              data-aos="zoom-in"
                src="/images/bitterkola.jpg"
                width={900}
                height={400}
                alt="Bitter Kola"
                className="rounded-lg lg:h-[60vh] h-[35vh] object-cover shadow-md cursor-zoom-in"
              />
            </Zoom>
            <p className="text-sm text-gray-500 mt-2">
              Click the image to zoom.
            </p>
          </section>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Nutritional and Health Benefits
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Boosts immune system and helps fight infections.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Improves lung function and treats respiratory issues like cough
              and asthma.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Aids in digestion and alleviates gastrointestinal problems.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Contains antioxidants that help fight aging and chronic diseases.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Natural aphrodisiac that enhances libido and vitality.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Export Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bitter kola is exported in both dry and fresh forms depending on the
            buyer's needs. Nigeria exports bitter kola primarily to Europe,
            North America, and parts of Asia. Proper drying and packaging ensure
            long shelf life and quality preservation.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Uses of Bitter Kola
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Consumed directly as a health snack or supplement.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Used in traditional medicine for treating infections and
              inflammations.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Processed into extracts for pharmaceutical products.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Incorporated in energy drinks and herbal teas.
            </li>
          </ul>
        </div>
        <div className="lg:py-20 py-7 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-[#CC2837] mb-12">
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
                data-aos="zoom-in"
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

            <div data-aos="zoom-in" className="mt-12">
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#CC2837] text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-[#e0424f] transition"
              >
                Make Enquiry
              </a>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </section>
    </div>
  );
};

export default BitterKola;
