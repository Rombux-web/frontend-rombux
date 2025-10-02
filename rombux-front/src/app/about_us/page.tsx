import React from 'react';
import Image from 'next/image';
import Botones from '@/components/BotonesInteractivos/Botones';
import Footer from '@/components/Footer/Footer';

const teamMembers = [
  {
    name: 'Abel García',
    role: 'Research & Design Lead',
    photo: '/Abel.png',
    linkedin: 'https://www.linkedin.com/in/abelfernandogarcia/',
  },
  {
    name: 'Marina Merzaroli',
    role: 'Growth Marketing Lead',
    photo: '/Marina deck dos.PNG',
    linkedin: 'https://ar.linkedin.com/in/marinamerzaroli',
  },
  {
    name: 'Hugo Planiscig',
    role: 'Data & AI Lead',
    photo: '/hugo.png',
    linkedin: 'https://www.linkedin.com/in/hugodamianplaniscig/',
  },
  {
    name: 'Nicolás Moisseff',
    role: 'UX/UI Designer',
    photo: '/nicolas.png',
    linkedin: 'https://www.linkedin.com/in/nmoiseeff/',
  },
  {
    name: 'Joaquín Nabais',
    role: 'Head of Comms',
    photo: '/joaco.png',
    linkedin: 'https://www.linkedin.com/in/joaquinnabais/',
  },
  {
    name: 'Luis Muñoz',
    role: 'Back End Developer',
    photo: '/luis_munoz.png',
    linkedin: 'https://www.linkedin.com/in/l-munoz-m/',
  },
  {
    name: 'Gabriel Martina',
    role: 'Project Manager',
    photo: '/gabriel.png',
    linkedin: 'https://www.linkedin.com/in/gabriel-alfredo-martina/',
  },
];

export default function About_Us() {
  return (
    <div>
      <div className="lg:bg-[url('/Gradiente-Home-5.png')] bg-[url('/Gradiente-Home-6.png')] bg-cover w-full max-w-[1920px] mx-auto px-7 pt-[235px] max-lg:px-0 relative max-sm:pt-[150px]">
        <div className='w-full flex flex-col items-center text-center'>
          <h1 className='text-[64px] leading-[64px] font-medium text-shadow-md text-white max-md:text-[40px] max-md:leading-[40px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
            Quiénes somos
          </h1>
          <p className='mt-[27px] w-[1078px] text-[24px] leading-[28px] max-md:text-[20px] max-md:leading-[25px] text-center text-white max-sm:w-full '>
            Un grupo de especialistas <br className='md:hidden' /> trabajando en cada proyecto,{' '}
            <br className='2xl:hidden max-sm:hidden' /> como <br className='sm:hidden' /> tus partners
            desde el <br className='sm:hidden' /> primer día. Conformamos{' '}
            <br className='2xl:hidden max-sm:hidden' /> equipos <br className='sm:hidden' /> de talentos
            seleccionados para cada <br className='sm:hidden' />
            caso, bajo la <br className='2xl:hidden max-sm:hidden' /> dirección de expertos.
          </p>
        </div>

        {/* Grid única: siempre 3 columnas en md+ */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-10 items-start mt-[189px] mx-[104px] max-lg:mx-[10px] max-2xl:mt-[100px] max-sm:mt-[80px]'>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className='relative flex flex-col items-center text-white'
            >
              <div className='relative'>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={201}
                  height={201}
                  className='object-cover transition-transform duration-300'
                />
                <div className='absolute bottom-[0px] right-[0px] w-[40px] h-[40px]'>
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='/logoin.png'
                      alt={`LinkedIn de ${member.name}`}
                      width={40}
                      height={40}
                      className='rounded-full w-[40px] h-[40px] cursor-pointer'
                    />
                  </a>
                </div>
              </div>

              <div className='relative flex flex-col text-left mt-6'>
                <p className='font-bold text-[24px] max-sm:text-[18px] leading-[28px]'>{member.name}</p>
                <p className='font-medium text-[18px] leading-[28px] mt-[3px]'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className='text-white text-[38px] leading-[36px] text-center sm:hidden'>¡Conectemos!</h3>
        </div>
        <div className='mt-50 pb-23 max-sm:mt-10 '>
          <Botones />
        </div>
      </div>
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  );
}
