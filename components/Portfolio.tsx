import React from 'react';

const portfolioItems = [
  {
    image: 'https://picsum.photos/800/600?random=2',
    title: 'General Contractor Profile',
    category: 'Company Website'
  },
  {
    image: 'https://picsum.photos/800/600?random=3',
    title: 'Project Showcase Gallery',
    category: 'Mobile View'
  },
  {
    image: 'https://picsum.photos/800/600?random=4',
    title: 'Engineering Firm Services',
    category: 'Desktop View'
  },
  {
    image: 'https://picsum.photos/800/600?random=5',
    title: 'Subcontractor Contact Page',
    category: 'Company Website'
  },
  {
    image: 'https://picsum.photos/800/600?random=6',
    title: 'Architectural Portfolio',
    category: 'Mobile View'
  },
  {
    image: 'https://picsum.photos/800/600?random=7',
    title: 'Real Estate Developer Site',
    category: 'Desktop View'
  }
];

const PortfolioCard: React.FC<{ image: string; title: string; category: string }> = ({ image, title, category }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-navy-blue/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-bright-red font-semibold">{category}</p>
        </div>
    </div>
);


const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue">See Our Blueprints in Action</h2>
          <p className="text-lg text-steel-gray mt-4 max-w-2xl mx-auto">We build clean, professional, and mobile-friendly websites that make an impact.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
                <PortfolioCard key={index} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;