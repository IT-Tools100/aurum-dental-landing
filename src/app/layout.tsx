import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurum Dental | Премиальная стоматология",
  description:
    "Портфолио-концепт лендинга для вымышленной частной стоматологии Aurum Dental."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
