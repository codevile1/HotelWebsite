import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useState } from "react";

const Finalpage = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden transition-all duration-500">
      {/* Left Section (70%) */}
      <div
        onMouseEnter={() => setHoveredSection("left")}
        onMouseLeave={() => setHoveredSection(null)}
        className={`h-full bg-blue-400 flex items-center justify-center gap-20 transition-all duration-500 ${
          hoveredSection === "left"
            ? "w-[75%]"
            : hoveredSection === "right"
            ? "w-[65%]"
            : "w-[70%]"
        }`}
      >
        <ul className="w-[40vw] text-white text-4xl font-serif flex gap-10 items-center justify-center flex-col">
          <li className="flex gap-8 items-center">
            <span>I</span> Rooms
          </li>
          <li className="flex gap-8 items-center">
            <span>II</span> Wellness
          </li>
          <li className="flex gap-8 items-center">
            <span>III</span> Gastro
          </li>
          <li className="flex gap-8 items-center">
            <span>IV</span> Hotel
          </li>
          <li className="flex gap-8 items-center">
            <span>V</span> Events
          </li>
        </ul>

        <div className="w-[30vw] h-1/2 flex items-start justify-center gap-10 flex-col">
          <h1 className="text-center text-4xl text-white">More About Rooms</h1>
          <ul className="text-white text-xl text-start font-serif flex gap-4 flex-col">
            <li>120 Comfortable Rooms</li>
            <li>Dinings</li>
            <li>Packages</li>
            <li>Pools</li>
          </ul>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div
        onMouseEnter={() => setHoveredSection("right")}
        onMouseLeave={() => setHoveredSection(null)}
        className={`h-full bg-blue-900 text-white flex items-center justify-center flex-col gap-4 text-xl transition-all duration-500 ${
          hoveredSection === "right"
            ? "w-[35%]"
            : hoveredSection === "left"
            ? "w-[25%]"
            : "w-[30%]"
        }`}
      >
        <h1>LOGO</h1>
        <h1 className="text-4xl">Wellness & Pools</h1>
        <h1 className="text-4xl mb-4">Hotel Royal Phoenicia</h1>

        <h6 className="text-center font-medium text-gray-400 text-base">
          Building 1288 <br />
          Road 3931, Block 339 <br />
          Lorem ipsum dolor sit. <br />
          India
        </h6>

        {/* Independent underline hover */}
        <h6 className="relative inline-block cursor-pointer text-white group">
          +918858xxxxx1
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </h6>

        <h6 className="relative inline-block cursor-pointer text-white group">
          info@royalhotel.com
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </h6>

        <h6 className="relative cursor-pointer text-white group flex items-center gap-2">
          Contact <MdOutlineArrowRightAlt />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </h6>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-white text-2xl mt-10">
          <div className="p-2 rounded-full bg-pink-600 hover:bg-pink-700 transition">
            <FaInstagram />
          </div>
          <div className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition">
            <FaFacebookF />
          </div>
          <div className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalpage;
