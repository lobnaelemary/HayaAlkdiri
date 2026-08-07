import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { PROJECTS } from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsServicesSection } from './components/SkillsServicesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CredentialsSection } from './components/CredentialsSection';
import { FAQSection } from './components/FAQSection';
import Contactsection from './components/Contactsection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenContactModal = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeProject = selectedProjectId
    ? PROJECTS.find(p => p.id === selectedProjectId) || null
    : null;

  return (
    <div className={`min-h-screen bg-[#FAF7F2] text-[#241A2B] font-['Tajawal','Cairo',sans-serif] ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      
      {/* Navbar */}
      <Navbar
        lang={lang}
        onLanguageToggle={toggleLanguage}
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          lang={lang}
          onOpenContactModal={() => handleOpenContactModal()}
        />

        <AboutSection
          lang={lang}
          onOpenCV={() => setIsCVModalOpen(true)}
        />
       
        <SkillsServicesSection lang={lang} />
        
        <ServicesSection lang={lang} onSelectService={(id) => handleOpenContactModal(id)} />

        <WorkflowSection lang={lang} />
        
        <WhyChooseUsSection lang={lang} />

        <PortfolioSection
          lang={lang}
          onOpenProjectModal={(id) => setSelectedProjectId(id)}
        />

        <CredentialsSection
          lang={lang}
          onOpenCV={() => setIsCVModalOpen(true)}
        />

        <FAQSection
          lang={lang}
          onOpenContactModal={() => handleOpenContactModal()}
        />



<Contactsection lang={lang} />
      
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        lang={lang}
        onClose={() => setSelectedProjectId(null)}
        onOpenContactModal={handleOpenContactModal}
      />

    </div>
  );
}