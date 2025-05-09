import Image from "next/image";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaTwitter} from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { IoIosMailOpen, IoIosArrowDropright} from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Footer = ({ heading = "Subscribe to our Newsletter", description = "Do not miss the latest information from us about trading in the market. By clicking the button, you are agreeing with our Terms & Conditions." }) => {
    return (
        <>

            <div className="bg-black lg:mt-80 mt-32 text-white py-1 px-2 lg:p-8">
                <div className="max-w-4xl bg-[#CC2837] h-[60vh] mt-10 py-14 border-white border-4 lg:px-32 px-5 text-center lg:-mt-80 mx-auto rounded-3xl ">
                    <div className="lg:mt-10  mx-auto">
                        <h2 className="lg:text-4xl text-3xl font-bold text-white mb-3">
                           {heading}
                        </h2>
                        <p className="text-white lg:text-md text-sm mb-6 mx-auto">
                       {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                            <input
                                className="flex-grow px-4 py-2 bg-white text-gray-800 rounded-md focus:outline-none"
                                placeholder="Enter email"
                                type="email"
                            />
                            <button className="bg-white text-red-600 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 px-5 md:grid-cols-3 mt-10 gap-8 mb-8">
                        <div className="flex flex-col items-cente md:items-start">
                            <div className="mb-4">
                                <div className=" h-[60px] w-[60px] mt-10  shadow shadow-white item-center text-center mb-2">
                                    <Image src="/images/black-logo.jpg" className="rounded-md" width={60} height={60} alt="full logo" />
                                </div>
                                <p className="text-gray-400 text-sm">437 Washington DC</p>
                            </div>

                            <div className="flex gap-3 mt-2">
                                <div className="bg-[#CC2837] py-2 rounded px-2">
                                    <FaInstagramSquare />
                                </div>
                                <div className="bg-[#CC2837] py-2 rounded px-2">

                                    <FaFacebook />
                                </div>
                                <div className="bg-[#CC2837] py-2 rounded px-2">

                                    <FaTwitter />
                                </div>

                                <div className="bg-[#CC2837] py-2 rounded px-2">

                                    <FaLinkedin />
                                </div>
                                <div className="bg-[#CC2837] py-2 rounded px-2">

                                    <FaYoutube />
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                            href="#"
                                        >
                                            <IoIosArrowDropright className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-2xl" />
                                            <p>
                                                Home
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                            href="#"
                                        >
                                            <IoIosArrowDropright className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-2xl" />
                                            <p>
                                                About
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                            href="#"
                                        >
                                            <IoIosArrowDropright className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-2xl" />
                                            <p>
                                                Exportation
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                            href="#"
                                        >
                                            <IoIosArrowDropright className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-2xl" />
                                            <p>
                                                Product
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                            href="#"
                                        >
                                            <IoIosArrowDropright className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-2xl" />
                                            <p>
                                                Procurment
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                            href="#"
                                        >
                                            <IoIosArrowDropright className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-2xl" />
                                            <p>
                                                Trading
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Other Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            className="text-gray-400 text-md hover:text-white transition"
                                            href="#"
                                        >
                                            Request Service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-400 text-md hover:text-white transition"
                                            href="#"
                                        >
                                            Terms and Condition
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-400 text-md hover:text-white transition"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                    >
                                        <IoLocationOutline className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-3xl" />
                                        <p className="text-md">Trinity Mall, 79/81 Obafemi Awolowo Way, Ikeja Lagos, Nigeria</p>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                    >
                                        <MdWifiCalling3 className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-3xl" />
                                        <p className="text-md">+2348136851352</p>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 text-gray-400 hover:text-white transition duration-300"
                                    >
                                        <IoIosMailOpen className="hover:text-green-500 text-[#CC2837] group-hover:text-white text-3xl" />
                                        <p className="text-md">info@glitz.com.ng</p>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4 text-center text-sm text-gray-400">
                        <p>© 2022 Glitz Commodities | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
