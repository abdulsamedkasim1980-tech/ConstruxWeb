
import React, { useState, useEffect } from 'react';
import { BuildingIcon, Bars3Icon, XMarkIcon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-blue/95 shadow-lg backdrop-blur-sm' : 'bg-navy-blue'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 text-white hover:text-bright-red transition-colors">
            <BuildingIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">ConstruxWeb</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white hover:text-bright-red transition-colors font-semibold">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-block bg-bright-red text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md transform hover:-translate-y-1">
            Book a Call
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-navy-blue transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-4 py-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-lg hover:text-bright-red transition-colors font-semibold">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-bright-red text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md mt-4 transform hover:-translate-y-1">
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
