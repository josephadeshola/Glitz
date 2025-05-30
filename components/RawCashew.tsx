"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const RawCashew = () => {
    return (
        <div className="bg-white text-gray-800">
            <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
                <Image
                    src="/images/neatcashew.webp"
                    fill
                    alt="Raw Cashew Background"
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Raw Cashew Nuts
                    </h1>
                    <p className="text-md md:text-lg mb-6">
                        Discover the nutritional power and export potential of Nigeria's premium cashew nuts.
                    </p>
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
                    <p className="font-bold text-3xl">Exporter of Raw Cashew from Nigeria</p>
                    <p className="text-gray-700 mt-4 leading-relaxed">Nigeria is one of the largest exporters of raw cashew nuts globally. The cashew industry has become a vital part of the country’s non-oil export economy, offering employment and economic benefits to thousands. Growing international demand, driven by the nut’s nutritional and commercial value, has solidified Nigeria’s position as a key supplier.</p>
                    <p className="mt-4">With a strong production base, reliable exporters, and supportive regulations, Nigeria’s cashew export sector continues to grow. It offers rich opportunities for investors and trade partners looking to tap into the global demand for high-quality raw cashew nuts.</p>
                </div>
                <div className="lg:flex justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-xl md:text-2xl font-bold mb-3">What is Raw Cashew Nuts</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Raw cashew nuts are not technically nuts. In fact, it is the seed of the cashew fruit from the cashew tree. The cashew nut is linked to the base of the cashew fruit. Perhaps this is why it is referred to as a nut rather than a seed because it does not fit the mold of typical seeds.

                            The cashew nut is protected by a strong shell. And before it is consumed, it normally goes through a series of treatments to remove the shell and any poisons. It is frequently roasted or salted and then processed into various snacks.
                        </p>
                    </div>
                    <section className="px-4 lg:w-1/2 md:px-8">
                        <h2 className="text-3xl text-[#CC2837] font-bold mb-4">Raw Cashew Nuts</h2>
                        <Zoom>
                            <Image
                                src="/images/neatcashew.webp"
                                width={900}
                                height={400}
                                alt="Raw Cashew Nuts"
                                className="rounded-lg lg:h-[60vh] h-[35vh] object-cover shadow-md cursor-zoom-in"
                            />
                        </Zoom>
                        <p className="text-sm text-gray-500 mt-2">
                            Click the image to zoom.
                        </p>
                    </section>
                </div>

                <div className="overflow-x-auto mt-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Top Cashew Exporting Countries</h2>
                    <table className="min-w-full bg-white border border-gray-300 text-sm text-left text-gray-700">
                        <thead className="bg-[#CC2837] text-white">
                            <tr>
                                <th className="px-4 py-2 border-b">Country</th>
                                <th className="px-4 py-2 border-b">Export Volume (2023)</th>
                                <th className="px-4 py-2 border-b">Key Markets</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2">Vietnam</td>
                                <td className="px-4 py-2">≈ 590,000 MT</td>
                                <td className="px-4 py-2">U.S., EU, China</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">India</td>
                                <td className="px-4 py-2">≈ 180,000 MT</td>
                                <td className="px-4 py-2">Middle East, U.S., Europe</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Ivory Coast</td>
                                <td className="px-4 py-2">≈ 760,000 MT (mostly raw nuts)</td>
                                <td className="px-4 py-2">Vietnam, India</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Nigeria</td>
                                <td className="px-4 py-2">≈ 250,000 MT</td>
                                <td className="px-4 py-2">Vietnam, India, U.S.</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Benin</td>
                                <td className="px-4 py-2">≈ 140,000 MT</td>
                                <td className="px-4 py-2">India, Vietnam</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Nutritional Value</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            High in healthy monounsaturated fats – supports heart health and helps reduce bad cholesterol levels.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Rich in protein and dietary fiber – promotes muscle repair and aids in digestion, helping to maintain a healthy gut.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Contains essential vitamins like B1 (thiamine), B6 (pyridoxine), and E – boosts metabolism, supports brain health, and protects cells from oxidative damage.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Loaded with minerals such as copper, magnesium, and phosphorus – essential for bone development, energy production, and immune function.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Packed with antioxidants – helps fight inflammation and protect the body against chronic diseases.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Low in carbohydrates – suitable for low-carb or ketogenic diets.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Naturally gluten-free – a safe option for individuals with gluten intolerance or celiac disease.
                        </li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Raw Cashew Nut Properties</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Kidney-shaped drupe containing a single seed encased in a hard outer shell.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Light gray to brown in color with a smooth, leathery surface.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Contains a caustic oil (anacardic acid) in the shell, which requires careful processing before consumption.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Typically weighs between 3 to 5 grams and measures about 2–3 cm in length.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            High oil content makes it a valuable raw material for edible oil extraction and biofuel production.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Rich in antioxidants and phytochemicals, especially in the outer shell and kernel.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Requires sun drying or mechanical drying after harvest to reduce moisture and prevent spoilage.
                        </li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Uses</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Consumed as roasted snacks or in confectionery
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Processed into dairy alternatives like cashew milk and cheese
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Used in making cashew butter and flour for gluten-free diets
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Cashew Nut Shell Liquid (CNSL) is used in brake linings, paints, and resins
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Why Source from Nigeria?</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Favorable climate ensures high-quality yields
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Abundant raw material availability across multiple states
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Improving processing infrastructure and export logistics
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Government incentives for agricultural exporters
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Export Preparation</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Nuts are handpicked and sun-dried to reduce moisture content
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Undergo cleaning, sorting, and grading to meet global quality standards
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Packaged in 80kg jute bags for ventilation and durability during shipping
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Export documentation includes phytosanitary certificates, invoices, and quality test reports
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Economic Impact</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The cashew industry is a vital part of Nigeria's non-oil export sector. It empowers rural farmers, creates jobs across the value chain, and boosts foreign exchange earnings. With the rising global demand, investments in cashew processing and export infrastructure are expected to grow, further positioning Nigeria as a top exporter in the years ahead.
                    </p>
                </div>
            </section>
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
        </div>
    );
};

export default RawCashew;
