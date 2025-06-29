import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Maintag from '../components/Maintag';

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
         delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when element hits 80% of viewport
          toggleActions: "play none none reverse", // you can tweak this
        },
      }
    );
  }, []);

  return (
    <div className='w-full h-screen flex items-center justify-center gap-28 flex-col bg-gray-100'>
      <Maintag value={"IV"} />

      <div
        ref={textRef}
        className='lg:text-8xl text-4xl font-serif text-center'
      >
        <h1>
          <span className='lg:text-9xl text-6xl'>E</span>xpceptional gastronomy
        </h1>
        <h1>Served in elegant spaces.</h1>
      </div>
    </div>
  );
};

export default Page6;
