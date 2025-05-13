import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600">Sorry, the page you're looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#CC2837] text-white rounded-full hover:bg-[#a71f2c] transition"
      >
        Go Home
      </Link>
    </div>
  );
}
