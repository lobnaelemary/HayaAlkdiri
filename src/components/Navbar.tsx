import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { Menu, X, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onLanguageToggle: () => void;
  onOpenCV: () => void;
  onOpenContactModal: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageToggle,
  onOpenContactModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'services', 'process', 'portfolio', 'credentials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sec}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '#about', labelAr: 'عن هيا', labelEn: 'About' },
    { href: '#services', labelAr: 'الخدمات', labelEn: 'Services' },
    { href: '#process', labelAr: 'رحلة التصميم', labelEn: 'Process' },
    { href: '#portfolio', labelAr: 'المشاريع', labelEn: 'Portfolio' },
    { href: '#credentials', labelAr: 'الشهادات', labelEn: 'Credentials' },
    { href: '#faq', labelAr: 'الأسئلة', labelEn: 'FAQ' },
    { href: '#contact', labelAr: 'تواصل معي', labelEn: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#7B4E96]/10 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#home" className="focus:outline-none rounded-lg shrink-0">
            <Logo size="md" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 px-4 py-2 rounded-full border border-[#7B4E96]/15 shadow-xs backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold transition-all px-3 py-1.5 rounded-full whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-[#7B4E96] shadow-sm'
                      : 'text-[#3D2C48] hover:text-[#7B4E96] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {lang === 'ar' ? link.labelAr : link.labelEn}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onLanguageToggle}
              className="flex items-center justify-center text-xs font-bold text-[#583370] bg-[#F4EFF8] hover:bg-[#EBE2F3] px-3.5 py-2 rounded-full border border-[#7B4E96]/20 transition-all"
            >
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <button
              onClick={() => onOpenContactModal()}
              className="flex items-center justify-center text-xs font-bold text-white bg-gradient-to-r from-[#7B4E96] to-[#583370] hover:from-[#6B3B87] hover:to-[#47265C] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              <span>{lang === 'ar' ? 'ابدئي تصميمك الآن' : 'Start Your Project'}</span>
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onLanguageToggle}
              className="px-3 py-1.5 text-xs font-bold text-[#583370] bg-[#F4EFF8] rounded-full border border-[#7B4E96]/20"
            >
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#583370] hover:text-[#7B4E96] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[75px] bg-[#FAF7F2]/95 backdrop-blur-xl z-40 flex flex-col justify-between p-6 border-t border-[#7B4E96]/15 animate-fadeIn text-right">
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[60vh]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-between ${
                  activeSection === link.href ? 'bg-[#7B4E96] text-white' : 'text-[#241A2B] hover:bg-[#F4EFF8]'
                }`}
              >
                <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                <span className="text-xs font-light">←</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-[#7B4E96] to-[#583370] text-white font-bold text-sm shadow-md"
            >
              <span>{lang === 'ar' ? 'ابدئي تصميمك الآن' : 'Start Your Project'}</span>
            </button>
            
            <a
              href={`https://wa.me/966${PERSONAL_INFO.phone.substring(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 font-bold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>واتساب: {PERSONAL_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};