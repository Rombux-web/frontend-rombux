import React from 'react'
import Image from 'next/image'

function Enfoque() {
    return (
        <div className='text-black mt-[120px] max-xl:mt-[100px] mb-[215px] max-xl:mb-[150px] max-md:mb-[85px]'>
            <div className="w-full flex justify-around mb-[89px] max-xl-20px]">
                <h3 className="text-[80px] w-[1410px] leading-[80px] text-center max-2xl:text-[70px] max-2xl:leading-[70px] max-2xl:w-[900px] max-xl:font-light max-lg:text-[40px] max-lg:leading-[40px] max-lg:w-[400px]">Un enfoque <br className='md:hidden'/> especializado <br /><span className="text-[#D81FB9] font-normal">con 3 objetivos <br className='md:hidden'/> clave:</span>
                </h3>
            </div>

            <div className='flex justify-evenly ml-4 px-[200px] max-2xl:px-[100px] max-xl:px-[70px] max-xl:-mt-10 max-xl:ml-0 max-lg:flex-col max-lg:gap-y-15 max-lg:items-center max-md:px-0'>
                <div className='flex flex-col items-center w-[400px] max-sm:w-[340px] '>
                    <div className="relative w-[104px] h-[104px] mb-7 max-2xl:mb-2 flex justify-center items-center">
                        <Image
                            src="/circulo.png"
                            alt="Círculo decorativo"
                            width={104}
                            height={104}
                            className="object-contain max-xl:w-[94px] "
                        />
                        <Image
                            src="/Viñeta 01.svg"
                            alt="Icono de viñeta"
                            width={64}
                            height={64}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-2xl:w-[58px] max-xl:w-[48px]"
                        />
                    </div>
                    <h4 className='text-[32px] text-center leading-[36px] max-2xl:text-[36px] max-2xl:leading-[36px] max-xl:mt-5 max-lg:text-[26px] max-lg:leading-[28px]'>01.</h4>
                    <h4 className='text-[32px] xl:w-[218px] text-center leading-[36px] mb-6 max-2xl:text-[36px] max-2xl:leading-[36px] max-lg:text-[26px] max-lg:leading-[28px]'>Estrategias
                        personalizadas</h4>
                    <p className='text-[20px] w-[364px] text-center leading-[28px] max-2xl:text-[20px] max-2xl:w-[281px] max-2xl:leading-[25px] max-xl:-mt-[10px] max-lg:text-[18px] max-lg:leading-[25px] max-lg:w-[336px]'>Cada plan es único. Trabajamos 1 a 1 con las empresas para posicionarlas y destacarlas en su sector.</p>
                </div>
                <div className='flex flex-col items-center w-[400px] max-sm:w-[340px]'>
                    <div className="relative w-[104px] h-[104px] mb-7 max-2xl:mb-2 flex justify-center items-center">
                        <Image
                            src="/circulo.png"
                            alt=""
                            width={104}
                            height={104}
                            className="object-contain max-xl:w-[94px] "
                        />
                        <Image
                            src="/Viñeta 02.svg"
                            alt="Icono de viñeta"
                            width={64}
                            height={64}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-2xl:w-[58px] max-xl:w-[48px]"
                        />
                    </div>
                    <h4 className='text-[32px] text-center leading-[36px] max-2xl:text-[36px] max-2xl:leading-[36px] max-xl:mt-5 max-lg:text-[26px] max-lg:leading-[28px]'>02.</h4>
                    <h4 className='text-[32px] w-[202px] text-center leading-[36px] mb-6 max-2xl:text-[36px] max-2xl:leading-[36px] max-lg:text-[26px] max-lg:leading-[28px] max-lg:w-[333px]'>Crecimiento
                        sostenible</h4>
                    <p className='text-[20px] w-[324px] text-center leading-[28px] max-2xl:text-[20px] max-2xl:w-[281px] max-2xl:leading-[25px] max-xl:-mt-[10px] max-lg:text-[18px] max-lg:leading-[25px] max-lg:w-[336px] '>Desarrollamos proyectos que acompañan a los clientes en su crecimiento de manera sostenible.</p>
                </div>
                <div className='flex flex-col items-center w-[400px] max-xl:mt-[6px] max-sm:w-[340px]'>
                    <Image
                        src="/vinieta03.png"
                        alt="Icono de viñeta"
                        width={104}
                        height={104}
                        className='max-xl:w-[94px]  max-2xl:mb-[7px] mb-7 max-xl:mb-[12px] '
                    />
                    <h4 className='text-[32px] text-center leading-[36px] max-2xl:text-[36px] max-2xl:leading-[36px] max-xl:mt-5 max-lg:text-[26px] max-lg:leading-[28px]'>03.</h4>
                    <h4 className='text-[32px] w-[202px] text-center leading-[36px] mb-6 max-2xl:text-[36px] max-2xl:leading-[36px] max-lg:text-[26px] max-lg:leading-[28px] max-lg:w-[333px]'>Resultados
                        medibles</h4>
                    <p className='text-[20px] w-[400px] text-center leading-[28px] max-2xl:text-[20px] max-2xl:w-[320px] max-2xl:leading-[25px] max-xl:-mt-[10px] max-lg:text-[18px] max-lg:leading-[25px] max-lg:w-[336px]'>Basándonos en datos cuantificables, evaluamos el impacto y ajustamos las acciones de manera precisa y escalable.</p>
                </div>
            </div>

        </div>
    )
}
export default Enfoque