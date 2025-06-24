import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="relative w-[1920px] h-[277px] bg-no-repeat bg-[length:100%_100%] bg-[url('/footer.png')] mx-auto">

            <Link href="/">
                <div className="absolute left-[139px] bottom-[109px] flex flex-col">
                    <Image src="/Logo Rombux fucsia.png" alt="Logo Footer" width={245} height={39} />
                    <Image className="-mt-5" src="/footersoluciones.png" alt="Soluciones" width={245} height={28} />
                </div>
            </Link>

            <div className="absolute left-268 bottom-[109px] -translate-x-1/2 text-[18px] w-[1255px]">
                <p>© 2024 Rombus Global SAS. Todos los derechos reservados. <a href="/tyc" className='hover:underline'>Términos y Condiciones.</a> <a href="/politicas" className='hover:underline'>Políticas de Privacidad y Protección de Datos Personales</a>.</p>
            </div>

            <div className="absolute right-[141px] bottom-[110px]">
                <Image src="/logoin.png" alt="Logo IN" width={40} height={40} />
            </div>
        </div>
    );
}