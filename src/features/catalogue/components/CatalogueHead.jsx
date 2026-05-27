

export const CatalogueHead = () => {
    return (
        <>
            <div className="w-full h-auto p-2 flex justify-center items-center flex-col pb-6 ">
                <div className="w-full flex flex-col items-center text-center py-4 mt-[5%]">
                    {/* Small Top Text */}
                    <p className="text-xs font-semibold tracking-[0.1em] text-black font-sans mb-4">
                       Browse Catalogue 
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-6xl font-bold leading-tight text-[#0b1220]">
                        Find books for every{" "}
                        <span className="italic font-serif font-semibold text-orange-500">
                            subject
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-4xl text-md leading-relaxed text-gray-600">
                       Pick a subject below to explore series, workbooks and readers. 2,847 titles
                        <br />
                        across CBSE, ICSE and state boards.
                    </p>
                </div>
            </div>

        </>
    )
}