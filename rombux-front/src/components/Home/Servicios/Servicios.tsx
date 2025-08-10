"use client";

import Image from "next/image";
import ServicioItem from "./ServiciosItem";
import Enfoque from "../Enfoque/Enfoque";

export default function Servicios() {
    return (
        <div>
            <div className="w-[911px] ml-[293px] mt-[149px] max-xl:ml-[80px] max-2xl:ml-[120px] max-md:ml-5 max-md:mt-[85px] max-lg:w-[400px] max-md:w-[285px] max-sm:ml-8">
                <h2 className="text-[#D81FB9] text-[80px] leading-[80px] max-xl:text-[70px] max-xl:leading-[70px] max-lg:text-[55px] max-lg:leading-[55px] max-md:text-[40px] max-lg:leading-[40px] max-lg:w-[200px] ">Servicios</h2>
                <h3 className="text-black text-[48px] leading-none pt-[26px] max-xl:text-[36px] max-xl:leading-[36px] max-xl:w-[543px]  max-lg:text-[30px] max-lg:leading-[30px]  max-md:text-[25px] max-md:leading-[25px] max-md:pt-3 max-md:font-light max-sm:w-[285px]">
                    Soluciones híperpersonalizadas <br className="block md:hidden lg:block" />para tu empresa
                </h3>
            </div>

            <div className="flex items-start  max-xl:justify-center  max-xl:gap-x-20 max-lg:flex-col-reverse max-lg:ml-20 max-lg:items-center max-md:ml-0">
                <div className="flex justify-center pl-17 -mt-[54px] pr-[94px] max-2xl:pr-0 max-2xl:pl-0 max-lg:w-0 max-lg:h-0 ">
                    <div className="relative w-[700px] h-[630px] overflow-visible mt-34 max-2xl:w-[600px] max-2xl:mt-10 max-xl:w-[450px] ">

                        <div className="relative ml-[76px] w-[725px] max-2xl:w-[580px] max-xl:-ml-[60px] max-xl:w-[480px] h-[725px] flex justify-center items-center -mt-[76px] max-xl:-mt-[110px] max-lg:hidden">
                            <div className="w-[1000px] h-[1000px]">
                                <Image
                                    src="/man2.png"
                                    alt="Fondo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </div>
                            <div className="absolute top-1/2 left-1/2 w-[580px] max-2xl:w-[435px] max-xl:w-[335px] h-[510px] -translate-x-1/2 -translate-y-1/2 z-10 animate-spin [animation-duration:90s]">
                                <Image
                                    src="/redfucsia.png"
                                    alt="Decoración giratoria"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col w-[520px] ml-[69px] mr-5 max-2xl:ml-[100px] mt-[169px]  text-black max-2xl:w-[557px] max-2xl:mt-[80px] max-xl:w-[490px] max-xl:-ml-30 max-lg:mr-10 max-lg:-ml-0 max-md:mx-2 max-md:w-[500px] max-sm:items-center max-sm:w-full  ">
                    <ServicioItem
                        title="Benchmarking"
                        icon="/diamante.png"
                        description="Descubre y proyecta tu valor único."
                        link="/benchmarking"
                    />
                    <ServicioItem
                        title="Branding"
                        icon="/pincel.png"
                        description="Construye una marca con impacto y reputación."
                        link="/branding"
                    />
                    <ServicioItem
                        title="Marketing Digital"
                        icon="/dardo.png"
                        description="Conecta con tu público allí donde está y desata el potencial único de tu marca."
                        link="/marketing"
                    />
                    <ServicioItem
                        title="Growth"
                        icon="/money.png"
                        description="Escala tu negocio y consolida tu liderazgo."
                        link="/growth"
                    />
                    <ServicioItem
                        title="Data+IA"
                        icon="/cerebro.png"
                        description="Dirige tu expansión con información clave y conocimiento predictivo."
                        link="/dataia"
                    />
                </div>
            </div>
            <div>
                <Enfoque />
            </div>
        </div>
    );
}
