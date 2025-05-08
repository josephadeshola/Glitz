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
  const items = [
    { name: 'Home', path: '' },
    { name: 'Product', path: 'product' },
    { name: 'About Us', path: 'about' },
    { name: 'What we do', path: 'offer' },
  ]

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
        {items.map(({ name, path }, index) => (
          <NavbarItem key={`${name}-${index}`} isActive={path === ""}>
            <Link
              href={`/${path}`}
              className={path === "" ? "text-[#CC2837]" : ""}
            >
              {name}
            </Link>
          </NavbarItem>
        ))}
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
        {items.map((item, index) => (
          <NavbarMenuItem className="mt-4" key={`${item}-${index}`}>
            <Link
              className={`w-full ${index === 0
                  ? "text-red-500"
                  : "text-white"
                }`}
              href={`/${item.path}`}
            >
              {item.name}
            </Link>
            <hr className="py-2 mt-3"/> 
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
