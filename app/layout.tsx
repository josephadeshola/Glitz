"use client";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { Providers } from "./providers";
import AOSWrapper from "@/components/AOSWrapper";

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
            {children}
            </div>
        </Providers>
      </body>
    </html>
  );
}
