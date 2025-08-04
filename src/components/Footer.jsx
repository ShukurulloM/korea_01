import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const searchIndex = [
  {
    id: 'news-1',
    title: "Endi til o'rganish, ishga xalaqit bermaydi",
    excerpt: "Ish faoliyatini olib borasizmi? Til o'rganishga qiziqasiz lekin bunga vaqt yo'qmi? Bizni kurslar aynan sizlar uchun:",
    date: '10/08/2020',
    type: 'news',
    path: '/yangiliklar'
  },
  {
    id: 'edu-1',
    title: "O'qitish uslublari",
    excerpt: "Markazimiz ta'sischilari xisoblangan Koreya Respublikasi vakilligi tomonidan ushbu o'qish dasturi...",
    type: 'education',
    path: '/oqitishuslublari'
  },
  {
    id: 'contact-1',
    title: "Aloqa ma'lumotlari",
    excerpt: "Toshkent shahar, Chilonzor tumani, Lutfiy ko'chasi, 47-uy",
    type: 'contact',
    path: '/aloqa'
  }
];

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = searchIndex.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <footer className='bg-[#252424] text-white pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          
          {/* Navigation Links */}
          <div className="flex flex-col">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>Navigatsiya</h2>
            <nav className='flex flex-col gap-2 md:gap-3 text-sm md:text-[15px] text-white/80'>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/">Bosh sahifa</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/markazimizmaqsadi">Markazimiz maqsadi</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/yangiliklar">Yangiliklar</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/fotogalareya">Fotogalareya</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/savoljavob">Savollar va javoblar</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/aloqa">Aloqalar</Link>
            </nav>
          </div>

          {/* Admission Links */}
          <div className="flex flex-col">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>O'qishga qabul qilish</h2>
            <nav className='flex flex-col gap-2 md:gap-3 text-sm md:text-[15px] text-white/80'>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/oqishgaqabul">O'qishga kirish bosqichlari</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/markazdaoqishningafzalliklari">Markazimizda o'qishning afzalliklari</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/royhatdanotish">Ro'yhatdan o'tish</Link>
            </nav>
          </div>

          {/* Learning Links */}
          <div className="flex flex-col">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>Koreys tilini o'rganish</h2>
            <nav className='flex flex-col gap-2 md:gap-3 text-sm md:text-[15px] text-white/80'>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/oqishhaqidaumumiymalumot">O'qish haqida umumiy ma'lumot</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/oqitishuslublari">O'qish uslublari va o'quv qo'lanmalar</Link>
              <Link className='hover:text-[#ec5714] transition-colors duration-200' to="/oqitishjarayoni">O'qish xonalar va jarayonlar</Link>
            </nav>
          </div>

          {/* Search Section */}
          <div className="flex flex-col relative">
            <h2 className='text-lg md:text-xl font-semibold uppercase mb-4 md:mb-5'>Qidiruv</h2>
            <div className='relative mb-5'>
              <input 
                className='w-full py-2 pl-10 pr-4 rounded text-black focus:outline-none focus:ring-2 focus:ring-[#ec5714]' 
                type="search" 
                placeholder='Qidiruv...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
              />
              <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
              
              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
                  {searchResults.map(result => (
                    <Link 
                      key={result.id}
                      to={result.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-100"
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-sm text-gray-600 truncate">{result.excerpt}</div>
                      <div className="text-xs text-gray-400">
                        {result.type === 'news' ? `Yangilik - ${result.date}` : result.type}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className='flex flex-col gap-2 text-sm md:text-[15px] text-white/80'>
              <div className='flex items-center gap-2'>
                <FaPhone className='text-[#ec5714]' />
                <a href="tel:+998712788265">+998 (71) 278-82-65</a>
              </div>
              <div className='flex items-center gap-2'>
                <FaPhone className='text-[#ec5714] opacity-0' />
                <a href="tel:+998712731748">+998 (71) 273-17-48</a>
              </div>
              <div className='flex items-center gap-2 mb-3'>
                <FaPhone className='text-[#ec5714] opacity-0' />
                <a href="tel:+998998458830">+998 (99) 845-88-30</a>
                </div>
              
              <div className='flex items-center gap-2 mb-3'>
                <FaEnvelope className='text-[#ec5714]' />
                <a href='https://www.google.com/maps/place/Tashkent,+Uzbekistan/@41.282597,69.279367,15z/data=!4m6!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk?hl=en&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D' >info@koruzeps.uz</a>
              </div>
              
              <div className='flex items-start gap-2'>
                <FaMapMarkerAlt className='text-[#ec5714] mt-1' />
                <a href="https://www.google.com/maps/search/Toshkent+shahar,+Chilonzor+tumani,+Lutfiy+ko'chasi,+47-uy/@41.2825892,69.2484671,13z/data=!3m1!4b1?hl=en&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D">Toshkent shahar, Chilonzor tumani, Lutfiy ko'chasi, 47-uy</a>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 md:mt-16 pt-6 border-t border-white/10'>
          <p className="text-xs md:text-sm text-center text-gray-400">
            Copyright © 2025 JV LLC Korean Uzbek Korean Language Center. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;