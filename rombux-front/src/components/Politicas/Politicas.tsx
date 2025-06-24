import React from 'react'
import Image from 'next/image'

function Politicas() {
    return (
        <div className='text-black pt-[400px]  max-w-[1637px] mx-auto'>
            <div className='mb-[150px]'>
                <h1 className='text-[#D81FB9] text-[64px]'>Política de Privacidad y Protección de Datos Personales</h1>
                <p className='italic text-[28px]'>Última actualización: 1 de enero 2025</p>
            </div>
            <div className='text-[32px] flex flex-col gap-2 font-light leading-[36px]'>
                <h2 className='pb-5 font-bold'>Información general</h2>
                <p className='pb-4'>La presente declaración refleja la  política que, en materia de protección de datos, sigue Rombus SRL  (“Rombus”), empresa domiciliada en Lezica 4363 de la Ciudad Autónoma de  Buenos Aires, República Argentina y titular del Sitio Web ubicado en el  dominio www.rombusglobal.com (el “Sitio Web”).</p>
                <p className='pb-5'>La política de  privacidad que se describe a continuación sólo es aplicable al presente  Sitio Web, entendiendo como tal todas las páginas, subpáginas y  aplicaciones incluidas en el dominio www.rombusglobal.com, declinando  Rombus cualquier responsabilidad sobre las diferentes políticas de  privacidad y protección de datos de carácter personal que puedan  contener los sitios web a los cuales pueda accederse a través de los  hipervínculos ubicados en Rombus y no gestionados directamente por  Rombus.</p>
                <p className='pb-4'>Esta política se ha configurado respetando la normativa vigente en materia de protección de datos personales.</p>
                <h2 className='pb-5 font-bold'>Registro de datos de carácter personal</h2>
                <p className='pb-4'>Rombus no recopila ninguna información personal sobre aquellas personas que visitan el Sitio Web.</p>
                <p className='pb-5'>Los únicos datos que se solicitan de los Usuarios son aquellos mencionados  en el formulario de registro; ello en el supuesto en que los Usuarios  deseen pasar a ser usuarios registrados. En consecuencia, Rombus sólo  dispondrá de los datos personales de aquellos Usuarios que  voluntariamente quieran proporcionárselos a través del formulario de  adhesión. Sólo en ese caso en que el Usuario lo desee, y siempre de  forma voluntaria, podrá comunicar sus datos de carácter personal a  Rombus.</p>
                <p className='pb-5'>Dichos datos proporcionados voluntariamente por el  usuario podrán ser incorporados a un fichero bajo la titularidad de  Rombus y podrán ser publicados en el Sitio Web. En consecuencia, el  Usuario que voluntariamente proporcione a Rombus sus datos personales,  acepta expresamente el tratamiento de los mismos, con la finalidad de  gestionar su condición de Usuario registrado de Rombus.</p>
                <p className='pb-5'>En  cualquier caso, los datos recogidos serán tratados siempre respetando la normativa vigente en materia de protección de datos de carácter  personal y de conformidad con lo establecido en la Ley Nº 25.326.
                    Toda la información que facilite el usuario a través de Rombus deberá ser  veraz. A estos efectos, el usuario garantiza la autenticidad de todos  aquellos datos que comunique como consecuencia de la cumplimentación de  los formularios de solicitud de información. De igual forma, se deberá  mantener la información facilitada a Rombus actualizada. En todo caso,  el usuario será el único responsable de las manifestaciones falsas o  inexactas que realice y de los perjuicios que cause a Rombus o a  terceros por la información que facilite.
                </p>
                <p className='pb-5'>Información del perfil</p>
                <p className='pb-5'>Todo Usuario registrado de Rombus puede proporcionar información adicional  para conformar su perfil individual, como ser describir sus aptitudes,  experiencia profesional, trayectoria académica, referencias  profesionales y muestras de trabajos. Si utiliza esta opción y  proporciona información adicional, el usuario sacará mayor provecho de  Rombus ya que el perfil individual le ayudará a expresar su identidad  profesional, ser contactado por otros profesionales y acceder a mayores  oportunidades.</p>

            </div>

            <div className="w-full flex justify-center mt-[160px] mb-[120px]">
                <div className="w-[1235px] flex justify-center gap-[140px] items-start text-black">

                    <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-black text-center px-2">
                        <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className='rounded-lg' />
                        <div className="mt-[24px] w-[132px] text-center text-[24px] leading-[24px]">
                            Agenda una reunión
                        </div>
                    </div>

                    <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-black text-center px-2">
                        <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className='rounded-lg' />
                        <div className="mt-[24px] w-[132px] text-center text-[24px] leading-[24px]">
                            Envíanos un mensaje
                        </div>
                    </div>

                    <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-black text-center px-2">
                        <Image src="/Chat.gif" alt="Chat" width={64} height={64} className='rounded-lg' />
                        <div className="mt-2 text-[16px] leading-tight">
                            Chatea con Romy<br />nuestro agente IA
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Politicas