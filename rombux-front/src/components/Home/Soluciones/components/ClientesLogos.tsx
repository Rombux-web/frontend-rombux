import Image from 'next/image';

export default function ClientesLogos() {
    return (
        <div className="w-full flex justify-center pt-6">
            {/* MOBILE */}

            <div className="grid grid-cols-4 place-items-center gap-y-10 gap-x-20 mt-6 w-full px-0 lg:hidden border-amber-500 mb-5 max-md:gap-x-10 max-sm:gap-x-0 sm:mx-4">
                <div className="relative w-[52px] h-[27px]">
                    <Image src="/hpblanco.png" alt="HP" width={52} height={27} className="object-contain" />
                </div>
                <div className="relative w-[83px] h-[12px]">
                    <Image src="/DowAgroSciences.svg" alt="Dow Agro" width={83} height={12} className="object-contain" />
                </div>
                <div className="relative w-[35px] h-[28px]">
                    <Image src="/Group.png" alt="Super Pollo" width={35} height={28} className="object-contain" />
                </div>
                <div className="relative w-[41px] h-[28px]">
                    <Image src="/Amarula blanco.png" alt="Amarula" width={41} height={28} className="object-contain" />
                </div>
                <div className="relative w-[47px] h-[13px]">
                    <Image src="/The Clinic blanco.png" alt="The Clinic" fill className="object-contain" />
                </div>
                <div className="relative w-[49px] h-[27px]">
                    <Image src="/Granix.png" alt="Granix" fill className="object-contain" />
                </div>
                <div className="relative w-[61px] h-[21px]">
                    <Image src="/Advanta blanco.png" alt="Advanta" fill className="object-contain" />
                </div>
                <div className="relative w-[28px] h-[28px]">
                    <Image src="/Bi blanco.png" alt="Bi" fill className="object-contain" />
                </div>
            </div>
            {/* TABLET & DESKTOP: desde lg+ */}
            <div
                className="
          hidden lg:flex  justify-between items-center
          h-[60px] -mt-10 mb-6 mx-25
          lg:mb-10 w-full
          2xl:h-[56px] gap-x-10 lg:mx-10 xl:mx-20 2xl:mx-30 2xl:mt-44 2xl:mb-16 
        "
            >

                <div className="relative lg:w-[73px] lg:h-[45px] 2xl:w-[96px] 2xl:h-[56px]">
                    <Image src="/hpblanco.png" alt="Imagen HP" width={96} height={56} className="" />
                </div>
                <div className="relative lg:w-[121px] lg:h-[19px] 2xl:w-[167px] 2xl:h-[25px]">
                    <Image src="/DowAgroSciences.svg" width={164} height={25} alt="Imagen Dow Agro" className="object-contain" />
                </div>
                <div className="relative lg:w-[68px] lg:h-[60px] 2xl:w-[71px] 2xl:h-[56px]">
                    <Image src="/Group.png" alt="Imagen Super Pollo" width={72} height={56} className="object-contain" />
                </div>
                <div className="relative lg:w-[56px] lg:h-[40px] 2xl:w-[82px] 2xl:h-[56px]">
                    <Image src="/Amarula blanco.png" alt="Imagen Amarula" width={100} height={55} className="object-contain" />

                </div>
                <div className="relative w-[68px] h-[48px] 2xl:w-[100px] 2xl:h-[55px]">
                    <Image src="/Granix.png" alt="Granix" fill className="object-contain" />
                </div>

                <div className="relative lg:w-[68px] lg:h-[21px] 2xl:w-[109px] 2xl:h-[32px]">
                    <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" width={109} height={32} className="object-contain" />
                </div>
                <div className="relative lg:w-[85px] lg:h-[31px] 2xl:w-[116px] 2xl:h-[40px]">
                    <Image src="/Advanta blanco.png" alt="Imagen Advanta" width={116} height={40} className="object-contain" />
                </div>
                <div className="relative lg:w-[33px] lg:h-[34px] 2xl:w-[41px] 2xl:h-[40px]">
                    <Image src="/Bi blanco.png" alt="Imagen Bi" width={41} height={40} className="object-contain" />

                </div>
            </div>
        </div>
    );
}
