import Image from "next/image";
import React from "react";

const Customers = () => {
  return (
    <>
      <div>
        <div className="text-center text-black lg:mt-24 mt-16">
          <p className="lg:text-5xl text-3xl text-[#CC2837] font-bold">
            What Our Customers are saying
          </p>
          <p className="lg:text-lg text-sm lg:w-1/2 mx-auto mt-3">
            Has been used by more than 100,00 customers. Listen to what they are
            saying!
          </p>
        </div>
        <div className="max-w-6xl mx-auto lg:my-12 my-5 px-4 sm:px-6">
          <div className=" rounded-lg lg:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="flex items-center mb-4">
                  <img
                    src="/images/customer.jpg"
                    alt="Samantha Payne"
                    className="w-10 h-10 object-cover  rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Samantha Payne
                    </h3>
                    <p className="text-gray-500 text-sm">@samanthapayne90</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Reliable supplier with prompt documentation. Their sesame seed
                  quality exceeded our specs
                </p>

                <div className="flex items-center mb-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>

                <p className="text-gray-500 text-sm">16 Aug 2022</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <img
                    src="/images/customer.jpg"
                    alt="Samantha Payne"
                    className="w-10 h-10 object-cover  rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Samantha Payne
                    </h3>
                    <p className="text-gray-500 text-sm">@samanthapayne90</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  From Nigeria to Vietnam, their logistics and paperwork were
                  spot on.
                </p>

                <div className="flex items-center mb-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>

                <p className="text-gray-500 text-sm">16 Aug 2022</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <img
                    src="/images/customer.jpg"
                    alt="Samantha Payne"
                    className="w-10 h-10 object-cover rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Samantha Payne
                    </h3>
                    <p className="text-gray-500 text-sm">@samanthapayne90</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  RealAgris cocoa beans made it into our finest blends.
                  Excellent partnership!
                </p>

                <div className="flex items-center mb-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>

                <p className="text-gray-500 text-sm">16 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black mt-20">
        <p className="lg:text-5xl text-center  text-3xl text-[#CC2837] font-bold">
          News & Update
        </p>

        <div className="max-w-7xl mx-auto mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg overflow-hidden cursor-pointer border border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="/images/news.png"
                  alt="Farm field"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-gray-100 rounded-sm px-2 py-1">
                    <span className="font-bold text-gray-900">12</span>
                    <span className="text-xs text-gray-600 ml-1">Jan</span>
                  </div>
                  <span className="text-xs text-gray-600 ml-3">
                    Elements of Content in Epoxy Paint
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Epoxy paint and epoxy floor contractor. Have you heard the two
                  terms? And what does that have to
                </p>

                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden cursor-pointer border border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="/images/rectangle.png"
                  alt="Farm field"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 ">
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-gray-100 rounded-sm px-2 py-1">
                    <span className="font-bold text-gray-900">12</span>
                    <span className="text-xs text-gray-600 ml-1">Jan</span>
                  </div>
                  <span className="text-xs text-gray-600 ml-3">
                    Elements of Content in Epoxy Paint
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Epoxy paint and epoxy floor contractor. Have you heard the two
                  terms? And what does that have to
                </p>

                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden borde cursor-pointer border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="/images/rectangle.png"
                  alt="Farm field"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-gray-100 rounded-sm px-2 py-1">
                    <span className="font-bold text-gray-900">12</span>
                    <span className="text-xs text-gray-600 ml-1">Jan</span>
                  </div>
                  <span className="text-xs text-gray-600 ml-3">
                    Elements of Content in Epoxy Paint
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Epoxy paint and epoxy floor contractor. Have you heard the two
                  terms? And what does that have to
                </p>

                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border cursor-pointer border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="/images/rectangle.png"
                  alt="Farm field"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-gray-100 rounded-sm px-2 py-1">
                    <span className="font-bold text-gray-900">12</span>
                    <span className="text-xs text-gray-600 ml-1">Jan</span>
                  </div>
                  <span className="text-xs text-gray-600 ml-3">
                    Elements of Content in Epoxy Paint
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  Epoxy paint and epoxy floor contractor. Have you heard the two
                  terms? And what does that have to
                </p>

                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
