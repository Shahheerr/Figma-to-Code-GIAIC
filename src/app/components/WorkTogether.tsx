import Image from "next/image";
import WTImage from "@/app/assets/Work Together Image.png"

export default function WorkTogether(){
    return(
        <>
        <section className="grid grid-cols-2 w-[1480px] h-[661px] gap-[100px] items-center">
            {/* Image Section */}
            <Image src={WTImage} alt={"Work Together Image"} className="w-[710px] h-[661]" />

            {/* Text Section */}
            <section className="heading w-[672px] h-294 flex flex-col justify-center gap-[60px]">
                <div className="w-[670px] h-[171px] gap-6 text-block space-y-6">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">Work together</h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[-2%] text-[#212529]">
                    With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>
                </div>
                <button className="bg-[#4f9cf9] w-[186px] h-[63px] rounded-md py-5 px-10 font-medium text-lg leading-[23px] tracking-[-2%] text-white">
                Try it now →
                </button>
            </section>
        </section>
        </>
    )
}