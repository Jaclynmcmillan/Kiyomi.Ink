import React from 'react';

const Training: React.FC = () => {
  return (
    <section id="training" className="py-24 bg-brand-black text-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="md:w-1/2 order-2 md:order-1">
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

          {/* Right: Collage */}
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
      </div>
    </section>
  );
};

export default Training;