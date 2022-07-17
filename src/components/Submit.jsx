import React, { useState } from "react";

// import icons
import StartIcon from "../assets/icons/icon-star.svg";

const Submit = ({setSeeThanks}) => {
  const numbers = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(0);
  const handleClick = (e, index) => {
    setActive(index);
  };
  return (
    <div>
      <div className="circle bg-dark-blue">
        <img src={StartIcon} alt="" />
      </div>
      <h1 className="text-white text-[26px] mt-6 tracking-[-1px] font-semibold">
        How did we do?
      </h1>
      <p className="text-medium-grey mt-2 tracking-tight text-sm">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex gap-x-5 mt-6">
        {numbers.map((item, index) => {
          return (
            <div
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index
                  ? " bg-light-grey text-white"
                  : "text-medium-grey bg-dark-blue"
              } hover:cursor-pointer hover:bg-orange hover:text-white  circle  leading-none  font-semibold`}
            >
              <span className=" pt-[3px]">{item}</span>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setSeeThanks(false)}
        className=" bg-orange hover:text-orange hover:bg-white tracking-widest text-white font-semibold pt-3 w-full rounded-full py-2 mt-7"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Submit;
