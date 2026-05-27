export const HeaderNine = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 sm:py-14 lg:py-20 px-4 sm:px-6">
      <div className="w-full max-w-7xl bg-[#f4c736] rounded-[2rem] sm:rounded-[2.5rem] px-6 sm:px-10 lg:px-14 py-8 sm:py-12 relative overflow-hidden">

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">

          {/* Left Content */}
          <div className="w-full lg:w-[58%] relative z-10">

            {/* Badge */}
            <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-[#e2b92d] text-[#1d3557] text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              Try before you buy
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-tight lg:leading-[1.05] font-bold text-[#0b1220]">
              Free sample copies
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              for school review.
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[#1f3550] max-w-2xl">
              Choose any 3 titles, and we'll ship a free sample to your school
              for evaluation. No commitment, no shipping fees within India.
            </p>

            {/* Button */}
            <button className="mt-8 sm:mt-10 px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-[#0b1220] text-white font-semibold text-sm sm:text-base flex items-center gap-2 sm:gap-3 transition-all duration-300 ease-out hover:scale-105">
              Request sample copies
              <span className="text-lg sm:text-xl">→</span>
            </button>
          </div>

          {/* Right Stats Section */}
          <div className="w-full lg:w-[32%] lg:pl-10 lg:border-l-4 border-[#0b1220] relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-5">

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1220]">
                  3 books
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-lg text-[#1f3550]">
                  Free per school, per term
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1220]">
                  48 hrs
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-lg text-[#1f3550]">
                  Average dispatch time
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1220]">
                  ₹0
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-lg text-[#1f3550]">
                  Shipping within India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#c7a22f] rounded-full">

          {/* Shine */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 lg:top-8 lg:left-8 w-5 h-8 sm:w-6 sm:h-10 lg:w-8 lg:h-12 bg-[#e7c654] rounded-full opacity-90"></div>

          {/* Leaves */}
          <div className="absolute -top-2 left-5 sm:left-7 lg:left-9 w-5 h-3 sm:w-6 sm:h-3 lg:w-8 lg:h-4 bg-[#b9d15b] rounded-full rotate-[-30deg]"></div>
          <div className="absolute -top-3 sm:-top-4 left-8 sm:left-11 lg:left-14 w-6 h-3 sm:w-8 sm:h-4 lg:w-10 lg:h-5 bg-[#b9d15b] rounded-full rotate-[20deg]"></div>
        </div>
      </div>
    </section>
  );
};