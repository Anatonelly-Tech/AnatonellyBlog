'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [selected, setSelected] = useState('SobreNos');

  return (
    <div
      className='flex
     fixed items-center px-16 w-full h-28 gap-24 bg-neutral-800 shadow-md shadow-black/25'
    >
      {selected == 'SobreNos' ? (
        <a
          href='#SobreNos'
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700 rounded justify-end gap-8'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Sobre nós
          </span>

          <div className='flex w-full h-3 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          onClick={() => setSelected('SobreNos')}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
          href='#SobreNos'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Sobre nós
          </span>
        </a>
      )}
      {selected == 'AnatonellyLLC' ? (
        <a
          href='#AnatonellyLLC'
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700 rounded justify-end gap-8'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly LLC
          </span>

          <div className='flex w-full h-3 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          href='#AnatonellyLLC'
          onClick={() => {
            setSelected('AnatonellyLLC');
          }}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly LLC
          </span>
        </a>
      )}
      {selected == 'AnatonellyTransportes' ? (
        <a
          href='#AnatonellyTransportes'
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700 rounded justify-end gap-8'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly Transportes
          </span>

          <div className='flex w-full h-3 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          href='#AnatonellyTransportes'
          onClick={() => {
            setSelected('AnatonellyTransportes');
          }}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly Transportes
          </span>
        </a>
      )}
      {selected == 'AnatonellyTech' ? (
        <a
          href='#AnatonellyTech'
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700 rounded justify-end gap-8'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly Tech
          </span>

          <div className='flex w-full h-3 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          href='#AnatonellyTech'
          onClick={() => {
            setSelected('AnatonellyTech');
          }}
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700  justify-center gap-7'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Anatonelly Tech
          </span>
        </a>
      )}
      {selected == 'GlobalTransportes' ? (
        <a
          href='#GlobalTransportes'
          className='flex flex-col w-auto h-full items-center hover:bg-neutral-700 rounded justify-end gap-8'
        >
          <span className='text-white select-none px-2 text-lg font-bold'>
            Global Transportes
          </span>

          <div className='flex w-full h-3 justify-end items-center bg-neutral-200'></div>
        </a>
      ) : (
        <a
          href='#GlobalTransportes'
          onClick={() => {
            setSelected('GlobalTransportes');
          }}
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
