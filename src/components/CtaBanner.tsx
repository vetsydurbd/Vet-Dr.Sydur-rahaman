import React from 'react';
import { Calendar, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CtaBannerProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-white p-8 sm:p-12 shadow-2xl border border-teal-500/30">
        
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Easy & Convenient Care' : 'সহজ ও নির্ভরযোগ্য চিকিৎসা'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              {lang === 'en' ? (
                <>
                  Book a Veterinary Consultation <span className="text-emerald-300">Today</span>
                </>
              ) : (
                <>
                  আজই আপনার পোষ্যের জন্য <span className="text-emerald-300">সিরিয়াল নিশ্চিত করুন</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'Your companion’s comfort, recovery, and long-term health is our greatest priority. Schedule an in-person clinic visit in Mirpur, Dhaka, or reach out for prompt triage advice.'
                : 'আপনার প্রিয় পোষা প্রাণীর সুস্থতা ও দ্রুত আরোগ্য নিশ্চিত করতে মিরপুর পল্লবীতে ক্লিনিকে ডাক্তার দেখান অথবা জরুরি পরামর্শের জন্য যোগাযোগ করুন।'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-teal-950 bg-gradient-to-r from-emerald-300 to-teal-200 hover:from-white hover:to-emerald-200 rounded-xl shadow-lg active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 text-teal-900" />
                <span>{lang === 'en' ? 'Book Appointment' : 'অ্যাপয়েন্টমেন্ট বুক করুন'}</span>
                <ArrowRight className="w-4 h-4 text-teal-900" />
              </button>

              <a
                href="tel:+8801787242197"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-teal-800/80 hover:bg-teal-700/80 border border-teal-400/40 rounded-xl transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-300" />
                <span>{lang === 'en' ? 'Call 01787242197' : 'কল করুন: ০১৭৮৭২৪২১৯৭'}</span>
              </a>
            </div>
          </div>

          {/* Right pet image highlight */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="relative w-64 h-64 rounded-3xl overflow-hidden border-2 border-teal-400/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
                alt="Happy puppy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white bg-teal-900/80 px-2.5 py-1 rounded-lg border border-teal-400/30">
                  🐾 Compassionate Care
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
