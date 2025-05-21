"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const GroundNut = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/groundnutlg.jpg"
          fill
          alt="Groundnut Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
          <h1
            data-aos="zoom-in"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Premium Groundnuts (Peanuts)
          </h1>

          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <Link data-aos="zoom-in" href="https://wa.me/2348136851352">
              <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Message Us
              </Button>
            </Link>
            <Link data-aos="zoom-in" href="tel:2348136851352">
              <Button className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="px-4 md:px-8 lg:px-16 py-10 space-y-12"
      >
        <div>
          <p className="font-bold text-3xl">
            Trusted Groundnut Exporter in Nigeria
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            <strong>Product & Quality</strong>
            <br />
            Our groundnuts are sourced from top-producing regions in Nigeria. We
            ensure rigorous quality control, sorting, and drying to deliver
            clean, aflatoxin-free, and moisture-optimized peanuts that meet
            international export standards.
          </p>
          <p className="mt-4">
            <strong>Logistics</strong>
            <br />
            We offer end-to-end export solutions, including documentation,
            customs clearance, and reliable shipment tracking, delivering
            peanuts safely to global destinations.
          </p>
          <p>
            <strong>Conclusion</strong>
            <br />
            Partner with Still Morris Consults for premium Nigerian groundnuts,
            packaged and delivered with excellence to meet your supply chain
            needs.
          </p>
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              What Are Groundnuts?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Groundnuts, also known as peanuts, are edible seeds of the legume
              family that grow underground. Unlike tree nuts, peanuts develop
              beneath the soil after pollination. They are rich in nutrients and
              widely used in both raw and processed forms for human and animal
              consumption.
            </p>
          </div>
          <section className="px-4 lg:w-1/2 md:px-8">
            <h2 className="text-3xl text-[#CC2837] font-bold mb-4">
              Ground Nuts
            </h2>
            <Zoom>
              <Image
                data-aos="zoom-in"
                src="/images/groundnutlg.jpg"
                width={900}
                height={400}
                alt="Ground Nuts"
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
            Top Groundnut Exporting Countries
          </h2>
          <table className="min-w-full bg-white border border-gray-300 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 border-b">Country</th>
                <th className="px-4 py-2 border-b">Export Volume (2023)</th>
                <th className="px-4 py-2 border-b">Key Markets</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">India</td>
                <td className="px-4 py-2">≈ 700,000 MT</td>
                <td className="px-4 py-2">Indonesia, Vietnam, EU</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">United States</td>
                <td className="px-4 py-2">≈ 600,000 MT</td>
                <td className="px-4 py-2">Canada, Mexico, Europe</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Nigeria</td>
                <td className="px-4 py-2">≈ 350,000 MT</td>
                <td className="px-4 py-2">China, EU, Asia</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Argentina</td>
                <td className="px-4 py-2">≈ 450,000 MT</td>
                <td className="px-4 py-2">Europe, Middle East</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Sudan</td>
                <td className="px-4 py-2">≈ 100,000 MT</td>
                <td className="px-4 py-2">Asia, Middle East</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Nutritional Benefits
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Rich in plant-based protein – supports muscle development and
              repair.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              High in monounsaturated fats – promotes heart health and reduces
              LDL cholesterol.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Excellent source of niacin, folate, and vitamin E – essential for
              brain and skin health.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Contains magnesium and phosphorus – supports bone health and
              energy production.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Rich in antioxidants – helps combat oxidative stress and
              inflammation.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Naturally cholesterol-free – ideal for low-cholesterol diets.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Low glycemic index – supports stable blood sugar levels.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Groundnut Properties
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Small, oval seeds encased in a thin brown skin and a hard shell.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Grows underground as part of the legume family.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Requires well-drained sandy soil and warm temperatures to thrive.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Can be stored for long periods when dried to optimal moisture
              levels.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Common Uses</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Eaten roasted, boiled, or raw as a snack.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Processed into peanut butter, oil, and flour.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Used in confectionery and bakery industries.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Residue (cake) after oil extraction used in animal feed.
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

            <div className="mt-12">
              <a
                data-aos="zoom-in"
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

export default GroundNut;
