import React from "react";
import { Sparkles } from "lucide-react";

// Local image imports
import brow1 from "../assets/brow-1.jpg";
import brow2 from "../assets/brow-2.jpg";
import brow3 from "../assets/brow-3.jpg";

import toothgem1 from "../assets/toothgem-1.jpg";
import toothgem2 from "../assets/toothgem-2.jpg";
import toothgem3 from "../assets/toothgem-3.jpg";

const Services: React.FC = () => {
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
          <div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {browImages.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border border-black/5"
                >
                  <img
                    src={src}
                    alt={`Brow service ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-serif mb-3">
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
          <div className="md:mt-10">
            <div className="grid grid-cols-3 gap-2 mb-6">
              {gemImages.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border border-black/5"
                >
                  <img
                    src={src}
                    alt={`Tooth gem ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={20} className="text-brand-gold" />
              <h3 className="text-2xl md:text-3xl font-serif">
                Tooth Gems
              </h3>
            </div>

            <p className="text-gray-600 font-light leading-relaxed mb-4">
              Add sparkle with high-quality lead-free crystals + gold charms,
              applied safely with dental-grade adhesive. Zero damage to enamel.
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





