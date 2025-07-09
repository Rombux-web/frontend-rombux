import HeroSection from './components/HeroSection';
import FormularioEmail from "./components/FormularioEmail";
import TransformacionDigital from './components/TransformacionDigital';
import ClientesLogos from './components/ClientesLogos';


export default function Soluciones() {
    return (
        <main
            className="
        bg-[url('/gradiente-desktop.png')]
        bg-no-repeat bg-top bg-cover
        w-full min-h-screen text-white pt-[200px] pb-[40px]"
        >

            <div className="pl-74 pr-10">

                <div className="flex flex-col pb-0">
                    <HeroSection />
                    <div className="mt-[-130px]">
                        <FormularioEmail />
                    </div>
                </div>

                <div className="mt-32 py-20 flex flex-row justify-start items-start gap-x-12">
                    <div className="-mt-[65px] flex justify-start order-2 translate-x-[97px]">
                        <h2 className="text-right text-[102px] leading-[110px] max-w-[614px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] ">
                            Impulsando tus Negocios al Futuro
                        </h2>
                    </div>
                    <TransformacionDigital />
                </div>


            </div>

            <ClientesLogos />
        </main>
    );
}

