'use client';
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
// biblioteca de animação n deixa buildar
const index = () => {
  useEffect(() => {
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
    const sr = ScrollReveal();
    // ScrollReveal().reveal("#SobreNos", { delay: 500 });
    sr.reveal('#LogoTop', LogoTop);
    sr.reveal('#LogoBottom', LogoBottom);
    sr.reveal('#Logo1', Logo1);
    sr.reveal('#Logo2', Logo2);
    sr.reveal('#Logo3', Logo3);
    sr.reveal('#Logo4', Logo4);
  }, []);

  return (
    <div className='h-screen bg-truckInicial bg-no-repeat bg-cover bg-center flex flex-col items-center justify-start overflow-x-hidden'>
      <img
        draggable='false'
        className='w-1/6'
        src='/InicialScreen/LogoAnatonelly.svg'
        alt='Caminhão'
        id='LogoBottom'
      />
      <img
        draggable='false'
        className='w-3/6'
        src='/InicialScreen/LogoGrupoAnatonelly.svg'
        alt='Caminhão'
        id='LogoBottom'
      />
      <div className='h-auto py-2 w-full bg-neutral-500/80 flex items-center justify-center gap-40'>
        <img
          draggable='false'
          src='/InicialScreen/AnatonellyTech.svg'
          alt='Caminhão'
          id='Logo1'
        />
        <img
          draggable='false'
          src='/InicialScreen/GlobalTransportes.svg'
          alt='Caminhão'
          id='Logo2'
        />
        <img
          draggable='false'
          src='/InicialScreen/AnatonellyTech.svg'
          alt='Caminhão'
          id='Logo3'
        />
        <img
          draggable='false'
          src='/InicialScreen/GlobalTransportes.svg'
          alt='Caminhão'
          id='Logo4'
        />
      </div>
    </div>
  );
};

export default index;
