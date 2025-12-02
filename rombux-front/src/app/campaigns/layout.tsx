'use client';

import HeaderLogoOnly from '@/components/HeaderLogoOnly/HeaderLogoOnly';
import Footer from '@/components/Footer/Footer';

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header fijo con el mismo fondo y paddings del sitio, pero sin menú ni Romy */}
      <HeaderLogoOnly />

      {/* Contenido de campañas con los mismos márgenes/anchos que el sitio */}
      <main className='pt-[94px] 2xl:pt-[96px] px-4 lg:px-10 2xl:px-[143px]'>
        <div className='max-w-7xl mx-auto'>{children}</div>
      </main>

      <Footer />
    </>
  );
}
