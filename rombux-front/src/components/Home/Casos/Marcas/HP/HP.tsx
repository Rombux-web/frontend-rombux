// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModal = ({ onClose }: Props) => {
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
                    <div className='w-[600px] h-[679px] flex flex-col justify-around'>
                        <Link href={"/"} className='text-[#747474] text-[22px]'>Caso</Link>
                        <h1 className="text-[36px] font-semibold mb-4">HP Programa Premier A3</h1>
                        <p className="mb-4 text-[20px] font-light">
                            En su búsqueda por reinventar el mercado de impresión en América Latina, HP ofrece el más completo
                            portafolio de impresión en formato A3 en el mundo. Los Canales Premier A3 ya operan en México, Brasil,
                            Colombia, Perú, Chile y Argentina.
                        </p>
                        <p className="italic mb-4 text-[20px] font-medium">
                            “En Rombux encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación
                            en nuestro país del programa de HP PremierA3.”
                        </p>
                        <div className="mb-4 text-[18px]">
                            <p>Gustavo Zurueta, Director</p>
                            <p>Ejecutivo de Procopias,</p>
                            <p>representante de HP</p>
                            <p>Premier A3 en Argentina.</p>
                        </div>
                        <Image src="/logopremier.png" alt="Logo HP" width={163} height={89} className='-mb-12' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/hp3.png"
                        alt="HP"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModal
