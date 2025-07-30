import { useState } from 'react';

const RoyhatdanOtish = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: { year: '', month: '', day: '' },
    address: '',
    passportNumber: '',
    phone: '+998 (',
    email: '',
    dormitoryNeed: 'kerak',
    languages: [
      { 
        name: 'Koreys tili', 
        speaking: 'Yuqori', 
        writing: '✔', 
        reading: '✔', 
        listening: '✔' 
      },
      { 
        name: '', 
        speaking: 'Bilmayman', 
        writing: 'Bilmayman', 
        reading: 'Bilmayman', 
        listening: 'Bilmayman' 
      }
    ],
    education: [
      { startYear: '', endYear: '', institution: '', specialty: '' },
      { startYear: '', endYear: '', institution: '', specialty: '' },
      { startYear: '', endYear: '', institution: '', specialty: '' }
    ],
    epsTopik: { level1: '', level2: '' },
    photo: null
  });

  const languageLevels = ['Yuqori', 'Ortacha', 'Boshlang\'ich', 'Bilmayman'];
  const years = Array.from({length: 46}, (_, i) => 1980 + i);
  const months = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
    'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
  ];
  const days = Array.from({length: 31}, (_, i) => i + 1);
  const dormitoryOptions = ['kerak', 'kerakmas'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBirthDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      birthDate: { ...prev.birthDate, [name]: value }
    }));
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index][field] = value;
    setFormData(prev => ({ ...prev, languages: updatedLanguages }));
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData(prev => ({ ...prev, education: updatedEducation }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">O'quvchi haqidagi so'rovnoma</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">SIZNING</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Ism sharif</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Tug'ilgan yil/oy/kun</label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    name="year"
                    value={formData.birthDate.year}
                    onChange={handleBirthDateChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                    required
                  >
                    <option value="">Yil</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  
                  <select
                    name="month"
                    value={formData.birthDate.month}
                    onChange={handleBirthDateChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                    required
                  >
                    <option value="">Oy</option>
                    {months.map((month, index) => (
                      <option key={month} value={index + 1}>{month}</option>
                    ))}
                  </select>
                  
                  <select
                    name="day"
                    value={formData.birthDate.day}
                    onChange={handleBirthDateChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                    required
                  >
                    <option value="">Kun</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Manzil</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Passport №</label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Telefon raqami</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email (Agar bo'lsa yozing)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Yotoqxonaga bo'lgan talab</label>
                <select
                  name="dormitoryNeed"
                  value={formData.dormitoryNeed}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                >
                  {dormitoryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          
          <section className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">CHET TILLARI HAQIDAGI BILIMI</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className='bg-[#ec5714]'>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">CHET TILL</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">GAPIRISH</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">YOZISH</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">O'QISH</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">ESHITISH</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {formData.languages.map((lang, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={lang.name}
                          onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={lang.speaking}
                          onChange={(e) => handleLanguageChange(index, 'speaking', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        >
                          {languageLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={lang.writing}
                          onChange={(e) => handleLanguageChange(index, 'writing', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        >
                          {languageLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={lang.reading}
                          onChange={(e) => handleLanguageChange(index, 'reading', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        >
                          {languageLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={lang.listening}
                          onChange={(e) => handleLanguageChange(index, 'listening', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        >
                          {languageLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 italic">
              EPS TOPIK yoki koreys tili bilan bog'liq sertifikatingiz bo'lsa, so'rovnomaga qo'shib topshirishingizni so'raymiz.
            </div>
          </section>
          
          <section className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">MALUMOTI</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className='bg-[#ec5714]'>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">KIRGAN YILIZ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">BITIRGAN YILIZ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">O'QUV JOYI NOMI</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">MUTAXASSISLIGI</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {formData.education.map((edu, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={edu.startYear}
                          onChange={(e) => handleEducationChange(index, 'startYear', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        >
                          <option value="">Tanlang</option>
                          {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={edu.endYear}
                          onChange={(e) => handleEducationChange(index, 'endYear', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        >
                          <option value="">Tanlang</option>
                          {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={edu.specialty}
                          onChange={(e) => handleEducationChange(index, 'specialty', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          <section className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">EPS TOPIK IMTIHONI SERTIFIKATI (AGAR BO'LSA YOZING)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">EPS TOPIK I</label>
                <input
                  type="text"
                  name="epsTopik.level1"
                  value={formData.epsTopik.level1}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    epsTopik: { ...prev.epsTopik, level1: e.target.value }
                  }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                  placeholder="Ball"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">EPS TOPIK II</label>
                <input
                  type="text"
                  name="epsTopik.level2"
                  value={formData.epsTopik.level2}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    epsTopik: { ...prev.epsTopik, level2: e.target.value }
                  }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#ec5714] focus:border-[#ec5714] transition"
                  placeholder="Ball"
                />
              </div>
            </div>
          </section>
          
          <section className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Sizning rasmingiz tanlang (3X4)</h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="block">
                <span className="sr-only">Rasm tanlang</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-medium
                    file:bg-[#ec5714] file:text-white
                    hover:file:bg-[#d04b10] file:transition"
                  accept="image/*"
                />
              </label>
              {formData.photo && (
                <span className="text-sm text-gray-600">{formData.photo.name}</span>
              )}
            </div>
          </section>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#ec5714] hover:bg-[#d04b10] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ec5714] focus:ring-offset-2 font-medium transition"
            >
              YUBORISH
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          SHARTNOMA NAMUNASI
        </div>
      </div>
    </div>
  );
};

export default RoyhatdanOtish;