"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-10 h-10 flex items-center justify-center"
        aria-label="Menu"
      >
        <div className="w-[18px] h-[14px] relative">
          <span className={`absolute left-0 w-full h-[1.5px] bg-black transition-all duration-300 ease-in-out ${open ? "top-[6.25px] rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-[6.25px] w-full h-[1.5px] bg-black transition-all duration-300 ease-in-out ${open ? "opacity-0 scale-x-0" : "opacity-100"}`} />
          <span className={`absolute left-0 w-full h-[1.5px] bg-black transition-all duration-300 ease-in-out ${open ? "top-[6.25px] -rotate-45" : "top-[12.5px]"}`} />
        </div>
      </button>
      {open && (
        <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-neutral-200 px-6 py-6 flex flex-col gap-4">
          <a href="#platforms" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Products</a>
          <a href="#impact" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Impact</a>
          <a href="#research" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Research</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Contact</a>
        </div>
      )}
    </div>
  );
}
