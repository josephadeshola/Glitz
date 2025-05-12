"use client";
import Footer from "@/components/Footer";
import products from "@/data/products";
import { Button } from "@heroui/button";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="bg-[#f9f9f9]">
         {product.detailComp && (
        <div className="mt-6">
          {product.detailComp}
        </div>
      )}
       </div>
      <Footer />
    </>
  );
}
