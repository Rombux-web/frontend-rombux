import React from "react";

export default function BrandingCards() {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto px-[143px] pt-[135px]">

            <div className="mb-24 text-center -mt-[152px] ml-[15px]">
                <h1 className="font-light text-black text-[120px] leading-[120px] ">
                    Desarrollo de identidad e<br />
                    imagen de producto
                </h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mb-[165px]">
                <div
                    className="mt-[91px] w-[522px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center -ml-[6px] py-12"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "388px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pr-[7px]">
                        La identidad digital, tu
                        <br />
                        mayor activo. Diseñamos e
                        <br />
                        instalamos tu marca en el
                        <br />
                        ámbito virtual apelando a los
                        <br />
                        diferenciales de tu
                        <br />
                        propuesta de valor.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center px-10 mt-[45px] w-[522px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "480px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pr-[6px]">
                        Identidades y narrativas que
                        <br />
                        conectan con tu audiencia.
                        <br />
                        Generamos impacto
                        <br />
                        positivo y una sólida
                        <br />
                        reputación, percepción de
                        <br />
                        confianza y lealtad hacia tu
                        <br />
                        empresa y oferta en el
                        <br />
                        mercado.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center mt-12 w-[522px] ml-[5px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "474px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pr-[15px]">
                        Tu presencia online, sólida y
                        <br />
                        eficiente. Construimos tus
                        <br />
                        activos digitales en base a
                        <br />
                        los criterios de tu marca, la
                        <br />
                        experiencia del usuario,
                        <br />
                        interfaces atractivas y
                        <br />
                        capacidades tecnológicas
                        <br />
                        avanzadas.
                    </p>
                </div>
            </div>
        </div>
    );
}

