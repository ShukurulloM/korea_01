import React from 'react';
import useTitle from '../components/useTitle';

const MarkazgaQabulBosqich = () => {
  useTitle("Markazga-qabul-bosqich")

  return (
    <div className='w-full max-w-5xl mx-auto px-4 py-16'>
      <h3 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10'>
        Markazga qabul bosqichlari
      </h3>

      <div className='text-base sm:text-lg text-gray-600 leading-relaxed space-y-6'>

        <p className='text-justify'>
          <strong>Markazimizda o‘qishni istagan O‘zbekiston Respublikasi fuqarolari diqqatiga!</strong>
        </p>

        <p className='text-justify'>
          Markazimizda o‘qishga qabul qilinish bosqich jarayonlari quyidagicha bo‘lib o‘tadi:
        </p>

        <div className='list-disc list-inside space-y-2 pl-4'>
          <p>Markazimiz saytida onlayn tarzda yoki manzilimizga kelib so‘rovnoma to‘ldirish</p>
          <p>Kerakli hujjatlar ro‘yxatini belgilangan suhbat kuniga olib kelish</p>
          <p>So‘rovnoma asosida suhbatdan o‘tish</p>
          <p>Suhbatdan o‘tgan o‘quvchilar ma'lum bir vaqt ichida to‘lov kontraktini amalga oshirish</p>
          <p>Dars boshlangan kundan boshlab darsda muntazam ishtirok etish</p>
        </div>

        <h4 className='text-xl font-semibold text-gray-700 mt-10'>Talablar:</h4>
        <div className='list-disc list-inside space-y-2 pl-4'>
          <p>19 yoshdan 35 yoshgacha qabul qilinadi</p>
          <p>Ma'lumoti o‘rta maxsusni tugatgan bo‘lishi kerak</p>
          <p>Sog‘ligi jihatdan sog‘lom bo‘lishi shart</p>
        </div>

        <h4 className='text-xl font-semibold text-gray-700 mt-10'>Kerakli hujjatlar ro‘yxati:</h4>
        <div className='list-disc list-inside space-y-2 pl-4'>
          <p>Pasport (original va 1 dona nusxasi)</p>
          <p>3x4 formatdagi rasm — 2 dona</p>
          <p>Ma'lumoti to‘g‘risidagi hujjat (1 dona nusxa)</p>
          <p>EPS TOPIK yoki koreys tiliga oid sertifikatlar (bo‘lsa taqdim etiladi, bo‘lmasa shart emas)</p>
        </div>
      </div>
    </div>
  );
};

export default MarkazgaQabulBosqich;
