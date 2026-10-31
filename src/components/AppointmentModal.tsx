import React, { useState } from 'react';
import { X, Calendar, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language, AppointmentFormData } from '../types';
import { translations } from '../data/translations';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialService = 'General Health Checkup'
}) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<AppointmentFormData>({
    ownerName: '',
    phone: '',
    email: '',
    petName: '',
    petSpecies: 'Cat / Kitten',
    petBreed: '',
    serviceType: initialService,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    symptoms: '',
    isEmergency: false
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Veterinary Consultation Request*\n\n` +
      `*Owner:* ${formData.ownerName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Pet:* ${formData.petName} (${formData.petSpecies} - ${formData.petBreed || 'N/A'})\n` +
      `*Service:* ${formData.serviceType}\n` +
      `*Date/Time:* ${formData.preferredDate || 'Earliest available'} (${formData.preferredTime})\n` +
      `*Emergency:* ${formData.isEmergency ? 'YES (Urgent!)' : 'No'}\n` +
      `*Symptoms/Notes:* ${formData.symptoms || 'General consult'}`;

    const url = `https://wa.me/8801787242197?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.contact.form.successTitle}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t.contact.form.successMsg}
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-3">
              <p className="text-xs font-medium text-emerald-900 dark:text-emerald-200">
                {t.contact.form.sendWhatsAppPrompt}
              </p>
              <button
                onClick={handleSendViaWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Send to Dr. Sydur on WhatsApp</span>
              </button>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
            >
              {lang === 'en' ? 'Close Window' : 'উইন্ডো বন্ধ করুন'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {lang === 'en' ? 'Book Veterinary Consultation' : 'ভেটেরিনারি কনসালটেশন বুকিং'}
                </h3>
                <p className="text-xs text-teal-700 dark:text-teal-300 font-medium">
                  Vet Dr. Sydur Rahaman (DVM, CVASU) · Pallabi, Mirpur, Dhaka · 01787242197
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.form.ownerName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="017XXXXXXXX"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.form.petName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  placeholder="Pet Name"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.form.petSpecies}
                </label>
                <select
                  value={formData.petSpecies}
                  onChange={(e) => setFormData({ ...formData, petSpecies: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  {t.contact.form.speciesOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.form.petBreed}
                </label>
                <input
                  type="text"
                  value={formData.petBreed}
                  onChange={(e) => setFormData({ ...formData, petBreed: e.target.value })}
                  placeholder="Breed / Age"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.form.serviceType}
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  {t.contact.form.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.form.preferredDate}
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t.contact.form.symptoms}
              </label>
              <textarea
                rows={2}
                required
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                placeholder="Reason for consultation..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300">
              <input
                type="checkbox"
                id="modalEmergency"
                checked={formData.isEmergency}
                onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                className="w-4 h-4 text-teal-600 rounded"
              />
              <label htmlFor="modalEmergency" className="cursor-pointer font-medium">
                {t.contact.form.emergencyCheck}
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.form.submitBtn}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
