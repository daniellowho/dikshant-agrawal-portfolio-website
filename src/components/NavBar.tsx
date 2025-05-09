
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showName, setShowName] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show background when scrolled down a bit
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Only show name in navbar when we've scrolled past the hero section
      if (window.scrollY > window.innerHeight * 0.6) {
        setShowName(true);
      } else {
        setShowName(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Education', 'Experience', 'Skills', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkgray-400/90 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#hero" className="text-white font-bold text-xl transition-all duration-300">
          <span className={`bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 transition-opacity duration-300 ${showName ? 'opacity-100' : 'opacity-0'}`}>
            Dikshant Agrawal
          </span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
