import { Albert_Sans, Anonymous_Pro } from "next/font/google";

const heading = Albert_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Anonymous_Pro({ variable: "--font-mono", subsets: ["latin"], display: "swap", weight: ["400", "700"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
