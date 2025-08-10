import Image from "next/image";
import ButtonHp from "./Marcas/HP/BotonHP";
import ButtonChile from "./Marcas/Chile/BotonChile";
import ButtonClinic from "./Marcas/TheClinic/BotonClinic";
import ButtonNatreon from "./Marcas/Natreon/BotonNatreon";
import ButtonHotel from "./Marcas/Hotel/BotonHotel";
import ButtonBintelligenz from "./Marcas/Bintelligenz.tsx/BotonBintelligenz";

export default function Grid() {
    return (
        <div>
            <div className="relative max-lg:hidden">
                <Image
                    src="/CuadroPortfolios.png"
                    alt="Portfolios"

                    width={1520}
                    height={1260}
                    className="object-cover rounded-lg max-2xl:w-[1200px] max-xl:w-[900px]"
                />

                <div className="absolute -left-[10px] -top-[10px] max-2xl:-left-[14px] max-xl:top-[-20px] max-xl:left-[-20px] max-lg:left-[-30px] max-lg:top-[-30px] ">
                    <ButtonHp />
                </div>

                <div className="absolute left-[1430px] -top-[10px] max-2xl:left-[1110px] max-xl:left-[820px] max-xl:top-[-20px] max-lg:top-[-30px] max-lg:left-[655px]">
                    <ButtonChile />
                </div>

                <div className="absolute -left-[10px] top-[490px] max-2xl:top-[380px] max-2xl:-left-[14px] max-xl:top-[275px] max-xl:left-[-20px] max-lg:left-[-30px] max-lg:top-[205px]">
                    <ButtonClinic />
                </div>

                <div className="absolute top-[330px] left-[1430px] max-2xl:left-[1110px] max-2xl:top-[260px] max-xl:left-[820px] max-xl:top-[180px] max-lg:left-[655px] max-lg:top-[130px] ">
                    <ButtonNatreon />
                </div>

                <div className="absolute -left-[10px] top-[1170px] max-2xl:top-[900px] max-2xl:-left-[14px] max-xl:top-[660px] max-xl:left-[-20px] max-lg:left-[-30px] max-lg:top-[530px]">
                    <ButtonHotel />
                </div>

                <div className="absolute top-[1170px] left-[1430px] max-2xl:left-[1110px] max-2xl:top-[900px] max-xl:left-[820px] max-xl:top-[660px] max-lg:left-[655px] max-lg:top-[530px]">
                    <ButtonBintelligenz />
                </div>
            </div>
            

        </div>
    );
}
