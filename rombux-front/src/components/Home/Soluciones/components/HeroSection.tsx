import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full  flex max-md:flex-col-reverse items-start lg:items-center justify-between relative md:ml-16 lg:ml-0 xl:ml-12 2xl:ml-0 sm:-translate-y-10 lg:translate-y-0">
      {/* Bloque de texto */}
      <div className="
        lg:order-1 max-lg:h-[240px] justify-end flex flex-col lg:space-y-0 2xl:space-y-12 2xl:mt-[272px] xl:mt-[210px]
        w-[338px] h-[30px]
        max-lg:mt-[60px]  pl-7
        md:pl-5  lg:translate-x-[-20px] lg:w-[520px] 2xl:translate-x-0
        2xl:-ml-[25px] 2xl:w-[575px] max-sm:-translate-y-14 lg:translate-y-40 2xl:-translate-y-50 custom-hero-text
        ">
        <h2 className="text-[20px] leading-[20px] font-normal mb-[34px] lg:text-[32px] lg:leading-[30px] lg:mb-[50px] 2xl:text-[32px] 2xl:leading-[36px] 2xl:mb-[48px]">
          Soluciones Digitales de Negocios
        </h2>
        <h1 className="
            font-normal 
            drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
            text-[40px] leading-[40px] w-[288px]
            lg:text-[70px] lg:leading-[70px] lg:w-[503px]
            2xl:text-[102px] 2xl:leading-[110px] 2xl:w-[942px]
        ">
          Potenciamos<br />tu Empresa<br />en la Era Digital
        </h1>
        
      </div>
      <div className="lg:order-2 translate-y-10 lg:translate-y-15 xl:translate-y-30 w-full lg:justify-end flex items-center justify-center md:justify-end md:mr-16 lg:mr-0 mb-0 2xl:translate-x-[110px] 2xl:translate-y-[-260px]">
          
          <div className="relative  w-[360px] h-[370px] sm:w-[460px] sm:h-[411px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px]  2xl:w-[1005px] 2xl:h-[1005px] mt-2 2xl:mt-[-10px] custom-image ">
            
            {/* Imagen base */}
            <Image
              src="/womanesfera+halo.png"
              alt="Mujer con esfera"
              fill
              className="object-contain max-sm:scale-120 "
              unoptimized
            />
  
            {/* Red giratoria */}
            <div className="
              absolute inset-0 m-auto z-30
              sm:w-full sm:h-[336px]
              lg:w-[386px] lg:h-[386px]
              xl:w-[556px] xl:h-[556px]
              2xl:w-[756px] 2xl:h-[756px] 
              animate-spin  custom-red
              [animation-direction:reverse] [animation-duration:90s]
            ">
              <Image
                src="/redfucsia.png"
                alt="Red giratoria"
                fill
                className="object-contain max-sm:scale-95 "
                priority
              />
            </div>
          </div>
        </div>

    </div>
  );
}
