"use client";
import products from "@/data/kernelProducts";
import Image from "next/image";
import { FaDotCircle, FaExpand, FaSpinner, FaTimes } from "react-icons/fa";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!product) {
    notFound();
  }

  return (
    <div className="text-gray-800">
      <div className="min-h-[60vh] bg-gradient-to-b from-[#111827] via-gray-900 to-white -mt-10 py-12 sm:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid gap-10 items-center grid-cols-1 md:grid-cols-2">
          <h1 data-aos="zoom-in" className="text-4xl sm:text-4xl md:text-5xl text-center block md:hidden font-extrabold text-[#CC2837]">
            {product.name}
          </h1>

          <div className="relative w-[220px] sm:w-80 md:w-96 lg:w-full max-w-[500px] h-[220px] sm:h-80 md:h-96 lg:h-[500px] mx-auto shadow-xl rounded-full overflow-hidden border-4 border-gray-200">
            <Image
            data-aos="zoom-in"
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-5 text-center md:text-left">
            <h1 data-aos="zoom-in" className="text-3xl sm:text-4xl md:text-5xl hidden md:block font-extrabold text-[#CC2837]">
              {product.name}
            </h1>
            <p data-aos="fade-up" className="text-sm sm:text-base md:text-lg px-3 font-bold text-[#CC2837]">
              We take pride in supplying quality Raw cashew nuts that are sustainably sourced and traceable.
            </p>
            <p data-aos="zoom-in" className="text-sm sm:text-base md:text-lg px-3 font-bold text-[#CC2837]">
              {product.description || "No description available."}
            </p>
            
          </div>
        </div>
      </div>

      
      <div className="relative z-10 bg-gradient-to-b from-[#CC2837] via-[#881F2A] to-black rounded-b-lg text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h2  data-aos="zoom-in" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              {product.specification?.paramiter}
            </h2>

            <ul className="space-y-4 text-base sm:text-lg font-medium">
              {Object.entries(product.specification || {}).map(([key, value]) => {
                if (key === "size" && value) {
                  return (
                    <div data-aos="zoom-in" key={key}>
                      <div className="flex gap-3 items-center">
                        <FaDotCircle className="text-xl sm:text-2xl text-gray-400" />
                        <div className="font-semibold capitalize">{key}:</div>
                      </div>
                      <p className="ms-9">{value}</p>
                    </div>
                  );
                }

                if (key !== "size" && key !== "paramiter") {
                  return (
                    <div data-aos="zoom-in" key={key}>
                      <div className="flex gap-3 items-center">
                        <FaDotCircle className="text-xl text-gray-400" />
                        <div className="font-semibold capitalize">{key}:</div>
                      </div>
                      <p className="ms-9">{value || "N/A"}</p>
                    </div>
                  );
                }

                return null;
              })}
            </ul>
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] shadow-xl rounded-2xl overflow-hidden border-4 border-white">
            <Image
            data-aos="zoom-in"
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <button
              onClick={() => {
                setLoading(true);
                setIsModalOpen(true);
              }}
              className="absolute top-3 right-3 bg-white/80 text-black p-2 rounded-full hover:scale-110 transition-transform"
              aria-label="Zoom Image"
            >
              <FaExpand size={18} />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl h-[70vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <FaSpinner className="animate-spin text-3xl text-gray-600" />
              </div>
            )}
            <img
            data-aos="zoom-in"
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full transition-transform duration-300 hover:scale-125 cursor-zoom-in"
              onLoad={() => setLoading(false)}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/70 p-2 rounded-full"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
      )}
      <div data-aos="zoom-in" className="glitz-container mt-14">
        <div className="glitz-text rounded px-3 bg-white">
            <Image src="/images/download.png" width={200} height={200} alt="glitz image"/>
          </div>
      </div>
      <section className="bg-white">
        <Footer
          heading="Partner with Us for Seamless Agro-community Trade"
          description="Whether you're a global importer or a local producer, GLITZ Trade is your trusted link to a better, more transparent supply chain."
        />
      </section>
    </div>
  );
}
