import phoneImage from "../../../assets/images/contact-page-images/phone-image.png";

export const AddressPage = () => {
    return (
        <>
            <div className="relative w-[95vw] min-h-[70vh] overflow-hidden rounded-[40px] p-[2px] bg-gradient-to-r from-pink-200 via-orange-100 to-purple-200 shadow-2xl">

                <div className="relative w-full h-full rounded-[38px] bg-gradient-to-br from-[#FFF8F1] via-[#FFF3E8] to-[#FDF5FF] overflow-hidden">

                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

                    <div className="absolute top-16 left-[58%] text-yellow-400 text-3xl animate-pulse">✦</div>
                    <div className="absolute top-1/2 right-16 text-green-400 text-4xl animate-bounce">✦</div>
                    <div className="absolute bottom-24 left-1/2 text-pink-400 text-3xl animate-pulse">♥</div>

                    <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-200 rounded-t-[100%] opacity-90"></div>

                    {/* Content */}
                    <div className="relative z-10 w-full min-h-[70vh] flex lg:flex-row flex-col items-center justify-center p-6 lg:p-10 gap-6">

                        <div className="relative w-full lg:w-1/2 h-full flex justify-center items-center">

                            <div
                                className="hidden lg:block absolute left-0 drop-shadow-2xl w-[50vw] h-[80vh] bg-contain bg-center bg-no-repeat rotate-x-20"
                                style={{ backgroundImage: `url(${phoneImage})` }}
                            ></div>

                            {/* Contact Cards */}
                            <div className="absolute right-0 2xl:right-10 w-full w-full lg:w-[30vw] flex flex-col items-center gap-5">

                                {/* Address */}
                                <p className="w-full lg:w-[300px] lg:w-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm 2xl:text-lg font-semibold text-gray-800">
                                    <i className="fa-solid fa-location-dot text-red-500 text-xl mr-2"></i>
                                    56/41, Site 4, Sahibabad, Ghaziabad,
                                    <br />
                                    Uttar Pradesh - 201010, India
                                </p>

                                {/* Email */}
                                <p className="w-full lg:w-[300px] lg:w-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 lg:ml-12 text-sm 2xl:text-lg font-semibold text-gray-800">
                                    <i className="fa-solid fa-envelope text-blue-500 text-xl mr-2"></i>
                                    Email Us: info@beyondbrilliance.in
                                </p>

                                {/* Phone */}
                                <p className="w-full lg:w-[300px] lg:w-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 lg:ml-28 text-sm 2xl:text-lg font-semibold text-gray-800">
                                    <i className="fa-solid fa-phone text-green-500 text-xl mr-2"></i>
                                    Call Us:  +91-9821633507
                                </p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="hidden lg:block w-full lg:w-1/2 flex flex-col justify-center items-center text-center z-10">


                            {/* Heading */}
                            <h1 className="hidden lg:block wiggle leading-none font-black uppercase">
                                <span className="block text-6xl 2xl:text-9xl bg-gradient-to-r from-slate-900 to-blue-900 text-transparent bg-clip-text drop-shadow-lg">
                                    GET IN
                                </span>
                                <span className="block text-6xl 2xl:text-9xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-transparent bg-clip-text drop-shadow-lg mt-2">
                                    TOUCH
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-gray-600 text-md 2xl:text-xl leading-relaxed">
                                Schools, parents, and partners — drop us a line and
                                we’ll get back to you within one business day.
                            </p>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}