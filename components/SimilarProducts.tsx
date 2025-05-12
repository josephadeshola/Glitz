'use client';
import products from '@/data/products';
import { Button } from '@heroui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SimilarProducts = () => {
  return (
    <section className="from-red-800 lg:mt-20 rounded-t-large to-white">
        <p className="text-[#CC2837] font-medium lg:text-5xl mt-5 text-3xl text-center">Similar Products</p>
      <div className="py-10 px-4 md:px-12 lg:px-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Link href={`/products/${product.slug}`}>
                <div className="bg-white opacity-90 cursor-pointer rounded  overflow-hidden animate-fadeIn">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:opacity-100 transform hover:scale-105 transition duration-500 ease-in-out rounded"
                    />
                  </div>
                  <div className="p-5 mb-9 text-center">
                    <div className="text-black font-semibold text-xl">{product.title}</div>
                    <div className="flex justify-center text-xl mt-3 text-[#CC2837]">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                    <Button className="text-md mt-5 font-semibold rounded-none border-2 hover:bg-[#FFFFFF] hover:text-[#CC2837] text-white bg-[#CC2837]">
                      Make Enquiry
                    </Button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarProducts;
