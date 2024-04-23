'use client';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Carousel, CarouselItem, CarouselRef } from 'react-round-carousel';
import Footer from '@/components/Footer';
const itemsCarrousel = [
  {
    imagem: '/Carousel/img1.jpg',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img2.jpg',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img3.jpg',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img4.jpg',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img5.jpg',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img6.jpg',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img7.jpg',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img8.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img9.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img10.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img11.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img12.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img13.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img14.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img15.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img16.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img17.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img18.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img19.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
  {
    imagem: '/Carousel/img20.heic',
    alt: 'teste',
    titulo: 'teste',
    paragrafo: 'teste',
  },
];

const index = () => {
  const items: CarouselItem[] = itemsCarrousel.map((item) => ({
    alt: item.alt,
    image: item.imagem,
    content: (
      <div>
        <strong className='text-white'>{item.titulo}</strong>
        <span className='text-white'>{item.paragrafo}</span>
      </div>
    ),
  }));
  const carouselRef = React.createRef<CarouselRef>();

  return <Carousel ref={carouselRef} items={items} slideOnClick />;
};

export default index;
