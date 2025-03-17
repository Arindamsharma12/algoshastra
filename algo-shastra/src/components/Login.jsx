import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import 'core-js/stable';
import "regenerator-runtime/runtime";
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';
import { Link } from 'react-router-dom';
import LoginVoice from './LoginVoice'

const Login = () => {
  const {register,handleSubmit} = useForm()
  const signup = (data)=>console.log(data)  
  const [isVoice,setIsVoice] = useState(false);

  return (
    <div>
      <div className='flex justify-center items-center'>
      <Button
        onClick={()=>setIsVoice(!isVoice)}
      >
        {isVoice ? "Exit Mode" : "Voice Mode"}
      </Button>
      </div>
      {isVoice ? <LoginVoice/>:
    <div className="min-h-[75vh] flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Log in</h2>

        {/* Registration-Form */}
        <form onSubmit={handleSubmit(signup)}>
          <div className='space-y-5'>
            <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email",{
              required:true
            })}
            />
            <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password",{
              required:true
            })}
            />
            <Button
            type="submit"
            className='w-full'
            >
              Log in
            </Button>
          </div>
        </form>


        <p className="text-center text-sm text-gray-600">
          Already have an account? <Link to='/signup' className='text-blue-500 hover:underline'>
          Signup
          </Link>
        </p>
      </div>
    </div>
    }
    </div>
  );
}

export default Login;
