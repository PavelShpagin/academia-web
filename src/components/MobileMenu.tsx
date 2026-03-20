"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
        aria-label="Menu"
      >
        <span className={`block w-5 h-[1.5px] bg-black transition-all duration-200 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
        <span className={`block w-5 h-[1.5px] bg-black transition-all duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-[1.5px] bg-black transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
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
