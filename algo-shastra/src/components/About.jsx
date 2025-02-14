import React from 'react';
import aboutImg from '../images/about.jpg'


const About = () => {
  return (
    <section className="bg-gray-100 py-10 px-5 md:px-20">
      <div className='flex items-center justify-center'>
      <img src={aboutImg} alt="" className='w-[50%] m-4' />
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Our Platform</h2>
        <p className="text-gray-600 text-lg mb-6">
          Our platform is dedicated to empowering blind users by providing an accessible and inclusive digital experience. With cutting-edge technologies, we ensure users can navigate and utilize essential features effortlessly.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Registration</h3>
            <p className="text-gray-600">
              Users can easily register on the platform through voice-guided interactions, ensuring independence and ease of use.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Listening</h3>
            <p className="text-gray-600">
              Blind users can listen to documents available on web pages, enabling access to written content in an audio format.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Quizzes</h3>
            <p className="text-gray-600">
              Participate in quizzes by listening to questions and responding interactively, making learning engaging and accessible.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Doubt Solver</h3>
          <p className="text-gray-600">
            Our AI system assists students by providing intelligent solutions to their doubts, enhancing their learning experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
