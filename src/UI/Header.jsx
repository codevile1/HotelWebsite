import { IoMdAppstore } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  return (
    <>
      <header  className="bg-white/10 backdrop-blur-sm absolute top-0 left-0 w-full z-50 text-amber-50">
        <div className="flex w-full items-center justify-between p-4 border-b-1 lg:px-10 border-gray-400 ">
          <button className="flex items-center justify-center gap-1 lg:px-6 px-3 py-1 lg:py-3 lg:font-semibold  bg-blue-950 rounded-full hover:bg-blue-900 transition-all duration-300    ">
            <TiThMenuOutline />
            Menu
          </button>

          <div>
            <div className="flex items-center justify-center lg:gap-8 gap-2 ">
              <h1>2022</h1>
              <h1 className="lg:text-3xl">LOGO</h1>
              <div className="flex">
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-1 lg:px-6 lg:py-3 px-3 py-1 lg:font-semibold  bg-blue-950 rounded-full hover:bg-blue-900  transition-all duration-300  ">
            Booking
            <IoMdAppstore />
          </button>
        </div>
        <div>
   <nav className="relative flex items-center justify-center w-full lg:gap-14 border-b border-gray-400 p-2">
  {["ROOMS", "WELLNESS", "GASTRO", "HOTEL", "EVENTS", "CONTACT"].map((item) => (
    <a
      key={item}
      href="#"
      className="relative group p-2 lg:text-base text-xs"
    >
      <span className="relative z-10 ">{item}</span>

      {/* Hover border animation - center to full */}
      <span className="pointer-events-none absolute -bottom-[9px] left-1/2 w-0 h-[2px] bg-white group-hover:left-0 group-hover:w-full transition-all duration-300 z-20" />
    </a>
  ))}
</nav>


        </div>
      </header>
    </>
  );
};

export default Header;
