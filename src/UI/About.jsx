import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../components/Button";
import Maintag from "../components/Maintag";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate button with delay
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <main className="w-auto h-screen text-gray-600 flex items-center justify-evenly flex-col bg-gray-100">
      <Maintag value={"I"} />

      <div
        ref={headingRef}
        className="lg:text-5xl text-2xl lg:max-w-6xl font-serif"
      >
        <h1 className="text-center leading-normal">
          The stay at Wellness & pool Hotel <br />
          ROYAL PHOENICIA means enjoying every moment. Relax, Find inspiration,
          Be fascinated.
        </h1>
      </div>

      <div ref={buttonRef}>
        <Button value={"Hotel"} />
      </div>
    </main>
  );
};

export default About;
