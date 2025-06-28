import { FaApple, FaGooglePlay } from "react-icons/fa";

const Card = ({ titleTop, titleMid, subtitleMid, buttonText, bgImage }) => {
  return (
    <div
      className="w-[80vw] h-[80vh] bg-cover bg-center flex flex-col justify-between items-center  p-10 border-b-2 border-gray-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[77vw] h-[78vh] border-2 border-white text-white flex items-center justify-evenly flex-col">
        <h2 className="text-2xl  ">{titleTop}</h2>
        <div className="flex items-center justify-center  flex-col">
          <h3 className="text-6xl text-center font-serif font-medium">
            {titleMid}
          </h3>
          <h5 className="text-2xl  mt-2">{subtitleMid}</h5>
        </div>

        <div className="flex justify-center items-center gap-8 mb-4 relative">
          <div className="relative group">
            <span className="w-30 h-30 rounded-full border-1 bg-white/10 backdrop-blur-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center">
             
              <FaGooglePlay />
            </span>

            <button className="px-10 py-3 border-white border-2 text-white rounded-full text-lg font-medium relative z-20 transition-all duration-300 group-hover:opacity-0">
              {buttonText}
            </button>
          </div>

          <div className="relative group">
            <span className="w-25 h-25 border-1 rounded-full bg-blue-950/30 backdrop-blur-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center">
              Booking
            </span>

            <div className="p-4 text-2xl rounded-full border-2 border-white text-white relative z-20 transition-all duration-300 group-hover:opacity-0">
              <FaApple />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
