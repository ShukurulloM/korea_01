import React, { useEffect, useState } from "react";
import Bino from "../img/bino.jpg";
import Tabiat from "../img/tabiat.jpg";
import Manzara from "../img/manzara.jpg";

const images = [Bino, Manzara, Tabiat];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const length = images.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [current, isAutoPlaying]);

  return (
    <div 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden"
      onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
      onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
      onTouchStart={() => isMobile && setIsAutoPlaying(false)}
      onTouchEnd={() => isMobile && setIsAutoPlaying(true)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
            KOREYS-O'ZBEK KOREYS
            <br />
            TILI MARKAZI
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-md px-2 sm:px-0">
            Professional koreys tili kurslari va madaniyatini o'rganish markazi
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-5 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-1 sm:p-2 md:p-3 rounded-full z-20 hover:bg-black/50 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-5 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-1 sm:p-2 md:p-3 rounded-full z-20 hover:bg-black/50 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${current === index ? 'bg-white w-4 sm:w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;