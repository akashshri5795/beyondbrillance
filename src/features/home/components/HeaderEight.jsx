import { testimonials } from "../constants/home_constant";
export const HeaderEight = () => {

    return (
        <>
            <div className="w-full h-auto flex justify-center items-center flex-col px-4 py-10 bg-white">
                
                {/* Heading */}
                <div className="w-full flex flex-col items-center text-center py-4 mt-[5%]">
                    <p className="text-sm uppercase tracking-[0.20em] font-bold text-[#2a9d8f] mb-4">
                        What schools say
                    </p>

                    <h2 className="text-5xl font-bold leading-tight text-[#0b1220]">
                        Trusted by{" "}
                        <span className="italic font-serif font-semibold text-orange-500">
                            educators
                        </span>
                    </h2>

                    <h2 className="text-5xl font-bold text-[#0b1220] mt-2">
                        across India
                    </h2>

                    <p className="mt-6 max-w-4xl text-md leading-relaxed text-gray-600">
                        From metro CBSE schools to small-town ICSE institutions —
                        <br />
                        here's what principals tell us.
                    </p>
                </div>

                {/* Cards */}
                <div className="w-full flex justify-center items-stretch gap-7 flex-wrap mt-14">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-[27rem] min-h-[20rem] bg-white border border-2 border-[#e6dccf] rounded-[32px] p-8 flex flex-col justify-between  hover:border-2 hover:border-black hover:-translate-y-2 transition-all duration-300"
                        >
                            <div>

                                <div className="text-4xl mb-6">
                                    {item.icon}
                                </div>

                                
                                <div className="flex gap-1 text-yellow-400 text-lg mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>

                               
                                <p className="text-md text-black font-[400]">
                                    {item.text}
                                </p>
                            </div>

                            {/* Bottom */}
                            <div className="mt-10 border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-bold text-[#0b1220]">
                                    {item.name}
                                </h3>

                                <p className="text-gray-500 text-xs">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};