"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Soyabeans = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative w-full h-[70vh] -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/neatsoya.jpg"
          fill
          alt="Soya Beans Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Soya Beans</h1>
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

      {/* Details Section */}
      <section className="px-4 md:px-8 lg:px-16 py-10 space-y-12">
        <div>
          <p className="font-bold text-3xl">
            Exporter of Soya Beans from Nigeria
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Nigeria is one of the largest producers and exporters of soya beans
            in Africa. Soya beans play a vital role in the country’s
            agricultural and economic landscape, supporting food production,
            livestock feed, and industrial applications.
          </p>
          <p className="mt-4">
            With growing demand globally for plant-based protein and oil,
            Nigeria’s soya bean industry presents great opportunities for
            investors and buyers. High-yield varieties and government support
            have contributed to the sector’s rapid growth.
          </p>
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              What are Soya Beans?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Soya beans are a type of legume native to East Asia, widely grown
              for their edible beans, which have numerous uses. They are a key
              source of protein, oil, and bioactive compounds. In Nigeria, soya
              beans are cultivated predominantly in the Middle Belt and northern
              regions. They are processed into soy milk, tofu, soy flour, animal
              feed, and oil, making them highly valuable in both food and
              industrial sectors.
            </p>
          </div>
          <section className="px-4 lg:w-1/2 md:px-8">
            <h2 className="text-3xl text-[#CC2837] font-bold mb-4">Soya Beans</h2>
            <Zoom>
              <Image
                src="/images/neatsoya.jpg"
                width={900}
                height={400}
                alt="Soya Beans"
                className="rounded-lg lg:h-[60vh] h-[35vh] object-cover shadow-md cursor-zoom-in"
              />
            </Zoom>
            <p className="text-sm text-gray-500 mt-2">
              Click the image to zoom.
            </p>
          </section>
        </div>

        <div className="overflow-x-auto mt-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Top Soya Beans Exporting Countries
          </h2>
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
                <td className="px-4 py-2">Brazil</td>
                <td className="px-4 py-2">≈ 92 million MT</td>
                <td className="px-4 py-2">China, EU, Southeast Asia</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">United States</td>
                <td className="px-4 py-2">≈ 60 million MT</td>
                <td className="px-4 py-2">China, Mexico, EU</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Argentina</td>
                <td className="px-4 py-2">≈ 6 million MT</td>
                <td className="px-4 py-2">India, Vietnam, Egypt</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Nigeria</td>
                <td className="px-4 py-2">≈ 1.5 million MT</td>
                <td className="px-4 py-2">India, China, West Africa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Nutritional Value
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Excellent source of complete plant-based protein.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Rich in dietary fiber, supporting digestive health.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Contains essential amino acids, vitamins (B1, B6, K), and minerals
              (iron, magnesium, potassium).
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Low in saturated fats and cholesterol-free.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              High in antioxidants like isoflavones, which help reduce
              inflammation.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Soya Bean Characteristics
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Oval-shaped beans, usually yellow or pale brown in color.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Average size: 5–11mm in diameter, weight: ~0.15g per bean.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Grown in tropical and subtropical climates with moderate rainfall.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Contains 18–20% oil and 38–40% protein by weight.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Easily processed into oil, flour, and protein concentrate.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">Uses</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Processed into soy oil used for cooking and margarine.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Used in the production of animal and poultry feed.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Converted into soy milk, tofu, soy flour, and other plant-based
              food products.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1" />
              Utilized in biodegradable plastics and biodiesel production.
            </li>
          </ul>
        </div>
          <div className="lg:py-7 py-7 bg-gradient-to-b from-white via-gray-50 to-white">
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
      <Footer />
    </div>
  );
};

export default Soyabeans;
