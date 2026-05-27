import { contactCards } from "./constants/contact_constants"
import { useEffect, useRef, useState } from "react";

export const ReachusPage = () => {

    const sectionRef = useRef(null); // useRef target the cards section 
    const [showCards, setShowCards] = useState(false); // and this is state to start the animation

    useEffect(() => {
        const observer = new IntersectionObserver(  //ye check krega ki sectionRef screen per aya ya nahi 
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowCards(true);
                }
            },
            { threshold: 0.25 } // its means 25% section screen per atei he start the animation
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    })

    //animate class make//
    const animationClasses = [
        showCards
            ? "translate-x-0 opacity-100"
            : "-translate-x-32 opacity-0",

        showCards
            ? "translate-y-0 opacity-100"
            : "-translate-y-32 opacity-0",

        showCards
            ? "translate-x-0 opacity-100"
            : "translate-x-32 opacity-0",
    ];

    return (
        <>
            <div className="w-full flex flex-col items-center text-center py-4 mt-[5%]">
                <p className="text-sm uppercase tracking-[0.20em] font-bold text-orange-400 mb-4">
                    how can we help
                </p>

                <h2 className="text-5xl font-bold leading-tight text-[#0b1220]">
                    Pick the{" "}
                    <span className="italic font-serif font-semibold text-orange-500">
                        fastest{" "}
                    </span>
                    way to <br />reach us.

                </h2>

                <p className="mt-6 max-w-4xl text-md leading-relaxed text-gray-600">
                    Different teams for different questions — pick the right one and you'll
                    <br />
                    hear back faster.
                </p>
                {/* cards */}
                <div className="w-full flex justify-center items-center mt-12 px-4">
                    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contactCards.map((card, index) => (
                            <div
                                ref={sectionRef}
                                key={index}
                                className={`${card.bgColor} cursor-pointer rounded-[28px] p-6 min-h-[280px] flex flex-col justify-start shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300  ${animationClasses[index]}`}
                                style={{ transitionDelay: `${index * 100}ms`, }} >
                                {/* Badge */}
                                <div className="inline-flex justify-start items-center gap-2 w-fit bg-white/60 px-4 py-2 rounded-full">
                                    <span
                                        className={`w-2.5 h-2.5 rounded-full ${card.badgeDot}`}
                                    ></span>
                                    <span className="text-[11px] font-extrabold tracking-wider text-[#0B1B33] uppercase">
                                        {card.badge}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-5  text-left">
                                    <h2 className="text-2xl font-bold text-[#0B1B33] leading-tight">
                                        {card.title}
                                    </h2>

                                    <p className="mt-3 text-base leading-7 text-[#44546A]">
                                        {card.description}
                                    </p>

                                    <h3 className="mt-5 text-xl font-bold text-[#0B1B33] break-words">
                                        {card.email}
                                    </h3>

                                    <p className="mt-2 text-lg font-medium text-[#44546A]">
                                        {card.phone}
                                    </p>
                                </div>

                                {/* Button */}
                                <button className="mt-6 w-fit text-sm font-extrabold tracking-[0.18em] uppercase text-[#0B1B33] hover:translate-x-1 transition-transform duration-300">
                                    {card.button}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}