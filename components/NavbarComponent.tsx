"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import heroImage from "@/public/images/black-logo.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiArrowSortedDown } from "react-icons/ti";

export const AcmeLogo = () => {
  return (
    <Image
      alt="Company Logo"
      className="object-contain rounded-md"
      height={50}
      src={heroImage}
    />
  );
};

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const isProductActive = pathname.startsWith("/products");

  const items = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Services", path: "/offer" },
  ];

  return (
    <Navbar
      className="top-0 left-0 w-full z-50 bg-transparent text-white py-1"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        <>
          {items.map(({ name, path }, index) => {
            const isActive = pathname === path;

            if (name === "Product") {
              return (
                <NavbarItem key="Product" className="relative group">
                  <Link
                    href="/products"
                    className={`inline-block text-white hover:underline underline-offset-4 decoration-[3px] ${isProductActive ? "text-[#CC2837] font-semibold underline" : ""
                      }`}
                  >
                    <div className="flex">
                      <p>Product</p>
                      <TiArrowSortedDown className="mt-1 ms-2" />
                    </div>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-md z-10 min-w-[160px]">
                    <Link
                      href="/products/phones"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      W-180 cashew
                    </Link>
                    <Link
                      href="/products/laptops"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      W-210 cashew
                    </Link>
                    <Link
                      href="/products/accessories"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      W-240 cashew
                    </Link>
                    <Link
                      href="/products/accessories"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      W-320 cashew
                    </Link>
                    <Link
                      href="/products/accessories"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      W-450 cashew
                    </Link>
                    <Link
                      href="/products/accessories"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      LP cashew
                    </Link>
                    <Link
                      href="/products/accessories"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      WS cashew
                    </Link>
                  </div>
                </NavbarItem>
              );
            }

            return (
              <NavbarItem key={`${name}-${index}`}>
                <Link
                  href={path}
                  className={`transition-colors duration-300 hover:underline underline-offset-4 decoration-[3px] ${isActive
                      ? "text-[#CC2837] underline underline-offset-4 decoration-[3px] font-semibold"
                      : "text-white"
                    }`}
                >
                  {name}
                </Link>
              </NavbarItem>
            );
          })}
        </>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:block">
          <Button
            as={Link}
            className="rounded-full font-semibold text-[#FFFFFF] bg-[#CC2837] transition-transform duration-300 hover:scale-105"
            data-aos="bounce"
            href="#"
            variant="flat"
          >
            Book a session
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden px-2 "
      />
      <NavbarMenu>
        {items.map(({ name, path }, index) => {
          const isActive = pathname === path;
          return (
            <NavbarMenuItem className="mt-4" key={`${name}-${index}`}>
              <Link
                href={path}
                className={`w-full text-lg ${isActive ? "text-red-500 font-semibold" : "text-white"}`}
              >
                {name}
              </Link>
              <hr className="py-2 mt-3" />
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
