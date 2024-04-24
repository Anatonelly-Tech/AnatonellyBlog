'use client';
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import InicialScreen from '@/components/InicialScreen';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen h-auto w-full'>
      <InicialScreen />
      <Navbar />
      <div className='w-screen h-screen flex item-center justify-center flex-col bg-neutral-800'>
        <Carousel />
      </div>
      <div className='flex flex-col gap-96'>
        <AboutUs />
        <Footer /> *
      </div>
    </div>
  );
}
