export default function ProjectManagement() {
    return (
        <>
        <section className="grid grid-cols-2 w-[1480px] h-[547px] gap-[60px] items-center">
            {/* Text Section */}
            <section className="heading w-[672px] h-full flex flex-col justify-center gap-[30px]">
                <div className="text-block space-y-6">
                    <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">Project Management</h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[-2%] text-[#212529]">
                        Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                </div><br />
                <button className="bg-[#4f9cf9] w-[201px] h-[63px] rounded-md py-5 px-10 font-medium text-lg leading-[23px] tracking-[-2%] text-white">
                    Get Started →
                </button>
            </section>

            {/* Image/Background Section */}
            <section className="w-full h-full flex items-center justify-center">
                <div className="bg-[#C4DEFD] w-full h-full"></div>
            </section>
        </section>
        </>
    );
}
