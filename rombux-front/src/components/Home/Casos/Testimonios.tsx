import React from 'react'
import Image from 'next/image'
import CarouselT from './CarouselTestimonios/CarouselT'

function Testimonios() {
    return (
        <div>
            <div className='flex justify-center gap-x-17 bg-[#F4F0F0] mx-[104px] pb-[185px] max-2xl:mx-[20px] max-xl:gap-x-4 max-lg:hidden '>
                <div className="w-[400px] h-[620px] border border-[#C1C1C1] rounded-[40px] overflow-hidden shadow-sm max-2xl:w-[350px] max-xl:w-[290px] max-xl:h-[480px]">
                    <div className="px-[32px] pt-[40px] pb-[32px] flex flex-col h-full justify-center relative max-2xl:px-[30px] max-xl:px-[16px]">
                        <p className="text-[#D81FB9] text-[48px] leading-[48px] italic rotate-180 inline-block absolute top-[35px] left-[44px] font-medium max-2xl:top-[6px] max-xl:left-[30px] max-xl:top-[-6px]">
                            "
                        </p>
                        <p className="mt-[70px] text-[16px] mb-[31px] leading-[28px] text-black max-2xl:mt-[40px] max-xl:leading-[22px] max-xl:mt-[20px] max-xl:mb-[21px]">
                            “Contratamos a Rombux para la promoción de las principales marcas del portfolio: <span className="font-bold">Amarula, Grants, Glenffidich, Bass Pale Ale</span>. Siempre respondieron eficazmente, acorde a nuestras expectativas.”
                        </p>
                        <div className="flex flex-col text-[16px] max-xl:mb-[10px] max-xl:mt-4">
                            <Image
                                src="/fabian.png"
                                alt="Fabián Álvarez"
                                width={159}
                                height={159}
                                className=" object-cover mb-5 max-2xl:w-[100px] max-xl:w-[80px] max-xl:mb-0"
                            />
                            <p className="font-bold mt-4 leading-[28px] max-xl:leading-[20px]">Fabián Álvarez</p>
                            <p className="leading-[28px] max-xl:leading-[20px]">Regional Manager</p>
                            <p className="leading-[28px] max-xl:leading-[20px]">Wines & Spirits</p>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] h-[620px] border border-[#C1C1C1] rounded-[40px] overflow-hidden shadow-sm max-2xl:w-[350px] max-xl:w-[290px] max-xl:h-[480px]">
                    <div className="px-[32px] pt-[40px] pb-[32px] flex flex-col h-full justify-center relative max-2xl:px-[30px] max-xl:px-[16px]">

                        <p className="text-[#D81FB9] text-[48px] leading-[48px] italic rotate-180 inline-block absolute top-[35px] left-[48px] font-medium max-2xl:top-[26px] max-xl:left-[30px] max-xl:top-[-6px]">
                            "
                        </p>

                        <p className="mt-[70px] text-[16px] mb-5 leading-[28px] text-black max-2xl:mt-[40px] max-xl:leading-[22px] max-xl:mt-[20px]">
                            “En Rombux encontramos una respuesta <br /> de alta calidad, flexible y de rápida resolución para la presentación en <br /> nuestro país del programa de <span className="font-bold">HP, PremierA3</span>.”
                        </p>

                        <div className="flex flex-col text-[16px] max-2xl:mt-[22px] max-xl:mb-[10px] max-xl:mt-10">
                            <Image
                                src="/gustavo.png"
                                alt="Gustavo Zureta"
                                width={159}
                                height={159}
                                className="object-cover mb-5 max-2xl:w-[100px] max-xl:w-[80px] max-xl:mb-0"
                            />
                            <p className="leading-[28px] font-bold mt-4 max-2xl:text-[16px] max-xl:leading-[20px]">Gustavo Zureta</p>
                            <p className="leading-[28px] max-2xl:text-[16px] max-xl:leading-[20px]">Director Ejecutivo de Procopias,</p>
                            <p className="leading-[28px] max-2xl:text-[16px] max-xl:leading-[20px]">HP PremierA3 Argentina</p>
                        </div>
                    </div>
                </div>

                <div className="w-[400px] h-[620px] border border-[#C1C1C1] rounded-[40px] overflow-hidden shadow-sm max-2xl:w-[350px] max-xl:w-[290px] max-xl:h-[480px]">
                    <div className="px-[32px] pt-[40px] pb-[32px] flex flex-col h-full justify-center relative max-2xl:px-[30px] max-xl:px-[16px]">
                        <p className="text-[#D81FB9] text-[48px] leading-[48px] italic rotate-180 inline-block absolute top-[35px] left-[48px] font-medium max-2xl:top-[16px] max-xl:left-[30px] max-xl:top-[-6px]">
                            "
                        </p>

                        <p className="mt-[70px] text-[16px] mb-5 leading-[28px] text-black max-2xl:mt-[40px] max-xl:leading-[22px] max-xl:mt-[12px] max-xl:mb-0">
                            “Coordinamos campañas para empresas agroalimentarias de primera línea como <span className="font-bold">Dow Agroscienes, Granix, Advanta Semillas y Fargo</span>, con óptimos resultados en la difusión y posicionamiento de sus productos”.
                        </p>

                        <div className="flex flex-col text-[16px] max-2xl:mt-[22px] max-xl:mt-4">
                            <Image
                                src="/eduardo.png"
                                alt="Eduardo Dubinsky"
                                width={159}
                                height={159}
                                className=" object-cover mb-5 max-2xl:w-[100px] max-xl:w-[80px] max-xl:mb-0"
                            />
                            <p className="leading-[28px] font-bold mt-4 max-2xl:text-[16px] max-xl:leading-[20px]">Ing. Eduardo Dubinsky</p>
                            <p className="leading-[28px] max-2xl:text-[16px] max-xl:leading-[20px]">Consultor Técnico Internacional en</p>
                            <p className="leading-[28px] max-2xl:text-[16px] max-xl:leading-[20px]">Grasas y Aceites Comestibles</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='lg:hidden'>
                <CarouselT />
            </div>
        </div>
    )
}

export default Testimonios