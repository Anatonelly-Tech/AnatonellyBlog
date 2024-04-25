'use client';
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import InicialScreen from '@/components/InicialScreen';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import AnatonellyLLC from '@/components/AnatonellyLLC';

export default function Home() {
  return (
    <div className='min-h-screen h-auto w-full relative bg-neutral-200 -z-50'>
      <InicialScreen />
      <Navbar />
      <Carousel />
      <div className='flex flex-col gap-96'>
        {/* SobreNos */}
        <AboutUs />
        <AnatonellyLLC />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
