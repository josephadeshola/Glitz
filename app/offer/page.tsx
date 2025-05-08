"use client";
import Image from 'next/image';
import React from 'react';

const WhatWeDo = () => {
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
            <div className="relative z-20 px-6 text-center max-w-3xl">
                <h1 className="lg:text-5xl text-2xl md:text-5xl font-bold mb-4">
                    Rooted in Africa. Trusted Worldwide.
                </h1>
                <p className="lg:text-lg text-md leading-relaxed mb-6">
                    We connect Africa’s finest agricultural commodities with buyers across the <br /> globe—responsibly, reliably, and transparently.       
                </p>
                <button className="bg-[#CC2837] hover:scale-105 transition text-sm lg:px-8 px-7 py-3 rounded-full text-white font-semibold">
                    Contact Us
                </button>
            </div>
        </section>
            <div>
                <p>Who We Are</p>
            </div>
        </>
    );
};

export default WhatWeDo;
