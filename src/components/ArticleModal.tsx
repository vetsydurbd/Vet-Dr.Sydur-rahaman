import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  UserCheck, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Check 
} from 'lucide-react';
import { Language, ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  lang: Language;
  onBookConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  lang,
  onBookConsultation
}) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const title = lang === 'en' ? article.titleEn : article.titleBn;
  const content = lang === 'en' ? article.contentEn : article.contentBn;
  const takeaways = lang === 'en' ? article.keyTakeawaysEn : article.keyTakeawaysBn;
  const category = lang === 'en' ? article.category : article.categoryBn;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Header */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              {category}
            </span>
            <span>·</span>
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span>·</span>
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px]">
                👨‍⚕️
              </div>
              <span>{article.author}</span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-teal-600 dark:hover:text-teal-400"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'en' ? 'Link Copied!' : 'লিংক কপি হয়েছে!') : (lang === 'en' ? 'Share' : 'শেয়ার')}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 bg-slate-100 dark:bg-slate-800">
          <img
            src={article.imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="p-5 rounded-2xl bg-teal-50/80 dark:bg-slate-800/80 border border-teal-100 dark:border-slate-800 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300">
            <Sparkles className="w-4 h-4" />
            <h4 className="font-bold text-xs uppercase tracking-wider">
              {lang === 'en' ? 'Veterinary Key Takeaways' : 'মূল স্বাস্থ্য বুলেটিন'}
            </h4>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {takeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-5">
          {content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Doctor Consultation Card in Article Footer */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base">
              {lang === 'en' ? 'Have Questions on This Topic?' : 'এই বিষয়ে আরও পরামর্শ প্রয়োজন?'}
            </h4>
            <p className="text-xs text-teal-200 mt-0.5">
              {lang === 'en'
                ? 'Consult with Dr. Sydur Rahaman directly for customized health guidance.'
                : 'আপনার পোষ্যের সুনির্দিষ্ট চিকিৎসার জন্য ডা. সাইদুরের সাথে যোগাযোগ করুন।'}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="px-5 py-2.5 rounded-xl bg-emerald-400 text-teal-950 font-bold text-xs sm:text-sm hover:bg-white transition-all shrink-0"
          >
            {lang === 'en' ? 'Book Consultation' : 'অ্যাপয়েন্টমেন্ট নিন'}
          </button>
        </div>

      </div>
    </div>
  );
};
