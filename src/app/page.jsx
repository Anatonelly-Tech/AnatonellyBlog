'use client';
import React from 'react';

import InicialScreen from '@/components/InicialScreen';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <div className='min-h-screen h-auto w-full'>
      <InicialScreen />
      <Navbar />
      <div className='flex flex-col gap-96'>
      <AboutUs />
        <div id='AnatonellyTech' className='flex w-full h-96 bg-neutral-800'>
          tech
        </div>
        <div id='AnatonellyLLC' className='flex w-full h-96 bg-neutral-800'>
          241
        </div>
        <div id='AnatonellyFretes' className='flex w-full h-96 bg-neutral-800'>
          1251
        </div>
        <div id='SobreNos' className='flex w-full h-96 bg-neutral-800'>
          12312
        </div>
        <div id='AnatonellyTech' className='flex w-full h-96 bg-neutral-800'>
          12616
        </div>
      </div>
    </div>
  );
}
