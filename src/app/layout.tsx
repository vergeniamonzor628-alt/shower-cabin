import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "dwgglass - стеклянные душевые без переплат",
  description: "закажите стеклянную душевую по своим размерам. точный проект за 24 часа. гарантия лучшей цены.",
  openGraph: {
    title: "dwgglass - стеклянные душевые без переплат",
    description: "закажите стеклянную душевую по своим размерам. точный проект за 24 часа.",
    type: "website",
    locale: "ru_RU",
    siteName: "dwgglass",
  },
  twitter: {
    card: "summary_large_image",
    title: "dwgglass - стеклянные душевые без переплат",
    description: "закажите стеклянную душевую по своим размерам. точный проект за 24 часа.",
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
    <html lang="ru" className={`${manrope.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30 tracking-tight">
        {children}
      </body>
    </html>
  );
}
