import { motion } from "framer-motion";
import { cardsInfo } from "../constants/home_constant";

export const HeaderThree = () => {
    return (
        <section className="bg-[#f0ebd8] w-full min-h-screen lg:min-h-[85vh] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center">
            {/* Headings */}
            <div className="w-full flex flex-col items-center text-center">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-pink-400 mb-3 sm:mb-4">
                    CURRICULUM STAGES
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0b1220]">
                    Books for every{" "}
                    <span className="italic font-serif font-semibold text-orange-500">
                        class
                    </span>
                </h2>

                <p className="mt-4 sm:mt-6 max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 px-2">
                    Curriculum-mapped textbooks and supplementary readers for
                    every major Indian and international board.
                </p>
            </div>

            {/* Cards */}
            <div className="w-full max-w-7xl mt-10 sm:mt-12 lg:mt-14">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
                    {cardsInfo.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.15,
                                ease: "easeOut",
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            className="bg-white rounded-2xl shadow-md min-h-[210px] sm:min-h-[230px] lg:min-h-[250px]
                                       flex flex-col justify-center items-center text-center p-4
                                       cursor-pointer transition duration-300
                                       hover:-translate-y-3 hover:border-2 hover:border-black"
                        >
                            {/* Image */}
                            <div
                                className="w-[50px] h-[60px] sm:w-[60px] sm:h-[70px] bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                }}
                            />

                            {/* Title */}
                            <h3 className="mt-3 text-base sm:text-lg font-bold text-[#0b1220]">
                                {card.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-[11px] sm:text-xs text-gray-500 px-2 mt-1 leading-relaxed">
                                {card.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};