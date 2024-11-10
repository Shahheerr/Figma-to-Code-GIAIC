import Image from "next/image";
import logo from "@/app/assets/Logo.png";

export default function Footer() {
  return (
    <footer className="text-white w-full h-[461px] bg-[#043873] px-[220px] py-[140px]">
      <div className="max-w-[1480px] mx-auto flex flex-col gap-[60px]">
        {/* Top section with logo and columns in a single flex container */}
        <div className="flex gap-[100px]">
          {/* Logo and description */}
          <div className="w-[295px]">
            <Image src={logo} alt="Logo" width={191} height={34} />
            <p className="font-normal text-lg leading-[30px] mt-4 tracking-[-2%] text-[#F7F7EE]">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>
          
          {/* Links sections in a single flex container */}
          <div className="flex flex-grow justify-around">
            <div>
              <h2 className="font-bold text-lg mb-4">Product</h2>
              <ul className="space-y-2">
                <li className="font-normal text-base hover:text-[#FFE492]">Overview</li>
                <li className="font-normal text-base hover:text-[#FFE492]">Pricing</li>
                <li className="font-normal text-base hover:text-[#FFE492]">Customer stories</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-bold text-lg mb-4">Resources</h2>
              <ul className="space-y-2">
                <li className="font-normal text-base hover:text-[#FFE492]">Blog</li>
                <li className="font-normal text-base hover:text-[#FFE492]">Guides & tutorials</li>
                <li className="font-normal text-base hover:text-[#FFE492]">Help center</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-bold text-lg mb-4">Company</h2>
              <ul className="space-y-2">
                <li className="font-normal text-base hover:text-[#FFE492]">About us</li>
                <li className="font-normal text-base hover:text-[#FFE492]">Careers</li>
                <li className="font-normal text-base hover:text-[#FFE492]">Media kit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#2E4E73] w-full pt-4 text-center">
          <p className="font-normal text-base tracking-[-2%]">©2021 Whitepace LLC.</p>
        </div>
      </div>
    </footer>
  );
}
