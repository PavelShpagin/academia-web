import { Barlow, Source_Code_Pro } from "next/font/google";

const heading = Barlow({ variable: "--font-sans", subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600", "700"] });
const mono = Source_Code_Pro({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
