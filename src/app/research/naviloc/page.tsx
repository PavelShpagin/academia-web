import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NaviLoc: Trajectory-Level Visual Localization for GNSS-Denied UAV Navigation — Academia Tech",
  description:
    "NaviLoc matches drone camera images to satellite maps using trajectory-level optimization, achieving 19.5m accuracy without GPS on a Raspberry Pi 5.",
};

export default function NaviLocPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Academia" width={28} height={28} className="invert" />
            <span className="text-[17px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
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
        </div>
      </nav>

      {/* ── Article Header ── */}
      <header className="pt-[72px]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[13px] font-medium tracking-[0.08em] uppercase text-neutral-400">Research</span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span className="text-[13px] text-neutral-400">January 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.1] text-black mb-6">
            NaviLoc: Trajectory-Level Visual Localization for GNSS-Denied UAV Navigation
          </h1>

          <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-light mb-10">
            Matching drone cameras to satellite maps &mdash; across the entire flight path, not frame by frame
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-10 border-b border-neutral-200">
            <p className="text-[15px] text-neutral-600">Pavel Shpagin, Taras Panchenko</p>
            <span className="text-[13px] text-neutral-400">Drones (MDPI), Vol. 10, No. 2</span>
            <a
              href="https://www.mdpi.com/2504-446X/10/2/97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-black hover:text-neutral-600 transition-colors duration-200"
            >
              Full paper on MDPI&nbsp;&rarr;
            </a>
          </div>
        </div>
      </header>

      {/* ── Article Body ── */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="space-y-8 text-[17px] leading-[1.8] text-neutral-700">

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            The problem
          </h2>

          <p>
            Drones rely on GPS to know where they are. When GPS signals get jammed or spoofed &mdash; which is now routine in conflict zones &mdash; drones lose their position fix. They can&rsquo;t navigate, can&rsquo;t return home, can&rsquo;t complete their mission.
          </p>

          <p>
            One alternative: use the drone&rsquo;s camera to match what it sees on the ground against satellite imagery and figure out its location visually. The problem is that at low altitudes (50&ndash;150 meters), the drone&rsquo;s view looks very different from satellite photos. Fields, roads, and buildings repeat across the landscape. A single camera frame can easily match the wrong satellite tile &mdash; the system thinks the drone is in one place when it&rsquo;s actually somewhere else.
          </p>

          <p>
            Existing methods try to match each frame independently. They fail because of this perceptual aliasing &mdash; too many locations look alike from above.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            What NaviLoc does differently
          </h2>

          <p>
            NaviLoc doesn&rsquo;t trust individual frame matches. Instead, it uses the drone&rsquo;s entire flight trajectory to determine position.
          </p>

          <p>
            The system combines two sources of information. First: visual place recognition (VPR) &mdash; matching camera frames to geo-referenced satellite tiles using deep learning descriptors. These matches are treated as noisy measurements, not ground truth. Second: visual-inertial odometry (VIO) &mdash; tracking relative motion between frames using the camera and an IMU (accelerometer + gyroscope). VIO is accurate for short distances but drifts over time.
          </p>

          <p>
            Neither source is reliable alone. VPR gives approximate global position but frequently matches wrong tiles. VIO gives precise relative motion but accumulates drift. NaviLoc fuses them across the full trajectory so their errors cancel out.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            Three stages
          </h2>

          <p>
            <strong className="text-black">Stage 1 &mdash; Global Align.</strong>{" "}
            The VIO trajectory exists in a local coordinate frame &mdash; the drone knows how it moved, but not where in the world it started or which direction it was facing. Stage 1 finds the rotation, translation, and scale that best align this local trajectory to the satellite map. It does this by scanning candidate rotations, computing a robust median translation for each, and picking the alignment where the most camera frames match nearby satellite tiles. The median makes this robust: even if half the frame matches are wrong, the correct ones still dominate.
          </p>

          <p>
            <strong className="text-black">Stage 2 &mdash; Refinement.</strong>{" "}
            The global alignment from Stage 1 is coarse. Stage 2 slides a window along the trajectory and applies local geometric corrections using weighted Procrustes analysis. Each window recomputes which satellite tiles best match the camera frames at the current estimated positions, then adjusts the local trajectory segment. A rotation bound prevents overcorrection from noisy matches. Multiple passes converge in 2&ndash;3 iterations.
          </p>

          <p>
            <strong className="text-black">Stage 3 &mdash; Smoothing.</strong>{" "}
            The final stage formulates a convex optimization problem that fuses VIO motion constraints with the refined position anchors from Stage 2. It detects outlier anchors using z-scores on their visual similarity &mdash; if a match looks statistically worse than the others, it gets clamped to the VIO prior instead. The result is a closed-form linear solve that produces the final trajectory estimate.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            Satellite map preparation
          </h2>

          <p>
            Before flight, satellite imagery of the operating area is downloaded and divided into a grid of tiles (40m spacing in our benchmark). Each tile is processed through a Vision Transformer (DeiT-Tiny-Distilled) to extract a 192-dimensional descriptor &mdash; a compact numerical fingerprint of its visual content. These are stored in a reference database. On our benchmark, 462 tiles cover 1.6 km&sup2; at 0.3 m/pixel resolution.
          </p>

          <p>
            During flight, the same model processes each camera frame to produce its descriptor. Matching is then a nearest-neighbor search in descriptor space &mdash; fast enough to run in real time on embedded hardware.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            Results
          </h2>

          <p>
            We evaluated NaviLoc on a real-world benchmark: 58 frames from a 2.3 km flight over rural terrain in Ukraine at 50&ndash;150m altitude. The terrain is challenging &mdash; repetitive agricultural fields and village patterns with few distinctive landmarks.
          </p>

          <ul className="list-none space-y-4 pl-0">
            {[
              ["19.5m mean localization error", "Over a 2.3 km trajectory. 16x more accurate than the previous best method (AnyLoc-VLAD, 312m)."],
              ["32x better than raw VIO drift", "VIO alone drifted to 627m error. NaviLoc corrects this to under 20m."],
              ["9 FPS on Raspberry Pi 5", "End-to-end inference on a $80 single-board computer. No GPU, no cloud, no internet required."],
              ["Training-free", "Uses off-the-shelf pretrained descriptors. No domain-specific fine-tuning needed for new areas."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <span>
                  <strong className="text-black">{title}</strong>
                  <span className="text-neutral-500"> &mdash; {desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <p>
            To put this in context: 19.5 meters of accuracy over a multi-kilometer flight, at low altitude, over visually repetitive rural terrain, with no GPS, running on a credit-card-sized computer. The previous state-of-the-art scored 312 meters on the same benchmark.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black pt-8">
            Why it matters
          </h2>

          <p>
            The core contribution is the trajectory-level approach. Existing methods match frames independently and fail when individual matches are ambiguous. NaviLoc shows that by treating visual matches as noisy measurements and fusing them with motion data across the full flight path, you can get reliable positioning even when most individual matches would be wrong.
          </p>

          <p>
            The algorithm is lightweight and training-free &mdash; it works with any pretrained image descriptor, on any terrain, without collecting domain-specific training data. This makes it practical to deploy in new areas without preparation beyond downloading satellite imagery.
          </p>

          <p>
            NaviLoc is the research foundation behind{" "}
            <Link href="/navix" className="text-black font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200">
              NaviX
            </Link>
            , our GPS-free navigation product currently in closed testing. NaviX takes these algorithms further &mdash; optimizing for production hardware, expanding the environmental envelope, and integrating with real autopilot systems.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            NaviLoc powers{" "}
            <Link href="/navix" className="text-black font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200">
              NaviX
            </Link>
            , our GPS-free navigation product currently in closed testing.
          </p>
          <Link href="/navix" className="inline-flex items-center h-12 px-7 text-[15px] font-medium bg-black text-white hover:bg-neutral-800 transition-colors duration-200">
            Learn about NaviX&nbsp;&rarr;
          </Link>
        </div>
      </article>

      {/* ── Footer ── */}
      <footer className="bg-white text-black border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Academia" width={24} height={24} className="invert" />
              <span className="text-[15px] font-semibold tracking-[0.04em] uppercase" style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}>
                Academia
              </span>
            </div>
            <div className="flex flex-wrap gap-8 text-[14px] text-neutral-400">
              <a href="mailto:business@theacademia.tech" className="hover:text-black transition-colors duration-200">business@theacademia.tech</a>
              <a href="mailto:sales@theacademia.tech" className="hover:text-black transition-colors duration-200">sales@theacademia.tech</a>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-[13px] text-neutral-400">&copy; 2026 Academia Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
