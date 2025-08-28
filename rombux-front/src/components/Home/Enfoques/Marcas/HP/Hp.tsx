import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModal = ({ onClose }: Props) => {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50">
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative flex max-2xl:w-[1000px] max-2xl:h-[657px] max-2xl:p-7 max-xl:w-[950px] max-xl:h-[557px]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[16px] font-bold text-[#D81FB9] border border-[#D81FB9] rounded-full w-7 h-7 flex items-center justify-center hover:bg-[#D81FB9]/10 transition max-2xl:w-6 max-2xl:h-6 max-2xl:text-xl cursor-pointer"
                >
                    X
                </button>
                <div className='w-[650px] mx-4 max-xl:w-[450px]'>
                    <div className='w-[600px] h-[679px] ml-4 flex flex-col justify-around max-xl:w-[450px] max-2xl:w-[450px] max-2xl:justify-start'>
                        <div className='mt-[14px] max-2xl:mt-[25px] max-2xl:mb-[11px]'>
                            <Link href={"/"} className='text-[#747474] text-[20px] max-2xl:text-[19px] max-xl:text-[16px]  max-2xl:mt-7 max-xl:mt-3 max-xl:mb-2'>Caso</Link>
                        </div>
                        <h1 className="text-[36px] -mt-8 font-bold max-2xl:-mt-1 max-2xl:text-[30px] max-xl:text-[24px] max-xl:leading-[30px] max-2xl:mb-[11px] max-xl:mb-5">HP Programa Premier A3</h1>
                        <p className="text-[16px] font-light max-2xl:mb-0 max-xl:mb-5 max-xl:w-[410px]">
                            En su búsqueda por reinventar el mercado de impresión en América Latina, HP ofrece el más completo
                            portafolio de impresión en formato A3 en el mundo. Los Canales Premier A3 ya operan en México, Brasil,
                            Colombia, Perú, Chile y Argentina.
                        </p>
                        <p className="italic mr-5 text-[16px] font-medium  max-2xl:mr-0 max-2xl:mb-3 max-xl:mb-0 max-xl:w-[410px]">
                            “En Rombux encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación
                            en nuestro país del programa de HP PremierA3.”
                        </p>
                        <div className="mb-20 mt-10 text-[16px] max-2xl:text-[14px] max-2xl:mb-5 max-xl:mb-0 max-xl:mt-8 max-xl:w-[420px]">
                            <p>Gustavo Zurueta, Director <br className='max-xl:hidden' /> Ejecutivo de Procopias, <br className='max-xl:hidden' /> representante de HP <br className='max-xl:hidden'/> Premier A3 en Argentina.</p>
                            
                        </div>
                        <Image src="/logopremier.png" alt="Logo HP" width={163} height={89} className='-mb-12 max-2xl:w-[100px] max-xl:hidden' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/hp3.png"
                        alt="HP"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl max-2xl:h-[550px] max-xl:h-[448px] max-xl:w-[399px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModal
