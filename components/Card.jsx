import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="relative p-5 rounded-md">
        <div className="absolute inset-0 bg-[#333]/70 backdrop-blur-sm"></div>
        <div className="relative z-10 ">{children}</div>
      </div>
    </>
  );
};

export default Card;
