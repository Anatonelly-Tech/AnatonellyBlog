import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import './style.css';
const Navbar = () => {
  const [selected, setSelected] = useState('SobreNos');
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);

    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    setSelected(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop =
        section.offsetTop - navbarHeight - (sectionId === 'SobreNos' ? 20 : 0);

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const number = Math.trunc(scrolled);
    console.log(number);
    document.getElementById('loadingNav').style.width = `${number}%`;
    for (let i = 0; i < 100; i++) {}
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id='navbar'
      className={`md:flex flex flex-col md:items-start items-end xxs:justify-between md:w-full md:p-0 px-1 w-auto h-auto bg-neutral-700 shadow-md shadow-black/25 sticky md:top-0 top-3 right-3 z-50 md:rounded-none rounded-md transition-all duration-300`}
    >
      <div className='md:flex hidden h-[10px]'></div>
      <div className='md:flex hidden'></div>
      <div
        className={
          'md:hidden w-10 h-10 cursor-pointer flex flex-col items-center justify-center gap-1 relative '
        }
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>
      {/* Lista de itens da navegação */}
      <ul
        className={`md:flex bg-neutral-700 w-auto ${
          isMenuOpen ? 'flex flex-col items-center' : 'hidden'
        }`}
      >
        <li>
          <a
            className={`block py-2 px-4 ${
              selected === 'SobreNos' ? 'text-white font-bold' : 'text-gray-300'
            }`}
            onClick={() => handleNavigation('SobreNos')}
          >
            Sobre nós
          </a>
        </li>
        <li>
          <a
            className={`block py-2 px-4 ${
              selected === 'AnatonellyLLC'
                ? 'text-white font-bold'
                : 'text-gray-300'
            }`}
            onClick={() => handleNavigation('AnatonellyLLC')}
          >
            Anatonelly LLC
          </a>
        </li>
        <li>
          <a
            className={`block py-2 px-4 ${
              selected === 'AnatonellyTransportes'
                ? 'text-white font-bold'
                : 'text-gray-300'
            }`}
            onClick={() => handleNavigation('AnatonellyTransportes')}
          >
            Anatonelly Transportes
          </a>
        </li>
        <li>
          <a
            className={`block py-2 px-4 ${
              selected === 'AnatonellyTech'
                ? 'text-white font-bold'
                : 'text-gray-300'
            }`}
            onClick={() => handleNavigation('AnatonellyTech')}
          >
            Anatonelly Tech
          </a>
        </li>
        <li>
          <a
            className={`block py-2 px-4 ${
              selected === 'GlobalTransportes'
                ? 'text-white font-bold'
                : 'text-gray-300'
            }`}
            onClick={() => handleNavigation('GlobalTransportes')}
          >
            Global Transportes
          </a>
        </li>
      </ul>
      {/* Barra de progresso */}
      <div
        id='loadingNav'
        className={`h-[3px] relative transition-width duration-1000 `}
      >
        <div className='bg-cyan-500 w-full h-[3px] md:flex hidden'></div>
      </div>
    </div>
  );
};

export default Navbar;
