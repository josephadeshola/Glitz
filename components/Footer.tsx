import React from 'react'

const Footer = () => {

    return (
        <>
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-red-600 rounded-lg p-8 text-center">
                    <h2 className="text-xl font-bold text-white mb-3">Subscribe to our Newsletter</h2>
                    <p className="text-white text-sm mb-6">Never miss the latest information from us! Regularly receive info on exciting innovations, get to know us more & receive benefits.</p>

                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                        <input type="email" placeholder="Enter email" className="flex-grow px-4 py-2 text-gray-800 rounded-md focus:outline-none" />
                        <button className="bg-white text-red-600 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition">Subscribe</button>
                    </div>
                </div>
            </div>


            <div className="bg-black text-white p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="mb-4">
                                <div className="bg-red-600 h-12 w-12 flex items-center justify-center rounded mb-2">
                                    <span className="text-white font-bold text-xl">G</span>
                                </div>
                                <p className="text-gray-400 text-sm">437 Washington DC</p>
                            </div>

                            <div className="flex gap-3 mt-2">
                                <a href="#" className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-3 15h2v-6H9v6zm1-6.5c-.828 0-1.5-.672-1.5-1.5S9.172 8 10 8s1.5.672 1.5 1.5S10.828 10.5 10 10.5zm9 6.5h-2v-3.5c0-1.103-.897-2-2-2s-2 .897-2 2V15H9V9h2v1.531C11.531 9.586 12.418 9 13.5 9c2.485 0 4.5 2.015 4.5 4.5V15z" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.032 10.032 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3c0-.544-.453-1-1-1-.552 0-1 .447-1 1v3h-2v-6h2v1c.223-.346.555-.52.891-.647.33-.196.71-.303 1.109-.303 1.657 0 3 1.343 3 3v3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition">Legal</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition">Terms and Condition</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Others</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Secured Payment Gateways</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="border-t border-gray-800 pt-4 text-center text-sm text-gray-400">
                        <p>© 2025. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;