/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useEffect } from 'react';

// Components
import CardGuidance from '@/components/CardGuidance';

// Icons
import { FaHandshake } from 'react-icons/fa';
import { RiMedalFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { FaRecycle } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa6';

const index = () => {
  var Img = {
    delay: 2000,
    distance: '100%',
    origin: 'bottom',
    opacity: '0',
    scale: '3',
  };
  var TitleLetter = {
    delay: 500,
    duration: 2000,
    distance: '100%',
    origin: 'right',
    opacity: '0',
  };
  var paragraph = {
    delay: 500,
    distance: '100%',
    origin: 'left',
    opacity: '0',
  };
  var Lists = {
    delay: 500,
    distance: '50%',
    origin: 'bottom',
    opacity: '0',
  };
  useEffect(() => {
    async function loadReveal() {
      const sr = (await import('scrollreveal')).default();

      sr.reveal('#SobreNosTexto1', TitleLetter);
      sr.reveal('#SobreNosTexto2', paragraph);
      sr.reveal('#SobreNosTexto3', Lists);
      sr.reveal('#SobreNosImg', Img);
    }
    loadReveal();
  }, []);

  return (
    <div
      id='SobreNos'
      className='w-full h-auto flex flex-col overflow-x-hidden'
    >
      <span
        id='SobreNosTexto1'
        className=' bg-neutral-800 text-8xl px-14 font-black text-white '
      >
        Sobre nós
      </span>
      <div className='h-screen w-full bg-neutral-800 flex justify-center items-center p-5'>
        <div className='flex flex-col justify-center items-start gap-10'>
          <span
            id='SobreNosTexto2'
            className='text-white text-5xl font-bold w-auto inline-block	'
          >
            Nossa História
          </span>

          <div
            id='SobreNosTexto2'
            className='flex flex-col justify-center items-center'
          >
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
          <span id='SobreNosTexto1' className='text-5xl font-bold'>
            Como Surgiu?
          </span>

          <p id='SobreNosTexto2' className='text-2xl font-normal w-2/3'>
            O Insight para nossa mudança veio ao assistir um filme chamado
            Robôs, onde o personagem soldador fala uma simples frase mas que
            trouxe-me um grande impacto
          </p>

          <div>
            <p id='SobreNosTexto2' className='text-2xl font-normal'>
              - Viu a necessidade?
            </p>
            <p id='SobreNosTexto2' className='text-2xl font-normal'>
              - Atenda!
            </p>
          </div>

          <p id='SobreNosTexto2' className='text-2xl font-normal w-2/3'>
            Deste modo foi criada a Global Transportes Logística Inteligente e
            Digital, conectando mais de 2 milhões de caminhoneiros autônomos,
            empresas e novos parceiros
          </p>
        </div>
        <div
          id='SobreNosImg'
          className='flex -z-10 flex-col justify-end items-end w-1/3 '
        >
          <img
            className='object-contain -mb-1 '
            src='/AboutUs/Robots.svg'
            alt=''
          />
        </div>
      </div>
      <div className='h-screen w-full bg-AboutUs bg-cover flex justify-center flex-col gap-32 p-6'>
        <span
          id='SobreNosTexto1'
          className='text-5xl  px-14 font-black text-white'
        >
          Nossos Numeros
        </span>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <div id='SobreNosTexto3' className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                Mais de 600 transportadoras parceiras
              </p>
            </div>
            <div id='SobreNosTexto3' className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                Mais de 95 milhões em cargas transportadas
              </p>
            </div>
            <div id='SobreNosTexto3' className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                18.000 clientes atendidos direta ou indiretamente
              </p>
            </div>
            <div id='SobreNosTexto3' className='flex w-full gap-5'>
              <img src='/AboutUs/CheckAboutUs.svg' alt='Check' />
              <p className='text-white font-bold text-2xl'>
                Contamos com 100 mil motoristas cadastrados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-screen w-full bg-neutral-800 flex flex-col justify-center items-center gap-10 p-5'>
        <span id='SobreNosTexto3' className='text-white text-5xl font-bold'>
          Nossos Diferenciais
        </span>
        <div className='flex w-full justify-center items-center gap-52'>
          <div className='flex flex-col '>
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Sistema de Frota Virtual e Frete 2.0
            </li>{' '}
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Gestão da frota
            </li>
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Redução de custos
            </li>{' '}
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Aumento da perfomance
            </li>{' '}
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              + 24 transportadoras
            </li>
          </div>
          <div className='flex flex-col '>
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Cursos para caminhoneiros
            </li>
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Casback
            </li>
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Carga seca
            </li>
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              Material biológico
            </li>
            <li id='SobreNosTexto3' className='text-white text-2xl font-normal'>
              + 12 mil caminhões
            </li>
          </div>
        </div>
      </div>
      <div className='h-auto w-full flex justify-center items-center flex-col gap-32 p-6 pt-20'>
        <span id='SobreNosTexto1' className='text-5xl font-black '>
          Orientação Estratégica
        </span>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <span id='SobreNosTexto3' className='text-4xl font-bold'>
              Missão
            </span>
            <div className='flex flex-col items-center gap-4  '>
              <span className='md:w-1/2 xxs:w-full text-lg text-center '>
                A empresa tem como objetivo primordial otimizar toda a cadeia de
                suprimentos, desde a coleta e armazenamento até a distribuição
                dos produtos, garantindo que cada etapa do processo seja
                executada com excelência.
              </span>
              <span className='md:w-1/2 xxs:w-full text-lg text-center h-full'>
                Para isso, ela conta com uma equipe altamente qualificada,
                tecnologia de ponta e uma ampla rede de parceiros logísticos,
                que permitem a agilidade nas operações e a maximização da
                satisfação dos clientes.
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
          <span id='SobreNosTexto3' className='text-4xl font-bold'>
            Visão
          </span>
          <div className='flex'>
            <img
              src='/AboutUs/OrientacaoEstrategica.png'
              className='xxs:hidden md:flex w-1/3 h-80 object-contain'
              alt=''
            />
            <div className='flex flex-col  justify-center w-full gap-5 '>
              <span className='text-lg'>
                Liderar a revolução da logística inteligente, redefinindo a
                forma como as pessoas e mercadorias são conectadas globalmente.
              </span>
              <div className='flex flex-col'>
                <span className='italic text-lg'>
                  Buscamos ser reconhecidos como a principal plataforma que une
                  motoristas confiáveis a pessoas e empresas que precisam
                  realizar fretes de maneira eficiente, segura e sustentável.{' '}
                </span>
                <span className='not-italic text-lg'>
                  {' '}
                  Ao integrar tecnologia de ponta, dados precisos e uma
                  abordagem centrada no cliente, aspiramos criar um impacto
                  positivo nas vidas das pessoas, otimizar a utilização de
                  recursos e contribuir para um mundo mais conectado e
                  interdependente.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
          <span id='SobreNosTexto3' className='text-4xl font-bold'>
            Valores
          </span>
          <span>O que move nossa empresa é você!</span>
          <div className='flex flex-col md:gap-10 xxs:gap-5 items-center justify-center'>
            <div className='flex xxs:flex-col md:flex-row  items-center justify-center w-full gap-5 '>
              <CardGuidance
                icon={<FaHandshake size={30} className='invert' />}
                title={'Compromisso'}
                text={
                  'Nossa empresa reconhece a importância do cumprimento de prazose da garantia de satisfação dos clientes em todas as etapas do processo logístico.'
                }
              />

              <CardGuidance
                icon={<RiMedalFill size={30} className='invert' />}
                title={'Excelência'}
                text={
                  'Investimos constantemente em tecnologia, rastreamento em tempo real e sistemas avançados para garantir precisão e segurança em toda entrega.'
                }
              />

              <CardGuidance
                icon={<HiUserGroup size={30} className='invert' />}
                title={'Parcerias estratégicas'}
                text={
                  'Estamos sempre nos fortalecendo com ajuda de nossos parceiros, com isso oferecemos sempre o melhor serviço com os melhores profissionais do mercado!'
                }
              />
            </div>
            <div className='flex xxs:flex-col md:flex-row items-center justify-center w-full gap-5 '>
              <CardGuidance
                icon={<FaRecycle size={30} className='invert' />}
                title={'Sustentabilidade'}
                text={
                  'Entre nossas ações envolvidas estão a reutilização de materiais que seriam descartados na natureza para produção de mobília sustentável.'
                }
              />
              <CardGuidance
                icon={<FaCity size={30} className='invert' />}
                title={'Responsabilidade Social'}
                text={
                  'Nosso compromisso para com a comunidade é constante, investimos constantemente em projetos sociais e zelamos pelo bem estar de todos.'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
