import "../styles/about2.css";

const About2 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="about2-wrapper">
        <div
          className="about2-bg"
          style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/7d7c/175b/c74ade354fbdeaa050be85dded43a833?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lcyUPd2qmDICEj15S7CLKcPf6UHtyjMNkhQQhEThn7kyG5~kUpzca85N4Q40tBktIbsbGMZO89wC3Hl~3hj9PyfO1vaAecxejpkronLt4y3KGqVZt7T3PuoxnISDlcw0G8r4PWJgrAkwqMZ5yjHPSnNZ80CyCCwPtMfrBpgb3OSSYHDP-GjIcmRYECwgQUqIa7CDrtYlvzCNPt10FwvQAxpRLoXqQt-48CdPTpKxyOUo0FLITp19tOvFR28av3QeeD-MYsja1o-iR1jOwPSppfa6UbWhM6fkikcy-y2iwncnCxYC-rqj0P995vU0X0AHGjnfCt3MZXhY7zQdV7CBQg__')" }}
        ></div>

        <div className="about2-slide slide1">
          <img src="https://s3-alpha-sig.figma.com/img/d515/cef9/7505b8e6bae3b7565506456c893d7a17?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fjUN6eQJRQSMrYaGXYIczRWyxRi36LL-C2tmFhN4BBdsMX-Z3ZmjZx-PvgjUf47Knj-BlobD29eOysp1kNVFnyPHaMCVVClHs8MnUp7ykkdhw0~5qpd1jwUw-tdQlBuqgS7vn9k93e1-AFivVVLp5EfyUOmAOuK-INXBcclkBpuV846mwalhaydh~SzdHdMp6hAhODvauhS7ARSzeyL63nNYpDdXHIcwHAPXqbhZj25Pz07Wn0nCmVRB95uexErYvTz3LsRyQiiJQBnL08Kg-Md6z3~-fCcENNv5xyqgTacLcJCoVcor4FzEzpklBfAOa6Vz5NaDYIAKu6aSQAKsWw__" alt="Room" />
        </div>

        <div className="about2-slide slide2">
          <img src="https://s3-alpha-sig.figma.com/img/b949/0e73/6b8c7aa7f54f758b9dc048f9dc274fa7?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q7VTGEuo-4M8L2tTWeRNvS2NEqc4gMG~ujw6Tx2gixha2Qvz-8AtteezRv8LBtl5fc5hJOEHVyrOYzvkvXWqOxPpj4WZi8-boVvWmHXq09vZK7Evyn8OHt~HxYABFahLhXkUbx~35CT3msZBzE6KhdX0g22AWGcx4FPcVa7OleBgsXZDP5KUq4EfJZMqu9~fYOhV~hrIDQ6O2bU4EszDc6G00haPrxMnhzM6XdPp~5baUFkA8kR0HwdLtR5JDeixiBM1U2vdKC-5H~qgi17K3QRuFFKmlk-3c7nYeCVvg5ffva0O2k~w7owZOIAkJDB8PlN27CFFi70k6ah136AvbQ__" alt="Swim" />
        </div>
      </div>
      <div className="absolute z-50 border-1 lg:w-[27vw] w-[55vw] lg:h-[27vw] h-[55vw] bg-white/10 backdrop-blur-sm border-gray-300 flex items-center justify-center">
        <div className="absolute z-50  lg:w-[24vw] w-[50vw] lg:h-[24vw] h-[50vw] bg-white flex items-center justify-center ">
          <div className="absolute z-50 lg:text-xl text-xs text-gray-600 font-serif  lg:w-[21vw] w-[45vw] lg:h-[21vw] h-[45vw] border-2 border-gray-300 lg:gap-3 gap-1 bg-white flex items-center justify-center flex-col">
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
