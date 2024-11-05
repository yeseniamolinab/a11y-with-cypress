import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitRegular = Outfit({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-outfit-regular",
});

const outfitBold = Outfit({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
  preload: true,
  variable: "--font-outfit-bold",
});

export const metadata: Metadata = {
  title: "Accesibility with axe-core and Cypress",
  description: "Yesi Molina's blog post on accessibility testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${outfitRegular.variable} ${outfitBold.variable} antialiased flex h-full bg-blue-200`}
      >
        {children}
      </body>
    </html>
  );
}
