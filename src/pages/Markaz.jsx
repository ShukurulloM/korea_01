import React from 'react';
import { Link } from 'react-router-dom';
import MarkazMaq from '../img/markazbir.jpg';
import MarkazTar from '../img/markazikki.jpg';
import MarkazHaq from '../img/markazuch.jpg';

const Markaz = () => {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-20'>
      <nav className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        
        <Link to="/markazimizmaqsadi" className='group flex flex-col items-center text-center'>
          <img
            src={MarkazMaq}
            alt="Markazimiz maqsadi"
            className='w-full max-w-xs rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105'
          />
          <p className='mt-4 text-lg md:text-xl font-semibold text-black/70 uppercase group-hover:text-yellow-500 transition-colors duration-300'>
            Markazimiz maqsadi
          </p>
        </Link>

        <Link to="/markazimiztarixi" className='group flex flex-col items-center text-center'>
          <img
            src={MarkazTar}
            alt="Markazimiz tarixi"
            className='w-full max-w-xs rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105'
          />
          <p className='mt-4 text-lg md:text-xl font-semibold text-black/70 uppercase group-hover:text-yellow-500 transition-colors duration-300'>
            Markazimiz tarixi
          </p>
        </Link>

        <Link to="/markazimizhaqida" className='group flex flex-col items-center text-center'>
          <img
            src={MarkazHaq}
            alt="Markazimiz haqida"
            className='w-full max-w-xs rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105'
          />
          <p className='mt-4 text-lg md:text-xl font-semibold text-black/70 uppercase group-hover:text-yellow-500 transition-colors duration-300'>
            Markazimiz haqida
          </p>
        </Link>
        
      </nav>
    </div>
  );
};

export default Markaz;
