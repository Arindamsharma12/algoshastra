import React, { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import 'core-js/stable';
import 'regenerator-runtime/runtime';4
import { FaMicrophoneSlash } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import logo from "../../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import SpeechRecognition,{ useSpeechRecognition } from "react-speech-recognition";
import { Button } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Courses", href: "#", current: true },
  { name: "About", href: "/about", current: false },
  { name: "AskGenie", href: "/ask-genie", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const navigate = useNavigate();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition</span>;
  }

  const toggleDropdown = () => setIsSelectOpen(!isSelectOpen);
  const handleSelect = (option) => {
    if (option === "webdev") {
      navigate("/webdev");
    } else {
      navigate("/dsa");
    }
    toggleDropdown();
  };

  useEffect(() => {
    if (transcript.toLowerCase().includes("home")) {
      navigate("/");
    }
    if (transcript.toLowerCase().includes("login")) {
      navigate("/login");
    }
    if (transcript.toLowerCase().includes("sign")) {
      navigate("/signup");
    }
  }, [transcript, navigate]);
  return (
    <nav className="bg-[#131B27] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-full justify-around  space-x-4">
            <img
              alt="Your Company"
              src={logo}
              onClick={() => navigate("/")}
              className="h-13 w-auto"
              />
              <h1 className="text-2xl w-[70%] text-white font-bold">Algoshastra</h1>
              {listening ? <div className="flex justify-center items-center "><FaMicrophoneSlash color="white" size={20} style={{cursor:"pointer"}}
                onClick={SpeechRecognition.stopListening}/> </div>: <div className="flex justify-center items-center "><FaMicrophone color="white" size={20} style={{cursor:"pointer"}}
                onClick={SpeechRecognition.startListening}
                /></div>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <IoClose size={30}/> : <GiHamburgerMenu size={30}/>}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="">
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex justify-around flex-wrap">
        <div className=" flex flex-col items-center p-3 space-y-2">
          {navigation.map((item) =>
            item.current ? (
              <div key={item.name}>
                <button
                  onClick={toggleDropdown}
                  className="w-full px-4 py-2 text-left bg-gray-500 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <div className="flex items-center">
                    All Courses &nbsp;{" "}
                    {isSelectOpen ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </button>

                {isSelectOpen && (
                  <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul className="text-gray-700">
                      <li
                        className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                        onClick={() =>{ 
                          handleSelect("webdev")
                          setIsOpen(!isOpen)
                        }}
                      >
                        Web Development
                      </li>
                      <li
                        className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                        onClick={() => handleSelect("dsa")}
                      >
                        DSA (Data Structures and Algorithms)
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={()=>setIsOpen(!isOpen)}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-xl font-medium"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
        
       
                <div className="flex flex-wrap flex-col space-y-2 items-center justify-center">

                <Button
                  type="submit"
                  className="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-700 mr-3"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-700 mr-3"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </Button>
              </div>
                </div>
      )}
    </nav>
  );
};

export default Header;
