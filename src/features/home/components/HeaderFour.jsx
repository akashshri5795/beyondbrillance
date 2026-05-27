import bg from "../../../assets/images/header-four-image/bg.png";

export const HeaderFour = () => {
    const features = [
        "Bulk pricing & tiered discounts",
        "Dedicated school account manager",
        "Net-30 invoicing for verified schools",
        "Free sample copies for evaluation",
        "Teacher training & lesson plans",
        "Custom branding for school editions",
    ];

    return (
        <section className="w-full bg-white py-6 px-3 lg:px-6">
            <div
                className="relative w-full lg:w-[95%] mx-auto rounded-[32px] overflow-hidden bg-[#08111f]">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#08111f]/85"></div>

                {/* Main Content */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-6 sm:p-10 lg:p-14 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        
                        <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-400 font-semibold text-sm mb-8">
                            For schools
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Built for{" "}
                            <span className="text-yellow-400 italic font-serif">
                                institutional
                            </span>
                            <br />
                            procurement.
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-lg leading-8 max-w-2xl mb-10">
                            From single-class trials to district-wide rollouts — predictable
                            pricing, on-time delivery, and curriculum support that goes beyond
                            the book.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-full bg-emerald-400 flex items-center justify-center text-[#08111f] font-bold text-sm shrink-0 mt-0.5">
                                        ✓
                                    </div>
                                    <p className="text-gray-200 text-base leading-7">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-[#0d1a2d]/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-8">
                                Get a custom quote in 24 hours
                            </h3>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="School name"
                                    className="w-full h-14 px-5 rounded-xl bg-[#13233b]/80 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-yellow-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Work email"
                                    className="w-full h-14 px-5 rounded-xl bg-[#13233b]/80 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-yellow-400"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone (optional)"
                                    className="w-full h-14 px-5 rounded-xl bg-[#13233b]/80 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-yellow-400"
                                />

                                <select className="w-full h-14 px-5 rounded-xl bg-[#13233b]/80 border border-white/10 text-gray-400 outline-none focus:border-yellow-400">
                                    <option>Approximate order size</option>
                                    <option>50–100 Books</option>
                                    <option>100–500 Books</option>
                                    <option>500–1000 Books</option>
                                    <option>1000+ Books</option>
                                </select>

                                <button
                                    type="submit"
                                    className="w-full h-14 mt-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/30"
                                >
                                    Send my request →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};