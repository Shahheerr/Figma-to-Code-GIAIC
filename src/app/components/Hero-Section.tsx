export default function HeroSection() {
  return (
    <>
    <section className="grid grid-cols-2 w-[1920px] h-[829px] px-[220px] py-[140px] gap-[100px] bg-[#043873] text-white items-center">
      <section className="heading w-[656px] h-[361px] flex flex-col gap-[60px] justify-center">
          <div className="text-block w-[656px] h-[238px] space-y-6">
              <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-2%]">Get More Done with Whitepace</h2>
              <p className="font-normal text-lg leading-[30px] tracking-[-2%]">Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks</p>
          </div>
          <button className="bg-[#4f9cf9] btn-free-trial w-[219px] h-[63px] rounded-lg p-5 font-medium text-lg leading-[23px] tracking-[-2%]">Try Whitepace free →</button>
      </section>
      <section className="w-[824px] h-[549px] flex items-center justify-start ml-[-20%]">
        <div className="bg-[#C4DEFD] w-full h-full"></div>
      </section>
    </section>
    </>
  );
}
