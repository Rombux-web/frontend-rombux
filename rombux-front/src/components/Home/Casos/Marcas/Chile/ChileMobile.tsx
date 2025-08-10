import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CarouselMarcas from '../../CarouselMarcas/CarouselMarcas'
import Footer from '@/components/Footer/Footer'

function ChileMobile() {
    return (
        <div className='mt-25'>
            <div >
                <Link href={"/"} className='block text-black ml-5 mt-28'>&lt; Volver</Link>

            </div>
            <div className='flex flex-col  items-center mt-5'>
                <Image
                    src="/Chile.png"
                    alt="Chile con Amor"
                    width={635}
                    height={676}
                    className='rounded-2xl max-md:w-[535px] max-md:h-[576px] max-sm:w-[335px] max-sm:h-[376px] shadow-lg mb-5'
                />
                <Image
                    src="/superpollo.png"
                    alt="Logo Super Pollo"
                    width={98}
                    height={66}
                    className='mt-8 mb-12'
                />
            </div>

            <div className=' text-black ml-3 flex flex-col px-42 max-md:px-28 max-sm:px-8 max-sm:ml-0'>
                <p className='text-[#747474] text-[16px] mb-4'>Caso</p>
                <h1 className="text-[24px] leading-[24px] font-semibold mb-6">De Chile con Amor </h1>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-6">
                    Nos propusimos llevar ese sabor entrañable de las comidas chilenas a compatriotas de todo el mundo. Creamos un sitio web donde podías postular a un ser querido y participar para que Súper Pollo se encargara de llevarle un plato típico de la gastronomía chilena a cualquier lugar del planeta. </p>
                <p className="text-[18px] italic font-medium leading-[24px] mb-6">
                    Cientos de personas se inscribieron y un mes después viajamos a New York y Toronto, contactamos a dos chef chilenos y grabamos una linda sorpresa.
                </p>
                <p className="text-[18px] font-medium leading-[24px] mb-1">
                    Resultados:
                </p>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-12">
                    • 500.000 visualizaciones en Facebook (497.371). <br />
                    • 10.000 visualizaciones en YouTube. <br />
                    Y toda una omunidad emocionada y agradecida.
                </p>
            </div>
            <div className='bg-[#F4F0F0] h-[373px] flex flex-col items-center'>
                <p className='text-black text-[18px] leading-[24px] ml-3 px-10 py-8'>Conozca algunos de los casos atendidos por los talentos de nuestra plataforma:</p>
                <CarouselMarcas />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default ChileMobile