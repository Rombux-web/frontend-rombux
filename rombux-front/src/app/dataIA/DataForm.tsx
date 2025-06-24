import React from "react";
import Image from "next/image";

export default function DataForm() {
    return (
        <section
            className="relative w-full h-[3218px] bg-cover bg-center flex flex-col items-center"
            style={{ backgroundImage: "url('/Gradiente-Home-5.png')" }}
        >
            <div className="mt-[267px] w-[1393px] h-[221px] flex flex-col items-center justify-center ml-4">
                <h2 className="font-medium text-[120px] leading-[120px] text-center text-white">
                    Data + IA:
                </h2>
                <p className="font-light text-[120px] leading-[120px] text-center text-white">
                    orientado a resultados
                </p>
            </div>

            <div className="mt-[21px] w-[1145px] h-[144px] flex items-center justify-center ml-4">
                <p className="font-medium text-[40px] leading-[48px] text-center text-white">
                    Somos un grupo de profesionales especializados en escalar<br />
                    empresas y startups, unidos bajo una misma cultura: lograr el<br />
                    liderazgo desde una sólida propuesta de valor.
                </p>
            </div>
            <div className="mt-[75px] relative w-[710px] h-[164px] ml-3">
                <Image
                    src="/Rectangle 38.png"
                    alt="Fondo"
                    fill
                    className="object-cover rounded-[5px]"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center px-[40px] text-white gap-[20px]">
                    <div className="relative w-[145px] h-[145px] ">
                        <Image
                            src="/Ellipse 10.png"
                            alt="Avatar"
                            fill
                            className="rounded-full object-cover ml-[-20px]"
                        />
                        <Image
                            src="/logoin.png"
                            alt="Logo In"
                            width={40}
                            height={40}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 ml-[40px]"
                        />
                    </div>

                    <div>
                        <p className="font-bold text-[36px] leading-[30px] tracking-[0]">Nombre y Apellido</p>
                        <p className="font-normal text-[24px] leading-[30px] tracking-[0]">Data & IA Lead</p>
                    </div>
                </div>
            </div>

            <div className="absolute top-[728px] left-[1429px] z-0">
                <Image
                    src="/Trama-esfera-fucsia.png"
                    alt="Trama fucsia pequeña"
                    width={275}
                    height={275}
                    className="rotate-180"
                />
            </div>

            <div className="absolute top-[944px] left-[56px] z-0">
                <Image
                    src="/Trama-esfera-fucsia.png"
                    alt="Trama fucsia grande"
                    width={503}
                    height={503}
                    className="rotate-180"
                />
            </div>

            <div className="relative z-10 mt-[220px] ml-[214px] flex">
                <div>

                    <div className="w-[884px] flex justify-center">
                        <h3 className="text-white text-[64px] font-light leading-[64px] text-center">
                            ¿Conectamos?
                        </h3>
                    </div>

                    <form className="mt-[76px] flex flex-col space-y-[42px] pb-[86px]">
                        {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
                            <input
                                key={idx}
                                type="text"
                                placeholder={placeholder}
                                className="w-[884px] h-[78px] border border-[#707070] rounded-[5px]  font-semibold text-[28px] leading-[32px] placeholder:text-gray-500 text-[#4B4B4B] bg-white pl-[32px]"
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
                            className="bg-[#D81FB9] text-white text-[32px] font-semibold h-[78px] w-[306px] rounded-[50px] mt-[23px] mb-[40px]"
                        >
                            Enviar
                        </button>
                    </form>

                    <div className="w-full flex justify-center mt-[43px] mb-1">
                        <div className="w-[1235px] flex justify-between items-start ml-[-150px]">
                            <div className="flex flex-col items-center">
                                <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className="rounded-lg" />
                                <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
                                    Agenda una reunión
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className="rounded-lg" />
                                <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
                                    Envíanos un mensaje
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image src="/Chat.gif" alt="Chat" width={64} height={64} className="rounded-lg" />
                                <div className="mt-[24px] w-[203px] text-center text-white text-[24px] leading-[24px]">
                                    Chatea con Romy, nuestro agente IA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

