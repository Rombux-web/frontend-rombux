import React from "react";
import Image from "next/image";


export default function Formulario() {
    return (
        <div className="flex ml-[140px] mt-[40px] pt-[100px] gap-[60px]">
            <div>
                <h1 className="text-black text-[120px] w-[1192px] leading-[120px] font-light mb-[105px]">
                    Te acompañamos en
                    <br />
                    tu desarrollo digital
                </h1>

                <h2 className="text-[#D81FB9] text-[60px] w-[351px] font-normal leading-[60px] mt-[30px]">
                    Contáctanos
                </h2>

                <form className="mt-[35px] flex flex-col space-y-[42px] pb-[86px]">
                    {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
                        <input
                            key={idx}
                            type="text"
                            placeholder={placeholder}
                            className="w-[884px] h-[78px] border-[1px] border-[#707070] rounded-[5px] pl-[32px] font-semibold text-[28px] leading-[32px] tracking-normal placeholder:text-gray-500 text-[#4B4B4B]"

                        />
                    ))}

                    <div className="w-[884px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-8 space-y-4 bg-white">
                        <p className="text-[28px] font-semibold text-gray-500 mb-[26px]  leading-[28px] tracking-normal">
                            Área/s de servicios requeridos*
                        </p>

                        {[
                            { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
                            { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
                            { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
                            { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
                            { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
                        ].map(({ bold, rest }, idx) => (
                            <label
                                key={idx}
                                className="flex items-start space-x-[47px] text-[24px]   text-gray-500 -mt-[2px]"
                            >
                                <input
                                    type="checkbox"
                                    className=" w-[38px] h-[35px] border-2 border-gray-500 rounded-md appearance-none bg-white checked:bg-[#D81FB9]"
                                />

                                <span>
                                    <strong className="font-semibold">{bold}</strong>
                                    {rest}
                                </span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[884px] h-[270px] border border-[#707070] rounded-[5px] p-4 bg-white">
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            required
                            className="w-full h-full pl-4 pt-[3px] text-[28px] font-semibold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
                            placeholder="Mensaje*"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#D81FB9] text-white text-[32px] font-semibold h-[78px] w-[306px] rounded-[50px] mt-[23px] mb-[166px]"
                    >
                        Enviar
                    </button>
                </form>
            </div>

            <div className="relative w-[650px] mt-[431px] ml-[-157px] overflow-visible">
                <Image
                    src="/Grupo 1 esfera.png"
                    alt="Grupo Formulario"
                    width={545}
                    height={545}
                    
                />
                <Image
                    src="/Trama esfera celeste.png"
                    alt="Trama Formulario"
                    width={615}
                    height={615}
                    className="absolute top-[-35px] left-[-35px] pointer-events-none animate-spin [animation-direction:reverse] [animation-duration:150s]"
                />
            </div>
        </div>
    );
}
