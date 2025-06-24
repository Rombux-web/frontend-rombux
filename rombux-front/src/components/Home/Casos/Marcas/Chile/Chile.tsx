// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalChile = ({ onClose }: Props) => {
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
                        <h1 className="text-[36px] font-semibold mb-4">De Chile con Amor</h1>
                        <p className="mb-4 text-[20px] font-light">
                            Nos propusimos llevar ese sabor entrañable de las comidas chilenas a compatriotas de todo el mundo. Creamos un sitio web donde podías postular a un ser querido y participar para que Súper Pollo se encargara de llevarle un plato típico de la gastronomía chilena a cualquier lugar del planeta.
                        </p>
                        <p className="italic mb-4 text-[20px] font-medium">
                            Cientos de personas se inscribieron y un mes después viajamos a New York y Toronto, contactamos a dos chef chilenos y grabamos una linda sorpresa.
                        </p>
                        <div className="mb-4 text-[18px]">
                            <p className='font-medium'>Resultados:</p>
                            <p>• 500.000 visualizaciones en Facebook (497.371).</p>
                            <p>• 10.000 visualizaciones en YouTube.</p>
                            <p>Y toda una comunidad emocionada y agradecida</p>
                        </div>
                        <Image src="/superpollo.png" alt="Logo Super Pollo" width={141} height={95} className='-mb-12' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/Chile.png"
                        alt="Banner Ojo"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalChile
