import React, { useState,useEffect } from "react";
import Option from "./Option";
import Button from "../Button";


function Problem({problem,setScore,setCurrentIndex,handleResult}) {
  
  const [isSelected,setIsSelected] = useState(false)
  const [isCorrect,setIsCorrect] = useState(false)
  const [sol,setSol] = useState("")
  const [timeLeft,setTimeLeft] = useState(10)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(timeLeft > 0)
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleClick = (option)=>{
    setTimeLeft(10)
    setSol(problem.explaination)
    setIsSelected(true)
    // console.log(option.option)
    if(option.isCorrect){
      setIsCorrect(true)
      setScore(prev=>prev+1)
    }
    else{
      setIsCorrect(false)
    }
    setTimeout(()=>{
      handleResult()
      setCurrentIndex(prev=>prev+1)
    },10000)
  }



  return !isSelected ? (
    <div className="flex justify-center items-center">
      <div className="bg-gray-300 border border-gray-300 shadow-2xl my-3 rounded-2xl w-2xl">
        <h1 className="text-xl px-3 py-2 mb-2 font-bold">
          {problem.questionNo}
        </h1>
        <div className="w-full rounded flex justify-center flex-col items-center bg-white rounded-b-2xl px-3 py-2">
          <p className=" p-4 ">{problem.description}</p>
          {problem.options.map((option) => (
            <Option key={option.id} option={option} handleClick={handleClick}/>
          ))}
        </div>
      </div>
    </div>
  ) 
  : isCorrect ? (
    <div className="min-h-[80vh] flex justify-center flex-col items-center">
      <h1 className="bg-gray-700 text-green-500 px-3 py-2 text-3xl">
        Correct Answer 🎉
      </h1>
      <div className="mt-2 flex flex-col space-y-4 items-center bg-gray-400 h-40 rounded-2xl px-3 py-2">
        <h3 className="text-2xl">Explaination: </h3>
        <p className="">{sol}</p>
        <h1>{`Press Next after ${timeLeft}`}</h1>
      </div>
      {
        timeLeft === 0 ?
      (<Button
        onClick={() => {
          setIsSelected(false);
          setIsCorrect(false);
        }}
      >
        Next
      </Button>):null
      }
    </div>
  ) : (<div className="min-h-[80vh] flex justify-center flex-col items-center">
    <h1 className="bg-gray-700 text-red-500 px-3 py-2 text-3xl">
      Wrong Answer ❌
    </h1>
    <div className="mt-2 flex flex-col space-y-4 items-center bg-gray-400 h-40 rounded-2xl px-3 py-2">
      <h3 className="text-2xl">Explaination: </h3>
      <p className="">{sol}</p>
      <h1>{`Press Next after ${timeLeft}`}</h1>
    </div>
    {
        timeLeft === 0 ?
      (<Button
        onClick={() => {
          setIsSelected(false);
          setIsCorrect(false);
        }}
      >
        Next
      </Button>):null
      }
  </div>
  );
  
}

export default Problem;
