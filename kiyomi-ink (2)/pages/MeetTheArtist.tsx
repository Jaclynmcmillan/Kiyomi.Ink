import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MeetTheArtist: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#training') {
      const element = document.getElementById('training');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-0 max-w-4xl">
        
        {/* Header - Minimalist */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-cream italic mb-4">Danielle</h1>
          <p className="text-brand-blush uppercase tracking-widest text-sm">Artist & Founder</p>
        </div>

        {/* Collage Stack Container */}
        <div className="flex flex-col space-y-16 md:space-y-32">
          
          {/* Collage 1: Meet Your Artist (Orchids + Disco Ball vibe) */}
          <div className="w-full flex flex-col items-center animate-fade-in-up delay-100">
            <div className="relative w-full aspect-[4/5] md:aspect-square bg-brand-cream/5 p-2 md:p-4 border border-white/10">
               {/* 
                  CLIENT INSTRUCTION: Replace this src with the 'Meet Your Artist' collage image.
                  Recommended size: 1200x1500px (Portrait) or 1500x1500px (Square).
               */}
              <img 
                src="https://picsum.photos/1200/1500?random=10" 
                alt="Meet Your Artist Collage - Danielle with orchids and disco ball" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-500 italic font-serif mt-4 text-sm">The Vision</p>
          </div>

          {/* SECTION: Training & Craftsmanship (Merged from Training.tsx) */}
          <div id="training" className="scroll-mt-32 w-full bg-brand-black text-brand-cream border-t border-b border-white/10 py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              
              {/* Left: Text Content */}
              <div className="md:w-1/2 order-2 md:order-1 text-left">
                <h2 className="text-4xl md:text-5xl font-serif mb-8">
                  Training & <span className="italic text-brand-blush">Craftsmanship</span>
                </h2>
                
                <div className="space-y-8 font-light text-gray-300">
                  <div className="border-l-2 border-brand-blush pl-6">
                    <p className="text-xl text-white mb-2 font-serif">Established 2021</p>
                    <p>
                      Started my microblading journey in 2021, dedicating years to mastering the delicate art of permanent makeup.
                    </p>
                  </div>

                  <div className="border-l-2 border-brand-sage pl-6">
                    <p className="text-xl text-white mb-2 font-serif">Certified Expert</p>
                    <p>
                      Fully certified in powder brows and color corrections. My background includes extensive training in color theory, needle knowledge, and precise facial mapping to ensure safety and symmetry.
                    </p>
                  </div>

                  <div className="border-l-2 border-white pl-6">
                    <p className="text-xl text-white mb-2 font-serif">Studio Experience</p>
                    <p>
                      Proudly started refining my technique at Ink & Beauty in October 2022 before establishing KIYOMI INK.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Images (Similar to previous Training collage) */}
              <div className="md:w-1/2 order-1 md:order-2 relative h-[500px] w-full">
                {/* Image 1: Working on client */}
                <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                  <img 
                    src="https://picsum.photos/600/800?random=3" 
                    alt="Danielle working on client" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-brand-black"
                  />
                </div>
                {/* Image 2: Tools/Studio - Behind */}
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 z-0 transform -rotate-3 transition-transform hover:-rotate-1 duration-500">
                  <img 
                    src="https://picsum.photos/600/800?random=4" 
                    alt="Studio tools and pigments" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl opacity-60 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-500 italic font-serif mt-12 text-center text-sm">The Craft</p>
          </div>


          {/* Collage 3: VIBES (Cranes, Tiger, Interiors) */}
          <div className="w-full flex flex-col items-center animate-fade-in-up delay-300">
             <div className="relative w-full aspect-[3/4] md:aspect-[4/3] bg-brand-cream/5 p-2 md:p-4 border-t border-b border-brand-sage/30">
               {/* 
                  CLIENT INSTRUCTION: Replace this src with the 'Vibes' collage image.
               */}
              <img 
                src="https://picsum.photos/1600/1200?random=12" 
                alt="Vibes Collage - Cranes, tigers, and inspiration" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-500 italic font-serif mt-4 text-sm">The Vibe</p>
          </div>

        </div>

        {/* Artist Statement Text Block */}
        <div className="mt-24 text-center max-w-2xl mx-auto text-gray-300 font-light leading-relaxed px-6">
          <p>
            "I believe permanent makeup should be undetectable. It is about enhancing the features you already have, adding symmetry, and simplifying your daily ritual. My studio is a space of calm, creativity, and precision."
          </p>
          <div className="h-px w-20 bg-brand-blush mx-auto mt-8"></div>
        </div>

      </div>
    </div>
  );
};

export default MeetTheArtist;