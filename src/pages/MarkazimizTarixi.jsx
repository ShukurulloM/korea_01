import React from 'react';
import useTitle from '../components/useTitle';

const MarkazimizTarixi = () => {
  useTitle("Markaz-tarixi")
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center sm:text-left">
        Markazimiz tarixi
      </h3>

      <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
        <p>
          <span className="font-semibold text-gray-800">2018.07.02</span>
          <span className="text-[#ec5714] px-2">⇒</span>
          O‘zbekiston Respublikasi Vazirlar Mahkamasining 538-F-sonli Farmoni asosida
          O‘zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi huzuridagi
          Tashqi mehnat migratsiyasi agentligi (Agentlik) va Koreya Respublikasi Inson
          resurslarini rivojlantirish Instituti bilan hamkorlikda markaz tashkil etilishi
        </p>

        <p>
          <span className="font-semibold text-gray-800">2018.11.12</span>
          <span className="text-[#ec5714] px-2">⇒</span>
          Markazda o‘qish boshlangan kun
        </p>

        <p>
          <span className="font-semibold text-gray-800">2018.11.28</span>
          <span className="text-[#ec5714] px-2">⇒</span>
          Markazning rasmiy ochilish kuni
        </p>

        <p>
          <span className="font-semibold text-gray-800">2019.02.01</span>
          <span className="text-[#ec5714] px-2">⇒</span>
          Markaz o‘quvchilari o‘rtasida bo‘lib o‘tgan faollar kuni
        </p>
      </div>
    </div>
  );
};

export default MarkazimizTarixi;
