import React from 'react';
import profileImg from '../assests/Profile.jpg'; // Replace with your image path

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-blue-100 px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-pink-400 animate-fade-in">
          <img
            src={profileImg}
            alt="Akhil Shahni"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro Text */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Hi, I’m <span className="text-pink-600">Akhil Shahni</span></h1>
          <h2 className="text-2xl font-semibold text-gray-600">Frontend Developer | React.js Enthusiast</h2>
          
          <p className="text-gray-700 max-w-xl">  
           Experienced Frontend Developer with 3 years of experience in software development, including 1 years in C Sharp
           Windows applications and 2 years specializing in <strong>React.js, Redux Toolkit, HTML5, Tailwind CSS,</strong> and<strong> JavaScript.</strong> Passionate about
           creating dynamic, responsive, and user-centric web applications. Actively seeking opportunities to deepen expertise
           in Modern Frontend Technologies.         
          </p> 

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-pink-100 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-pink-700">3+ Years</h4>
              <p className="text-gray-600 text-sm">Total Experience</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-purple-700">React.js & JS</h4>
              <p className="text-gray-600 text-sm">Frontend Expertise</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-700">Growth</h4>
              <p className="text-gray-600 text-sm">Always Learning</p>
            </div>
          </div>
        
          
        </div>
      </div>
    </section>
  );
};

export default Home;
