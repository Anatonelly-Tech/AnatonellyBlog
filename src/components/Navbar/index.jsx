'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [selected, setSelected] = useState('SobreNos');
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const handleNavigation = (sectionId) => {
    setSelected(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop =
        section.offsetTop - navbarHeight - (sectionId === SobreNos ? 20 : 0);

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      id='navbar'
      className='flex top-0 sticky items-center px-16 w-full h-20 gap-24 bg-neutral-800 shadow-md shadow-black/25'
    >
      {selected == 'SobreNos' ? (
        <a
          className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between'
          onClick={() => handleNavigation('SobreNos')}
        >
          <div className='h-1'></div>
          <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
            Sobre nós
          </span>

          <div className=' flex w-full h-1 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          onClick={() => handleNavigation('SobreNos')}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Sobre nós
          </span>
        </a>
      )}
      {selected == 'AnatonellyLLC' ? (
        <a
          className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
          onClick={() => handleNavigation('AnatonellyLLC')}
        >
          <div className='h-1'></div>
          <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
            Anatonelly LLC
          </span>

          <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          onClick={() => handleNavigation('AnatonellyLLC')}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly LLC
          </span>
        </a>
      )}
      {selected == 'AnatonellyTransportes' ? (
        <a
          onClick={() => handleNavigation('AnatonellyTransportes')}
          className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
        >
          <div className='h-1'></div>
          <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
            Anatonelly Transportes
          </span>

          <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          onClick={() => handleNavigation('AnatonellyTransportes')}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly Transportes
          </span>
        </a>
      )}
      {selected == 'AnatonellyTech' ? (
        <a
          onClick={() => handleNavigation('AnatonellyTech')}
          className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
        >
          <div className='h-1'></div>
          <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
            Anatonelly Tech
          </span>

          <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          onClick={() => handleNavigation('AnatonellyTech')}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly Tech
          </span>
        </a>
      )}
      {selected == 'GlobalTransportes' ? (
        <a
          onClick={() => handleNavigation('GlobalTransportes')}
          className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
        >
          <div className='h-1'></div>
          <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
            Global Transportes
          </span>

          <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          onClick={() => handleNavigation('GlobalTransportes')}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Global Transportes
          </span>
        </a>
      )}
    </div>
  );
};

export default Navbar;
