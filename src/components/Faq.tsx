import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { faqsData } from '../data/veterinaryData';

interface FaqProps {
  lang: Language;
}

export const Faq: React.FC<FaqProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);
  const t = translations[lang];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.faq.title}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            const question = lang === 'en' ? faq.questionEn : faq.questionBn;
            const answer = lang === 'en' ? faq.answerEn : faq.answerBn;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-teal-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/80">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50 dark:bg-slate-800/80 border border-teal-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {lang === 'en' ? 'Still have a specific question about your pet?' : 'আপনার পোষ্য নিয়ে অন্য কোনো প্রশ্ন আছে?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              {lang === 'en'
                ? 'Send a direct message to Dr. Sydur Rahaman on WhatsApp for quick guidance.'
                : 'হোয়াটসঅ্যাপে সরাসরি মেসেজ পাঠিয়ে ডা. সাইদুরের সাথে কথা বলুন।'}
            </p>
          </div>

          <a
            href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur%20Rahaman,%20I%20have%20a%20question%20regarding%20my%20pet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all shrink-0"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>{lang === 'en' ? 'Ask on WhatsApp' : 'হোয়াটসঅ্যাপে জিজ্ঞেস করুন'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
