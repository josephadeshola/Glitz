"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";

const Cassava = () => {
    return (
        <div className="bg-white text-gray-800">
            <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
                <Image
                    src="/images/cassavachips.webp"
                    fill
                    alt="Cassava Chips Background"
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Cassava Chips
                    </h1>

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
                    <p className="font-bold text-3xl">Exporter of Cassava Chips from Nigeria</p>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Nigeria is one of the world’s top producers and exporters of cassava products, including dried cassava chips. With vast farmlands and favorable conditions, cassava is cultivated extensively for both local consumption and export purposes.
                    </p>
                    <p className="mt-4">
                        Cassava chips are a versatile and in-demand commodity, used in animal feed, ethanol production, and as a key raw material for industrial starch. With increasing global demand and Nigeria's consistent supply, cassava chips represent a growing opportunity in agro-exports.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">What Are Cassava Chips?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Cassava chips are dried slices of cassava tubers (Manihot esculenta), typically produced by peeling, slicing, and drying the roots. These chips are high in carbohydrates and are commonly used in animal feed production, ethanol distillation, and even as a base for processed snacks in some industries.
                    </p>
                </div>

                <div className="overflow-x-auto mt-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Top Cassava Producing Countries</h2>
                    <table className="min-w-full bg-white border border-gray-300 text-sm text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-800">
                            <tr>
                                <th className="px-4 py-2 border-b">Country</th>
                                <th className="px-4 py-2 border-b">Production (2023)</th>
                                <th className="px-4 py-2 border-b">Main Uses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2">Nigeria</td>
                                <td className="px-4 py-2">≈ 63 million tons</td>
                                <td className="px-4 py-2">Food, export, ethanol</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Thailand</td>
                                <td className="px-4 py-2">≈ 30 million tons</td>
                                <td className="px-4 py-2">Export, industrial starch</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Indonesia</td>
                                <td className="px-4 py-2">≈ 20 million tons</td>
                                <td className="px-4 py-2">Food, starch</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Brazil</td>
                                <td className="px-4 py-2">≈ 18 million tons</td>
                                <td className="px-4 py-2">Food, feed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Nutritional Value</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Rich in carbohydrates – a great energy source for humans and livestock.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Contains essential vitamins such as vitamin C and some B-complex vitamins.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Provides fiber which aids digestion.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Naturally gluten-free, suitable for gluten-sensitive diets.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Cassava Chip Characteristics</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Dried slices of peeled cassava tubers, usually 5–7 mm thick.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Moisture content usually under 14% for export quality.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Can be stored long-term when properly dried and packed.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Free from mold, pests, and foreign materials.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Uses</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Animal feed – a cost-effective carbohydrate source for livestock.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Industrial starch production.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Raw material for ethanol and biofuel industries.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Snack chips for human consumption when processed further.
                        </li>
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
                    </div>
                </div>
                <SimilarProducts />
            </section>
        </div>
    );
};

export default Cassava;
