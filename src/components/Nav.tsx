import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
          <span className="text-[17px] font-semibold tracking-[0.04em] uppercase text-black" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
            Academia
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="/#platforms" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Products</Link>
          <Link href="/#impact" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Impact</Link>
          <Link href="/#research" className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200">Research</Link>
        </div>
        <Link href="/#contact" className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
          Get in touch
        </Link>
        <MobileMenu />
      </div>
    </nav>
  );
}
