/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Icons
import { FaMapPin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const index = () => {
  return (
    <div className='xxs:h-auto md:h-screen w-full bg-neutral-800 flex md:flex-row xxs:flex-col md:justify-between items-center p-5 xxs:pb-24 md:pb-0 xxs:gap-10 '>
      <img
        draggable={false}
        className='md:w-1/3 xxs:w-full object-contain'
        src='/Footer/LogoFooter.png'
        alt=''
      />
      <div className='flex md:w-1/3 xxs:w-full gap-5 items-center justify-center'>
        <a href='#'>
          <img draggable={false} src='/Footer/Facebook.png' alt='' />
        </a>
        <a href='#'>
          <img draggable={false} src='/Footer/X.png' alt='' />
        </a>
        <a href='https://www.instagram.com/transportes.global'>
          <img draggable={false} src='/Footer/Instagram.png' alt='' />
        </a>
        <a href='https://wa.me//554598287556?text=Olá+gostaria+de+cotar+um+frete'>
          <img draggable={false} src='/Footer/Whatsapp.png' alt='' />
        </a>
      </div>
      <div className='md:w-1/3 xxs:w-full flex flex-col justify-center  gap-5 '>
        <div className='flex items-center justify-center'>
          <span className='text-white font-black md:text-4xl xxs:text-xl xxs:text-center md:text-start'>
            FALE CONOSCO
          </span>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center w-full gap-3 text-white'>
            <span className='text-white'>
              <MdEmail className='invert text-2xl' />
            </span>
            <span className='font-bold text-white'>Email:</span>
          </div>
          <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
            <span className='text-white md:text-base xxs:text-sm '>
              comercial_tol@globaltransportes.log.br{' '}
            </span>
            <span className='text-white md:text-base xxs:text-sm '>
              comercial@globaltransportes.log.br{' '}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-3'>
            <FaPhoneAlt className='invert text-2xl' />
            <span className='font-bold text-white'>Telefone:</span>
          </div>
          <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
            <span className='text-white md:text-base xxs:text-sm '>
              +55 (45) 99153-6651
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-3'>
            <FaMapPin className='invert text-2xl' />
            <span className='font-bold text-white'>Localização:</span>
          </div>
          <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
            <span className='text-white md:text-base xxs:text-sm text-wrap'>
              Rodovia estadual, PR-182 - conexão com BR Toledo | Paraná
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
