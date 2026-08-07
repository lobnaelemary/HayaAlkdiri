import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { WORKFLOW_STEPS } from '../data/portfolioData';

interface WorkflowSectionProps {
  lang: Language;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('process');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        if (scrollProgress < 0.25) setActiveStep(1);
        else if (scrollProgress < 0.5) setActiveStep(2);
        else if (scrollProgress < 0.75) setActiveStep(3);
        else setActiveStep(4);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getStepImage = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-[#7B4E96]/20 group">
            <img 
              src="public/assets/img/1.jpg" 
              alt="Fashion Sketching & Concept" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1625]/20 via-transparent to-transparent" />
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-[#7B4E96]/20 group">
            <img 
              src="public/assets/img/2.jpg" 
              alt="3D Simulation & Patterns" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1625]/20 via-transparent to-transparent" />
          </div>
        );
      case 3:
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-[#7B4E96]/20 group">
            <img 
              src="public/assets/img/3.jpg" 
              alt="Fitting & Revisions" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1625]/20 via-transparent to-transparent" />
          </div>
        );
      case 4:
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-[#7B4E96]/20 group">
            <img 
              src="public/assets/img/4.jpg" 
              alt="Final Delivery" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1625]/20 via-transparent to-transparent" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-32 bg-[#FAF7F2] relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7B4E96]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B4E96]/20 text-[#7B4E96] text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>{isAr ? 'رحلة تصميم قطعتك الخاصة' : 'How We Work / Process'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#241A2B] font-['Cairo'] leading-tight">
            {isAr ? 'منهجية واضحة تضمن راحتك وثقتك التامة' : 'Transparent Workflow Ensuring Peace of Mind & Trust'}
          </h2>
          
          <p className="text-sm sm:text-base text-[#52435D]">
            {isAr ? 'تابعي الخطوات بالأسفل لتري كيف تتحول فكرتك إلى واقع عبر خطوات مدروسة' : 'Follow the path below to see how your concept transforms into reality'}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-1 bg-[#7B4E96]/15 rounded-full z-0">
            <div 
              className="w-full bg-gradient-to-b from-[#7B4E96] to-[#C5A059] transition-all duration-300 rounded-full relative"
              style={{ height: `${((activeStep - 1) / 3) * 100}%` }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#C5A059] rounded-full shadow-[0_0_15px_#C5A059] border-2 border-white animate-pulse" />
            </div>
          </div>

          <div className="space-y-24 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => {
              const isActive = activeStep === step.step;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-500 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.98]'}`}
                >
                  <div className="w-full lg:w-1/2">
                    {getStepImage(step.step)}
                  </div>

                  <div className="w-full lg:w-1/2 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] font-mono block">
                      {isAr ? `المرحلة 0${step.step}` : `Phase 0${step.step}`}
                    </span>

                    <h3 className={`text-2xl sm:text-3xl font-bold font-['Cairo'] text-[#241A2B] ${isAr ? 'text-right' : 'text-left'}`}>
                      {isAr ? step.titleAr : step.titleEn}
                    </h3>

                    <p className={`text-sm sm:text-base text-[#52435D] leading-relaxed ${isAr ? 'text-right' : 'text-left'}`}>
                      {isAr ? step.descAr : step.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
