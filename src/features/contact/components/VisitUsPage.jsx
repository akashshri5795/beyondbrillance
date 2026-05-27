import { officeData } from "./constants/contact_constants";

export const VisitUsPage = () => {
    
    // style class
   const cardHoverClass = "transition-all duration-300 hover:-translate-y-3 hover:border-3 hover:border-black";

    return (
        <>
            {/* Heading */}
            <div className="w-full flex justify-center items-center flex-col text-center mt-10">
                <p className="text-sm uppercase tracking-[0.20em] font-bold text-purple-400 mb-4">
                    Visit Us
                </p>

                <h2 className="text-5xl font-bold  text-[#0b1220]">
                    Our{" "}
                    <span className="italic font-serif font-semibold text-orange-500">
                        offices
                    </span>{" "}
                    across <br />
                    India.
                </h2>

                <p className="mt-6 max-w-4xl text-md leading-relaxed text-gray-600">
                    Walk into one of our offices for sample copies, demos, or a
                    friendly cup
                    <br />
                    of chai.
                </p>
            </div>

            {/* Office Cards */}
            <div className="w-[100vw] py-8 px-6 flex flex-wrap justify-center gap-4">
                {officeData.map((office, index) => (
                    <div
                        key={index}
                        className={`w-[420px] min-h-[180px] bg-white border border-gray-300 rounded-[28px] p-6 ${cardHoverClass}`} 
                    >
                        {/* Icon */}
                        <div
                            className={`w-14 h-14 rounded-2xl ${office.iconBg} flex items-center justify-center text-xl mb-6`}
                        >
                            <span className="text-white">{office.icon}</span>
                        </div>

                        {/* Region Label */}
                        <p
                            className={`text-sm font-bold uppercase  ${office.placeColor} mb-5`}
                        >
                            {office.place}
                        </p>

                        {/* City */}
                        <h3 className="text-lg font-bold text-[#0b1220] mb-4">
                            {office.city}
                        </h3>

                        {/* Address */}
                        <p className="text-gray-600 text-sm leading-5 whitespace-pre-line mb-6">
                            {office.address}
                        </p>

                        {/* Contact */}
                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                            <p className="flex items-center gap-2">
                                <span className="text-red-500">📞</span>
                                {office.phoneNum}
                            </p>

                            <p className="flex items-center gap-2">
                                <span>✉️</span>
                                {office.email}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};