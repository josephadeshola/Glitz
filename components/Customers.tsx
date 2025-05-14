import Image from "next/image";
import {
  AiFillStar
} from "react-icons/ai";
import { FcCustomerSupport } from "react-icons/fc";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const testimonials = [
  {
    message:
      "Reliable supplier with prompt documentation. Their sesame seed quality exceeded our specs. Communication was seamless throughout the transaction. Highly recommended for long-term trade partnerships.",
    date: "Aug 2023",
  },
  {
    message:
      "From Nigeria to Vietnam, their logistics and paperwork were spot on. Every step was transparent and professional. We felt confident from purchase to delivery.",
    date: "Sep 2023",
  },
  {
    message:
      "Exceptional service and high-quality sesame. Will definitely order again. Their post-sale support and updates were excellent. One of the best export partners we’ve worked with.",
    date: "Oct 2023",
  },
  {
    message:
      "Great communication and delivery. Everything arrived perfectly. Their export process is smooth and efficient. Truly a dependable supplier from Nigeria.",
    date: "Nov 2023",
  },
  {
    message:
      "We’ve worked with several Nigerian exporters, but Glitz Commodities stands out for consistency and professionalism. Our clients noticed the superior product quality. We look forward to more business.",
    date: "Dec 2023",
  },
  {
    message:
      "Their ability to source quality hibiscus and deliver on schedule helped us meet our client's deadline. No delays, no surprises. Just solid service and excellent product handling.",
    date: "Jan 2024",
  },
  {
    message:
      "Transparent process from procurement to delivery. The team is responsive and trustworthy. Updates were frequent and accurate. That gave us peace of mind throughout the export process.",
    date: "Feb 2024",
  },
  {
    message:
      "Glitz Commodities is our go-to partner for dried ginger exports. Reliable and always up to spec. Their attention to quality control is unmatched. Very few competitors come close.",
    date: "Mar 2024",
  },
  {
    message:
      "Their packaging and documentation for our US-bound sesame shipment was flawless. Customs clearance was hassle-free. We’ll definitely repeat our orders.",
    date: "Apr 2024",
  },
  {
    message:
      "Consistent quality and excellent export service. We’ve scaled operations thanks to Glitz. Their team feels like an extension of our own. Truly a strategic partner.",
    date: "May 2024",
  },
];


const Customers = () => {
  return (
    <>
      <div>
        <div className="text-center text-black lg:mt-24 mt-16">
          <p
            data-aos="fade-up"
            className="lg:text-5xl text-3xl text-[#CC2837] font-bold"
          >
            What Our Customers are saying
          </p>
          <p
            data-aos="fade-up"
            className="lg:text-lg text-sm lg:w-1/2 mx-auto mt-3"
          >
            Has been used by more than 100,00 customers. Listen to what they are
            saying!
          </p>
        </div>
        <div className="max-w-6xl mx-auto my-5 px-4 sm:px-6">
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 text-center h-[50vh] rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <p className="text-[50px] text-center text-[#CC2837] font-semibold mb-4">
                <FcCustomerSupport className="text-center item-center"/>
                </p>
                <p className="text-gray-700 text-center text-md lg:text-md mt-5 mb-4">
                  {testimonial.message}
                </p>
                <div className="flex items-center justify-center text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <AiFillStar key={i} className="text-xl" />
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{testimonial.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

      </div>
      <div className="text-black lg:mt-14 mt-5">
        <p
          data-aos="fade-up"
          className="lg:text-5xl text-center  text-3xl text-[#CC2837] font-bold"
        >
          News & Update
        </p>

        <div className="max-w-7xl mx-auto px-2 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              data-aos="fade-up"
              className="bg-white rounded-lg p-2 overflow-hidden cursor-pointer border border-red-200"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  alt="Farm field"
                  className="object-cover w-full rounded-md h-full transition-transform duration-300 hover:scale-105"
                  height={200}
                  src="/images/regulation.webp"
                  width={400}
                />
              </div>

              <div className="p-4">
                <div className="items-center mb-2">
                  <span className="text-md font-semibold text-gray-600">
                    New Export Regulations Announced
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Stay informed about the latest regulations affecting the
                  export of agricultural products, including cashews.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white p-2 rounded-lg overflow-hidden cursor-pointer border border-red-200"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  alt="Farm field"
                  className="object-cover w-full rounded-md h-full transition-transform duration-300 hover:scale-105"
                  height={200}
                  src="/images/procure.webp"
                  width={400}
                />
              </div>

              <div className="p-4 ">
                <div className="items-center mb-2">
                  <span className="text-md font-semibold text-gray-600">
                    Procurement Trends in the Cashew Industry
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Learn about the latest trends in procuring high-quality
                  cashews from top producing countries.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white p-2 rounded-lg overflow-hidden border cursor-pointer border-red-200"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  alt="Farm field"
                  className="object-cover w-full h-full rounded-md transition-transform duration-300 hover:scale-105"
                  height={200}
                  src="/images/global.webp"
                  width={400}
                />
              </div>

              <div className="p-4">
                <div className="items-center mb-2">
                  <span className="text-md font-semibold text-gray-600">
                    Global Market Demand for Cashew Nuts{" "}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Discover the increasing global demand for cashew nuts and how
                  it’s reshaping the export market.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white p-2 rounded-lg overflow-hidden border cursor-pointer border-red-200"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  alt="Farm field"
                  className="object-cover w-full h-full rounded-md transition-transform duration-300 hover:scale-105"
                  height={200}
                  src="/images/effeciency.webp"
                  width={400}
                />
              </div>

              <div className="p-4">
                <div className="items-center mb-2">
                  <span className="text-md font-semibold text-gray-600">
                    Cashew Supply Chain Efficiency
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Explore new strategies to streamline the cashew supply chain,
                  ensuring timely delivery and reduced costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
