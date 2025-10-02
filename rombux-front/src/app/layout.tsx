import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import NavbarPrueba from '@/components/Navbar/Navbar';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { JOTFORM_AI_AGENT_URL } from '@/config/urls';

// Importa el CSS especial solo para UnderConstruction si lo necesitas globalmente (opcional)
// import "@/components/UnderConstruction/uc_global.css";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-albert-sans',
});

export const metadata: Metadata = {
  title: 'Rombux | Soluciones 360° en Marketing, Data e IA para Empresas',
  description:
    'Impulsamos a tu empresa en el universo digital con Servicios Integrales de Benchmarking, Branding, Marketing Digital, Growth, Data e IA, 100% personalizados.',
  icons: {
    icon: '/isotipo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detecta si la página en construcción debe mostrarse
  const goLive = process.env.NEXT_PUBLIC_GO_LIVE === 'true';

  return (
    <html lang='es'>
      <head>
        {/* Cargar el widget del agente IA (Jotform). `afterInteractive` para que no bloquee render. */}
        <Script
          src={JOTFORM_AI_AGENT_URL}
          strategy='afterInteractive'
        />
      </head>
      <body className={`${albertSans.variable} antialiased${!goLive ? ' uc-body' : ''}`}>
        {/* Solo muestra la navbar y el toaster si está live */}
        {goLive && <NavbarPrueba />}
        {goLive && <Toaster position='bottom-left' />}
        {children}
      </body>
    </html>
  );
}
