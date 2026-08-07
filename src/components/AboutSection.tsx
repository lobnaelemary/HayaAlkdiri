import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, Compass, Eye, Layers, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenCV?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenCV }) => {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-32 bg-[#FAF7F2] relative" dir={isAr ? 'rtl' : 'ltr'}>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* عنوان السكشن الرئيسي */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B4E96]/20 text-[#7B4E96] text-xs font-bold uppercase tracking-widest shadow-xs">
            <span>{isAr ? 'وراء كل قطعة قصة' : 'Behind Every Piece, A Story'}</span>
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#241A2B] font-['Cairo'] tracking-tight leading-tight">
            {isAr ? 'الأناقة الحقيقية تبدأ قبل أن تلمسي القماش' : 'True Elegance Begins Before Touching Fabric'}
          </h2>

          <p className="text-base sm:text-lg text-[#52435D] max-w-2xl mx-auto font-tajawal leading-relaxed">
            {isAr 
              ? 'مؤمنة تماماً أن اللبس مش مجرد قماش مفرود، هو هويتك، حالتك، وانعكاس لشخصيتك اللي تستحق تطلع بأعلى معايير الإتقان.' 
              : 'Believing fashion is not just fabric, but an extension of your identity brought to life with meticulous care.'}
          </p>
        </div>

        {/* حاوية الكروت المتداخلة بتقنية الـ Sticky Stacking */}
        <div className="relative space-y-12 pb-20">
          
          {/* الكارت الأول: القصة الشخصية والرحلة (يثبت ويأتي الكارت بعده ليغطيه) */}
          <div className="sticky top-24 z-10 bg-white p-8 sm:p-14 rounded-[2.5rem] border border-[#7B4E96]/20 shadow-2xl transition-all duration-300">
            <div className="absolute -top-6 right-10 w-16 h-16 rounded-2xl bg-[#7B4E96] text-white flex items-center justify-center shadow-lg transform -rotate-6">
              <Compass className="w-8 h-8" />
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-1">
                  {isAr ? PERSONAL_INFO.diplomaAr : PERSONAL_INFO.diplomaEn}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#241A2B] font-['Cairo']">
                  {isAr ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameEn}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#52435D] leading-relaxed font-tajawal">
                {isAr 
                  ? 'مش مجرد تصاميم تقليدية، هدفي هو تحويل الأفكار الملهمة إلى واقع ملموس بدقة متناهية. من خلال محاكاة الأقمشة والأنماط ثلاثية الأبعاد (3D Garment Simulation)، بخليكي تشوفي قطعتك وتعيشي تفاصيلها كأنها حقيقية قدامك قبل حتى ما يبدأ قص القماش، وده بيختصر الوقت ويديكي ثقة بنسبة 100%.'
                  : 'Not just traditional designs, my goal is to transform inspiring ideas into tangible reality with extreme precision. Through 3D Garment Simulation, I bring your piece to life so you can experience every detail before a single cut is made.'}
              </p>

              
            </div>
          </div>

          {/* الكارت الثاني: الرؤية والرسالة (يركب ويغطي فوق الكارت الأول أثناء السكرول) */}
          <div className="sticky top-32 z-20 bg-[#1D1625] text-white p-8 sm:p-14 rounded-[2.5rem] shadow-2xl border border-[#E8D8C3]/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B4E96]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#E8D8C3]">
                <Eye className="w-6 h-6" />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold font-['Cairo'] text-[#E8D8C3]">
                  {isAr ? 'الرؤية والرسالة الإبداعية' : 'Vision & Mission'}
                </h4>
                <p className="text-base text-purple-200 leading-relaxed font-tajawal">
                  {isAr 
                    ? 'بنطمح نكون العلامة اللي بتغير مفهوم تصميم الأزياء، من خلال تقديم قطع فريدة بتعبر عنكِ بكل تفصيلة، وتجمع بين جرأة الابتكار وعراقة الذوق.' 
                    : 'Aimed at redefining fashion design through unique pieces that capture your essence with boldness and taste.'}
                </p>
              </div>
            </div>
          </div>

          {/* الكارت الثالث: نقطة التميز USP (يركب ويغطي فوق الكروت السابقة) */}
          <div className="sticky top-40 z-30 bg-white p-8 sm:p-14 rounded-[2.5rem] border border-[#7B4E96]/20 shadow-2xl transition-all duration-300">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#7B4E96]/10 text-[#7B4E96] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold font-['Cairo'] text-[#241A2B]">
                  {isAr ? 'وعدنا لكِ ' : 'Our Promise to You'}
                </h4>
                <p className="text-lg text-[#241A2B] font-medium leading-relaxed font-tajawal">
                  "{isAr ? PERSONAL_INFO.uspAr : PERSONAL_INFO.uspEn}"
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 relative z-10">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#7B4E96] hover:text-[#583370]"
              >
                <span>{isAr ? 'ابدئي مشروعك الخاص الآن' : 'Start Your Project Now'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};