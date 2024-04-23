'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [widthNavbar, setWidthNavbar] = useState('0');
  const [selected, setSelected] = useState('SobreNos');
  const [navbarHeight, setNavbarHeight] = useState(0);

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
    console.log('navegou');
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

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    switch (true) {
      case position <= 600:
        setSelected('SobreNos');
        setWidthNavbar('w-0');
        break;
      case position > 600 && position < 4500:
        setSelected('SobreNos');
        setWidthNavbar('w-[10%]');
        break;
      // case position > 1200 && position < 1800:
      //   setSelected('AnatonellyTransportes');
      //   setWidthNavbar('w-2/5');
      //   break;
      // case position > 1800 && position < 2400:
      //   setSelected('AnatonellyTech');
      //   setWidthNavbar('w-3/5');
      //   break;
      // case position > 2400 && position < 3000:
      //   setSelected('GlobalTransportes');
      //   setWidthNavbar('w-4/5');
      //   break;
      default:
        setWidthNavbar('w-full');

        break;
    }
  };

  return (
    <div
      id='navbar'
      className='flex flex-col top-0 sticky items-start z-50  w-full h-20  bg-neutral-800 shadow-md shadow-black/25 justify-center'
    >
      <div className='flex items-center w-full h-full gap-24 px-16'>
        {selected == 'SobreNos' ? (
          <Link
            activeClass='active'
            smooth
            spy
            className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between'
            onClick={() => handleNavigation('SobreNos')}
          >
            <div className='h-1'></div>
            <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
              Sobre nós
            </span>

            <div className=' flex w-full h-1 justify-end items-center bg-neutral-200'></div>
          </Link>
        ) : (
          <Link
            activeClass='active'
            smooth
            spy
            onClick={() => handleNavigation('SobreNos')}
            className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
          >
            <span className='text-white select-none px-2 text-lg font-bold'>
              Sobre nós
            </span>
          </Link>
        )}
        {selected == 'AnatonellyLLC' ? (
          <Link
            activeClass='active'
            smooth
            spy
            className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
            onClick={() => handleNavigation('AnatonellyLLC')}
          >
            <div className='h-1'></div>
            <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
              Anatonelly LLC
            </span>

            <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
          </Link>
        ) : (
          <Link
            activeClass='active'
            smooth
            spy
            onClick={() => handleNavigation('AnatonellyLLC')}
            className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
          >
            <span className='text-white select-none px-2 text-lg font-bold'>
              Anatonelly LLC
            </span>
          </Link>
        )}
        {selected == 'AnatonellyTransportes' ? (
          <Link
            activeClass='active'
            smooth
            spy
            onClick={() => handleNavigation('AnatonellyTransportes')}
            className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
          >
            <div className='h-1'></div>
            <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
              Anatonelly Transportes
            </span>

            <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
          </Link>
        ) : (
          <Link
            activeClass='active'
            smooth
            spy
            onClick={() => handleNavigation('AnatonellyTransportes')}
            className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
          >
            <span className='text-white select-none px-2 text-lg font-bold'>
              Anatonelly Transportes
            </span>
          </Link>
        )}
        {selected == 'AnatonellyTech' ? (
          <Link
            activeClass='active'
            smooth
            spy
            onClick={() => handleNavigation('AnatonellyTech')}
            className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
          >
            <div className='h-1'></div>
            <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
              Anatonelly Tech
            </span>

            <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
          </Link>
        ) : (
          <Link
            activeClass='active'
            smooth
            spy
            onClick={() => handleNavigation('AnatonellyTech')}
            className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
          >
            <span className='text-white select-none px-2 text-lg font-bold'>
              Anatonelly Tech
            </span>
          </Link>
        )}
        {selected == 'GlobalTransportes' ? (
          <Link
            activeClass='active'
            smooth
            spy
            onClick={() => handleNavigation('GlobalTransportes')}
            className='flex flex-col w-auto h-full items-center  bg-gradient-to-b from-neutral-800 to-neutral-700 from-70% rounded-tr-2xl justify-between transition-all'
          >
            <div className='h-1'></div>
            <span className='text-white select-none px-2 text-lg font-extrabold bg-gradient-to-b from-neutral-900 to-60% to-white bg-clip-text text-transparent'>
              Global Transportes
            </span>

            <div className='flex w-full h-1 justify-end items-center bg-neutral-200'></div>
          </Link>
        ) : (
          <Link
            onClick={() => handleNavigation('GlobalTransportes')}
            className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
          >
            <span className='text-white select-none px-2 text-lg font-bold'>
              Global Transportes
            </span>
          </Link>
        )}
      </div>
      <div
        className={`h-[3px] relative transition-width duration-1000 ${widthNavbar}`}>
        <div className='bg-cyan-500 w-full h-full'></div>
      </div>
    </div>
  );
};

export default Navbar;
