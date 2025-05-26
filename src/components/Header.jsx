import React, { useState } from 'react';
import jslogo from '../assests/jslogo.png'; 
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = ['home', 'skills', 'experience', 'projects', 'resumeviewer', 'contactme'];

  return (
    <>
  
      <header className="sticky top-0 z-50 backdrop-blur-lg 
bg-gradient-to-r from-[#ff4e4e] via-[#fc913ad9] to-[#23d2f9]

text-white shadow-lg border-white/10
">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          
          <div className="flex items-center gap-2 text-xl font-bold tracking-wide">
            <img src={jslogo} alt="Logo" className="h-10 w-10 object-contain drop-shadow-lg" />
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-md shadow-sm">
              Akhil Shahni
            </span>
          </div>

        
          <nav className="hidden md:flex space-x-8 text-md font-medium">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="relative group transition"
              >
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full duration-300"></span>
              </button>
            ))}
          </nav>

  
          <button
            className="md:hidden transition transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

 
      <div
        className={`fixed top-0 right-0 z-40 h-full w-64
          bg-gradient-to-r from-[#ff4e4e80] via-[#fc913a76] to-[#23d2f979]

            text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-pink-200">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-6 py-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-base font-medium hover:text-pink-600 transition-all duration-200"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

    
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
