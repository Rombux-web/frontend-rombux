import React from "react";
import Image from "next/image";

export default function Growth() {
    return (
        <div className="relative w-full">
            <div className="relative flex flex-col ml-[137px] pt-[100px] space-y-8">

                <div>
                    <h2 className="mt-[265px]  font-bold text-[64px] leading-[120px] text-[#D81FB9]">
                        Growth
                    </h2>
                    <p className="font-light italic text-[36px] leading-[48px] mt-[1px] -ml-[2px] text-[#000000]">
                        Escala tu negocio y consolida tu liderazgo.
                    </p>
                </div>

                <div className="relative w-full h-[550px] mt-4">
                    <Image
                        src="/Trama Servicios Desktop.png"
                        alt="Ellipse"
                        width={1050}
                        height={1050}
                        className="absolute top-[-575px] left-[790px]"
                    />
                </div>

                <div className="relative h-[100px] mt-[50px]">
                    <Image
                        src="/Growth.png"
                        alt="Growth"
                        width={123}
                        height={123}
                        className="absolute top-[-529px] left-[761px]"
                    />
                </div>
            </div>
        </div>
    );
}