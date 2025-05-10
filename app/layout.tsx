"use client";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { Providers } from "./providers";
import AOSWrapper from "@/components/AOSWrapper";
import NavbarComponent from "@/components/NavbarComponent";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="bg-light">
        <Providers>
          <div>
          <AOSWrapper />
          <NavbarComponent/>
            {children}
            <Link
          href="https://wa.me/2348136851352"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          <FaWhatsapp size={24} />
        </Link>
            </div>
        </Providers>
      </body>
    </html>
  );
}
