import React from "react";

export default function BrandingCards() {
    return (
        <div>
            <div className="mb-24 text-center -mt-[152px] ml-[15px] max-sm:ml-0 max-sm:mb-8">
                <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px] max-lg:leading-[40px] max-sm:px-4">
                    Desarrollo de identidad e<br />
                    imagen de producto
                </h1>
            </div>

            <div className="grid grid-cols-3 max-md:grid-cols-1 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px] max-md:gap-y-7 max-sm:mb-[80px]">
                <div
                    className="relative top-[40px] w-[427px] h-[218px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center pt-6 max-xl:h-[212px] max-xl:mt-2 max-xl:w-[292px] max-lg:max-w-[230px] max-lg:h-[200px] max-md:max-w-[292px] max-md:top-0 max-md:h-[170px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left -ml-[2px] pt-5 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-2 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pl-2 max-lg:pt-0 max-md:max-w-[239px] max-md:ml-2 max-md:pl-0">
                        La identidad digital, tu mayor activo. Diseñamos e instalamos tu marca en el ámbito virtual apelando a los diferenciales de tu propuesta de valor.
                    </p>
                </div>

                <div
                    className="relative top-[30px] left-1 w-[427px] h-[238px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-6 mt-[2px]  max-2xl:mt-1 max-xl:w-[292px] max-lg:max-w-[230px] max-2xl:h-[233px]  max-xl:h-[236px] max-lg:h-[270px] max-md:max-w-[292px] max-md:top-0 max-md:left-0 max-md:h-[222px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left pt-3 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-2 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pl-2 max-lg:pt-0 max-md:max-w-[239px] max-md:ml-2">
                        Identidades y narrativas que conectan con tu audiencia. Generamos impacto positivo y una sólida reputación, percepción de confianza y lealtad hacia tu empresa y oferta en el mercado.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center w-[427px] h-[243px] text-white rounded-[29px] overflow-hidden flex items-start justify-center ml-[22px] mt-[30px] max-xl:h-[258px] max-xl:mt-[22px] max-xl:p-2 max-xl:w-[292px] max-lg:h-[264px] max-lg:mt-[34px] max-lg:max-w-[230px] max-lg:p-0 max-md:max-w-[292px] max-md:mt-0 max-md:ml-0 max-md:h-[252px]"
                    style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
                >
                    <p className="text-[20px] leading-[28px] text-left pt-[39px] max-w-[351px] max-xl:max-w-[259px] mx-auto max-xl:text-[18px] max-2xl:pl-2 max-xl:leading-[25px] max-xl:pt-6 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-5 max-md:pt-7 max-md:max-w-[239px] max-md:pl-3 ">
                        Tu presencia online, sólida y eficiente Construimos tus activos digitales en base a los criterios de tu marca, la experiencia del usuario, interfaces atractivas y capacidades tecnológicas avanzadas.
                    </p>
                </div>
            </div>
        </div>
    );
}

