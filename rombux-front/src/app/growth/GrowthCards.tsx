import React from "react";

export default function GrowthCards() {
    return (
        <div>
            <div className="mb-24 text-center -mt-[140px] ml-[15px] max-sm:ml-0 max-sm:mb-8">
                <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px] max-lg:leading-[40px] max-sm:px-4">
                    Crecimiento y <br />
                    posicionamiento de mercado
                </h1>
            </div>

            <div className="grid grid-cols-3 max-md:grid-cols-1 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px] max-md:gap-y-7 max-sm:mb-[80px]">
                <div
                    className="relative top-[30px] w-[427px] h-[218px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center  max-xl:w-[292px] max-xl:mt-2  max-xl:h-[207px] max-lg:max-w-[230px] max-lg:h-[212px] max-md:max-w-[292px] max-md:top-0 max-sm:mt-0 max-md:h-[190px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left -ml-[2px] py-10 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7 max-lg:text-[16px] max-lg:pl-2 max-lg:max-w-[200px] max-lg:pt-5 max-md:max-w-[239px] max-md:ml-2 max-md:pl-0">
                        Expansión inteligente y sostenible. Diseñamos e implementamos estrategias para expandir tu cuota de mercado y consolidar tu posición de liderazgo.
                    </p>
                </div>

                <div
                    className="relative top-[30px] left-1 w-[427px] h-[218px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center max-xl:w-[302px] max-xl:h-[228px] max-lg:max-w-[230px] max-lg:h-[215px] max-lg:mt-2 max-md:max-w-[292px] max-md:top-0 max-md:left-0 max-md:mt-0 max-md:h-[195px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left py-10 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7  max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-5 max-lg:pl-2 max-md:max-w-[239px] max-md:ml-2 max-md:pl-0">
                        Growth Strategy - Growth Loops y Optimización de Funnels. Embudos de conversión inteligentes y loops de crecimiento que activan y retienen a tus usuarios.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center w-[427px] h-[218px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] mt-[30px] max-xl:w-[292px]  max-xl:mt-[39px] max-xl:h-[207px] max-lg:max-w-[230px] max-lg:h-[236px] max-md:max-w-[292px] max-md:mt-0 max-md:ml-0 max-md:h-[195px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left py-10 max-w-[357px] max-xl:max-w-[259px] mx-auto max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7 max-xl:pl-1 max-lg:pl-2 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-[19px] max-md:max-w-[239px] max-md:pl-1">
                        Optimización continua. Nos enfocamos en identificación de oportunidades de crecimiento escalables y en la mejora constante de tu presencia en el mercado.
                    </p>
                </div>
            </div>
        </div>
    );
}
