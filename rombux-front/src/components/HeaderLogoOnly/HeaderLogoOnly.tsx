import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogoOnly() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[url('/gradiente2.png')] bg-cover bg-no-repeat bg-top flex items-center justify-between px-4 lg:px-10 2xl:px-[143px] h-[94px] 2xl:h-[96px]">
      {/* Logo, igual que en Navbar */}
      <Link href='/'>
        <Image
          src='/Vector.png'
          alt='Logo Rombux'
          width={212}
          height={34}
          className='ml-4 md:ml-16 lg:ml-8 xl:ml-20 w-[141px] h-[23px] 2xl:ml-37 2xl:w-[212px] 2xl:h-[34px]'
        />
      </Link>

      {/* Spacer derecho para mantener el balance visual */}
      <div className='w-[141px] h-[23px] md:w-[212px] md:h-[34px]' />
    </header>
  );
}
