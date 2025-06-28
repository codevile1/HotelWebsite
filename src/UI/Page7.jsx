const Page7 = () => {
  return (
    <div className="w-full h-screen flex m-10 items-center justify-center overflow-hidden bg-gray-100  ">
      {/* Left side: Scrollable vertical images, scrollbar hidden */}
      <div className="w-[40%] h-full overflow-y-scroll scrollbar-hide">
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/fe27/4fd6/2cf651108ecec789bf669c75a7cecdf0?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=are8gO8XFv5NQUG6R~~2KmNJWIh-8XuQgyswiesVCLSReKNBOI7cvd5uAOrWWAyTV0jYx~tjyHfvBldli1-IhQKn6sW5PI6cvfZUeFju1A-wuXFhxBJHa3xzjETNt9gYL-RJl-xcxh6CAxUqR3qGaYdS-LppiVcSizpBu7H1GxdCxHWaCnZmy0jReD-booQzs8twlr96R18dHl~EqVeVNei17JhyBNAGAvORjIpdtHokYn3HkCDzLJqlwGaTgXTAYIaDaCTpYAhr~neLM2FtUP~mJXL6Xo6s~qzVWQ72Zl9e1kqP1pDgnjzYvwV0d8Cz-YU00TD6dhsWJLTUBwYjlw__)` }}></div>
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/5c4e/e5c1/27a7a375be11197d2f1a7c0ab34b63d3?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D1U3dvSQN5ntOAHcduwIVQGEunDeYv~yCWl-AFBcGp847V1bospj0za~ucXroJ8-LozsMBEjVp2zsnta36pW367IkOgte61YI8OHLQEatKMOvSoY6ZmZV-tIY5TgWSOWCMB~bLTi8meowAZvCalIqulDOrUyGfiuY8CdE8t6mho9AUaMs4iPWZk7Z0i~4QYculPXDgm32A7E0BtPiMwQwCmT78OFoXccMiWETD03F6e-rXHsGYU287XEKHHd6hrvA03Nd8MIAE5ATRVR7eegLxbfKRCcDy9OW6ofOQAaKywo7hWa2IL1RecYY9QNufsrUYdhKHDmlLV6W0kjrzm19g__)` }}></div>
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/e1f0/c442/4978cfe53e69a5be45e76fe02614782f?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JYP5I208Ozfo1ZY7c1mfQiwp8VvGHm27Q2vMeY-fs3THeCRi97zTwe8OEZG5~ls-K0VImLlIJqqvN7V0nMQeDA5Xbiq-kyQga-qZis-gBVM9wDcTVUvbBQeakS4NnPVvEKqHKPDNA-aoG57cDP25wkUPJQjuspuPB0nXFU-v6gkaWG8z6-tCUzzF8RmUg~mrKQBLPnIYpod7mcBzmWSOUP8YW4h2y18hQ51j1svKzzQs9MWW39Qu74f2bxQDRLyHGKb1N5Oa0b-EgGaYJnT0rnx1CKu-mcWRxA95kqFcK8lVagS33sjVQ7m6RWrCCp-WmDlGVGyyuf2UMbjbsu80Zg__)` }}></div>
      </div>

      {/* Right side: About Us content */}
      <div className="w-[40%] h-full flex flex-col justify-start items-start px-16 bg-white ml-8">
        <h2 className="text-5xl font-medium mb-4 text-left">About Us</h2>
        <p className="text-xl text-gray-700 leading-relaxed  ">
          Welcome to our journey. We are passionate about creating immersive experiences 
          through design, travel, and stories that matter. Our mission is to blend creativity 
          with functionality and connect people with ideas. L consectetur adipisicing elit. Consequuntur, cupiditate. Repudiandae ab, assumenda atque molestias officia hic esse recusandae suscipit animi velit rem.tenetur consequatur fugiat nulla accusantium, tempore maxime ut repellendus excepturi esse, et deserunt quis earum placeat quas vero quidem maiores quia odio quam in. Odio?
          Commodi, provident illum? Voluptate, accusantium odit a earum eum doloremque facere eligendi dolore dolores ullam nesciunt porro ipsumidem minus neque dolore nobis dolores doloremque accusantium. Quaerat, fuga omnis.
        </p>
      </div>
    </div>
  );
};

export default Page7;
