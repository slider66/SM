import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { BackToHomeButton } from "@/components/back-to-home-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suministros Merle | Ferralla Industrial para Obras en Madrid",
  description: "Acelera tu obra con Suministros Merle. Ofrecemos ferralla industrial, armaduras a medida y un proceso industrial que garantiza calidad y entregas rápidas en Madrid.",
  keywords: [
    "Suministros Merle",
    "ferralla Madrid",
    "armaduras de acero",
    "corte y doblado",
    "estructuras hormigón",
    "logística obra",
    "servicios metalúrgicos",
    "Paracuellos de Jarama"
  ],
  authors: [{ name: "A. Merle 2025" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "MERLE.es - Ferralla en Madrid",
    description: "Profesionales en ferralla industrial y soluciones metálicas personalizadas para proyectos de construcción en Madrid y alrededores.",
    url: "https://www.merle.es",
    siteName: "Suministros Merle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERLE.es - Ferralla en Madrid",
    description: "Ferralla industrial, armaduras personalizadas y logística especializada ofrecidas por SUMINISTROS MERLE, S.L.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SiteHeader />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
        <BackToHomeButton />
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
