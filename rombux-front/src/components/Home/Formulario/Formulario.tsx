import React from "react";
import Image from "next/image";


export default function Formulario() {
    return (
        <div className="flex ml-[140px] mt-[40px] pt-[100px] gap-[60px]">
            <div>
                <h1 className="text-black text-[110px] w-[1192px] leading-[120px] font-light mb-[120px]">
                    Te acompañamos en
                    <br />
                    tu desarrollo digital
                </h1>

                <h2 className="text-[#D81FB9] text-[60px] w-[351px] font-normal leading-[60px] mt-[30px]">
                    Contáctanos
                </h2>

                <form className="mt-[40px] flex flex-col space-y-6 pb-[86px]">
                    {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
                        <input
                            key={idx}
                            type="text"
                            placeholder={placeholder}
                            className="w-[884px] h-[78px] border rounded-[5px] px-4 font-bold text-[28px] leading-[32px] tracking-normal placeholder:text-gray-500 text-[#4B4B4B]"
                            style={{ borderColor: "#70707070" }}
                        />
                    ))}

                    <div
                        className="w-[884px] border rounded-[5px] p-6 space-y-4"
                        style={{ borderColor: "#70707070" }}
                    >
                        <p className="text-[28px] font-semibold text-[#4B4B4B] mb-2 py-[30px] leading-[28px] tracking-normal">
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
                                className="flex items-start space-x-3 text-[24px] text-[#4B4B4B]"
                            >
                                <input
                                    type="checkbox"
                                    className="mt-[3px] w-5 h-5 accent-[#D81FB9]"
                                />
                                <span>
                                    <strong className="font-semibold">{bold}</strong>
                                    {rest}
                                </span>
                            </label>
                        ))}
                    </div>
                    <div
                        className="w-[884px] h-[270px] border rounded-[5px] p-6"
                        style={{ borderColor: "#70707070" }}
                    >
                        <label htmlFor="mensaje" className=" block text-sm mb-2">
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            required
                            className="w-full h-full p-2 text-[28px] font-bold  placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
                            placeholder="Mensaje*"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#D81FB9] text-white text-[32px] font-bold h-[78px] w-[250px] rounded-[50px] mt-[12px] mb-[40px]"
                    >
                        Enviar
                    </button>
                </form>
            </div>

            <div className="relative w-[500px] h-[500px] mt-[450px] ml-[-270px]">
                <Image
                    src="/Grupo 1 esfera.png"
                    alt="Grupo Formulario"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
