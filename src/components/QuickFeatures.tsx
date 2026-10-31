import React from 'react';
import { 
  ShieldCheck, 
  HeartPulse, 
  Sparkles, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface QuickFeaturesProps {
  lang: Language;
  onSelectFeature: (targetSection: string) => void;
}

export const QuickFeatures: React.FC<QuickFeaturesProps> = ({ lang, onSelectFeature }) => {
  const t = translations[lang];

  const features = [
    {
      id: 'preventive',
      icon: ShieldCheck,
      title: t.quickFeatures.preventive.title,
      desc: t.quickFeatures.preventive.desc,
      learnMore: t.quickFeatures.preventive.learnMore,
      targetSection: 'services',
      accentColor: 'from-teal-600 to-teal-700'
    },
    {
      id: 'emergency',
      icon: HeartPulse,
      title: t.quickFeatures.emergency.title,
      desc: t.quickFeatures.emergency.desc,
      learnMore: t.quickFeatures.emergency.learnMore,
      targetSection: 'contact',
      accentColor: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'wellness',
      icon: Sparkles,
      title: t.quickFeatures.wellness.title,
      desc: t.quickFeatures.wellness.desc,
      learnMore: t.quickFeatures.wellness.learnMore,
      targetSection: 'library',
      accentColor: 'from-teal-700 to-emerald-800'
    },
    {
      id: 'expertAdvice',
      icon: MessageSquare,
      title: t.quickFeatures.expertAdvice.title,
      desc: t.quickFeatures.expertAdvice.desc,
      learnMore: t.quickFeatures.expertAdvice.learnMore,
      targetSection: 'blog',
      accentColor: 'from-teal-800 to-teal-900'
    }
  ];

  return (
    <div className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className={`group relative rounded-2xl bg-gradient-to-br ${feature.accentColor} p-6 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-teal-400/20`}
            >
              <div>
                {/* Circular Icon with clean white background matching reference */}
                <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-200 group-hover:bg-white group-hover:text-teal-700 transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-white group-hover:text-emerald-100 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Learn More link */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectFeature(feature.targetSection)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
                >
                  <span>{feature.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
