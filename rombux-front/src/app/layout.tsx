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
  const goLive = process.env.NEXT_PUBLIC_GO_LIVE === 'true';

  return (
    <html lang='es'>
      <head>
        {/* Google Tag Manager */}
        <Script
          id='gtm-script'
          strategy='afterInteractive'
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K6Z537GS');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Cargar el widget del agente IA (Jotform). `afterInteractive` para que no bloquee render. */}
        <Script
          src={JOTFORM_AI_AGENT_URL}
          strategy='afterInteractive'
        />
      </head>

      <body className={`${albertSans.variable} antialiased${!goLive ? ' uc-body' : ''}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-K6Z537GS'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {goLive && <NavbarPrueba />}
        {goLive && <Toaster position='bottom-left' />}
        {children}
      </body>
    </html>
  );
}
