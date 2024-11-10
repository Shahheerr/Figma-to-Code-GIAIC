export default function CustomizationSection() {
    return (
        <>
        <section className="grid grid-cols-2 w-[1921px] h-[812.09px] gap-[98px] items-center top-[3268px] left-[1px] px-[220px] py-[140px]">
            
            {/* Image/Background Section */}
            <section className="w-full h-full flex items-center justify-center">
                <div className="bg-[#C4DEFD] w-full h-full"></div>
            </section>

            {/* Text Section */}
            <section className="heading w-[669px] h-[411px] flex flex-col justify-center gap-[60px]">
                <div className="w-[669px] h-[288px] gap-6 text-block space-y-6">
                    <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">Customise it to your needs</h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[-2%] text-[#212529]">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                </div>
                <button className="bg-[#4f9cf9] w-[201px] h-[63px] rounded-md py-5 px-10 font-medium text-lg leading-[23px] tracking-[-2%] text-white">
                    Get Started →
                </button>
            </section>
        </section>
        </>
    );
}
