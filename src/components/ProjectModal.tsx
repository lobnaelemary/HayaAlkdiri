import React, { useState, useEffect } from 'react';
import { Language, Project } from '../types';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onOpenContactModal: (serviceId?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onOpenContactModal
}) => {
  if (!project) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const isAr = lang === 'ar';

  useEffect(() => {
    if (!isPlaying || !project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIdx((prevIdx) => (prevIdx + 1) % project.images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, project.images]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#19131D]/90 backdrop-blur-md animate-fadeIn overflow-y-auto" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-[2.5rem] max-w-4xl w-full overflow-hidden border border-[#7B4E96]/15 shadow-2xl relative flex flex-col">
        
        {/* Minimal Top Bar with Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/50 hover:bg-[#7B4E96] text-white backdrop-blur-md flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Image Stage */}
        <div 
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#19131D] flex items-center justify-center overflow-hidden group"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <img
            src={project.images[activeImageIdx].url}
            alt={project.images[activeImageIdx].captionAr}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain transition-all duration-700"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={() => {
                  setActiveImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
                  setIsPlaying(false);
                }}
                className="absolute left-4 p-3 rounded-full bg-white/80 hover:bg-white text-[#241A2B] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setActiveImageIdx((prev) => (prev + 1) % project.images.length);
                  setIsPlaying(false);
                }}
                className="absolute right-4 p-3 rounded-full bg-white/80 hover:bg-white text-[#241A2B] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Minimal Dots Indicator (بدون أرقام، ولون بنسفجي متناسق مع البراند) */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
              <div className="flex items-center gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImageIdx(idx);
                      setIsPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      activeImageIdx === idx ? 'bg-[#7B4E96] w-6 shadow-sm' : 'bg-white/40 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Minimal Footer: Simple Button Only */}
        <div className="p-6 sm:p-8 bg-white flex items-center justify-center border-t border-gray-100">
          <button
            onClick={() => {
              onClose();
              onOpenContactModal(project.id);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7B4E96] hover:bg-[#583370] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all group"
          >
            <span>{isAr ? 'اطلبي استشارة لهذا التصميم' : 'Request This Design'}</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isAr ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
};