import React from 'react';
import { Link } from "react-router-dom";
import KoreaB from '../img/Noutbook.jpg';
import KoreaU from '../img/Ruchka.jpg';
import KoreaI from '../img/Blacknot.jpeg';
import useTitle from '../components/useTitle';

const KareysTiliniOrganish = () => {
  useTitle("Koreys-Tilini-O'rganish")

  return (
    <div className='w-full max-w-6xl mx-auto px-5'>
      <nav className='flex flex-col md:flex-row gap-6 py-20 uppercase'>
        <div className='text-center'>
          <Link to="/oqitishjarayoni">
            <img src={KoreaB} alt="O‘qitish jarayoni" className='mb-3 w-full max-w-sm mx-auto'/>
          </Link>
          <p className='text-xl text-gray-700'>O‘qitish jarayoni</p>
        </div>

        <div className='text-center'>
          <Link to="/oqitishuslublari">
            <img src={KoreaU} alt="O‘qitish uslublari" className='mb-3 w-full max-w-sm mx-auto'/>
          </Link>
          <p className='text-xl text-gray-700'>O‘qitish uslublari</p>
        </div>

        <div className='text-center'>
          <Link to="/oqishhaqidaumumiymalumot">
            <img src={KoreaI} alt="O‘qish haqida umumiy ma'lumot" className='mb-3 w-full max-w-sm mx-auto'/>
          </Link>
          <p className='text-xl text-gray-700'>O‘qish haqida umumiy ma'lumot</p>
        </div>
      </nav>
    </div>
  )
}

export default KareysTiliniOrganish;
