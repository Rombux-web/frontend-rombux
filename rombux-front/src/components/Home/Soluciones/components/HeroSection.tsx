import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full flex flex-row items-start justify-between relative">

            {/* Texto */}
            <div className="flex flex-col justify-start space-y-12 mt-[10px] -ml-[5px]">
                <h1 className="text-[32px] leading-[36px] mb-[50px]">
                    Soluciones Digitales de Negocios
                </h1>
                <h2 className="text-[102px] w-[740px] leading-[110px] font-normal drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                    Potenciamos<br />tu Empresa<br />en la Era Digital
                </h2>
            </div>

            {/* Imagen */}
            <div className="relative overflow-visible -translate-x-[70px] -translate-y-43">
                <div className="w-[1005px] h-[1005px]">
                    <Image
                        src="/womanesfera+halo.png"
                        alt="Mujer con esfera"
                        fill
                        className="object-contain z-10"
                        unoptimized
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 w-[756px] h-[756px] -translate-x-1/2 -translate-y-1/2 z-20 animate-spin [animation-direction:reverse] [animation-duration:150s]">
                    <Image
                        src="/redfucsia.png"
                        alt="Red giratoria"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

        </div>
    );
}

