import { GiCampCookingPot } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdMeetingRoom } from "react-icons/md";
import Maintag from "../components/Maintag";

const Page8 = () => {
  return (
    <div className="w-full h-auto lg:h-screen font-serif flex items-center justify-center text-gray-700 flex-col bg-gray-100 px-4 py-8">
      {/* Top Section */}
      <div className="w-full h-auto lg:h-[30vw] flex flex-col lg:flex-row gap-6">
        {/* Card 1 */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-2 text-center px-4">
          <GiCampCookingPot className="text-5xl md:text-6xl" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl my-2 hover:text-blue-900 hover:scale-110 transition-all duration-700">
            Restaurant
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs">
            World-class service & luxury. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis perspiciatis, at natus quas, inventore
            recusandae.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-2 text-center px-4">
          <LiaSwimmingPoolSolid className="text-5xl md:text-6xl" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl my-2 hover:text-blue-900 hover:scale-110 transition-all duration-700">
            Pool
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs">
            Relax & unwind with a view. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda voluptat, obcaecati nam atque a,
            dolorum nobis.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-2 text-center px-4">
          <MdMeetingRoom className="text-5xl md:text-6xl" />
          <h3 className="text-3xl md:text-4xl lg:text-5xl my-2 hover:text-blue-900 hover:scale-110 transition-all duration-700">
            Room
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs">
            Comfortable & elegant stays. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi qui rem eum, maxime earum dignissimos.
          </p>
        </div>
      </div>

      <Maintag value={"V"} />
    </div>
  );
};

export default Page8;
