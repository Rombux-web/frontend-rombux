import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import NavbarPrueba from "@/components/Navbar/Navbar";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-albert-sans',
})

export const metadata: Metadata = {
  title: "Rombux | Soluciones 360° en Marketing, Data e IA para Empresas",
  description: "Impulsamos a tu empresa en el universo digital con Servicios Integrales de Benchmarking, Branding, Marketing Digital, Growth, Data e IA, 100% personalizados.",
  icons: {
    icon: "/isotipo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${albertSans.variable} antialiased`}
      >
        <NavbarPrueba />
        <Toaster position="bottom-left" />
        {children}

      </body>
    </html>
  );
}
