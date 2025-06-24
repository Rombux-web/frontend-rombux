import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalBintelligenz = ({ onClose }: Props) => {
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
                    <div className='w-[603px] h-[579px] flex flex-col justify-around'>
                        <Link href={"/"} className='text-[#747474] text-[22px] mt-4'>Caso</Link>
                        <h1 className="text-[36px] font-semibold mb-4 leading-[36px]">Bintelligenz (antes y después)</h1>
                        <p className="mb-1 text-[20px] font-light leading-[28px]">
                            El cliente necesitaba relanzar su oferta de servicios y conectar con el público. Le propusimos analizar a fondo el mercado de Business Intelligence (BI), benchmarking y buyer cliente para actualizar su propuesta de valor.</p>
                        <p className="mb-1 text-[20px] font-light leading-[28px]">
                            El resultado fue un cambio profundo de su identidad, a partir de la adopción de la sigla “BI” en su logo, y la renovación completa de su imagen y sus activos digitales.
                        </p>
                        <p className="italic mb-25 text-[20px] font-medium leading-[28px] w-[300px]">
                            En la imagen superior el “antes”
                            y en la inferior el “después”.
                        </p>
                        <Image src="/binlogo.png" alt="Logo Hotel" width={340} height={98} className='-mb-44 -ml-12' />
                    </div>
                </div>
                <div className="relative w-[606px] h-[679px] mt-8">
                    <Image
                        src="/Bintelligenz.png"
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

export default PopupModalBintelligenz;
