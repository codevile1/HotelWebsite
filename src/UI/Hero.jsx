import "../styles/hero.css"; // ✅ Correct path
import Header from "./Header";
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <Header/>
      <div
        className="hero-bg z-0"
        style={{ backgroundImage: "url('img3.jpeg')" }}
      ></div>
      <div className="mt-20 relative font-serif pointer-events-none z-20 w-full h-full flex items-center justify-center flex-col text-white text-9xl">
        <h1>Hotel</h1>
        <h1>Royal Phoenicia</h1>
        <h5 className="uppercase text-2xl mt-14">
          YOUR Favourite place. our family story
        </h5>
        <div className="absolute left-[5%] bottom-[15%] z-30">
          <div className="relative flex items-center justify-center">
            {/* Animated Oval */}
            <svg
              className="absolute w-36 h-20 stroke-animation"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="100"
                cy="50"
                rx="95"
                ry="45"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="600"
                strokeDashoffset="600"
              />
            </svg>
             <svg
              className="absolute w-36 h-20 stroke-animation2"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="103"
                cy="51"
                rx="95"
                ry="45"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="600"
                strokeDashoffset="600"
              />
            </svg>
            <svg
              className="absolute w-36 h-20 stroke-animation3"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="98"
                cy="49"
                rx="95"
                ry="45"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="600"
                strokeDashoffset="600"
              />
            </svg>
            

            {/* Your Text */}
            <div className="font-mono text-white text-xs uppercase flex flex-col items-center justify-center w-36 h-20">
              <h6>important</h6>
              <h6>info</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-slide z-10">
        <img src="/img2.jpeg" alt="Slide" />
      </div>
    </div>
  );
};

export default Hero;
