import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel'; 

const MainLayout = () => {
  const location = useLocation();
  const koruzeps = location.pathname === '/koruzeps';

  return (
    <div className='w-full min-h-screen flex flex-col focus:outline-none focus:border-[#ec5714]  ::selection ::-webkit-scrollbar-thumb  ::-webkit-scrollbar-track ::-webkit-scrollbar'>
      <div className={`${koruzeps ? "" : "banner-area"} relative`}>
        {!koruzeps && <div className="absolute inset-0 bg-[#4a383066]" />}

        <div className="relative z-20">
          <Header />
          {koruzeps ? <Carousel /> : <Hero />}
        </div>
      </div>

      <main className='grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
