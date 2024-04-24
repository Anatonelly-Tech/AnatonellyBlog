/* eslint-disable @next/next/no-img-element */
import React from 'react';

import CardGuidance from '@/components/CardGuidance';

import { FaTruck } from 'react-icons/fa'; //transporte terrestre
import { GiCargoShip } from 'react-icons/gi'; //transporte maritimo
import { GiAirplaneDeparture } from 'react-icons/gi'; //transporte aéreo
import { CiBoxes } from 'react-icons/ci'; //Serviços Alfandegários:
import { GiHarborDock } from 'react-icons/gi'; //Serviços de Logística

const index = () => {
  return (
    <div
      id='AnatonellyLLC'
      className='w-full h-auto flex flex-col overflow-x-hidden gap-5'
    >
      <span id='SobreNosTexto1' className='  text-8xl px-14 font-black  '>
        Anatonelly LLC
      </span>
      <div className='h-auto w-full bg-neutral-800 flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col justify-center items-start gap-10 p-10'>
          <span
            id='SobreNosTexto2'
            className='text-white text-5xl font-bold w-auto inline-block	'
          >
            introdução
          </span>

          <div className='flex flex-col justify-center h-5/6 items-center gap-5'>
            <span
              id='SobreNosTexto2'
              className='text-white text-2xl font-normal w-1/2 '
            >
              Anatonelly LLC é uma empresa em ascensão no setor de transporte
              internacional, focada em importação e exportação. Nosso
              compromisso é fornecer serviços de alta qualidade e soluções
              logísticas personalizadas para atender às necessidades de nossos
              clientes em todo o mundo. Especializados em transporte terrestre,
              marítimo e aéreo, combinados com serviços de desembaraço
              aduaneiro, buscamos proporcionar uma experiência tranquila e
              confiável em cada etapa do processo. Na Anatonelly LLC, estamos
              comprometidos em expandir as fronteiras de seus negócios,
              conectando você aos mercados globais de maneira eficiente e segura
            </span>
            <span
              id='SobreNosTexto2'
              className='text-white text-2xl font-normal w-1/2 '
            >
              Destaques dos principais serviços oferecidos, como transporte
              terrestre, marítimo e aéreo, além de serviços alfandegários e de
              logística. &ldquo; Na Anatonelly LLC, oferecemos uma ampla gama de
              serviços especializados para atender às demandas do transporte
              internacional. &quot; <br />
              <br />
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 w-full bg-neutral-100 text-black p-10'>
          <span
            id='SobreNosTexto1'
            className='text-start  text-5xl font-bold inline-block w-full '
          >
            Nossa expertise abrange:{' '}
          </span>
          <div className='flex flex-col items-center justify-center gap-10'>
            <div
              id='SobreNosTexto2'
              className=' flex items-center justify-center gap-10'
            >
              <CardGuidance
                icon={<FaTruck size={30} className='invert' />}
                title={'Transporte Terrestre'}
                text={
                  'Navegamos pelas estradas com eficiência e segurança, oferecendo soluções de transporte terrestre ágeis e confiáveis para suas mercadorias, independentemente do destino ou da carga.'
                }
              />
              <CardGuidance
                icon={<GiCargoShip size={30} className='invert' />}
                title={'Transporte Marítimo'}
                text={
                  'Conduzimos sua carga pelos mares com expertise, utilizando rotas marítimas estratégicas e parcerias confiáveis para garantir entregas pontuais e econômicas em todo o mundo.'
                }
              />
              <CardGuidance
                icon={<GiAirplaneDeparture size={30} className='invert' />}
                title={'Transporte Aéreo'}
                text={
                  'Elevamos suas expectativas com nossos serviços de transporte aéreo rápido e eficiente. Com acesso a uma extensa rede de rotas e operadores, garantimos que suas mercadorias cheguem ao destino final no menor tempo possível.'
                }
              />
            </div>
            <div
              id='SobreNosTexto2'
              className='flex items-center justify-center gap-10'
            >
              <CardGuidance
                icon={<CiBoxes size={30} className='invert' />}
                title={'Serviços Alfandegários'}
                text={
                  'Simplificamos os processos alfandegários complexos, fornecendo serviços de desembaraço aduaneiro rápidos e precisos para garantir a conformidade regulatória e a liberação rápida de sua carga.'
                }
              />
              <CardGuidance
                icon={<GiHarborDock size={30} className='invert' />}
                title={'Serviços de Logística'}
                text={
                  'Vamos além do transporte básico, oferecendo soluções de logística completas e personalizadas para otimizar sua cadeia de suprimentos. Desde o armazenamento até a distribuição, estamos aqui para atender às suas necessidades logísticas com eficiência e profissionalismo.'
                }
              />
            </div>
            <span
              id='SobreNosTexto2'
              className=' text-3xl font-semibold w-full p-16 text-justify '
            >
              Na Anatonelly LLC, nossa prioridade é fornecer serviços de alta
              qualidade que atendam e superem as expectativas de nossos
              clientes. Conte conosco para impulsionar seus negócios para novos
              patamares de sucesso no comércio internacional <br />
              <br />
            </span>
          </div>
        </div>
        <div className='bg-AnatonellyLLC h-[91.5vh] w-full bg-cover'>
          <div className='w-full h-full bg-black/80 p-10 flex flex-col items-center justify-start'>
            <span
              id='SobreNosTexto1'
              className='text-start text-neutral-100 text-5xl font-bold inline-block w-full '
            >
              Sobre nós:{' '}
            </span>
            <div className='w-8/12 h-5/6 flex flex-col items-center justify-center gap-20'>
              <p className='text-white text-2xl font-semibold'>
                Informações sobre a equipe de especialistas em logística e
                transporte da Anatonelly LLC.
              </p>
              <p className='text-white text-xl'>
                Na Anatonelly LLC, contamos com uma equipe de especialistas em
                logística e transporte altamente qualificados e experientes,
                dedicados a fornecer soluções personalizadas e eficientes para
                nossos clientes. Com um profundo conhecimento do setor e um
                compromisso inabalável com a excelência, nossa equipe está
                constantemente atualizada com as últimas tendências e melhores
                práticas do setor. Além de nossa equipe interna, colaboramos com
                empresas parceiras estratégicas em todo o mundo, expandindo
                nossa rede e recursos para fornecer um serviço abrangente e
                global. Confie em nossa equipe de especialistas para cuidar de
                todas as suas necessidades de transporte e logística com
                profissionalismo, eficiência e confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;