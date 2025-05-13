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
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import heroImage from "@/public/images/black-logo.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiArrowSortedDown } from "react-icons/ti";
import products from "@/data/products";

export const AcmeLogo = () => {
  return (
    <Image
      alt="Company Logo"
      className="object-contain rounded-lg"
      height={40}
      src={heroImage}
    />
  );
};

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = React.useState(false);
  const pathname = usePathname();

  const items = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Services", path: "/offer" },
  ];

  return (
    <Navbar
      className="top-0 left-0 w-full border-red-500 z-50 bg-transparent text-white py-1"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="flex items-center space-x-3">
            <AcmeLogo />
            <div className="text-white leading-tight text-sm md:text-base font-semibold">
              <p className="whitespace-nowrap">GLITZ</p>
              <p className="whitespace-nowrap">COMMODITIES NIG. LTD</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        <>
          {items.map(({ name, path }, index) => {
            const isActive = pathname === path;

            if (name === "Product") {
              const isProductActive = pathname.startsWith("/products");
              return (
                <NavbarItem key="Product" className="relative group">
                  <div className="relative inline-block group">
                    <div className="flex items-center cursor-pointer text-white hover:text-[#CC2837]">
                      <Link
                        href="/products"
                        className={`inline-block hover:underline underline-offset-4 decoration-[3px] ${
                         isProductActive 
                            ? "text-[#CC2837] font-semibold underline"
                            : "text-white"
                        }`}
                      >
                        <div className="flex items-center">
                          <p>Product</p>
                          <TiArrowSortedDown className="mt-1 ms-2" />
                        </div>
                      </Link>
                    </div>

                    <div className="absolute top-full left-0 mt-0 hidden group-hover:grid bg-gradient-to-b from-[#bfc9df] via-gray-300 to-white text-black shadow-lg rounded-lg z-50 p-4 gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-[600px]">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="px-2 py-2  hover:bg-gray-100 rounded transition text-sm font-medium"
                        >
                         <p>
                         {product.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavbarItem>
              );
            }

            return (
              <NavbarItem key={`${name}-${index}`}>
                <Link
                  href={path}
                  className={`transition-colors duration-300 hover:underline underline-offset-4 decoration-[3px] ${
                    isActive
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
        <IoSearch className="cursor-pointer font-bold text-xl" />
        <NavbarItem className="hidden lg:block">
          <Button
            as={Link}
            className="rounded-full font-semibold text-[#FFFFFF] bg-[#CC2837] transition-transform duration-300 hover:scale-105"
            data-aos="bounce"
            href="https://wa.me/2348136851352"
            target="_blank"
            variant="flat"
          >
            REQUEST SERVICE
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

          if (name === "Product") {
            return (
              <div key="Product" className="mt-4">
                <div className="flex items-center justify-between px-">
                  <Link
                    href="/products"
                    onClick={() => {
                      setProductDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className={`text-lg ${
                      pathname.startsWith("/products")
                        ? "text-[#CC2837] font-semibold"
                        : "text-white"
                    }`}
                  >
                    Product
                  </Link>
                  <TiArrowSortedDown
                    className="text-white cursor-pointer"
                    onClick={() => setProductDropdownOpen((prev) => !prev)}
                  />
                </div>
                {productDropdownOpen && (
                  <div className="ml-6 mt-3 space-y-2">
                    {products.map((product) => (
                      <NavbarMenuItem
                        key={product.slug}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link
                          href={`/products/${product.slug}`}
                          className={`text-base block ${
                            pathname === `/products/${product.slug}`
                              ? "text-[#CC2837] font-semibold"
                              : "text-white"
                          }`}
                        >
                          {product.name}
                        </Link>
                      </NavbarMenuItem>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavbarMenuItem
              className="mt-4"
              key={`${name}-${index}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link
                href={path}
                className={`w-full text-lg ${
                  isActive ? "text-[#CC2837] font-semibold" : "text-white"
                }`}
              >
                {name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
