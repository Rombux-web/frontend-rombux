import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalHotel = ({ onClose }: Props) => {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50">
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative flex max-2xl:w-[1000px] max-2xl:h-[657px] max-2xl:p-7 max-xl:w-[950px] max-xl:h-[550px]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[16px] font-bold text-[#D81FB9] border border-[#D81FB9] rounded-full w-7 h-7 flex items-center justify-center hover:bg-[#D81FB9]/10 transition max-2xl:w-6 max-2xl:h-6 max-2xl:text-xl cursor-pointer"
                >
                    X
                </button>
                <div className=' w-[650px] mx-4 max-xl:w-[450px]'>
                    <div className='w-[610px] h-[579px] ml-3 flex flex-col justify-around max-xl:w-[450px] max-2xl:w-[450px] max-2xl:justify-start'>
                        <Link href={"/"} className='text-[#747474] mt-[5px] text-[20px] max-2xl:text-[19px] max-xl:text-[16px] max-2xl:mb-4 max-2xl:mt-7 max-xl:mt-8 max-xl:mb-2'>Caso</Link>
                        <h1 className="text-[36px] -mt-10 font-bold leading-[36px] w-[319px] max-2xl:-mt-1 max-2xl:text-[30px] max-xl:text-[24px] max-2xl:mb-3 max-xl:leading-[30px] max-xl:mb-5">Hotel Marketing and Technology</h1>
                        <p className=" text-[16px] leading-[28px] -mt-6 max-2xl:-mt-1 max-2xl:mb-3 max-xl:mb-3 max-xl:w-[420px]">
                            HMandT es una empresa de servicios turísticos con base en Ontario-Canadá, dedicada al marketing de hoteles y reservas.</p>
                        <p className=" text-[16px] leading-[28px] -mt-6 max-2xl:-mt-1 max-xl:w-[420px]">
                            Creamos su identidad marcaria, apelando a atributos de clara significación: el mundo y la estrella mirados desde una ventanilla o pantalla. Diseñamos su página de presentación incluyendolas ofertas y destinos preferidos para el alojamiento, traslados y viajes.
                        </p>
                        <p className="italic mb-25 text-[16px] font-medium leading-[28px] max-2xl:mb-5 max-xl:mt-1 max-xl:w-[420px]">
                            En base a una alianza como Affiliate Partner de Booking.com y Rentalcars.com, integramos Book engine para el sistema automático de reservas.
                        </p>
                        <Image src="/hmandt.jpg" alt="Logo Hotel" width={340} height={98} className='-mb-38 max-2xl:w-[240px] max-2xl:mt-3 max-xl:hidden' />
                    </div>
                </div>
                <div className="relative w-[606px] h-[679px] mt-8">
                    <Image
                        src="/hmandt2.png"
                        alt="Hotel"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl max-2xl:h-[550px] max-xl:h-[448px] max-xl:w-[399px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalHotel;
