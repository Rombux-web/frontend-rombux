import React from 'react'
import Grid from './Grid'
import Testimonios from './Testimonios'

function Casos() {
    return (
        <div className='bg-[#F4F0F0] text-black'>
            <div className='flex pt-[286px]'>
                <div className='flex flex-col ml-[137px] w-[629px] leading-[36px]'>
                    <h2 className='font-semibold text-[32px]'>Talento global</h2>
                    <p className='text-[24px] '>Rombux reúne a profesionales calificados de 23 países, en más de 50 especialidades, para atender las necesidades de empresas de todo el mundo. Conozca algunos de los casos atendidos por los talentos de nuestra plataforma.</p>
                </div>
                <div className='w-[720px] ml-[348px] leading-none -mt-[20px]'>
                    <h2 className='text-[120px] ml-[286px]'>Casos/ </h2>
                    <h2 className='text-[120px]'>Testimonios </h2>
                    
                </div>
            </div>
            <div className='flex justify-center mt-[90px] mb-[60px]'>
                <Grid/>
            </div>
            <div>
                <Testimonios/>
            </div>
        </div>
    )
}

export default Casos