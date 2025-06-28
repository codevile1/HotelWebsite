import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Button = ({value}) => {
  return (
    <div className="relative inline-block group w-[160px] h-[72px]">
      {/* Original Button */}
      <button className="flex items-center justify-center absolute top-0 left-0 w-full h-full border-2 border-gray-600 px-12 py-5 rounded-full text-xl transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
       {value}
      </button>
    
      {/* Hover Circle Play Button */}
      <button className="absolute top-1/2 left-1/2 w-[180px] h-[180px] bg-blue-900 text-white rounded-full flex items-center justify-center text-6xl 
        opacity-0 scale-50 translate-x-[-50%] translate-y-[-50%]
        transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 z-20">
        <MdOutlineKeyboardArrowRight className="drop-shadow-[ -8px_0px_6px_rgba(0,0,0,0.4) ] pointer-events-auto  " />
      </button>
    </div>
  )
}

export default Button