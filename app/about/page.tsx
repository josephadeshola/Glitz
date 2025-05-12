"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaCheckCircle, FaLeaf, FaStar } from "react-icons/fa";
import { GiDigitalTrace, GiGraduateCap } from "react-icons/gi";
import { LuScanEye } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
const AboutPage = () => {
  const teamMembers = [
    {
      name: "OLUWATOSIN ADEBAYO",
      role: "CEO/MD",
      image: "/images/CEO.jpg",
      ambition: "Driving operational excellence with visionary leadership.",
    },
  ];
  return (
    <>
      <section className="relative w-full -mt-10 h-screen flex items-center justify-center text-white">
        <Image
          src="/images/what-we-do.jpg"
          fill
          alt="What We Do Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 lg:px-6 px-2 text-center max-w-3xl">
          <h1
            data-aos="zoom-in"
            className="lg:text-5xl text-2xl md:text-5xl font-bold mb-4"
          >
            Rooted in Africa. Trusted Worldwide.
          </h1>
          <p
            data-aos="fade-up"
            className="lg:text-lg text-md leading-relaxed mb-6"
          >
            We connect Africa’s finest agricultural commodities with buyers
            across the <br /> globe—responsibly, reliably, and transparently.
          </p>
          <Button
            data-aos="zoom-in"
            className="bg-[#CC2837] hover:scale-105 transition text-sm lg:px-8 px-7 py-3 rounded-full text-white font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </section>

      <section className="md:px-16 lg:px-24 lg:py-10 py-10 bg-white text-black">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="lg:text-4xl text-3xl font-bold mb-4"
          >
            Who We Are
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            We believe the future of global trade starts with local
            empowerment—and ends with world-class delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:flex hidden flex-col items-center space-y-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                data-aos="fade-up"
                src="/images/mission.png"
                width={400}
                height={300}
                alt="Team Working"
                className="object-cover"
              />
              <div className="rounded-lg lg:-mt-52 lg:ml-44 overflow-hidden">
                <Image
                  data-aos="zoom-in"
                  src="/images/mission1.png"
                  width={300}
                  height={250}
                  alt="Unity Hands"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-12 hidden lg:block">
            <div data-aos="fade-up">
              <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To unlock Africa’s agricultural potential by enabling
                transparent, high-quality, and compliant commodity trade with
                the world.
              </p>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be Africa’s most trusted bridge between farmers and global
                commodity buyers—delivering excellence, sustainability, and
                shared prosperity.
              </p>
            </div>
          </div>

          <div className="space-y-12 px-4 py-14 bg-[#F9E7E933]  lg:hidden block">
            <div className="text-center px-2 py-5 bg-[#FFFFFF]">
              <div className="flex justify-center items-center mx-auto">
                <TbTargetArrow
                  data-aos="zoom-in"
                  className="text-[60px] bg-[#CC2837] rounded-full text-white p-4 w-[80px] h-[80px]"
                />
              </div>
              <h3 data-aos="fade-up" className="text-3xl font-bold mb-2">
                Our Mission
              </h3>
              <p
                data-aos="fade-up"
                className="text-gray-700 lg:text-lg text-sm leading-relaxed"
              >
                To unlock Africa’s agricultural potential by enabling
                transparent, high-quality, and compliant commodity trade with
                the world.
              </p>
            </div>

            <div className="text-center px-2 py-5 bg-[#FFFFFF]">
              <div className="flex justify-center items-center mx-auto">
                <LuScanEye
                  data-aos="zoom-in"
                  className="text-[60px] bg-[#CC2837] rounded-full text-white p-4 w-[80px] h-[80px]"
                />
              </div>
              <h3 data-aos="fade-up" className="text-3xl font-bold mb-2">
                Our Vision
              </h3>
              <p
                data-aos="fade-up"
                className="text-gray-700 lg:text-lg text-sm leading-relaxed"
              >
                To be Africa’s most trusted bridge between farmers and global
                commodity buyers—delivering excellence, sustainability, and
                shared prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>
        <div className="lg:flex gap-10 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 mt-10 cursor-pointer shadow-lg rounded-xl overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#CC2837]">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 py-3 lg:py-2 mt-1">
                {member.role}
              </p>
              <p className="lg:text-lg text-center text-md italic text-gray-700 mt-1">
                "{member.ambition}"
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="px-4 lg:px-20 lg:flex">
          <div className="lg:w-1/2">
            <div className="px-1 mx-auto text-center lg:mt-20 lg:text-start lg:w-1/2 py-10 lg:py-32">
              <h2
                data-aos="fade-down"
                className="lg:text-4xl text-3xl mx-auto text-black font-bold mb-4"
              >
                Our Core Values
              </h2>
              <p
                data-aos="zoom-down"
                className="text-gray-700 mx-auto lg:text-lg text-sm"
              >
                These principles guide every trade, partnership, and promise we
                make ensuring integrity from farm to shipment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 shadow-md py-5 lg:mt-10 lg:px-7 rounded-md">
            <div className="lg:grid grid-cols-2">
              <div className="border-r p-4 py-9 lg:py-2 border-[#fdcdd1] mb-2">
                <div className="flex gap-4">
                  <div
                    data-aos="zoom-in"
                    className="bg-[#FEE2E2] w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    <FaStar className="text-xl text-[#CC2837]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black w-1/2 lg:text-lg text-md">
                      Transparency
                    </h4>
                  </div>
                </div>
                <p
                  data-aos="fade-up"
                  className="text-gray-600 lg:mt-3 mt-5 text-md"
                >
                  We operate with honesty and clarity ensuring buyers and
                  suppliers are always informed and aligned.
                </p>
              </div>
              <div className="p-4 border-t py-9 lg:py-2 border-[#fdcdd1] lg:border-0 ">
                <div className="flex gap-4">
                  <div
                    data-aos="zoom-in"
                    className="bg-[#FEE2E2]  w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    <GiGraduateCap className="text-xl text-[#CC2837]" />
                  </div>
                  <div>
                    <h4 className="font-semibold w-1/2 text-black lg:text-lg text-md">
                      Reliability
                    </h4>
                  </div>
                </div>
                <p
                  data-aos="fade-up"
                  className="text-gray-600 lg:mt-3 mt-5 text-md"
                >
                  We work with farming communities that adopt eco-friendly
                  practices and uphold ethical labor standards.
                </p>
              </div>

              <div className="p-4 border-r border-t py-9 lg:py-2 lg:border-r-0 border-[#fdcdd1]">
                <div className="flex gap-4">
                  <div
                    data-aos="zoom-in"
                    className="text-[#CC2837] bg-[#FEE2E2] p-3 rounded-full"
                  >
                    <FaLeaf className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black lg:text-lg text-md">
                      Sustainability
                    </h4>
                  </div>
                </div>
                <p
                  data-aos="fade-up"
                  className="text-gray-600 lg:mt-3 mt-5 text-md"
                >
                  We work with farming communities that adopt eco-friendly
                  practices and uphold ethical labor standards.
                </p>
              </div>
              <div className="p-4 border-t py-9 lg:py-2 border-[#fdcdd1]">
                <div className="flex gap-4">
                  <div
                    data-aos="zoom-in"
                    className="text-[#CC2837] bg-[#FEE2E2] p-3 rounded-full"
                  >
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black lg:text-lg text-md">
                      Quality First
                    </h4>
                  </div>
                </div>
                <p
                  data-aos="fade-up"
                  className="text-gray-600 lg:mt-3 mt-5 text-md"
                >
                  Every product we trade is carefully tested, sorted, and
                  packaged according to international quality standards.
                </p>
              </div>
            </div>
            <div className="border-t border-[#fdcdd1] py-9 lg:py-2 p-4 mt-2">
              <div className="flex gap-4">
                <div
                  data-aos="zoom-in"
                  className="text-[#CC2837] bg-[#FEE2E2] p-3 rounded-full"
                >
                  <GiDigitalTrace className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-black lg:text-lg text-md">
                    Traceability
                  </h4>
                </div>
              </div>
              <p
                data-aos="fade-up"
                className="text-gray-600 lg:mt-3 mt-5 text-md"
              >
                We work with farming communities that adopt eco-friendly
                practices and uphold ethical labor standards.
              </p>
            </div>
          </div>
        </div>

        <Footer
          heading="Partner with Us for Seamless Agro-community Trade"
          description="Whether your are a global importer or a local producer, GLITZ Trade is your trusted link to a better, more transparent supply chain."
        />
      </section>
    </>
  );
};

export default AboutPage;
