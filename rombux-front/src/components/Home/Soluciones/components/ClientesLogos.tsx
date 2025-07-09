import Image from 'next/image';

export default function ClientesLogos() {
    return (
        <div className="w-full px-[120px] pt-2 max-w-[1920px] mx-auto">
            <div
                className="
    flex flex-row justify-between items-center 
    gap-x-[104px] 
    mt-16 mb-40
    translate-y-16
  "
            >
                <div className="relative w-[180px] h-[75px]">
                    <Image src="/HP blanco.png" alt="Imagen HP" fill className="object-contain" />
                </div>
                <div className="relative w-[216px] h-[33px]">
                    <Image src="/DowAgro.png" alt="Imagen Dow Agro" fill className="object-contain" />
                </div>
                <div className="relative w-[122px] h-[101px]">
                    <Image src="/SuperPollo blanco.png" alt="Imagen Super Pollo" fill className="object-contain" />
                </div>
                <div className="relative w-[100px] h-[68px]">
                    <Image src="/Amarula blanco.png" alt="Imagen Amarula" fill className="object-contain" />
                </div>
                <div className="relative w-[122px] h-[81px]">
                    <Image src="/Granix blanco.png" alt="Imagen Granix" fill className="object-contain" />
                </div>
                <div className="relative w-[121px] h-[36px]">
                    <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" fill className="object-contain" />
                </div>
                <div className="relative w-[152px] h-[53px]">
                    <Image src="/Advanta blanco.png" alt="Imagen Advanta" fill className="object-contain" />
                </div>
                <div className="relative w-[59px] h-[58px]">
                    <Image src="/Bi blanco.png" alt="Imagen Bi" fill className="object-contain" />
                </div>
            </div>
        </div>
    );
}
