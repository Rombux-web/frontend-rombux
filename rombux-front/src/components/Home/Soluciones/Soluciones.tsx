import HeroSection from './components/HeroSection';
import FormularioEmail from "./components/FormularioEmail";
import TransformacionDigital from './components/TransformacionDigital';
import ClientesLogos from './components/ClientesLogos';

export default function Soluciones() {
  return (
    <main className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Fondo visual separado del layout */}
      <div
        className="absolute inset-0 bg-[url('/gradiente13.png')] 2xl:bg-[url('/gradiente13prueba.png')] bg-no-repeat bg-top bg-cover z-[-1]"
        
      />

      {/* Contenido */}
      <div className="relative pt-[50px] pb-[20px] lg:pt-0 lg:pb-[10px] 2xl:pt-[197px] 2xl:pb-[40px]">
        <div className="lg:pl-18 lg:pr-8 2xl:pl-74 2xl:pr-10">
          
          {/* Hero + Formulario */}
          <div className="flex flex-col max-lg:h-[560px] xl:-translate-y-20 2xl:translate-y-3">
            <HeroSection />
            {/* <FormularioEmail /> */}
          </div>

{/* MOBILE: título + texto debajo */}
          <div className="flex  max-md:flex-col-reverse justify-between md:mx-16 lg:hidden items-end text-right px-6 mr-3 max-md:mt-[250px] mb-10 max-sm:mt-50 max-lg:-mt-30">
            <TransformacionDigital />
            <h2 className="text-[40px] max-lg:text-[36px] max-lg: leading-[40px] font-normal sm:mb-6 -translate-y-5 sm:-translate-y-10 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
              Impulsando <br /> tus Negocios <br /> al Futuro
            </h2>
          </div>


          {/* TABLET & DESKTOP: texto a la izquierda y componente a la derecha */}
          <div className="hidden lg:flex flex-row justify-start items-start 
                          lg:mt-16 lg:py-16 lg:gap-x-0 2xl:-mt-75
                          ">
            
            <div className="w-full max-2xl:mr-6 flex justify-end lg:order-1 2xl:order-2 lg:mt-4 2xl:mt-12 2xl:translate-x-0 xl:mr-22 2xl:mr-60 2xl:min-w-[630px]">
              <h2 className="relative z-10 text-right drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
                font-normal lg:text-[70px] lg:leading-[70px] lg:max-w-[487px] 2xl:text-[102px] 2xl:leading-[110px] 2xl:max-w-[630px]">
                <span className="hidden lg:inline 2xl:hidden ">
                  Impulsando<br />
                  tus Negocios<br />
                  al Futuro
                </span>
                <span className="hidden 2xl:inline drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)]">
                  Impulsando<br/> tus Negocios<br /> al Futuro
                </span>
              </h2>
            </div>

            <TransformacionDigital />
          </div>
        </div>

        <ClientesLogos />
      </div>
    </main>
  );
}
