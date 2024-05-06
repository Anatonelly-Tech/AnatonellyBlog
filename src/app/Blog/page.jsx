'use client';
import React, { useEffect, useState } from 'react';

// libs
import * as Dialog from '@radix-ui/react-dialog';
import ModalNoticia from '@/components/ModalNoticia';
import spentTime from '@/utils/spentTime';

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://6i0go4dj.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27news%27%5D+%7B%0A++title%2C%0A++subtitle%2C%0A++description%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++createdAt%2C%0A%7D'
      );
      const data = await response.json();
      setData(data.result);
    }

    fetchData();
  }, []);

  return (
    <div className='flex flex-col gap-2 pt-2 justify-center items-center'>
      <span className='md:text-xl xxs:text-lg font-black'>Notícias</span>
      <div className='flex md:flex-row xxs:flex-col w-full h-auto bg-neutral-200'>
        <div className='flex flex-col  items-center justify-center xxs:w-full md:w-2/3 p-2 gap-2'>
          {data.map((item, index) => (
            <>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <div
                    key={index}
                    className='flex md:flex-row xxs:flex-row-reverse shadow-sm shadow-black bg-neutral-300 hover:bg-neutral-400 w-full xxs:p-2 md:p-0 items-center md:justify-start xxs:justify-between gap-2 '
                  >
                    <img
                      className='xxs:w-20 xxs:h-20 xxs:rounded md:rounded-none  md:w-64 md:h-64 object-cover'
                      src={item.imageUrl}
                      alt={item.title}
                      draggable
                    />
                    <div className='flex flex-col xxs:w-[60%] md:w-auto xxs:pl-0 md:pl-5 md:justify-center '>
                      <h2 className='font-black  text-2xl'>{item.title}</h2>
                      <p className='xxs:text-ellipsis  xxs:text-nowrap xxs:overflow-hidden md:text-wrap  font-semibold text-xl text-black/60'>
                        {item.subtitle}
                      </p>
                      <p>{spentTime(item.createdAt)}</p>
                    </div>
                  </div>
                </Dialog.Trigger>
                <ModalNoticia item={item} />
              </Dialog.Root>
              <hr className='border-neutral-500 w-full  shadow-sm shadow-black p-0 m-0' />
            </>
          ))}
        </div>
        <div className='flex flex-col xxs:w-full md:w-1/3 h-auto p-2 gap-2'>
          {data.map(() => (
            <>
              <div className='flex w-full xxs:h-auto md:h-64 items-center justify-center shadow shadow-black'>
                publicidade
              </div>
              <hr className='border-neutral-500 w-full  shadow-sm shadow-black p-0 m-0' />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
