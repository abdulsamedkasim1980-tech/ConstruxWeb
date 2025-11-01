import React from 'react';
import { BuildingIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-blue text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-4">
            <BuildingIcon className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">ConstruxWeb</span>
        </div>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">Build Online. Build Strong. Digital Foundations for Real Builders.</p>
        <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="inline-block text-gray-300 hover:text-bright-red transition-all duration-300 transform hover:-translate-y-0.5">Facebook</a>
            <a href="#" className="inline-block text-gray-300 hover:text-bright-red transition-all duration-300 transform hover:-translate-y-0.5">LinkedIn</a>
            <a href="#" className="inline-block text-gray-300 hover:text-bright-red transition-all duration-300 transform hover:-translate-y-0.5">Instagram</a>
        </div>
        <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} ConstruxWeb. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;