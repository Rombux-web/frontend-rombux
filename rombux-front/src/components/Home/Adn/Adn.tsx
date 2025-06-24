"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Adn() {
    return (
        <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white flex flex-col items-center pt-[196px]">

            <div className="w-[1219px] h-[221px] mx-auto mt-[64px] text-center tracking-normal leading-[120px] ">
                <h1 className="text-[120px] leading-[120px] font-medium text-shadow-md">Rombux/ADN:</h1>
                <h2 className="text-[120px] leading-[120px] font-light mt-[2px]">orientado a resultados</h2>
            </div>
            <p className="text-[40px] font-medium text-center w-[1165px] h-[144px]  mt-[30px] mb-[64px] leading-[48px]">
                Somos un grupo de profesionales especializados en escalar<br />
                empresas y startups, unidos bajo una misma cultura: lograr el<br />
                liderazgo desde una sólida propuesta de valor.
            </p>
            <div className="relative w-[1708px] h-[691px] mx-auto">
                <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 ">
                    <Link href="/about_us">
                        <button
                            type="submit"
                            className="bg-[#D81FB9] text-white text-[32px] font-bold h-[72px] w-[306px] rounded-[50px] shadow-2xl cursor-pointer"
                        >
                            Conócenos
                        </button>
                    </Link>
                </div>
                <Image
                    src="/group182.png"
                    alt="Esfera Izquierda"
                    width={541}
                    height={541}
                    className="absolute top-[150px] left-0 object-contain"
                />
                <Image
                    src="/group182.png"
                    alt="Esfera Derecha"
                    width={299}
                    height={299}
                    className="absolute top-0 right-0 object-contain"
                />
            </div>
            <div className="pt-[70px] pb-[55px]">
                <p className="text-[64px] leading-[64px] font-normal w-[446px] h-[59px] mx-auto text-center">
                    ¿Conectamos?
                </p>
            </div>

            <div className="w-full flex justify-center mt-[64px] mb-[80px] ml-5">
                <div className="w-[1235px] flex justify-between items-start">

                    <div className="flex flex-col items-center">
                        <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className='rounded-lg' />
                        <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
                            Agenda una reunión
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className='rounded-lg' />
                        <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
                            Envíanos un mensaje
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/Chat.gif" alt="Chat" width={64} height={64} className='rounded-lg' />
                        <div className="mt-[24px] w-[203px] text-center text-white text-[24px] leading-[24px]">
                            Chatea con Romy, nuestro agente IA
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
