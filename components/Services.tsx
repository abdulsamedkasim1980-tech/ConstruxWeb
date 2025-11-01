
import React from 'react';
import { WrenchScrewdriverIcon, ChartBarIcon, PaintBrushIcon, Cog8ToothIcon, CloudIcon } from './icons';

const services = [
  {
    icon: <WrenchScrewdriverIcon className="h-12 w-12 text-bright-red" />,
    title: 'Website Design',
    description: 'Custom websites built to showcase your construction projects and expertise, attracting your ideal clients.',
  },
  {
    icon: <ChartBarIcon className="h-12 w-12 text-bright-red" />,
    title: 'SEO for Construction',
    description: 'Rank higher on Google for local construction keywords, bringing more leads directly to you.',
  },
  {
    icon: <PaintBrushIcon className="h-12 w-12 text-bright-red" />,
    title: 'Logo & Branding',
    description: 'Develop a strong, trustworthy brand identity that stands out in the competitive construction market.',
  },
  {
    icon: <Cog8ToothIcon className="h-12 w-12 text-bright-red" />,
    title: 'Maintenance & Updates',
    description: 'We keep your website secure, fast, and up-to-date, so you can focus on your projects.',
  },
  {
    icon: <CloudIcon className="h-12 w-12 text-bright-red" />,
    title: 'Fast & Secure Hosting',
    description: 'Reliable hosting ensures your website is always online and loads quickly for every visitor.',
  },
  {
    icon: <WrenchScrewdriverIcon className="h-12 w-12 text-bright-red" />,
    title: 'Digital Presence Setup',
    description: 'We set up your Google My Business, social media profiles, and other essential online listings.',
  },
];

// Fix: Replaced JSX.Element with React.ReactNode for the icon prop type to resolve the "Cannot find namespace 'JSX'" error.
const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-navy-blue mb-2">{title}</h3>
    <p className="text-steel-gray">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue">Your Business Deserves a Website That Works Hard</h2>
          <p className="text-lg text-steel-gray mt-4 max-w-2xl mx-auto">From initial design to ongoing support, we provide everything you need to succeed online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
