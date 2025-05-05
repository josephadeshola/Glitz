"use client"
import "@/styles/globals.css";
import 'aos/dist/aos.css';

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers>
          <div>
              {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
