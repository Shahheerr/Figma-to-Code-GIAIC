import Image from "next/image";
import apple from "@/app/assets/apple-logo.png";
import microsoft from "@/app/assets/microsoft.png";
import slacks from "@/app/assets/slack.png";
import google from "@/app/assets/pngwing.com.png";

export default function OurSponser() {
    return (
        <>
        <section className="w-full h-[538px] px-[220px] py-[140px] flex flex-col items-center gap-[100px]">
            <h1 className="w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-center text-[#212529]">
                Our Sponsors
            </h1>
            <ul className="w-[1482px] h-[71px] flex justify-between items-center gap-x-10">
                <li>
                    <Image src={apple} alt="Apple Logo" width={65} height={20} />
                </li>
                <li>
                    <Image src={microsoft} alt="Microsoft Logo" width={200} height={100} />
                </li>
                <li>
                    <Image src={slacks} alt="Slack Logo" width={200} height={100} />
                </li>
                <li>
                    <Image src={google} alt="Google Logo" width={200} height={100} />
                </li>
            </ul>
        </section>
        </>
    );
}
