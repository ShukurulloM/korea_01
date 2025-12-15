import React from 'react';
import OqishBir from '../img/OqishgaQabul_1.jpg';
import OqishIkki from '../img/OqishgaQabul_2.jpg';
import OqishUch from '../img/OqishgaQabul_3.jpg';
import useTitle from '../components/useTitle';

const OqishgaQabul = () => {
  useTitle("O'qishga-qabul")
  return (
    <div className='w-full max-w-6xl mx-auto px-5 py-20'>
      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center'>
        <div className='flex flex-col items-center'>
          <img
            src={OqishBir}
            alt="O'qishga kirish bosqichi"
            className='w-full max-w-[250px] h-auto object-cover'
          />
          <p className='mt-4 text-lg sm:text-xl text-gray-700 font-semibold'>
            O‘qishga kirish bosqichlari
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src={OqishIkki}
            alt="Markazimizda o'qishning afzalliklari"
            className='w-full max-w-[250px] h-auto object-cover'
          />
          <p className='mt-4 text-lg sm:text-xl text-gray-700 font-semibold'>
            Markazimizda o‘qishning afzalliklari
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src={OqishUch}
            alt="Ro'yhatdan o'tish"
            className='w-full max-w-[250px] h-auto object-cover'
          />
          <p className='mt-4 text-lg sm:text-xl text-gray-700 font-semibold'>
            Ro‘yxatdan o‘tish
          </p>
        </div>
      </div>
    </div>
  );
};

export default OqishgaQabul;
