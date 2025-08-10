"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonios = [
    {
        nombre: "Fabián Álvarez",
        cargo: "Regional Manager",
        empresa: "Wines & Spirits",
        texto:
            "Contratamos a Rombux para la promoción de las principales marcas del portfolio: Amarula, Grants, Glenffidich, Bass Pale Ale. Siempre respondieron eficazmente, acorde a nuestras expectativas.",
        imagen: "/fabian.png",
    },
    {
        nombre: "Gustavo Zureta",
        cargo: "Director Ejecutivo de Procopias",
        empresa: "HP PremierA3 Argentina",
        texto:
            "En Rombux encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación en nuestro país del programa de HP, PremierA3.",
        imagen: "/gustavo.png",
    },
    {
        nombre: "Eduardo Dubinsky",
        cargo: "Consultor Técnico Internacional",
        empresa: "Grasas y Aceites Comestibles",
        texto:
            "Coordinamos campañas para empresas agroalimentarias de primera línea como Dow Agroscienes, Granix, Advanta Semillas y Fargo, con óptimos resultados en la difusión y posicionamiento de sus productos.",
        imagen: "/eduardo.png",
    },
];

export default function CarouselT() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prev = () =>
        setActiveIndex(
            (activeIndex - 1 + testimonios.length) % testimonios.length
        );
    const next = () => setActiveIndex((activeIndex + 1) % testimonios.length);

    return (
        <div className="relative flex flex-col items-center max-md:pb-[85px] py-16 bg-[#F4F0F0]">
            {/* Contenedor tarjeta + botones */}
            <div className="relative flex justify-center items-center w-full max-w-[550px]">
                {/* Testimonio activo */}
                <div className="p-6  w-[440px] max-sm:w-[330px] max-sm:h-[459px] h-[516px] rounded-xl border border-[#C1C1C1] shadow-md text-left max-sm:p-4">
                    <p className="text-[#D81FB9] text-6xl italic rotate-180 inline-block mb-6 max-sm:mb-2 max-sm:ml-2">"</p>
                    <p className="text-lg max-sm:text-[16px] text-black leading-relaxed mb-6 max-sm:mb-1">
                        “{testimonios[activeIndex].texto}”
                    </p>

                    <div className="flex flex-col">
                        <Image
                            src={testimonios[activeIndex].imagen}
                            alt={testimonios[activeIndex].nombre}
                            width={120}
                            height={120}
                            className={`rounded-full mb-4 object-cover max-md:w-[100px] ${testimonios[activeIndex].nombre === "Gustavo Zureta"
                                    ? "mt-[40px] max-md:mt-[36px]"
                                    : "mt-[10px]"
                                }`}
                        />
                        <p className="font-bold text-xl">{testimonios[activeIndex].nombre}</p>
                        <p className="text-md">{testimonios[activeIndex].cargo}</p>
                        <p className="text-md">{testimonios[activeIndex].empresa}</p>
                    </div>
                </div>

                {/* Botones prev/next */}
                <button
                    onClick={prev}
                    className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1 max-md:-translate-x- p-2 rounded-full bg-white max-sm:bg-transparent max-sm:shadow-none shadow text-[#D81FB9] hover:bg-[#F0D3E8]"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={15} />
                </button>
                <button
                    onClick={next}
                    className="absolute top-1/2 right-0 -translate-y-1/2  translate-x-1 p-2 rounded-full bg-white shadow max-sm:bg-transparent max-sm:shadow-none  text-[#D81FB9] hover:bg-[#F0D3E8]"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={15} />
                </button>
            </div>

            {/* Puntitos indicativos */}
            <div className="flex justify-center gap-4 mt-8">
                {testimonios.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === activeIndex ? "bg-[#D81FB9]" : "bg-gray-400"
                            }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
