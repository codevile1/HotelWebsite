import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useState } from "react";

const Finalpage = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="w-full h-auto min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 overflow-hidden transition-all duration-500">
      {/* Left Section */}
      <div
        onMouseEnter={() => setHoveredSection("left")}
        onMouseLeave={() => setHoveredSection(null)}
        className={`w-full ${
          hoveredSection === "left"
            ? "lg:w-[75%]"
            : hoveredSection === "right"
            ? "lg:w-[65%]"
            : "lg:w-[70%]"
        } h-[100vh] min-h-[100vh] bg-blue-400 flex flex-col md:flex-row items-center justify-center gap-10 p-6 transition-all duration-500`}
      >
        {/* Main List */}
        <ul className="w-full md:w-1/2 text-white text-2xl sm:text-3xl lg:text-4xl font-serif flex gap-6 items-center justify-center flex-col">
          {["Rooms", "Wellness", "Gastro", "Hotel", "Events"].map((item, i) => (
            <li key={item} className="flex lg:gap-4 gap-2 items-center">
              <span>{["I", "II", "III", "IV", "V"][i]}</span> {item}
            </li>
          ))}
        </ul>

        {/* More About Rooms */}
        <div className="w-full md:w-1/2 h-auto flex flex-col items-start justify-center gap-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white text-center lg:text-start w-full">More About Rooms</h1>
          <ul className="text-white text-base sm:text-lg w-full lg:text-xl font-serif flex items-center lg:items-start justify-center  flex-col lg:gap-3">
            <li>120 Comfortable Rooms</li>
            <li>Dinings</li>
            <li>Packages</li>
            <li>Pools</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div
        onMouseEnter={() => setHoveredSection("right")}
        onMouseLeave={() => setHoveredSection(null)}
        className={`w-full ${
          hoveredSection === "right"
            ? "lg:w-[35%]"
            : hoveredSection === "left"
            ? "lg:w-[25%]"
            : "lg:w-[30%]"
        } h-[100vh] bg-blue-900 text-white flex flex-col items-center justify-center p-6 lg:gap-4 gap-2 transition-all duration-500`}
      >
        <h1 className="text-xl sm:text-2xl">LOGO</h1>
        <h1 className="text-2xl sm:text-3xl">Wellness & Pools</h1>
        <h1 className="text-2xl sm:text-3xl mb-4">Hotel Royal Phoenicia</h1>

        <h6 className="text-center font-medium text-gray-400 text-sm sm:text-base leading-snug">
          Building 1288 <br />
          Road 3931, Block 339 <br />
          Lorem ipsum dolor sit. <br />
          India
        </h6>

        {/* Contact Info */}
        {["+918858xxxxx1", "info@royalhotel.com"].map((info) => (
          <h6
            key={info}
            className="relative inline-block cursor-pointer text-white group text-sm sm:text-base"
          >
            {info}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h6>
        ))}

        <h6 className="relative cursor-pointer text-white group flex items-center gap-2 text-sm sm:text-base">
          Contact <MdOutlineArrowRightAlt />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </h6>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-white text-xl sm:text-2xl mt-6">
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
