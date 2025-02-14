import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import "core-js/stable";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Button from "./Button";
import { Link } from "react-router-dom";


const SignupVoice = () => {
  const { register, handleSubmit } = useForm();
  const signup = (data) => console.log(data);
  const [fullname,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const voiceCommand = [
    "Say your fullname?",
    `Your fullname is ${fullname}. Say Next to proceed or Repeat to try again`,    
    "Say your email? ",
    `Your email is ${email}. Say Next to proceed or Repeat to try again`,
    "Whats your password?",
    `Your password is ${password}. Say Next to proceed or Repeat to try again`,
    "Text4",
  ]
  const {transcript,listening} = useSpeechRecognition()

  const speak = (text)=>{
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.5;
    window.speechSynthesis.speak(speech);
  }

  useEffect(() => {
      if (transcript.toLowerCase().includes("full name")) {
        const index = transcript.indexOf("Full Name") + "Full Name ".length + 1;
        const extractedName = transcript.substring(index);
        console.log(extractedName)
        setFullname(extractedName);
      }
      if (transcript.toLowerCase().includes("email") ) {
        const index = transcript.indexOf("Email") + "Email".length + 1;
        const extractedName = transcript
          .substring(index)
          .replace("at", "@")
          .replace(/\s+/g, "");
        setEmail(extractedName.toLowerCase());
      }
      if (transcript.toLowerCase().includes("password")) {
        const index = transcript.indexOf("Password") + "Password".length + 1;
        const extractedName = transcript.substring(index);
        setPassword(extractedName);
      }
      if(transcript.toLowerCase().includes("next")){
        speak("Proceeding to next step")
      }
      if(transcript.toLowerCase().includes("repeat")){
        speak("Okay repeating the process")
      }
    }, [transcript,fullname,email,password]);
  


  return (
    <>
        <div>
        <div className="min-h-[70vh] flex justify-center items-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6">
              Create an Account
            </h2>

            {/* Registration-Form */}
            <form onSubmit={handleSubmit(signup)}>
              <div className="space-y-5">
                <Input
                  label="Full Name"
                  value={fullname}
                  
                  placeholder="Enter your fullname"
                  {...register("fullname", {
                    required: true,
                  })}
                />
                <Input
                  label="Email"
                  value={email}
                  
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                  })}
                />
                <Input
                  label="Password"
                  type="password"
                  
                  value={password}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                  })}
                />
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">

        <p onClick={()=>console.log(email)}>Microphone : {listening ? "on" : "off"}</p>
        <Button onClick={SpeechRecognition.startListening}>Start</Button>
        <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
        </div>
        </div>
    </>
  );
};

export default SignupVoice;
