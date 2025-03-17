import React from "react";
import "./bubble.modules.css";
import Aboutus from "./Aboutme";

const Example = () => {
  return (
    <div className="my-10 bg-neutral-900 p-4">
      <BubbleText />
      <Aboutus/>
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className=" text-center text-5xl font-thin text-blue-500">
      {"Arindam Sharma".split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;