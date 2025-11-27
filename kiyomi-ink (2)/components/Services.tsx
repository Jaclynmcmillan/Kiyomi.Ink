import React, { useState, useEffect } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import local images from src/assets
import brow1 from "../assets/brow-1.jpg";
import brow2 from "../assets/brow-2.jpg";
import brow3 from "../assets/brow-3.jpg";

import toothgem1 from "../assets/toothgem-1.jpg";
import toothgem2 from "../assets/toothgem-2.jpg";
import toothgem3 from "../assets/toothgem-3.jpg";

// -----------------------------------------
// Reusable Gallery Component
// -----------------------------------------
const ServiceGallery: React.FC<{ images: string[]; alt: string }> = ({
  images,
  alt,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(timer);
  }, [images.length]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden mb-8 aspect-[4/5] md:aspect-[3/4] group/gallery bg-brand-blush/10">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={src}
            alt={`${alt} ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
          />
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute inset-0 z-20 flex justify-between items-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={prev}
          className="ml-2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors pointer-events-auto"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="mr-2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors pointer-events-auto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2 pointer-events-none">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto shadow-sm ${
              idx === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Frame */}
      <div className="absolute inset-0 border border-brand-black/10 m-4 pointer-events-none z-30" />
    </div>
  );
};

// -----------------------------------------
// Main Services Section
// -----------------------------------------
const Services: React.FC = () => {
  // ✅ Use the imported images
  const browImages = [brow1, brow2, brow3];
  const gemImages = [toothgem1, toothgem2, toothgem3];

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
          {/* Brows */}
          <div className="group cursor-pointer">
            <ServiceGallery
              images={browImages}
              alt="Microblading and Machine Shading"
            />

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

          {/* Tooth Gems */}
          <div className="group cursor-pointer md:mt-16">
            <ServiceGallery images={gemImages} alt="Tooth Gems application" />

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








