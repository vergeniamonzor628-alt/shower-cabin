import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic-ext"],
});

const serif = Lora({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Dwgglass — Онлайн-чертежи стекла для душевых",
  description: "Закажите инженерный чертеж душевой кабины по вашим размерам. Отправите файл на завод — стекло встанет идеально. Без салонов, без наценок.",
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
  keywords: ["чертеж душевой", "душевая кабина на заказ", "стеклянная перегородка", "чертеж стекла", "душевая без салона", "Dwgglass"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
