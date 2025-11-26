import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-cream border-t border-brand-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Note for new clients */}
          <div>
            <div className="p-8 bg-white border border-brand-blush/50 shadow-sm">
              <h4 className="font-serif text-xl mb-3">Note for new clients</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Please allow 24-48 hours for a response. If you have previous permanent makeup from another artist, please email a clear photo of your brows before booking to ensure we can accommodate your needs.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <form className="space-y-6 bg-white/50 p-8 md:p-10 border border-white/60 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-serif mb-6">Tell us what you're looking for</h3>
            
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-2 font-medium text-gray-500">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-white border border-gray-300 focus:border-brand-black px-4 py-3 outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-2 font-medium text-gray-500">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-white border border-gray-300 focus:border-brand-black px-4 py-3 outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="relative">
              <label htmlFor="service" className="block text-xs uppercase tracking-widest mb-2 font-medium text-gray-500">Interested In</label>
              <div className="relative">
                <select 
                  id="service" 
                  className="w-full bg-white border border-gray-300 focus:border-brand-black px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option>Microblading & Shading</option>
                  <option>Tooth Gems</option>
                  <option>Other / Inquiry</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2 font-medium text-gray-500">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full bg-white border border-gray-300 focus:border-brand-black px-4 py-3 outline-none transition-colors resize-none"
                placeholder="Describe your vision..."
              ></textarea>
            </div>

            <button type="submit" className="bg-brand-black text-brand-cream px-10 py-4 uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors w-full">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;