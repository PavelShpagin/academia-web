import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NaviLoc: GPS-Free Navigation for Drones — Academia Tech",
  description:
    "How we taught drones to know where they are without satellites. NaviLoc combines visual place recognition with inertial sensing for GPS-free UAV navigation.",
};

export default function NaviLocPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Academia"
              width={28}
              height={28}
              className="invert"
            />
            <span
              className="text-[17px] font-semibold tracking-[0.04em] uppercase"
              style={{
                fontFamily: "var(--font-unbounded), system-ui, sans-serif",
              }}
            >
              Academia
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/#platforms"
              className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/#impact"
              className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200"
            >
              Impact
            </Link>
            <Link
              href="/#research"
              className="text-[15px] text-neutral-500 hover:text-black transition-colors duration-200"
            >
              Research
            </Link>
          </div>
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center h-9 px-4 text-[13px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </nav>

      {/* ── Article Header ── */}
      <header className="pt-[72px]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-400">
              Research
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span className="text-[13px] text-neutral-400">March 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.1] text-black mb-6">
            NaviLoc: GPS-Free Navigation for Drones Using Visual Intelligence
          </h1>

          <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-light mb-10">
            How we taught drones to know where they are&nbsp;&mdash; without
            satellites
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-10 border-b border-neutral-200">
            <p className="text-[15px] text-neutral-600">Pavel Shpagin, Taras Panchenko</p>
            <a
              href="https://www.mdpi.com/2504-446X/10/2/97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-black hover:text-neutral-600 transition-colors duration-200"
            >
              Read the full paper on MDPI&nbsp;&rarr;
            </a>
          </div>
        </div>
      </header>

      {/* ── Article Body ── */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="space-y-8 text-[17px] leading-[1.8] text-neutral-700">
          {/* The Problem */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            The GPS problem nobody talks about
          </h2>

          <p>
            GPS is one of those technologies that works so well, we forget it
            exists. Until it doesn&rsquo;t. Modern drones rely almost entirely
            on satellite signals to know where they are, and that dependency has
            become a serious vulnerability.
          </p>

          <p>
            In conflict zones across Ukraine and beyond, GPS jamming and
            spoofing are now routine. A $50 jammer can knock a $50,000 drone out
            of the sky. The moment a drone loses its position fix, it
            can&rsquo;t navigate, can&rsquo;t return home, and can&rsquo;t
            complete its mission. For operators in active combat, this
            isn&rsquo;t an inconvenience&nbsp;&mdash; it&rsquo;s a matter of
            life and death.
          </p>

          <p>
            The question we asked: can a drone figure out where it is just by
            looking at the ground?
          </p>

          {/* The Insight */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            The ground has a fingerprint
          </h2>

          <p>
            Here&rsquo;s the core insight behind NaviLoc. The view from above is
            distinctive. Roads, buildings, fields, rivers&nbsp;&mdash; they form
            patterns that are unique to each location. And we already have
            detailed imagery of the Earth&rsquo;s surface from satellites.
          </p>

          <p>
            So the idea is simple in principle: compare what the drone&rsquo;s
            camera sees with a map of satellite images, and find the match.
            It&rsquo;s the same thing a human pilot does instinctively when
            looking out the window and comparing the terrain to a
            chart&nbsp;&mdash; except we need an algorithm to do it
            automatically, hundreds of times per second, under any conditions.
          </p>

          {/* How It Works */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            How NaviLoc works
          </h2>

          <p>
            The system has two phases: preparation and flight.
          </p>

          <p>
            <strong className="text-black">Before the flight</strong>, we
            download satellite imagery of the operating area and split it into a
            grid of tiles. A deep learning model processes each tile, extracting
            a compact numerical &ldquo;fingerprint&rdquo;&nbsp;&mdash; a summary
            of its visual features. These fingerprints are stored in a reference
            database. Think of it as building a visual dictionary of the
            terrain.
          </p>

          <p>
            <strong className="text-black">During flight</strong>, the
            drone&rsquo;s downward-facing camera captures frames continuously.
            Each frame goes through the same deep learning model, producing its
            own fingerprint. The system then searches the reference database for
            the closest match. When it finds one, it knows which tile the drone
            is above&nbsp;&mdash; and therefore its approximate location.
          </p>

          <p>
            But a single visual match isn&rsquo;t enough. Satellite imagery and
            live camera feeds look different&nbsp;&mdash; lighting changes,
            seasonal variation, altitude differences, and camera angle all
            introduce noise. Any individual match could be wrong. This is where
            NaviLoc gets clever.
          </p>

          {/* Why Trajectory Matters */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            Why the whole trajectory matters
          </h2>

          <p>
            The key innovation in NaviLoc is that it doesn&rsquo;t trust any
            single frame. Instead, it fuses visual matches with motion data from
            the drone&rsquo;s onboard sensors&nbsp;&mdash; accelerometers and
            gyroscopes that track how the drone moves between frames.
          </p>

          <p>
            Imagine you&rsquo;re lost in a city. A single glance at a building
            might not tell you where you are. But if you walk three blocks
            north, turn right, walk two more, and see a park&nbsp;&mdash;
            suddenly you can narrow it down. NaviLoc works the same way. It
            combines the sequence of visual observations with known motion to
            build a probabilistic picture of where the drone is and has been.
          </p>

          <p>
            This is done through statistical filtering&nbsp;&mdash;
            specifically, a technique that continuously weighs the confidence of
            visual matches against motion estimates. When a visual match is
            strong (the terrain is distinctive), the system trusts it more. When
            the terrain is ambiguous (say, a uniform field), it leans on the
            motion data. Over time, the errors cancel out and the position
            estimate converges.
          </p>

          <p>
            The result: even when individual frames get matched to the wrong
            tile, the overall trajectory stays on track.
          </p>

          {/* Results */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            What we achieved
          </h2>

          <p>
            We tested NaviLoc across multiple flight paths covering over a
            kilometer each, at altitudes between 50 and 100 meters. The results:
          </p>

          <ul className="list-none space-y-4 pl-0">
            {[
              [
                "19.5m mean localization error",
                "Over full trajectories exceeding 1 km — a 16x improvement over the previous state-of-the-art.",
              ],
              [
                "32x better than raw VIO drift",
                "Visual anchors dramatically correct the accumulated drift of inertial sensors alone.",
              ],
              [
                "9 FPS on a Raspberry Pi 5",
                "The full pipeline runs on edge hardware in real time, no cloud connection needed.",
              ],
              [
                "Day and night operation",
                "The visual features are robust enough to work across lighting conditions.",
              ],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <span>
                  <strong
                    className="text-black"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <span className="text-neutral-500">
                    {" "}
                    &mdash; {desc}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p>
            To put this in context: under 20 meters of accuracy at 50&ndash;100
            meters altitude, with no GPS, no internet, running on a
            credit-card-sized computer. Sixteen times more accurate than the previous
            best method. The drone always knows where it is, even when every
            satellite signal is jammed.
          </p>

          {/* What It Means */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            From research to product
          </h2>

          <p>
            NaviLoc is a published research contribution. It validates that
            vision-based localization can work reliably in real conditions and on
            constrained hardware. But research papers don&rsquo;t fly
            drones&nbsp;&mdash; products do.
          </p>

          <p>
            The techniques demonstrated in NaviLoc are the foundation of{" "}
            <Link
              href="/navix"
              className="text-black font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200"
            >
              NaviX
            </Link>
            , our GPS-free navigation system currently in closed testing. NaviX
            takes the core algorithms further&nbsp;&mdash; optimizing them for
            production hardware, expanding the environmental envelope, and
            integrating with real autopilot systems.
          </p>

          <p>
            The goal is straightforward: no drone should ever be grounded
            because someone flipped on a jammer.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            NaviLoc powers{" "}
            <Link
              href="/navix"
              className="text-black font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200"
            >
              NaviX
            </Link>
            , our GPS-free navigation product currently in closed testing.
          </p>
          <Link
            href="/navix"
            className="inline-flex items-center h-12 px-7 text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200"
          >
            Learn about NaviX&nbsp;&rarr;
          </Link>
        </div>
      </article>

      {/* ── Footer ── */}
      <footer className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Academia"
                width={24}
                height={24}
                className="invert"
              />
              <span
                className="text-[15px] font-semibold tracking-[0.04em] uppercase"
                style={{
                  fontFamily: "var(--font-unbounded), system-ui, sans-serif",
                }}
              >
                Academia
              </span>
            </div>
            <div className="flex flex-wrap gap-8 text-[14px] text-neutral-400">
              {["Privacy", "Terms", "Security", "Compliance", "Careers"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover:text-black transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-[13px] text-neutral-400">
              &copy; 2026 Academia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
