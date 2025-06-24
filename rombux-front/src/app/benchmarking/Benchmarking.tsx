import React from "react";
import Image from "next/image";

export default function Benchmarking() {
    return (
        <div className="relative w-full">
            <div className="relative flex flex-col ml-[137px] pt-[100px] space-y-8">
                {/* Título */}
                <div>
                    <h2 className="mt-[265px]  font-bold text-[64px] leading-[120px] text-[#D81FB9]">
                        Benchmarking
                    </h2>
                    <p className="font-light italic text-[36px] leading-[48px] mt-[1px] -ml-[1px] text-[#000000]">
                        Descubre y proyecta tu valor único.
                    </p>
                </div>

                {/* Sección visual con imágenes */}
                <div className="relative w-full h-[550px] mt-4">
                    <Image
                        src="/Ellipse 1.png"
                        alt="Ellipse"
                        width={23}
                        height={23}
                        className="absolute top-[-165px] left-[811px]"
                    />
                    <Image
                        src="/Line 7.png"
                        alt="Line"
                        width={605}
                        height={2}
                        className="absolute top-[-155px] left-[822px]"
                    />
                    <Image
                        src="/Image 6.png"
                        alt="Image 6"
                        width={800}
                        height={800}
                        className="absolute top-[-565px] left-[966px]"
                        unoptimized
                    />
                </div>

                {/* Icono Benchmarking */}
                <div className="relative h-[100px] mt-[79px] -ml-[2px]">
                    <Image
                        src="/Benchmarking.png"
                        alt="Benchmarking"
                        width={141}
                        height={141}
                        className="absolute top-[-570px] left-[754px]"
                    />
                </div>
            </div>
        </div>
    );
}
