import Image from 'next/image';
import './uc_globals.css';

export default function UnderConstruction() {
  return (
    <div className='max-lg:h-[1366px] max-sm:h-[956px]'>
      <div className='pt-14 px-[143px] max-sm:px-[30px]'>
        <Image
          src='/logo.png'
          alt='Logo Rombux'
          width={185}
          height={30}
          className='max-sm:w-[141px] '
        />
      </div>
      <div className='relative w-full h-[915px] flex flex-col items-center justify-center text-white'>
        <div className='absolute -bottom-10 -left-40 max-lg:-left-40 max-lg:-bottom-59 max-xl:-left-20 max-xl:bottom-9 max-md:-left-10 max-md:-bottom-35 max-sm:hidden z-0 w-[30vw] max-w-[541px] h-[30vw] max-h-[541px] lg:w-[35vw] lg:h-[35vw] max-lg:w-[45vw] max-lg:h-[45vw] '>
          <Image
            src='/Trama esfera negra.png'
            fill
            alt=''
            className='object-contain animate-spin [animation-direction:reverse] [animation-duration:150s]'
          />
          <Image
            src='/Trama-esfera-fucsia.png'
            fill
            alt=''
            className='object-contain absolute top-0 left-0 animate-spin [animation-duration:150s]'
          />
        </div>
        <div className='absolute top-[10px] -right-20 max-xl:-right-10 max-lg:-right-20 max-lg:top-[-10px] max-sm:hidden z-0 w-[15vw] max-w-[299px] h-[15vw] max-h-[299px] lg:w-[20vw] lg:h-[20vw] max-lg:w-[30vw] max-lg:h-[30vw]'>
          <Image
            src='/Trama esfera negra.png'
            fill
            alt=''
            className='object-contain animate-spin [animation-duration:150s]'
          />
          <Image
            src='/Trama-esfera-fucsia.png'
            fill
            alt=''
            className='object-contain absolute top-0 left-0 animate-spin [animation-direction:reverse] [animation-duration:150s]'
          />
        </div>
        <div className='mb-40 max-sm:w-[350px] flex flex-col max-sm:mb-100 max-lg:mt-50'>
          <div>
            <iframe
              width='450'
              height='290'
              src='https://www.youtube.com/embed/IBasr17SVMA?rel=0'
              title='YouTube video player'
              allow='accelerometer; encrypted-media;'
              allowFullScreen
              className='mx-auto mb-6 rounded-3xl max-sm:w-[350px] max-sm:h-[220px] shadow-2xl shadow-black/50'
            ></iframe>
          </div>

          <div className='z-10 text-center px-4 leading-[32px] mt-15 max-sm:mt-5 flex flex-col '>
            <div className='max-sm:w-[207px] max-sm:leading-[20px] max-sm:mx-auto'>
              <h1 className='text-[24px] font-medium max-sm:text-[20px]'>
                Estamos renovando nuestro sitio.
              </h1>
              <h2 className='text-[22px] mt-1 max-sm:text-[15px]  max-sm:leading-[20px]'>
                ¡Pronto te contaremos más!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
