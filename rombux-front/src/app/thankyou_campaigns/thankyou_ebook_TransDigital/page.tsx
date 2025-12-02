'use client';

import Footer from '@/components/Footer/Footer';

export default function GraciasEbookTransDigital() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Ocupa el alto disponible, compensa el header fijo y centra vertical/horizontal */}
      <main className='flex-1 pt-[94px] 2xl:pt-[96px] px-4 lg:px-10 2xl:px-[143px] flex items-center justify-center'>
        <section className='max-w-3xl mx-auto text-center'>
          <h1 className='text-3xl md:text-4xl font-light text-black mb-6'>
            Descargar tu <b>e-book Transformación Digital</b>
          </h1>
          <a
            href='/ebooks/El%20desaf%C3%ADo%20de%20la%20Transformaci%C3%B3n%20Digital.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center bg-[#D81FB9] text-white text-xl font-semibold h-12 px-8 rounded-full transition-transform hover:brightness-110 active:scale-95 leading-none'
          >
            Acá
          </a>
        </section>
      </main>

      {/* Footer estándar */}
      <Footer />
    </div>
  );
}
