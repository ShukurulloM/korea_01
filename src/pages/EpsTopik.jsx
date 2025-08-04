import React from 'react';
import UzbKorea from '../img/Uzbek_Korea.jpg';
import useTitle from '../components/useTitle';

const EpsTopik = () => {
  useTitle("Eps-Topik")
  return (
    <div className='bg-slate-300/80'>
    <div className='w-full max-w-6xl mx-auto px-5 py-20'>
      <div className='flex flex-col items-center uppercase'>
      <h1 className='text-7xl font-bold'>Tez kunda...</h1>
      <img src={UzbKorea} alt="" />
      </div>
    </div>
    </div>
      
  )
}

export default EpsTopik