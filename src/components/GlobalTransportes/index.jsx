/* eslint-disable @next/next/no-img-element */
import React from 'react';

const index = () => {
  return (
    <div className='w-screen h-auto' id='GlobalTransportes'>
      <div className='w-full text-black text-6xl font-bold pl-10 '>
        <p>Global Transportes</p>
      </div>
      <div className='h-screen w-full gap-20 bg-neutral-800 text-white font-semibold text-4xl flex items-center justify-start flex-col p-10'>
        <div className='w-10/12 flex items-start justify-between text-white '>
          <p className='text-white'>Quem Somos</p>
          <img
            className='drop-shadow-white w-80 shadow-neutral-300 '
            src='/InicialScreen/GlobalTransportes.svg'
            alt=''
          />
        </div>
        <div className='w-1/3 text-xl text-white '>
          Na Global Transportes, somos especialistas em simplificar e otimizar a
          logística para empresas e autônomos em todo o país. Com uma equipe
          dedicada e uma vasta rede de parceiros, estamos comprometidos em
          oferecer soluções eficientes e confiáveis para todas as suas
          necessidades de transporte de carga.
        </div>
      </div>
      <div className='h-screen'>
        <img src='/GlobalTransportes/OpenBox.png' alt='' />
        <img src='/GlobalTransportes/closeBox.png' alt='' />
      </div>
    </div>
  );
};

export default index;
