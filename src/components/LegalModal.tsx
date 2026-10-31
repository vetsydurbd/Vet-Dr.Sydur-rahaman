import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { Language } from '../types';

interface LegalModalProps {
  type: 'privacy' | 'disclaimer' | null;
  onClose: () => void;
  lang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, lang }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-teal-600 dark:text-teal-400 mb-2">
              <Shield className="w-5 h-5" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
              <p>
                {lang === 'en'
                  ? 'Welcome to the personal website of Dr. Sydur Rahaman. Your privacy and trust are paramount to us.'
                  : 'ডা. সাইদুর রাহমানের ব্যক্তিগত ওয়েবসাইটে আপনাকে স্বাগতম। আপনার এবং আপনার পোষা প্রাণীর তথ্যের গোপনীয়তা রক্ষা করা আমাদের অঙ্গীকার।'}
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-1">
                {lang === 'en' ? 'Information We Collect' : 'যেসব তথ্য সংগৃহীত হয়'}
              </h4>
              <p>
                {lang === 'en'
                  ? 'When you schedule an appointment or contact us via WhatsApp/email, we collect your name, phone number, pet details, and symptoms. This information is exclusively used for veterinary assessment and scheduling.'
                  : 'আপনি যখন অ্যাপয়েন্টমেন্ট ফর্ম পূরণ করেন বা বার্তা পাঠান, তখন আপনার নাম, মোবাইল নম্বর, পোষ্যের বিবরণ ও শারীরিক সমস্যা সংরক্ষিত হয় যা কেবল চিকিৎসার উদ্দেশ্যে ব্যবহৃত হয়।'}
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-1">
                {lang === 'en' ? 'No Third-Party Sharing' : 'তৃতীয় পক্ষের সাথে শেয়ার না করা'}
              </h4>
              <p>
                {lang === 'en'
                  ? 'We do not sell, rent, or distribute client contact details to third-party commercial marketing agencies.'
                  : 'আমরা কখনোই কোনো বাণিজ্যিক এজেন্সির সাথে আপনার ব্যক্তিগত ফোন নম্বর বা ইমেইল শেয়ার করি না।'}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 mb-2">
              <FileText className="w-5 h-5" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? 'Veterinary Medical Disclaimer' : 'চিকিৎসাগত সতর্কবার্তা ও শর্তাবলি'}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
              <p>
                {lang === 'en'
                  ? 'The articles, guides, and suggestions published on this website are authored for educational awareness and preventative health knowledge. They do not constitute a direct veterinary-patient relationship until an in-person clinical examination has occurred.'
                  : 'এই ওয়েবসাইটে প্রকাশিত সমস্ত আর্টিকেল, গাইডলাইন ও স্বাস্থ্যবার্তা সাধারণ সচেতনতা ও রোগ প্রতিরোধের উদ্দেশ্যে রচিত। সশরীরে পরীক্ষা ব্যতীত এটি কোনো চূড়ান্ত চিকিৎসার প্রেসক্রিপশন নয়।'}
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-1">
                {lang === 'en' ? 'Emergency Protocol' : 'জরুরি পরিস্থিতি প্রোটোকল'}
              </h4>
              <p>
                {lang === 'en'
                  ? 'If your pet experiences severe trauma, respiratory arrest, acute poisoning, or prolonged urinary blockage, do not rely on website articles. Proceed immediately to a fully equipped emergency animal clinic.'
                  : 'পোষা প্রাণী হঠাৎ অচেতন হয়ে পড়লে, বিষ খেলে বা শ্বাসকষ্টে ভুগলে আর্টিকেলের ওপর নির্ভর না করে তাৎক্ষণিকভাবে জরুরি পশু হাসপাতালে নিয়ে যান।'}
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-1">
                {lang === 'en' ? 'Affiliation Notice' : 'কর্মক্ষেত্র সংক্রান্ত বিজ্ঞপ্তি'}
              </h4>
              <p>
                {lang === 'en'
                  ? 'Dr. Sydur Rahaman consults at Bingo Pet Care in Pallabi, Mirpur, Dhaka. This website is his independent personal branding and educational platform.'
                  : 'ডা. সাইদুর রাহমান বর্তমানে ঢাকার মিরপুর পল্লবীতে অবস্থিত বিঙ্গো পেট কেয়ারে কনসালট্যান্ট ও সার্জন হিসেবে কর্মরত আছেন। এটি তাঁর ব্যক্তিগত পোর্টাল।'}
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors"
          >
            {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>

      </div>
    </div>
  );
};
