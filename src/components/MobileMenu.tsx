"use client";

import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) {
      main.style.filter = open ? "blur(4px)" : "none";
      main.style.transition = "filter 0.3s ease";
    }
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-10 h-10 flex items-center justify-center"
        aria-label="Menu"
      >
        <div className="w-[18px] h-3 relative">
          <span className={`absolute left-0 right-0 h-[2px] bg-black transition-all duration-300 ease-in-out origin-center ${open ? "top-[5px] rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 right-0 top-[5px] h-[2px] bg-black transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute left-0 right-0 h-[2px] bg-black transition-all duration-300 ease-in-out origin-center ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
        </div>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 top-[72px] bg-black/20 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-neutral-200 px-6 py-6 flex flex-col gap-4 z-50">
            <a href="#platforms" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Products</a>
            <a href="#impact" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Impact</a>
            <a href="#research" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Research</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-[15px] text-neutral-600 hover:text-black transition-colors">Contact</a>
          </div>
        </>
      )}
    </div>
  );
}
