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
        <img src="https://s3-alpha-sig.figma.com/img/8a27/bb15/138a58169a65d72ed8088d58335a5816?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H79ObLB4-kGnBCQNtdNc9Ch10zRxr-fsbY3N3cH10vyBdXoOdEsvP8bGXItbSRRL3baLTAxw7vJrpk7XqzrodTej-TmsoH4z~g~ibwhJDrQfmwI2g74I9Rs4oMWV2qlmRNu2tXW1OTtKBEGmMhu6vg-huy9TojV47up~3a-KCAnQcMF1s7~KA9BAyOqUrr7HCrIFr9~LjFoC4Vfr~pxtZo39w-kT1KEwn6w96axUNsguhaKlg-uF4S-T7dmeFsIlWSEwn77AcvzLjiBTPH-dIRyuQIb5xnW5LUan00Vb1TpYwhli2XQFz3db4DUHN0F4D-USkYqB6wH32cEzL~F9eQ__" alt="Slide" />
      </div>
    </div>
  );
};

export default Hero;
