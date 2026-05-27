import headerBg from "../../../assets/images/header-images/BG.png";

import eleTwo from "../../../assets/images/header-images/2.png";
import eleFour from "../../../assets/images/header-images/4.png";

import eleOne from "../../../assets/images/header-images/1.png";
import eleThree from "../../../assets/images/header-images/3.png";
import eleFive from "../../../assets/images/header-images/4.png";


export const Header = () => {
    return (
        <>
            <div className="w-full h-[85vh] mt-15 bg-contain bg-no-repeat bg-center flex justify-between items-center" style={{ backgroundImage: `url(${headerBg})` }} >
                {/* left element */}
                <div className="w-[30vw] h-full relative">
                    <img src={eleTwo} className="hidden lg:block w-28 h-28 absolute top-[30%] left-[30%] rotate-[-20deg] animate-float" ></img>
                    <img src={eleFour} className="hidden lg:block w-10 h-10 absolute bottom-[7%] left-[80%] animate-float"></img>
                </div>

                {/* extra elements */}
                <   div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
                <div className="absolute top-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

                <div className="absolute top-16 left-[58%] text-yellow-400 text-3xl animate-pulse">✦</div>
                <div className="absolute top-1/2 right-16 text-green-400 text-4xl animate-bounce">✦</div>
                <div className= "absolute bottom-24 left-1/2 text-pink-400 text-3xl animate-pulse">♥</div>

                {/* middle element */}
                <div className="w-[50vw] h-auto flex flex-col items-center text-center mt-10">

                    <div className="flex items-center gap-2 bg-[#e6ddd1] px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                        <p className="text-[10px] sm:text-xs text-gray-600 font-medium">
                            NEP 2020 Aligned · Since 1987
                        </p>
                    </div>

                    <h1 className="text-5xl lg:text-7xl leading-[1] font-bold tracking-tight text-black">
                        Empowering
                        <br />
                        Teachers,
                        <br />
                        Enhancing
                        <br />
                        <span className="italic font-serif font-semibold text-[#fe7f2d]">
                            Learning.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 px-2">
                       To nurture lifelong learners who are curious, creative, and confident to face the future.
                    </p>

                    {/* <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#0b1220] text-white font-semibold hover:scale-105 transition duration-300 shadow-lg">
                            👤 Teacher Login
                        </button>

                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#e6ddd1] text-[#0b1220] font-semibold hover:scale-105 transition duration-300">
                            ▶ Try Me Out
                        </button>
                    </div> */}
                    
                </div>
                {/* right element */}
                <div className="w-[30vw] h-full relative">
                    <img src={eleOne} className="hidden lg:block w-28 h-28 absolute top-[25%] left-[10%]  animate-float rotate-[-20deg]"></img>
                    <img src={eleThree} className="hidden lg:block w-28 h-28 absolute top-[20%] right-[30%] animate-float"></img>
                    <img src={eleFive} className="hidden lg:block w-10 h-10 absolute bottom-[6%] left-[10%] animate-float"></img>
                </div>
            </div>
        </>
    )
}