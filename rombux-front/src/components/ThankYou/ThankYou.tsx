import Image from "next/image";
import Footer from "../Footer/Footer";

export default function Thank() {
    return (
        <div className="relative w-full h-[800px] min-h-screen flex flex-col max-md:justify-start items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/gradiente1.png"
                    alt=""
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>
            <div className="absolute -bottom-20 -left-40 z-0 w-[30vw] max-w-[541px] h-[30vw] max-h-[541px] max-md:bottom-20 max-md:-left-10  max-md:w-[60vw] max-md:h-[60vw] max-sm:w-[70vw] max-sm:h-[70vw] max-sm:-left-20 max-sm:bottom-40 ">
                <Image
                    src="/Trama esfera negra.png"
                    fill
                    alt=""
                    className="object-contain"
                />
                <Image
                    src="/Trama-esfera-fucsia.png"
                    fill
                    alt=""
                    className="object-contain absolute top-0 left-0"
                />
            </div>
            <div className="absolute top-50 -right-20 z-0 w-[15vw] max-w-[299px] h-[15vw] max-h-[299px] max-md:top-100 max-md:-right-0 max-md:w-[30vw] max-md:h-[30vw]">
                <Image
                    src="/Trama esfera negra.png"
                    fill
                    alt=""
                    className="object-contain"
                />
                <Image
                    src="/Trama-esfera-fucsia.png"
                    fill
                    alt=""
                    className="object-contain absolute top-0 left-0"
                />
            </div>
            <div className=" text-center px-4 max-md:mt-60 -translate-y-28 max-md:translate-y-0 ">
                <h1 className="text-[48px]  font-bold leading-[40px] max-md:text-[24px] max-md:leading-[24px]">¡Gracias por ponerte en <br className="md:hidden" /> contacto!</h1>
                <h2 className="text-[40px] leading-[50px] max-lg:text-[20px] max-lg:leading-[24px] mt-4">En breve nos comunicaremos <br className="md:hidden" /> contigo.</h2>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>

    );
}
