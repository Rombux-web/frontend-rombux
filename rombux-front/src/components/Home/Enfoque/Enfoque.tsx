import React from 'react'
import Image from 'next/image'

function Enfoque() {
    return (
        <div className='text-black mt-[250px] mb-[265px]'>
            <div className="w-full flex justify-around ml-2 mb-[89px]">
                <h3 className="text-[120px] w-[1410px] leading-none font-light text-center">Un enfoque especializado <span className="text-[#D81FB9] font-normal">con 3 objetivos clave:</span>
                </h3>
            </div>

            <div className='flex justify-around ml-4 px-[60px]'>
                <div className='flex flex-col items-center  w-[466px]'>
                    <div className="relative w-[152px] h-[152px] mb-12">
                        <Image
                            src="/circulo.png"
                            alt=""
                            width={152}
                            height={152}
                            className="object-contain"
                        />
                        <Image
                            src="/Viñeta 01.svg"
                            alt=""
                            width={94}
                            height={94}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <h4 className='text-[48px] text-center leading-none'>01.</h4>
                    <h4 className='text-[48px] text-center leading-none mb-4'>Estrategias
                        personalizadas</h4>
                    <p className='text-[24px] text-center leading-[40px]'>Cada plan es único. Trabajamos 1 a 1 con las empresas para posicionarlas y destacarlas en su sector.</p>
                </div>
                <div className='flex flex-col items-center w-[466px]'>
                    <div className="relative w-[152px] h-[152px] mb-12">
                        <Image
                            src="/circulo.png"
                            alt=""
                            width={152}
                            height={152}
                            className="object-contain"
                        />
                        <Image
                            src="/Viñeta 02.svg"
                            alt=""
                            width={94}
                            height={94}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <h4 className='text-[48px] text-center leading-none'>02.</h4>
                    <h4 className='text-[48px] text-center leading-none mb-4'>Crecimiento
                        sostenible</h4>
                    <p className='text-[24px] text-center leading-[40px]'>Desarrollamos proyectos que acompañan a los clientes en su crecimiento de manera sostenible.</p>
                </div>
                <div className='flex flex-col items-center w-[466px]'>
                    <Image
                        src="/viñeta 03.png"
                        alt=''
                        width={152}
                        height={152}
                        className='mb-12'
                    />
                    <h4 className='text-[48px] text-center leading-none'>03.</h4>
                    <h4 className='text-[48px] text-center w-[241px] leading-none mb-4'>Resultados
                        medibles</h4>
                    <p className='text-[24px] text-center leading-[40px]'>Basándonos en datos cuantificables, evaluamos el impacto y ajustamos las acciones de manera precisa y escalable.</p>
                </div>
            </div>

        </div>
    )
}

export default Enfoque