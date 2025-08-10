import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CarouselMarcas from '../../CarouselMarcas/CarouselMarcas'
import Footer from '@/components/Footer/Footer'

function BinMobile() {
    return (
        <div className='mt-25'>
            <div >
                <Link href={"/"} className='block text-black ml-5 mt-28'>&lt; Volver</Link>

            </div>
            <div className='flex flex-col  items-center mt-5'>
                <Image
                    src="/Bintelligenz.png"
                    alt="Hotel"
                    width={635}
                    height={676}
                    className='rounded-2xl max-md:w-[535px] max-md:h-[576px] max-sm:w-[335px] max-sm:h-[376px] shadow-lg mb-5'
                />
                <Image
                    src="/binlogo.png"
                    alt="Logo Hotel"
                    width={308}
                    height={155}
                    className='mt-8 mb-12'
                />
            </div>

            <div className=' text-black ml-3 flex flex-col px-42 max-md:px-28 max-sm:px-8 max-sm:ml-0'>
                <p className='text-[#747474] text-[16px] mb-4'>Caso</p>
                <h1 className="text-[24px] leading-[24px] font-semibold mb-6">Bintelligenz (antes y después)</h1>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-6">
                    El cliente necesitaba relanzar su oferta de servicios y conectar con el público. Le propusimos analizar a fondo el mercado de Business Intelligence (BI), benchmarking y buyer cliente para actualizar su propuesta de valor.</p>
                <p className="text-[18px] font-light  md:font-normal leading-[24px] mb-12">
                    El resultado fue un cambio profundo de su identidad, a partir de la adopción de la sigla “BI” en su logo, y la renovación completa de su imagen y sus activos digitales.
                </p>
            </div>
            <div className='bg-[#F4F0F0] h-[373px] flex flex-col items-center'>
                <p className='text-black text-[18px] leading-[24px] ml-3 px-4 py-8'>Conozca algunos de los casos atendidos por los talentos de nuestra plataforma:</p>
                <CarouselMarcas />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default BinMobile