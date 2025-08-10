import React from 'react'

function FormSections() {
    return (
        <div className="relative z-10 mt-[107px] flex flex-col items-center max-sm:mt-[60px]">
            <h2 className="text-white text-[32px] leading-[36px] text-center max-sm:text-[38px]">¿Conectamos?</h2>
            <form className="mt-[56px] flex flex-col space-y-[25px] items-center max-sm:mt-[45px] ">
                {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map((placeholder, idx) => (
                    <input
                        key={idx}
                        type="text"
                        placeholder={placeholder}
                        className="w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-sm:w-[336px] max-sm:pl-4"
                    />
                ))}
                <div className="w-[638px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-6 space-y-8 bg-white mt-8 max-sm:w-[336px] max-sm:space-y-6 max-sm:pl-3 max-sm:mt-2 max-sm:pt-[15px]">
                    <p className="text-[16px] font-medium text-black mb-[26px] leading-[24px] tracking-normal max-sm:text-[18px]">
                        Área/s de servicios requeridos*
                    </p>
                    {[
                        { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
                        { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
                        { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
                        { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
                        { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
                    ].map(({ bold, rest }, idx) => (
                        <label key={idx} className="flex items-start space-x-[27px] text-[16px] text-black        -mt-[2px] max-sm:leading-[16px] max-sm:space-x-[15px] ">
                            <input
                                type="checkbox"
                                className="w-[25px] h-[25px] border-2 border-gray-400 rounded-md appearance-none bg-white max-sm:w-[23px] max-sm:h-[23px]
                                checked:after:content-['✔'] checked:after:text-[#D81FB9] checked:after:text-lg
                                checked:after:flex checked:after:items-center checked:after:justify-center
                                checked:after:w-full checked:after:h-full"
                            />
                            <span className='max-sm:text-[14px] max-sm:w-[262px]'>
                                <strong className="font-semibold">{bold}</strong>
                                {rest}
                            </span>
                        </label>
                    ))}
                </div>
                <div className="w-[638px] h-[212px] border border-[#707070] rounded-[5px] p-3 bg-white mt-8 max-sm:w-[336px] max-sm:h-[113px] max-sm:mt-2">
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        className="w-full h-full pl-4 pt-[3px] text-[16px] font-bold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent max-sm:pl-1"
                        placeholder="¿Por qué tema nos consultas?*"
                    />
                </div>
                <div className="w-[638px] flex justify-start max-sm:w-full max-sm:justify-center">
                    <button
                        type="submit"
                        className="bg-[#D81FB9] text-white text-[18px] font-semibold h-[46px] w-[186px] rounded-[50px] mt-[29px] mb-[40px] max-sm:mb-0"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div >
    )
}

export default FormSections