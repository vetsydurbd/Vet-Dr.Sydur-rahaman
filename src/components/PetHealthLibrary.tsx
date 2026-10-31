import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Syringe, 
  Utensils, 
  CheckCircle2, 
  Download, 
  Printer, 
  BookOpen,
  AlertTriangle
} from 'lucide-react';
import { Language, PetCategory, PetGuideItem } from '../types';
import { translations } from '../data/translations';
import { petGuidesData } from '../data/veterinaryData';

interface PetHealthLibraryProps {
  lang: Language;
  onOpenBooking: () => void;
  activeSpecies?: PetCategory;
  onSelectSpecies?: (species: PetCategory) => void;
}

export const PetHealthLibrary: React.FC<PetHealthLibraryProps> = ({ 
  lang, 
  onOpenBooking,
  activeSpecies: controlledSpecies,
  onSelectSpecies
}) => {
  const [internalSpecies, setInternalSpecies] = useState<PetCategory>('dogs');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const t = translations[lang];

  const activeSpecies = controlledSpecies !== undefined ? controlledSpecies : internalSpecies;
  const setActiveSpecies = onSelectSpecies || setInternalSpecies;

  const currentGuide = petGuidesData.find(g => g.species === activeSpecies) || petGuidesData[0];

  const speciesList: { id: PetCategory; label: string; icon: string }[] = [
    { id: 'dogs', label: t.library.speciesTabs.dogs, icon: '🐶' },
    { id: 'cats', label: t.library.speciesTabs.cats, icon: '🐱' },
    { id: 'birds', label: t.library.speciesTabs.birds, icon: '🦜' },
    { id: 'rabbits', label: t.library.speciesTabs.rabbits, icon: '🐰' },
    { id: 'small_mammals', label: t.library.speciesTabs.small_mammals, icon: '🐹' }
  ];

  const handlePrintOrDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
    window.print();
  };

  return (
    <section id="library" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.library.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.library.title}{' '}
            <span className="text-teal-600 dark:text-teal-400">
              {t.library.titleHighlight}
            </span>
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.library.subtitle}
          </p>
        </div>

        {/* Interactive Species Selector Tabs (Segmented control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {speciesList.map((item) => {
            const isActive = activeSpecies === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSpecies(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-teal-400'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Guide Content Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Header Banner of Guide */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-800 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                {lang === 'en' ? 'Clinical Veterinary Protocol' : 'ক্লিনিক্যাল ভেটেরিনারি প্রোটোকল'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {lang === 'en' ? currentGuide.titleEn : currentGuide.titleBn}
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                {lang === 'en' ? currentGuide.summaryEn : currentGuide.summaryBn}
              </p>
            </div>

            {/* Quick action button to save or print guide */}
            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={handlePrintOrDownload}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/15 hover:bg-white/25 border border-white/20 text-white backdrop-blur-sm transition-all"
                title="Print or Save PDF"
              >
                <Printer className="w-4 h-4" />
                <span>{downloadSuccess ? (lang === 'en' ? 'Printed!' : 'প্রিন্ট সম্পন্ন!') : t.library.downloadChecklist}</span>
              </button>
            </div>
          </div>

          {/* 3 Core Blocks Grid: Vaccines, Diets, Red Flags */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Vaccines Schedule */}
            <div className="p-5 rounded-2xl bg-teal-50/60 dark:bg-slate-800/50 border border-teal-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-teal-800 dark:text-teal-300">
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                  <Syringe className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {t.library.vaccineTitle}
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {(lang === 'en' ? currentGuide.vaccinesEn : currentGuide.vaccinesBn).map((vaccine, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>{vaccine}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Diets & Nutrition */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-slate-800/50 border border-emerald-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-800 dark:text-emerald-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {t.library.dietTitle}
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {(lang === 'en' ? currentGuide.dietTipsEn : currentGuide.dietTipsBn).map((diet, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{diet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Red Flag Warnings */}
            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 space-y-4">
              <div className="flex items-center gap-2.5 text-rose-800 dark:text-rose-300">
                <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {t.library.warningTitle}
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {(lang === 'en' ? currentGuide.warningSignsEn : currentGuide.warningSignsBn).map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-colors shadow-xs"
                >
                  {lang === 'en' ? 'Consult Doctor on These Signs' : 'এসব লক্ষণ দেখা দিলে ডাক্তার দেখান'}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
