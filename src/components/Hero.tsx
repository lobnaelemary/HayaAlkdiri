import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContactModal }) => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = lang === 'ar' ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameEn;
  const isAr = lang === 'ar';

  useEffect(() => {
    let index = 0;
    setDisplayedName('');
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [lang, fullName]);

  return (
    <section 
      id="home" 
      className="relative pt-20 md:pt-24 pb-12 md:pb-16 flex flex-col justify-center overflow-hidden bg-[#FAF7F2] lg:min-h-screen lg:py-0" 
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="absolute top-16 left-1/4 w-[450px] h-[450px] bg-[#7B4E96]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#7B4E96_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          
          {/* Text Content */}
          <div className={`md:col-span-7 flex flex-col space-y-4 md:space-y-6 w-full ${isAr ? 'items-start text-right' : 'items-start text-left'}`}>
            
            <div className="space-y-3 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#241A2B] leading-[1.2]">
                <span className="block font-lemonada text-[#7B4E96] text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 min-h-[1.2em]">
                  {displayedName}
                </span>
                
                <span className="bg-gradient-to-r from-[#241A2B] via-[#583370] to-[#7B4E96] bg-clip-text text-transparent font-['Cairo'] text-xl sm:text-2xl lg:text-3xl block font-bold">
                  {isAr ? 'مصممة أزياء مبتكرة' : 'Innovative Fashion Designer'}
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-xl text-[#52435D] font-normal leading-relaxed max-w-xl">
                {isAr
                  ? 'أصمم أزياء فريدة تجمع بين الإبداع الفني، والأناقة العصرية، والاهتمام الاستثنائي بأدق التفاصيل لتتركي أثراً لا يُنسى.'
                  : 'Designing unique fashion pieces blending artistic creativity, modern elegance, and meticulous attention to detail.'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-1 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#7B4E96] to-[#583370] text-white font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:from-[#6B3B87] hover:to-[#47265C] transition-all transform hover:-translate-y-0.5"
              >
                <span>{isAr ? 'استكشفي معرض الأعمال' : 'Explore Portfolio'}</span>
              </a>
              <button
                onClick={onOpenContactModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 md:px-7 py-3.5 md:py-4 rounded-full bg-[#F4EFF8] text-[#583370] border-2 border-[#7B4E96]/30 font-bold text-sm md:text-base shadow-xs hover:bg-[#EBE2F3] hover:border-[#7B4E96] transition-all"
              >
                <span>{isAr ? 'ابدئي تصميمك الخاص' : 'Start Your Project'}</span>
              </button>
            </div>

          </div>

          {/* Image & Logo Showcase */}
          <div className="md:col-span-5 relative flex items-center justify-center w-full">
            <div className="relative w-56 sm:w-64 md:w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center animate-[float_5s_ease-in-out_infinite]">
              
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-16px) rotate(1.5deg); }
                }
              `}</style>

              <img
                src="/assets/img/haya logo.png"
                alt="Haya Alkdiri Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(123,78,150,0.2)] transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center gap-1 text-[#7B4E96] hover:text-[#583370] transition-colors cursor-pointer">
        <a href="#about" className="flex flex-col items-center gap-1" aria-label="Scroll down to About section">
          <span className="text-[11px] font-semibold tracking-wider uppercase">
            {isAr ? 'اكتشفي المزيد' : 'Scroll Down'}
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};