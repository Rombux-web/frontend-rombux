import Image from "next/image";

export default function Thanks() {
    return (
        <div className="relative w-full h-[1100px] flex flex-col items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/gradiente1.png"
                    alt=""
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>
            <div className="absolute -bottom-20 -left-40 z-0 w-[30vw] max-w-[541px] h-[30vw] max-h-[541px]">
                <Image
                    src="/Trama esfera negra.png"
                    fill
                    alt=""
                    className="object-contain"
                />
                <Image
                    src="/Trama esfera fucsia.png"
                    fill
                    alt=""
                    className="object-contain absolute top-0 left-0"
                />
            </div>
            <div className="absolute top-50 -right-20 z-0 w-[15vw] max-w-[299px] h-[15vw] max-h-[299px]">
                <Image
                    src="/Trama esfera negra.png"
                    fill
                    alt=""
                    className="object-contain"
                />
                <Image
                    src="/Trama esfera fucsia.png"
                    fill
                    alt=""
                    className="object-contain absolute top-0 left-0"
                />
            </div>
            <div className="z-10 text-center px-4">
                <h1 className="text-[48px] font-bold leading-[40px]">¡Gracias por ponerte en contacto!</h1>
                <h2 className="text-[40px] leading-[50px] mt-4">En breve nos comunicaremos contigo.</h2>
            </div>
        </div>
    );
}
