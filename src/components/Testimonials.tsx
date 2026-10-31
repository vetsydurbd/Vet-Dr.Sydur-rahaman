import React from 'react';
import { Star, MapPin, Heart, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { testimonialsData } from '../data/veterinaryData';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{t.testimonials.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.testimonials.title}{' '}
            <span className="text-teal-600 dark:text-teal-400">
              {t.testimonials.titleHighlight}
            </span>
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((review) => {
            const comment = lang === 'en' ? review.commentEn : review.commentBn;

            return (
              <div
                key={review.id}
                className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Star rating & Quote icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-teal-200 dark:text-slate-700" />
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{comment}"
                  </p>
                </div>

                {/* Pet parent & pet info */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatarUrl}
                      alt={review.clientName}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-teal-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {review.clientName}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                        <span>{review.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Pet tag */}
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-[11px] font-semibold border border-teal-200/50 dark:border-teal-800/50">
                      🐾 {review.petName}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {review.petType}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
