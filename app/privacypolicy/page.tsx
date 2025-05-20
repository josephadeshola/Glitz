"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen -mt-10 flex items-center justify-center text-white">
        <Image
          src="/images/african.jpg"
          fill
          alt="Privacy Policy Background"
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-md md:text-lg leading-relaxed mb-6">
            Learn how we collect, use, and protect your personal information when you engage with our services.
          </p>
          <Link href="https://wa.me/2348123456789">
            <Button className="bg-[#CC2837] hover:scale-105 transition text-sm px-7 py-3 rounded-full text-white font-semibold">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="px-3 md:px-4 lg:px-24 py-10 lg:py-20 bg-white text-black">
        <div className="space-y-10">
          {/* Intro */}
          <div data-aos="fade-up">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Introduction</h2>
            <p>
              This Privacy Policy outlines how we collect, use, store, and protect your personal data when you use our website or services.
              We value your trust and are committed to safeguarding your privacy.
            </p>
          </div>

          {/* Data Collection */}
          <div data-aos="fade-up">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">What Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>Transactional data when you make purchases or inquiries</li>
              <li>Usage data (IP address, browser type, pages visited, etc.)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* How We Use Data */}
          <div data-aos="fade-up">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To process orders and manage service delivery</li>
              <li>To respond to your inquiries and customer service requests</li>
              <li>To personalize your experience on our website</li>
              <li>To improve our website and marketing efforts</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* Sharing and Disclosure */}
          <div data-aos="fade-up">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">Data Sharing & Disclosure</h2>
            <p>
              We do not sell or rent your personal data. We may share your information with third-party service providers strictly for the
              purpose of delivering our services, complying with laws, or protecting our rights.
            </p>
          </div>

          {/* Your Rights */}
          <div data-aos="fade-up">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Request to restrict or object to processing</li>
            </ul>
          </div>

          {/* Security */}
          <div data-aos="fade-up">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to secure your data against unauthorized access, disclosure,
              alteration, or destruction.
            </p>
          </div>

          {/* Changes to Policy */}
          <div data-aos="fade-up">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally to reflect changes in our practices. We encourage you to review this page
              periodically.
            </p>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up">
            <h2 className="text-xl lg:text-3xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:info@yourcompany.com" className="text-blue-600 underline">
                info@glitz.com.ng
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Footer
          heading="Protecting Your Privacy is Our Priority"
          description="We are committed to transparency, accountability, and secure data handling practices to serve you better."
        />
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
