import { useState } from "react";
import { subjectCards, booksData } from "./constants/catalougeCard";
import { motion } from "framer-motion";
import { SubBooks } from "./SubBooks";


export const CatalogueCards = () => {

    const [selectSubject, setSelectSubject] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);

    const filteredBooks = booksData.filter((book) =>
        book.subject === selectSubject)

    const handleBack = () => {
        setSelectSubject(null)
    }

    return (
        <div className="relative overflow-hidden w-full h-auto py-8 lg:py-12 flex flex-col items-center bg-[#f8fafc]">
            {/* start */}
            {/* BACKGROUND EFFECTS */}

            <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-pink-400/30 rounded-full blur-3xl"></div>
            <div className="absolute top-[20%] right-[-100px] w-[350px] h-[350px] bg-purple-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-100px] left-[30%] w-[350px] h-[350px] bg-orange-300/30 rounded-full blur-3xl"></div>

            {/* GRID EFFECT */}

            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: `linear-gradient(to right, black 1px, transparent 1px),linear-gradient(to bottom, black 1px, transparent 1px)`, backgroundSize: "50px 50px", }}
            ></div>

            {/* FLOATING ICONS */}

            <div className="absolute top-20 left-[10%] text-pink-500 text-5xl animate-bounce">✦</div>
            <div className="absolute top-[40%] right-[10%] text-yellow-400 text-5xl animate-pulse">✦</div>
            <div className="absolute bottom-20 left-[20%] text-purple-500 text-4xl animate-bounce">●</div>
            <div className="absolute bottom-[30%] right-[25%] text-orange-400 text-4xl animate-pulse">◆</div>


            {/* Tabs */}
            {/* <div className="w-[100%] h-[43vh] lg:h-auto bg-red-500  lg:w-[65%] bg-white/90 backdrop-blur-md py-3 lg:p-2 lg:rounded-full border border-gray-200 shadow-[0_10px_35px_rgba(15,23,42,0.08)] flex flex-wrap lg:flex-nowrap justify-center items-center gap-2">
                {tabs.map((tab, i) => (
                    <div
                        key={i}
                        className="group cursor-pointer font-semibold text-gray-700 w-full lg:w-auto px-4 lg:px-6 py-3 flex justify-center items-center gap-3 rounded-full hover:bg-[#0f172a] hover:text-white transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-gray-100 flex justify-center items-center shadow-sm group-hover:bg-white">
                            <div
                                className="bg-contain bg-no-repeat bg-center w-8 h-8 lg:w-5 lg:h-5"
                                style={{ backgroundImage: `url(${tab.icon})` }}
                            ></div>
                        </div>
                        <p className="text-xl lg:text-base whitespace-nowrap">
                            {tab.text}
                        </p>
                    </div>
                ))}
            </div> */}

            {/* Cards */}
            {!selectSubject && (
                <div className="mt-12 w-[100%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 place-items-center">
                    {subjectCards.map((sub, i) => (
                        <div
                            key={i}
                            className="group w-full flex flex-col items-center gap-8 cursor-pointer"
                        >
                            {/* Image Card */}
                            <div
                                onClick={() => setSelectSubject(sub.subjectName)}
                                className="relative w-[300px] h-[300px]  lg:w-[200px] lg:h-[200px] rounded-[34px] overflow-hidden bg-white shadow-[0_15px_45px_rgba(15,23,42,0.08)] border border-gray-100 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]">

                                {/* Decorative Circles */}
                                <div className="absolute top-5 left-5 w-5 h-5 bg-white/50 rounded-full blur-[1px]"></div>
                                <div className="absolute bottom-6 right-6 w-4 h-4 bg-white/40 rounded-full"></div>

                                {/* Subject Image */}
                                <div
                                    className=" w-[300px] h-[300px] lg:w-[200px] lg:h-[200px] bg-cover bg-no-repeat bg-center"
                                    style={{ backgroundImage: `url(${sub.image})` }}
                                ></div>
                            </div>

                            {/* Subject Name */}
                            <p className="text-[20px] font-extrabold text-slate-800 text-center leading-tight tracking-tight group-hover:text-[#ff6b35] transition-colors duration-300">
                                {sub.subjectName}
                            </p>

                            {/* Underline Decoration */}
                            <div className="w-0 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full transition-all duration-500 group-hover:w-24"></div>
                        </div>
                    ))}
                </div>
            )}

            {/* select card subjects render */}

            {selectSubject && !selectedBook && (
                <div className="mt-12 w-[95%] lg:w-[92%]">

                    <div className="relative mb-12 overflow-hidden rounded-[36px] border border-gray-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200/40 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl"></div>

                        {/* Content */}
                        <div className="relative z-10 px-6 py-8 lg:px-10 lg:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6">

                            {/* Left Side */}
                            <div className="flex items-center gap-5">

                                {/* Back Button */}
                                <button
                                    onClick={handleBack}
                                    className="group w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-x-1 transition-all duration-300 flex justify-center items-center"
                                >
                                    <span className="text-2xl font-bold text-slate-700 group-hover:text-orange-500 transition-colors duration-300">
                                        ←
                                    </span>
                                </button>

                                {/* Heading */}
                                <div>
                                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-orange-500">
                                        Browse Subject
                                    </p>

                                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
                                        {selectSubject}
                                    </h2>

                                    <p className="mt-2 text-gray-500 text-sm lg:text-base">
                                        Explore all books available for this subject.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side Badge */}
                            {/* <div className="self-start lg:self-auto bg-white border border-gray-200 shadow-md px-6 py-3 rounded-2xl">
                                <p className="text-sm font-medium text-gray-500">
                                    Total Books
                                </p>
                                <p className="text-2xl font-extrabold text-slate-800">
                                    {filteredBooks.length}
                                </p>
                            </div> */}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">

                        {filteredBooks.map((book) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedBook(book)}
                                className="group relative w-[170px] h-[250px] lg:w-[190px] lg:h-[270px] rounded-[35px] overflow-hidden cursor-pointer bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:-translate-y-3 hover:rotate-[-1deg] hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)] transition-all duration-500"
                            >

                                {/* Cute Gradient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-white to-purple-100/40"></div>

                                {/* Floating Blur */}
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-300/30 rounded-full blur-2xl"></div>

                                {/* Bestseller Badge */}
                                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-white shadow-md border border-pink-100">
                                    <p className="text-[10px] font-bold text-pink-500">
                                        Bestseller
                                    </p>
                                </div>

                                {/* Cute Star */}
                                <div className="absolute top-3 right-4 text-yellow-400 text-lg animate-pulse">
                                    ✦
                                </div>

                                {/* BOOK IMAGE */}
                                <div className="relative z-10 flex justify-center pt-10">

                                    <div
                                        className="w-[105px] h-[140px] lg:w-[120px] lg:h-[155px] bg-contain bg-no-repeat bg-center transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2"
                                        style={{ backgroundImage: `url(${book.image})` }}
                                    ></div>
                                </div>

                                {/* Bottom Content */}
                                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-white via-white/95 to-transparent">

                                    <h3 className="text-[16px] font-extrabold text-slate-800 text-center leading-tight line-clamp-2 group-hover:text-pink-500 transition-colors duration-300">
                                        {book.title}
                                    </h3>

                                    <button className="mt-3 w-full py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 hover:scale-[1.03] transition-all duration-300 cursor-pointer">
                                        View Book →
                                    </button>

                                </div>

                            </motion.div>
                        ))}
                    </div>

                    {/*NO BOOKS FOUND*/}
                    {filteredBooks.length === 0 && (
                        <div className="mt-12 w-full bg-white border border-gray-200 rounded-3xl shadow-lg p-10 text-center">
                            <p className="text-lg text-gray-500">
                                No books available for{" "}
                                <span className="font-bold text-slate-800">
                                    {selectSubject}
                                </span>
                            </p>
                        </div>
                    )}


                </div>
            )
            }

            {selectedBook && (
                <SubBooks
                    selectedBook={selectedBook}
                    setSelectedBook={setSelectedBook}
                />
            )}
            {/* end */}

        </div >
    );
};