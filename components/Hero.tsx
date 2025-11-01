
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-navy-blue/70"></div>
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight mb-4">
          Build Your Online Presence
          <br />
          <span className="text-bright-red">One Brick at a Time</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          We create professional websites for builders, contractors, and construction companies that attract clients, showcase projects, and build trust online.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-bright-red text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Get Your Construction Website
        </a>
      </div>
    </section>
  );
};

export default Hero;
