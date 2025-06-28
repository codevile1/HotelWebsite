import Card from "../components/Card";


const Page4 = () => {
  const cards = [
    {
      titleTop: "All Season",
      titleMid: "Royal Weekend Escape Package",
      subtitleMid:"from BHD 250 / per person / 3 night",
      buttonText: "More",
      bgImage: "https://s3-alpha-sig.figma.com/img/2f5d/4c32/d2e58a5cc5ec3f967bda809bccc5f40b?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M6bOqtKIsHWYKSAqcyHYBlv~FchybehvKWdcrB4bFt35M3WfJacKlbCDNyjoXs7XLfkeN6f2IYOZGh7Kx-wo7VFaZsTKiAmRQE3Ctz~Ulgy5~JQzjZhN5uGZ4FafBjwHufjtqSiS2UvDUGg0pcjvUaQdS4uK0DeIV4OV1zRVJuOenCBOPsGOWRwUaLGfXv~kZ7JOG9xRGzsnti57rb~GcV59~rTCHxbHcJKf9724KvzUxYeaGx1SAiMoyV4WiOZCrRxmacebKnKDGa~907CkCb5YeUvx3abGMlrsT4fo0z2vxIMZ6A9YVNtSnJrCjIcHx3c4pkCmbie4M3HAeXGOIg__"
    },
    {
      titleTop: "All Season",
      titleMid: "Family Fun Staycation",
      subtitleMid:"from BHD 150 / 4 person / 2 night",
      buttonText: "More",
      bgImage: "https://s3-alpha-sig.figma.com/img/f276/a683/168dc1e3e6b82c1ed17f83e326e7f757?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qAVpsAm-UYuUG9geAJ2hK0rBNF3kKhmguRPkQhqt4A6Ztp9-NvyLPZozrJrLWYvgBfIEiyfvFDxBNqfegHLOEkT7aIJWyalgE7lVyuQKuqmrrxtoZeIZeZfCjK-LPt2CiIrR7E5cUQ6-nUbuBIT5jSyowbshnAfbWRz8hs47iDPhyg3VS6nNzKEYvYXCRon1yM7YjPHzarC9LzzF5xbgHZtptCFi6u8S6BE10kVyU12Ze3~C4MpPYrEdZYUxaXCDNvCb5G2~murBmhExc9lm36xyOXUxDGo~r5JDctpraPbDlUj1FEn8UwvjwHSdU1BEv4ShSn4ehuCDeRUoMiFznA__",
    },
    {
      titleTop: "All Season",
      titleMid: "Family Fun Staycation",
      subtitleMid:"from BHD 550 / per person / 6 night",
      buttonText: "More",
      bgImage: "https://s3-alpha-sig.figma.com/img/c33c/5643/a12675e753c3da3402b22b1fd7fcdfcf?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZAQjo~ud2trbCUpXnyB0-7UENkvUAS9UN8wOXN6PZ3Hx8kBQBKFiu1MkMZpJNZ-n9E46oBzo3ROXF9A2hODN3eijWYVdTRZYerMDSCkD5yqH3-zDpJVokqZctrPk6e0HMxDr2vGXNwoAiC321ZLjEtnDWBgK5sXd7MPVzpeDL~5lo1vLR9VmnVbt58tXJZU~jhpkUhc1pgcuQibD~exZa8~edN-wV1X~zGayPdr~hNsZF2Dd9vjLr1X-O~Q~wSUhY1aOWs6z4jIj0AbVAClrcMIFRuM7bMamE5qZCehjeeCF7gM2OGAfAkvLnsyFzzkSLvapFBM0i7C9TUtF0i1gIg__",
    },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden flex  flex-col pt-12  bg-gray-100  ">
     
      <div className="  text-7xl font-serif font-medium text-center py-4 z-10 mb-3">
      Stay Packages
      </div>

     
      <div className="flex-1 overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory">
        {cards.map((card, index) => (
          <div key={index} className="snap-center w-full  flex items-center justify-center shrink-0">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
