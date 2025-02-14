import React from "react";


function Option({option,handleClick}) {
  return (
    <div id={option.id} className={`flex justify-center items-center border hover:bg-gray-200 rounded-2xl m-3 p-4 w-[50%]`}
    onClick={()=>handleClick(option)}
    >
      <h2>{option.option}</h2>
    </div>
  );
}

export default Option;
