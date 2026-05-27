export const FormPage = () => {
    const benefits = [
        "Free sample copies for schools",
        "Custom quote in 24 hours",
        "Dedicated account manager",
        "No spam — promise",
    ];

    return (
        <div className="w-full h-full lg:min-h-screen flex justify-center items-center px-4 py-10">
            <div className="relative w-[95vw] max-w-[1500px] min-h-[95vh] overflow-hidden rounded-[40px] p-[2px] bg-gradient-to-r from-pink-200 via-orange-100 to-purple-200 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

                {/* Outer Background */}
                <div className="relative w-full h-full rounded-[38px] bg-gradient-to-br from-[#FFFDFB] via-[#FFF8F1] to-[#FDF5FF] overflow-hidden">

                    {/* Decorative Blobs */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 left-1/3 w-[32rem] h-[32rem] bg-orange-300/20 rounded-full blur-3xl"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-6 left-6 text-yellow-400 text-5xl animate-pulse">
                        ✦
                    </div>
                    <div className="absolute top-1/2 right-8 text-5xl animate-bounce">
                        😊
                    </div>
                    <div className="absolute bottom-8 right-10 text-pink-400 text-5xl animate-pulse">
                        ♥
                    </div>

                    {/* Bottom Wave */}
                    <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-200 rounded-t-[100%] opacity-90"></div>

                    {/* Main Content */}
                    <div className="relative z-10 w-full min-h-[95vh] flex lg:flex-row flex-col items-center justify-center px-6 lg:px-12 py-10 gap-10">

                        {/* Left Section */}
                        <div className="w-full lg:w-[45%] flex flex-col justify-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg mb-6 w-fit">
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-700 uppercase">
                                    Send Us A Message
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-slate-900">
                                Tell us about your
                                <br />
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text italic font-serif">
                                    school,
                                </span>{" "}
                                we’ll do the
                                <br />
                                rest.
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 text-base sm:text-lg leading-8 mt-8 max-w-xl">
                                Fill in a few details and we’ll route your request
                                to the right team. We typically respond within
                                24 hours on working days.
                            </p>

                            {/* Benefits */}
                            <div className="mt-10 space-y-4">
                                {benefits.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 text-white flex items-center justify-center shadow-md font-bold">
                                            ✓
                                        </div>
                                        <span className="text-gray-700 text-base sm:text-lg font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Feature Pills */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {[
                                    "⚡ Quick Response",
                                    "📞 Real Support",
                                    "💌 Friendly Team",
                                ].map((item, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-lg border border-white/60 shadow-md text-sm font-semibold text-gray-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Section - Form */}
                        <div className="w-full lg:w-[50%]">
                            <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] border border-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8 lg:p-10">

                                <form className="space-y-5">

                                    {/* Name */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Priya"
                                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-300 transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Sharma"
                                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-300 transition"
                                            />
                                        </div>
                                    </div>

                                    {/* School */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mb-2">
                                            School / Organisation
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Delhi Public School, Pune"
                                            className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-300 transition"
                                        />
                                    </div>

                                    {/* Email + Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="you@school.in"
                                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-300 transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+91 98765 43210"
                                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-300 transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Select */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mb-2">
                                            How Can We Help?
                                        </label>
                                        <select className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-300 transition">
                                            <option>Bulk order / quote</option>
                                            <option>Free samples</option>
                                            <option>Book catalog</option>
                                            <option>General enquiry</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows="4"
                                            placeholder="Tell us a bit about your needs — class, board, approximate quantity..."
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl outline-none resize-none focus:ring-2 focus:ring-purple-300 transition"
                                        ></textarea>
                                    </div>

                                    {/* Button */}
                                    <button
                                        type="submit"
                                        className="w-full h-14 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-orange-500 hover:to-red-500 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        Send Message →
                                    </button>

                                    {/* Privacy Note */}
                                    <p className="text-center text-sm text-gray-500">
                                        🔒 Your information is safe and will never
                                        be shared.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};