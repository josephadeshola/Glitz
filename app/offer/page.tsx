"use client";
import Footer from "@/components/Footer";
import SimilarProducts from "@/components/SimilarProducts";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { IoIosMailOpen } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";

const ServicePage = () => {
  const teamMembers = [
    {
      name: "OLUWATOSIN ADEBAYO",
      role: "Managing Director (MD)",
      image: "/images/customer.jpg",
      ambition: "Driving operational excellence with visionary leadership.",
    },
    {
      name: "OLUWATOSIN ADEBAYO",
      role: "Chief Executive Officer (CEC)",
      image: "/images/customer.jpg",
      ambition: "Empowering innovation and shaping the future of the company.",
    },
  ];
  return (
    <div className="bg-white">
      <section className="relative w-full min-h-screen -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/african.jpg"
          fill
          alt="What We Do Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 md:px-8 text-center max-w-3xl">
          <h1
            data-aos="zoom-in"
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Connecting African Commodities to the World From Farm to Port
          </h1>
          <p
            data-aos="fade-up"
            className="text-md md:text-lg leading-relaxed mb-6"
          >
            We provide seamless, traceable, and scalable services across export,
            procurement, and bulk commodity trading—empowering businesses to
            grow through Africa’s finest agricultural produce
          </p>
          <Link href="https://wa.me/2348123456789">
            <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
              Message Us
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-24 py-10 lg:py-20 bg-white text-black">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 lg:hidden flex justify-center items-center">
            <div className="w-full h-auto">
              <Image
                data-aos="zoom-in"
                src="/images/exportimg.jpg"
                width={600}
                height={400}
                alt="export img"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="px-3 lg:p-12 w-full lg:w-1/2">
            <p
              data-aos="fade-up"
              className="lg:text-4xl text-2xl font-bold mb-4"
            >
              Export Services
            </p>
            <p data-aos="fade-up" className="mb-4">
              We specialize in full-service agricultural exports from West
              Africa to global markets. From quality inspection to port
              clearance, we handle the complexities so you can focus on your
              supply chain.
            </p>
            <p data-aos="fade-up" className="font-bold mb-2">
              What’s Included
            </p>
            <ul
              data-aos="fade-up"
              className="list-disc list-inside space-y-1 mb-6"
            >
              <li>International logistics & freight forwarding</li>
              <li>Customs documentation & clearance</li>
              <li>NEPC, FDA, and Phytosanitary certifications</li>
              <li>Direct shipping to Europe, Asia, and the Middle East</li>
            </ul>
            <div data-aos="fade-up" className="mt-8">
              <Button className="bg-[#CC2837] rounded-md px-7 py-6 text-md">
                Learn More
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full hidden lg:block h-auto">
              <Image
                data-aos="zoom-in"
                src="/images/exportimg.jpg"
                width={600}
                height={400}
                alt="export img"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 lg:px-24 py-0 lg:py-0 bg-white text-black">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full h-auto">
              <Image
                data-aos="zoom-in"
                src="/images/procurementimg.jpg"
                width={600}
                height={400}
                alt="export img"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="px-3 lg:px-12 w-full lg:w-1/2">
            <p
              data-aos="fade-up"
              className="lg:text-4xl text-2xl font-bold mb-4"
            >
              Procurement Services
            </p>
            <p data-aos="fade-up" className="mb-4">
              We work with a trusted network of local farmers, cooperatives, and
              aggregators to source high-quality, traceable produce at
              competitive prices. All commodities undergo rigorous quality
              control.
            </p>
            <p data-aos="fade-up" className="font-bold mb-2">
              What’s Included
            </p>
            <ul
              data-aos="fade-up"
              className="list-disc list-inside space-y-1 mb-6"
            >
              <li>Local sourcing & aggregation</li>
              <li>Quality testing (moisture, grade, size)</li>
              <li>Warehousing & bagging</li>
              <li>Farmer engagement & ethical sourcing</li>
            </ul>
            <div data-aos="zoom-in" className="mt-8">
              <Button className="bg-[#CC2837] rounded-md px-7 py-6 text-md">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 lg:px-24 py-10 lg:py-14 bg-white text-black">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 lg:hidden flex justify-center items-center">
            <div className="w-full h-auto">
              <Image
                data-aos="zoom-in"
                src="/images/tradingimg.jpg"
                width={600}
                height={400}
                alt="export img"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="px-3 lg:p-12 w-full lg:w-1/2">
            <p
              data-aos="fade-up"
              className="lg:text-4xl text-2xl font-bold mb-4"
            >
              Commodity Trading
            </p>
            <p data-aos="fade-up" className="mb-4">
              Our trading desk facilitates spot and forward contracts for bulk
              buyers and importers looking for secure, reliable supply
              agreements with flexible terms and transparent pricing.
            </p>
            <p data-aos="fade-up" className="font-bold mb-2">
              What’s Included
            </p>
            <ul
              data-aos="fade-up"
              className="list-disc list-inside space-y-1 mb-6"
            >
              <li>Spot & forward contract options</li>
              <li>Competitive market-linked pricing</li>
              <li>B2B supply chain partnerships</li>
              <li>Customized delivery schedules</li>
            </ul>
            <div data-aos="zoom-in" className="mt-8">
              <Button className="bg-[#CC2837] rounded-md px-7 py-6 text-md">
                Learn More
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:flex hidden justify-center items-center">
            <div className="w-full h-auto">
              <Image
                data-aos="zoom-in"
                src="/images/tradingimg.jpg"
                width={600}
                height={400}
                alt="export img"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
         <SimilarProducts />
      </section>

      <section className="bg-white">
        <Footer
          heading="Partner with Us for Seamless Agro-community Trade"
          description="Whether you're a global importer or a local producer, GLITZ Trade is your trusted link to a better, more transparent supply chain."
        />
      </section>
    </div>
  );
};

export default ServicePage;
