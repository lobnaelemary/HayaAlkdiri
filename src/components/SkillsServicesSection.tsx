import React from 'react';
import { Language } from '../types';
import { SKILLS } from '../data/portfolioData';
import { Scissors, Box, PenTool, Tablet, Image, Sparkles } from 'lucide-react';

interface SkillsServicesSectionProps {
  lang: Language;
}

export const SkillsServicesSection: React.FC<SkillsServicesSectionProps> = ({ lang }) => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#7B4E96]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#7B4E96]" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-[#7B4E96]" />;
      case 'Tablet': return <Tablet className="w-5 h-5 text-[#7B4E96]" />;
      case 'Image': return <Image className="w-5 h-5 text-[#7B4E96]" />;
      default: return <Sparkles className="w-5 h-5 text-[#7B4E96]" />;
    }
  };

  const isAr = lang === 'ar';

  return (
    <section id="skills" className="py-6 bg-[#FAF7F2] relative overflow-hidden my-[-1rem] z-20" dir={isAr ? 'rtl' : 'ltr'}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        {/* البادج بخلفية بيضاء شبه باقي الموقع */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#7B4E96] bg-white border border-[#7B4E96]/15 px-4 py-1.5 rounded-full inline-block shadow-2xs">
          {isAr ? 'البرمجيات والمهارات الرقمية' : 'Software & Digital Skills'}
        </span>
        
        {/* العنوان بـ فونت Cairo الموحد ولون البراند */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#7B4E96] font-['Cairo'] mt-3 leading-normal">
          {isAr ? 'أدوات تقنية تترجم الأفكار إلى واقع' : 'Technical Tools Transforming Vision to Reality'}
        </h3>
      </div>

      {/* Infinite Seamless Marquee Container (الفكرة الأصلية زي ما هي) */}
      <div className="relative w-full overflow-hidden flex py-2">
        
        <style>{`
          @keyframes marqueeScrollAr {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(100% / 4)); }
          }
          @keyframes marqueeScrollEn {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 4)); }
          }
          .animate-marquee-ar {
            display: flex;
            width: max-content;
            animation: marqueeScrollAr 25s linear infinite;
          }
          .animate-marquee-en {
            display: flex;
            width: max-content;
            animation: marqueeScrollEn 25s linear infinite;
          }
          .animate-marquee-ar:hover,
          .animate-marquee-en:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className={isAr ? "animate-marquee-ar flex gap-5 items-center" : "animate-marquee-en flex gap-5 items-center"}>
          {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 bg-white px-6 py-3.5 rounded-2xl border border-[#7B4E96]/15 shadow-sm shrink-0 hover:border-[#7B4E96] transition-all min-w-[220px]"
            >
              <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#7B4E96]/10 shrink-0">
                {getSkillIcon(skill.icon)}
              </div>
              <div>
                <span className="text-sm font-bold text-[#241A2B] font-tajawal block whitespace-nowrap">
                  {isAr ? skill.nameAr : skill.nameEn}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};