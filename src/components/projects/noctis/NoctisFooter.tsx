import Link from "next/link";

export default function NoctisFooter() {
  return (
    <footer
      className="w-full px-[24px] py-[32px] md:px-[80px] md:py-[48px] flex flex-col md:flex-row justify-between items-center gap-[16px] md:gap-0 bg-[#080501]"
      style={{ borderTop: "1px solid rgba(200, 129, 58, 0.06)" }}
    >
      {/* LEFT */}
      <div
        className="uppercase font-sans text-[10px] text-center md:text-left"
        style={{
          letterSpacing: "0.4em",
          color: "rgba(245, 237, 224, 0.2)",
        }}
      >
        NOCTIS CAFÉ · A WEBTALE STUDIO PROJECT · 2025
      </div>

      {/* RIGHT */}
      <Link
        href="/"
        className="uppercase font-sans text-[11px] transition-colors duration-200"
        style={{
          color: "rgba(245, 237, 224, 0.3)",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.color = "rgba(245, 237, 224, 0.8)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.color = "rgba(245, 237, 224, 0.3)";
        }}
      >
        ← Back to Studio
      </Link>
    </footer>
  );
}
