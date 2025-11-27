import React from 'react';
import { Mail, Instagram, MapPin, Calendar } from 'lucide-react';

const BookMe: React.FC = () => {
  return (
    <section id="book-me" className="py-24 bg-brand-blush/20 text-brand-black relative overflow-hidden">
       {/* Decorative subtle gradient */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          
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

          <p className="text-xs uppercase tracking-widest opacity-60">
            A $50 deposit is required to secure your booking.
          </p>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-brand-black/10 mb-20"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-
