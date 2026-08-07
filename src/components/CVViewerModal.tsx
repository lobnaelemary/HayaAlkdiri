import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO, SKILLS, CERTIFICATIONS, PROJECTS } from '../data/portfolioData';
import { X, Download, Printer, CheckCircle2, Award, GraduationCap, Phone, Mail, Globe, MapPin, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface CVViewerModalProps {
  lang: Language;
  onClose: () => void;
}

export const CVViewerModal: React.FC<CVViewerModalProps> = ({ lang, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#19131D]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#7B4E96]/20 shadow-2xl relative text-right">
        
        {/* Modal Action Header */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F4EFF8] text-[#583370] text-xs font-bold transition-all border border-[#7B4E96]/20"
            >
              <Printer className="w-4 h-4 text-[#7B4E96]" />
              <span>{lang === 'ar' ? 'طباعة / حفظ PDF' : 'Print / Save PDF'}</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Haya Alkdiri CV Inquiry`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7B4E96] text-white text-xs font-bold transition-all shadow-xs"
            >
              <Download className="w-4 h-4 text-[#E8D8C3]" />
              <span>{lang === 'ar' ? 'تحميل مباشر' : 'Download CV'}</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#FAF7F2] hover:bg-[#7B4E96] text-[#583370] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Printable Paper Layout */}
        <div id="cv-paper" className="p-8 sm:p-12 space-y-10 bg-[#FAF7F2]">
          
          {/* Header Banner */}
          <div className="bg-white p-8 rounded-3xl border border-[#7B4E96]/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border-r-8 border-r-[#7B4E96]">
            
            <div className="space-y-2 text-right">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block">
                {lang === 'ar' ? 'السيرة الذاتية الرسمية (Curriculum Vitae)' : 'Official Curriculum Vitae'}
              </span>
              <h1 className="text-3xl font-black text-[#241A2B] font-['Amiri',serif]">
                {lang === 'ar' ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameEn}
              </h1>
              <p className="text-sm font-bold text-[#7B4E96]">
                {lang === 'ar' ? PERSONAL_INFO.titleAr : PERSONAL_INFO.titleEn}
              </p>
              <p className="text-xs text-[#6E5B7B]">
                {lang === 'ar' ? PERSONAL_INFO.diplomaAr : PERSONAL_INFO.diplomaEn}
              </p>
            </div>

            <Logo size="lg" />
          </div>

          {/* Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 rounded-2xl border border-gray-100 text-xs text-center sm:text-right">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-[#52435D]">
              <Phone className="w-4 h-4 text-[#7B4E96]" />
              <span className="font-mono dir-ltr">{PERSONAL_INFO.formattedPhone}</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start text-[#52435D]">
              <Mail className="w-4 h-4 text-[#7B4E96]" />
              <span className="font-mono">{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start text-[#52435D]">
              <MapPin className="w-4 h-4 text-[#7B4E96]" />
              <span>{lang === 'ar' ? PERSONAL_INFO.locationAr : PERSONAL_INFO.locationEn}</span>
            </div>
          </div>

          {/* Bio Summary */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2">
            <h2 className="text-sm font-bold text-[#7B4E96] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>{lang === 'ar' ? 'الملف الشخصي والهدف المهني:' : 'Professional Profile:'}</span>
            </h2>
            <p className="text-xs text-[#52435D] leading-relaxed">
              {lang === 'ar' ? PERSONAL_INFO.bioAr : PERSONAL_INFO.bioEn}
            </p>
          </div>

          {/* Academic Credentials */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
            <h2 className="text-sm font-bold text-[#7B4E96] uppercase tracking-wider flex items-center gap-2 border-b pb-2">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المؤهلات الأكاديمية والرئيسية:' : 'Academic Education:'}</span>
            </h2>

            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#241A2B]">
                    {lang === 'ar' ? PERSONAL_INFO.diplomaAr : PERSONAL_INFO.diplomaEn}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {lang === 'ar' ? 'تخصص تقنية الموضة وتصميم الأزياء والملابس' : 'Fashion Technology & Garment Creation'}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-md">
                  مؤهل رئيسي
                </span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
            <h2 className="text-sm font-bold text-[#7B4E96] uppercase tracking-wider flex items-center gap-2 border-b pb-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المهارات التقنية والبرمجية:' : 'Technical Skills & Software:'}</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="p-3 bg-[#FAF7F2] rounded-xl flex items-center gap-2 text-xs font-bold text-[#241A2B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7B4E96]" />
                  <span>{lang === 'ar' ? skill.nameAr : skill.nameEn}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certified Courses */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
            <h2 className="text-sm font-bold text-[#7B4E96] uppercase tracking-wider flex items-center gap-2 border-b pb-2">
              <Award className="w-4 h-4" />
              <span>{lang === 'ar' ? 'الشهادات المهنية والدورات التدريبية المعتمدة:' : 'Professional Certifications:'}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 bg-[#FAF7F2] rounded-xl text-xs space-y-1">
                  <span className="font-bold text-[#241A2B] block">
                    {lang === 'ar' ? cert.titleAr : cert.titleEn}
                  </span>
                  <span className="text-[10px] text-[#7B4E96] font-semibold">
                    {lang === 'ar' ? cert.categoryAr : cert.categoryEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects Summary */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
            <h2 className="text-sm font-bold text-[#7B4E96] uppercase tracking-wider flex items-center gap-2 border-b pb-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>{lang === 'ar' ? 'أبرز المشاريع والتصاميم المنجزة:' : 'Key Portfolio Projects:'}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 bg-[#FAF7F2] rounded-xl space-y-1">
                  <h4 className="text-xs font-bold text-[#241A2B]">
                    {lang === 'ar' ? proj.titleAr : proj.titleEn}
                  </h4>
                  <p className="text-[11px] text-[#6E5B7B] line-clamp-1">
                    {lang === 'ar' ? proj.subtitleAr : proj.subtitleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
