"use client";

export default function EthereaCTA() {
  return (
    <section
      className="w-full px-[24px] py-[160px] text-center border-t border-[rgba(201,168,76,0.06)] flex flex-col items-center"
      style={{ background: "linear-gradient(to bottom, #000, #080600)" }}
    >
      <h2 className="font-cormorant text-[clamp(56px,7vw,96px)] text-white italic leading-[1.1]">
        Own the moment.
      </h2>
      <div className="font-inter text-[12px] tracking-[0.3em] text-silver/30 mt-[16px]">
        Limited edition. By Webtale Studio.
      </div>
      <button
        className="mt-[48px] border border-[rgba(201,168,76,0.4)] px-[72px] py-[20px] bg-transparent text-[#c9a84c] font-inter text-[12px] tracking-[0.3em] rounded-none hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.8)] hover:shadow-[0_0_40px_rgba(201,168,76,0.15)] transition-all duration-300 uppercase"
        data-cursor="hover"
      >
        Discover Étheréa
      </button>
    </section>
  );
}
