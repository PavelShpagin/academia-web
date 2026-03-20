import { Space_Grotesk, Space_Mono } from "next/font/google";

const heading = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap", weight: ["400", "700"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
