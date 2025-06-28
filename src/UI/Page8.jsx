import { GiCampCookingPot } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdMeetingRoom } from "react-icons/md";
import Maintag from "../components/Maintag";

const Page8 = () => {
  return (
    <div className=" w-full h-screen font-serif flex items-center justify-center text-gray-700 flex-col bg-gray-100 ">
      {/* Top 30% Section */}
      <div className="w-full h-[30vw] flex ">
        <div className="w-1/3 flex flex-col items-center justify-center gap-2">
          <GiCampCookingPot className="text-6xl" />

          <h3 className="text-5xl my-2 hover:text-blue-900 hover:scale-120 transition-all duration-1000">Restaurant</h3>
          <p className="font-xl text-gray-600 w-xs text-center">World-class service & luxury Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis, at natus quas, inventore recusandae </p>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center gap-2">
         <LiaSwimmingPoolSolid className="text-6xl" />
          <h3 className="text-5xl my-2 hover:text-blue-900 hover:scale-120 transition-all duration-1000">Pool</h3>
          <p className="font-xl text-gray-600 w-xs text-center">Relax & unwind with a view Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptat, obcaecati nam atque a, dolorum nobis. Deserunt reprehenderit in quisquam pariatur!</p>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center gap-2">
          <MdMeetingRoom className="text-6xl " />
          <h3 className="text-5xl my-2 hover:text-blue-900 hover:scale-120 transition-all duration-1000">Room</h3>
          <p className="font-xl text-gray-600 w-xs text-center">Comfortable & elegant stays Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi qui rem eum, maxime earum dignissimos ratio

          </p>
        </div>
      </div>
      <Maintag value={"V"}/> 
    </div>
  );
};

export default Page8;
