import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/600/400?random=1" 
              alt="Construction professionals planning" 
              className="rounded-lg shadow-xl w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Digital Foundations for Real Builders.</h2>
            <p className="text-lg text-steel-gray leading-relaxed mb-6">
              We understand the grit and precision of the construction industry. That's why we're dedicated to helping local builders, contractors, and engineers transition into the digital age. Our websites are more than just online brochures; they are powerful tools designed to attract high-value clients, beautifully showcase your projects, and solidify your reputation as a trusted leader in the field.
            </p>
            <a href="#services" className="inline-block bg-navy-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-steel-gray transition-all duration-300 transform hover:-translate-y-1">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;