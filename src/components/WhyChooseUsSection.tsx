import React from 'react';
import { Language } from '../types';
import { Sparkles, Eye, Lightbulb, ShieldCheck, Clock } from 'lucide-react';

interface WhyChooseUsSectionProps {
  lang: Language;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: <Eye className="w-6 h-6 text-[#7B4E96] group-hover:text-white transition-colors duration-300" />,
      titleAr: "عين لا تسقط منها شاردة",
      titleEn: "Obsessive Attention to Detail",
      descAr: "لأن الفروق البسيطة بين التصميم الجيد والتصميم الاستثنائي تختبئ في أصغر التفاصيل التي أصنعها بعناية.",
      descEn: "Because the fine line between good and exceptional design hides in the microscopic details."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#7B4E96] group-hover:text-white transition-colors duration-300" />,
      titleAr: "أفكار تفوق المألوف",
      titleEn: "Distinctive, Original Concepts",
      descAr: "لا أنسخ الاتجاهات السائدة، بل أبتكر تصاميم تحمل بصمتك الخاصة وتعكس هويتك الفردية بشجاعة.",
      descEn: "I don't follow trends blindly; I craft concepts that boldly echo your individual identity."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#7B4E96] group-hover:text-white transition-colors duration-300" />,
      titleAr: "جودة تحكيها النتائج",
      titleEn: "Uncompromised Execution Quality",
      descAr: "من المحاكاة ثلاثية الأبعاد وحتى الملفات النهائية، أضمن لكِ مخرجات رقمية وواقعية بأعلى معايير الإتقان.",
      descEn: "From 3D simulations to final handovers, I ensure digital and physical perfection."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#7B4E96] group-hover:text-white transition-colors duration-300" />,
      titleAr: "احترام دقيق للوقت",
      titleEn: "Strict Timeline Adherence",
      descAr: "وقتكِ ثمين، والالتزام بالمواعيد المتفق عليها هو أساس الاحترام المتبادل والاحترافية الحقيقية.",
      descEn: "Your time is invaluable. Punctuality and meeting deadlines are non-negotiable standards."
    }
  ];

  return (
    <section id="why-choose-me" className="py-28 bg-[#FAF7F2] relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7B4E96]/5 to-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B4E96]/20 text-[#7B4E96] text-xs font-bold uppercase tracking-widest shadow-xs">
            <span>{isAr ? 'لماذا تختارين خدماتي؟' : 'Why Work With Me?'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#241A2B] font-['Cairo'] tracking-tight leading-tight">
            {isAr ? 'معايير تجعل تجربتك معنا مختلفة تماماً' : 'Standards That Make Your Experience Exceptional'}
          </h2>
          
          <p className="text-base text-[#52435D] max-w-xl mx-auto font-tajawal">
            {isAr 
              ? 'التزام حقيقي، رؤية إبداعية، واهتمام مطلق بكل خط وفكرة.' 
              : 'Genuine commitment, creative vision, and absolute dedication to every single line and idea.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#7B4E96]/15 hover:border-[#7B4E96] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between relative overflow-hidden transform hover:-translate-y-1"
            >
              {/* Corner decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#7B4E96]/5 rounded-bl-full group-hover:bg-[#7B4E96]/10 transition-colors pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#7B4E96]/20 flex items-center justify-center group-hover:bg-[#7B4E96] transition-colors duration-300">
                  {pillar.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#241A2B] font-['Cairo'] group-hover:text-[#7B4E96] transition-colors">
                    {isAr ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="text-sm text-[#52435D] leading-relaxed font-tajawal">
                    {isAr ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};