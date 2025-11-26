import React from 'react';
import { Mail, Instagram, MapPin, Calendar } from 'lucide-react';

const BookMe: React.FC = () => {
  return (
    <section id="book-me" className="py-24 bg-brand-blush/20 text-brand-black relative overflow-hidden">
       {/* Decorative subtle gradient */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Ready to Transform?</h2>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-gray-800">
            Located in Maui, Hawaiʻi. Our private studio is appointment-only to ensure a personalized, relaxed experience just for you.
          </p>
          
          <a 
            href="https://calendar.google.com" /* Placeholder for actual booking link */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-black text-brand-cream px-12 py-5 uppercase tracking-widest text-sm hover:scale-105 hover:bg-gray-900 transition-all duration-300 shadow-xl mb-6"
          >
            <Calendar size={18} />
            Request Appointment
          </a>

          <p className="text-xs uppercase tracking-widest opacity-60 mb-16">
            A $50 deposit is required to secure your booking.
          </p>

          {/* Contact Information Block */}
          <div className="bg-white/40 backdrop-blur-md border border-white/50 p-10 md:p-12 rounded-sm shadow-sm">
            <h3 className="font-serif text-2xl mb-8 italic">Studio & Contact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
              
              {/* Location */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-cream border border-brand-blush/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                   <MapPin size={20} className="text-brand-black" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</span>
                <p className="font-serif text-lg">Maui, Hawaiʻi</p>
                <p className="text-xs text-gray-500 mt-1">Private studio</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-cream border border-brand-blush/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                   <Mail size={20} className="text-brand-black" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</span>
                <a href="mailto:hello@kiyomiink.com" className="font-serif text-lg hover:text-brand-sage transition-colors border-b border-transparent hover:border-brand-sage">
                  hello@kiyomiink.com
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-cream border border-brand-blush/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                   <Instagram size={20} className="text-brand-black" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">Instagram</span>
                <a href="https://instagram.com/kiyomi.ink" target="_blank" rel="noreferrer" className="font-serif text-lg hover:text-brand-sage transition-colors border-b border-transparent hover:border-brand-sage">
                  @kiyomi.ink
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-brand-black/10 mb-20"></div>

        {/* Inquiry Form Section (Merged from Contact) */}
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

export default BookMe;