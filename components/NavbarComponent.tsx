import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";

import heroImage from "../public/images/black-logo.jpg";

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

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      className="fixed top-0 left-0 w-full z-50 bg-transparent text-white py-1"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" className="text-[#CC2837]" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            What we do
          </Link>
        </NavbarItem>
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
        className="sm:hidden"
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
