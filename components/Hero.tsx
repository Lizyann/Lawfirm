import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Professional Lawyer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Justice Defined by <br/>
            <span className="text-secondary">Excellence & Integrity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
            At Alvina & Associates, we provide unwavering legal representation for those who demand the best. Your future is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-secondary hover:bg-amber-700 md:py-4 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulsedown"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
