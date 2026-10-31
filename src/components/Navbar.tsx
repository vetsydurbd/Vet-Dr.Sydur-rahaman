import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Globe, 
  PhoneCall, 
  Calendar, 
  Heart,
  Stethoscope
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#library', label: t.nav.petLibrary },
    { href: '#blog', label: t.nav.blog },
    { href: '#contact', label: t.nav.contact }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top emergency announcement bar */}
      <div className="bg-teal-700 text-white text-xs py-1.5 px-4 font-medium transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            <span>
              {lang === 'en' 
                ? 'Clinical Consultations & Surgery at Pallabi, Mirpur, Dhaka'
                : 'পল্লবী, মিরপুর, ঢাকায় চেম্বার ও সার্জারি পরামর্শ'}
            </span>
            <span className="hidden sm:inline text-teal-200">·</span>
            <span className="hidden sm:inline text-teal-100 font-normal">
              {lang === 'en' ? 'DVM (CVASU) Registered Veterinarian' : 'ডিভিএম (সিভাসু) নিবন্ধিত ভেটেরিনারি সার্জন'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+8801787242197" 
              className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
              title="Call Doctor"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
              <span>+880 1787-242197</span>
            </a>
            <span className="text-teal-300/40">|</span>
            <a 
              href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur%20Rahaman,%20I%20would%20like%20to%20consult%20about%20my%20pet." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-200 font-semibold"
            >
              <i className="fa-brands fa-whatsapp text-sm text-emerald-300"></i>
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white dark:bg-slate-900 py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Doctor Identity */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Vet Dr. Sydur Rahaman
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 shadow-xs">
                  <span className="font-extrabold text-teal-800 dark:text-teal-200">DVM</span>
                  <span>(CVASU)</span>
                </span>
              </div>
              <p className="text-xs text-teal-700 dark:text-teal-400 font-medium">
                {lang === 'en' ? 'Veterinary Surgeon & Consultant' : 'ভেটেরিনারি সার্জন ও কনসালট্যান্ট'}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Language, Dark Mode, Appointment CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language toggle button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle English / বাংলা"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 rounded-xl shadow-sm hover:shadow-md shadow-teal-600/20 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookBtn}</span>
            </button>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookBtn}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
