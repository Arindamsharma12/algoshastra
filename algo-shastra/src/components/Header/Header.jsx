import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Button from "../Button";
import 'core-js/stable';
import 'regenerator-runtime/runtime';4
import { FaMicrophoneSlash } from "react-icons/fa";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import logo from "../../images/logo.jpg";
import { FaMicrophone } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Select from "../Select";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
const navigation = [
  { name: "Courses", href: "#", current: true },
  { name: "About", href: "/about", current: false },
  { name: "AskGenie", href: "/ask-genie", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {transcript,listening,resetTranscript,browserSupportsSpeechRecognition} = useSpeechRecognition()

  if(!browserSupportsSpeechRecognition){
    return <span>Browser doesn't support speech recognition</span>
  }

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option)=>{
    if(option === "webdev"){
      navigate('/webdev')
    }
    else{
      navigate('/dsa')
    }
    toggleDropdown()
  }

  useEffect(()=>{
    if(transcript.toLowerCase().includes("home")){
      navigate("/")
    }
    if(transcript.toLowerCase().includes("login")){
      navigate('/login')
    }
    if(transcript.toLowerCase().includes("sign")){
      navigate('/signup')
    }

  },[transcript,navigate])

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                onClick={() => navigate("/")}
                className="h-13 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.current ? (
                    <div key={item.name}>
                      <button
                        onClick={toggleDropdown}
                        className="w-full px-4 py-2 text-left bg-gray-500 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                      <div className="flex items-center">
                      All Courses &nbsp; {isOpen ? <FaAngleUp/>: <FaAngleDown/>}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="absolute left-0 w-100 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          <ul className="text-gray-700">
                            <li
                              className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                              onClick={() => handleSelect("webdev")}
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
            </div>
          </div>
            
          {listening ? <FaMicrophoneSlash color="white" style={{cursor:"pointer"}}
          onClick={SpeechRecognition.stopListening}/>: <FaMicrophone color="white" style={{cursor:"pointer"}}
          onClick={SpeechRecognition.startListening}
          />}
          <Button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-3"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-3"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </Disclosure>
  );
}
