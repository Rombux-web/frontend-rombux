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
                        src="/Ellipse 1.png"
                        alt="Ellipse"
                        width={23}
                        height={23}
                        className="absolute top-[-155px] left-[760px]"
                    />
                    <Image
                        src="/Line 7.png"
                        alt="Line"
                        width={565}
                        height={2}
                        className="absolute top-[-145px] left-[760px]"
                    />
                    <Image
                        src="/Image 6.png"
                        alt="Image 6"
                        width={750}
                        height={750}
                        className="absolute top-[-530px] left-[900px]"
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