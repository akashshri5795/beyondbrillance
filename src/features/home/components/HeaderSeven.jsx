
import { dataSeller } from "../constants/home_constant.js";

export const HeaderSeven = () => {

    
    return (
        <>
            <div className="w-full h-auto bg-[#f0ebd8] flex justify-center items-center flex-col p-2">
                {/* Header Section */}
                <div className="w-full flex flex-col items-center text-center py-4 mt-[5%]">
                    <p className="text-sm uppercase tracking-[0.30em] font-bold text-orange-500 mb-4">
                        school favourites
                    </p>
                    <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-[#0b1220]">
                        BestSellers{" "}
                        <span className="italic font-serif font-semibold text-orange-500">
                            this term
                        </span>
                    </h2>
                    <p className="mt-6 max-w-4xl text-md leading-relaxed text-gray-600">
                        Most ordered by partner schools across CBSE and ICSE.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 lg:grd-cols-4 gap-2 px-2 pb-12 mt-6 justify-items-center ">
                    {dataSeller.map((item, index) => (

                        <div
                            key={index}
                            className="relative w-[300px] bg-white rounded-[24px] p-3 shadow-md hover:shadow-xl hover:-translate-y-3 transition duration-500 ease-in-out"
                        >
                            <div className="rounded-[18px] overflow-hidden bg-white">
                                {/* Book Cover */}
                                <div
                                    className="relative h-[340px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-[18px]"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    {/* Class Badge */}
                                    <span className="absolute top-3 left-3 bg-white/25 text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                                        {item.badge}
                                    </span>

                                    {/* Book Title on Cover */}
                                    <p className="text-white text-md font-extrabold text-center font-serif px-2">
                                        {item.coverTitle}
                                    </p>

                                    {/* Publisher */}
                                    <span className="absolute bottom-3 right-3 text-white/70 text-[10px] font-bold tracking-widest">
                                        {item.publisher}
                                    </span>
                                </div>

                                {/* Card Info */}
                                <div className="px-4 pt-3 pb-4 bg-white">
                                    <p className="text-[11px] font-bold text-orange-500 tracking-wide mb-1">
                                        {item.subject}
                                    </p>

                                    <p className="text-[15px] font-bold text-gray-900 mb-0.5">
                                        {item.name}
                                    </p>

                                    <p className="text-[12px] text-gray-400 mb-3">
                                        {item.series}
                                    </p>

                                    {/* Price + Add Button */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[17px] font-bold text-gray-900">
                                                {item.price}
                                            </span>
                                            <span className="text-[12px] text-gray-400 line-through">
                                                {item.mrp}
                                            </span>
                                        </div>

                                        <button className="border border-gray-800 rounded-full px-4 py-1.5 text-[13px] font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
                                            + Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*  */}
            </div>
        </>
    );
};