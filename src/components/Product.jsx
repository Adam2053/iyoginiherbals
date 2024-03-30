import React from "react";
import banner from "/assets/banner.png";
import p1 from "/assets/pro1.png";
import p2 from "/assets/pro2.png";
import cards from "/assets/cards2.png";
import './Product.css'

import { Link, animateScroll as scroll } from "react-scroll";
const Product = () => {
  const product = [
    {
      name: "IYOGINI",
      pro: "HAIR OIL",
      price: 499,
      qua: "Hair Oil 200ml",
      img: p1,
    },
    {
      name: "IYOGINI",
      pro: "SHAMPOO",
      price: 499,   
      qua: "Shampoo 200ml",
      img: p2,
    },
  ];
  return (
    <div >
      {product.map((p,i) => (
        <div className="parent pro-cont px-[9rem] py-[4rem]" title={p.pro} key={i}>
          <div className="flex justify-between">
            <div className="smallhid">
              <h1 className="text-6xl text-[#949494] font-akshar">IYOGINI</h1>
              <h1 className="text-6xl text-[#949494] font-akshar">HERBALS</h1>
            </div>
            <div className="flex flex-col justify-center">
              <img src={banner} alt="" />
            </div>
            <div className="smallhid">
              <h1 className="text-6xl text-[#949494] font-akshar">HERBAL</h1>
              <h1 className="text-6xl text-[#949494] font-akshar">SHAMPOO</h1>
            </div>
          </div>
          <div className="flex main justify-evenly px-[9rem]">
            <div className="flex items-center">
              <img className="h-[90%]" src={p.img} alt="" />
            </div>
            <div className="flex details flex-col justify-center gap-2">
              <h1 className="text-6xl font-roboto font-bold text-[#000000]">
                IYOGINI <span className="text-[#67A412]">{p.pro}</span>
              </h1>
              <div className="divi">
                <h3 className="text-xl font-bold text-[#67A412] mt-2">
                  {p.qua}
                </h3>
                <h2 className="mb-5 text-[#000000] font-bold text-3xl">
                  INR 499.00{" "}
                  <span className="span text-xl">{"(incl. of all taxes)"}</span>
                </h2>
              </div>
              <img className="cardss" src={cards} alt="" />
              <div>
                <a target="_blank" href="https://wa.me/c/919860184265">
                  <button
                    style={{ transition: "all 0.2s ease-in" }}
                    className="p-4 mt-2 rounded-lg font-bold hover:bg-lime-400 text-lg bg-[#67A412] text-white"
                  >
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
