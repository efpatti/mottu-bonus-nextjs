import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { LevelProvider } from "@/providers/LevelProvider";
import "./globals.css";
import { getAssetPath } from "@/utils/assets";

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
 icons: {
  icon: getAssetPath("icon-mottu-m.svg"),
 },
};
export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="pt-BR">
   <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full overflow-x-scroll`}
   >
    <LevelProvider>
     <Navbar />
     <main>{children}</main>
    </LevelProvider>
   </body>
  </html>
 );
}
