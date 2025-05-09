import products from "@/data/products";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// Generate all possible slugs statically
export default async function Page({ params }:any) {
 const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="text-gray-800">
       <div className="min-h-[60vh] bg-gradient-to-b from-[#111827] via-gray-900 to-white -mt-10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full max-w-[500px] h-[500px] mx-auto shadow-xl rounded-full overflow-hidden border-4 border-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#CC2837]">
              {product.name}
            </h1>
            <p className="text-md font-bold md:text-lg text-gray-100">
              We take pride in supplying quality cashew kernels that are sustainably sourced.
            </p>
            <p className="text-base font-bold md:text-lg text-gray-300">
              {product.description || "No description available."}
            </p>
          </div>
        </div>
      </div> 

      <div className="relative z-10 bg-gradient-to-b from-[#CC2837] via-[#881F2A] to-black rounded-b-lg text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {product.specification?.paramiter}
            </h2>

            <ul className="space-y-4 text-lg font-medium">
              {Object.entries(product.specification || {}).map(([key, value]) => {
                if (key === "size" && value) {
                  return (
                    <div key={key}>
                      <div className="flex gap-3 items-center">
                        <FaDotCircle className="text-2xl text-gray-600" />
                        <div className="font-semibold capitalize">{key}:</div>
                      </div>
                      <p className="text-white ms-9">{value}</p>
                    </div>
                  );
                }

                if (key !== "size" && key !== "paramiter") {
                  return (
                    <div key={key}>
                      <div className="flex gap-3 items-center">
                        <FaDotCircle className="text-xl text-gray-600" />
                        <div className="font-semibold capitalize">{key}:</div>
                      </div>
                      <p className="text-white ms-9">{value || "N/A"}</p>
                    </div>
                  );
                }

                return null;
              })}
            </ul>
          </div>

          <div className="relative w-full h-[400px] shadow-xl rounded-2xl overflow-hidden border-4 border-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div> 

      <div className="glitz-container mt-14">
        <div className="glitz-text rounded">GLITZ</div>
      </div>

      <section className="bg-white">
        <Footer
          heading="Partner with Us for Seamless Agro-community Trade"
          description="Whether you're a global importer or a local producer, GLITZ Trade is your trusted link to a better, more transparent supply chain."
        />
      </section>
    </div>
  );
}
