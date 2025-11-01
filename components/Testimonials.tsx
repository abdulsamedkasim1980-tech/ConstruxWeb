
import React from 'react';
import { StarIcon } from './icons';

const testimonials = [
  {
    quote: "Our company got more projects after our website from ConstruxWeb! The process was simple and they understood our needs perfectly.",
    name: "John D., Owner",
    company: "JD Contracting",
  },
  {
    quote: "Finally, a web design service that gets the construction industry. Our new site looks professional and is easy for our clients to use.",
    name: "Maria G., Project Manager",
    company: "Apex Engineering",
  },
  {
    quote: "The team at ConstruxWeb is top-notch. They delivered on time and the results speak for themselves. Highly recommended!",
    name: "Samuel L., Builder",
    company: "BuildRight Homes",
  }
];

const TestimonialCard: React.FC<{ quote: string; name: string; company: string }> = ({ quote, name, company }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="flex justify-center text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-6 w-6" />)}
    </div>
    <p className="text-steel-gray italic mb-6">"{quote}"</p>
    <p className="text-navy-blue font-bold text-lg">{name}</p>
    <p className="text-steel-gray">{company}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20" style={{backgroundColor: '#0a2540d9'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built on a Foundation of Trust</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Hear from builders and contractors who have grown their business with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
