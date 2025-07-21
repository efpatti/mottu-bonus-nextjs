import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Inter({
 subsets: ["latin"],
 variable: "--font-geist-sans",
});
const geistMono = Inter({
 subsets: ["latin"],
 variable: "--font-geist-mono",
 display: "swap",
});

export const metadata: Metadata = {
 title: "Mottu | Bonificação",
 description: "Reconhecendo quem faz a diferença!",
};
export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="pt-BR">
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Navbar />
    <main>{children}</main>
   </body>
  </html>
 );
}
