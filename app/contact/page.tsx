"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaCheckCircle, FaLeaf, FaStar } from "react-icons/fa";
import { GiDigitalTrace, GiGraduateCap } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";

const ContactPage = () => {
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
    <>
      <section className="relative w-full min-h-screen -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/contactUs.jpg"
          fill
          alt="What We Do Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let’s Connect and Trade Confidently
          </h1>
          <p className="text-md md:text-lg leading-relaxed mb-6">
            Have a question, need a quote, or want to partner with us? We’re
            here to help.
          </p>
          <button className="bg-[#CC2837] hover:scale-105 transition px-6 md:px-8 py-3 rounded-full text-white font-semibold text-sm">
            Contact Us
          </button>
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-24 py-10 lg:py-20 bg-white text-black">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className=" p-6 lg:p-12 w-full lg:w-1/2">
            <p className="text-2xl lg:text-4xl font-bold">
              Get in touch <br /> with us.
            </p>
            <p className="text-sm text-[#8C959F] mt-3">
              We provide a complete service for the sale, purchase.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="font-semibold text-md">Find us at</p>
                <div className="flex items-center gap-2">
                  <IoLocationOutline className="text-[#8C959F] text-xl" />
                  <p className="text-md text-[#8C959F]">
                    1234 Post Avenue Remington
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-md">Reach out to us at</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <IoIosMailOpen className="text-[#8C959F] text-xl" />
                    <p className="text-md text-[#8C959F]">contact@salespage</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdWifiCalling3 className="text-[#8C959F] text-xl" />
                    <p className="text-md text-[#8C959F]">+2348136851352</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-[#F9E7E933] rounded px-4 md:px-8 py-6">
              <p className="mb-5 text-xl font-semibold">Contact Us</p>
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  {[
                    {
                      id: "first_name",
                      label: "Your Name",
                      type: "text",
                      placeholder: "Your Name",
                    },
                    {
                      id: "email",
                      label: "Your Email",
                      type: "email",
                      placeholder: "Your Email",
                    },
                    {
                      id: "phone",
                      label: "Your Phone",
                      type: "tel",
                      placeholder: "Your Phone",
                    },
                    {
                      id: "product",
                      label: "Enter Product",
                      type: "text",
                      placeholder: "Enter Product",
                    },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block mb-2 text-sm font-medium"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    placeholder="Write a comment..."
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start mb-6">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    required
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-900"
                  >
                    I agree with the{" "}
                    <a href="#" className="hover:underline">
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-[#CC2837] hover:bg-red-800 font-medium rounded text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer
        heading="Partner with Us for Seamless Agro-community Trade"
        description="Whether you're a global importer or a local producer, GLITZ Trade is your trusted link to a better, more transparent supply chain."
      />
    </>
  );
};

export default ContactPage;
