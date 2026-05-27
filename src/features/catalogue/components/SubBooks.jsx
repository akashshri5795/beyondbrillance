import { SubbooksData } from "./constants/sub-books";
import { useRef } from "react";

export const SubBooks = ({ selectedBook, setSelectedBook, }) => {

    // slider
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -350,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 350,
            behavior: "smooth",
        });
    };

    const matchedBook = SubbooksData.find(
        (item) => item.heading === selectedBook.title
    );

    if (!matchedBook) return null;

    const subjectThemes = {
        English: {
            gradient: "from-pink-500 to-rose-400",
            light: "bg-pink-50",
            button: "from-pink-500 to-orange-400"
        },

        Hindi: {
            gradient: "from-orange-500 to-yellow-400",
            light: "bg-orange-50",
            button: "from-orange-500 to-pink-500"
        },

        Mathematics: {
            gradient: "from-sky-500 to-cyan-400",
            light: "bg-sky-50",
            button: "from-sky-500 to-cyan-500"
        }
    };

    const currentTheme =
        subjectThemes[matchedBook.subject] || subjectThemes.English;

    return (

        <div className="fixed inset-0 z-[999] overflow-y-auto bg-[#f8fafc]">

            {/* BACKGROUND BLURS */}

            <div className="fixed top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-300/20 blur-3xl rounded-full"></div>

            <div className="fixed bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-orange-300/20 blur-3xl rounded-full"></div>

            <div className="w-full min-h-screen p-4 lg:p-10 relative z-10">

                {/* BACK BUTTON */}

                <button
                    onClick={() => setSelectedBook(null)}
                    className="mb-8 px-7 py-3 rounded-2xl bg-white shadow-lg border border-gray-200 font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                    ← Back
                </button>

                {/* HERO SECTION */}

                <div className="relative overflow-hidden rounded-[45px] bg-white border border-gray-200  p-6 lg:p-14">

                    {/* DECORATION */}

                    <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] rounded-full "></div>

                    <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px]  rounded-full "></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-14">

                        {/* LEFT CONTENT */}

                        <div className="flex-1">

                            <p className="uppercase tracking-[0.4em] text-orange-500 font-black text-sm">
                                {matchedBook.subject}
                            </p>

                            <h1 className="mt-5 text-5xl lg:text-7xl font-black text-slate-800 leading-tight">
                                {matchedBook.heading}
                            </h1>

                            <h2 className="mt-5 text-2xl font-bold text-slate-600">
                                {matchedBook.subHeading}
                            </h2>

                            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-[650px]">
                                {matchedBook.description}
                            </p>

                            {/* FEATURES */}

                            <div className="mt-10 flex flex-wrap gap-5">

                                <div className="px-6 py-5 rounded-3xl bg-white border border-gray-100 shadow-md">
                                    <p className="font-black text-slate-800">
                                        📚 8 Level Series
                                    </p>
                                </div>

                                <div className="px-6 py-5 rounded-3xl bg-white border border-gray-100 shadow-md">
                                    <p className="font-black text-slate-800">
                                        🎯 Interactive Learning
                                    </p>
                                </div>

                                <div className="px-6 py-5 rounded-3xl bg-white border border-gray-100 shadow-md">
                                    <p className="font-black text-slate-800">
                                        ✨ Beautiful Illustrations
                                    </p>
                                </div>

                            </div>

                            {/* BUTTONS */}

                            <div className="mt-10 flex flex-wrap gap-5">

                                <button
                                    className={`px-8 py-4 rounded-2xl text-white font-bold bg-gradient-to-r ${currentTheme.button} shadow-xl hover:scale-105 transition-all duration-300`}
                                >
                                    Explore Books
                                </button>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}

                        <div className="flex-1 flex justify-center">

                            <div className="relative">

                                <div
                                    className="w-full lg:w-[50vw] h-[450px] lg:h-[650px] bg-contain bg-no-repeat bg-center  hover:scale-105 transition-all duration-500"
                                    style={{
                                        backgroundImage: `url(${matchedBook.image})`,
                                    }}
                                ></div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* WHY CHOOSE */}

                <div className="mt-28">

                    <div className="text-center">

                        <p className="uppercase tracking-[0.4em] text-pink-500 font-black text-sm">
                            WHY CHOOSE {matchedBook.heading}
                        </p>

                        <h2 className="mt-5 text-5xl font-black text-slate-800">
                            Learning Made Beautiful ✨
                        </h2>

                        <p className="mt-5 text-gray-500 leading-relaxed max-w-[700px] mx-auto">
                            Designed with engaging visuals, activities and
                            interactive learning methods to make education fun
                            and effective.
                        </p>
                    </div>

                    {/* FEATURES GRID */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "📚",
                                title: "Concept Clarity",
                                desc: "Easy explanations with engaging activities."
                            },

                            {
                                icon: "🎯",
                                title: "Interactive Learning",
                                desc: "Fun exercises that improve participation."
                            },

                            {
                                icon: "🌈",
                                title: "Colorful Design",
                                desc: "Modern visuals children love learning from."
                            },

                            {
                                icon: "🏆",
                                title: "Skill Development",
                                desc: "Improves confidence and creativity."
                            }

                        ].map((item, index) => (

                            <div
                                key={index}
                                className="relative overflow-hidden rounded-[35px] bg-white border border-gray-200 p-8 shadow-[0_15px_50px_rgba(15,23,42,0.06)] hover:-translate-y-3 transition-all duration-500"
                            >

                                <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-pink-100 rounded-full"></div>

                                <div className="relative z-10">

                                    <div className={`w-[80px] h-[80px] rounded-3xl bg-gradient-to-r ${currentTheme.button} flex items-center justify-center text-4xl shadow-lg`}>
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-7 text-2xl font-black text-slate-800">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-gray-500 leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOOKS SECTION */}

                <div className="mt-28 relative overflow-hidden">

                    {/* HEADING */}

                    <div className="text-center">

                        <p className="uppercase tracking-[0.4em] text-orange-500 font-black text-sm">
                            EXPLORE THE SERIES
                        </p>

                        <h2 className="mt-5 text-5xl font-black text-slate-800">
                            All Books Collection 📖
                        </h2>

                    </div>

                    {/* BUTTONS */}

                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-[60%] -translate-y-1/2 z-30 w-[65px] h-[65px] rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] text-3xl font-black hover:scale-110 transition-all duration-300"
                  > ←</button>

                    <button
                        onClick={scrollRight}
                        className=" absolute right-0 top-[60%] -translate-y-1/2 z-30 w-[65px] h-[65px] rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] text-3xl font-black hover:scale-110 transition-all duration-300">
                        →
                    </button>

                    {/* SLIDER */}

                    <div
                        ref={sliderRef} className="mt-16 flex gap-8 overflow-x-auto scroll-smooth overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-10 py-5"
                    >
                        {matchedBook.books.map((book, index) => (
                            <div
                                key={book.id}
                                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] group relative overflow-hidden rounded-[35px] bg-[#fffdf8] border-[3px] border-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-4 transition-all duration-500 flex-shrink-0">

                                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                <div className="relative z-10 p-4">

                                    <div
                                        className="w-full h-[350px] bg-contain bg-no-repeat bg-center group-hover:scale-105 transition-all duration-500"
                                        style={{backgroundImage: `url(${book.image})`,}}></div>
                                </div>

                                {/* CONTENT */}

                                <div className="relative z-10 p-6 border-t border-gray-100">

                                    <h3 className="text-3xl text-center font-black text-slate-800">
                                        Book {index + 1}
                                    </h3>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* INSIDE BOOK SECTION */}

                <div className="mt-28">

                    <div className="text-center">

                        <p className="uppercase tracking-[0.4em] text-pink-500 font-black text-sm">
                            INSIDE THE BOOKS
                        </p>

                        <h2 className="mt-5 text-5xl font-black text-slate-800">
                            Explore Learning Pages 📚
                        </h2>

                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                        {matchedBook.books.map((book) => (

                            <div
                                key={book.id}
                                className="relative rounded-[40px] overflow-hidden bg-white border border-gray-200 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                            >

                                {/* IMAGE */}

                                <div
                                    className="w-full h-[350px] bg-contain bg-no-repeat bg-center rounded-[30px]"
                                    style={{
                                        backgroundImage: `url(${book.image})`
                                    }}
                                ></div>

                                <div className="mt-7">

                                    <h3 className="text-3xl font-black text-slate-800">
                                        Learning Preview
                                    </h3>

                                    <p className="mt-4 text-gray-500 leading-relaxed">
                                        Activities, examples, stories and engaging
                                        layouts that make learning enjoyable.
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mt-28 mb-10">

                    <div className="relative overflow-hidden rounded-[45px] bg-white border border-gray-200 p-10 lg:p-16 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">

                        <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-pink-200/30 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

                            <div>

                                <p className="uppercase tracking-[0.4em] text-orange-500 font-black text-sm">
                                    EMPOWER LEARNING
                                </p>

                                <h2 className="mt-5 text-4xl lg:text-6xl font-black text-slate-800 leading-tight">
                                    Inspire Young Minds
                                    <br />
                                    With {matchedBook.heading}
                                </h2>

                                <p className="mt-6 text-lg text-gray-500 max-w-[700px] leading-relaxed">
                                    A modern educational series designed to
                                    encourage creativity, confidence and joyful
                                    learning experiences.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};