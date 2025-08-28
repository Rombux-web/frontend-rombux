import React from "react";
import Image from "next/image";
import FormSections from "@/components/FormSections/FormSections";
import Botones from "@/components/BotonesInteractivos/Botones";
import Footer from "@/components/Footer/Footer";

export default function BenchmarkingForm() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center  overflow-x-hidden"
      style={{ backgroundImage: "url('/Gradiente-Home-5.png')" }}
    >

      <div className="mt-[175px] w-full max-w-[1393px]  flex flex-col items-center justify-center mb-9 max-sm:mt-[80px]">
        <h2 className="font-bold text-[64px] leading-[64px] text-center text-white max-lg:text-[40px] max-lg:leading-[40px]">
          Benchmarking:
        </h2>
        <p className="font-light text-[64px] leading-[64px] text-center text-white max-lg:text-[40px] max-lg:leading-[40px]">
          orientado a <br className="sm:hidden"/> resultados
        </p>
      </div>

      <div className="w-full max-w-[1145px] flex items-center justify-center ml-6 max-sm:ml-0 max-sm:mt-5">
        <h3 className="relative text-[24px] leading-[28px] max-sm:w-[336px] text-center text-white max-lg:text-[20px] max-sm:z-10">
          Somos un grupo de profesionales especializados en <br className="2xl:hidden max-sm:hidden"/> escalar
          empresas y startups, unidos bajo una misma <br className="2xl:hidden max-sm:hidden"/> cultura: lograr el
          liderazgo desde una sólida propuesta <br className="2xl:hidden max-sm:hidden"/> de valor.
        </h3>
      </div>

      <div className="mt-[132px] relative ml-[15px] max-lg:mt-[100px] max-sm:ml-0 max-sm:mt-[60px] z-10">
        <Image
          src="/Group-155.png"
          alt="Decoración Benchmarking"
          width={563}
          height={130}
          unoptimized
          className="max-lg:w-[479px] max-sm:w-[336px]"
        />
        <a
          href="https://www.linkedin.com/in/abelfernandogarcia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logoin.png"
            alt="LinkedIn Rombux"
            width={35}
            height={35}
            className="absolute top-[81px] left-[109px] max-lg:top-[70px] max-lg:left-[90px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[25px] max-sm:h-[25px] max-sm:top-[50px] max-sm:left-[60px] cursor-pointer"
          />
        </a>
      </div>

      <div className="absolute top-[688px] left-[1389px] max-2xl:left-[970px] max-xl:w-[200px]  max-xl:left-[870px] max-sm:hidden">
        <Image
          src="/Trama-esfera-fucsia.png"
          alt="Trama fucsia pequeña"
          width={251}
          height={251}
          className="rotate-180"
        />
      </div>
      <div className="absolute top-[814px] left-[286px] z-1 max-2xl:left-[100px] max-xl:left-[20px] max-xl:w-[300px] max-sm:hidden">
        <Image
          src="/Trama-esfera-fucsia.png"
          alt="Trama fucsia grande"
          width={459}
          height={459}
          className="rotate-180"
        />
      </div>

      <FormSections/>

      <div className="mb-21 mt-34">
        <Botones/>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </section >
  );
}
