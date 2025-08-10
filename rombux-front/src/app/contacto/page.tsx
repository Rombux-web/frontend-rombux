"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { div } from "framer-motion/client";

export default function Formulario() {
    return (
        <div>
            <div
                className="flex flex-col items-center pt-[115px] gap-[40px] 
                    lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[100px] lg:gap-[60px]
                    2xl:ml-[290px] 2xl:pt-[192px]"
            >
                {/* Columna izquierda */}
                <div className="flex flex-col items-center sm:items-start ">
                    <h1 className="text-black text-[40px] leading-[40px] w-[332px] font-light lg:text-[70px] lg:leading-[70px] lg:w-[677px] lg:font-light 2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[870px] 2xl:font-normal mb-[20px] lg:mb-[40px] 2xl:mb-[94px]">
                        <span>Iniciemos tu</span>
                        <span className="block lg:inline"> liderazgo digital</span>
                    </h1>
                    <h2 className="text-[#D81FB9] text-[24px] leading-[60px] font-medium w-[336px] text-left lg:text-left lg:text-[48px] lg:leading-[60px]  2xl:text-[48px] 2xl:leading-[48px]">
                        Contáctanos
                    </h2>

                    <div>
                        <div className="relative z-10 flex flex-col items-center">
                            <form className="mt-[30px] flex flex-col space-y-[25px] items-center max-sm:mt-[25px] ">
                                {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map(
                                    (placeholder, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            placeholder={placeholder}
                                            className="w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-sm:w-[336px] max-sm:pl-4"
                                        />
                                    )
                                )}
                                <div className="w-[638px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-6 space-y-8 bg-white mt-8 max-sm:w-[336px] max-sm:space-y-6 max-sm:pl-3 max-sm:mt-2 max-sm:pt-[15px]">
                                    <p className="text-[16px] font-medium text-black mb-[26px] leading-[24px] tracking-normal max-sm:text-[18px]">
                                        Área/s de servicios requeridos*
                                    </p>
                                    {[
                                        {
                                            bold: "Benchmarking",
                                            rest: " / Investigación de mercado y propuesta de valor.",
                                        },
                                        {
                                            bold: "Branding",
                                            rest: " / Identidad, presencia digital, reputación.",
                                        },
                                        {
                                            bold: "Marketing Digital",
                                            rest: " / Conexión y adquisición de clientes.",
                                        },
                                        {
                                            bold: "Growth",
                                            rest: " / Crecimiento y posicionamiento de mercado.",
                                        },
                                        {
                                            bold: "Data + IA",
                                            rest: " / Información clave y automatización de procesos.",
                                        },
                                    ].map(({ bold, rest }, idx) => (
                                        <label
                                            key={idx}
                                            className="flex items-start space-x-[27px] text-[16px] text-black        -mt-[2px] max-sm:leading-[16px] max-sm:space-x-[15px] "
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-[25px] h-[25px] border-2 border-gray-400 rounded-md appearance-none bg-white max-sm:w-[23px] max-sm:h-[23px]
                                              checked:after:content-['✔'] checked:after:text-[#D81FB9] checked:after:text-lg
                                              checked:after:flex checked:after:items-center checked:after:justify-center
                                              checked:after:w-full checked:after:h-full"
                                            />
                                            <span className="max-sm:text-[14px] max-sm:w-[262px]">
                                                <strong className="font-semibold">{bold}</strong>
                                                {rest}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                <div className="w-[638px] h-[212px] border border-[#707070] rounded-[5px] p-3 bg-white mt-8 max-sm:w-[336px] max-sm:h-[113px] max-sm:mt-2">
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        required
                                        className="w-full h-full pl-4 pt-[3px] text-[16px] font-bold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent max-sm:pl-1"
                                        placeholder="¿Por qué tema nos consultas?*"
                                    />
                                </div>
                                <div className="w-[638px] flex justify-start max-sm:w-full max-sm:justify-center">
                                    <button
                                        type="submit"
                                        className="bg-[#D81FB9] text-white text-[18px] font-semibold h-[46px] w-[186px] rounded-[50px] mt-[29px] 2xl:mb-[170px] max-2xl:mb-[170px] max-lg:mb-0"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="relative mr-100 -translate-x-38 mt-37 mr-5 w-[660px] custom-form max-2xl:-translate-x-30 max-xl:w-[350px] max-xl:-translate-x-32 max-xl:translate-y-10 max-lg:hidden">
                        <div className="w-[660px]">
                            <Image
                                src="/grupoesfera+halo.png"
                                alt="Grupo Formulario"
                                width={800}
                                height={800}
                                className="absolute"
                            />
                        </div>

                        <Image
                            src="/Trama esfera celeste.png"
                            alt="Trama Formulario"
                            width={500}
                            height={450}
                            className="xl:translate-y-20 xl:translate-x-20 max-xl:w-[260px] max-xl:translate-y-11 max-xl:translate-x-11  animate-spin  [animation-direction:reverse] [animation-duration:90s]"
                        />
                    </div>
                    <div className="mt-80 custom-contact-form max-xl:-translate-x-15 max-xl:mt-120 max-lg:mt-0 max-lg:mr-70 max-md:mr-60 max-sm:mr-0 max-sm:ml-5 max-lg:mb-40 max-sm:mb-20">
                        <a href="mailto:info@rombux.com">
                            <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[20px] mb-12 2xl:text-[24px] 2xl:font-normal 2xl:leading-[28px]">
                                <span className="text-[#707070]">Email:</span>{" "}
                                <span className="text-[#D81FB9]">info@rombux.com</span>
                            </p>
                        </a>

                        <div className="w-full text-[#707070]">
                            <h3 className="text-[20px] leading-[28px] font-semibold mb-4 2xl:font-bold 2xl:text-[24px] 2xl:leading-[28px]">
                                Oficina:
                            </h3>
                            <p className="text-[18px] leading-[28px] font-normal">
                                Lezica 4363,
                                <br />
                                Ciudad de Buenos Aires
                                <br />
                                (1202AAI) Argentina
                            </p>
                        </div>

                        <div className="mt-10 max-md:hidden">
                            <Image
                                src="/logoin.png"
                                alt="Logo institucional"
                                width={46}
                                height={46}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
