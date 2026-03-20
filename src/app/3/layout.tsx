import { DM_Sans, Fira_Code } from "next/font/google";

const heading = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Fira_Code({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${heading.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</div>;
}
