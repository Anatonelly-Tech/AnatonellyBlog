'use client';
import React, { useState, useEffect } from 'react';

import InicialScreen from '@/components/InicialScreen';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <div className='min-h-screen h-auto w-full'>
      <InicialScreen />
      <Navbar />
      <div className='flex flex-col gap-96'>
        {/* SobreNos */}
        <AboutUs />

        <div id='AnatonellyLLC' className='flex w-full h-96 bg-neutral-800'>
          AnatonellyLLC
        </div>
        <div
          id='AnatonellyTransportes'
          className='flex w-full h-96 bg-neutral-800'
        >
          AnatonellyTransportes
        </div>
        <div id='AnatonellyTech' className='flex w-full h-96 bg-neutral-800'>
          AnatonellyTech
        </div>
        <div id='GlobalTransportes' className='flex w-full h-96 bg-neutral-800'>
          GlobalTransportes
        </div>
      </div>
    </div>
  );
}
