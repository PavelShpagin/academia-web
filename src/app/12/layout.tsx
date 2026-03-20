import { Urbanist, Martian_Mono } from "next/font/google";

const heading = Urbanist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Martian_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
