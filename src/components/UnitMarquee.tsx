"use client";

import Image from "next/image";

function UnitRow({ units }: { units: string[] }) {
  return (
    <div className="flex items-center gap-5 md:gap-7 flex-shrink-0">
      {units.map((file, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 relative"
        >
          <Image
            src={`/units/${file}`}
            alt=""
            fill
            sizes="64px"
            className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default function UnitMarquee({ units }: { units: string[] }) {
  return (
    <div className="bg-black overflow-hidden">
      <div className="relative py-6 md:py-7">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex gap-5 md:gap-7 animate-marquee w-max">
          <UnitRow units={units} />
          <UnitRow units={units} />
        </div>
      </div>
    </div>
  );
}
