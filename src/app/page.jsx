'use client';
import React from 'react';

// Components
import Carousel from '@/components/Carousel';
import InicialScreen from '@/components/InicialScreen';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import AnatonellyLLC from '@/components/AnatonellyLLC';

export default function Home() {
  return (
    <div className='min-h-screen h-auto w-full relative bg-neutral-200 -z-50 flex flex-col items-end justify-start '>
      <InicialScreen />
      <Navbar />
      <div className='relative -z-40 flex flex-col h-auto w-screen overflow-x-hidden'>
        <Carousel />
        {/* SobreNos */}
        <AboutUs />
        <AnatonellyLLC />
        <Footer />
      </div>
    </div>
  );
}
