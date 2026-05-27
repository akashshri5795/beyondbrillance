export const Footer = () => {
    return (
        <footer className="w-full bg-[#0d1321] flex flex-col pt-10 sm:pt-12 lg:pt-14">

            {/* Top Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[8%] pb-10 sm:pb-12">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">

                    {/* Left Section */}
                    <div className="w-full lg:w-[32%]">

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="font-serif w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center bg-white/20 text-white rounded-2xl font-bold text-base sm:text-lg">
                                R
                            </span>

                            <span className="text-white font-bold text-lg sm:text-xl font-serif">
                                Rohan Book Co.
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base leading-7 text-gray-300">
                            Producing curriculum-aligned books for Indian schools since 1987.
                            Trusted by educators across CBSE, ICSE and state boards.
                        </p>

                        {/* Subscribe Form */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-7 w-full">
                            <input
                                type="email"
                                placeholder="School email for updates"
                                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-5 py-3 rounded-full outline-none text-sm sm:text-base"
                            />

                            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 rounded-full font-semibold text-sm whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="hidden lg:flex w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-bold mb-2 text-base">
                                Catalogue
                            </h3>

                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Browse by Class
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Browse by Subject
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Series & Curricula
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                New Arrivals
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-bold mb-2 text-base">
                                For Schools
                            </h3>

                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Bulk Orders
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Request a Quote
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Sample Copies
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                School Account
                            </p>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-bold mb-2 text-base">
                                Support
                            </h3>

                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Track Order
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Returns
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Contact Us
                            </p>
                            <p className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                                Help Centre
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[8%] py-5 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 text-center md:text-left">

                    <p className="text-xs sm:text-sm text-gray-400">
                        © 2026 Rohan Book Company Pvt. Ltd. — All rights reserved.
                    </p>

                    <p className="text-xs sm:text-sm text-gray-500">
                        Made in India · GST 27ABCDE1234F1Z5
                    </p>
                </div>
            </div>
        </footer>
    );
};