import React from 'react';
import ImgBir from '../img/yangilikbir.jpg';
import ImgIkki from '../img/yangilikikki.jpg';
import ImgUch from '../img/yangilikuch.jpg';
import ImgTort from '../img/yangiliktort.jpg';
import ImgBesh from '../img/yangilikbesh.jpg';
import ImgOlti from '../img/yangilikolti.jpg';
import ImgYetti from '../img/yangilikyetti.jpg';
import ImgSakkiz from '../img/yangiliksakkiz.jpg';
import ImgToqqiz from '../img/yangiliktoqqiz.jpg';
import ImgOng from '../img/yangilikon.jpg';
import ImgOnBir from '../img/yangilikonbir.jpg';
import ImgOngIkki from '../img/yangilikonikki.jpg';
import ImgOnUch from '../img/yangilikonuch.jpg';
import ImgYosh from '../img/yoshlar.jpg';
import ImgOnTort from '../img/yangilikontort.jpg';

const Yangiliklar = () => {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20'>
      <h1 className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'>Yangiliklar</h1>
      
      <div className='space-y-8 md:space-y-12'>
        {/* News Item 1 */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgBir} 
            alt="Endi til o'rganish, ishga xalaqit bermaydi" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>10/08/2020</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Endi til o'rganish, ishga xalaqit bermaydi
            </h3>
            <p className='text-gray-600'>
              Ish faoliyatini olib borasizmi? Til o'rganishga qiziqasiz lekin bunga vaqt yo'qmi? 
              Bizni kurslar aynan sizlar uchun:
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgIkki} 
            alt="E9 ishchi vizasi" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>10/08/2020</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              E9 ishchi vizasi
            </h3>
            <p className='text-gray-600'>
              Koreya Respublikasiga qonuniy davlat tomonidan ketiladigan "E9" ishchi vizasi uchun bo'lib o'tadigan
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgUch} 
            alt="Special eps topik imtihonlariga atigi bir oy qoldi." 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>09/23/2020</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Special eps topik imtihonlariga atigi bir oy qoldi.
            </h3>
            <p className='text-gray-600'>
              Janubiy Koreya respublikasida vaqtinchalik mehnat faoliyatini muvafaqqiyatli amalga oshirib kelgan nomzodlar, 
              shoshiling, maxsus test imtihonlarga atigi bir oy qoldi. Tezlashtirilgan darslarimiz sizlar uchun!
            </p>
          </div>
        </div>

        {/* News Item 4 */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgTort} 
            alt="Koreys-O'zbek" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>03/11/2020</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              ORTIQCHA TO'LOVLARSIZ! KOREYADA QONUNIY E9 ISHCHI VIZASI ORQALI ISHLASHNI ISTAYSIZMI?
            </h3>
            <div className="aspect-w-16 aspect-h-9 mt-4">
              <iframe 
                className='w-full h-64 md:h-80 rounded-lg'
                src="https://www.youtube.com/embed/p_oeLHEC9GI" 
                title="Koreys-O'zbek koreys tili markazi" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* News Item 5 */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgUch} 
            alt="Special eps topik imtihonlariga atigi bir oy qoldi." 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>03/11/2020</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              KOREYS SPECIAL EPS TOPIK IMTIHONLARI UCHUN DARSBOSHLANADI SHOSHILIB QOLING!
            </h3>
            <p className='text-gray-600'>
              Koreyada qonuniy E9 ishchi vizasini muvaffaqiyatli tugatib kelganlar uchun Special imtihoniga tayyorlov boshlandi. 
              Shoshiling!. Chunki bu yilgi Special EPS Topik imtihonlari tez orada bo'ladi.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgBesh} 
            alt="Topik kurslar" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>03/11/2020</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              TOPIK KURSLAR!
            </h3>
            <p className='text-gray-600'>
              Koreyada qonuniy E9 ishchi vizasini muvaffaqiyatli tugatib kelganlar uchun Special imtihoniga tayyorlov boshlandi. 
              Shoshiling!. Chunki bu yilgi Special EPS Topik imtihonlari tez orada bo'ladi.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgOlti} 
            alt="KOREYADA QONUNIY E9 ISHCHI VIZASI ORQALI ISHLASHNI ISTAYSIZMI?" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>01/27/2020</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              KOREYADA QONUNIY E9 ISHCHI VIZASI ORQALI ISHLASHNI ISTAYSIZMI?
            </h3>
            <p className='text-gray-600'>
              KOREYADA QONUNIY E9 ISHCHI VIZASI ORQALI ISHLASHNI ISTAYSIZMI? UNDA BIZ BILAN BIRGALIKDA IMTIHONLARGA TAYYORLANING!
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgYetti} 
            alt="Koreyada ishga ketishda bo'lib o'tadigan imtihonlarda sizga yordam beruvchi Koreya mutaxassislari tomonidan yaratilgan maxsus mobil ilova uchun shartnoma!" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>07/26/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Koreyada ishga ketishda bo'lib o'tadigan imtihonlarda sizga yordam beruvchi Koreya mutaxassislari tomonidan yaratilgan maxsus mobil ilova uchun shartnoma!
            </h3>
            <p className='text-gray-600'>
              Endilikda siz bizning mobil ilovamizni o'zingizga qulay bo'lgan bank orqali to'lovni amalga oshirib ishlatishingiz mumkin!
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgSakkiz} 
            alt="Endilikda sizham mobil ilovamizni yuklab olishingiz mumkin" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>04/25/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Endilikda sizham mobil ilovamizni yuklab olishingiz mumkin!
            </h3>
            <p className='text-gray-600'>
              Koreys mutaxassislari tomonidan maxsus ishlab chiqilgan mobil ilovalarimizni endilikda istagan fuqaro sotib olish imkoniyatiga ega!
            </p>
          </div>
        </div>

        {/* Continue with the same pattern for remaining news items */}
        {/* News Item 10 */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgToqqiz} 
            alt="Markazimizga Koreyadan nufuzli mexmonlar tashrif buyurishdi!" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>04/20/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Markazimizga Koreyadan nufuzli mexmonlar tashrif buyurishdi!
            </h3>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgOng} 
            alt="E'lon" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>04/05/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              E'lon!
            </h3>
            <p className='text-gray-600'>
              Markazimizda 2 oylik kurs tashkil etildi
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgOnBir} 
            alt="Yangi o'quv semestri boshlandi" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>04/05/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Yangi o'quv semestri boshlandi
            </h3>
            <p className='text-gray-600'>
              Qo'shimcha manbalar asosida o'quv dasturini mukamallashtirib, 1-Apreldan boshlab markazimizda yangi o'quv semestri boshlandi.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgYosh} 
            alt="Viloyatlar bo'ylab uchrashuv va seminarlar tashkil etildi" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>03/27/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Viloyatlar bo'ylab uchrashuv va seminarlar tashkil etildi
            </h3>
            <p className='text-gray-600'>
              Markazimiz hodimlari, Tashqi mehnat migratsiyasi agentligi va Yoshlar Ittifoqi tashkiloti bilan birgalikda viloyatlar bo'ylab uchrashuv va seminarlar tashkil etildi
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgOngIkki} 
            alt="1-semestr bitiruv kuni" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>03/07/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              1-semestr bitiruv kuni
            </h3>
            <p className='text-gray-600'>
              1- semestrni tugatgan o'quvchilarimizga Markaz tomonidan maxsus sertifikatlar topshirildi. Markazimiz o'quvchilariga Koreyaga ishga ketishda bo'lib o'tadigan imtihonlarda omad tilab qolamiz!
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgOnUch} 
            alt="Markazimiz faollar tadbiri" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>02/01/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Markazimiz faollar tadbiri
            </h3>
            <p className='text-gray-600'>
              Markazimiz o'quvchilari o'rtasida joriy yil ning 1 fevral kuni markazimiz faollari nomli tadbir bo'lib o'tdi. Unda markazimizda tahsil olayotgan barcha o'quvchilarimiz qatnashishdi.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
          <img 
            src={ImgOnTort} 
            alt="Markazimizning ochilish marosimi" 
            className='w-full md:w-1/3 h-48 md:h-64 object-cover'
          />
          <div className='p-4 md:p-6 flex-1'>
            <span className='text-gray-500 text-sm'>12/11/2019</span>
            <h3 className='text-lg md:text-xl font-medium mb-3 block transition-colors' to="/">
              Markazimizning ochilish marosimi
            </h3>
            <p className='text-gray-600'>
              Markazimizningg rasmiy ochilish marosimi avvalida mehmonlar – Koreya Respublikasidagi O'zbekiston elchixonasi faxriy konsuli, Koreya Respublikasidagi O'zbekiston Savdo vakolatxonasi prezidenti...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yangiliklar