"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SimilarProducts from "./SimilarProducts";

const Garlic = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/garlicimg.webp"
          fill
          alt="Garlic Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
          <h1
            data-aos="zoom-in"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Garlic
          </h1>
          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <Link data-aos="zoom-in" href="https://wa.me/2348136851352">
              <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Message Us
              </Button>
            </Link>
            <Link data-aos="zoom-in" href="tel:2348136851352">
              <Button className="border border-white bg-transparent hover:bg-white hover:text-black transition text-sm px-7 py-3 rounded-full text-white font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="px-4 md:px-8 lg:px-16 py-10 space-y-12"
      >
        <div>
          <p className="font-bold text-3xl">Exporter of Garlic from Nigeria</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Nigeria has emerged as a growing exporter of high-quality garlic.
            With favorable climatic conditions and increasing investment in
            agriculture, Nigerian garlic is gaining recognition for its pungent
            flavor, medicinal value, and culinary versatility.
          </p>
          <p className="mt-4">
            Exporters ensure careful cultivation, harvesting, and packaging
            processes to meet international standards. Garlic from Nigeria
            presents an excellent opportunity for importers looking to source
            premium produce from West Africa.
          </p>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              What is Garlic?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Garlic (Allium sativum) is a plant in the onion family, known for
              its strong aroma and numerous health benefits. It has been used
              for centuries in traditional medicine and culinary dishes. Each
              garlic bulb consists of multiple cloves, covered in a thin, papery
              skin. It can be consumed raw, cooked, dried, or powdered.
            </p>
            <p className="mt-4 text-gray-700">
              Rich in sulfur compounds, particularly allicin, garlic is valued
              for its antimicrobial, anti-inflammatory, and antioxidant
              properties. It is commonly used to flavor dishes, but also serves
              as a natural remedy for various health conditions.
            </p>
          </div>
          <section className="px-4 lg:w-1/2 md:px-8">
            <h2 className="text-3xl text-[#CC2837] font-bold mb-4">Garlic</h2>
            <Zoom>
              <Image
                data-aos="zoom-in"
                src="/images/garlicimg.webp"
                width={900}
                height={400}
                alt="Garlic"
                className="rounded-lg lg:h-[60vh] h-[35vh] object-cover shadow-md cursor-zoom-in"
              />
            </Zoom>
            <p className="text-sm text-gray-500 mt-2">
              Click the image to zoom.
            </p>
          </section>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Nutritional Value of Garlic
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Rich in allicin – known for its
              antimicrobial and heart-health benefits.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Contains manganese, vitamin B6,
              vitamin C, selenium, and fiber.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Supports immune function and
              may reduce the severity of colds and flu.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Helps regulate blood pressure
              and cholesterol levels.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Contains antioxidants that
              protect against cell damage and aging.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Low in calories while providing
              essential nutrients.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> May have detoxifying effects
              and support liver health.
            </li>
          </ul>
        </div>
        // ...previous code remains unchanged...
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Garlic Properties
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Pungent smell due to sulfur
              compounds like allicin.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Bulb made up of several cloves,
              enclosed in a white or purple papery skin.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Can be stored for months in
              cool, dry conditions.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Grows well in temperate
              climates with well-drained soil.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Versatile in culinary use –
              raw, roasted, sautéed, or powdered.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Has antibacterial, antifungal,
              and antiviral qualities.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" /> Frequently used in herbal
              medicine and natural remedies.
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Top Garlic Exporting Countries (2023–2024)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-300">
              <thead className="bg-[#CC2837] text-white">
                <tr>
                  <th className="px-4 py-2 border">Country</th>
                  <th className="px-4 py-2 border">Export Volume (2023)</th>
                  <th className="px-4 py-2 border">Key Markets</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 bg-white">
                <tr>
                  <td className="px-4 py-2 border">China</td>
                  <td className="px-4 py-2 border">≈ 2.2 million MT</td>
                  <td className="px-4 py-2 border">
                    Indonesia, Vietnam, USA, EU
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Spain</td>
                  <td className="px-4 py-2 border">≈ 170,000 MT</td>
                  <td className="px-4 py-2 border">
                    EU countries, USA, Brazil, Canada
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">India</td>
                  <td className="px-4 py-2 border">≈ 120,000 MT</td>
                  <td className="px-4 py-2 border">
                    Bangladesh, Malaysia, UAE, UK
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Egypt</td>
                  <td className="px-4 py-2 border">≈ 90,000 MT</td>
                  <td className="px-4 py-2 border">
                    Russia, Saudi Arabia, UAE, EU
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Argentina</td>
                  <td className="px-4 py-2 border">≈ 50,000 MT</td>
                  <td className="px-4 py-2 border">Brazil, USA, EU</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Netherlands</td>
                  <td className="px-4 py-2 border">≈ 40,000 MT</td>
                  <td className="px-4 py-2 border">
                    Re-export hub: EU, UK, Middle East
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:py-20 py-7 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl text-[#CC2837] font-medium mb-12">
              Why Choose Us
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Premium Quality",
                  text: "We source only the finest cocoa beans, ensuring top-grade quality in every batch.",
                },
                {
                  title: "Eco-Friendly Processing",
                  text: "Our techniques minimize environmental impact while maximizing efficiency.",
                },
                {
                  title: "Experienced Team",
                  text: "Our skilled professionals ensure consistent excellence.",
                },
                {
                  title: "Timely Delivery",
                  text: "We prioritize reliability, ensuring your orders arrive on time.",
                },
                {
                  title: "Customer Satisfaction",
                  text: "Expect responsive support and tailored services.",
                },
                {
                  title: "Global Standards",
                  text: "We comply with international export and quality benchmarks.",
                },
              ].map(({ title, text }, i) => (
                <div
                  data-aos="zoom-in"
                  key={i}
                  className="bg-white rounded-2xl cursor-pointer p-6 shadow-md hover:shadow-xl transition border border-gray-200 hover:border-transparent hover:bg-gradient-to-r from-[#cc2837]/10 to-[#cc2837]/5"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                data-aos="zoom-in"
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
      </section>
    </div>
  );
};

export default Garlic;
