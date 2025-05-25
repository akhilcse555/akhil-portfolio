import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer (React.js)',
    company: 'Samsung SDS',
    period: 'July 2023 – Present (Gurugram)',
    description: `Design and implement dynamic user interfaces with React.js, Tailwind CSS, and Redux Toolkit. 
    Optimized application performance and implemented responsive layouts across devices.`
  },
  {
    role: 'C# Windows Application Developer',
    company: 'Samsung SDS',
    period: 'May 2022 – June 2023 (Gurugram)',
    description: `Built and maintained desktop applications using C#, .NET Framework, and WPF. 
    Integrated RESTful APIs and improved application stability and error handling.`
  }
];

const Experience = () => (
  <section id="experience" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded"></div>
      <ul className="space-y-12">
        {experiences.map((exp, idx) => (
          <li key={idx} className="flex items-start">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              <div className="bg-pink-500 text-white p-2 rounded-full shadow-lg">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>
            {/* Content */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
              <span className="block text-pink-600 font-medium mb-1">{exp.company}</span>
              <span className="text-sm text-gray-500 mb-4 block">{exp.period}</span>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{exp.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
