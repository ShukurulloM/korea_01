import React from 'react';
import useTitle from '../components/useTitle';

const OqishHaqidaUmumiyMalumot = () => {
  useTitle("O'qish-haqida-ma'lumot")

  return (
    <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <div className='mb-8 md:mb-12 text-center'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
          O'qish haqida umumiy ma'lumot
        </h3>
        <div className='h-1 w-20 bg-[#ec5714] mx-auto'></div>
      </div>

      <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
        <div className='space-y-4 text-gray-600 text-base md:text-lg'>
          <p>
            Koreys tilini o'rganishda asosiysi o'zingizning xarakatingiz orqali bizdagi malakali o'qituvchilarimiz bilan tezroq va sifatli o'rganish.
            Markazimizda faqatgina koreys tili emas, balki Koreya madaniyati, urf-odatlari, Koreyada ishlash va yashash tarzi haqida ham o'rgatiladi.
          </p>
          <p className='font-medium'>
            Dars 4 oy davom etadi va 700 akademik soatdan iborat.
          </p>
          <p className='font-medium'>
            Darslar 09:30 dan 16:30 gacha, haftaning Dushanba – Juma kunlari bo'lib o'tadi.
          </p>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-md overflow-hidden'>
        <h4 className='text-xl md:text-2xl font-semibold text-center py-4 bg-gray-50 text-gray-700'>
          Dars Jadvali
        </h4>
        
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-4 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider text-center'>
                  교 시
                </th>
                <th className='px-4 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider text-center'>
                  Para
                </th>
                <th className='px-4 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider text-center'>
                  Vaqt
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              <tr>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>조회</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>Kirirsh</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>09:30 ~ 09:40</td>
              </tr>
              <tr className='bg-gray-50'>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>1</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>Darsni boshianish vaqti</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>09:40 ~ 11:00</td>
              </tr>
              <tr>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>2</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'></td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>11:10 ~ 12:30</td>
              </tr>
              <tr className='bg-gray-50'>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'></td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>10 minutlik tanaffus</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'></td>
              </tr>
              <tr>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>중식</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>Tushlik vaqti</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>12:30 ~ 13:30</td>
              </tr>
              <tr className='bg-gray-50'>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>3</td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'></td>
                <td className='px-4 py-3 text-sm text-gray-800 text-center'>13:30 ~ 14:50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OqishHaqidaUmumiyMalumot;