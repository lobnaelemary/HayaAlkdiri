import React from 'react';
import { Language } from '../types';
import { SERVICES } from '../data/portfolioData';
import { Scissors, Box, PenTool, Sparkles, CheckCircle2, ArrowLeft, ArrowRight, Tag } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  // دالة مخصصة لاختيار الأيقونة بدقة تعبيرية عالية لكل خدمة مع توحيد الهارموني اللوني والتفاعل
  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#7B4E96] group-hover:text-white transition-colors duration-300";
    switch (iconName) {
      case 'Layers': 
      case 'Scissors': 
        return <Scissors className={iconClass} />;
      case 'Box': 
        return <Box className={iconClass} />;
      case 'PenTool': 
        return <PenTool className={iconClass} />;
      case 'Sparkles': 
      default: 
        return <Sparkles className={iconClass} />;
    }
  };

  const isAr = lang === 'ar';

  return (
    <section id="services" className="py-28 bg-[#FAF7F2] relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Decorative background blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#7B4E96]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B4E96]/20 text-[#7B4E96] text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>{isAr ? 'الخدمات المتاحة' : 'Provided Services'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#241A2B] font-['Cairo'] leading-tight">
            {isAr ? 'حلول تصميم أزياء ومحاكاة 3D متكاملة' : 'Comprehensive Fashion Design & 3D Simulation'}
          </h2>
          
          <p className="text-base text-[#52435D]">
            {isAr ? 'نقدم حلول أزياء متخصصة من تفصيل المجموعات إلى مجسمات الـ 3D الافتراضية' : 'Offering specialized fashion solutions from collection prototyping to 3D garment visualizers'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-[#7B4E96]/15 hover:border-[#7B4E96] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#7B4E96]/5 rounded-bl-full group-hover:bg-[#7B4E96]/10 transition-colors pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                <div className="flex items-start justify-between">
                  {/* حاوية الأيقونة مع تفاعل هادئ وثابت عند الهوفر */}
                  <div className="p-4 bg-[#FAF7F2] group-hover:bg-[#7B4E96] rounded-2xl border border-[#7B4E96]/20 transition-colors duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1.5 rounded-full border border-[#C5A059]/20">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{isAr ? service.pricingAr : service.pricingEn}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#241A2B] font-['Cairo'] group-hover:text-[#7B4E96] transition-colors">
                    {isAr ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base text-[#52435D] leading-relaxed font-tajawal">
                    {isAr ? service.descAr : service.descEn}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-[#7B4E96] block uppercase tracking-wider">
                    {isAr ? 'المخرجات والتفاصيل الرئيسية:' : 'Key Deliverables:'}
                  </span>
                  {(isAr ? service.featuresAr : service.featuresEn).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#463750]">
                      <CheckCircle2 className="w-4 h-4 text-[#7B4E96] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-8 relative z-10">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#FAF7F2] hover:bg-[#7B4E96] text-[#583370] hover:text-white font-bold text-sm border border-[#7B4E96]/20 transition-all duration-300 shadow-xs"
                >
                  <span>{isAr ? 'اطلبي تسعيرة الخدمة' : 'Request Service Quote'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};