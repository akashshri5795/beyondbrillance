import { useState } from "react";
import { Bot, X,ChevronRight,} from "lucide-react";

export default function LearningAssistant() {

  const [openAI, setOpenAI] =  useState(false);
  const [selectedCategory, setSelectedCategory] = useState("About");
  const [selectedQuestion,setSelectedQuestion] = useState(null);


  const aiData = {
    About: [
      {
        question:
          "Tell me about your publication house",

        answer:
          "Beyond Brilliance is a modern publication platform focused on educational innovation, smart learning, and interactive student experiences.",
      },

      {
        question:
          "What makes your platform unique?",

        answer:
          "We combine modern educational content, futuristic UI design, and student-focused learning systems.",
      },

      {
        question:
          "Why should students choose us?",

        answer:
          "We provide engaging learning materials, modern UI experiences, and educational guidance for students.",
      },
    ],

    Books: [
      {
        question:
          "What are your best books?",

        answer:
          "Our best books include Coding Fundamentals, Mathematics Mastery, AI Basics, and Interactive Science Learning books.",
      },

      {
        question:
          "Do you provide school books?",

        answer:
          "Yes, we provide educational books for multiple school classes and subjects.",
      },

      {
        question:
          "Books for beginners?",

        answer:
          "We recommend JavaScript Basics, Beginner Mathematics, and Science Explorer books for beginners.",
      },
    ],

    Courses: [
      {
        question:
          "Which courses do you offer?",

        answer:
          "We offer Web Development, React JS, JavaScript, AI Basics, and Frontend Development courses.",
      },

      {
        question:
          "Are your courses beginner friendly?",

        answer:
          "Yes, all courses are designed specially for beginners and students.",
      },

      {
        question:
          "Do you provide coding classes?",

        answer:
          "Yes, we provide coding learning resources and interactive educational guidance.",
      },
    ],

    Support: [
      {
        question:
          "How can I contact support?",

        answer:
          "You can contact our support team through email, contact forms, or our official social platforms.",
      },

      {
        question:
          "Do you provide student guidance?",

        answer:
          "Yes, we provide learning assistance and educational guidance for students.",
      },
    ],
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() =>
          setOpenAI(true)
        }
        className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50"
      >

        <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex justify-center items-center shadow-[0_0_40px_rgba(0,255,255,0.5)] animate-pulse">

          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-300/30 scale-125 animate-ping" />

          <Bot className="text-white w-8 h-8 lg:w-10 lg:h-10" />
        </div>
      </button>

      {/*  MAIN POPUP  */}
      {openAI && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center p-2 lg:p-4">

          {/* Main Container */}
          <div className="w-full lg:w-[80%] h-[95vh] lg:h-[90vh] bg-[#07111f] border border-cyan-400/20 rounded-[25px] lg:rounded-[35px] overflow-hidden shadow-[0_0_60px_rgba(0,255,255,0.2)] flex flex-col lg:flex-row relative">

            {/* Glow */}
            <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

            {/*  SIDEBAR  */}
            <div className="w-full lg:w-[30%] lg:border-r border-b lg:border-b-0 border-white/10 bg-white/5 backdrop-blur-xl flex flex-col">

              {/* Header */}
              <div className="p-4 lg:p-6 border-b border-white/10 flex justify-between items-center">

                <div className="flex items-center gap-3 lg:gap-4">

                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex justify-center items-center">

                    <Bot className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                  </div>

                  <div>
                    <h1 className="text-white text-lg lg:text-xl font-black">
                      AI ASSISTANT
                    </h1>

                    <p className="text-cyan-300 text-xs lg:text-sm">
                      Publication Guide
                    </p>
                  </div>
                </div>

                {/* Close */}
                <button
                  onClick={() =>
                    setOpenAI(false)
                  }
                  className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-red-500/20 flex justify-center items-center text-red-400 hover:scale-105 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Categories */}
              <div className="flex lg:flex-col gap-3 p-4 lg:p-5 overflow-x-auto lg:overflow-y-auto">

                {Object.keys(aiData).map(
                  (category, index) => (

                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(
                          category
                        );

                        setSelectedQuestion(
                          null
                        );
                      }}

                      className={`min-w-[180px] lg:min-w-full p-4 rounded-2xl text-left transition-all border ${selectedCategory ===
                          category
                          ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                        }`}
                    >

                      <div className="flex justify-between items-center">

                        <span className="font-semibold">
                          {category}
                        </span>

                        <ChevronRight
                          size={18}
                        />
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>

            {/*  RIGHT CONTENT  */}
            <div className="w-full lg:w-[70%] p-4 lg:p-8 overflow-y-auto">

              {/* Title */}
              <div className="mb-6 lg:mb-8">

                <h2 className="text-2xl lg:text-4xl font-black text-white">
                  {selectedCategory}
                </h2>

                <p className="text-cyan-300 mt-2 text-sm lg:text-base">
                  Suggested AI Questions
                </p>
              </div>

              {/*  QUESTIONS  */}
              {!selectedQuestion && (

                <div className="grid gap-4 lg:gap-5">

                  {aiData[
                    selectedCategory
                  ].map(
                    (item, index) => (

                      <button
                        key={index}
                        onClick={() =>
                          setSelectedQuestion(
                            item
                          )
                        }

                        className="group p-4 lg:p-6 rounded-3xl bg-white/5 border border-cyan-400/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all text-left"
                      >

                        <div className="flex justify-between items-center gap-4">

                          <div>
                            <h3 className="text-cyan-300 text-base lg:text-lg font-bold">
                              ✨ {item.question}
                            </h3>

                            <p className="text-gray-400 mt-2 text-xs lg:text-sm">
                              Click to view AI
                              answer
                            </p>
                          </div>

                          <ChevronRight className="text-cyan-300 group-hover:translate-x-1 transition-all min-w-fit" />
                        </div>

                      </button>
                    )
                  )}
                </div>
              )}

              {/*  ANSWER  */}
              {selectedQuestion && (

                <div className="animate-fadeIn">

                  {/* Back */}
                  <button
                    onClick={() =>
                      setSelectedQuestion(
                        null
                      )
                    }

                    className="mb-5 lg:mb-6 px-4 lg:px-5 py-3 rounded-2xl bg-white/5 border border-cyan-400/20 text-cyan-300 hover:bg-cyan-500/10 transition-all text-sm lg:text-base"
                  >
                    ← Back to Questions
                  </button>

                  {/* Answer Card */}
                  <div className="relative">

                    <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-[40px]" />

                    <div className="relative bg-white/5 border border-cyan-400/20 rounded-[30px] lg:rounded-[40px] p-5 lg:p-8">

                      {/* Top */}
                      <div className="flex items-start lg:items-center gap-4 mb-6">

                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex justify-center items-center min-w-fit">

                          <Bot className="text-white w-6 h-6 lg:w-7 lg:h-7" />
                        </div>

                        <div>
                          <h2 className="text-cyan-300 text-lg lg:text-2xl font-bold">
                            {
                              selectedQuestion.question
                            }
                          </h2>

                          <p className="text-gray-400 text-xs lg:text-sm mt-1">
                            AI Generated
                            Answer
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <p className="text-gray-200 leading-8 lg:leading-9 text-sm lg:text-lg">
                        {
                          selectedQuestion.answer
                        }
                      </p>

                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}