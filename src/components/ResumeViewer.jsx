import React from 'react';
import { Download } from 'lucide-react';

const ResumeViewer = () => {
  return (
    <div className="relative p-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm opacity-30 z-0"></div>
      <div className="relative z-10 animate-fade-in backdrop-blur-lg bg-white/70 border border-gray-300 shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 animate-fade-down">
          Resume
        </h2>
        <p className="text-gray-700 mb-6 animate-fade-in">
          To download my resume, click the button below.
        </p>

        <a
          href="/resume.pdf"
          download="Akhil_Shahni_Resume.pdf"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-medium py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeViewer;
