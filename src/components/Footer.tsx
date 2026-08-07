import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Logo } from './Logo';
import { ArrowUp, Phone, Mail, Instagram, Linkedin, MapPin } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#1D1625] text-white pt-20 pb-10 relative overflow-hidden border-t border-[#E8D8C3]/20" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7B4E96]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10 items-start">
          
          {/* 1. العمود الأول: الشعار والمحتوى الأساسي وأيقونة الإنستجرام */}
          <div className={`flex flex-col ${isAr ? 'items-start text-right' : 'items-start text-left'} space-y-4`}>
            <Logo size="lg" lightMode={true} />
            <p className="text-xs text-purple-200 leading-relaxed max-w-xs font-tajawal">
              "{isAr ? PERSONAL_INFO.uspAr : PERSONAL_INFO.uspEn}"
            </p>
            <p className="text-[11px] text-purple-300/70 font-medium font-tajawal">
              {isAr ? PERSONAL_INFO.diplomaAr : PERSONAL_INFO.diplomaEn}
            </p>

            {/* أيكون الإنستجرام تحت السطرين */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/ha.ya4047?igsh=ZDY4Y3k1ODF0Znoy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 border border-[#E8D8C3]/30 flex items-center justify-center hover:bg-[#7B4E96] hover:border-[#E8D8C3] transition-colors cursor-pointer text-[#E8D8C3]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. العمود الثاني: روابط سريعة */}
          <div className={`flex flex-col ${isAr ? 'items-start text-right' : 'items-start text-left'} space-y-4`}>
            <h4 className="text-sm font-bold text-[#E8D8C3] uppercase tracking-wider font-['Cairo']">
              {isAr ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200 font-tajawal">
              <li><a href="#home" className="hover:text-[#E8D8C3] transition-colors">{isAr ? 'الرئيسية' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-[#E8D8C3] transition-colors">{isAr ? 'عن هيا' : 'About Haya'}</a></li>
              <li><a href="#services" className="hover:text-[#E8D8C3] transition-colors">{isAr ? 'الخدمات والمهارات' : 'Services & Skills'}</a></li>
              <li><a href="#portfolio" className="hover:text-[#E8D8C3] transition-colors">{isAr ? 'معرض الأعمال' : 'Portfolio Showcase'}</a></li>
              <li><a href="#credentials" className="hover:text-[#E8D8C3] transition-colors">{isAr ? 'المؤهلات والشهادات' : 'Credentials'}</a></li>
              <li><a href="#contact" className="hover:text-[#E8D8C3] transition-colors">{isAr ? 'تواصل معي' : 'Contact Us'}</a></li>
            </ul>
          </div>

          {/* 3. العمود الثالث: معلومات التواصل */}
          <div className={`flex flex-col ${isAr ? 'items-start text-right' : 'items-start text-left'} space-y-4`}>
            <h4 className="text-sm font-bold text-[#E8D8C3] uppercase tracking-wider font-['Cairo']">
              {isAr ? 'تواصل معي مباشرة' : 'Get in touch'}
            </h4>
            
            <div className="space-y-3 text-xs text-purple-200 w-full font-tajawal">
              <a href={`https://wa.me/966${PERSONAL_INFO.phone.substring(1)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#E8D8C3] transition-colors group">
                <Phone className="w-4 h-4 text-[#E8D8C3] shrink-0" />
                <span dir="ltr" className="font-mono">{PERSONAL_INFO.formattedPhone}</span>
              </a>
              
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 hover:text-[#E8D8C3] transition-colors group">
                <Mail className="w-4 h-4 text-[#E8D8C3] shrink-0" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-3 text-purple-200">
                <MapPin className="w-4 h-4 text-[#E8D8C3] shrink-0" />
                <span>{isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300 font-tajawal">
          
          <div className="order-3 sm:order-1 text-center sm:text-start">
            <span>{isAr ? `© 2026 هيا القديري. جميع الحقوق محفوظة.` : `© 2026 Haya Alkdiri. All Rights Reserved.`}</span>
          </div>

          <div className="order-1 sm:order-2">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7B4E96] hover:border-[#E8D8C3] border border-white/15 text-[#E8D8C3] flex items-center justify-center transition-all shadow-md cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          <div className="order-2 sm:order-3">
            <span>
              {isAr ? 'تصميم وتنفيذ:' : 'Designed by'}{' '}
              <a
                href="https://www.linkedin.com/in/lobnaelemary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8D8C3] font-bold hover:underline"
              >
                LOBNA ELEMARY
              </a>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};