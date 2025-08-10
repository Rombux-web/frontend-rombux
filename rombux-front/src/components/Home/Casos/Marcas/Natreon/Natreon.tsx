import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalNatreon = ({ onClose }: Props) => {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50"
        >
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
                    <div className='w-[610px] h-[579px] ml-4 flex flex-col justify-around max-xl:w-[450px] max-2xl:w-[450px] max-2xl:justify-start'>
                        <Link href={"/"} className='text-[#747474] -mt-[6px] text-[20px] max-2xl:text-[19px] max-xl:text-[16px] max-2xl:mb-0 max-2xl:mt-7 max-xl:mt-7 max-xl:mb-0'>Caso</Link>
                        <h1 className="text-[36px] -mt-15 font-bold leading-[36px] max-2xl:text-[30px] max-2xl:mt-3 max-xl:text-[24px] max-2xl:mb-3 max-xl:leading-[30px] max-xl:mb-1 max-xl:mt-1">Un perfil de avanzada para alimentos más saludables</h1>
                        <p className=" text-[16px] -mt-10 leading-[24px]  max-2xl:mt-3 max-2xl:mb-3 max-xl:mb-0 max-xl:mt-1 max-xl:w-[420px]">
                            Dow AgroSciences, filial de Dow Chemical en Argentina, nos encargó el plan de marketing para la introducción del nuevo Aceite de Girasol de Alto Oleico Natreon en el mercado argentino.
                        </p>
                        <p className="text-[16px] -mt-10 leading-[24px] max-2xl:mt-3 max-2xl:mb-3 max-xl:mb-0 max-xl:mt-1 max-xl:w-[420px]">
                            Realizamos una investigación que nos permitió adecuar y rediseñar la marca para la presentación al consumidor local. Desarrollamos luego, la literatura que explica la problemática de la salud y alimentación y volcamos estos contenidos en un material de lectura bilingüe, que se convirtió en material de consulta y referencia general.
                        </p>
                        <p className="italic text-[16px] font-medium mb-4 leading-[24px] max-2xl:mt-3 max-2xl:mb-5 max-xl:mt-1 max-xl:w-[420px]">
                            A través de acciones de prensa, eventos y marketing outbound, penetramos el mercado y posicionamos al producto Natreon como líder indiscutido en la industria de alimentos procesados.
                        </p>

                        <Image src="/DowAgro.jpg" alt="Logo Natreon" width={297} height={46} className='-mb-28 max-2xl:hidden' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/natreon2.png"
                        alt="Natreon"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl max-2xl:h-[550px] max-xl:h-[448px] max-xl:w-[399px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalNatreon
