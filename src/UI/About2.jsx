import "../styles/about2.css";

const About2 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="about2-wrapper">
        <div
          className="about2-bg"
          style={{ backgroundImage: "url('/bed.jpeg')" }}
        ></div>

        <div className="about2-slide slide1">
          <img src="/room.jpeg" alt="Room" />
        </div>

        <div className="about2-slide slide2">
          <img src="/swim.jpeg" alt="Swim" />
        </div>
      </div>
      <div className="absolute z-50 border-1 w-[27vw] h-[27vw] bg-white/10 backdrop-blur-sm border-gray-300 flex items-center justify-center">
        <div className="absolute z-50  w-[24vw] h-[24vw] bg-white flex items-center justify-center ">
          <div className="absolute z-50 text-xl text-gray-600 font-serif  w-[21vw] h-[21vw] border-2 border-gray-300 gap-3 bg-white flex items-center justify-center flex-col">
            <h1>Favourite hotel</h1>
            <h1>Business and Event Spaces</h1>
            <h1>Diverse Dining Options</h1>
            <h1>Multiple Swimming Pools</h1>
            <h1>Family-Friendly Amenities</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
