import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "George.dev | Full Stack Developer",
  description: "Portfolio personal de un desarrollador Full Stack especializado en crear soluciones tecnológicas innovadoras con Next.js, React, TypeScript y más.",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Portfolio", "Web Development"],
  authors: [{ name: "George Dev" }],
  openGraph: {
    title: "George.dev | Full Stack Developer",
    description: "Transformando ideas en código, creando experiencias digitales excepcionales",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
