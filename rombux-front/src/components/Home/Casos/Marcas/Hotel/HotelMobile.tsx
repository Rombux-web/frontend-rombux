import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CarouselMarcas from '../../CarouselMarcas/CarouselMarcas'
import Footer from '@/components/Footer/Footer'

function HotelMobile() {
    return (
        <div className='mt-25'>
            <div >
                <Link href={"/"} className='block text-black ml-5 mt-28'>&lt; Volver</Link>

            </div>
            <div className='flex flex-col  items-center mt-5'>
                <Image
                    src="/hmandt2.png"
                    alt="Hotel"
                    width={635}
                    height={676}
                    className='rounded-2xl max-md:w-[535px] max-md:h-[576px] max-sm:w-[335px] max-sm:h-[376px] shadow-lg mb-5'
                />
                <Image
                    src="/hmandt.jpg"
                    alt="Logo Hotel"
                    width={180}
                    height={52}
                    className='mt-8 mb-12'
                />
            </div>

            <div className=' text-black ml-3 flex flex-col px-42 max-md:px-28 max-sm:px-8 max-sm:ml-0'>
                <p className='text-[#747474] text-[16px] mb-4'>Caso</p>
                <h1 className="text-[24px] leading-[24px] font-semibold mb-6">Hotel Marketing <br />and Technology</h1>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-6">
                    HMandT es una empresa de servicios turísticos con base en Ontario-Canadá, dedicada al marketing de hoteles y reservas. </p>

                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-6">Creamos de su identidad marcaria, apelando a atributos de clara significación: el mundo y la estrella mirados desde una ventanilla o pantalla. Diseñamos su página de presentación, incluyendo las ofertas y destinos preferidos para el alojamiento, traslados y viajes.</p>
                <p className="text-[18px] italic font-medium leading-[24px] mb-12">
                    En base a una alianza como Affiliate Partner de Booking.com y Rentalcars.com, integramos Book engine para el sistema automático de reservas.
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

export default HotelMobile