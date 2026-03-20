import { Outfit, IBM_Plex_Mono } from "next/font/google";

const heading = Outfit({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap", weight: ["400", "500", "700"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
