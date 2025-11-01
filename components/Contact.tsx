
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue">Ready to Build Your Website?</h2>
          <p className="text-lg text-steel-gray mt-4 max-w-2xl mx-auto">Contact us today for a free quote and let's start your project.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-light-gray p-8 md:p-12 rounded-lg shadow-xl">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-navy-blue font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-red focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-navy-blue font-semibold mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-red focus:outline-none" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="company" className="block text-navy-blue font-semibold mb-2">Company Name</label>
              <input type="text" id="company" name="company" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-red focus:outline-none" placeholder="Your Construction Co." />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-navy-blue font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-red focus:outline-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-bright-red text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                Send Message
              </button>
            </div>
          </form>
          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-navy-blue mb-4">Or reach us directly</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              <a href="tel:+1234567890" className="text-steel-gray hover:text-bright-red font-semibold text-lg transition-colors">Phone: (123) 456-7890</a>
              <a href="mailto:contact@construxweb.com" className="text-steel-gray hover:text-bright-red font-semibold text-lg transition-colors">Email: contact@construxweb.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
