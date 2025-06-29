const data = [
  {
    title: "For companies",
    paragraph:
      "For those looking to maintain their fitness routine while traveling, the hotel offers a well equipped fitness center",
    button: "More",
  },
  {
    title: "Family Gatherings",
    paragraph:
      "The Hotel features an on-site restaurant serving a variety of cuisines, diverse dining experiences without leaving the premises",
    button: "More",
  },
  {
    title: "Wellness Center",
    paragraph:
      "Guests can unwind with various spa services, including full-body massages, steam rooms and other spa facilities",
    button: "More",
  },
];

const Page10 = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-gray-100"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/27c1/e594/4aaa628b1c3618ff642a6d3c4fd7e566?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JsvTnsi0YIfPYcBzMewjmoCqW8hXidordHwXsikAwgJwM1suJaWBh9Kh2AD~rIZGz3CuWsEoTfotspuxdxyPldWbqKtyYDsT0kha7wZpd5HF~d3zd7ORDTFR~nvDVOoCQBMifPWsdKwvacj0rseNxwGhKnXgaMMOo6xhKDdUab~hl0knfrPLCCbLtccOGsZtTdURadTKKgqgKi~mBx4PaHTFOvT28M0IpMVCinZl0IkTJDwyx6K5Iprt-s~kKZC3F56hBypzAnMuDL-PepblowJmo9TBNPMewc9apeYk9leR4sW9xF1w-r7bT1OdZWpedWJNUE8~b8fsfYcrtdiPIg__')",
      }}
    >
      {/* Smooth continuous marquee */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden -translate-y-1/2 z-0">
        <div className="flex whitespace-nowrap animate-marquee-smooth">
          <span className="text-9xl text-white  mx-8">
            Corporate Events • Social Celebrations • Corporate Events • Social Celebrations •
          </span>
          <span className="text-9xl text-white   mx-8">
            Corporate Events • Social Celebrations • Corporate Events • Social Celebrations •
          </span>
        </div>
      </div>

      {/* Cards section */}
      <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory z-10 relative">
        {data.map(({ title, paragraph, button }, i) => (
          <div
            key={i}
            className="snap-start w-full h-screen flex items-center justify-center"
          >
            <div className="lg:w-[27vw] w-[55vw] lg:h-[27vw] h-[45vh] bg-white/10 backdrop-blur-sm border border-gray-300 flex items-center justify-center">
              <div className="lg:w-[24vw]  w-[50vw] lg:h-[24vw] h-[42vh] bg-white flex items-center justify-center">
                <div className="text-xl font-serif lg:w-[21vw] w-[45vw] lg:h-[21vw] h-[39vh] border-2 border-gray-300 gap-3 bg-white flex items-center justify-center flex-col px-4 text-center">
                  <h1 className="lg:text-3xl text-xl font-black">{title}</h1>
                  <p className="lg:text-base text-xs text-gray-700">{paragraph}</p>
                  <button className="mt-4 px-6 py-2 border border-gray-700 rounded-full text-sm font-semibold hover:bg-gray-700 hover:text-white transition-all">
                    {button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Smooth marquee keyframes */}
      <style>{`
        @keyframes marquee-smooth {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee-smooth {
          animation: marquee-smooth 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Page10;
