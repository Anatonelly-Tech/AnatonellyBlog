/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Libs
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card3D = ({ img, title, text }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className='grow basis-40 ' style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='min-w-[200px] max-w-[500px] h-auto bg-neutral-300 flex flex-col items-center justify-center rounded-xl border-4 border-white px-10 py-6 cursor-grab relative shadow-neutral-800 shadow-xl'
      >
        {/* title */}
        <div className='text-2xl mb-6 font-extrabold'>{title}</div>
        {/* text */}
        <div className='max-w-60 mb-6 text-black'>{text}</div>
        {/* img */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          className='absolute -bottom-10 -right-20 w-auto flex items-center justify-center'
        >
          <img
            draggable='false'
            className='bg-neutral-700 w-36 rounded-full h-36 object-cover border-4 border-white shadow-xl'
            src={img}
            alt=''
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card3D;
