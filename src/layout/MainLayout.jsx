import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const MainLayout = () => {
  const location = useLocation();
  const koruzeps = location.pathname === '/koruzeps';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ec5714]"></div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <div className={`${koruzeps ? "" : "banner-area"} relative`}>
        {!koruzeps && <div className="absolute inset-0 bg-[#4a383066]" />}

        <div className="relative z-20">
          <Header />
          {koruzeps ? <Carousel /> : <Hero />}
        </div>
      </div>

      <main className='flex-grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;