import React, { useState } from 'react';
import heroBg from './hero-bg.jpg';

function App() {
  // STATE: This remembers if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FUNCTION: This toggles the menu when the button is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen flex flex-col">
      
      {/* --- NAV BAR (Member 1) --- */}
      <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6 sticky top-0 z-50 shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-2xl tracking-wider text-teal-400">SwiftStack</span>
        </div>
        
        {/* Mobile Hamburger Button (Visible only on small screens) */}
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white transition duration-300"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Collapsible) */}
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow text-right mt-4 lg:mt-0">
            {['Home', 'Services', 'Team', 'About Us'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-8 font-medium transition duration-300"
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-900 hover:bg-teal-400 mt-4 lg:mt-0 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Member 1) --- */}
      <header 
        className="relative text-white py-24 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5), #0f172a), url(${heroBg})` 
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="w-96 h-96 bg-teal-500 rounded-full blur-3xl absolute top-10 left-10"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Building the Digital Future,<br />
            <span className="text-teal-400">One Component at a Time.</span>
          </h1>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            SwiftStack empowers local businesses by turning complex technical challenges into seamless human experiences.
          </p>
          
          {/* VIDEO PLACEHOLDER */}
          <div className="w-full aspect-video bg-gray-800 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                  <p className="text-gray-400 mb-2">🎬 Company Intro Video</p>
                  <p className="text-xs text-gray-500">(Video tag)</p>
              </div>
          </div>
        </div>
      </header>

      {/* --- PLACEHOLDER FOR MEMBER 2 WORK --- */}
      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="border-2 border-dashed border-gray-300 bg-white p-12 text-center rounded-xl">
           <h2 className="text-2xl font-bold text-gray-400 mb-2">Work Area</h2>
           <p className="text-gray-500">The "Services" and "Team" components will be injected here.</p>
        </div>
      </main>

      {/* --- FOOTER (Member 1) --- */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>&copy; 2026 SwiftStack Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;