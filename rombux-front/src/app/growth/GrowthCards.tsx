import React from "react";

export default function GrowthCards() {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto pt-[135px]">

            <div className="mb-24 text-center -mt-[92px] ml-[15px]">
                <h1 className="font-light text-black text-[120px] leading-[120px]">
                    Crecimiento y <br />
                    posicionamiento de mercado
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 px-[137px] mb-[88px]">
                <div
                    className="mt-[62px] w-[522px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center px-10 py-12"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "381px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pl-[5px]">
                        Expansión inteligente y
                        <br />
                        sostenible. Diseñamos e
                        <br />
                        implementamos estrategias
                        <br />
                        para expandir tu cuota de
                        <br />
                        mercado y consolidar tu
                        <br />
                        posición de liderazgo.
                    </p>
                </div>

                <div
                    className="mt-[76px] w-[522px] mb-[80px] relative -top-[40px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center px-10 ml-[2px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "434px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pr-[21px]">
                        Growth Strategy - Growth
                        <br />
                        Loops y Optimización de
                        <br />
                        Funnels. Embudos de
                        <br />
                        conversión inteligentes y
                        <br />
                        loops de crecimiento que
                        <br />
                        activan y retienen a tus
                        <br />
                        usuarios.
                    </p>
                </div>

                <div
                    className="mt-[62px] w-[522px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center px-8 ml-[3px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "382px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pr-[5px]">
                        Optimización continua. Nos
                        <br />
                        enfocamos en identificación
                        <br />
                        de oportunidades de
                        <br />
                        crecimiento escalables y en la
                        <br />
                        mejora constante de tu
                        <br />
                        presencia en el mercado.
                    </p>
                </div>
            </div>
        </div>
    );
}
