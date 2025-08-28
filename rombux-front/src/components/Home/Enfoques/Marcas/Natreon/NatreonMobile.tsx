import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CarouselMarcas from '../../CarouselMarcas/CarouselMarcas'
import Footer from '@/components/Footer/Footer'

function NatreonMobile() {
    return (
        <div className='mt-25'>
            <div >
                <Link href={"/"} className='block text-black ml-5 mt-28'>&lt; Volver</Link>

            </div>
            <div className='flex flex-col  items-center mt-5'>
                <Image
                    src="/natreon2.png"
                    alt="Natreon"
                    width={635}
                    height={676}
                    className='rounded-2xl max-md:w-[535px] max-md:h-[576px] max-sm:w-[335px] max-sm:h-[376px] shadow-lg mb-5'
                />
                <Image
                    src="/DowAgro.jpg"
                    alt="Logo HP"
                    width={181}
                    height={28}
                    className='mt-8 mb-12'
                />
            </div>

            <div className=' text-black ml-3 flex flex-col px-42 max-md:px-28 max-sm:px-8 max-sm:ml-0'>
                <p className='text-[#747474] text-[16px] mb-4'>Caso</p>
                <h1 className="text-[24px] leading-[24px] font-semibold mb-6">Un perfil de avanzada para alimentos más saludables</h1>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-6 ">
                    Dow AgroSciences, filial de Dow Chemical en Argentina, nos encargó el plan de marketing para la introducción del nuevo Aceite de Girasol de Alto Oleico Natreon en el mercado argentino. </p>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-6 ">
                    Realizamos una investigación que nos permitió adecuar y rediseñar la marca para la presentación al consumidor local. Desarrollamos luego, la literatura que explica la problemática de la salud y alimentación y volcamos estos contenidos en un material de lectura bilingüe, que se convirtió en material de consulta y referencia general.
                </p>
                <p className="text-[18px] italic font-medium leading-[24px] mb-12">
                    A través de acciones de prensa, eventos y marketing outbound, penetramos el mercado y posicionamos al producto Natreon como líder indiscutido en la industria de alimentos procesados.
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

export default NatreonMobile