import Aos from "aos";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

const productData = [
    {
        title: "Raw Cashew Nuts/Kernels",
        description: "High-yield RCN for food and industrial use.",
        image: "/images/cashew-raw.png",
    },
    {
        title: "Cocoa",
        description: "Fermented beans for premium chocolate.",
        image: "/images/cocoa.png",
    },
    {
        title: "Cassava Chips",
        description: "Sun-dried, high-starch chips for ethanol.",
        image: "/images/cassava-chips.png",
    },
    {
        title: "Shea Nuts",
        description: "Organic, butter-grade, traceable origin.",
        image: "/images/shea-nuts.png",
    },
    {
        title: "Sesame Seeds",
        description: "Cleaned & hulled. High oil content.",
        image: "/images/sesame-seeds.png",
    },
    {
        title: "Soybeans",
        description: "GMO-free, protein-rich.",
        image: "/images/soybeans.png",
    },
];

const stepTwoProduct = [
    {
        title:"Maize",
        description:"Organic, butter-grade, traceable origin.",
        image:"/images/maize.png",
        
    },
    {
        title:"Tiger nut",
        description:"Cleaned & hulled. High oil content.",
        image:"/images/tiger-nut.png",
        
    },
    {
        title:"bitter kola",
        description:"GMO-free, protein-rich.",
        image:"/images/bitter-kola.png",
        
    },
    {
        title:"kola nut",
        description:"Organic, butter-grade, traceable origin.",
        image:"/images/kola-nut.png",
        
    },
    {
        title:"Groundnut",
        description:"Cleaned & hulled. High oil content.",
        image:"/images/groundnut.png",
        
    },
    {
        title:"Garlic",
        description:"GMO-free, protein-rich.",
        image:"/images/garlic.png",
        
    }
]

    const Cards = () => {
        const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true });
        const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true });
    
        const intervalRef1 = useRef<ReturnType<typeof setInterval> | null>(null);
        const intervalRef2 = useRef<ReturnType<typeof setInterval> | null>(null);
    
        const [selectedIndex1, setSelectedIndex1] = useState(0);
        const [selectedIndex2, setSelectedIndex2] = useState(0);
    
        const autoScroll1 = useCallback(() => {
            if (!emblaApi1) return;
            intervalRef1.current = setInterval(() => {
                emblaApi1.scrollNext();
            }, 4000);
        }, [emblaApi1]);
    
        const autoScroll2 = useCallback(() => {
            if (!emblaApi2) return;
            intervalRef2.current = setInterval(() => {
                emblaApi2.scrollPrev();
            }, 4000);
        }, [emblaApi2]);
    
        useEffect(() => {
            Aos.init({ once: false });
        }, []);
    
        useEffect(() => {
            if (emblaApi1) {
                autoScroll1();
    
                const onSelect1 = () => {
                    setSelectedIndex1(emblaApi1.selectedScrollSnap());
                    setTimeout(() => Aos.refresh(), 100);
                };
    
                emblaApi1.on("select", onSelect1);
                emblaApi1.on("pointerDown", () => {
                    if (intervalRef1.current) clearInterval(intervalRef1.current);
                });
    
                onSelect1();
            }
    
            return () => {
                if (intervalRef1.current) clearInterval(intervalRef1.current);
            };
        }, [emblaApi1, autoScroll1]);
    
        useEffect(() => {
            if (emblaApi2) {
                autoScroll2();
    
                const onSelect2 = () => {
                    setSelectedIndex2(emblaApi2.selectedScrollSnap());
                    setTimeout(() => Aos.refresh(), 100);
                };
    
                emblaApi2.on("select", onSelect2);
                emblaApi2.on("pointerDown", () => {
                    if (intervalRef2.current) clearInterval(intervalRef2.current);
                });
    
                onSelect2();
            }
    
            return () => {
                if (intervalRef2.current) clearInterval(intervalRef2.current);
            };
        }, [emblaApi2, autoScroll2]);
    
    return (
        <>
        <div className="text-black lg:py-20 py-14">
            <p className="text-center lg:text-5xl text-3xl font-bold ">Featured Products</p>
            <p className="text-center lg:text-md text-sm mx-auto lg:w-1/2 mt-3">
                Carefully sourced, expertly processed—our top-selling agricultural
                commodities are trusted by buyers worldwide for their quality,
                consistency, and compliance.
            </p>
        </div>

        {/* First Carousel (productData) */}
        <div className="relative w-full overflow-hidden">
            <div className="embla lg:px-8 mx-auto" ref={emblaRef1}>
                <div className="embla__container flex mx-auto justify-around">
                    {productData.map((slide, index) => (
                        <div key={index} className="embla__slide flex-shrink-0 lg:w-1/3 mx-auto p-4">
                            <div className="bg-[#F9F9F9] cursor-pointer py-7 px-10 rounded-md">
                                <div className="w-72 mx-auto">
                                    <h3 className="text-lg text-black font-semibold mb-1">{slide.title}</h3>
                                    <p className="text-sm text-gray-500 mb-3">{slide.description}</p>
                                </div>
                                <Image src={slide.image} alt={slide.title} height={200} width={300} className="object-cover mx-auto rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Second Carousel (stepTwoProduct) */}
        <div className="relative w-full overflow-hidden mt-10">
            <div className="embla lg:px-8 mx-auto" ref={emblaRef2}>
                <div className="embla__container flex mx-auto justify-around">
                    {stepTwoProduct.map((slide, index) => (
                        <div key={index} className="embla__slide flex-shrink-0 lg:w-1/3 mx-auto p-4">
                            <div className="bg-[#F9F9F9] cursor-pointer py-7 px-10 rounded-md">
                                <div className="w-72 mx-auto">
                                    <h3 className="text-lg text-black font-semibold mb-1">{slide.title}</h3>
                                    <p className="text-sm text-gray-500 mb-3">{slide.description}</p>
                                </div>
                                <Image src={slide.image} alt={slide.title} height={200} width={300} className="object-cover mx-auto rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>

    );
};

export default Cards;
