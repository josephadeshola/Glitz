import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import Footer from "@/components/Footer";
import Link from "next/link";
import products from "@/data/kernelProducts"

const kernelsProductPage = () => {

    return (
        <>
            <div className="relative w-full overflow-auto">
                <div className="fixed top-0 left-0 w-full h-[70vh] z-0">
                    <Image
                        src="/images/chatcashew.webp"
                        fill
                        alt="Product Background"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 " />
                </div>

                <div className="relative z-10 pt-[95vh]">
                    <div className="text-white text-center max-w-3xl mx-auto px-4 md:px-8 -mt-[80vh] lg:-mt-[80vh] mb-12">
                        <h1 data-aos="zoom-in" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Premium Cashew Kernels
                        </h1>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <Button data-aos="fade-up" className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                                    Message Us
                                </Button>
                                <Button data-aos="zoom-in" className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                                    Contact Us
                                </Button>
                            </div>
                    </div>

                    <section className="bg-gradient-to-b from-red-800 lg:mt-36  to-white">
                        <div className="py-16 px-4 md:px-12 lg:px-32">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                                {products.map((product, index) => (
                                    <Link key={index} href={product.slug.startsWith("/") ? product.slug : `/kernels/${product.slug}`}>
                                        <div
                                            data-aos="fade-up"
                                            key={index}
                                            className="bg-white opacity-90 cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden animate-fadeIn"
                                        >
                                            <div className="relative w-full h-48">
                                                <Image
                                                    data-aos="zoom-in"
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover hover:opacity-100 transform hover:scale-105 transition duration-500 ease-in-out rounded-t-2xl"
                                                />
                                            </div>
                                            <div className="p-5">
                                                <Button data-aos="zoom-in" className="text-md font-semibold rounded-full border-2 hover:bg-[#CC2837] hover:text-white border-[#CC2837] text-[#CC2837] bg-white">
                                                    {product.name}
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

export default kernelsProductPage;
