import React from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldAlert, 
  Heart,
  ChevronRight 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang, 
  onOpenPrivacy, 
  onOpenDisclaimer 
}) => {
  const t = translations[lang];

  const quickLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#library', label: t.nav.petLibrary },
    { href: '#blog', label: t.nav.blog },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact }
  ];

  const servicesList = [
    'General Health & Vaccinations',
    'Soft Tissue & Emergency Surgery',
    'Pet Dental Care & Scaling',
    'Diagnostic Pathology & Lab Tests',
    'Avian & Exotic Animal Medicine',
    'Flea, Tick & Parasite Management'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Doctor intro */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-md">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  Vet Dr. Sydur Rahaman
                </span>
                <p className="text-xs text-teal-400 font-semibold">
                  DVM, CVASU · Veterinary Surgeon & Consultant
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footer.aboutDoc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors flex items-center justify-center text-xs"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a 
                href="https://wa.me/8801787242197" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-emerald-600 transition-colors flex items-center justify-center text-xs"
                title="WhatsApp: 01787242197"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/drsydurrahaman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-700 transition-colors flex items-center justify-center text-xs"
                title="LinkedIn: /in/drsydurrahaman"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-pink-600 transition-colors flex items-center justify-center text-xs"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.servicesList}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesList.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500" />
                    <span>{srv}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Chamber Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Pallabi, Mirpur, Dhaka-1216, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+8801787242197" className="hover:text-teal-300 transition-colors font-medium text-slate-300">
                  01787242197 (+880 1787-242197)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:vetsydur.bd@gmail.com" className="hover:text-teal-300 transition-colors font-medium text-slate-300">
                  vetsydur.bd@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Sat - Thu: 10:00 AM - 9:00 PM<br />Fri: 3:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical disclaimer note banner */}
        <div className="py-6 border-b border-slate-900 text-xs text-slate-500 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-400">{t.footer.disclaimerTitle}:</strong> {t.footer.disclaimerText}
          </p>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} {t.footer.rights}</p>
            <p className="text-[11px] text-slate-600 mt-0.5">{t.footer.builtWithPride}</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-teal-400 transition-colors"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>·</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-teal-400 transition-colors"
            >
              {t.footer.termsOfService}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
