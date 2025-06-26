import React from "react";
import Image from "next/image";

export default function Benchmarking() {
    return (
        <div className="relative w-full">
            <div className="relative flex flex-col ml-[137px] pt-[100px] space-y-8">
                {/* Título */}
                <div>
                    <h2 className="mt-[265px]  font-bold text-[64px] leading-[120px] text-[#D81FB9]">
                        Branding
                    </h2>
                    <p className="font-light italic text-[36px] leading-[48px] mt-[1px] -ml-[2px] text-[#000000]">
                        Construye una marca con impacto y<br />
                        reputación.
                    </p>
                </div>

                <div className="relative w-full h-[550px] mt-4">
                    <div className="relative w-full h-[550px] mt-4">
                        <Image
                            src="/Trama Servicios Desktop.png"
                            alt="Ellipse"
                            width={1050}
                            height={1050}
                            className="absolute top-[-639px] left-[790px]"
                        />
                    </div>
                </div>

                <div className="relative h-[100px] mt-[50px]">
                    <Image
                        src="/Branding.png"
                        alt="Branding"
                        width={141}
                        height={141}
                        className="absolute top-[-589px] left-[760px]"
                    />
                </div>
            </div>
        </div>
    );
}
