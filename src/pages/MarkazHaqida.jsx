import React from 'react';

const MarkazHaqida = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-5 py-20">
      <h3 className="text-2xl sm:text-3xl font-bold leading-relaxed mb-6 text-gray-900">
        Markaz haqida
      </h3>

      <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4">
        “Koreys-O‘zbek Koreys tili markazi” (Markaz) ma'sulyati cheklangan jamiyat qo‘shma korxonasi sizga o‘z hurmatini izhor etadi!
      </p>

      <p className="text-base sm:text-lg lg:text-xl text-gray-600 space-y-2">
        Markazimiz O‘zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi huzuridagi
        Tashqi mehnat migratsiyasi agentligi (Agentlik) va Koreya Respublikasi Inson resurslarini
        rivojlantirish Instituti bilan hamkorlikda, O‘zbekiston Respublikasi Vazirlar Mahkamasining
        2018 yil 2 iyuldagi 538-F-sonli Farmoni bilan tashkil topgan.
        <br className="hidden sm:block" />
        Markazning asosiy vazifasi koreys tili va professional kasbga o‘qitishdan iborat.
      </p>
    </div>
  );
};

export default MarkazHaqida;
