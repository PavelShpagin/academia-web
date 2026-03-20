import { Plus_Jakarta_Sans, Overpass_Mono } from "next/font/google";

const heading = Plus_Jakarta_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Overpass_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
