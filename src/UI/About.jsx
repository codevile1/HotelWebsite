import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../components/Button";
import Maintag from "../components/Maintag";

const About = () => {
  return (
    <>
      <main className="w-auto h-screen   text-gray-600 flex items-center justify-evenly flex-col bg-gray-100 ">
       <Maintag value={"I"}/>
        <div className="text-5xl max-w-6xl font-serif  ">
            <h1 className="text-center leading-normal">The stay at Wellness & pool Hotel <br /> ROYAL PHOENICIA means enjoying every moment. Relax,Find inspiration,Be fascinated.</h1>
        </div>

      <Button value={"Hotel"} />

      </main>
    </>
  );
};

export default About;
