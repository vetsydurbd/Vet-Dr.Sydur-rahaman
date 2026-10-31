import React from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { Language, ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  lang: Language;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  lang,
  onBookService
}) => {
  if (!service) return null;

  const title = lang === 'en' ? service.titleEn : service.titleBn;
  const fullDesc = lang === 'en' ? service.fullDescEn : service.fullDescBn;
  const keyPoints = lang === 'en' ? service.keyPointsEn : service.keyPointsBn;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image for service */}
        <div className="relative h-48 sm:h-56 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={service.imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 sm:left-8 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-600/90 text-white border border-teal-400/30">
              {service.badge || 'Veterinary Care'}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
              {title}
            </h3>
          </div>
        </div>

        {/* Full description */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
              {lang === 'en' ? 'Clinical Overview' : 'ক্লিনিক্যাল বিবরণ'}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {fullDesc}
            </p>
          </div>

          {/* Key points checklist */}
          <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-slate-800/60 border border-teal-100 dark:border-slate-800 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {lang === 'en' ? 'What This Service Covers' : 'এই সেবার অন্তর্ভুক্ত বিষয়সমূহ'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
            <a
              href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur,%20I%20want%20to%20inquire%20about%20your%20veterinary%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Questions</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookService(title);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'en' ? 'Book This Service' : 'এই সেবাটি বুক করুন'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
