import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';
import { Language, AppointmentFormData } from '../types';
import { translations } from '../data/translations';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang];
  
  const [formData, setFormData] = useState<AppointmentFormData>({
    ownerName: '',
    phone: '',
    email: '',
    petName: '',
    petSpecies: 'Cat / Kitten',
    petBreed: '',
    serviceType: 'General Health Checkup',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    symptoms: '',
    isEmergency: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<AppointmentFormData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLastSubmittedData({ ...formData });
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    if (!lastSubmittedData) return;
    const text = `*New Veterinary Consultation Request*\n\n` +
      `*Owner:* ${lastSubmittedData.ownerName}\n` +
      `*Phone:* ${lastSubmittedData.phone}\n` +
      `*Pet:* ${lastSubmittedData.petName} (${lastSubmittedData.petSpecies} - ${lastSubmittedData.petBreed || 'N/A'})\n` +
      `*Service:* ${lastSubmittedData.serviceType}\n` +
      `*Date/Time:* ${lastSubmittedData.preferredDate || 'Earliest available'} (${lastSubmittedData.preferredTime})\n` +
      `*Emergency:* ${lastSubmittedData.isEmergency ? 'YES (Urgent!)' : 'No'}\n` +
      `*Symptoms/Notes:* ${lastSubmittedData.symptoms || 'General consult'}`;

    const url = `https://wa.me/8801787242197?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.contact.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Clinic Info, Direct WhatsApp, Socials & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.contact.locationTitle}
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {lang === 'en' ? 'Address' : 'ঠিকানা'}
                    </h4>
                    <p className="mt-0.5 leading-relaxed">
                      {t.contact.locationAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {t.contact.consultHoursTitle}
                    </h4>
                    <p className="mt-0.5 leading-relaxed">
                      {t.contact.consultHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {lang === 'en' ? 'Direct Telephone / Mobile' : 'সরাসরি ফোন / মোবাইল'}
                    </h4>
                    <a 
                      href="tel:+8801787242197" 
                      className="mt-0.5 block font-bold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      {t.contact.directPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {lang === 'en' ? 'Email Address' : 'ইমেইল অ্যাড্রেস'}
                    </h4>
                    <a 
                      href="mailto:vetsydur.bd@gmail.com" 
                      className="mt-0.5 block font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      {t.contact.directEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct button card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between gap-4 shadow-md">
                <div>
                  <h4 className="font-bold text-sm">
                    {t.contact.whatsappAction}
                  </h4>
                  <p className="text-xs text-emerald-100 mt-0.5">
                    01787242197 · {t.contact.whatsappSub}
                  </p>
                </div>

                <a
                  href="https://wa.me/8801787242197?text=Hello%20Dr.%20Sydur%20Rahaman,%20I%20would%20like%20to%20consult%20about%20my%20pet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-emerald-700 hover:bg-emerald-50 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  <span>Chat Now</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'en' ? 'Connect on Social Media' : 'সামাজিক মাধ্যমে যুক্ত থাকুন'}
                </h4>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                    title="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/drsydurrahaman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-colors"
                    title="LinkedIn: /in/drsydurrahaman"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                    title="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                    title="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps Embed Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md h-64 sm:h-72 bg-slate-100">
              <iframe
                title="Dr. Sydur Rahaman Location - Pallabi, Mirpur, Dhaka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.836040854293!2d90.3541484838612!3d23.829007629562544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b28b61c97%3A0xb3638db669f52c1e!2sPallabi%2C%20Mirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t.contact.form.successTitle}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.form.successMsg}
                  </p>

                  {/* Highlighted WhatsApp instant push button */}
                  <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 max-w-md mx-auto space-y-3">
                    <p className="text-xs font-medium text-emerald-900 dark:text-emerald-200">
                      {t.contact.form.sendWhatsAppPrompt}
                    </p>
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
                    >
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                      <span>Send to Dr. Sydur on WhatsApp</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-teal-600 hover:underline"
                    >
                      {lang === 'en' ? 'Submit another request' : 'অন্য আরেকটি অনুরোধ পাঠান'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {lang === 'en' ? 'Book a Consultation / Appointment' : 'কনসালটেশন ও অ্যাপয়েন্টমেন্ট ফর্ম'}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {lang === 'en' 
                        ? 'Fill in your pet details and Dr. Sydur Rahaman will review your case.'
                        : 'আপনার পোষ্যের তথ্য দিন এবং ডা. সাইদুর রাহমান আপনার রোগীর কেস পর্যবেক্ষণ করবেন।'}
                    </p>
                  </div>

                  {/* Owner details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.ownerName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="017XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Pet details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.petName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.petName}
                        onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                        placeholder="e.g. Milo"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.petSpecies}
                      </label>
                      <select
                        value={formData.petSpecies}
                        onChange={(e) => setFormData({ ...formData, petSpecies: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      >
                        {t.contact.form.speciesOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.petBreed}
                      </label>
                      <input
                        type="text"
                        value={formData.petBreed}
                        onChange={(e) => setFormData({ ...formData, petBreed: e.target.value })}
                        placeholder="e.g. Persian, 1 yr"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Service & Preferred Timing */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.serviceType}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      >
                        {t.contact.form.serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.preferredDate}
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.preferredTime}
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Symptoms & notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.form.symptoms}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                      placeholder={t.contact.form.symptomsPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  {/* Emergency flag checkbox */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
                    <input
                      type="checkbox"
                      id="emergencyCheck"
                      checked={formData.isEmergency}
                      onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                      className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="emergencyCheck" className="text-xs font-bold text-amber-900 dark:text-amber-200 cursor-pointer">
                      🚨 {t.contact.form.emergencyCheck}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.form.submitBtn}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
