import React, { useState } from 'react';

const questions = [
  {
    question: 'Kursga qanday yozilaman?',
    answer: 'Saytdagi ro‘yxatdan o‘tish tugmasi orqali yoki bizga to‘g‘ridan-to‘g‘ri telefon orqali murojaat qiling.',
  },
  {
    question: 'Darslar qaysi tillarda olib boriladi?',
    answer: 'Darslar o‘zbek va koreys tillarida olib boriladi.',
  },
  {
    question: 'Kurslar qanday davom etadi?',
    answer: 'Har hafta 3 marotaba: dushanba, chorshanba va juma kunlari olib boriladi.',
  },
  {
    question: 'To‘lovni qanday amalga oshiraman?',
    answer: 'To‘lovni karta orqali yoki ofisimizda naqd pulda amalga oshirishingiz mumkin.',
  },
];

const SavolJavob = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ko‘p so‘raladigan savollar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tez-tez beriladigan savollarga javoblar
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl bg-white shadow-sm transition-all duration-300 ${
                activeIndex === index ? 'shadow-md' : 'hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full px-4 py-4 md:px-6 md:py-5 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 text-left">
                  {item.question}
                </span>
                <span className="ml-4 text-2xl text-[#ec5714]">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              <div
                id={`faq-${index}`}
                className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? 'max-h-screen pb-4 md:pb-6 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-600 text-sm md:text-base lg:text-lg">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Savolingizga javob topolmadingizmi?
          </p>
          <a href='https://t.me/shukurullo_M' className="bg-[#ec5714] hover:bg-[#d14e12] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
            Bog'lanish
          </a>
        </div>
      </div>
    </section>
  );
};

export default SavolJavob;