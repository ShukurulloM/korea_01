import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Brat from '../img/brat.jpg';
import Humo from '../img/humo.png';
import Bank from '../img/Bank.png';
import Hunan from '../img/Hunan.gif';
import Evergreen from '../img/evergreen.jpg';
import useTitle from '../components/useTitle';

const Koruzeps = () => {
  useTitle("Asosiy")
  return (
    <div className=''>
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Carousel />
      </div>

      <div className="relative w-full -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24 z-10 px-4 sm:px-5">
        <div className='flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 w-full max-w-6xl mx-auto text-white'>
          <div className='p-3 sm:p-4 md:p-5 bg-[#ec5714] h-52 shadow-lg'>
            <p className='text-center mb-3 sm:mb-4 text-sm sm:text-base'>
              Koreys tilini markazimizda o‘rganib, yoki
              <br />
              koreys tilini bilgan fuqarolar Koreyaga
              <br />
              ketishning 1-bosqich test (Computer Based
              <br />
              Testing CBT) muvofaqiyatli o‘tish.
            </p>
            <Link to="/markazdaoqishningafzalliklari" className='flex justify-center font-semibold text-sm sm:text-base hover:underline' to="/">Ko'proq ma'lumot oling</Link>
          </div>

          <div className='p-3 sm:p-4 md:p-5 bg-[#ec5714] h-60 shadow-lg'>
            <p className='text-center mb-3 sm:mb-4 text-sm sm:text-base'>
              Koreys tilini o‘rganishda asosiysi o‘zingizning
              <br />
              xarakatingiz orqali bizdagi malakali
              <br />
              o‘qituvchilarimiz bilan tezrok va sifatli
              <br />
              o‘rganish. Markazimizda faqatgina koreys
              <br />
              tilimas balkim Koreya ma'daniyati, urf-
              <br />
              odatlari haqida ham o‘rgatib o‘tiladi.
            </p>
            <Link className='flex justify-center font-semibold text-sm sm:text-base hover:underline' to="/oqishgaqabul">Ko'proq ma'lumot oling</Link>
          </div>

          <div className='p-3 sm:p-4 md:p-5 bg-[#ec5714] h-56 shadow-lg'>
            <p className='text-center mb-3 sm:mb-4 text-sm sm:text-base'>
              Koreyaga ketishning yana bir asosiy
              <br />
              bosqichi bu CBT (Computer Based Testning)
              <br />
              sinovidan o‘tishdir. Koreys tilini bilsangiz
              <br />
              to‘gridan to‘g‘ri test sinoviga kelib
              <br />
              topshirsangiz bo‘ladi.
            </p>
            <Link className='flex justify-center font-semibold text-sm sm:text-base hover:underline' to="/epstopik">Ko'proq ma'lumot oling</Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5 w-full max-w-6xl mx-auto pt-10 md:pt-20 px-4 sm:px-6'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 md:mb-6'>Markaz rahbari</h2>
        <div className='flex flex-col lg:flex-row items-start gap-5 md:gap-8 lg:gap-10'>
          <img className='w-full lg:w-[380px] h-auto object-cover rounded-lg' src={Brat} alt="Koreys kishi" />
          <div className='text-base sm:text-lg text-gray-500'>
            <p className='mb-3'>Sizga o‘z hurmatimni izhor etaman!</p>
            <p className='mb-3'>
              Markazimizni ochishdan maqsad Koreya Respublikasida vaqtinchalik ish faoliyat olib bormoqchi bo‘lgan O‘zbekiston Respublikasi fuqarolarini yangi innovasion uslubda boshlang‘ich koreys kasbiy tili va ma'daniyatini o‘rgatish hamda Koreyada ish jarayonlari
              va xayot tarzi xaqida tushuncha berishdir. Shuningdek, markazimizda Koreyaga ishga ketishning EPS-TOPIK 1-bosqich test imtihonini topshirish imkoniyati xam bo‘ladi.
            </p>

            <p className='mb-3'>
              Men uzimning 40 yillik malakamdan kelib chiqqan holda shuni aytamanki markazimiz
              sizga ilm o‘rgatib, Koreyaga ishga ketish bosqichlarda ko‘makdosh bo‘lishiga ishonaman.
              Va shunixam ta'kidlab o‘tamanki ilm olishda o‘zingizningxam xarakatingiz muxim rol
              o‘ynaydi. O‘ylagan maqsadingiz va erishmoqchi bo‘lgan yutuqlaringizga erishishingizga
              ishonaman.
            </p>

            <p className='mb-3'>
              Sizga baxt, salomatlik hamda erishmoqchi bo‘lgan maqsad va yutuqlarizga
              erishishingizga tilakdoshman.
            </p>
            <span className='font-semibold'>KIM YONG BOK</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between items-center salom gap-8 bg-[#000000b3] py-10 md:py-16 my-10 md:my-16 px-4 sm:px-8 md:px-16'>
        <div className='flex flex-col max-w-lg'>
          <h2 className='text-2xl sm:text-3xl text-white font-bold mb-4'>Savolingizga onlayn javob oling!</h2>
          <p className='text-white mb-6 md:mb-10 text-sm sm:text-base'>
            Bizga har qanday savol bering va tajribali murabbiylar imkon qadar tezroq sizga
            javob beradilar!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-20 text-white'>
            <p className='text-base sm:text-lg font-medium'>Tajribali o‘qituvchilar</p>
            <p className='text-base sm:text-lg font-medium'>Sertifikat</p>
          </div>
        </div>
        <form className='flex flex-col gap-3 sm:gap-4 w-full max-w-md'>
          <input className='w-full border-2 border-gray-200 py-2 px-4 rounded' type="text" placeholder='Sizning ismingiz' required/>
          <input className='w-full border-2 border-gray-200 py-2 px-4 rounded' type="tel" placeholder='Sizning telefoningiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" required/>
          <input className='w-full border-2 border-gray-200 py-2 px-4 rounded' type="email" placeholder='E-mail' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />
          <select className='w-full border-2 border-gray-200 py-2 px-4 rounded'>
            <option value="meni savolimni hamma kursin">Meni savolimni hamma kursin</option>
            <option value="meni savolimni hamma kursin">Meni savolimni hech kim kurmasin</option>
          </select>
          <textarea className="w-full h-24 p-3 border-2 border-gray-200 rounded resize-none outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-gray-400" placeholder='Savol'></textarea>
          <button className='w-full py-3 text-white font-medium bg-[#ec5714] hover:bg-[#d14e12] transition-colors rounded'>Yuborish</button>
        </form>
      </div>

      <div className='pb-10 px-4 sm:px-6'>
        <h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 md:mb-8'>Bizning hamkorlar</h2>
        <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-10'>
          <div className='flex flex-col items-center w-full sm:w-auto px-4'>
            <Link to="https://gov.uz/oz/bv" className='mb-2'>
              <img className='w-32 sm:w-40 md:w-48' src={Humo} alt="Bandlik va mehnat munosabatlari vazirligi" />
            </Link>
            <p className='text-gray-500 text-sm sm:text-base text-center'>Bandlik va mehnat munosabatlari vazirligi</p>
          </div>

          <div className='flex flex-col items-center w-full sm:w-auto px-4'>
            <Link to="https://migration.uz/uz" className='mb-2'>
              <img className='w-32 sm:w-40 md:w-48' src={Bank} alt="Bandlik va mehnat munosabatlari Vazirligi tashqi mehnat migratsiyasi masalalari Agentligi" />
            </Link>
            <p className='text-gray-500 text-sm sm:text-base text-center'>
              Bandlik va mehnat munosabatlari Vazirligi
              <br />
              tashqi mehnat migratsiyasi masalalari Agentligi
            </p>
          </div>

          <div className='flex flex-col items-center w-full sm:w-auto px-4'>
            <Link to="http://honam.or.kr/" className='mb-2'>
              <img className='w-32 sm:w-40 md:w-48' src={Hunan} alt="Hunan professional college" />
            </Link>
            <span className='text-gray-500 text-sm sm:text-base text-center'>Hunan professional college</span>
          </div>

          <div className='flex flex-col items-center w-full sm:w-auto px-4'>
            <Link to="https://www.kia-evermotors.com/">
              <img className='w-32 sm:w-40 md:w-48' src={Evergreen} alt="Evergreen Motors Co.Ltd" />
            </Link>
            <span className='text-gray-500 text-sm sm:text-base text-center mt-2'>Evergreen Motors Co.Ltd</span>
          </div>
        </div>
      </div>

      <div className='w-full px-0'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9640.97731364311!2d69.24224702012266!3d41.30290533520236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1753781165796!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className='w-full h-64 sm:h-80 md:h-96 lg:h-[450px]'
        >
        </iframe>
      </div>
    </div>
  );
};

export default Koruzeps;