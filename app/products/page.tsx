import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import Footer from "@/components/Footer";
import Link from "next/link";
import products from "../../data/products";
import { CiStar } from "react-icons/ci";

const ProductPage = () => {
  return (
    <>
      <div className="relative w-full overflow-auto">
        <div className="fixed top-0 left-0 w-full lg:h-[100vh] h-[80vh] z-0">
          <Image
            src="/images/productsimg.webp"
            fill
            alt="Product Background"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 " />
        </div>

        <div className="relative z-10 pt-[95vh]">
          <div className="text-white text-center max-w-3xl mx-auto px-4 md:px-8 -mt-[75vh] lg:-mt-[60vh] mb-12">
            <h1
              data-aos="zoom-in"
              className="text-4xl md:text-4xl lg:text-[70px] font-bold mb-4"
            >
              Products
            </h1>
          </div>

          <section className="bg-gradient-to-b from-red-800 lg:mt-64 mt-44 rounded-t-large to-white">
            <p
              data-aos="fade-up"
              className="lg:text-5xl text-3xl font-medium pt-10 mb-5 text-white text-center"
            >
              Products We Export
            </p>
            <div className="px-2 sm:px-6 md:px-8 lg:px-16 xl:px-32">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10">
                {products.map((product, index) => (
                  <Link key={index} href={`/products/${product.slug}`}>
                    <div
                      className="bg-white border opacity-90 cursor-pointer rounded shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
                    >
                      <div className="relative w-full lg:h-48 h-40">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover hover:opacity-100 transform hover:scale-105 transition duration-500 ease-in-out rounded"
                        />
                      </div>
                      <div className="p-5 text-center">
                        <div className="text-black font-semibold text-sm sm:text-xl">
                          {product.title}
                        </div>
                        <div className="flex justify-center text-xl mt-3 text-[#CC2837]">
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                        </div>
                        <Button
                          className="text-sm sm:text-md mt-4 font-semibold rounded-none border-2 hover:bg-white hover:text-[#CC2837] text-white bg-[#CC2837]"
                        >
                          Make Enquiry
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <section className="bg-white">
              <Footer
                heading="Partner with Us for Seamless Agro-community Trade"
                description="Whether you're a global importer or a local producer, GLITZ Trade is your trusted link to a better, more transparent supply chain."
              />
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
