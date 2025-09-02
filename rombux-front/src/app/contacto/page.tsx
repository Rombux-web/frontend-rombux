'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import { submitContactForm } from '@/services/contactService';
import {
  regexNombre,
  regexEmail,
  regexEmpresa,
  regexTelefono,
  regexMensaje,
  validarServicios,
} from '@/utils/regex';
import toast from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter(); // 👈 hook
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCheckboxChange = (servicio: string) => {
    setServiciosSeleccionados((prev) =>
      prev.includes(servicio) ? prev.filter((s) => s !== servicio) : [...prev, servicio],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    // Validaciones con toast
    if (!regexNombre.test(nombre)) newErrors.nombre = 'Nombre inválido';
    if (!regexNombre.test(apellido)) newErrors.apellido = 'Apellido inválido';
    if (!regexEmail.test(email)) newErrors.email = 'Correo con formato incorrecto';
    if (!regexTelefono.test(telefono)) newErrors.telefono = 'Número de teléfono incorrecto';
    if (!regexEmpresa.test(empresa)) newErrors.empresa = 'Rellena este campo obligatorio';
    if (!regexMensaje.test(mensaje))
      newErrors.mensaje = 'El mensaje debe tener al menos 25 caracteres.';
    if (!validarServicios(serviciosSeleccionados))
      newErrors.servicios = 'Debes seleccionar al menos un servicio';
    if (!captchaToken) newErrors.captcha = 'Por favor, verifica que no eres un robot.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const data = {
      nombre,
      apellido,
      email,
      telefono,
      empresa,
      mensaje,
      area_de_servicio: serviciosSeleccionados,
      captchaToken,
    };

    const toastId = toast.loading('Enviando respuesta...');

    try {
      await submitContactForm(data);
      toast.success('', {
        id: toastId,
        duration: 4000,
        icon: (
          <div
            style={{
              backgroundColor: '#D81FB9',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '16px',
            }}
          >
            ✔
          </div>
        ),
      });

      // limpiar
      setNombre('');
      setApellido('');
      setEmail('');
      setTelefono('');
      setEmpresa('');
      setMensaje('');
      setServiciosSeleccionados([]);
      setErrors({});

      // ✅ redirigir
      router.push('/thankyou');
    } catch (error) {
      toast.error('Error al enviar el formulario', { id: toastId });
      console.error(error);
    }
  };

  const servicios = [
    { bold: 'Benchmarking', rest: ' / Investigación de mercado y propuesta de valor.' },
    { bold: 'Branding', rest: ' / Identidad, presencia digital, reputación.' },
    { bold: 'Marketing Digital', rest: ' / Conexión y adquisición de clientes.' },
    { bold: 'Growth', rest: ' / Crecimiento y posicionamiento de mercado.' },
    { bold: 'Data&AI', rest: ' / Información clave y automatización de procesos.' },
  ];

  return (
    <div>
      <div
        className='flex flex-col items-center pt-[115px] gap-[40px] 
                    lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[100px] lg:gap-[60px]
                    2xl:ml-[290px] 2xl:pt-[192px]'
      >
        {/* Columna izquierda */}
        <div className='flex flex-col items-center sm:items-start'>
          <h1 className='text-black text-[40px] leading-[40px] w-[332px] font-light lg:text-[70px] lg:leading-[70px] lg:w-[677px] lg:font-light 2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[870px] 2xl:font-normal mb-[20px] lg:mb-[40px] 2xl:mb-[94px]'>
            Te acompañamos en tu desarrollo digital
          </h1>
          <h2 className='text-[#D81FB9] text-[24px] leading-[60px] font-medium w-[336px] text-left lg:text-left lg:text-[48px] lg:leading-[60px] 2xl:text-[48px] 2xl:leading-[48px]'>
            Contáctanos
          </h2>

          <form
            className='mt-[30px] flex flex-col space-y-[25px] items-center max-sm:mt-[25px]'
            onSubmit={handleSubmit}
          >
            <div className='w-full'>
              <input
                type='text'
                placeholder='Nombre*'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className='w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-sm:w-[336px] max-sm:pl-4'
              />
              {errors.nombre && <p className='text-red-500 text-sm mt-1 text-left'>{errors.nombre}</p>}
            </div>

            <div className='w-full'>
              <input
                type='text'
                placeholder='Apellido*'
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className='w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-sm:w-[336px] max-sm:pl-4'
              />
              {errors.apellido && (
                <p className='text-red-500 text-sm mt-1 text-left'>{errors.apellido}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='email'
                placeholder='Email*'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-sm:w-[336px] max-sm:pl-4'
              />
              {errors.email && <p className='text-red-500 text-sm mt-1 text-left'>{errors.email}</p>}
            </div>

            <div className='w-full'>
              <input
                type='text'
                placeholder='Teléfono*'
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className='w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-sm:w-[336px] max-sm:pl-4'
              />
              {errors.telefono && (
                <p className='text-red-500 text-sm mt-1 text-left'>{errors.telefono}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='text'
                placeholder='Empresa*'
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className='w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-sm:w-[336px] max-sm:pl-4'
              />
              {errors.empresa && (
                <p className='text-red-500 text-sm mt-1 text-left'>{errors.empresa}</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className='w-[638px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-6 space-y-8 bg-white mt-8 max-sm:w-[336px] max-sm:space-y-6 max-sm:pl-3 max-sm:mt-2 max-sm:pt-[15px]'>
              <p className='text-[16px] font-medium text-black mb-[26px] leading-[24px] tracking-normal max-sm:text-[18px]'>
                Área/s de servicios requeridos*
              </p>
              {[
                { bold: 'Benchmarking', rest: ' / Investigación de mercado y propuesta de valor.' },
                { bold: 'Branding', rest: ' / Identidad, presencia digital, reputación.' },
                { bold: 'Marketing Digital', rest: ' / Conexión y adquisición de clientes.' },
                { bold: 'Growth', rest: ' / Crecimiento y posicionamiento de mercado.' },
                { bold: 'Data&AI', rest: ' / Información clave y automatización de procesos.' },
              ].map(({ bold, rest }, idx) => (
                <label
                  key={idx}
                  className='flex items-start space-x-[27px] text-[16px] text-black -mt-[2px] max-sm:leading-[16px] max-sm:space-x-[15px]'
                >
                  <input
                    type='checkbox'
                    checked={serviciosSeleccionados.includes(bold)}
                    onChange={() => handleCheckboxChange(bold)}
                    className='w-[25px] h-[25px] border-2 border-gray-400 rounded-md appearance-none bg-white max-sm:w-[23px] max-sm:h-[23px]
                    checked:bg-[#D81FB9] checked:after:text-[#D81FB9] checked:after:text-lg
                     checked:after:flex checked:after:items-center checked:after:justify-center
                     checked:after:w-full checked:after:h-full'
                  />
                  <span className='max-sm:text-[14px] max-sm:w-[262px]'>
                    <strong className='font-semibold'>{bold}</strong>
                    {rest}
                  </span>
                </label>
              ))}
              {errors.servicios && (
                <p className='text-red-500 text-sm mt-1 max-sm:pt-2 ml-[-20px] max-sm:ml-[-12px] text-left'>
                  {errors.servicios}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div className='w-[638px] h-[212px] border border-[#707070] rounded-[5px] p-3 bg-white mt-8 max-sm:w-[336px] max-sm:h-[113px] max-sm:mt-2'>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className='w-full h-full pl-4 pt-[3px] text-[16px] font-bold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent max-sm:pl-1'
                placeholder='¿Por qué tema nos consultas?*'
              />
              {errors.mensaje && (
                <p className='text-red-500 text-sm mt-4 ml-[-12px] text-left'>{errors.mensaje}</p>
              )}
            </div>

            {/* ReCAPTCHA */}
            <div className='mt-4'>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                onChange={(token) => setCaptchaToken(token)}
                theme='light'
              />
              {errors.captcha && (
                <p className='text-red-500 text-sm mt-1 text-left'>{errors.captcha}</p>
              )}
            </div>

            {/* Botón */}
            <div className='w-[638px] flex justify-start max-sm:w-full max-sm:justify-center'>
              <button
                type='submit'
                className='bg-[#D81FB9] text-white text-[18px] font-semibold h-[46px] w-[186px] rounded-[50px] mt-[29px] 2xl:mb-[170px] max-2xl:mb-[170px] max-sm:mb-[100px]  cursor-pointer
         transition-transform duration-150
         hover:brightness-110
         active:scale-95'
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* Columna derecha - imágenes y contacto */}
        <div className='flex flex-col'>
          <div className='relative mr-100 -translate-x-38 mt-37 mr-5 w-[660px] custom-form max-2xl:-translate-x-30 max-xl:w-[350px] max-xl:-translate-x-32 max-xl:translate-y-10 max-lg:hidden'>
            <div className='w-[660px]'>
              <Image
                src='/grupoesfera+halo.png'
                alt='Grupo Formulario'
                width={800}
                height={800}
                className='absolute'
              />
            </div>
            <Image
              src='/Trama esfera celeste.png'
              alt='Trama Formulario'
              width={500}
              height={450}
              className='xl:translate-y-20 xl:translate-x-20 max-xl:w-[260px] max-xl:translate-y-11 max-xl:translate-x-11 animate-spin [animation-direction:reverse] [animation-duration:90s]'
            />
          </div>

          <div className='mt-80 custom-contact-form max-xl:-translate-x-15 max-xl:mt-120 max-lg:mt-0 max-lg:mr-70 max-md:mr-60 max-sm:mr-0 max-sm:ml-5 max-lg:mb-40 max-sm:mb-20'>
            <a href='mailto:hola@rombux.com'>
              <p className='text-[20px] leading-[32px] font-semibold cursor-pointer mt-[20px] mb-12 2xl:text-[24px] 2xl:font-normal 2xl:leading-[28px]'>
                <span className='text-[#707070]'>Email:</span>{' '}
                <span className='text-[#D81FB9]'>hola@rombux.com</span>
              </p>
            </a>

            <div className='w-full text-[#707070]'>
              <h3 className='text-[20px] leading-[28px] font-semibold mb-4 2xl:font-bold 2xl:text-[24px] 2xl:leading-[28px]'>
                Oficina:
              </h3>
              <p className='text-[18px] leading-[28px] font-normal'>
                Lezica 4363,
                <br />
                Ciudad de Buenos Aires
                <br />
                (1202AAI) Argentina
              </p>
            </div>

            <div className='mt-10 max-md:hidden'>
              <a
                href='https://www.linkedin.com/company/rombux'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/logoin.png'
                  alt='LinkedIn Rombux'
                  width={46}
                  height={46}
                  className='cursor-pointer'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  );
}
