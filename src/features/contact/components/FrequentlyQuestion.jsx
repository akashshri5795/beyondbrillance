import { useState } from "react"
import { questionData } from "./constants/contact_constants";

export const FrequentlyQuestion = () => {

    const [openQuestion, setOpenQuestion] = useState(false);

    const toggleQuestion = (idx) => {
        setOpenQuestion(prev => (prev === idx ? null : idx));
    };

    return (
        <>
            <div className="w-full flex jusitfy-center items-center flex-col text-center mb-10">
                <p className="text-sm uppercase tracking-[0.1rem] font-bold text-[#34a0a4] mb-4">frequently asked</p>
                
                <h2 className="text-3xl lg:text-5xl font-bold  text-[#0b1220]">
                    Quick{" "}
                    <span className="italic font-serif font-semibold text-orange-500">
                        answers
                    </span>{" "}
                    to <br />
                    common questions.
                </h2>

                <p className="mt-6 max-w-4xl text-md leading-relaxed text-gray-600">
                    Couldn't find what you're looking for? Drop us a message above.
                </p>
            </div>
            {/* questions */}
            <div className="w-[90vw] md:w-[70vw] min-h-[60vh] mx-auto flex justify-center items-center flex-col px-4 mb-20">

                {/* Questions List */}
                <div className="w-full lg:w-[50vw] mt-2 flex justif-center flex-col gap-4 md:gap-6">

                    {questionData().map((ques, idx) => (
                        <div
                            key={idx}
                            onClick={() => toggleQuestion(idx)}
                            className="w-full p-4  rounded-2xl text-base md:text-lg font-semibold border border-gray-300 cursor-pointer"
                        >
                            {ques.question}

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openQuestion === idx ? "max-h-[300px] mt-3" : "max-h-0"}`}>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base pr-3">
                                    {ques.answer}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
                    {/*  */}
            </div>
        </>
    )
}