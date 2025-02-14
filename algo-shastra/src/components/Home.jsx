import React from 'react'
import { BiSolidUserVoice } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import home from '../images/home.png';
function Home() {
  
  return (
    <div className="bg-gray-100 py-16 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
        Welcome to Your Accessible Study Platform
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Empowering every individual to learn, grow, and achieve their dreams.
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">
          A Platform for Everyone
        </h2>
        <p className="mt-4 text-gray-600">
          Our mission is to make education accessible to everyone, regardless of
          their abilities. We’ve designed tools and features to ensure disabled
          individuals can study with ease, fostering an inclusive and supportive
          learning environment.
        </p>
        <ul className="mt-6 space-y-8">
          <li className="flex items-start">
            <FaEye className='mt-1' color='navy' size={20}/>
            <p className="ml-3 text-gray-700">
              Screen reader compatibility for visually impaired learners.
            </p>
          </li>
          <li className="flex items-start">
            <FaMicrophone size={20} color='navy'/>
            <p className="ml-3 text-gray-700">
            Users can navigate through the platform using voice commands.
            </p>
          </li>
          <li className="flex items-start">
            <BiSolidUserVoice size={20} color='navy'/>
            <p className="ml-3 text-gray-700">
              Dictation support for hands-free learning.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <img
          src={home}
          alt="Learning Platform Illustration"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default Home
