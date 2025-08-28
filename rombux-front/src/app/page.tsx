import Soluciones from "@/components/Home/Soluciones/Soluciones";
import Carousel from "@/components/Home/Carousel/Carousel";
import Servicios from "@/components/Home/Servicios/Servicios";
import Enfoques from "@/components/Home/Enfoques/Enfoques";
import Formulario from "@/components/Home/Formulario/Formulario";
import Adn from "@/components/Home/Adn/Adn";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative pt-[14px] 2xl:pt-[96px]">
      <Soluciones />
      <Carousel />

      <div id="servicios">
        <Servicios />
      </div>

      <div id="casos">
        <Enfoques />
      </div>

      <div id="contacto">
        <Formulario />
      </div>

      <Adn />

      <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}


