/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';

const index = () => {
  var LogoTop = {
    delay: 300,
    durantion: 2000,
    distance: '50%',
    origin: 'top',
    opacity: '0',
    scale: '3',
  };
  var LogoBottom = {
    delay: 300,
    durantion: 2000,
    distance: '50%',
    origin: 'bottom',
    opacity: '0',
    scale: '3',
  };
  var Logo1 = {
    delay: 700,
    durantion: 2000,
    opacity: '0',
    scale: '3',
  };
  var Logo2 = {
    delay: 800,
    durantion: 2000,
    opacity: '0',
    scale: '3',
  };
  var Logo3 = {
    delay: 900,
    durantion: 2000,
    opacity: '0',
    scale: '3',
  };
  var Logo4 = {
    delay: 1000,
    durantion: 2000,
    opacity: '0',
    scale: '3',
  };

  useEffect(() => {
    async function loadReveal() {
      const sr = (await import('scrollreveal')).default();
      sr.reveal('#LogoTop', LogoTop);
      sr.reveal('#LogoBottom', LogoBottom);
      sr.reveal('#Logo1', Logo1);
      sr.reveal('#Logo2', Logo2);
      sr.reveal('#Logo3', Logo3);
      sr.reveal('#Logo4', Logo4);
    }
    loadReveal();
  }, []);

  return (
    <div className='h-screen w-full bg-truckInicial bg-no-repeat bg-cover bg-center flex flex-col items-center md:justify-start xxs:justify-center overflow-x-hidden'>
      <img
        draggable='false'
        src='/InicialScreen/LogoAnatonelly.svg'
        alt='Caminhão'
        id='LogoBottom'
      />
      <img
        draggable='false'
        className='w-3/6 md:flex '
        src='/InicialScreen/LogoGrupoAnatonelly.svg'
        alt='Caminhão'
        id='LogoBottom'
      />
      <div className='h-auto py-2 w-full bg-neutral-500/80 flex flex-row items-center justify-center md:gap-40 xxs:gap-4'>
        <img
          draggable='false'
          src='/InicialScreen/AnatonellyTech.svg'
          alt='Caminhão'
          id='Logo1'
          className='md:w-auto xxs:w-1/6'
        />
        <img
          draggable='false'
          src='/InicialScreen/GlobalTransportes.svg'
          alt='Caminhão'
          className='md:w-auto xxs:w-1/6'
          id='Logo2'
        />
        <img
          draggable='false'
          src='/InicialScreen/AnatonellyTech.svg'
          alt='Caminhão'
          className='md:w-auto xxs:w-1/6'
          id='Logo3'
        />
        <img
          draggable='false'
          src='/InicialScreen/GlobalTransportes.svg'
          alt='Caminhão'
          className='md:w-auto xxs:w-1/6'
          id='Logo4'
        />
      </div>
    </div>
  );
};

export default index;
