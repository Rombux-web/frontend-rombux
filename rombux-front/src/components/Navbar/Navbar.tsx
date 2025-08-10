'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import BotonesCirculares from '../BotonesInteractivos/BotonesCirculares'


export default function NavbarPrueba() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[url('/gradiente2.png')] bg-cover bg-no-repeat bg-top flex items-center justify-between px-4 lg:px-10 2xl:px-[143px] h-[94px] 2xl:h-[96px]">
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/Vector.png"
                    alt="Logo Rombux"
                    width={212}
                    height={34}
                    className="ml-4 md:ml-16 lg:ml-8 xl:ml-20 w-[141px] h-[23px]  2xl:ml-37  2xl:w-[212px] 2xl:h-[34px]"
                />
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex text-white gap-30 ml-auto lg:mr-4 xl:mr-20 mr-[8%] text-[20px] max-xl:text-[18px] leading-[24px] max-xl:gap-20 2xl:mr-32 max-lg:gap-10">
                <Link href="/benchmarking">Servicios</Link>
                <Link href="/#casos">Casos</Link>
                <Link href="/contacto">Contacto</Link>
            </div>

            {/* Botón hamburguesa mobile */}
            <button className="md:hidden text-black mr-4 md:mr-16" onClick={toggleMenu}>

                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Menú desplegable mobile */}
            {isOpen && (
                <div className="absolute top-[94px] right-1 w-full bg-white text-black flex flex-col px-6 py-2 lg:hidden z-50 shadow-md text-[24px] leading-tight overflow-y-auto max-h-[calc(100vh-94px)]">

                    {/* Servicios */}
                    <div className="w-full">Servicios</div>
                    <div className="pl-4">
                        <hr className="my-3 border-gray-300" />
                        <Link href="/benchmarking" onClick={toggleMenu}>• Benchmarking</Link>
                        <hr className="my-3 border-gray-300" />
                        <Link href="/branding" onClick={toggleMenu}>• Branding</Link>
                        <hr className="my-3 border-gray-300" />
                        <Link href="/marketing-digital" onClick={toggleMenu}>• Marketing Digital</Link>
                        <hr className="my-3 border-gray-300" />
                        <Link href="/growth" onClick={toggleMenu}>• Growth</Link>
                        <hr className="my-3 border-gray-300" />
                        <Link href="/data-ia" onClick={toggleMenu}>• Data + IA</Link>
                        <hr className="my-3 border-gray-300" />
                    </div>
                    <Link href="/#casos" onClick={toggleMenu}>Casos</Link>
                    <hr className="my-3 border-gray-300" />
                    <Link href="/contacto" onClick={toggleMenu} className="cursor-pointer">Contacto</Link>

                    <hr className="my-3 border-gray-300" />



                    {/* Botones Circulares */}
                    <div className="w-full flex flex-col items-center gap-4">
                        <BotonesCirculares />
                    </div>
                </div>
            )}
        </nav>
    )
}