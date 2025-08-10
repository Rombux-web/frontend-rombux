import React from 'react';
import Image from 'next/image';

function BotonesCirculares() {
    return (
        <div className="w-full flex justify-center mt-[60px] mb-[80px]">
            <div className="flex flex-wrap justify-center items-start text-black max-lg:flex-col max-lg:items-center max-lg:space-y-[64px]">
                
                <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-center px-2">
                    <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className="rounded-lg" />
                    <div className="mt-[16px] max-lg:mt-[8px] font-medium text-[18px] leading-[24px] whitespace-nowrap">
                        Agenda una reunión
                    </div>
                </div>

                <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-center px-2">
                    <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className="rounded-lg" />
                    <div className="mt-[16px] max-lg:mt-[8px] font-medium text-[18px] leading-[24px] whitespace-nowrap">
                        Envíanos un mensaje
                    </div>
                </div>

                <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-center px-2">
                    <Image src="/Chat.gif" alt="Chat" width={64} height={64} className="rounded-lg" />
                    <div className="mt-2 max-lg:mt-[8px] font-medium text-[18px] leading-[24px]">
                        Chatea con Romy<br />nuestro agente IA
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotonesCirculares;