"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Cocoa = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
                <Image
                    src="/images/chatcocoa.webp"
                    fill
                    alt="Raw Cashew Background"
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Cocoa Beans</h1>
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

            {/* Main Content Section */}
            <section className="px-4 md:px-8 lg:px-16 py-10 space-y-12">
                <div>
                    <p className="font-bold text-3xl">Exporter of Cocoa Beans In Nigeria</p>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Nigeria ranks among the top cocoa-producing countries in the world, contributing significantly to global supply. Cocoa is a key agricultural export and plays a vital role in the economy, supporting thousands of local farmers and stakeholders.
                    </p>
                    <p className="mt-4 leading-relaxed">
                        We provide premium cocoa beans, sourced from certified farms, ensuring proper fermentation, drying, and compliance with international quality requirements. <br />
                        <strong>Product and Quality:</strong> Our cocoa beans undergo strict quality control, are free from defects, and have an ideal moisture content (7.5%). We guarantee Fair Trade and ICCO-certified beans, packed and stored for optimal freshness during shipment. <br />
                        <strong>Logistics:</strong> We manage the entire export process, including documentation, customs clearance, and reliable shipping to international markets. <br />
                        <strong>Conclusion:</strong> Partner with us for consistent, top-tier cocoa beans, delivered efficiently to meet your global supply needs.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">About Cocoa Beans</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Cocoa beans are the dried and fully fermented seeds of Theobroma cacao, used primarily to make chocolate. Harvested from cocoa pods, these beans are typically fermented for several days and then sun-dried to develop flavor.
                        Nigerian cocoa is known for its intense aroma and deep color, making it a preferred choice for chocolatiers worldwide.
                    </p>
                </div>

                <div className="overflow-x-auto mt-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Top Cocoa Exporting Countries</h2>
                    <table className="min-w-full bg-white border border-gray-300 text-sm text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-800">
                            <tr>
                                <th className="px-4 py-2 border-b">Country</th>
                                <th className="px-4 py-2 border-b">Annual Production (2023)</th>
                                <th className="px-4 py-2 border-b">Key Markets</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2">Ivory Coast</td>
                                <td className="px-4 py-2">≈ 2 million MT</td>
                                <td className="px-4 py-2">EU, U.S., Asia</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Ghana</td>
                                <td className="px-4 py-2">≈ 800,000 MT</td>
                                <td className="px-4 py-2">Europe, North America</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Nigeria</td>
                                <td className="px-4 py-2">≈ 300,000 MT</td>
                                <td className="px-4 py-2">EU, U.S., Asia</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Cameroon</td>
                                <td className="px-4 py-2">≈ 280,000 MT</td>
                                <td className="px-4 py-2">EU, Middle East</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Us</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Premium Quality", text: "We source only the finest cocoa beans, ensuring top-grade quality in every batch.", color: "green" },
                            { title: "Eco-Friendly Processing", text: "Our techniques minimize environmental impact while maximizing efficiency.", color: "yellow" },
                            { title: "Experienced Team", text: "Our skilled professionals ensure consistent excellence.", color: "blue" },
                            { title: "Timely Delivery", text: "We prioritize reliability, ensuring your orders arrive on time.", color: "red" },
                            { title: "Customer Satisfaction", text: "Expect responsive support and tailored services.", color: "purple" },
                            { title: "Global Standards", text: "We comply with international export and quality benchmarks.", color: "indigo" }
                        ].map(({ title, text, color }, i) => (
                            <div
                                key={i}
                                className={`bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 border-t-4 border-${color}-500`}
                            >
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                                <p className="text-gray-600">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cocoa;
