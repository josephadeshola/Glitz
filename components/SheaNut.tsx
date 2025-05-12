"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";

const SheaNut = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/sheanut.avif"
          fill
          alt="Shea Nuts Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Shea Nuts</h1>
          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
              Message Us
            </Button>
            <Button className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="px-4 md:px-8 lg:px-16 py-10 space-y-12">
        <div>
          <p className="font-bold text-3xl">Exporter of Shea Nuts from Nigeria</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Nigeria is a leading exporter of shea nuts, which are vital to the production of shea butter—a key ingredient in cosmetics, food, and pharmaceuticals. The shea industry supports rural economies and offers significant opportunities for trade and investment.
          </p>
          <p className="mt-4">
            With abundant shea tree populations and growing global demand, Nigeria's shea export sector is poised for continued growth, attracting investors and trade partners worldwide.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">What Are Shea Nuts?</h2>
          <p className="text-gray-700 leading-relaxed">
            Shea nuts are the seeds of the shea tree (Vitellaria paradoxa), native to Africa. Enclosed in a hard shell, these nuts are rich in oil and are processed to extract shea butter, renowned for its moisturizing properties.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Nutritional Value</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Rich in healthy fats, particularly stearic and oleic acids.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Contains vitamins A and E, which have antioxidant properties.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Provides essential nutrients beneficial for skin and hair health.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Uses</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Processed into shea butter for cosmetics and skincare products.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Utilized in the food industry as a cocoa butter substitute.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Employed in traditional medicine for its therapeutic properties.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Why Source from Nigeria?</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Abundant natural shea tree populations across multiple states.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Experienced workforce in harvesting and processing shea nuts.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Government support for agricultural exports and value addition.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Export Preparation</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Nuts are collected and sun-dried to reduce moisture content.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Undergo cleaning and sorting to meet international quality standards.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Packaged in breathable sacks to maintain quality during transit.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Accompanied by necessary export documentation and certifications.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Economic Impact</h2>
          <p className="text-gray-700 leading-relaxed">
            The shea industry is a significant contributor to Nigeria's non-oil exports, providing income for rural communities and promoting sustainable land use. Continued investment in this sector enhances economic development and environmental conservation.
          </p>
        </div>

         <div className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl md:text-5xl text-[#CC2837] font-medium mb-12">Why Choose Us</h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Premium Quality", text: "We source only the finest cocoa beans, ensuring top-grade quality in every batch." },
                            { title: "Eco-Friendly Processing", text: "Our techniques minimize environmental impact while maximizing efficiency." },
                            { title: "Experienced Team", text: "Our skilled professionals ensure consistent excellence." },
                            { title: "Timely Delivery", text: "We prioritize reliability, ensuring your orders arrive on time." },
                            { title: "Customer Satisfaction", text: "Expect responsive support and tailored services." },
                            { title: "Global Standards", text: "We comply with international export and quality benchmarks." }
                        ].map(({ title, text }, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl cursor-pointer p-6 shadow-md hover:shadow-xl transition border border-gray-200 hover:border-transparent hover:bg-gradient-to-r from-[#cc2837]/10 to-[#cc2837]/5"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
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
                    <SimilarProducts/>
                </div>
            </div>
      </section>
    </div>
  );
};

export default SheaNut;
