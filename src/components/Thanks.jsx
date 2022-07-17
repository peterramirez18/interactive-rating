import React from "react";
// import image
import Img from "../assets/icons/illustration-thank-you.svg";

const Thanks = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img className="text-white" src={Img} alt="" />
      <span className=" bg-light-grey/10 py-2 px-4 rounded-full leading-none mt-5 text-orange text-sm font-light pt-[12px]">You selected 4 out of 5</span>
      <h1 className="text-white text-[26px] mt-6 tracking-[-1px] font-semibold">
        Thank you!
      </h1>
      <p className="text-medium-grey mt-2 tracking-tight text-sm">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch
      </p>
    </div>
  );
};

export default Thanks;
