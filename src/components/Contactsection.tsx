import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export default function Contactsection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const isAr = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(
      isAr 
        ? `طلب استشارة وتصميم جديد من: ${formData.name}` 
        : `New Design & Consultation Request from: ${formData.name}`
    );
    const body = encodeURIComponent(
      isAr 
        ? `الاسم: ${formData.name}\nرقم الجوال / الواتساب: ${formData.phone}\nالبريد الإلكتروني: ${formData.email}\n\nتفاصيل المشروع والإلهام:\n${formData.message}`
        : `Name: ${formData.name}\nPhone / WhatsApp: ${formData.phone}\nEmail: ${formData.email}\n\nProject Details & Inspiration:\n${formData.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#7B4E96]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7B4E96] bg-[#7B4E96]/10 px-4 py-1.5 rounded-full">
            {isAr ? 'ابدئي الآن' : 'Start Your Journey'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A2B] font-['Cairo']">
            {isAr ? 'دعنا نحول فكرتك إلى واقع أنيق' : 'Let’s Turn Your Vision Into Reality'}
          </h2>
          <p className="text-sm text-[#52435D]">
            {isAr 
              ? 'شاركينا تفاصيل قطعتك القادمة، وسنرافقكِ من الفكرة الأولى حتى خروجها بأعلى معايير الإتقان.' 
              : 'Share your upcoming piece details, and let’s craft it with meticulous attention to detail.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#7B4E96]/15 shadow-xl relative">
            
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#7B4E96]/10 text-[#7B4E96] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#241A2B]">
                  {isAr ? 'وصلتنا رسالتك بكل شغف!' : 'Message Received with Passion!'}
                </h3>
                <p className="text-sm text-[#52435D] max-w-md mx-auto">
                  {isAr 
                    ? 'تم فتح تطبيق البريد بمعلوماتها لتصلنا مباشرة. سنراجع تفاصيلك ونعود إليكِ قريباً.' 
                    : 'Your email app has been opened with all details. We will review your vision and get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`text-xs font-bold text-[#241A2B] block ${isAr ? 'text-right' : 'text-left'}`}>
                      {isAr ? 'الاسم الكريم *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder={isAr ? 'مثال: هيا العتيبي' : 'e.g., Haya Al-Otaibi'}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#7B4E96]/20 text-[#241A2B] text-sm focus:outline-none focus:border-[#7B4E96] transition-colors ${isAr ? 'text-right' : 'text-left'}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-bold text-[#241A2B] block ${isAr ? 'text-right' : 'text-left'}`}>
                      {isAr ? 'رقم الجوال (واتساب) *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="05XXXXXXXX"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#7B4E96]/20 text-[#241A2B] text-sm focus:outline-none focus:border-[#7B4E96] transition-colors dir-ltr ${isAr ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-bold text-[#241A2B] block ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#7B4E96]/20 text-[#241A2B] text-sm focus:outline-none focus:border-[#7B4E96] transition-colors dir-ltr ${isAr ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-bold text-[#241A2B] block ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'ملخص فكرتك أو إلهامك التصميمي *' : 'Project Vision & Inspiration *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={isAr ? 'أخبريني عن المناسبة، الطابع العام، أو الألوان التي تتخيلينها...' : 'Tell us about the occasion, mood, or colors you envision...'}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#7B4E96]/20 text-[#241A2B] text-sm focus:outline-none focus:border-[#7B4E96] transition-colors resize-none ${isAr ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7B4E96] to-[#583370] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:from-[#6B3B87] hover:to-[#47265C] transition-all flex items-center justify-center gap-2"
                >
                  <span>
                    {isAr ? 'ابدئي رحلة تصميم قطعتك' : 'Start Your Design Journey'}
                  </span>
                </button>

              </form>
            )}

          </div>

          {/* Direct Info Sidebar (تم تعديل ترتيب الأيقونات لتكون يميناً في العربي ويساراً في الإنجليزي) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#7B4E96]/15 shadow-xl space-y-6">
              <h3 className={`text-base font-bold text-[#241A2B] pb-3 border-b border-[#7B4E96]/15 font-['Cairo'] ${isAr ? 'text-right' : 'text-left'}`}>
                {isAr ? 'قنوات التواصل المباشر' : 'Direct Channels'}
              </h3>

              <a
                href={`https://wa.me/966${PERSONAL_INFO.phone.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-4 rounded-2xl bg-[#FAF7F2] hover:bg-[#F4EFF8] border border-[#7B4E96]/10 transition-all group gap-4 ${isAr ? 'flex-row text-right' : 'flex-row text-left'}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#7B4E96]/10 text-[#7B4E96] flex items-center justify-center group-hover:bg-[#7B4E96] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className={`text-[11px] text-gray-500 block ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'الواتساب والجوال' : 'WhatsApp & Phone'}
                  </span>
                  <span className={`text-sm font-bold text-[#241A2B] font-mono block ${isAr ? 'text-right' : 'text-left'}`} dir="ltr">
                    {PERSONAL_INFO.formattedPhone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`flex items-center p-4 rounded-2xl bg-[#FAF7F2] hover:bg-[#F4EFF8] border border-[#7B4E96]/10 transition-all group gap-4 ${isAr ? 'flex-row text-right' : 'flex-row text-left'}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#7B4E96]/10 text-[#7B4E96] flex items-center justify-center group-hover:bg-[#7B4E96] group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className={`text-[11px] text-gray-500 block ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </span>
                  <span className={`text-xs font-bold text-[#241A2B] font-mono block ${isAr ? 'text-right' : 'text-left'}`}>
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <div className={`flex items-center p-4 rounded-2xl bg-[#7B4E96]/5 border border-[#7B4E96]/15 gap-4 ${isAr ? 'flex-row text-right' : 'flex-row text-left'}`}>
                <div className="w-10 h-10 rounded-xl bg-[#7B4E96]/10 text-[#7B4E96] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className={`text-xs font-bold text-[#241A2B] ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'جدول المتابعة:' : 'Response Commitment:'}
                  </h4>
                  <p className={`text-[11px] text-[#52435D] ${isAr ? 'text-right' : 'text-left'}`}>
                    {isAr ? 'نحرص على الرد ودراسة طلبك خلال أقل من 24 ساعة.' : 'We review and reply to all inquiries within 24 hours.'}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}