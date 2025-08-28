import React from 'react'
import Grid from './Grid'
import Testimonios from './Testimonios'
import CarouselMarcas from './CarouselMarcas/CarouselMarcas'
function Enfoques() {
    return (
        <div className='bg-[#F4F0F0] text-black overflow-x-hidden'>
            <div className=" max-2xl:mx-auto 2xl:mx-40 max-2xl:w-[1200px] max-xl:w-[900px] pt-[216px] max-2xl:pt-[200px]  max-md:w-full max-md:pt-[105px]">
                <div className="flex justify-between items-start relative">
                    <div className="relative -top-[46px] flex flex-col leading-[36px] w-[629px] ml-27 max-xl:hidden">
                        <h2 className="text-[32px] max-2xl:text-[28px]">Talento global</h2>
                        <p className="text-[20px] leading-[28px] mt-[35px] w-[582px] max-2xl:text-[20px] max-2xl:w-[450px]">
                            Rombux reúne a profesionales calificados de 23 países, en más de 50 especialidades, para atender las necesidades de empresas de todo el mundo. Conozca algunos de los casos atendidos por los talentos de nuestra plataforma.
                        </p>
                    </div>

                    <div className="relative top-[3px] leading-none -mt-[20px] w-[720px] text-right mr-24 max-2xl:w-[600px] max-xl:w-[450px] max-2xl:mr-10 max-xl:mr-0  max-xl:mx-auto max-lg:text-left max-lg:ml-20 max-sm:ml-8">
                        <h2 className="text-[80px] leading-[80px] max-2xl:text-[70px] max-lg:text-[55px] max-lg:leading-[55px] max-md:text-[40px] max-md:leading-[40px] max-sm:mb-3 ">Casos/</h2>
                        <h2 className="text-[80px] leading-[80px] max-2xl:text-[70px] max-lg:text-[55px] max-lg:leading-[55px] max-md:text-[40px] max-md:leading-[40px]">Testimonios</h2>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-[28px] mb-[60px] max-sm:mt-[10px]">
                <div className="w-[1520px] max-2xl:w-[1200px] max-xl:w-[900px]  max-lg:w-[720px]">
                    <Grid />
                </div>
            </div>
            <div className="lg:hidden flex items-center justify-center bg-[#F4F0F0] md:ml-20 rounded-l-2">

                <CarouselMarcas />
            </div>

            <div>
                <Testimonios />
            </div>
        </div>
    )
}

export default Enfoques