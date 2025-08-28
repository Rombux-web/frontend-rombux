import React from "react";

export default function BrandingCards() {
  return (
    <div>
      <div className="mb-24 text-center -mt-[140px] ml-[15px] max-lg:-mt-[120px] max-sm:ml-0 max-sm:mb-8">
        <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px] max-lg:leading-[40px] max-sm:px-4">
          Estrategias de conexión y<br />
          adquisición de clientes
        </h1>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px] max-md:gap-y-7 max-sm:mb-[80px]">
        
        <div
          className="relative top-[50px] w-[427px] h-[188px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center max-xl:w-[292px] max-lg:max-w-[230px] max-xl:h-[155px] max-lg:h-[160px] max-md:max-w-[292px] max-md:top-0 max-md:h-[140px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
        >
          <p className="text-[20px] leading-[28px] text-left -ml-[6px] py-10 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pl-2 max-lg:pt-5 max-md:max-w-[239px] max-md:ml-2 max-md:pl-0">
            <span className="font-semibold">Programas de conversión y performance.</span> Para adquirir y fidelizar clientes, mediante automatización y CRM.
          </p>
        </div>

        <div
          className="relative top-[30px] left-1 w-[427px] h-[218px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center max-xl:w-[292px] max-xl:h-[228px] max-lg:max-w-[230px] max-lg:h-[235px] max-md:max-w-[292px] max-md:top-0 max-md:left-0 max-md:h-[190px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
        >
          <p className="text-[20px] leading-[28px] text-left py-10 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pl-2 max-lg:pt-5 max-md:max-w-[239px] max-md:ml-2 max-md:pl-0">
            <span className="font-semibold">Campañas de alto impacto y contenido estratégico.</span> Desde SEO y SEM hasta marketing de contenidos con un ROI medible, tests A/B y dinámicas de iteración rápida.
          </p>
        </div>

        <div
          className="bg-cover bg-center w-[427px] h-[218px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] mt-[29px] max-xl:w-[302px] max-xl:h-[206px] max-lg:max-w-[230px] max-lg:h-[215px] max-md:max-w-[292px] max-md:mt-0 max-md:ml-0 max-md:h-[190px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')" }}
        >
          <p className="text-[20px] leading-[28px] text-left py-10 max-w-[351px] max-xl:max-w-[259px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:py-7 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:py-5 max-lg:pl-2 max-md:max-w-[239px] max-md:ml-2 max-md:pl-0">
            <span className="font-semibold">Estrategias 360° y ejecución multicanal a la medida de cada negocio.</span> Combinando Paid Media, Redes Sociales, Mailing, Retención, Data Analytics, Growth Marketing.
          </p>
        </div>

      </div>
    </div>
  );
}
