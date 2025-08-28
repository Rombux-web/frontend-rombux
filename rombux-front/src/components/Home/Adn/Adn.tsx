"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Botones from "@/components/BotonesInteractivos/Botones";

export default function Adn() {
  return (
    <div className="w-full overflow-x-hidden">

      <div className="bg-[url('/gradiente1.png')] bg-cover w-full text-white flex flex-col items-center 
      pt-[40px] pb-[270px] min-h-auto lg:min-h-[1434px] 2xl:min-h-[1394px] lg:pt-[100px] 2xl:pt-[131px] lg:pb-[240px] 2xl:pb-[330px]">

        <div className="text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] tracking-normal leading-[40px] mt-[60px] 
        lg:leading-[70px] lg:mt-[60px] 2xl:leading-[120px] 2xl:mt-[64px]">
          <h1 className="text-[40px] font-medium w-[336px] mx-auto 
          lg:text-[70px] lg:w-[899px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:w-[1219px] 2xl:font-bold">
            Rombux/ADN:
          </h1>
          <h2 className="text-[40px] font-light mt-[2px] w-[336px] mx-auto 
          lg:text-[70px] lg:leading-[70px] lg:w-[899px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:mt-[2px] 2xl:font-light">
            orientado a resultados
          </h2>
        </div>

        <h3 className="text-[20px] font-normal text-center leading-[24px] mt-[25px] mb-[40px] w-[336px] 
        lg:text-[36px] lg:font-medium lg:leading-[36px] lg:w-[910px] lg:mt-[34px] 
        2xl:text-[24px] 2xl:leading-[28px] 2xl:w-[1049px] 2xl:h-[56px] 2xl:mt-[30px] 2xl:mb-[10px]">
          Somos un grupo de profesionales especializados en escalar empresas y startups, unidos bajo una misma cultura: lograr el liderazgo desde una sólida propuesta de valor.
        </h3>

        <div className="mb-0 mt-[6px] lg:mb-[20px] 2xl:mb-0 2xl:mt-5">
          <Link href="/about_us">
            <button
              type="submit"
              className="bg-[#D81FB9] text-white text-[24px] leading-[32px] font-semibold h-[48px] w-[192px] 
              rounded-[56px] shadow-2xl mx-auto block cursor-pointer">
              Conócenos
            </button>
          </Link>
        </div>

        {/* Esferas decorativas MOBILE */}
        <div className="relative w-full h-[300px] mb-[80px] sm:hidden">
          <div className="absolute w-[296px] h-[296px] translate-x-[-70px] top-[80px]">
            <Image
              src="/Trama esfera negra.png"
              fill
              alt=""
              className="object-contain animate-spin [animation-direction:reverse] [animation-duration:90s]"
            />
            <Image
              src="/Trama-esfera-fucsia.png"
              fill
              alt=""
              className="object-contain absolute top-0 left-0 animate-spin [animation-duration:90s]"
            />
          </div>

          {/* Esfera chica */}
          <div className="absolute right-[-20px] top-[60px] w-[125px] h-[125px]">
            <Image
              src="/Trama esfera negra.png"
              fill
              alt=""
              className="object-contain animate-spin [animation-duration:120s]"
            />
            <Image
              src="/Trama-esfera-fucsia.png"
              fill
              alt=""
              className="object-contain absolute top-0 left-0 animate-spin [animation-direction:reverse] [animation-duration:90s]"
            />
          </div>
        </div>

        {/* Esferas decorativas TABLET & DESKTOP */}
        <div className="relative w-full min-h-[400px] hidden sm:block 2xl:mt-[64px]">
          {/* Esfera grande */}
          <div className="absolute left-[60px] bottom-[40px] 
            w-[160px] h-[160px] md:w-[220px] md:h-[220px] 
            lg:w-[295px] lg:h-[295px] lg:ml-12 lg:bottom-[20px]
            2xl:w-[380px] 2xl:h-[380px] 2xl:left-[270px] 2xl:bottom-[-35px]">
            <Image
              src="/Trama esfera negra.png"
              fill
              alt=""
              className="object-contain animate-spin [animation-direction:reverse] [animation-duration:90s]"
            />
            <Image
              src="/Trama-esfera-fucsia.png"
              fill
              alt=""
              className="object-contain absolute top-0 left-0 animate-spin [animation-duration:120s]"
            />
          </div>

          {/* Esfera chica */}
          <div className="absolute top-[-55px] right-[97px] 
            w-[100px] h-[100px] md:w-[130px] md:h-[130px] 
            lg:w-[163px] lg:h-[163px] lg:mr-[-12px] lg:top-[40px]
            2xl:w-[210px] 2xl:h-[210px] 2xl:right-[360px] 2xl:top-[-45px]">
            <Image
              src="/Trama esfera negra.png"
              fill
              alt=""
              className="object-contain animate-spin [animation-duration:120s]"
            />
            <Image
              src="/Trama-esfera-fucsia.png"
              fill
              alt=""
              className="object-contain absolute top-0 left-0 animate-spin [animation-direction:reverse] [animation-duration:120s]"
            />
          </div>
        </div>

        {/* ¿Conectamos? */}
        <div className="mb-[90px] mt-[50px] sm:mb-[100px] lg:mt-[60px] 2xl:mt-[70px]">
          <p className="text-[38px] font-normal leading-[38px] text-center w-[336px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
            lg:text-[54px] lg:leading-[36px] lg:w-[376px] 
            2xl:text-[48px] 2xl:leading-[48px] 2xl:w-[446px]">
            ¿Conectamos?
          </p>
        </div>

        {/* Botones interactivos TODOS LOS DISPOSITIVOS */}
        <div className="w-full flex justify-center mb-[40px] lg:mb-[60px] 2xl:mb-[46px] 2xl:mt-10">
          <Botones />
        </div>

      </div>

    </div>
  );
}