import React from 'react';

const index = () => {
  return (
    <div id='SobreNos' className='w-full h-auto gap-2 flex flex-col'>
      <span className='text-[#303030] text-8xl px-14 font-black '>
        Sobre nós
      </span>
      <div className='h-full w-full bg-neutral-800 p-5'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <span className='text-white text-3xl font-bold'>Nossa História</span>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-white text-2xl font-normal w-1/2 '>
              A Global Transportes iniciou suas atividades em junho de 2019 na
              cidade de Betim-MG.{' '}
            </span>
            <span className='text-white text-2xl font-normal w-1/2 '>
              Foi em meio a pandemia onde o mundo vivia em um periodo de
              incertezas que ela se consolidou.
            </span>
          </div>

          <div className='flex w-full justify-around items-center h-full'>
            <div className='flex flex-col w-full items-center justify-center gap-8'>
              <span className='text-white text-3xl font-bold'>Missão</span>
              <span className='text-white text-2xl font-normal w-1/2 text-center'>
                Conectar pessoas e empresas através de tecnologia e inovação.
              </span>
            </div>
            <div className='flex flex-col w-full items-center justify-center gap-8'>
              <span className='text-white text-3xl font-bold'>Visão</span>
              <span className='text-white text-2xl font-normal w-1/2 text-center'>
                Ser a maior empresa de tecnologia do Brasil.
              </span>
            </div>
            <div className='flex flex-col w-full items-center justify-center gap-8'>
              <span className='text-white text-3xl font-bold'>Valores</span>
              <span className='text-white text-2xl font-normal w-1/2 text-center'>
                Inovação, tecnologia, qualidade e eficiência.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
