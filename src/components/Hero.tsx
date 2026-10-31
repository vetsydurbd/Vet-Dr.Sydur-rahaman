import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Syringe, 
  BookOpen, 
  Calendar, 
  PhoneCall, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Language, PetCategory } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onNavigateToSection: (sectionId: string, species?: PetCategory) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  lang, 
  onOpenBooking, 
  onNavigateToSection 
}) => {
  const t = translations[lang];

  const categoryChips: { id: PetCategory; icon: string; labelEn: string; labelBn: string }[] = [
    { id: 'dogs', icon: '🐶', labelEn: 'Dogs', labelBn: 'কুকুর' },
    { id: 'cats', icon: '🐱', labelEn: 'Cats', labelBn: 'বিড়াল' },
    { id: 'rabbits', icon: '🐰', labelEn: 'Rabbits', labelBn: 'খরগোশ' },
    { id: 'birds', icon: '🦜', labelEn: 'Birds', labelBn: 'পাখি' },
    { id: 'small_mammals', icon: '🐹', labelEn: 'Exotic Pets', labelBn: 'এক্সোটিক পেট' }
  ];

  const infoCards = [
    {
      icon: <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />,
      text: lang === 'en' ? 'Pallabi, Mirpur, Dhaka' : 'পল্লবী, মিরপুর, ঢাকা',
      badge: lang === 'en' ? 'Clinical Chamber' : 'চেম্বার'
    },
    {
      icon: <Syringe className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      text: lang === 'en' ? 'Preventive Care & Vaccination' : 'প্রতিরোধমূলক যত্ন ও ভ্যাকসিনেশন',
      badge: lang === 'en' ? 'Core Medicine' : 'সুরক্ষা'
    },
    {
      icon: <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />,
      text: lang === 'en' ? 'Weekly Pet Health Articles' : 'সাপ্তাহিক পেট হেলথ আর্টিক্যাল',
      badge: lang === 'en' ? 'Education' : 'শিক্ষা'
    }
  ];

  return (
    <section 
      id="home" 
      className="relative overflow-hidden min-h-[85vh] lg:min-h-[88vh] flex items-center bg-gradient-to-b from-teal-50/70 via-white to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/30 text-slate-900 dark:text-slate-100 pt-8 sm:pt-14 pb-16 sm:pb-24 transition-colors duration-300"
    >
      {/* Background: Soft teal-to-white gradient + subtle paw-print patterns with 5–8% opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft atmospheric gradient orbs (Apple / Stripe style) */}
        <div className="absolute -top-24 -right-16 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-teal-400/10 via-emerald-300/6 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-sky-400/8 via-cyan-300/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-teal-500/8 via-emerald-400/4 to-transparent blur-2xl" />

        {/* Subtle decorative background grid */}
        <div 
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Paw print pattern 1 (Top Left) - 5 to 8% opacity */}
        <svg 
          className="absolute left-8 top-16 w-24 h-24 text-teal-700/6 dark:text-teal-400/6 rotate-12 select-none"
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <ellipse cx="25" cy="30" rx="9" ry="14" />
          <ellipse cx="42" cy="18" rx="9" ry="14" />
          <ellipse cx="58" cy="18" rx="9" ry="14" />
          <ellipse cx="75" cy="30" rx="9" ry="14" />
          <path d="M 50 42 C 34 42 22 55 26 73 C 28 82 40 88 50 88 C 60 88 72 82 74 73 C 78 55 66 42 50 42 Z" />
        </svg>

        {/* Paw print pattern 2 (Center Left) - 6% opacity */}
        <svg 
          className="absolute left-1/3 top-2/3 w-28 h-28 text-teal-700/6 dark:text-teal-400/6 -rotate-25 select-none"
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <ellipse cx="25" cy="30" rx="9" ry="14" />
          <ellipse cx="42" cy="18" rx="9" ry="14" />
          <ellipse cx="58" cy="18" rx="9" ry="14" />
          <ellipse cx="75" cy="30" rx="9" ry="14" />
          <path d="M 50 42 C 34 42 22 55 26 73 C 28 82 40 88 50 88 C 60 88 72 82 74 73 C 78 55 66 42 50 42 Z" />
        </svg>

        {/* Paw print pattern 3 (Top Right) - 7% opacity */}
        <svg 
          className="absolute right-1/4 top-12 w-20 h-20 text-cyan-700/7 dark:text-cyan-400/7 rotate-45 select-none"
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <ellipse cx="25" cy="30" rx="9" ry="14" />
          <ellipse cx="42" cy="18" rx="9" ry="14" />
          <ellipse cx="58" cy="18" rx="9" ry="14" />
          <ellipse cx="75" cy="30" rx="9" ry="14" />
          <path d="M 50 42 C 34 42 22 55 26 73 C 28 82 40 88 50 88 C 60 88 72 82 74 73 C 78 55 66 42 50 42 Z" />
        </svg>

        {/* Paw print pattern 4 (Bottom Right) - 6% opacity */}
        <svg 
          className="absolute right-12 bottom-12 w-32 h-32 text-teal-700/6 dark:text-teal-400/6 -rotate-12 select-none"
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <ellipse cx="25" cy="30" rx="9" ry="14" />
          <ellipse cx="42" cy="18" rx="9" ry="14" />
          <ellipse cx="58" cy="18" rx="9" ry="14" />
          <ellipse cx="75" cy="30" rx="9" ry="14" />
          <path d="M 50 42 C 34 42 22 55 26 73 C 28 82 40 88 50 88 C 60 88 72 82 74 73 C 78 55 66 42 50 42 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT SIDE CONTENT ================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Top Badge: 🐾 Trusted Companion Animal Veterinarian */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50/90 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800/80 text-teal-900 dark:text-teal-200 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-md">
              <span className="text-base">🐾</span>
              <span className="tracking-tight">
                {lang === 'en' ? 'Trusted Companion Animal Veterinarian' : 'বিশ্বস্ত পোষা প্রাণীর ভেটেরিনারি চিকিৎসক'}
              </span>
            </div>

            {/* Headline: Vet Dr. Sydur Rahaman with upscale DVM badge just before (CVASU) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.18] flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span>{lang === 'en' ? 'Vet Dr. Sydur Rahaman' : 'ভেট ডা. সাইদুর রাহমান'}</span>
                <span className="inline-flex items-center gap-1.5 align-middle">
                  <span className="text-xs sm:text-sm font-black tracking-wider uppercase px-2.5 py-0.5 sm:py-1 rounded-xl bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 text-white shadow-sm shadow-teal-700/25 border border-teal-400/40">
                    {lang === 'en' ? 'DVM' : 'ডিভিএম (DVM)'}
                  </span>
                  <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl lg:text-4xl">
                    {lang === 'en' ? '(CVASU)' : '(সিভাসু)'}
                  </span>
                </span>
              </h1>

              {/* Subheadline: Veterinary Surgeon | Companion Animal Medicine | Pet Health Educator */}
              <p className="text-sm sm:text-base font-semibold text-teal-700 dark:text-teal-300 tracking-wide">
                {lang === 'en' 
                  ? 'Veterinary Surgeon | Companion Animal Medicine | Pet Health Educator'
                  : 'ভেটেরিনারি সার্জন | কম্প্যানিয়ন অ্যানিম্যাল মেডিসিন | পেট হেলথ এডুকেটর'}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
              {lang === 'en'
                ? 'Providing evidence-based veterinary consultation, surgery, preventive healthcare, vaccination, and trusted pet health education for dogs, cats, rabbits, birds, and other companion animals across Bangladesh.'
                : 'বাংলাদেশজুড়ে কুকুর, বিড়াল, খরগোশ, পাখি ও অন্যান্য পোষা প্রাণীর বৈজ্ঞানিক ভেটেরিনারি পরামর্শ, সফল সার্জারি, প্রতিরোধমূলক চিকিৎসাসেবা, টিকাদান ও নির্ভরযোগ্য স্বাস্থ্য শিক্ষা প্রদান।'}
            </p>

            {/* Action Buttons: Primary, Secondary & Mobile/WhatsApp Number & LinkedIn */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Primary Button: Book Appointment */}
                <button
                  onClick={onOpenBooking}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 shadow-md shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <Calendar className="w-4 h-4 text-teal-200 group-hover:scale-110 transition-transform" />
                  <span>{lang === 'en' ? 'Book Appointment' : 'অ্যাপয়েন্টমেন্ট বুক করুন'}</span>
                  <ArrowRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Button: Explore Pet Health Articles */}
                <button
                  onClick={() => onNavigateToSection('blog')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 bg-white/95 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-md"
                >
                  <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{lang === 'en' ? 'Explore Pet Health Articles' : 'পেট হেলথ আর্টিকেল দেখুন'}</span>
                </button>
              </div>

              {/* Direct WhatsApp / Mobile Number Badge (+8801787242197) and LinkedIn Profile */}
              <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {lang === 'en' ? 'Connect Directly:' : 'সরাসরি যোগাযোগ:'}
                </span>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur%20Rahaman,%20I%20would%20like%20to%20consult%20about%20my%20pet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/80 transition-colors shadow-xs"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-600 dark:text-emerald-400 text-sm"></i>
                  <span>WhatsApp</span>
                </a>

                {/* Phone Call */}
                <a
                  href="tel:+8801787242197"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-300/60 dark:border-teal-700/60 text-teal-900 dark:text-teal-200 font-bold hover:bg-teal-100 dark:hover:bg-teal-900/80 transition-colors shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>+880 1787-242197</span>
                </a>

                {/* LinkedIn Profile */}
                <a
                  href="https://www.linkedin.com/in/drsydurrahaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-300/60 dark:border-blue-700/60 text-blue-800 dark:text-blue-300 font-bold hover:bg-blue-100 dark:hover:bg-blue-900/80 transition-colors shadow-xs"
                  title="Dr. Sydur Rahaman LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin text-blue-600 dark:text-blue-400 text-sm"></i>
                  <span>/in/drsydurrahaman</span>
                </a>
              </div>
            </div>

            {/* Rounded Category Chips: 🐶 Dogs, 🐱 Cats, 🐰 Rabbits, 🦜 Birds, 🐹 Exotic Pets */}
            <div className="space-y-2 pt-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {categoryChips.map((chip) => {
                  const label = lang === 'en' ? chip.labelEn : chip.labelBn;
                  return (
                    <button
                      key={chip.id}
                      onClick={() => onNavigateToSection('library', chip.id)}
                      className="group flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/95 dark:bg-slate-900/85 hover:bg-teal-50 dark:hover:bg-teal-950/70 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 border border-slate-200/90 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 shadow-xs hover:shadow-sm transition-all duration-200 active:scale-95"
                    >
                      <span className="text-base group-hover:scale-110 transition-transform">
                        {chip.icon}
                      </span>
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Below that display three small information cards:
                📍 Pallabi, Mirpur, Dhaka
                💉 Preventive Care & Vaccination
                📖 Weekly Pet Health Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              {infoCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/85 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xs backdrop-blur-md hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate leading-snug">
                      {card.text}
                    </p>
                    <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium">
                      {card.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ================= RIGHT SIDE: UPLOADED BANNER GRAPHIC ================= */}
          {/* Use uploaded banner as the hero image on the right side (desktop) and centered on mobile.
              Rounded corners (24px / rounded-3xl), soft shadow, subtle floating animation.
              High quality without cropping Dr. Sydur Rahaman's face or the animals. */}
          <div className="lg:col-span-6 flex justify-center items-center">
            
            <div className="relative w-full max-w-xl lg:max-w-none">
              
              {/* Soft ambient gradient halo behind the banner */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-cyan-400/15 to-emerald-400/20 rounded-[28px] blur-2xl opacity-70 dark:opacity-40 pointer-events-none" />

              {/* Floating banner card wrapper */}
              <div className="relative rounded-[24px] overflow-hidden border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-2xl shadow-teal-900/10 dark:shadow-teal-950/40 animate-hero-floating transition-all duration-300 group">
                
                {/* Banner Image Display: Uncropped, crisp, full width with natural aspect ratio */}
                <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
                  <img
                    src="/assets/aistudio/file_0000000026ac8211803259565182993d_24303d56.png"
                    alt="Dr. Sydur Rahaman, DVM (CVASU) - Pet & Companion Animal Veterinarian with dog, rabbit, cat, and bird"
                    className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="eager"
                  />
                </div>

                {/* Subtle frosted glass bottom bar adding Apple-like micro-details */}
                <div className="px-4 py-3 bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {lang === 'en' ? 'Appointments Open' : 'সিরিয়াল চলমান'}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <span className="text-[11px] text-teal-700 dark:text-teal-400">
                      Mirpur, Dhaka
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/drsydurrahaman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 text-xs transition-colors"
                      title="Dr. Sydur Rahaman LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-sm"></i>
                      <span>/in/drsydurrahaman</span>
                    </a>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
                    <a
                      href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur%20Rahaman,%20I%20would%20like%20to%20consult%20about%20my%20pet."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 text-xs"
                    >
                      <i className="fa-brands fa-whatsapp text-sm"></i>
                      <span>+880 1787-242197</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
