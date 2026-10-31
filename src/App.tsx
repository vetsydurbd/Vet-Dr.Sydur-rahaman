import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickFeatures } from './components/QuickFeatures';
import { About } from './components/About';
import { Services } from './components/Services';
import { PetHealthLibrary } from './components/PetHealthLibrary';
import { Blog } from './components/Blog';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { LegalModal } from './components/LegalModal';
import { Language, ServiceItem, ArticleItem, PetCategory } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Language state (defaults to English, persists in localStorage)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('vet_sydur_lang');
    return (saved === 'bn' || saved === 'en') ? saved : 'en';
  });

  // Dark mode state
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('vet_sydur_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Selected species for Pet Health Library
  const [selectedSpecies, setSelectedSpecies] = useState<PetCategory>('dogs');

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('General Health Checkup');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'disclaimer' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync language with localStorage
  useEffect(() => {
    localStorage.setItem('vet_sydur_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync dark mode class on HTML root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vet_sydur_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vet_sydur_theme', 'light');
    }
  }, [isDark]);

  // Track scroll position for Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setBookingService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleSelectFeature = (targetSection: string) => {
    const el = document.getElementById(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSection = (sectionId: string, species?: PetCategory) => {
    if (species) {
      setSelectedSpecies(species);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Sticky Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Premium Minimal Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* 4 Feature Cards (Preventive, Emergency, Wellness, Expert Advice) */}
        <QuickFeatures
          lang={lang}
          onSelectFeature={handleSelectFeature}
        />

        {/* About Dr. Sydur Rahaman */}
        <About
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Complete Veterinary Services */}
        <Services
          lang={lang}
          onSelectService={(service) => setSelectedService(service)}
          onBookService={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* Pet Health Library (Dogs, Cats, Birds, Rabbits, Small Mammals) */}
        <PetHealthLibrary
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          activeSpecies={selectedSpecies}
          onSelectSpecies={setSelectedSpecies}
        />

        {/* Blog & Featured Articles */}
        <Blog
          lang={lang}
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Client Testimonials */}
        <Testimonials
          lang={lang}
        />

        {/* Frequently Asked Questions */}
        <Faq
          lang={lang}
        />

        {/* Contact & Consultation Form with Google Maps */}
        <Contact
          lang={lang}
        />

        {/* Easy & Convenient Booking Banner */}
        <CtaBanner
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenDisclaimer={() => setLegalModalType('disclaimer')}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* Floating WhatsApp Quick Action Button */}
        <a
          href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur%20Rahaman,%20I%20would%20like%20to%20consult%20about%20my%20pet."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm font-bold group border border-white/20"
          title="Direct WhatsApp with Dr. Sydur"
        >
          <i className="fa-brands fa-whatsapp text-xl text-white"></i>
          <span className="hidden sm:inline">WhatsApp Consult</span>
        </a>

        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={handleScrollTop}
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        initialService={bookingService}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        lang={lang}
        onBookService={(serviceName) => handleOpenBooking(serviceName)}
      />

      {/* Full Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
        onBookConsultation={() => handleOpenBooking()}
      />

      {/* Legal & Medical Disclaimer Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        lang={lang}
      />

    </div>
  );
}
