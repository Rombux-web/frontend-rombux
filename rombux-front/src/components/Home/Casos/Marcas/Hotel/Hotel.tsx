import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalHotel = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50">
            <div className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative flex">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-3xl font-bold text-[#D81FB9] border border-[#D81FB9] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#D81FB9]/10 transition"
                >
                    X
                </button>

                <div className=' w-[650px] mx-4'>
                    <div className='w-[610px] h-[579px] flex flex-col justify-around'>
                        <Link href={"/"} className='text-[#747474] text-[22px] mt-4'>Caso</Link>
                        <h1 className="text-[36px] font-semibold mb-4 leading-[36px] w-[319px]">Hotel Marketing and Technology</h1>
                        <p className="mb-1 text-[20px] font-light leading-[28px]">
                            HMandT es una empresa de servicios turísticos con base en Ontario-Canadá, dedicada al marketing de hoteles y reservas.</p>
                        <p className="mb-1 text-[20px] font-light leading-[28px]">
                            Creamos su identidad marcaria, apelando a atributos de clara significación: el mundo y la estrella mirados desde una ventanilla o pantalla. Diseñamos su página de presentación incluyendolas ofertas y destinos preferidos para el alojamiento, traslados y viajes.
                        </p>
                        <p className="italic mb-19 text-[20px] font-medium leading-[28px]">
                            En base a una alianza como Affiliate Partner de Booking.com y Rentalcars.com, integramos Book engine para el sistema automático de reservas.
                        </p>
                        <Image src="/hmandt.jpg" alt="Logo Hotel" width={340} height={98} className='-mb-38' />
                    </div>
                </div>
                <div className="relative w-[606px] h-[679px] mt-8">
                    <Image
                        src="/hmandt2.png"
                        alt="Hotel"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalHotel;
