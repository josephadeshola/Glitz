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
import products from "@/data/products";

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
              const isProductActive = pathname.startsWith("/products");
              return (
                <NavbarItem key="Product" className="relative group">
                  <div className="relative inline-block group">
                    <div className="flex items-center cursor-pointer text-white hover:text-[#CC2837]">
                      <Link
                        href="/products"
                        className={`inline-block hover:underline underline-offset-4 decoration-[3px] ${
                          pathname.startsWith("/products")
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

                    <div className="absolute top-full left-0 mt-0 hidden font-semibold text-left ms-4  group-hover:block bg-gradient-to-b from-[#bfc9df] via-gray-300 to-white text-black shadow-lg rounded-lg z-50 min-w-[160px]">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="block px-4 py-3 hover:bg-gray-100"
                        >
                          {product.name}
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

            {/* Dropdown toggle icon */}
            <TiArrowSortedDown
              className="text-white cursor-pointer"
              onClick={() => setProductDropdownOpen((prev) => !prev)}
            />
          </div>

          {/* Dropdown menu */}
          {productDropdownOpen && (
            <div className="ml-6 mt-3 space-y-2">
              {products.map((product) => (
                <NavbarMenuItem key={product.slug} onClick={() => setIsMenuOpen(false)}>
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
      <NavbarMenuItem className="mt-4" key={`${name}-${index}`} onClick={() => setIsMenuOpen(false)}>
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
