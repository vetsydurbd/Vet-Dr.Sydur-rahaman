import React, { useState } from 'react';
import { 
  Stethoscope, 
  Scissors, 
  Smile, 
  Activity, 
  Utensils, 
  Bug, 
  Feather, 
  HeartPulse, 
  ArrowRight, 
  Info,
  Calendar
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/veterinaryData';

interface ServicesProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ 
  lang, 
  onSelectService,
  onBookService 
}) => {
  const t = translations[lang];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'Scissors': return Scissors;
      case 'Smile': return Smile;
      case 'Activity': return Activity;
      case 'Utensils': return Utensils;
      case 'Bug': return Bug;
      case 'Feather': return Feather;
      case 'HeartPulse': return HeartPulse;
      default: return Stethoscope;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
            <span>{t.services.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.services.title}{' '}
            <span className="text-teal-600 dark:text-teal-400">
              {t.services.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Layout with Pet Vignette & Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Decorative Feature Card with pet picture & prompt */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800/80 dark:to-teal-950/40 p-6 border border-teal-100 dark:border-slate-800 shadow-md">
              
              <div className="relative rounded-2xl overflow-hidden h-64 mb-5 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=700&q=80"
                  alt="Healthy pets - golden retriever and kitten"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-base font-bold flex items-center gap-2">
                    <span className="text-emerald-300">🐾</span>
                    <span>{lang === 'en' ? 'Healthy Pets, Happy Families' : 'সুস্থ পোষ্য, আনন্দময় পরিবার'}</span>
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? 'Need a Custom Treatment Plan?' : 'বিশেষ কোনো চিকিৎসার প্রয়োজন?'}
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'Dr. Sydur Rahaman designs tailored medical plans for complex surgeries, orthopedic fractures, chronic kidney issues, and avian care.'
                  : 'জটিল সার্জারি, হাড় ভাঙা, দীর্ঘমেয়াদী কিডনি রোগ কিংবা পাখির সুনির্দিষ্ট চিকিৎসার জন্য সরাসরি আলোচনা করুন।'}
              </p>

              <div className="mt-5 space-y-2.5">
                <button
                  onClick={() => onBookService(lang === 'en' ? 'General Consultation' : 'সাধারণ পরামর্শ')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Book Clinical Visit' : 'ক্লিনিকে সিরিয়াল দিন'}</span>
                </button>

                <a
                  href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur,%20I%20have%20an%20inquiry%20about%20a%20veterinary%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-teal-800 dark:text-teal-200 bg-teal-100/70 dark:bg-teal-900/40 hover:bg-teal-200/80 transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-600"></i>
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Services Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {servicesData.map((service) => {
              const Icon = getServiceIcon(service.icon);
              const title = lang === 'en' ? service.titleEn : service.titleBn;
              const shortDesc = lang === 'en' ? service.shortDescEn : service.shortDescBn;

              return (
                <div
                  key={service.id}
                  className="group relative rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top row with icon & optional badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>

                      {service.badge && (
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>

                  {/* Actions: View Details modal & Quick Booking */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{t.services.viewDetails}</span>
                    </button>

                    <button
                      onClick={() => onBookService(title)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group-hover:translate-x-0.5"
                    >
                      <span>{lang === 'en' ? 'Book' : 'বুক করুন'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
