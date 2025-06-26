import React from "react";
import Image from "next/image";

export default function Data() {
    return (

        <div className="relative w-full">
            <div className="relative flex flex-col ml-[137px] pt-[100px] space-y-8">
                <div>
                    <h2 className="mt-[265px]  font-bold text-[64px] leading-[120px] text-[#D81FB9]">
                        Marketing Digital
                    </h2>
                    <p className="font-light italic text-[36px] leading-[48px] mt-[1px] -ml-[2px] text-[#000000]">
                        Conecta con tu público allí donde está y<br />
                        desata el potencial único de tu marca.
                    </p>
                </div>

                <div className="relative w-full h-[550px] mt-4">
                    <Image
                        src="/Trama Servicios Desktop.png"
                        alt="Ellipse"
                        width={1050}
                        height={1050}
                        className="absolute top-[-623px] left-[790px]"
                    />
                </div>

                <div className="relative h-[100px] mt-[50px]">
                    <Image
                        src="/Mkt-Digital.png"
                        alt="Marketing Digital"
                        width={123}
                        height={123}
                        className="absolute top-[-577px] left-[761px]"
                    />
                </div>
            </div>
        </div>
    );
}