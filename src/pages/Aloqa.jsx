import React from 'react';
import { FaHome, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Aloqa = () => {
  return (
    <div className='bg-slate-100'>
      <div className="w-full max-w-6xl mx-auto px-5 py-28">
        <div className='grid grid-cols-3 mb-10'>
          <div className="flex flex-col gap-10">

            <div className="flex items-start gap-5">
              <FaHome className="text-2xl text-orange-500 mt-1" />
              <div>
                <h4 className="text-lg text-gray-800">O'zbekiston, Toshkent</h4>
                <p className="text-sm text-gray-600">
                  Toshkent shahar, Chilonzor tumani, Lutfiy ko‘chasi, 47-uy
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaPhoneAlt className="text-2xl text-orange-500 mt-1" />
              <div>
                <h4 className="text-lg text-gray-800">+998 (55) 500-01-23</h4>
                <p className="text-sm text-gray-600">Dushanbadan jumagacha soat 9.00 dan 18.00
                  <br />
                  gacha</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaEnvelope className="text-2xl text-orange-500 mt-1" />
              <div>
                <h4 className="text-lg text-orange-500">info@korezeps.uz</h4>
                <p className="text-sm text-gray-600">Bizga yozing</p>
              </div>
            </div>
          </div>
          <form className='flex flex-col gap-5 w-full'>
            <input className='max-w-80 border-2 border-gray-200 py-3 px-6' type="text" placeholder='Sizning ismingiz' />
            <input className='max-w-80 border-2 border-gray-200 py-3 px-6' type="tel" placeholder='Sizning telefoningiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" />
            <input className='max-w-80 border-2 border-gray-200 py-3 px-6' type="email" placeholder='Email kiriting' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />
          </form>
          <div className=''>
            <textarea className="w-[350px] h-[200px] p-4 border border-gray-300 rounded resize-none outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-gray-400" placeholder='Xabarni kiriting'></textarea>
            <div className='flex justify-end'>
              <button className='mr-5 mt-3 text-white font-medium py-2 px-8 bg-[#ec5714]'>Yuborish</button>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4681.611265957726!2d71.65154081694502!3d41.00021467923671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4beef2485ac1%3A0x316f055d9e451c6c!2sShodiyona!5e0!3m2!1sen!2s!4v1753247931924!5m2!1sen!2s"
          width="1100"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
    </div>
  );
};

export default Aloqa;
