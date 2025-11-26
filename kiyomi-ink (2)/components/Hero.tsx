import heroImg from "../assets/hero.jpg";
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Kiyomi Ink Hero Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-between h-full pt-20">

        {/* ****** TRANSPARENT BLOCK GOES HERE ****** */}
        <div
          className="md:w-2/3 max-w-4xl mx-auto text-center 
          bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/10"
        >
          <p className="text-brand-blush tracking-[0.3em] text-xs md:text-sm uppercase mb-6 animate-fade-in-up">
            Permanent Makeup • Tooth Gems • Fine Line Aesthetics
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-cream mb-6 leading-tight animate-fade-in-up delay-100">
            Redefining <br />
            <span className="italic text-brand-blush">Natural Beauty</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Experience customized hyper-realistic brows and expressive tooth gems tailored to your unique features.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <button 
              onClick={() => scrollTo('book-me')}
              className="bg-brand-cream text-brand-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 w-full md:w-auto"
            >
              Book Appointment
            </button>
          </div>
        </div>
        {/* ****** END TRANSPARENT BLOCK ****** */}

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-cream/50 hidden md:block">
        <ArrowDown size={24} />
      </div>

    </section>
  );
};

export default Hero;

