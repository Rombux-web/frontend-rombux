import React from 'react';
import Image from 'next/image';
import { JOTFORM_AI_AGENT_URL } from '@/config/urls';

export default function Botones() {
  return (
    <div className='w-full flex justify-center'>
      <div
        className='flex flex-col lg:flex-row items-center justify-center
                gap-[90px] lg:gap-x-[200px] 2xl:gap-x-[410px] w-full 
                max-w-[336px] lg:max-w-[900px] 2xl:max-w-[1343px]'
      >
        {/* Agenda una reunión */}
        <a
          href='https://calendly.com/hola-rombux/30min'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center cursor-pointer w-[151px]'
        >
          <Image
            src='/Calendly.gif'
            alt='Calendario'
            width={65}
            height={65}
            className='rounded-lg w-[65px] h-[65px]'
          />
          <div
            className='mt-[24px] text-center font-medium text-white 
                        text-[18px] leading-[24px] lg:leading-[28px] lg:w-auto 
                        whitespace-nowrap lg:whitespace-normal'
          >
            Agenda una <br className='hidden lg:block' /> reunión
          </div>
        </a>

        {/* Mándanos un email */}
        <a
          href='mailto:hola@rombux.com'
          className='flex flex-col items-center cursor-pointer w-[151px]'
        >
          <Image
            src='/Mensaje.gif'
            alt='Mensaje'
            width={65}
            height={65}
            className='rounded-lg w-[65px] h-[65px]'
          />
          <div
            className='mt-[24px] text-center font-medium text-white 
                        text-[18px] leading-[24px] lg:leading-[28px] lg:w-auto 
                        whitespace-nowrap lg:whitespace-normal'
          >
            Mándanos un <br className='hidden lg:block' /> email
          </div>
        </a>

        {/* Chatea con Romy */}
        <a
          href={JOTFORM_AI_AGENT_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center cursor-pointer'
        >
          <Image
            src='/Chat.gif'
            alt='Chat'
            width={65}
            height={65}
            className='rounded-lg w-[65px] h-[65px]'
          />
          <div
            className='mt-[24px] text-center font-medium text-white 
                        text-[18px] leading-[24px] lg:leading-[28px] lg:w-auto 
                        whitespace-nowrap lg:whitespace-normal'
          >
            Chatea con Romy, <br className='hidden lg:block' /> nuestra agente IA
          </div>
        </a>
      </div>
    </div>
  );
}
