import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const serif = Lora({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Dwgglass | Индивидуальные душевые кабины",
  description: "Создайте идеальную душевую кабину. Мы подготовим техническое задание и чертеж для производства по вашим размерам.",
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
