import React from "react";
import { BiSolidUserVoice } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import home from "../images/home.png";
import Demo from "./Demo";
import TrippyScroll from "./3d/TrippyScroll";
function Home() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            Welcome to Your Accessible Study Platform
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering every individual to learn, grow, and achieve their
            dreams.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              A Platform for Everyone
            </h2>
            <p className="mt-4 text-gray-600">
              Our mission is to make education accessible to everyone,
              regardless of their abilities. We’ve designed tools and features
              to ensure disabled individuals can study with ease, fostering an
              inclusive and supportive learning environment.
            </p>
            <ul className="mt-6 space-y-8">
              <li className="flex items-start">
                <FaEye className="mt-1" color="navy" size={20} />
                <p className="ml-3 text-gray-700">
                  Screen reader compatibility for visually impaired learners.
                </p>
              </li>
              <li className="flex items-start">
                <FaMicrophone size={20} color="navy" />
                <p className="ml-3 text-gray-700">
                  Users can navigate through the platform using voice commands.
                </p>
              </li>
              <li className="flex items-start">
                <BiSolidUserVoice size={20} color="navy" />
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
      <div className="bg-[#f0f4f8] flex flex-col items-center p-6">
        {/* Header Section */}
        <header className="text-center py-12">
          <h1 className="text-4xl font-bold text-[#1e293b]">
            Empowering Learning for Everyone
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Transforming education for deaf and mute students with accessible
            learning tools.
          </p>
        </header>

        {/* Features Section */}
        <section className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Interactive Learning Modules
            </h2>
            <p className="text-gray-600 mt-2">
              Engaging video content with sign language interpretation and
              visual-based explanations for complex topics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Language Support
            </h2>
            <p className="text-gray-600 mt-2">
              Real-time conversion of Gujarati text and speech into sign
              language to improve communication skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Inclusive Resources
            </h2>
            <p className="text-gray-600 mt-2">
              Special learning materials tailored for teachers, parents, and HR
              professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Assessment Tools
            </h2>
            <p className="text-gray-600 mt-2">
              Quizzes and progress tracking to monitor individual growth and
              learning.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#1e293b]">
            Join Us in Building an Inclusive Future
          </h2>
          <p className="text-gray-600 mt-4">
            Discover a world where learning knows no barriers. Sign up today and
            embark on a journey of growth and empowerment.
          </p>
          <a href="/signup">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-600 transition">
              Get Started
            </button>
          </a>
        </div>
      </div>
      <TrippyScroll/>
    </div>
  );
}

export default Home;
