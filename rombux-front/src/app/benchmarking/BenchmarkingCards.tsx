import React from "react";

export default function BenchmarkingCards() {
    return (
        <div className="relative w-[1670px] mx-auto  ">
            {/* Título */}
            <div className="mb-24 text-center mt-[2px] ml-[15px]">
                <h1 className="font-light text-black text-[120px] leading-[120px] ">
                    Análisis del negocio y <br />
                    propuesta de valor diferencial
                </h1>
            </div>

            <div className="grid grid-cols-3 pt-[51px] ml-[22px] mb-[167px]">
                <div
                    className="relative top-[40px] w-[522px] h-[388px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center  pt-17 pb-10"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '388px' }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left -ml-[6px]">
                        ¿Dónde estás y a dónde
                        <br />
                        puedes llegar? Estudiamos
                        <br />
                        tu posición en el mercado e
                        <br />
                        identificamos oportunidades
                        <br />
                        mediante un benchmarking
                        <br />
                        estratégico.
                    </p>
                </div>

                <div
                    className="relative top-[63px] left-1 w-[522px] h-[341px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-14 pb-10"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '341px' }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left mt-[10px] mr-4">
                        El valor clave de tu empresa.
                        <br />
                        Definimos lo que hace única
                        <br />
                        a tu oferta frente a la
                        <br />
                        competencia y preferente
                        <br />
                        para el público consumidor.
                    </p>
                </div>

                <div
                    className="bg-cover bg-center w-[522px] h-[474px] text-white rounded-[29px] overflow-hidden flex items-start justify-center pt-12 pb-10 ml-[22px] -mt-[2px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '474px' }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left -ml-[15px] mt-5">
                        Inteligencia competitiva.
                        <br />
                        Transformamos ese valor
                        <br />
                        distintivo en un diseño
                        <br />
                        atractivo, una comunicación
                        <br />
                        impactante y una estrategia
                        <br />
                        sólida para asegurar tu
                        <br />
                        liderazgo en el espacio
                        <br />
                        virtual.
                    </p>
                </div>
            </div>
        </div>
    );
}

