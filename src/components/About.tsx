import React from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  HeartHandshake, 
  CheckCircle, 
  Stethoscope, 
  ShieldCheck, 
  Calendar,
  Phone,
  Mail
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Doctor Portrait & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Aesthetic background accent border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-600 to-emerald-500 rounded-3xl opacity-20 blur-xl dark:opacity-30" />
              
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                
                {/* Doctor Photo */}
                <div className="relative h-[420px] sm:h-[460px] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/assets/aistudio/5fe052be-8266-449c-96af-ed6a6c250b00_5e070be4.jfif"
                    alt="Dr. Sydur Rahaman, DVM, CVASU"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating seal */}
                  <div className="absolute top-4 right-4 bg-teal-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-teal-400/30">
                    <GraduationCap className="w-4 h-4" />
                    <span>DVM, CVASU</span>
                  </div>

                  {/* Doctor badge at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
                      Registered Veterinary Surgeon
                    </p>
                    <h3 className="text-xl font-bold">
                      Vet Dr. Sydur Rahaman
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5">
                      DVM — Chattogram Veterinary & Animal Sciences University (CVASU)
                    </p>
                  </div>
                </div>

                {/* Quick Info Bar below photo */}
                <div className="p-4 sm:p-5 bg-teal-50/60 dark:bg-teal-950/40 border-t border-slate-200 dark:border-slate-800/80 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span><strong>Chamber:</strong> Pallabi, Mirpur, Dhaka-1216</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span><strong>Direct Phone:</strong> <a href="tel:+8801787242197" className="text-teal-700 dark:text-teal-300 font-bold hover:underline">01787242197</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span><strong>Email:</strong> <a href="mailto:vetsydur.bd@gmail.com" className="text-teal-700 dark:text-teal-300 font-semibold hover:underline">vetsydur.bd@gmail.com</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-brands fa-linkedin text-blue-600 dark:text-blue-400 text-sm shrink-0"></i>
                    <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/drsydurrahaman" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 font-semibold hover:underline">/in/drsydurrahaman</a></span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Strengths */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                <HeartHandshake className="w-4 h-4" />
                <span>{t.about.kicker}</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.about.title}
              </h2>
              <p className="text-base font-semibold text-teal-700 dark:text-teal-300 mt-1">
                {t.about.titleSub} · <span className="font-normal text-slate-600 dark:text-slate-400">{t.about.institution}</span>
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
            </div>

            {/* Doctor's Quote Box */}
            <div className="relative p-5 rounded-2xl bg-teal-50 dark:bg-slate-900 border-l-4 border-teal-600 dark:border-teal-400 shadow-sm">
              <p className="italic text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                "{t.about.quote}"
              </p>
              <p className="mt-2 text-xs font-bold text-teal-800 dark:text-teal-400 text-right">
                — Dr. Sydur Rahaman, DVM (CVASU)
              </p>
            </div>

            {/* 4 Core Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {t.about.keyStrengths.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-normal pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Portal Clarification Note */}
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300">
              <p className="leading-relaxed">
                ℹ️ {t.about.currentRoleNotice}
              </p>
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'en' ? 'Book Consultation with Dr. Sydur' : 'ডা. সাইদুরের সাথে অ্যাপয়েন্টমেন্ট নিন'}</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-teal-500 rounded-xl transition-colors"
              >
                <span>{lang === 'en' ? 'Explore Surgical & Medical Services' : 'সকল সার্জারি ও সেবা দেখুন'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
