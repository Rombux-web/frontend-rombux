import React from "react";

export default function BrandingCards() {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto px-[143px] pt-[135px] mb-52">
            <div className="mb-24 text-center -mt-[140px] ml-[15px]">
                <h1 className="font-light text-black text-[120px] leading-[120px]">
                    Estrategias de conexión y<br />
                    adquisición de clientes
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mb-[120px]">
                <div
                    className="mt-[109px] w-[522px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center px-10 -ml-[6px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "287px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pl-[7px]">
                        Programas de conversión y
                        <br />
                        performance para adquirir y
                        <br />
                        fidelizar clientes, mediante
                        <br />
                        automatización y CRM.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center w-[522px] text-white rounded-[29px] overflow-hidden flex items-center justify-center px-10 mt-[36px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "434px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pr-[9px]">
                        Campañas de alto impacto
                        <br />
                        y contenido estratégico,
                        <br />
                        desde SEO y SEM hasta
                        <br />
                        marketing de contenidos,
                        <br />
                        con un ROI medible, tests
                        <br />
                        A/B y dinámicas de
                        <br />
                        iteración rápida.
                    </p>
                </div>

                <div
                    className="mt-[61px] w-[522px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-center justify-center px-10 ml-[5px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "383px" }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pr-[11px]">
                        Estrategias 360° y ejecución
                        <br />
                        multicanal a la medida de
                        <br />
                        cada negocio. Combinando
                        <br />
                        Paid Media, Redes Sociales,
                        <br />
                        Mailing, Retención, Data
                        <br />
                        Analytics, Growth Marketing.
                    </p>
                </div>
            </div>
        </div>
    );
}
