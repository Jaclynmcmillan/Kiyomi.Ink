import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-cream py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <p className="font-serif text-2xl tracking-widest mb-6">KIYOMI INK</p>
        
        <div className="text-center text-gray-500 text-xs tracking-wide space-y-2">
          <p>&copy; {new Date().getFullYear()} KIYOMI INK. All rights reserved.</p>
          <p className="opacity-50">Website by Neural Method.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;