// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalClinic = ({ onClose }: Props) => {
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
                        <h1 className="text-[36px] font-semibold mb-4">Perfiles: CM Fresh</h1>
                        <p className="mb-4 text-[20px] font-light">
                            Para poder reflejar lo que sucede en la cultura millenial, el semanario chileno The Clinic realizó una serie de entrevistas a jóvenes que realizan hechos innovadores, que rompen los cánones de lo que está bien y está mal y que, utilizando las redes sociales, han logrado salir adelante.
                        </p>
                        <p className="italic mb-4 text-[20px] font-medium">
                            Este es el perfil de Midelson Ceresier, que a sus 24 años, se ha convertido en uno de los más jóvenes exponentes del trap haitiano made in Chile. Llegó al país hace dos años, período en el que trabajó en la construcción, escribió canciones y perdió a su madre.
                        </p>
                        <div className="mb-4 text-[18px]">
                            <p>Hoy, con dos sencillos publicados bajo el nombre de CM Fresh, Midelson es considerado un pequeño trap star en la escena urbana chilena.</p>
                        </div>
                        <Image src="/theclinic.png" alt="Logo Clinic" width={180} height={55} className='-mb-12' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/theclinic2.png"
                        alt="The Clinic"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalClinic
