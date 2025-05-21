"use client";
import Footer from "@/components/Footer";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-white">
      <section className="relative w-full min-h-screen -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/african.jpg"
          fill
          alt="Terms Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-md md:text-lg leading-relaxed mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <Link href="/">
            <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-3 md:px-4 lg:px-24 py-10 lg:py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
          <p className="mb-6">
            Welcome to Glitz Trade. These Terms and Conditions govern your use of our website located at www.glitz.com.ng and its subdomains. By using the Site, you agree to abide by these Terms.
          </p>

          <h2 className="text-2xl font-bold mb-6">2. Use of Site</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>You must be at least 18 years old to use this site.</li>
            <li>You agree not to use the site for any unlawful purpose or any purpose prohibited by these Terms.</li>
            <li>All content is the property of Glitz Trade and may not be copied without permission.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">3. Intellectual Property</h2>
          <p className="mb-6">
            All materials on this Site, including but not limited to text, images, logos, and code, are the intellectual property of Glitz Trade and protected by applicable laws.
          </p>

          <h2 className="text-2xl font-bold mb-6">4. Limitation of Liability</h2>
          <p className="mb-6">
            Glitz Trade shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
          </p>

          <h2 className="text-2xl font-bold mb-6">5. Changes to Terms</h2>
          <p className="mb-6">
            We may revise these Terms at any time without notice. By continuing to use the site, you agree to be bound by the current version.
          </p>

          <h2 className="text-2xl font-bold mb-6">6. Contact</h2>
          <p className="mb-6">
            If you have any questions regarding these Terms, please contact us at <a href="mailto:info@glitz.com.ng" className="text-blue-600 underline">info@glitz.com.ng</a>.
          </p>
        </div>
      </section>

     
      <section className="bg-white">
        <Footer
          heading="Partner with Us for Seamless Agro-community Trade"
          description="Whether you're a global importer or a local producer, GLITZ Trade is your trusted link to a better, more transparent supply chain."
        />
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
