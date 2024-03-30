import React from "react";
import "./Hero.css";
import herotop from "/assets/one.png";
import bottles from "/assets/heroimg.png";
import cards from '/assets/cards.png';
const Hero = () => {
  return (
    <>
      <div className="hero-container px-28 w-full  flex justify-between">
        <div style={{lineHeight:"2rem"}} className="content w-[50%] flex flex-col gap-8 mb-[10rem] justify-center px-5">
          <h1 className="font-katibeh text-8xl text-[#3E3E3E]">
            IYOGINI <span className="text-[#67A412]">HERBALS</span>
          </h1>
          <p className="text-xl text-[#3E3E3E] font-light ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            maiores, rerum natus enim quisquam aliquid recusandae debitis sed a
            blanditiis animi corrupti quas doloribus nesciunt possimus voluptate
            quae amet quidem id cupiditate.
          </p>
          <div>
            <button style={{transition:"all 0.2s ease-in"}} className="p-2 rounded-lg font-bold hover:bg-lime-400 text-lg bg-[#67A412] text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={herotop} alt="" />
          {/* <h1 className="absolute text-5xl">IYOGINGI</h1> */}
          
            <img style={{height:"50%"}} src={bottles} alt="" />
          
      
            <img src={cards} alt="" />
        
        </div>
      </div>
    </>
  );
};

export default Hero;

{
  /* <h1 className="font-katibeh text-8xl text-[#3E3E3E]">
              IYOGINI <span className="text-[#67A412]">HERBALS</span>
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              maiores, rerum natus enim quisquam aliquid recusandae debitis sed
              a blanditiis animi corrupti quas doloribus nesciunt possimus
              voluptate quae amet quidem id cupiditate.
            </p> */
}
