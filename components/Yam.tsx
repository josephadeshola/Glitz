"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";

const Yam = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
                <Image
                    src="/images/yam.png"
                    fill
                    alt="Yam Background"
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Yam
                    </h1>

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
                    <p className="font-bold text-3xl">Leading Yam Exporter from Nigeria</p>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Nigeria is the world’s largest producer and exporter of yam, accounting for over 65% of global yam production. With fertile land and favorable climate, yam farming plays a crucial role in Nigeria’s agricultural economy and food security.
                    </p>
                    <p className="mt-4">
                        Export-grade yams from Nigeria are known for their quality, size, and taste. Nigeria exports primarily white yam (Dioscorea rotundata) which is in high demand across Europe, North America, and other parts of Africa.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">What is Yam?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Yam is a starchy tuber belonging to the genus *Dioscorea*. It is an essential dietary staple in many parts of Africa, especially Nigeria, where it is cultivated extensively for both local consumption and export.
                        Unlike sweet potatoes, yams have a rough brown skin and white, yellow, or purple flesh depending on the variety. They are rich in carbohydrates and can be boiled, roasted, pounded, or fried.
                    </p>
                </div>

                <div className="overflow-x-auto mt-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Top Yam Exporting Countries</h2>
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
                                <td className="px-4 py-2">Nigeria</td>
                                <td className="px-4 py-2">≈ 4.5 million MT</td>
                                <td className="px-4 py-2">UK, U.S., Canada</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Ghana</td>
                                <td className="px-4 py-2">≈ 900,000 MT</td>
                                <td className="px-4 py-2">Europe, U.S.</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Ivory Coast</td>
                                <td className="px-4 py-2">≈ 600,000 MT</td>
                                <td className="px-4 py-2">Africa, Europe</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Nutritional Value</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> High in complex carbohydrates – provides long-lasting energy.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Rich in dietary fiber – aids digestion and supports gut health.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Contains vitamin C – boosts immune function and skin health.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Good source of potassium – essential for heart and muscle function.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Contains antioxidants – helps fight free radicals and inflammation.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Naturally gluten-free – safe for individuals with celiac disease.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Yam Characteristics</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Long cylindrical shape with rough brown skin.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> White or yellowish flesh inside depending on variety.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Typically weighs 2–10 kg per tuber.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Requires dry storage conditions to prevent sprouting.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Harvested manually with care to avoid damage.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Uses</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Boiled or fried for traditional dishes like porridge and yam fries.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Pounded into “pounded yam” and served with soups.</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Used in flour production for baking or yam flour (elubo).</li>
                        <li className="flex items-start gap-2"><FaCheckCircle className="mt-1" /> Can be fermented into products like amala or yam fufu.</li>
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
                           <SimilarProducts/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Yam;
