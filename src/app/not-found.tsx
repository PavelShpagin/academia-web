import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
            <span className="text-[17px] font-semibold tracking-[0.04em] uppercase text-black" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
              Academia
            </span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center pt-[72px]">
        <div className="text-center px-6">
          <div className="text-[clamp(6rem,20vw,12rem)] font-bold tracking-[-0.05em] leading-none text-black" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
            404
          </div>
          <p className="mt-4 text-lg text-neutral-400 max-w-md mx-auto">
            This page doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center h-11 px-7 mt-8 text-[14px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
