import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalClinic = ({ onClose }: Props) => {
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
                    <div className='w-[600px] h-[679px] ml-3 flex flex-col justify-around max-xl:w-[450px] max-2xl:w-[450px] max-2xl:justify-start '>
                        <Link href={"/"} className='text-[#747474] -mt-[5px] text-[20px] max-2xl:text-[19px] max-xl:text-[16px] max-2xl:mb-10 max-2xl:mt-7 max-xl:mb-1'>Caso</Link>
                        <h1 className="text-[36px] -mt-[60px] leading-[36px] font-bold mb-4 max-2xl:text-[30px] max-2xl:-mt-[30px] max-xl:text-[24px] max-xl:leading-[30px] max-2xl:mb-3 max-xl:mt-[2px] max-xl:mb-3">Perfiles: CM Fresh</h1>
                        <p className="text-[16px] leading-[24px] -mt-10 max-2xl:mt-1 max-2xl:mb-4 max-xl:mb-0 max-xl:w-[420px]">
                            Para poder reflejar lo que sucede en la cultura millenial, el semanario chileno The Clinic realizó una serie de entrevistas a jóvenes que realizan hechos innovadores, que rompen los cánones de lo que está bien y está mal y que, utilizando las redes sociales, han logrado salir adelante.
                        </p>
                        <p className="italic text-[16px] font-medium leading-[24px] -mt-10 max-2xl:mt-4 max-2xl:mb-7 max-xl:mt-2 max-xl:w-[420px] max-xl:mb-0">
                            Este es el perfil de Midelson Ceresier, que a sus 24 años, se ha convertido en uno de los más jóvenes exponentes del trap haitiano made in Chile. Llegó al país hace dos años, período en el que trabajó en la construcción, escribió canciones y perdió a su madre.
                        </p>
                        <div className="mb-30 text-[16px] leading-[24px] -mt-10 max-2xl:mt-1 max-2xl:mb-5 max-xl:mt-2  max-xl:w-[420px]">
                            <p>Hoy, con dos sencillos publicados bajo el nombre de CM Fresh, Midelson es considerado un pequeño trap star en la escena urbana chilena.</p>
                        </div>
                        <Image src="/theclinic.png" alt="Logo Clinic" width={180} height={55} className='-mb-12 max-2xl:hidden' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/theclinic2.png"
                        alt="The Clinic"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl max-2xl:h-[550px] max-xl:h-[448px] max-xl:w-[399px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalClinic
