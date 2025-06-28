import Maintag from "../components/Maintag";

const gridData = [
  {
    title: "Fitness",
    subtitle: "Center",
    paragraph:
      "For those looking to maintain their fitness routine while traveling, the hotel offers a well equipped fitness center",
    image:
      "https://s3-alpha-sig.figma.com/img/58ed/7bf3/c590db62f04efa2a5e8e0bbba241b49d?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XyGR7s6~~VER1i6sz6iZ1e6-32psvBn0kh1R9K7XnvrXwYEEa6SzmHQuKi3JFT1ZD1MbcBmvpz9bTvESjkauq7Q0FLfiFWzMQAiPw8en5uMXNmCLbMCKra2k2IFnQugNp3HbkjOWKCAtMBspFCFvcC2aLM8qsKKX9GHqUaSDfc7Xws7WI7gqq1hj6sfMl1RIR88XEIWeT3DDu5o1senU3O3WvHsaML23Gtj8UV~NGfXrAlis6qEwddiGEYz6ZAXqqIA2witQ7NmkE6xEgDzkCiTvCOqCNkeTvx~k-AAfVw5RDWqVNcBhPzobWfDMhJMj1RmHQ7LrtaOgaI24whp43w__",
  },
  {
    title: "On-Site",
    subtitle: "Dining",
    paragraph:
      "The Hotel features an on-site restaurant serving a variety of cuisines, diverse dining experiences without leaving the premises",
    image:
      "https://s3-alpha-sig.figma.com/img/f991/8d3d/9d060b0110b529a21282fe2587031fcb?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sKC1dV22J9TBXR4FhdN865DZ3Hl7hOoEde0y9acbMLsM9bmrQ84Og15phT2mFfbuq~5xja-uOODUiuKeyRTlmw7TADfZkBGLTEkE-bzdZ6UYVODC9QxtafeHH57-3jkVqFHd5azA9eJe0auGq1hY8MGxW3-MRZ6i2Fnw-JVh028H7F06ZhLEJd37ZWN0Rqe-KHhyvvfQ9UoUqHCSf9T31odZOyw8HMvKtk2e6tvAkOqqbi03i71B3PJhqzWPZ7Q8BinTp718cbECBoB9atENjrVYmegG~pN-Gavx-Q4YjmteOOTDKiNdvZYWTxI3yTxTe8hW1l3sbJeAhqWhrcXV-A__",
  },
  {
    title: "Wellness Center",
    subtitle: "& Spa",
    paragraph:
      "Guests can unwind with various spa services, including full-body massages, steam rooms and other spa facilities",
    image:
      "https://s3-alpha-sig.figma.com/img/541f/ecd3/1a1cad85ef7da8f15a2a7c6908f2e6ca?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h1NvnbsqTZqBZ8tI8tfQJGBS2cRcTVyFXieC7Ha0UNLWbtYDbeV1RPDV8Xi2NLUG5XIi6s7CiqrGah09Ln0QF5GQ8vwu0-fEC6345jCQEhlpUO3tVD7tZCLAreGZjy2IWO~C4KbnuiYmmJXnO90XTfEMR~vUkTRq0y26pkBMSSIxtrSUEmuvL5jMmcSTAI7UQaPsImDyDrzhex7U5ISU4HjQK10SmRcRQxhDKY7Exa4JZ7qXmjggVsxK0cPvFimrrH~6L3pMBqmW9fE6PXwVvJuWDMZtQ8pjbfG2rxage9wp5rfZu6nl9us2Vv1NcByS0mdxaSTsbz-VkpoByfr9YA__",
  },
];

const Page5 = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-100 px-6 py-16 flex flex-col items-center font-serif">
       <Maintag value={"III"}/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full mt-4">
        {gridData.map((item, index) => (
          <div
            key={index}
            className="group relative h-[600px] overflow-hidden rounded-xl cursor-pointer"
          >
            
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            
            <div className="absolute inset-0 bg-opacity-10 group-hover:bg-opacity-60 transition duration-500"></div>

            
            <div className="relative  z-10 w-full h-full flex flex-col justify-center items-center text-white px-4 text-center">
              
              {index === 1 && (
                <>
                 
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 group  z-10">
  
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="w-28 h-28 rounded-full bg-blue-950/30 backdrop-blur-md text-white text-4xl  font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
      {">"}
    </span>
  </div>

  
  <div className="border-1 border-white font-sans bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-base font-medium text-white transition-all duration-300 group-hover:opacity-0 z-20 relative">
    Spa & Wellness
  </div>
</div>

                </>
              )}

              
              <h3 className="text-4xl mb-2">{item.title}</h3>
              <h1 className="text-6xl mb-2">{item.subtitle}</h1>
              <p className="text-xl font-normal opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
