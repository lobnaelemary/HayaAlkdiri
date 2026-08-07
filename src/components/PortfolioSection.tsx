import React, { useState } from 'react';
import { Language } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { Sparkles, Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';

interface PortfolioSectionProps {
  lang: Language;
  onOpenProjectModal: (id: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang, onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const isAr = lang === 'ar';

  const categories = [
    { id: 'all', labelAr: 'جميع الأعمال', labelEn: 'All Projects' },
    { id: '3d-fashion', labelAr: 'أزياء 3D رقمية', labelEn: '3D Garments' },
    { id: 'haute-couture', labelAr: 'كوتور راقي', labelEn: 'Haute Couture' },
    { id: 'heritage', labelAr: 'التراث السعودي', labelEn: 'Arabian Heritage' },
    { id: 'concept', labelAr: 'مفاهيم استعراضية', labelEn: 'Avant-Garde' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#FAF7F2] relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Background Cinematic Ornaments */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#7B4E96]/5 via-[#C5A059]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B4E96]/20 text-[#7B4E96] text-xs font-bold uppercase tracking-wider shadow-xs animate-pulse">
            <span>{isAr ? 'معرض التصاميم الملكية' : 'Couture Portfolio Showcase'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#241A2B] font-['Cairo'] leading-tight">
            {isAr ? 'إبداعات تمزج دقة التفاصيل وفن الـ 3D' : 'Exquisite Creations Blending Craftsmanship & 3D Artistry'}
          </h2>
          
          <p className="text-base text-[#52435D] max-w-2xl mx-auto font-tajawal">
            {isAr ? 'استكشي مجموعات هيا القديري الرائدة من النماذج الرقمية ثلاثية الأبعاد إلى قطع الكوتور الفاخرة' : 'Explore Haya Alkdiri flagship collections from digital 3D models to high couture garments'}
          </p>

          {/* Categories Filter Pills with smooth active scaling */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 transform active:scale-95 ${
                  selectedCategory === cat.id
                    ? 'bg-[#7B4E96] text-white shadow-lg shadow-[#7B4E96]/30 scale-105'
                    : 'bg-white text-[#52435D] hover:bg-[#F4EFF8] border border-[#7B4E96]/15 hover:border-[#7B4E96]/40'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Smooth Animation Keyframes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-[#7B4E96]/15 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between transform hover:-translate-y-2 animate-fadeIn"
            >
              
              {/* Image & Interactive Cinematic Cover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1D1625]">
                <img
                  src={project.images[0].url}
                  alt={isAr ? project.titleAr : project.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 brightness-95 group-hover:brightness-100"
                />
                
                {/* Cinematic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1625]/90 via-[#1D1625]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badges */}
                <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} flex items-center gap-2 z-10`}>
                  <span className="bg-white/90 backdrop-blur-md text-[#583370] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md border border-[#7B4E96]/20 font-['Cairo']">
                    {isAr ? project.categoryLabelAr : project.categoryLabelEn}
                  </span>
                  <span className="bg-[#C5A059] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md font-mono">
                    {project.year}
                  </span>
                </div>

                {/* Hover Inspect CTA Button (Appears smoothly with blur effect) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 backdrop-blur-[2px] bg-black/20">
                  <button
                    onClick={() => onOpenProjectModal(project.id)}
                    className="flex items-center gap-2.5 bg-[#7B4E96] text-white hover:bg-[#583370] px-7 py-3.5 rounded-full font-bold text-xs shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 border border-white/20 active:scale-95 cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4 text-[#E8D8C3]" />
                    <span className="font-['Cairo']">{isAr ? 'معاينة المشروع ' : 'Inspect Project & 3D Garment'}</span>
                  </button>
                </div>

                {/* Bottom Overlay Title */}
                <div className={`absolute bottom-4 ${isAr ? 'right-4 left-4 text-right' : 'left-4 right-4 text-left'} z-10 pointer-events-none`}>
                  <h3 className="text-2xl font-bold text-white font-['Cairo'] group-hover:text-[#E8D8C3] transition-colors">
                    {isAr ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="text-xs text-purple-200 mt-1 line-clamp-1 font-tajawal">
                    {isAr ? project.subtitleAr : project.subtitleEn}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className={`p-8 space-y-6 flex flex-col justify-between flex-grow ${isAr ? 'text-right' : 'text-left'}`}>
                
                {/* Description snippet - تم إزالة القص لتظهر جملة الوصف كاملة وواضحة */}
                <div>
                  <p className="text-sm text-[#52435D] leading-relaxed font-tajawal">
                    {isAr ? project.descriptionAr : project.descriptionEn}
                  </p>
                </div>

                {/* Action Row: Button aligned to the right in Arabic and left in English */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
                  <button
                    onClick={() => onOpenProjectModal(project.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#7B4E96] text-[#7B4E96] hover:text-white font-bold text-xs border border-[#7B4E96]/20 transition-all duration-300 group/link shadow-2xs cursor-pointer"
                  >
                    <span className="font-['Cairo']">{isAr ? 'تأمل تفاصيل التصميم' : 'Explore Design Details'}</span>
                    {isAr ? (
                      <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    )}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};