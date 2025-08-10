import React from "react";

export default function BenchmarkingCards() {
    return (
        <div>
            <div className="mb-2 text-center mt-[2px] max-sm:mb-8">
                <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px] max-lg:leading-[40px]">
                    Análisis del negocio <br className="sm:hidden max-sm:inline" /> y <br className="max-2xl:hidden max-xl:inline max-sm:hidden " /> propuesta de<br className="max-xl:hidden" />
                    valor diferencial
                </h1>
            </div>

            <div className="grid grid-cols-3 max-md:grid-cols-1 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px] max-md:gap-y-7 max-sm:mb-[80px] 2xl:gap-x-10 xl:gap-x-5">

                <div
                    className="relative top-[40px] w-[427px] h-[218px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center max-xl:h-[207px] pt-6 max-xl:w-[292px] max-lg:max-w-[230px] max-lg:h-[219px] max-lg:mt-1 max-md:max-w-[292px] max-md:top-0 max-md:h-[170px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left -ml-[3px] pt-4 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-2 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0 max-md:max-w-[239px] max-md:ml-2">
                        ¿Dónde estás y a dónde puedes llegar? Estudiamos tu posición en el mercado e identificamos oportunidades mediante un benchmarking estratégico.
                    </p>
                </div>

                <div
                    className="relative top-[55px] w-[427px] h-[189px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-6 max-xl:h-[185px] max-xl:w-[292px] max-lg:max-w-[230px] max-lg:h-[200px] max-md:max-w-[292px] max-md:top-0 max-md:h-[175px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left pt-4 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-2 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pb-2 max-lg:pt-1 max-md:max-w-[239px] max-md:ml-2">
                        El valor clave de tu empresa. Definimos lo que hace única a tu oferta frente a la competencia y preferente para el público consumidor.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center w-[427px] h-[243px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  max-xl:ml-[27px] mt-[25px] max-xl:w-[300px] max-xl:h-[253px] max-lg:max-w-[230px] max-lg:mr-4 max-md:max-w-[292px] max-md:mt-0 max-md:ml-0 max-md:mr-0 max-md:h-[225px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left pt-9 max-w-[351px] max-xl:max-w-[239px] mx-auto max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-7 max-lg:text-[16px] max-lg:max-w-[200px] max-md:max-w-[239px] max-lg:pt-6 max-md:pl-1 ">
                        Inteligencia competitiva. Transformamos ese valor distintivo en un diseño atractivo, una comunicación impactante y una estrategia sólida para asegurar tu liderazgo en el espacio virtual.
                    </p>

                </div>
            </div>
        </div>
    );
}

