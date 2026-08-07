import React from 'react';
import { Language } from '../types';
import { GraduationCap, Award, Sparkles, Download, FileText } from 'lucide-react';

interface CredentialsSectionProps {
  lang: Language;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const courses = [
    { titleAr: "تصميم أزياء 3D", titleEn: "3D Fashion Design" },
    { titleAr: "أفضل الممارسات لاشتراك المطورين", titleEn: "Best Practices for Developers" },
    { titleAr: "إدارة المشتريات وأصحاب مصلحة المشروع", titleEn: "Procurement & Stakeholder Management" },
    { titleAr: "العقلية الريادية وإدارة الأزمات", titleEn: "Entrepreneurial Mindset & Crisis Management" },
    { titleAr: "إعداد العروض التقديمية", titleEn: "Professional Presentation Design" },
    { titleAr: "إعداد السيرة الذاتية", titleEn: "CV & Career Branding" },
    { titleAr: "اجتياز المقابلات الشخصية", titleEn: "Mastering Personal Interviews" },
    { titleAr: "المستقبل المهني بين القلق والتخطيط", titleEn: "Career Future & Strategic Planning" },
    { titleAr: "بناء العلاقات المهنية", titleEn: "Professional Networking" }
  ];

  return (
    <section id="credentials" className="py-28 bg-[#FAF7F2] relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7B4E96]/20 text-[#7B4E96] text-xs font-bold uppercase tracking-widest shadow-2xs">
            <span>{isAr ? 'التعليم والاعتمادات المهنية' : 'Education & Credentials'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#241A2B] font-['Cairo'] tracking-tight leading-tight">
            {isAr ? 'أساس أكاديمي وتطوير مستمر لا يتوقف' : 'Academic Foundation & Continuous Growth'}
          </h2>
          
          <p className="text-base text-[#52435D] max-w-xl mx-auto font-tajawal">
            {isAr 
              ? 'رحلة تعلم بين الأكاديمية الرسمية والدورات التخصصية المتقدمة في عالم الموضة والريادة.' 
              : 'A continuous learning journey combining formal education and advanced specialized courses.'}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] border border-[#7B4E96]/15 shadow-sm p-8 sm:p-12 space-y-12">
          
          {/* Top: Education Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#7B4E96]/20 flex items-center justify-center text-[#7B4E96] shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full font-mono">
                  2023 - 2026
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#241A2B] font-['Cairo']">
                  {isAr ? 'دبلوم تقنية الموضة وتصميم الأزياء' : 'Fashion Tech & Design Diploma'}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#7B4E96] font-tajawal">
                  {isAr ? 'المؤسسة العامة للتدريب التقني والمهني' : 'TVTC'}
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-[#7B4E96] bg-[#FAF7F2] px-4 py-2 rounded-xl border border-[#7B4E96]/15 inline-block font-['Cairo']">
                {isAr ? 'شهادة أكاديمية معتمدة' : 'Accredited Degree'}
              </span>
            </div>
          </div>

          {/* Middle: Courses Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <h4 className="text-sm font-bold text-[#241A2B] uppercase tracking-wider font-['Cairo']">
                {isAr ? 'الدورات التخصصية المعتمدة' : 'Specialized Courses'}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {courses.map((course, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF7F2]/60 border border-[#7B4E96]/10 hover:border-[#7B4E96]/30 transition-all flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#7B4E96] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#241A2B] font-tajawal leading-snug">
                    {isAr ? course.titleAr : course.titleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom inside the card: CV Download Button (باللون الطبيعي الخاص بالبراند مثل باقي أزرار الموقع) */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-end">
            <a
              href="assets/cv/haya-cv.pdf"
              download="haya-cv.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#7B4E96] hover:bg-[#583370] text-white font-bold text-xs sm:text-sm shadow-md transition-all group"
            >
              <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FileText className="w-4 h-4 text-[#C5A059]" />
              </div>
              <span className="font-['Cairo']">{isAr ? 'تحميل السيرة الذاتية (CV)' : 'Download CV'}</span>
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};