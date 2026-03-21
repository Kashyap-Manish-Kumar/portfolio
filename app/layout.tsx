import type { Metadata } from "next";
import { Archivo_Black, EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import InstallButton from "@/components/InstallButton";
import { ThemeProvider } from "@/contexts/ThemeContext";

import SWRegister from "@/components/SWRegister";

// Add favicon to metadata
export const metadata: Metadata = {
  title: "Portfolio | Manish Kashyap",
  description: "Full Stack Developer",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/my-icon.ico",
    shortcut: "/icons/my-icon.ico",
    apple: "/icons/my-icon.ico",
  },
};

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ebgaramond",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${spaceMono.variable} ${archivoBlack.variable}`}
    >
      <body>
        <ThemeProvider>
          <SWRegister />
          <InstallButton />   {/* 👈 ADD THIS */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
