
import React from 'react';
import { CheckCircleIcon } from './icons';

const PricingTier: React.FC<{
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}> = ({ plan, price, features, isPopular = false }) => (
  <div className={`bg-white border-2 rounded-lg p-8 flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${isPopular ? 'border-bright-red' : 'border-gray-200'}`}>
    {isPopular && <span className="bg-bright-red text-white text-xs font-bold px-3 py-1 rounded-full self-center mb-4 -mt-12">MOST POPULAR</span>}
    <h3 className="text-2xl font-bold text-navy-blue text-center">{plan}</h3>
    <p className="text-4xl font-black text-navy-blue text-center my-4">{price}</p>
    <p className="text-steel-gray text-center mb-6">One-time payment</p>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircleIcon className="h-6 w-6 text-bright-red mr-3 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#contact" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${isPopular ? 'bg-bright-red text-white hover:bg-red-700' : 'bg-navy-blue text-white hover:bg-steel-gray'}`}>
      Get Started
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue">Simple, Transparent Pricing</h2>
          <p className="text-lg text-steel-gray mt-4 max-w-2xl mx-auto">Choose a plan that fits your business needs. No hidden fees, ever.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          <PricingTier
            plan="Basic Site"
            price="$1,499"
            features={[
              '3-Page Custom Website',
              'Mobile-Responsive Design',
              'Contact Form',
              'Basic SEO Setup',
              '1 Year of Hosting'
            ]}
          />
          <PricingTier
            plan="Pro Business"
            price="$2,999"
            features={[
              'Up to 10 Pages',
              'Advanced Project Gallery',
              'Custom Logo & Branding',
              'Advanced SEO & Analytics',
              'Content Management System',
              'Priority Support'
            ]}
            isPopular={true}
          />
          <PricingTier
            plan="Premium"
            price="$4,999"
            features={[
              'Unlimited Pages',
              'Client Testimonial System',
              'Blog Setup',
              'Google My Business Pro',
              'Online Booking Integration',
              'Ongoing Maintenance Plan'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
