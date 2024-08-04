import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyper App - Bem Vindo!",
  description: "Sistema de Gerenciamento para Assistencias Técnicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-[#050505] dark">
      <body className={`${inter.className} bg-image bg-center bg-no-repeat`}>
        {children}
      </body>
    </html>
  );
}
