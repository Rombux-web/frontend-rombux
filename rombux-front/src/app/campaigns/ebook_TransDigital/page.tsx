'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitContactForm } from '@/services/contactService';
import toast from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

export default function EbookLanding() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexTelefono = /^[0-9+\s()-]{8,}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!regexNombre.test(nombre)) newErrors.nombre = 'Nombre inválido';
    if (!regexNombre.test(apellido)) newErrors.apellido = 'Apellido inválido';
    if (!regexEmail.test(email)) newErrors.email = 'Formato de email incorrecto';
    if (!regexTelefono.test(telefono)) newErrors.telefono = 'Teléfono inválido';
    if (!captchaToken) newErrors.captcha = 'Por favor, verifica que no eres un robot.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const data = {
      nombre,
      apellido,
      email,
      telefono,
      campaign: 'ebook_TransDigital',
      captchaToken,
    };

    const toastId = toast.loading('Enviando...');
    try {
      await submitContactForm(data);
      toast.success('¡Datos enviados!', { id: toastId, duration: 4000 });
      setNombre('');
      setApellido('');
      setEmail('');
      setTelefono('');
      setCaptchaToken(null);
      setErrors({});
      router.push('/thankyou_campaigns/thankyou_ebook_TransDigital');
    } catch (error) {
      toast.error('Error al enviar el formulario', { id: toastId });
      console.error(error);
    }
  };

  const goToThankYou = () => {
    // Modo revisión: navegar sin enviar ni validar
    router.push('/thankyou_campaigns/thankyou_ebook_TransDigital');
  };

  return (
    <div className='flex flex-col items-center pt-36 min-h-screen bg-white'>
      <div className='max-w-xl mx-auto text-center px-4 mb-8'>
        <h1 className='text-black text-4xl md:text-5xl font-light mb-6'>
          Actualizá tu negocio al entorno digital
        </h1>
        <p className='text-[#D81FB9] text-xl md:text-2xl font-medium mb-6'>
          Comprendé las áreas clave que impulsan el crecimiento de tu negocio online.
        </p>
        <p className='text-gray-700 mb-4 font-medium text-base'>
          Completá tus datos y descargá el e-book Transformación Digital
        </p>
      </div>

      <form
        className='w-full max-w-lg flex flex-col space-y-6 items-center mb-10'
        onSubmit={handleSubmit}
      >
        <div className='w-full'>
          <input
            type='text'
            placeholder='Nombre*'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className='w-full h-12 border border-[#707070] rounded-lg text-base px-4 placeholder:text-gray-600 text-black bg-white font-medium'
          />
          {errors.nombre && <p className='text-red-500 text-sm mt-1 text-left'>{errors.nombre}</p>}
        </div>

        <div className='w-full'>
          <input
            type='text'
            placeholder='Apellido*'
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className='w-full h-12 border border-[#707070] rounded-lg text-base px-4 placeholder:text-gray-600 text-black bg-white font-medium'
          />
          {errors.apellido && <p className='text-red-500 text-sm mt-1 text-left'>{errors.apellido}</p>}
        </div>

        <div className='w-full'>
          <input
            type='email'
            placeholder='Email*'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full h-12 border border-[#707070] rounded-lg text-base px-4 placeholder:text-gray-600 text-black bg-white font-medium'
          />
          {errors.email && <p className='text-red-500 text-sm mt-1 text-left'>{errors.email}</p>}
        </div>

        <div className='w-full'>
          <input
            type='text'
            placeholder='Teléfono*'
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className='w-full h-12 border border-[#707070] rounded-lg text-base px-4 placeholder:text-gray-600 text-black bg-white font-medium'
          />
          {errors.telefono && <p className='text-red-500 text-sm mt-1 text-left'>{errors.telefono}</p>}
        </div>

        <div className='w-full flex flex-col items-center'>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={(token) => setCaptchaToken(token)}
            theme='light'
          />
          {errors.captcha && <p className='text-red-500 text-sm mt-1 text-left'>{errors.captcha}</p>}
        </div>

        {/* Modo revisión: botón navega directo sin enviar */}
        <button
          type='button'
          onClick={goToThankYou}
          className='bg-[#D81FB9] text-white text-lg font-semibold h-12 w-48 rounded-full mt-4 transition-transform hover:brightness-110 active:scale-95'
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
