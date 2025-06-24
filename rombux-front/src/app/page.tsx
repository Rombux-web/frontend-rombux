import Servicios from "@/components/Home/Servicios/Servicios";
import Soluciones from "@/components/Home/Soluciones/Soluciones";
import Carousel from "@/components/Home/Carousel/Carousel";
import Formulario from "@/components/Home/Formulario/Formulario";
import Adn from "@/components/Home/Adn/Adn";
import Casos from "@/components/Home/Casos/Casos";

export default function Home() {
    return (
        <div>
            <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white pt-[150px]">
                <Soluciones />
            </div>
            <Carousel />
            <div id="servicios">
                <Servicios />
            </div>
            <div id="casos">
                <Casos />
            </div>
            <div id="contacto">
                <Formulario />
            </div>
            <Adn />
        </div>
    );
}
