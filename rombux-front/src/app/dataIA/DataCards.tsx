import React from "react";

export default function DataCards() {
    return (
        <div>
            <div className="mb-24 text-center -mt-[140px] ml-[15px] max-md:ml-0 max-sm:mb-8">
                <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px] max-lg:leading-[40px] max-sm:px-5">
                    Información estratégica <br className="md:hidden" /> para <br className="max-sm:hidden" />
                    la toma de decisiones
                </h1>
            </div>

            <div className="grid grid-cols-3 max-md:grid-cols-1 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px] max-md:gap-y-7 max-sm:mb-[80px]">
                <div
                    className="relative top-[40px] w-[427px] h-[218px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center max-xl:mt-3 max-xl:w-[292px] max-xl:h-[207px] max-lg:max-w-[230px] max-lg:h-[240px] max-md:h-[170px] max-md:max-w-[292px] max-md:top-0 max-md:mt-0"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left -ml-[6px] py-10 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7 max-lg:text-[16px] max-lg:pl-2 max-lg:max-w-[190px] max-md:max-w-[239px] max-lg:pt-5 max-md:ml-2 max-md:pl-0">
                        Los datos son las claves de tu crecimiento. Implementamos una cultura data-driven para optimizar tu posicionamiento y potenciar tus capacidades.
                    </p>
                </div>

                <div
                    className="relative top-[40px] left-1 w-[427px] h-[218px]  bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center  max-xl:w-[292px] max-xl:h-[228px] max-lg:max-w-[230px] max-lg:h-[240px] max-lg:top-[50px] max-md:h-[190px] max-md:max-w-[292px] max-md:top-0 max-md:left-0"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left py-10 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pl-2 max-md:max-w-[239px] max-lg:pt-5 max-md:ml-2 max-md:pl-0">
                        Decisiones basadas en insights. Transformamos los datos en conocimientos de valor accionables, que te permiten tomar decisiones informadas y con alto impacto.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center w-[427px] h-[303px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] max-xl:w-[292px] max-xl:mt-3 max-xl:h-[280px] max-lg:max-w-[230px] max-lg:h-[340px] max-md:h-[240px] max-md:max-w-[292px] max-md:ml-0 max-md:mt-0"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left py-10 max-w-[351px] max-xl:max-w-[259px] mx-auto max-xl:text-[18px] max-xl:leading-[25px] max-xl:pl-2 max-xl:py-7 max-lg:text-[16px] max-lg:max-w-[200px] max-md:max-w-[239px] max-lg:pt-5 max-md:pl-1">
                        El poder de la IA en tu empresa. Aplicamos IA para automatizar procesos, optimizar campañas,
                        predecir comportamientos y personalizar la experiencia de tus consumidores, logrando una performance superior que te coloca a la vanguardia.
                    </p>
                </div>
            </div>
        </div>
    );
}

