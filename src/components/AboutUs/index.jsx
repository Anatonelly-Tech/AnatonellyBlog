import React from 'react';

const index = () => {
  return (
    <div id='SobreNos' className='w-full h-auto gap-2 flex flex-col'>
      <span className='text-[#303030] text-8xl px-14 font-black '>
        Sobre nós
      </span>
      <div className='h-96 w-full bg-neutral-800 flex justify-center items-center p-5'>
        <div className='flex flex-col justify-center items-start gap-10'>
          <span className='text-white text-5xl font-bold'>Nossa História</span>

          <div className='flex flex-col justify-center items-center'>
            <span className='text-white text-2xl font-normal w-1/2 '>
              A Global Transportes iniciou suas atividades em junho de 2019 na
              cidade de Betim-MG.
            </span>
            <span className='text-white text-2xl font-normal w-1/2 '>
              Foi em meio a pandemia onde o mundo vivia em um periodo de
              incertezas que ela se consolidou.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
