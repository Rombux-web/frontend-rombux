import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { JOTFORM_AI_AGENT_URL } from '@/config/urls';
import ClientChrome from '@/components/ClientChrome/ClientChrome';

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
  icons: { icon: '/isotipo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // goLive controla si se muestra la capa pública
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
        {/* Script del agente IA solo si no es campaña (lo controlará ClientChrome) */}
      </head>
      <body className={`${albertSans.variable} antialiased${!goLive ? ' uc-body' : ''}`}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-K6Z537GS'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* ClientChrome decide si mostrar Navbar, Toaster y el Script del agente según la ruta */}
        <ClientChrome goLive={goLive} />
        {children}
      </body>
    </html>
  );
}
