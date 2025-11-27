import React from "react";
import { Sparkles } from "lucide-react";
// We only import the single images we want to display now
import brow1 from "../assets/brow-1.jpg";
import toothgem1 from "../assets/toothgem-1.jpg";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-brand-cream text-brand-black relative overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blush/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">
            Services
          </h2>
          <div className="h-0.5 w-16 bg-brand-black mx-auto mb-6" />
          <p className="text-gray-700 font-light text-lg">
            Every face is unique. I offer permanent makeup and styling services
            designed to enhance your natural allure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- Service 1: BROWS --- */}
          <div className="group cursor-pointer">
            {/* Simple Static Image */}
            <div className="mb-8 aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-blush/10 relative">
              <img
                src={brow1}
                alt="Microblading and Machine Shading"
                // Removed filter grayscale and hover classes here
                className="w-full h-full object-cover"
              />
              {/* Frame Border */}
              <div className="absolute inset-0 border border-brand-black/10 m-4 pointer-events-none z-30" />
            </div>

            <h3 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-brand-sage transition-colors">
              Microblading &amp; Machine Shading
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-4">
              Achieve hyper-realistic, fluffy brows or a soft, powdered makeup
              look. Advanced mapping + shading for seamless definition.
            </p>
            <span className="text-xs uppercase tracking-widest border-b border-black pb-1">
              Starting at $450
            </span>
          </div>

          {/* --- Service 2: TOOTH GEMS --- */}
          <div className="group cursor-pointer md:mt-16">
            {/* Simple Static Image */}
            <div className="mb-8 aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-blush/10 relative">
              <img
                src={toothgem1}
                alt="Tooth Gems application"
                // Removed filter grayscale and hover classes here
                className="w-full h-full object-cover"
              />
              {/* Frame Border */}
              <div className="absolute inset-0 border border-brand-black/10 m-4 pointer-events-none z-30" />
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={20} className="text-brand-gold" />
              <h3 className="text-2xl md:text-3xl font-serif group-hover:text-brand-sage transition-colors">
                Tooth Gems
              </h3>
            </div>

            <p className="text-gray-600 font-light leading-relaxed mb-4">
              Add sparkle with high-quality lead-free crystals + gold charms,
              applied safely with dental-grade adhesive. Zero damage.
            </p>
            <span className="text-xs uppercase tracking-widest border-b border-black pb-1">
              Starting at $60
            </span>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-24 text-center border-t border-brand-black/10 pt-16">
          <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">
            Expanding My Craft
          </p>
          <h4 className="text-2xl md:text-3xl font-serif text-brand-black">
            Coming Soon:{" "}
            <span className="italic text-brand-sage">
              Nano Brows + Fine Line Tattoos
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Services;










