export default function ExtensionUsage(){
    return(
        <>
        <section className="text-white grid grid-cols-2 w-[1920px] h-[759px] gap-[98px] items-center bg-[#043873] top-[2509px] left-[1px] px-[220px] py-[140px]">
            {/* Text Section */}
            <section className="heading w-[672px] h-full flex flex-col justify-center gap-[30px]">
                <div className="text-block space-y-6">
                    <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]">Use as Extension</h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[-2%]">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                </div>
                <br />
                <button className="bg-[#4f9cf9] w-[171px] h-[63px] rounded-md py-5 px-10 font-medium text-lg leading-[23px] tracking-[-2%] text-white gap-[10px]">
                Let’s Go →
                </button>
            </section>

            {/* Image/Background Section */}
            <section className="w-full h-full flex items-center justify-center">
                <div className="bg-[#C4DEFD] w-full h-full"></div>
            </section>
        </section>
        </>
    )
}