import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalBintelligenz = ({ onClose }: Props) => {
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
                    <div className='w-[603px] ml-3 h-[579px] flex flex-col justify-around max-xl:w-[450px] max-2xl:w-[450px] max-2xl:justify-start'>
                        <Link href={"/"} className='text-[#747474] mt-[5px] text-[20px] max-2xl:text-[19px] max-xl:text-[16px] max-2xl:mb-0 max-2xl:mt-7 max-xl:mt-7'>Caso</Link>
                        <h1 className="text-[36px] -mt-10 font-bold mb-4 leading-[36px] max-2xl:text-[30px] max-2xl:mt-3 max-xl:text-[24px] max-xl:leading-[30px] max-2xl:mb-0 max-xl:mt-[6px]">Bintelligenz (antes y después)</h1>
                        <p className="mb-1 text-[16px] -mt-5 leading-[24px]  max-2xl:mb-3 max-2xl:mt-4 max-xl:mb-5 max-xl:w-[420px]">
                            El cliente necesitaba relanzar su oferta de servicios y conectar con el público. Le propusimos analizar a fondo el mercado de Business Intelligence (BI), benchmarking y buyer cliente para actualizar su propuesta de valor.</p>
                        <p className="mb-5 text-[16px] -mt-5 leading-[24px] max-2xl:mt-4 max-2xl:mb-0 max-xl:mt-1 max-xl:w-[420px]">
                            El resultado fue un cambio profundo de su identidad, a partir de la adopción de la sigla “BI” en su logo, y la renovación completa de su imagen y sus activos digitales.
                        </p>
                        <p className="italic mb-20 text-[16px] font-medium leading-[28px] w-[300px]  max-2xl:mt-4 max-2xl:mb-10 max-xl:mt-5">
                            En la imagen superior el “antes”
                            y en la inferior el “después”.
                        </p>
                        <Image src="/binlogo.png" alt="Logo Hotel" width={340} height={98} className='-mb-44 -ml-12 max-xl:hidden' />
                    </div>
                </div>
                <div className="relative w-[606px] h-[679px] mt-8">
                    <Image
                        src="/Bintelligenz.png"
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

export default PopupModalBintelligenz;
