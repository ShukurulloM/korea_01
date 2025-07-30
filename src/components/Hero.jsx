import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../pages/hero';

const Hero = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentProduct = products.find((prod) => prod.Link === currentPath);

  if (!currentProduct) return null;

  return (
    <div
      className="w-full h-[250px] md:h-[350px] lg:h-[400px] flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${currentProduct.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5">
          {currentProduct.title}
        </h1>
        <nav className="text-white/80 text-sm flex items-center justify-center gap-2">
          <Link 
            to="/" 
            className="hover:underline hover:text-white transition-colors"
          >
            Bosh sahifa
          </Link>
          <span className="text-xs">➜</span>
          <span className="text-white font-medium">
            {currentProduct.title}
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Hero;