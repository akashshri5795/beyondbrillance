import { motion } from "framer-motion";
import { stats, cards } from "../constants/home_constant.js";

export const HeaderTwo = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Stats Section */}
            <div className="w-full bg-[#f2e9e4] border-y-2 border-gray-200 py-4 sm:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                className="flex items-center justify-center sm:justify-start gap-3 p-2"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                                />

                                <div className="flex flex-col text-left">
                                    <p className="font-semibold text-xs sm:text-sm text-gray-900">
                                        {item.title}
                                    </p>
                                    <span className="text-[11px] sm:text-sm text-gray-600">
                                        {item.subtitle}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Heading Section */}
            {/* <div className="w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
                
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] font-bold text-orange-500 mb-3 sm:mb-4">
                    FIND YOUR BOOKS
                </p>

               
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0b1220]">
                    Browse by{" "}
                    <span className="italic font-serif font-semibold text-orange-500">
                        Board
                    </span>
                </h2>

                
                <p className="mt-4 sm:mt-6 max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
                    From foundational learners to senior secondary — curated by
                    stage, board and subject.
                </p>

               
                <div className="w-full mt-10 sm:mt-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                className="relative w-full h-72 sm:h-80 lg:h-[42vh] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-4 hover:translate-x-2"
                            >
                               
                                <div
                                    className="w-full h-full bg-contain bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${card})`,
                                    }}
                                ></div>

                              
                                <button
                                    className={`absolute hidden lg:block top-8 left-8 sm:top-10 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xl sm:text-2xl font-bold transition duration-300 hover:scale-110 hover:bg-white/50 ${
                                        index === 1
                                            ? "text-black"
                                            : "text-white"
                                    }`}
                                >
                                    →
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
};