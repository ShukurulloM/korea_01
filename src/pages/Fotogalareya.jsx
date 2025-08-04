import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import FotoBir from '../img/foto1.jpg';
import FotoIkki from '../img/foto2.jpg';
import FotoUch from '../img/foto3.jpg';
import FotoTort from '../img/foto4.jpg';
import FotoBesh from '../img/foto5.jpg';
import FotoOlti from '../img/foto6.jpg';
import FotoYetti from '../img/foto7.jpg';
import FotoSakkiz from '../img/foto8.jpg';

const images = [FotoBir, FotoIkki, FotoUch, FotoTort, FotoBesh, FotoOlti, FotoYetti, FotoSakkiz];

const Fotogalareya = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20'>
      <h2 className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'>Fotogalareya</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {images.map((img, index) => (
          <div
            key={index}
            className='relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            onClick={() => openModal(index)}
          >
            <img
              src={img}
              alt={`Dars jarayoni ${index + 1}`}
              className='w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-[#ec5714] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center'>
              <div className='opacity-0 group-hover:opacity-100 hover:bg-[#ec5714] transition-opacity duration-300 text-white text-lg font-medium'>
                {/* Keep the hover effect empty as in original */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4'>
          <button
            onClick={closeModal}
            className='absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#ec5714] transition-colors z-10'
            aria-label='Close'
          >
            <X size={32} />
          </button>

          <div className='relative w-full max-w-4xl'>
            <button
              onClick={goToPrev}
              className='absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#ec5714] transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2'
              aria-label='Previous'
            >
              <ChevronLeft size={40} />
            </button>

            <div className='flex justify-center items-center'>
              <img
                src={images[currentIndex]}
                alt={`Dars jarayoni ${currentIndex + 1}`}
                className='max-w-full max-h-[80vh] rounded-lg shadow-xl object-contain'
              />
            </div>

            <button
              onClick={goToNext}
              className='absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#ec5714] transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2'
              aria-label='Next'
            >
              <ChevronRight size={40} />
            </button>
          </div>

          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg'>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fotogalareya;