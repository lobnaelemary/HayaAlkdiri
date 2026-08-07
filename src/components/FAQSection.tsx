import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS } from '../data/portfolioData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
  onOpenContactModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, onOpenContactModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const isAr = lang === 'ar';

  return (
    <section id="faq" className="py-24 bg-[#FAF7F2] relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7B4E96]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B4E96]/20 text-[#7B4E96] text-xs font-bold uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-4 h-4" />
            <span>{isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A2B] font-['Cairo']">
            {isAr ? 'كل ما تودين معرفته قبل البدء بمشروعك' : 'Everything You Need to Know Before Starting'}
          </h2>

          <p className="text-sm text-[#52435D]">
            {isAr ? 'إجابات واضحة وشفافة حول المواعيد، التعديلات، وآلية الطلب لتوفير وقتك' : 'Transparent answers on turnarounds, revisions, and ordering process'}
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                  isOpen ? 'border-[#7B4E96] shadow-md' : 'border-[#7B4E96]/15 hover:border-[#7B4E96]/40'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full px-6 py-5 flex items-center justify-between gap-4 transition-colors bg-white ${
                    isAr ? 'flex-row text-right' : 'flex-row text-left'
                  }`}
                >
                  <div className={`flex items-center gap-4 flex-1 ${isAr ? 'flex-row text-right' : 'flex-row text-left'}`}>
                    <div className="w-9 h-9 rounded-xl bg-[#7B4E96]/10 text-[#7B4E96] flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                      0{index + 1}
                    </div>
                    <h3 className="text-base font-bold text-[#241A2B] font-['Cairo'] leading-snug">
                      {isAr ? faq.questionAr : faq.questionEn}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'rotate-180 bg-[#7B4E96] text-white shadow-sm' 
                      : 'bg-[#FAF7F2] text-[#7B4E96] border border-[#7B4E96]/20'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 pt-3 bg-white border-t border-[#7B4E96]/10 animate-fadeIn ${isAr ? 'text-right' : 'text-left'}`}>
                    <p className="text-sm text-[#52435D] leading-relaxed">
                      {isAr ? faq.answerAr : faq.answerEn}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#7B4E96]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
          <div className={isAr ? 'sm:text-right' : 'sm:text-left'}>
            <h4 className="text-base font-bold text-[#241A2B] font-['Cairo']">
              {isAr ? 'لديكِ استفسار آخر لم يتم ذكره؟' : 'Have a custom question not listed?'}
            </h4>
            <p className="text-xs text-[#6E5B7B] mt-1">
              {isAr ? 'يسعدنا الرد على كافة استفساراتك بشكل فوري' : 'We are ready to answer your questions directly'}
            </p>
          </div>

          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#7B4E96] to-[#583370] text-white hover:from-[#6B3B87] hover:to-[#47265C] font-bold text-xs shadow-md hover:shadow-lg transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-[#E8D8C3]" />
            <span>{isAr ? 'تواصل معي الآن' : 'Ask Haya Directly'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};