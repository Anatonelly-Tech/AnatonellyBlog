import React from 'react';

const index = () => {
  return (
    <div id='SobreNos' className='w-full h-auto flex flex-col'>
      <span className='text-8xl px-14 font-black '>Sobre nós</span>
      <div className='h-screen w-full bg-neutral-800 flex justify-center items-center p-5'>
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

      <div className='h-screen w-full flex  pt-10 gap-6'>
        <div className='flex flex-col w-2/3 items-center justify-center gap-5'>
          <span className='text-5xl font-bold'>Como Surgiu?</span>

          <p className='text-2xl font-normal w-2/3'>
            O Insight para nossa mudança veio ao assistir um filme chamado
            Robôs, onde o personagem soldador fala uma simples frase mas que
            trouxe-me um grande impacto
          </p>

          <div>
            <p className='text-2xl font-normal'>- Viu a necessidade?</p>
            <p className='text-2xl font-normal'>- Atenda!</p>
          </div>

          <p className='text-2xl font-normal w-2/3'>
            Deste modo foi criada a Global Transportes Logística Inteligente e
            Digital, conectando mais de 2 milhões de caminhoneiros autônomos,
            empresas e novos parceiros
          </p>
        </div>
        <div className='flex flex-col justify-end items-end w-1/3 '>
          <img
            className='object-contain -mb-1'
            src='/AboutUs/Robots.svg'
            alt=''
          />
        </div>
      </div>
      <div className='h-screen w-full bg-AboutUs bg-cover flex justify-center flex-col gap-32 p-6'>
        <span className='text-5xl  px-14 font-black text-white'>
          Nossos Numeros
        </span>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <div className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                Mais de 600 transportadoras parceiras
              </p>
            </div>
            <div className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                Mais de 95 milhões em cargas transportadas
              </p>
            </div>
            <div className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                18.000 clientes atendidos direta ou indiretamente
              </p>
            </div>
            <div className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                Contamos com 100 mil motoristas cadastrados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-screen w-full bg-neutral-800 flex flex-col justify-center items-center gap-10 p-5'>
        <span className='text-white text-5xl font-bold'>
          Nossos Diferenciais
        </span>
        <div className='flex w-full justify-center items-center gap-52'>
          <div className='flex flex-col '>
            <li className='text-white text-2xl font-normal'>
              Sistema de Frota Virtual e Frete 2.0
            </li>{' '}
            <li className='text-white text-2xl font-normal'>Gestão da frota</li>
            <li className='text-white text-2xl font-normal'>
              Redução de custos
            </li>{' '}
            <li className='text-white text-2xl font-normal'>
              Aumento da perfomance
            </li>{' '}
            <li className='text-white text-2xl font-normal'>
              + 24 transportadoras
            </li>
          </div>
          <div className='flex flex-col '>
            <li className='text-white text-2xl font-normal'>
              Cursos para caminhoneiros
            </li>
            <li className='text-white text-2xl font-normal'>Casback</li>
            <li className='text-white text-2xl font-normal'>Carga seca</li>
            <li className='text-white text-2xl font-normal'>
              Material biológico
            </li>
            <li className='text-white text-2xl font-normal'>
              + 12 mil caminhões
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
