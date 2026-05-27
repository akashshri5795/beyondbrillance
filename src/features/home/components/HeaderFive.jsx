import { cardInfo } from "../constants/home_constant";

export const HeaderFive = () => {

    return (
        <>
            <div className="w-full h-auto p-2 flex justify-center items-center flex-col pb-6 ">
                <div className="w-full flex flex-col items-center text-center py-4 mt-[5%]">
                    {/* Small Top Text */}
                    <p className="text-sm uppercase tracking-[0.1em] font-bold text-[#8338ec] mb-4">
                        Curated curriculam
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-5xl font-bold leading-tight text-[#0b1220]">
                        Featured{" "}
                        <span className="italic font-serif font-semibold text-orange-500">
                            series
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-4xl text-md leading-relaxed text-gray-600">
                        End-to-end book families designed to grow with students from Class 1
                        <br />
                        through 10.
                    </p>
                </div>
                {/* cards */}

                {/* Cards */}
                <div className="w-full flex justify-center items-center mt-10">
                    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cardInfo.map((card, i) => {
                            return (
                                <div
                                    key={i}
                                    className="relative
                               w-full
                               h-[44vh]
                               sm:h-[35vh]
                               lg:h-[42vh]
                               rounded-3xl
                               overflow-hidden
                               bg-cover bg-center bg-no-repeat
                               cursor-pointer
                               transition duration-500
                               hover:-translate-y-3"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    {/* Content */}
                                    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between text-white">
                                        {/* Top Content */}
                                        <div>
                                            {/* Subject Badge */}
                                            <span className="inline-block px-4 py-2 text-black lg:text-white rounded-full bg-white md:bg-white/20 md:text-white lg:bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wide">
                                                {card.subject}
                                            </span>

                                            {/* Title */}
                                            <h3 className="mt-6 text-2xl font-bold leading-tight">
                                                {card.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90">
                                                {card.text}
                                            </p>
                                        </div>

                                        {/* Bottom Section */}
                                        <div>
                                            {/* Divider */}
                                            <div className="w-full h-px bg-white/25 mb-4"></div>

                                            <div className="flex justify-between items-center gap-4">
                                                {/* Grades */}
                                                <p className="text-sm font-medium text-white/90">
                                                    {card.grades}
                                                </p>

                                                {/* Explore Link */}
                                                <button className="text-sm font-semibold whitespace-nowrap hover:translate-x-1 transition duration-300">
                                                    Explore →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}