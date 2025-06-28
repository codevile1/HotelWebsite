import "../styles/fadeborder.css";
import Maintag from '../components/Maintag';
import Button from '../components/Button';

const About3 = () => {
  return (
    <div className='w-full min-h-screen bg-gray-100 flex items-center justify-between flex-col '>
      <Maintag value={"II"} />

      <div className="w-full h-[30vw] grid grid-cols-3 gap-4 relative text-8xl text-blue-950 font-serif">
        
        {/* Rooms */}
        <div className="relative group overflow-hidden">
          <div className="border-fade-top" />
          <div className="border-fade-bottom" />

          <img
            src="/bed1.jpeg"
            alt="Rooms"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out z-10"
          />

          <div className="relative z-20 h-full w-full flex items-center justify-center hover:text-white  hover:scale-110 transition-all duration-300">
            Rooms
          </div>
        </div>

        {/* Pools */}
        <div className="relative group overflow-hidden">
          <div className="border-fade-top" />
          <div className="border-fade-bottom" />

          <img
            src="/swim.jpeg"
            alt="Pools"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out z-10"
          />

          <div className="relative z-20 h-full w-full flex items-center justify-center hover:text-white hover:scale-110 transition-all duration-300">
            Pools
          </div>
        </div>

        {/* Dining */}
        <div className="relative group overflow-hidden">
          <div className="border-fade-top" />
          <div className="border-fade-bottom" />

          <img
            src="/dine.jpeg"
            alt="Dining"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out z-10"
          />

          <div className="relative z-20 h-full w-full flex items-center justify-center hover:text-white  hover:scale-110 transition-all duration-300">
            Dining
          </div>
        </div>
      </div>

      <Button 
        value={"Accomm..."} 
        style={{ width: "6vw" }} 
      />
    </div>
  );
};

export default About3;
