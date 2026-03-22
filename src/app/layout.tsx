import type { Metadata } from "next";
import { Inter, Anonymous_Pro, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Academia Tech",
  description: "UAV innovation on front lines",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anonymousPro.variable} ${unbounded.variable} antialiased`}
    >
      <body style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
