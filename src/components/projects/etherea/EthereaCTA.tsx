"use client";

export default function EthereaCTA() {
  return (
    <section
      className="w-full px-[24px] py-[160px] text-center border-t border-[rgba(125,40,64,0.1)] flex flex-col items-center"
      style={{ background: "linear-gradient(to bottom, #0a0608, #060405)" }}
    >
      <h2 className="font-cormorant text-[clamp(56px,7vw,96px)] text-[#f2ece6] italic leading-[1.1]">
        Own the moment.
      </h2>
      <div className="font-inter text-[12px] tracking-[0.3em] text-[rgba(242,236,230,0.3)] mt-[16px]">
        Limited edition. By Webtale Studio.
      </div>
      <button
        className="mt-[48px] border border-[rgba(125,40,64,0.5)] px-[72px] py-[20px] bg-transparent text-[#f2ece6] font-inter text-[12px] tracking-[0.3em] rounded-none hover:bg-[rgba(125,40,64,0.1)] hover:border-[rgba(192,57,43,0.7)] hover:shadow-[0_0_40px_rgba(125,40,64,0.2)] transition-all duration-300 uppercase"
        data-cursor="hover"
      >
        Enter the Dark
      </button>
    </section>
  );
}
