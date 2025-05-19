"use client";
import AOSWrapper from "@/components/AOSWrapper";
import NavbarComponent from "@/components/NavbarComponent";
import WhatsAppChatPopup from "@/components/WhatsAppChatPopup";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { Providers } from "./providers";
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
           <WhatsAppChatPopup/>
            </div>
        </Providers>
      </body>
    </html>
  );
}
