import React, { useRef } from 'react';

// Style
import '@/components/AnatonellyTech/style.css';

// Libs
import gsap, { toArray } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const index = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);
  var tl = 0;
  var curLayout = 0;

  const introduction = useRef();
  const Tech = useRef();
  useGSAP(
    () => {
      gsap.to('#introduction', {
        scrollTrigger: {
          trigger: '#introduction',
          onEnter: () => {
            tl = 1;
            let layouts = [];

            window.innerWidth <= 980
              ? (layouts = ['final', 'plain', 'none'])
              : (layouts = ['final', 'plain', 'columns', 'none']);

            function nextState() {
              const classList = ['.letter', '.for', '.anatonelly'];
              const state = Flip.getState(classList, {
                props: 'color,backgroundColor',
                simple: true,
              });

              introduction.current.classList.remove(layouts[curLayout]);
              curLayout = (curLayout + 1) % layouts.length;
              introduction.current.classList.add(layouts[curLayout]);
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
              tl === 1
                ? gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState)
                : null;
            }
            gsap.delayedCall(1, nextState);
          },
          onLeave: () => {
            tl = 0;
          },
          onEnterBack: () => {
            tl = 1;
            let layouts = [];

            window.innerWidth <= 980
              ? (layouts = ['final', 'plain', 'none'])
              : (layouts = ['final', 'plain', 'columns', 'none']);

            function nextState() {
              const classList = ['.letter', '.for', '.anatonelly'];
              const state = Flip.getState(classList, {
                props: 'color,backgroundColor',
                simple: true,
              });

              introduction.current.classList.remove(layouts[curLayout]);
              curLayout = (curLayout + 1) % layouts.length;
              introduction.current.classList.add(layouts[curLayout]);
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
              tl === 1
                ? gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState)
                : null;
            }
            gsap.delayedCall(1, nextState);
          },
          onLeaveBack: () => {
            tl = 0;
          },
          toggleActions: 'play pause play pause',
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
        },
      });
    },
    { scope: Tech }
  );

  return (
    <div
      id='AnatonellyTech'
      ref={Tech}
      className='w-full h-auto flex flex-col '
    >
      <div className='bg-neutral-800 h-screen w-full flex flex-col'>
        <div ref={introduction} id='introduction' className='final'>
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
