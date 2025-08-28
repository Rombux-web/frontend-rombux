import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CarouselMarcas from '../../CarouselMarcas/CarouselMarcas'
import Footer from '@/components/Footer/Footer'

function ClinicMobile() {
    return (
        <div className='mt-25'>
            <div >
                <Link href={"/"} className='block text-black ml-5 mt-28'>&lt; Volver</Link>

            </div>
            <div className='flex flex-col  items-center mt-5'>
                <Image
                    src="/theclinic2.png"
                    alt="Clinic"
                    width={635}
                    height={676}
                    className='rounded-2xl max-md:w-[535px] max-md:h-[576px] max-sm:w-[335px] max-sm:h-[376px] shadow-lg mb-5'
                />
                <Image
                    src="/theclinic.png"
                    alt="Logo Clinic"
                    width={129}
                    height={39}
                    className='mt-8 mb-12'
                />
            </div>

            <div className=' text-black ml-3 flex flex-col px-42 max-md:px-28 max-sm:px-8 max-sm:ml-0'>
                <p className='text-[#747474] text-[16px] mb-4'>Caso</p>
                <h1 className="text-[24px] leading-[24px] font-semibold mb-6">Perfiles: CM Fresh</h1>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-6">
                    Para poder reflejar lo que sucede en la cultura millenial, el semanario chileno The Clinic realizó una serie de entrevistas a jóvenes que realizan hechos innovadores, que rompen los cánones de lo que está bien y está mal y que, utilizando las redes sociales, han logrado salir adelante. </p>
                <p className="text-[18px] italic font-medium leading-[24px] mb-6">
                    Este es el perfil de Midelson Ceresier, que a sus 24 años, se ha convertido en uno de los más jóvenes exponentes del trap haitiano made in Chile. Llegó al país hace dos años, período en el que trabajó en la construcción, escribió canciones y perdió a su madre.
                </p>
                <p className="text-[18px] font-light md:font-normal leading-[24px] mb-12">
                    Hoy, con dos sencillos publicados bajo el nombre de CM Fresh, Midelson es considerado un pequeño trap star en la escena urbana chilena.
                </p>
            </div>
            <div className='bg-[#F4F0F0] h-[373px] flex flex-col items-center'>
                <p className='text-black text-[18px] leading-[24px] ml-3 px-4 py-8 max-sm:ml-0 max-sm:px-8'>Conozca algunos de los casos atendidos por los talentos de nuestra plataforma:</p>
                <CarouselMarcas />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default ClinicMobile