"use client";
import products from "@/data/products";
import Image from "next/image";
import { useState } from "react";
import { FaExpand, FaTimes, FaSpinner, FaDotCircle } from "react-icons/fa";
import Footer from "@/components/Footer";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div className=" text-gray-800">
      <div className="min-h-[60vh] bg-gradient-to-b from-[#111827] via-gray-900 to-white -mt-10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full max-w-[500px] h-[500px] mx-auto shadow-xl rounded-full overflow-hidden border-4 border-gray-200">
            <Image
              data-aos="zoom-in"
              src={product.image}
              alt={product.name}
              layout="fill"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-5 text-center md:text-left">
            <h1
              data-aos="zoom-in"
              className="text-4xl md:text-5xl font-extrabold text-[#CC2837]"
            >
              {product.name}
            </h1>
            <p
              data-aos="zoom-in"
              className="text-md font-bold md:text-lg text-gray-100"
            >
              We take pride in supplying quality cashew kernels that are
              sustainably sourced.
            </p>
            <p
              data-aos="fade-up"
              className="text-base font-bold md:text-lg text-gray-300"
            >
              {product.description || "No description available."}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-[#CC2837] via-[#881F2A] rounded-b-lg to-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2
              data-aos="zoom-in"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {product.specification.paramiter}
            </h2>

            <ul className="space-y-4 text-lg font-medium">
              {Object.entries(product.specification).map(([key, value]) => {
                if (key === "size" && value) {
                  return (
                    <div data-aos="zoom-in" key={key} className="">
                      <div className="flex gap-3 items-center">
                        <FaDotCircle className="text-2xl text-gray-600" />
                        <div className="font-semibold capitalize">{key}:</div>
                      </div>
                      <p className="text-white ms-9">{value}</p>
                    </div>
                  );
                }

                if (key !== "size") {
                  return (
                    <div data-aos="zoom-in" key={key}>
                      <div className="flex gap-3 items-center">
                        <FaDotCircle className="text-xl text-gray-600" />
                        <div className="font-semibold capitalize">{key}:</div>
                      </div>
                      <p className="text-white ms-9">{value || "N/A"}</p>
                    </div>
                  );
                }

                return null;
              })}
            </ul>
          </div>

          <div className="relative w-full h-[400px] cursor-pointer shadow-xl rounded-2xl overflow-hidden border-4 border-white">
            <Image
              data-aos="zoom-in"
              src={product.image}
              alt={product.name}
              layout="fill"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />

            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-3 right-3 bg-white/80 text-black p-2 rounded-full hover:scale-110 transition-transform"
              aria-label="Zoom Image"
            >
              <FaExpand size={18} />
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div
            data-aos="zoom-in"
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative w-[70vw] h-[70vh] max-w-4xl zoom-container overflow-hidden">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <FaSpinner className="animate-spin text-3xl text-gray-600" />
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full"
                style={{ transform: "scale(1.5)" }}
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
      </div>

      <div data-aos="zoom-in" className="glitz-container mt-14">
        <div className="glitz-text rounded">GLITZ</div>
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
