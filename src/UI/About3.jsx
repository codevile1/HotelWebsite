import "../styles/fadeborder.css";
import Maintag from '../components/Maintag';
import Button from '../components/Button';

const About3 = () => {
  return (
    <div className='w-full min-h-screen bg-gray-100 flex items-center justify-between flex-col '>
      <Maintag value={"II"} />

      <div className="w-full h-[30vw] grid grid-cols-3 gap-4 relative text-8xl text-blue-950 font-serif">
        
        {/* Rooms */}
        <div className="relative group overflow-hidden">
          <div className="border-fade-top" />
          <div className="border-fade-bottom" />

          <img
            src="https://s3-alpha-sig.figma.com/img/eb56/8ee9/b7b1d25dd913b754f7c8c22721acf08b?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nuoK-HsPY4P-BlACbuHS28kQhyJ8WGLRgs~C93JxT-mbPgGwqHPFSw3EFdhRIa4ZQHU2R5i2o3grGWtKNC0hlvuEpkSQzRtVgTu5LbbK6zTvcT282pqWV-V4hzpdcZ99KnZpm0yXY--7tC7NhuTwMLGHY~62-oUcW2w7mRp7GGV0PFEiAxlJwkIfYGrphhln2IqrPgjcPQYGZrQ-EOf3dyq7kLdIS54ZbfpHNDI1ONVSw4WDOlSmTrIePDjRaVXetgDDl6tt9RRCVsS7m~UIQhDTECaGRtw87fk~CHW9jq2uEUVcZRdWmDdUzCA8n1SUOR5m05s3pIxbypBA35faoA__"
            alt="Rooms"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out z-10"
          />

          <div className="relative z-20 h-full w-full flex items-center justify-center hover:text-white  hover:scale-110 transition-all duration-300">
            Rooms
          </div>
        </div>

        {/* Pools */}
        <div className="relative group overflow-hidden">
          <div className="border-fade-top" />
          <div className="border-fade-bottom" />

          <img
            src="https://s3-alpha-sig.figma.com/img/662c/c146/3ec8e3cc1bbd4d74d6e0325580044e86?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SxnLovbX96c2dJ7aLL5DnsLoBa1AolJbbNGkTddhqPewYNawl~p6BjfWR2tN-u7MO2xRuYs4mnMuvVJKp0lu2YV1dKEE96ogAr9ZZeGMlwhBMku4wxMl4noxsbSHN~szwxnfPRhJKhg5wo6jdb2mqMRYCLVEtvPgIFHuwTtTQDpYO4~BOpRb9-quwzmBCdEDdCPC2-ZOJEyr3svneKx1cW~EstHyc~tIefPpWYEna7NidyHbwaPxoftqn-4gJ0r1LwO9G73hQc2Z9pUq-S7DpgISY7MbOhd0ISLHwCOnb0P0zfqEbnKojXp3jZYq-yLOaF3EOjlWP7ZgDFOyFYTTXA__"
            alt="Pools"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out z-10"
          />

          <div className="relative z-20 h-full w-full flex items-center justify-center hover:text-white hover:scale-110 transition-all duration-300">
            Pools
          </div>
        </div>

        {/* Dining */}
        <div className="relative group overflow-hidden">
          <div className="border-fade-top" />
          <div className="border-fade-bottom" />

          <img
            src="https://s3-alpha-sig.figma.com/img/b911/524f/5c93b9f702ab5aea10b708e215076207?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UwjkkU76nbfNXsdMILWSXuWRwZZZwvO2jU1vuT6h~YX5rrzs2C1bIlB-NoS9~7qJuqOGkLMbHaYnWQiMHQVGVH-Ivt5UROKjepbFWKmUMQr-s8A7bsOrO72vvWT~s6EsRLiNj2C8FqR0SpNLQ52a7pcUn3~0Gd7FxC-IM2usdPkDU0YKzb-pRUFR2ngR4rgn4re-oLPEQmOvNX2Y8oGheFPFURmViS9652BfJoBGqszjeKXoduAJ7rAu2MZy5LO1ZNWndo1bzFDMIbSQ8Q2rt3vKHjITTkjS7yp8dBwEbx1iOKkLXvI1vvEnfq6yHNrMqXLYjHp8KydzitYC1aaEdw__"
            alt="Dining"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out z-10"
          />

          <div className="relative z-20 h-full w-full flex items-center justify-center hover:text-white  hover:scale-110 transition-all duration-300">
            Dining
          </div>
        </div>
      </div>

      <Button 
        value={"Accomm..."} 
        style={{ width: "6vw" }} 
      />
    </div>
  );
};

export default About3;
