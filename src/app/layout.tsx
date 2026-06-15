import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["cyrillic", "latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "DWGGLASS - СТЕКЛЯННЫЕ ДУШЕВЫЕ БЕЗ ПЕРЕПЛАТ",
  description: "ЗАКАЖИТЕ СТЕКЛЯННУЮ ДУШЕВУЮ ПО СВОИМ РАЗМЕРАМ. ТОЧНЫЙ ПРОЕКТ ЗА 24 ЧАСА. ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ.",
  openGraph: {
    title: "DWGGLASS - СТЕКЛЯННЫЕ ДУШЕВЫЕ БЕЗ ПЕРЕПЛАТ",
    description: "ЗАКАЖИТЕ СТЕКЛЯННУЮ ДУШЕВУЮ ПО СВОИМ РАЗМЕРАМ. ТОЧНЫЙ ПРОЕКТ ЗА 24 ЧАСА.",
    type: "website",
    locale: "ru_RU",
    siteName: "DWGGLASS",
  },
  keywords: ["душевые кабины", "стеклянные перегородки", "душевые на заказ", "dwgglass"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${oswald.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30 tracking-tight uppercase font-sans">
        {children}
      </body>
    </html>
  );
}
