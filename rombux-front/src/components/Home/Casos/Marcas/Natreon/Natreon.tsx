// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalNatreon = ({ onClose }: Props) => {
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
                        <Link href={"/"} className='text-[#747474] text-[22px] mt-6 mb-5'>Caso</Link>
                        <h1 className="text-[36px] font-semibold mb-6 leading-[36px]">Un perfil de avanzada para alimentos más saludables</h1>
                        <p className="mb-4 text-[20px] font-light leading-[28px]">
                            Dow AgroSciences, filial de Dow Chemical en Argentina, nos encargó el plan de marketing para la introducción del nuevo Aceite de Girasol de Alto Oleico Natreon en el mercado argentino.
                        </p>
                        <p className="mb-4 text-[20px] font-light leading-[28px]">
                            Realizamos una investigación que nos permitió adecuar y rediseñar la marca para la presentación al consumidor local. Desarrollamos luego, la literatura que explica la problemática de la salud y alimentación y volcamos estos contenidos en un material de lectura bilingüe, que se convirtió en material de consulta y referencia general.
                        </p>
                        <p className="italic mb-10 text-[20px] font-medium leading-[28px]">
                            A través de acciones de prensa, eventos y marketing outbound, penetramos el mercado y posicionamos al producto Natreon como líder indiscutido en la industria de alimentos procesados.
                        </p>

                        <Image src="/DowAgro.jpg" alt="Logo Natreon" width={297} height={46} className='-mb-28' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/natreon2.png"
                        alt="Natreon"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalNatreon
