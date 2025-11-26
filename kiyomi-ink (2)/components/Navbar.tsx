import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    
    // Special handling for Training which is on a separate page
    if (hash === 'training') {
      navigate('/meet-the-artist#training');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif text-brand-cream tracking-widest uppercase hover:text-brand-blush transition-colors">
          Kiyomi Ink
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavClick('services')} className="text-sm tracking-widest hover:text-brand-blush transition-colors uppercase">Services</button>
          <Link to="/meet-the-artist" className="text-sm tracking-widest hover:text-brand-blush transition-colors uppercase">Meet the Artist</Link>
          
          <button 
            onClick={() => handleNavClick('book-me')}
            className="border border-brand-cream px-6 py-2 text-sm tracking-widest uppercase hover:bg-brand-cream hover:text-brand-black transition-all duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-cream">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-black border-t border-white/10 p-6 flex flex-col space-y-6 text-center h-screen">
           <button onClick={() => handleNavClick('services')} className="text-lg font-serif tracking-widest hover:text-brand-blush">Services</button>
           <Link to="/meet-the-artist" onClick={() => setIsOpen(false)} className="text-lg font-serif tracking-widest hover:text-brand-blush">Meet the Artist</Link>
           <button 
            onClick={() => handleNavClick('book-me')}
            className="border border-brand-cream px-8 py-3 mt-4 mx-auto inline-block text-sm tracking-widest uppercase hover:bg-brand-cream hover:text-brand-black transition-all"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;