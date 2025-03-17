import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import "core-js/stable";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Link } from "react-router-dom";

const LoginVoice = () => {
  const { register, handleSubmit } = useForm();
  const signup = (data) => console.log(data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser Doesn't Support Speech Recognition</span>;
  }

  useEffect(() => {
    if (transcript.toLowerCase().includes("email")) {
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
    // Event Listeners 
  }, [
    transcript,
    email,
    password,
  ]);

  return (
    <div>
      <div className="min-h-[70vh] flex justify-center items-center flex-col bg-gray-100">
      
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Log in</h2>
          
          {/* Registration-Form */}
          <form onSubmit={handleSubmit(signup)}>
            <div className="space-y-5">
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
                Log in
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
      <p>Microphone: {listening ? "on": "off"}</p>
      <Button onClick={SpeechRecognition.startListening}>
      Start
      </Button>
      <Button onClick={SpeechRecognition.stopListening}>
      Stop
      </Button>
    </div>
    </div>
  );
};

export default LoginVoice;
