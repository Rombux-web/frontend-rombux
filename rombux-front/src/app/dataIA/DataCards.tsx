import React from "react";

export default function DataCards() {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto pt-[135px]">
            <div className="mb-24 text-center -mt-[140px] ml-[15px]">
                <h1 className="font-light text-black text-[120px] leading-[120px]">
                    Información estratégica para <br />
                    la toma de decisiones
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 px-[137px] mb-[121px]">
                <div
                    className="relative w-[522px] top-[82px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-start justify-center px-10 pt-[65px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '381px' }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pl-[5px]">
                        Los datos son las claves de
                        <br />
                        tu crecimiento.
                        <br />
                        Implementamos una cultura
                        <br />
                        data-driven para optimizar
                        <br />
                        tu posicionamiento y
                        <br />
                        potenciar tus capacidades.
                    </p>
                </div>

                <div
                    className="mt-[56px] w-[522px] relative  bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-start justify-center px-10 pt-[70px] pb-10 ml-[2px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '434px' }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pl-[5px]">
                        Decisiones basadas en
                        <br />
                        insights. Transformamos los
                        <br />
                        datos en conocimientos de
                        <br />
                        valor accionables, que te
                        <br />
                        permiten tomar decisiones
                        <br />
                        informadas y con alto
                        <br />
                        impacto.
                    </p>
                </div>

                <div
                    className="mt-[-12px] w-[522px] bg-cover bg-center text-white rounded-[29px] overflow-hidden flex items-start justify-center px-10 py-[75px] ml-[3px]"
                    style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '569px' }}
                >
                    <p className="font-medium text-[32px] leading-[42px] text-left pl-[17px]">
                        El poder de la IA en tu
                        <br />
                        empresa. Aplicamos IA para
                        <br />
                        automatizar procesos,
                        <br />
                        optimizar campañas,
                        <br />
                        predecir comportamientos y
                        <br />
                        personalizar la experiencia
                        <br />
                        de tus consumidores,
                        <br />
                        logrando una performance
                        <br />
                        superior que te coloca a la
                        <br />
                        vanguardia.
                    </p>
                </div>
            </div>
        </div>
    );
}

