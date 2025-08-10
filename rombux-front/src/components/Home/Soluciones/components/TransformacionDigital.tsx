export default function TransformacionDigital() {
    return (
        <div
            className="flex max-md:flex-col 
                        lg:w-[440px] 2xl:w-[582px] 
                        2xl:order-1 2xl:space-y-6 2xl:-mt-[36px] -ml-[2px]"
        >
            {/* Mobile ONLY */}

            <div className="block md:hidden text-right max-w-full h-[126px]">
                <p className="text-[18px] leading-[24px] max-md:leading-[22px]">
                    <strong>
                        Rombux es tu socio estratégico en el
                        <br />
                        mundo online
                    </strong>
                    , ofreciéndote soluciones
                    <br />
                    personalizadas e integrales para
                    <br />
                    impulsar tu crecimiento y consolidar tu
                    <br />
                    posición.
                </p>
            </div>

            {/* Tablet & Desktop ONLY */}
            <div className="max-md:hidden translate-y-5 max-lg:mt-15 max-lg:w-[360px] max-2xl:w-[440px] xl:mb-15 xl:ml-12 2xl:ml-0">
                <h2
                    className="font-normal
                    text-[24px] leading-[25px] mb-2
                    2xl:text-[32px] 2xl:leading-[36px] 2xl:mb-10 2xl:mt-28 xl:mb-7 text-left"
                >
                    Transformación Digital
                </h2>

                <p
                    className="font-normal max-lg:w-[345px] text-left
                    lg:text-[20px] lg:leading-[25px] xl:w-[450px]
                    2xl:text-[20px] 2xl:leading-[28px] 
                    2xl:w-[500px] max-xl:mb-10"
                >
                    En un entorno que evoluciona aceleradamente, la transformación digital
                    permite a las empresas adaptarse rápidamente a las demandas del
                    mercado. Rombux es tu socio estratégico en el mundo online,
                    ofreciéndote soluciones integrales y personalizadas para impulsar tu
                    crecimiento y consolidar tu posición.
                </p>
            </div>
        </div>
    );
}
