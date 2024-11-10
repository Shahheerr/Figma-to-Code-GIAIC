import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import Link from "next/link";

export default function Header() {
    return (
      <>
      <header className="w-full h-[92px] bg-[#043873] px-[220px] flex items-center justify-between text-white">
        <div className="logo flex items-center">
            <Image src={Logo} alt="WhiteSpace Logo" className="w-[191px] h-[34px]" />
        </div>
        <div className="navbar w-[737.5px] flex items-center justify-between gap-[60px]">
          <ul className="nav-menu flex gap-8 font-medium text-lg leading-[23px] list-none dm-sans">
            <li><Link href="/">Products</Link></li>
            <li><Link href="/">Solution</Link></li>
            <li><Link href="/">Resources</Link></li>
            <li><Link href="/">Pricing</Link></li>
          </ul>
          <button className="w-[126px] h-[60px] rounded-lg px-10 py-4 bg-[#FFE492] text-[#043873] font-medium text-lg tracking-[-2%]">Login</button>
        </div>
      </header>
      </>
    );
}
