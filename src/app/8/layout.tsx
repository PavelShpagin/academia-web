import { Sora, Ubuntu_Mono } from "next/font/google";

const heading = Sora({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Ubuntu_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap", weight: ["400", "700"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
