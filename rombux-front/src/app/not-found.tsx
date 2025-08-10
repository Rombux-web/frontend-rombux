import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
    return (
        <div className="relative w-full h-[800px] min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/gradiente1.png"
                    alt=""
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>
            <div className="z-10 text-center mb-40 mt-10">
                <h1 className="text-[48px] font-bold leading-[48px] max-lg:text-[24px] max-lg:leading-[24px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">Mmm... parece que se nos <br className="sm:hidden" /> rompió algo.</h1>
                <h2 className="text-[32px] leading-[48px] max-lg:text-[20px] max-lg:leading-[24px] mt-2">Mientras lo reparamos, puedes <br className="sm:hidden" /> encontrar lo que buscas aquí:</h2>
                <div className="pt-15">
                    <Link href="/">
                        <button
                            type="submit"
                            className="bg-[#D81FB9] text-white font-semibold text-[20px] h-[60px] w-[192px] 
                                2xl:text-[18px] 2xl:leading-[28px] 2xl:font-bold 2xl:h-[46px] 2xl:w-[186px] 
                                lg:text-[24px] lg:font-semibold lg:h-[60px] lg:w-[176px]
                                rounded-[50px] shadow-2xl mx-auto block cursor-pointer"
                        >
                            Rombux Home
                        </button>
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
}
