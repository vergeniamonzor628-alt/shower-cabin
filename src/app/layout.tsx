import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Dwgglass — Онлайн-чертежи стекла для душевых",
  description: "Закажите инженерный чертеж душевой кабины по вашим размерам. Отправите файл на завод — стекло встанет идеально. Без переплат.",
  openGraph: {
    title: "Dwgglass — Онлайн-чертежи стекла для душевых",
    description: "Проектируем стеклянные душевые по вашим размерам. Точные вырезы, зазоры под крепежи, готовые файлы PDF и DWG.",
    type: "website",
    locale: "ru_RU",
    siteName: "Dwgglass",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwgglass — Онлайн-чертежи стекла для душевых",
    description: "Проектируем стеклянные душевые по вашим размерам. Точные вырезы, зазоры под крепежи, PDF и DWG.",
  },
  keywords: ["чертеж душевой", "душевая кабина на заказ", "стеклянная перегородка", "чертеж стекла", "душевая напрямую с завода", "Dwgglass"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30 tracking-tight">
        {children}
      </body>
    </html>
  );
}
