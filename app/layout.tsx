import type { Metadata } from "next";
import { Archivo_Black, EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import InstallButton from "@/components/InstallButton";
import { ThemeProvider } from "@/contexts/ThemeContext";

import SWRegister from "@/components/SWRegister";

// ✅ Updated SEO metadata (ONLY improvement, nothing else changed)
export const metadata: Metadata = {
  title: "Manish Kashyap | Full Stack Developer Portfolio",
  description:
    "Manish Kashyap is a Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and experience.",
  keywords: [
    "Manish Kashyap",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Manish Kashyap" }],
  creator: "Manish Kashyap",

  manifest: "/manifest.json",

  icons: {
    icon: "/icons/my-icon.ico",
    shortcut: "/icons/my-icon.ico",
    apple: "/icons/my-icon.ico",
  },

  // ✅ Added Open Graph (for Google + social media preview)
  openGraph: {
    title: "Manish Kashyap Portfolio",
    description: "Full Stack Developer Portfolio",
    url: "https://portfolio-orcin-psi-25.vercel.app",
    siteName: "Manish Portfolio",
    images: [
      {
        url: "/icons/my-icon.ico",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Allow indexing
  robots: {
    index: true,
    follow: true,
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
         

        {/* ✅ ADD THIS HERE */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Manish Kashyap",
          url: "https://portfolio-orcin-psi-25.vercel.app",
          sameAs: [
            "https://github.com/Kashyap-Manish-Kumar",
            "https://www.linkedin.com/in/manish-kashyap-22154732b/"
          ],
          jobTitle: "Full Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelancer"
          }
        }),
      }}
    />



          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}