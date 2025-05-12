"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Ginger = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
                <Image
                    src="/images/ginger.png"
                    fill
                    alt="Ginger Background"
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Ginger
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
                    <p className="font-bold text-3xl">Leading Ginger Exporter from Nigeria</p>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Nigeria is among the top producers and exporters of ginger in the world. Known for its pungent aroma and strong flavor, Nigerian ginger is highly sought after in global markets. The country exports both fresh and dried split ginger, particularly to Europe, Asia, and the Middle East.
                    </p>
                    <p className="mt-4">
                        Ginger cultivation and export have created economic opportunities for farmers and exporters alike. With a favorable climate and fertile soil, Nigeria is well positioned to meet rising international demand for high-quality ginger.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">What is Ginger?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Ginger is a flowering plant whose rhizome, ginger root, is widely used as a spice and for its medicinal properties. It belongs to the Zingiberaceae family and is native to Southeast Asia. The root can be used fresh, dried, powdered, or as an oil or juice. It has a warm, spicy flavor and is commonly used in cooking, baking, and traditional medicine.
                    </p>
                </div>

                <div className="overflow-x-auto mt-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Top Ginger Exporting Countries</h2>
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
                                <td className="px-4 py-2">India</td>
                                <td className="px-4 py-2">≈ 500,000 MT</td>
                                <td className="px-4 py-2">U.S., UK, Middle East</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">Nigeria</td>
                                <td className="px-4 py-2">≈ 160,000 MT</td>
                                <td className="px-4 py-2">India, UAE, Netherlands</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">China</td>
                                <td className="px-4 py-2">≈ 300,000 MT</td>
                                <td className="px-4 py-2">Asia, EU, U.S.</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Thailand</td>
                                <td className="px-4 py-2">≈ 90,000 MT</td>
                                <td className="px-4 py-2">Japan, Korea, Middle East</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Nutritional Value</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Contains powerful antioxidants such as gingerol that help reduce oxidative stress.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Anti-inflammatory properties support joint health and reduce pain.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Aids in digestion and relieves nausea, making it a natural remedy for stomach discomfort.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Boosts the immune system and may help fight infections.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            May reduce blood sugar levels and improve heart health.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Ginger Root Properties</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Irregularly shaped underground rhizome with beige skin and yellowish flesh.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Spicy, aromatic, and slightly sweet flavor.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Grows in tropical and subtropical climates with well-drained soil.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Can be harvested after 6–10 months, depending on use (fresh or dry).
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Uses</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Used as a spice in cooking, baking, and beverages like tea and ginger ale.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Employed in traditional medicine for treating nausea, cold, and inflammation.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Processed into ginger powder, ginger oil, or dried split ginger for export.
                        </li>
                        <li className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1" />
                            Used in cosmetic and pharmaceutical products for its anti-inflammatory and antimicrobial benefits.
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Ginger;
