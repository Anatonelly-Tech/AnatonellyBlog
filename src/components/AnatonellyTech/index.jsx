import React, { useRef } from 'react';

// Style
import '@/components/AnatonellyTech/style.css';

// Libs
import gsap, { toArray } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/all';

const index = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(Flip);

  const container = useRef();
  useGSAP(
    () => {
      let layouts = [];

      window.innerWidth <= 980
        ? (layouts = ['final', 'plain', 'none'])
        : (layouts = ['final', 'plain', 'columns', 'none']);

      let curLayout = 0;
      function nextState() {
        const classList = ['.letter', '.for', '.anatonelly'];
        const state = Flip.getState(classList, {
          props: 'color,backgroundColor',
          simple: true,
        });

        container.current.classList.remove(layouts[curLayout]);
        curLayout = (curLayout + 1) % layouts.length;
        container.current.classList.add(layouts[curLayout]);

        Flip.from(state, {
          absolute: true,
          stagger: 0.07,
          duration: 0.5,
          ease: 'power2.inOut',
          spin: curLayout == 0,
          simple: true,
          onEnter: (elements, animation) =>
            gsap.fromTo(
              elements,
              { opacity: 0 },
              { opacity: 1, delay: animation.duration() - 0.1 }
            ),
          onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
        });

        gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
      }
      gsap.delayedCall(1, nextState);
    },
    { scope: container }
  );
  return (
    <div id='AnatonellyTech' className='w-full h-auto flex flex-col '>
      <div className='bg-neutral-800 h-screen w-full flex flex-col'>
        <div ref={container} id='container' className='final'>
          <div className='letter T'>T</div>
          <div className='letter e'>e</div>
          <div className='letter c'>c</div>
          <div className='letter h'>h</div>
          <div className='for'>for</div>
          <div className='anatonelly'>Anatonelly</div>
        </div>
      </div>
    </div>
  );
};

export default index;
