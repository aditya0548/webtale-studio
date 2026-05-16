"use client";

export default function EthereaCTA() {
  return (
    <section className="w-full px-[24px] py-[160px] bg-[#000] text-center border-t border-[rgba(201,168,76,0.06)] flex flex-col items-center">
      <h2 className="font-cormorant text-[43px] md:text-[72px] text-white italic leading-[1.1]">
        Own the moment.
      </h2>
      <div className="font-inter text-[12px] tracking-[0.3em] text-silver/30 mt-[16px]">
        Limited edition. By Webtale Studio.
      </div>
      <button
        className="mt-[48px] border border-[rgba(201,168,76,0.4)] px-[56px] py-[18px] bg-transparent text-[#c9a84c] font-inter text-[12px] tracking-[0.3em] rounded-none hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.8)] transition-all duration-300 uppercase"
        data-cursor="hover"
      >
        Discover Étheréa
      </button>
    </section>
  );
}
