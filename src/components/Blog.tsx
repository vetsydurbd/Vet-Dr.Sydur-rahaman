import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  UserCheck, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Share2 
} from 'lucide-react';
import { Language, ArticleItem } from '../types';
import { translations } from '../data/translations';
import { articlesData } from '../data/veterinaryData';

interface BlogProps {
  lang: Language;
  onSelectArticle: (article: ArticleItem) => void;
}

export const Blog: React.FC<BlogProps> = ({ lang, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const t = translations[lang];

  // Unique categories list
  const categories = useMemo(() => {
    const list = Array.from(new Set(articlesData.map(a => a.category)));
    return ['All', ...list];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const title = lang === 'en' ? article.titleEn.toLowerCase() : article.titleBn.toLowerCase();
      const summary = lang === 'en' ? article.summaryEn.toLowerCase() : article.summaryBn.toLowerCase();
      const q = searchQuery.toLowerCase().trim();

      const matchesSearch = !q || title.includes(q) || summary.includes(q);
      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory, lang]);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.blog.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.blog.title}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.blog.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat === 'All' ? t.blog.allCategories : cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-base">
              {t.blog.noResults}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-teal-600 hover:underline"
            >
              {lang === 'en' ? 'Reset Search' : 'অনুসন্ধান রিসেট করুন'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => {
              const title = lang === 'en' ? article.titleEn : article.titleBn;
              const summary = lang === 'en' ? article.summaryEn : article.summaryBn;
              const category = lang === 'en' ? article.category : article.categoryBn;

              return (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Article Thumbnail */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={article.imageUrl}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {article.featured && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-teal-600/90 text-white text-[11px] font-bold backdrop-blur-sm shadow-sm">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          <span>{t.blog.featured}</span>
                        </span>
                      )}

                      <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-semibold backdrop-blur-sm">
                        {category}
                      </span>
                    </div>

                    {/* Metadata line: Clean unboxed text with dots */}
                    <div className="p-5 pb-0">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <h3 className="mt-2.5 text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                        {title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {summary}
                      </p>
                    </div>
                  </div>

                  {/* Footer with author and read button */}
                  <div className="p-5 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-teal-700 dark:text-teal-300 font-semibold truncate max-w-[180px]">
                      {t.blog.publishedBy}
                    </span>

                    <span className="inline-flex items-center gap-1 font-bold text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform">
                      <span>{t.blog.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
