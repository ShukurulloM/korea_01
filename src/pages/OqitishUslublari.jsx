import React from 'react';
import EpsTopik from '../img/Epstopik.jpg';
import Eps from '../img/Eps.jpg';
import KUch from '../img/k3.jpg';

const OqitishUslublari = () => {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20'>
      <div className='mb-8 md:mb-12'>
        <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>O'qitish uslublari</h3>
        <div className='h-1 w-20 bg-[#ec5714]'></div>
      </div>

      <div className='space-y-4 text-gray-600 mb-10'>
        <p>
          Markazimiz ta'sischilari xisoblangan Koreya Respublikasi vakilligi tomonidan ushbu o'qish dasturi, o'quv qo'llanmalari va mobil
          ilovalari Koreys mutaxassislari tomonidan markazimiz uchun ishlab chiqilgan.
        </p>
        <p>
          Berilgan dastur asosida malakali Koreya Respublikasida malaka oshirib kelgan o'qituvchilarimiz dars o'tadi.
        </p>
        <p>
          Shulardan biri bu EPS TOPIK kitobidir. Bu mashq va test kitobi xisoblanadi va shu asosida test sinovlariga tayyorlashadi.
        </p>
      </div>

      <div className='space-y-10 md:space-y-12'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <img 
            src={EpsTopik} 
            alt="Eps topik" 
            className='w-full h-auto object-cover md:max-h-96'
          />
          <div className='p-4 md:p-6'>
            <p className='text-gray-600'>
              2 - kitob bu Koreys tili boshlang'ich so'zlashuv kitobi
            </p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <img 
            src={Eps} 
            alt="Samarqand and Korea" 
            className='w-full h-auto object-cover md:max-h-96'
          />
          <div className='p-4 md:p-6'>
            <p className='text-gray-600'>
              Va mobil ilovalar (mobil prilojeniya). Bu mobil ilovalarni android telefoniga yuklab olish asosida xar kuni mashq qilgan xolda
              o'rgatiladi. Va butun o'qish mobaynida xattoki o'qishdan keyingi davrdaxam foydalansa bo'ladi. Bu maxsus ilovani o'quvchilarni
              tezrok va sifatli test sinovlariga tayyorlash maqsadida ishlab chiqilgan.
            </p>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <img 
            src={KUch} 
            alt="Google Play market" 
            className='w-full h-auto object-cover md:max-h-96'
          />
          <div className='p-4 md:p-6'>
            <p className='text-gray-600'>
              Ushbu ko'llanmalar Koreyaga ishga ketish uchun topshiriladigan 2-asosiy bosqich test sinovi uchun ishlab chiqilgan qo'llanmalar
              xisbolanadi. Markaz o'quvchilariga ushbu qo'llanmalar bepul tarqatiladi va shu asosida test sinovlariga o'quvchilarni tayyorlashadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OqitishUslublari;