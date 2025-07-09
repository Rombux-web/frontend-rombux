export default function FormularioEmail() {
    return (
        <div className="flex flex-col w-full max-w-[507px] text-white -mt-[323px] -ml-[5px]">
            <h3 className="text-[20px] font-normal leading-[28px] mb-11">
                ¡Anótate ahora y participa de un sorteo con
                <br />
                importantes beneficios para tu próxima campaña!
            </h3>

            <div className="flex flex-col w-full">
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border rounded-md border-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[16px] leading-[24px] py-2 pl-[23px] h-[48px] w-[404px] text-white mb-[9px]"
                />
                <button
                    type="submit"
                    className="bg-white text-[18px] leading-[28px] font-bold h-[46px] w-[186px] rounded-[56px] mt-10"
                    style={{ color: '#19B7CC' }}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}
