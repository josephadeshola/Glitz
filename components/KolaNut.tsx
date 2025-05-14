"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const KolaNut = () => {
    return (
        <div className="bg-white text-gray-800">
            <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
                <Image
                    src="/images/download1.jpg"
                    fill
                    alt="Kola Nut Background"
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
                    <h1 data-aos="zoom-in" className="text-3xl md:text-5xl font-bold mb-4">
                        Kola Nuts
                    </h1>
                    <div className="flex justify-center mt-8 gap-4 flex-wrap">
                        <Link data-aos="zoom-in" href="https://wa.me/2348123456789">
                            <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                                Message Us
                            </Button>
                        </Link>
                        <Link data-aos="zoom-in" href="tel:2348123456789">
                            <Button className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up" className="px-4 md:px-8 lg:px-16 py-10 space-y-12">
                <div>
                    <p className="font-bold text-3xl">Exporter of Kola Nuts from Nigeria</p>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Nigeria is a leading exporter of kola nuts, a culturally significant and economically valuable crop widely used across West Africa and beyond. The kola nut industry supports numerous farmers and traders, playing a vital role in Nigeria’s agricultural export portfolio.
                    </p>
                    <p className="mt-4">
                        With increasing global interest in herbal remedies, energy supplements, and traditional medicines, the demand for high-quality kola nuts continues to grow. Nigerian exporters provide a consistent supply of premium kola nuts for both local consumption and international trade.
                    </p>
                </div>

                <div className="lg:flex justify-between">
                <div className="lg:w-1/2">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">What are Kola Nuts?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Kola nuts are caffeine-containing fruits of the kola tree, primarily found in tropical Africa. The nuts are often chewed for their stimulant effects and hold cultural and ceremonial significance in many African communities.
                        <br /><br />
                        They are typically bitter when fresh but become milder as they dry. Kola nuts are used in energy drinks, traditional medicine, and cultural rituals, and are known for their ability to fight fatigue and increase alertness.
                    </p>
                </div>
                 <section className="px-4 lg:w-1/2 md:px-8">
                        <h2 className="text-3xl text-[#CC2837] font-bold mb-4">Kola Nuts</h2>
                        <Zoom>
                            <Image
                            data-aos="zoom-in"
                                src="/images/download1.jpg"
                                width={900}
                                height={400}
                                alt="Kola Nuts"
                                className="rounded-lg lg:h-[60vh] h-[35vh] object-cover shadow-md cursor-zoom-in"
                            />
                        </Zoom>
                        <p className="text-sm text-gray-500 mt-2">
                            Click the image to zoom.
                        </p>
                    </section>
                </div>

                <div className="overflow-x-auto mt-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Top Kola Nut Producing Countries</h2>
                    <table className="min-w-full bg-white border border-gray-300 text-sm text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-800">
                            <tr>
                                <th className="px-4 py-2 border-b">Country</th>
                                <th className="px-4 py-2 border-b">Production Volume</th>
                                <th className="px-4 py-2 border-b">Key Markets</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2">Nigeria</td>
                                <td className="px-4 py-2">≈ 150,000 MT</td>
                                <td className="px-4 py-2">West Africa, U.S., Europe</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Ivory Coast</td>
                                <td className="px-4 py-2">≈ 120,000 MT</td>
                                <td className="px-4 py-2">Africa, France</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Cameroon</td>
                                <td className="px-4 py-2">≈ 50,000 MT</td>
                                <td className="px-4 py-2">West Africa, U.K.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Nutritional & Medicinal Value</h2>
                    <ul className="space-y-2 text-gray-600">
                        {[
                            "Contains natural caffeine – enhances mental alertness and fights fatigue.",
                            "Rich in theobromine – a stimulant also found in chocolate that supports cardiovascular health.",
                            "Used traditionally to aid digestion and reduce hunger.",
                            "Believed to have antibacterial and anti-inflammatory properties.",
                            "Supports metabolic processes and energy levels.",
                            "Used in traditional medicine for respiratory conditions and as an aphrodisiac.",
                            "Low in calories and contains trace minerals like potassium and magnesium."
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <FaCheckCircle className="mt-1 text-black" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Kola Nut Characteristics</h2>
                    <ul className="space-y-2 text-gray-600">
                        {[
                            "Small, oval-shaped nut encased in a pod with 2–5 lobes.",
                            "Color ranges from white and pink to deep red depending on variety.",
                            "Strong bitter taste when fresh, becomes milder when dried.",
                            "Typically 3 to 6 cm in length and weighs about 5–8 grams.",
                            "Requires shade drying after harvest to preserve flavor and reduce spoilage.",
                            "Very high shelf life if stored properly in dry conditions.",
                            "Used both raw and in processed forms in food and beverage industries."
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <FaCheckCircle className="mt-1 text-black" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Uses of Kola Nuts</h2>
                    <ul className="space-y-2 text-gray-600">
                        {[
                            "Used in the production of soft drinks and energy beverages.",
                            "Consumed raw or dried in traditional ceremonies and social gatherings.",
                            "Processed into powder and extracts for medicinal products.",
                            "Used in pharmaceuticals and herbal supplements.",
                            "Cultural symbol of hospitality and respect in African traditions.",
                            "Used in brewing traditional tonics and local drinks.",
                            "Increasingly used as natural caffeine alternatives in organic markets."
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <FaCheckCircle className="mt-1 text-black" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:py-20 py-7 bg-gradient-to-b from-white via-gray-50 to-white">
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
                                data-aos="zoom-in"
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
                            data-aos="zoom-in"
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
        </div>
    );
};

export default KolaNut;
