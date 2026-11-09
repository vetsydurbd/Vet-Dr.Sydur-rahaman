import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle,
  Info,
  ShieldCheck,
  Check, 
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Activity,
  HeartHandshake
} from 'lucide-react';
import { Language, ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  lang: Language;
  onBookConsultation: () => void;
}

/**
 * Dedicated CTVT Article Content Component
 * Formatted with modern typography, H2/H3 headers, icon-prefixed sections,
 * colored medical information callouts, and interactive FAQ accordions.
 */
const CtvtArticleContent: React.FC<{ lang: Language }> = ({ lang }) => {
  // First FAQ open by default for immediate visual feedback
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const toggleFaq = (idx: number) => {
    setOpenFaqs(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const isEn = lang === 'en';

  const faqs = isEn ? [
    {
      q: "Can humans or cats catch CTVT from an infected dog?",
      a: "No. Canine Transmissible Venereal Tumour is strictly restricted to canine species (domestic dogs, foxes, coyotes, and jackals). It poses zero infection risk to humans, cats, or other non-canine household pets."
    },
    {
      q: "Is CTVT a fatal cancer?",
      a: "CTVT is rarely fatal when appropriate veterinary medical care is provided. With gold-standard Vincristine chemotherapy, complete clinical remission and cure rates exceed 90% to 95%."
    },
    {
      q: "Will my dog lose their fur during chemotherapy?",
      a: "No. Unlike human chemotherapy, most dogs do not experience coat loss with Vincristine. Breeds with continuously growing hair (such as Poodles) may experience slight coat thinning, but standard canine fur remains completely intact."
    },
    {
      q: "Does recovering from CTVT make my dog immune for life?",
      a: "No. Clinical records confirm that cured dogs can contract the infection again if re-exposed to an infected dog years later. Routine surgical spaying/neutering and preventing contact with roaming stray animals remain essential for lifelong protection."
    },
    {
      q: "How quickly will the tumor start shrinking?",
      a: "Most pet owners observe noticeable shrinkage of the gross tumor mass within 2 to 3 weekly chemotherapy sessions, with complete visual and microscopic resolution achieved by the end of the 4 to 6 week course."
    }
  ] : [
    {
      q: "মানুষ বা বিড়ালে কি এই রোগ হতে পারে?",
      a: "না। এই রোগটি শুধুমাত্র ক্যানাইন (কুকুর ও সমগোত্রীয়) প্রাণীতেই সীমাবদ্ধ। এটি মানুষ, বিড়াল বা অন্য কোনো প্রাণীতে কখনই ছড়ায় না।"
    },
    {
      q: "সিটিভিটি কি একটি প্রাণঘাতী রোগ?",
      a: "সঠিক ভেটেরিনারি চিকিৎসা পেলে এটি কখনই প্রাণঘাতী নয়। আন্তর্জাতিক মানসম্পন্ন ভিনক্রিস্টিন কেমোথেরাপির মাধ্যমে ৯০% থেকে ৯৫% এরও বেশি রোগী সম্পূর্ণ নিরাময় লাভ করে।"
    },
    {
      q: "কেমোথেরাপিতে কি কুকুরের লোম ঝরে পড়ে?",
      a: "না। মানুষের মতো কেমোথেরাপিতে কুকুরের লোম ঝরে পড়ে না; সাধারণ কুকুরের পশম পুরোপুরি অক্ষত ও স্বাভাবিক থাকে।"
    },
    {
      q: "একবার সুস্থ হলে কি আজীবন রোগ প্রতিরোধ ক্ষমতা থাকে?",
      a: "না। সুস্থ হয়ে যাওয়ার পর আবার অন্য কোনো সংক্রামক কুকুরের সংস্পর্শে আসলে পুনরায় টিউমার হতে পারে; তাই সময়মতো বন্ধ্যাকরণ (স্পে ও নিউটার) স্থায়ী সুরক্ষার জন্য জরুরি।"
    },
    {
      q: "টিউমার শুকাতে কতদিন সময় লাগে?",
      a: "সাধারণত ২ থেকে ৩টি সাপ্তাহিক কেমোথেরাপির পর থেকেই টিউমার লক্ষণীয়ভাবে ছোট হয়ে শুকিয়ে যেতে শুরু করে এবং ৪ থেকে ৬ সপ্তাহের মধ্যে সম্পূর্ণ নিরাময় হয়।"
    }
  ];

  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
      
      {/* Article Lead Introduction */}
      <div className="space-y-3.5">
        <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-normal leading-relaxed">
          {isEn ? (
            <>
              Receiving a tumor diagnosis for a beloved dog can feel overwhelming. <strong className="font-bold text-slate-950 dark:text-white">Canine Transmissible Venereal Tumour (CTVT)</strong>—historically referred to as <span className="italic">Sticker’s sarcoma</span>—is a unique and unusual form of cancer.
            </>
          ) : (
            <>
              প্রিয় কুকুরের শরীরে টিউমার ধরা পড়লে যেকোনো অভিভাবকই অত্যন্ত উদ্বিগ্ন হয়ে পড়েন। <strong className="font-bold text-slate-950 dark:text-white">ক্যানাইন ট্রান্সমিসিবল ভেনেরিয়াল টিউমার (CTVT)</strong>—যাকে ঐতিহাসিকভাবে <span className="italic">স্টিকার্স সারকোমা</span> বলা হয়—কুকুরের একটি ব্যতিক্রমী ধরনের ক্যান্সার।
            </>
          )}
        </p>

        <p>
          {isEn ? (
            <>
              First documented in Europe by Hujard in 1820 and systematically investigated by Sticker in the early 20th century, CTVT differs fundamentally from almost all other cancers: rather than developing internally from a dog&apos;s own mutated cells, <strong className="font-bold text-slate-900 dark:text-white">CTVT is a contagious tumor spread by the direct transfer of living cancer cells between dogs</strong>.
            </>
          ) : (
            <>
              ১৮২০ সালে ইউরোপে বিজ্ঞানী হুজর্ড এটি প্রথম নথিভুক্ত করেন এবং বিংশ শতাব্দীর শুরুতে স্টিকার এর বিস্তারিত ব্যাখ্যা দেন। সাধারণ ক্যান্সারের মতো কুকুরের নিজস্ব কোষ থেকে এটি তৈরি হয় না; বরং <strong className="font-bold text-slate-900 dark:text-white">এক কুকুরের শরীর থেকে জীবিত ক্যান্সার কোষ অন্য কুকুরের শরীরে সরাসরি স্থানান্তরের মাধ্যমে</strong> এটি বিস্তার লাভ করে।
            </>
          )}
        </p>
      </div>

      {/* Information Box 1: Reassurance & High Cure Rate */}
      <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/90 dark:bg-teal-950/40 border-l-4 border-teal-600 dark:border-teal-400 shadow-xs">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
          <div className="text-sm sm:text-base text-teal-950 dark:text-teal-200 leading-relaxed font-medium">
            {isEn ? (
              <>
                <strong className="font-extrabold text-teal-900 dark:text-teal-100">Reassurance for Pet Owners:</strong> CTVT is strictly a canine-specific disease. It <strong className="font-bold">cannot</strong> be transmitted to humans, cats, or other non-canine household pets. Furthermore, veterinary clinical data confirms that CTVT is one of the most treatable neoplasms in veterinary oncology, with over <strong className="font-extrabold text-teal-900 dark:text-teal-100">90% to 95% complete cure rates</strong> under standard chemotherapy.
              </>
            ) : (
              <>
                <strong className="font-extrabold text-teal-900 dark:text-teal-100">পোষ্য অভিভাবকদের জন্য আশার কথা:</strong> এই রোগটি শুধুমাত্র ক্যানাইন (কুকুর ও সমগোত্রীয় প্রাণী) প্রজাতিতেই সীমাবদ্ধ। এটি মানুষ, বিড়াল বা অন্য কোনো প্রাণীতে ছড়ায় না। আধুনিক প্রাণিচিকিৎসায় কেমোথেরাপির মাধ্যমে <strong className="font-extrabold text-teal-900 dark:text-teal-100">৯০% এরও বেশি আক্রান্ত কুকুর সম্পূর্ণ সুস্থ</strong> হয়ে স্বাভাবিক জীবনে ফিরে আসে।
              </>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 1: What is CTVT */}
      <section className="space-y-3 pt-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 border-b border-slate-200/70 dark:border-slate-800 pb-2.5 flex items-center gap-2.5 tracking-tight">
          <span>🧬</span>
          <span>{isEn ? '1. What Is Canine Transmissible Venereal Tumour (CTVT)?' : '১. ক্যানাইন ট্রান্সমিসিবল ভেনেরিয়াল টিউমার (CTVT) আসলে কী?'}</span>
        </h2>

        <p>
          {isEn ? (
            <>
              Canine Transmissible Venereal Tumour is a naturally transmissible round cell tumor that affects domestic dogs and closely related wild canids (foxes, coyotes, and jackals). In CTVT, the mutated tumor cell itself acts as the infectious agent, operating much like an <strong className="font-bold text-slate-900 dark:text-white">allogeneic cellular graft</strong> that transfers from host to host.
            </>
          ) : (
            <>
              সিটিভিটি হলো কুকুরের একটি ছোঁয়াচে গোলাকার কোষের টিউমার যা গৃহপালিত কুকুর এবং শিয়াল বা নেকড়ে গোত্রীয় প্রাণীদের আক্রমণ করে। এই রোগে টিউমার কোষটি নিজেই সংক্রামক উপাদান হিসেবে কাজ করে এবং হোস্ট থেকে হোস্টে স্থানান্তরিত হয়।
            </>
          )}
        </p>

        <p>
          {isEn ? (
            <>
              Genetic research conducted by specialized transmissible cancer groups has shown that CTVT is the <strong className="font-bold text-slate-900 dark:text-white">oldest known continuous cell lineage in nature</strong>, first emerging in an ancient &ldquo;founder dog&rdquo; that lived between 6,000 and 11,000 years ago. Over millennia, CTVT cells adapted to survive by down-regulating major histocompatibility complex (MHC) molecules, allowing living cells to evade the recipient dog&apos;s cytotoxic T-cell immune response.
            </>
          ) : (
            <>
              বৈজ্ঞানিক গবেষণায় দেখা গেছে, এটি প্রকৃতির সবচেয়ে প্রাচীন জীবিত কোষের ধারা, যা প্রায় ৬,০০০ থেকে ১১,০০০ বছর আগের একটি প্রাচীন পূর্বপুরুষ কুকুর থেকে শুরু হয়েছিল। সহস্রাব্দ ধরে এই কোষগুলো প্রাপক কুকুরের রোগ প্রতিরোধ ক্ষমতাকে ফাঁকি দিয়ে টিকে থাকার মতো করে বিবর্তিত হয়েছে।
            </>
          )}
        </p>
      </section>

      {/* SECTION 2: Transmission and Risk Factors */}
      <section className="space-y-3 pt-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 border-b border-slate-200/70 dark:border-slate-800 pb-2.5 flex items-center gap-2.5 tracking-tight">
          <span>🔄</span>
          <span>{isEn ? '2. Transmission and Risk Factors: How Do Dogs Contract CTVT?' : '২. সিটিভিটি কীভাবে ছড়ায় এবং কাদের ঝুঁকি বেশি?'}</span>
        </h2>

        <p>
          {isEn
            ? 'Transmission requires the direct physical transfer of viable, intact tumor cells across abraded skin or micro-damaged mucosal surfaces. Clinical studies demonstrate two primary pathways:'
            : 'ক্ষতবিক্ষত ত্বক বা মিউকাস মেমব্রেনে সরাসরি জীবন্ত টিউমার কোষ লাগলেই কেবল এই রোগ ছড়াতে পারে। মূল বিস্তার প্রক্রিয়া নিচে তুলে ধরা হলো:'}
        </p>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>{isEn ? 'Modes of Transmission' : 'সংক্রমণের মাধ্যম'}</span>
        </h3>

        <ul className="space-y-2.5 my-3 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Sexual Contact (Coitus): ' : 'প্রজনন বা মিলন (Coitus): '}</strong>
              {isEn 
                ? 'The primary route of transmission. Mechanical friction during mating creates microscopic abrasions in genital mucosal tissues, allowing living tumor cells to transplant and seed.'
                : 'এটি সংক্রমণের প্রধান মাধ্যম। মিলনের সময় সৃষ্ট সূক্ষ্ম ঘর্ষণে জীবন্ত টিউমার কোষ নতুন কুকুরের শরীরে প্রতিস্থাপিত হয়।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Social & Grooming Behaviors: ' : 'সামাজিক আচরণ ও লেহন: '}</strong>
              {isEn 
                ? 'Dogs explore by sniffing and licking. Direct contact with an infected dog’s genital lesions during sniffing, licking, or biting transfers living cells to the oral cavity, nasal passages, or skin.'
                : 'আক্রান্ত কুকুরের যৌনাঙ্গ শুঁকতে যাওয়া, চাটা বা কামড়ানোর মাধ্যমে মুখে, নাকে বা ত্বকে কোষ স্থানান্তরিত হয়।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Maternal Grooming: ' : 'মায়ের পরিচর্যা: '}</strong>
              {isEn 
                ? 'An infected nursing mother can occasionally transfer viable tumor cells to her puppies during intensive cleaning.'
                : 'আক্রান্ত মা কুকুর বাচ্চা প্রসবের পর গা চাটার সময় কদাচিৎ এই কোষ ছড়াতে পারে।'}
            </span>
          </li>
        </ul>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>{isEn ? 'At-Risk Populations' : 'ঝুঁকিপূর্ণ গ্রুপ'}</span>
        </h3>

        <ul className="space-y-2.5 my-3 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'High-Risk Groups: ' : 'উচ্চ ঝুঁকিপূর্ণ: '}</strong>
              {isEn 
                ? 'Unsupervised stray, semi-stray, or habitually roaming dogs, and intact (unspayed/unneutered) male and female dogs of active reproductive age (2 to 8 years).'
                : 'রাস্তায় মুক্তভাবে ঘুরে বেড়ানো ভবঘুরে কুকুর এবং নির্বীজন (Spay/Neuter) না করা প্রজননক্ষম বয়সের (২ থেকে ৮ বছর) পুরুষ ও মেয়ে কুকুর।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Low-Risk Groups: ' : 'নিম্ন ঝুঁকিপূর্ণ: '}</strong>
              {isEn 
                ? 'Strictly supervised, indoor companion pets under leash control, and dogs with routine surgical spaying and neutering.'
                : 'ঘরে সাবধানে লালন-পালন করা এবং সময়মতো স্পে বা নিউটারিং করানো পারিবারিক পোষ্য কুকুর।'}
            </span>
          </li>
        </ul>
      </section>

      {/* SECTION 3: Symptoms and Warning Signs */}
      <section className="space-y-3 pt-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 border-b border-slate-200/70 dark:border-slate-800 pb-2.5 flex items-center gap-2.5 tracking-tight">
          <span>🩺</span>
          <span>{isEn ? '3. Symptoms & Clinical Warning Signs in Dogs' : '৩. সতর্কবার্তা ও প্রাথমিক লক্ষণসমূহ'}</span>
        </h2>

        <p>
          {isEn 
            ? 'Symptoms vary depending on whether the tumor is located on the external genitalia or in extragenital anatomical sites. In female dogs, lesions typically arise deep at the vestibule-vagina junction (>95% of cases), while in male dogs, tumors most commonly affect the caudal glans penis (bulbus glandis, >80% of cases) and preputial mucosa.'
            : 'লক্ষণগুলো টিউমারের অবস্থানের ওপর নির্ভর করে। মেয়ে কুকুরের ক্ষেত্রে যোনিনালী (Vestibule-vagina, ৯৫% ক্ষেত্রে) এবং পুরুষ কুকুরের ক্ষেত্রে লিঙ্গের গোড়ায় (Bulbus glandis, ৮০% ক্ষেত্রে) টিউমার বেশি দেখা যায়।'}
        </p>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <span>⚠️</span>
          <span>{isEn ? 'Primary Genital Signs in Dogs' : 'প্রধান লক্ষণসমূহ'}</span>
        </h3>

        <ul className="space-y-2.5 my-3 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Bloody or Serosanguineous Discharge (94.6% of cases): ' : 'রক্ত বা তরল ক্ষরণ (৯৪.৬% ক্ষেত্রে): '}</strong>
              {isEn ? 'Persistent dripping of blood or pinkish fluid from the vulva or prepuce, frequently spotted on carpets or bedding.' : 'প্রস্রাবের রাস্তা দিয়ে অনবরত তাজা রক্ত বা হালকা গোলাপি তরল ফোঁটা ফোঁটা ঝরে পড়া।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Visible Fleshy Masses (31.2% of cases): ' : 'ফুলকপির মতো মাংসপিণ্ড (৩১.২% ক্ষেত্রে): '}</strong>
              {isEn ? 'Fleshy, pink-to-red cauliflower-like nodular masses that are soft, friable, and bleed readily upon touch.' : 'লালচে-গোলাপি নরম মাংসপিণ্ড যা সামান্য ছোঁয়াতেই রক্তক্ষরণ ঘটায়।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Genital Deformation & Swelling (30.4% of cases): ' : 'যৌনাঙ্গ ফুলে যাওয়া (৩০.৪% ক্ষেত্রে): '}</strong>
              {isEn ? 'Visible structural alterations of the external prepuce or perineum.' : 'লিঙ্গের ত্বক বা যৌনাঙ্গের বাহ্যিক বিকৃতি ও ফোলাভাব।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Unpleasant Odor (27.2% of cases): ' : 'তীব্র দুর্গন্ধ (২৭.২% ক্ষেত্রে): '}</strong>
              {isEn ? 'A distinct foul smell resulting from secondary bacterial infection of ulcerated tumor tissue.' : 'মাংসপিণ্ডে ব্যাকটেরিয়ার সংক্রমণের কারণে দুর্গন্ধ সৃষ্টি হওয়া।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Frequent Licking & Discomfort: ' : 'ঘন ঘন চাটা ও অস্বস্তি: '}</strong>
              {isEn ? 'Excessive grooming of the genital region and dysuria (straining to urinate) due to urethral compression.' : 'ব্যথার কারণে আক্রান্ত স্থান বারবার জিহ্বা দিয়ে পরিষ্কার করার চেষ্টা ও প্রস্রাবে কষ্ট হওয়া।'}
            </span>
          </li>
        </ul>

        {/* Information Box 2: Clinical Misdiagnosis Alert */}
        <div className="my-5 p-4 sm:p-5 rounded-2xl bg-amber-50/95 dark:bg-amber-950/40 border-l-4 border-amber-500 dark:border-amber-400 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
              <strong className="font-extrabold text-amber-900 dark:text-amber-100">
                {isEn ? '⚠️ Clinical Misdiagnosis Warning: ' : '⚠️ মারাত্মক ভুল ধারণা: '}
              </strong>
              {isEn ? (
                <>
                  In female dogs, persistent bloody genital discharge is frequently mistaken by owners for a normal heat (estrus) cycle or a routine urinary tract infection (UTI). In male dogs, blood spots left on carpets or bedding are often misdiagnosed as prostate or bladder disorders. <strong className="font-bold">Any unexplained genital bleeding warrants a prompt examination by a veterinarian.</strong>
                </>
              ) : (
                <>
                  মেয়ে কুকুরের ক্ষেত্রে রক্তক্ষরণকে অনেক অভিভাবক সাধারণ &ldquo;হিট&rdquo; (Heat/Estrus cycle) বা ইউরিনারি ইনফেকশন ভেবে ভুল করেন। পুরুষ কুকুরের ক্ষেত্রে বিছানায় রক্তের দাগ দেখলে প্রস্রাবের সমস্যা ভাবেন। <strong className="font-bold">যেকোনো অস্বাভাবিক রক্তক্ষরণে অবিলম্বে রেজিস্টার্ড ভেটেরিনারি চিকিৎসকের শরণাপন্ন হওয়া জরুরি।</strong>
                </>
              )}
            </div>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <span>🐾</span>
          <span>{isEn ? 'Extragenital Signs (Outside the Genitalia)' : 'যৌনাঙ্গের বাইরের লক্ষণ (Extragenital Signs)'}</span>
        </h3>

        <ul className="space-y-2.5 my-3 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Nasal Passages: ' : 'নাক ও শ্বাসপথ: '}</strong>
              {isEn ? 'Chronic nosebleeds (epistaxis), persistent sneezing, abnormal nasal discharge, or visible facial deformity.' : 'নাক দিয়ে রক্ত পড়া, নাকে মাংস গজিয়ে অনবরত হাঁচি হওয়া বা মুখমণ্ডলের বিকৃতি।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Oral Cavity: ' : 'মুখগহ্বর: '}</strong>
              {isEn ? 'Pink nodular growths on the gums or lips, loose teeth, bad breath (halitosis), or difficulty chewing food.' : 'মাড়িতে ফুলকপির মতো মাংস গজানো, মুখে তীব্র দুর্গন্ধ হওয়া বা খাবার চিবুতে কষ্ট পাওয়া।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Skin & Regional Lymph Nodes: ' : 'ত্বক ও লিম্ফ নোড: '}</strong>
              {isEn ? 'Raised skin nodules across the head, ears, or trunk. Regional lymph node metastasis occurs in ~1.8% of females and ~15.6% of males.' : 'চোখের কোণে ফোলাভাব বা মাথা ও পিঠের ত্বকে গুটি গুটি মাংসপিণ্ড তৈরি হওয়া।'}
            </span>
          </li>
        </ul>
      </section>

      {/* SECTION 4: The Diagnostic Process */}
      <section className="space-y-3 pt-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 border-b border-slate-200/70 dark:border-slate-800 pb-2.5 flex items-center gap-2.5 tracking-tight">
          <span>🔬</span>
          <span>{isEn ? '4. The Diagnostic Process: How Your Veterinarian Confirms CTVT' : '৪. রোগ নির্ণয় ও নির্ভুল পরীক্ষা'}</span>
        </h2>

        <p>
          {isEn 
            ? 'Veterinarians use a systematic step-by-step diagnostic sequence to distinguish CTVT from other canine mucosal and round-cell tumors:'
            : 'অভিজ্ঞ ভেটেরিনারি সার্জন ধাপে ধাপে সিটিভিটি নিশ্চিত করেন:'}
        </p>

        <ol className="space-y-3 my-4 pl-1">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              1
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Comprehensive Physical Examination: ' : 'শারীরিক ও চাক্ষুষ পরীক্ষা: '}</strong>
              <span>{isEn ? 'Complete palpation and visual evaluation of the external genitalia, prepuce, vaginal vault, regional lymph nodes, and skin surfaces.' : 'জননাঙ্গ, লিম্ফ নোড ও মিউকাস মেমব্রেনের বিস্তারিত ক্লিনিক্যাল পরীক্ষা।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              2
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Exfoliative Cytology (Primary Diagnostic Standard): ' : 'এক্সফোলিয়েটিভ সাইটোলজি (গোল্ড স্ট্যান্ডার্ড): '}</strong>
              <span>{isEn ? 'Cells sampled via Fine Needle Aspiration (FNA) or impression smear show uniform round-to-oval cells with distinct central nucleoli and characteristic clear cytoplasmic vacuoles.' : 'সুই দিয়ে সামান্য রস নিয়ে (FNA বা Impression smear) অণুবীক্ষণ যন্ত্রে গোল কোষ ও বৈশিষ্ট্যপূর্ণ ভ্যাকুওল শনাক্ত করা।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              3
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Advanced Molecular PCR Testing: ' : 'মলিকুলার পিসিআর (PCR) পরীক্ষা: '}</strong>
              <span>{isEn ? 'In complex extragenital cases where histology may be inconclusive, PCR detects specific LINE-1 insertion sequences unique to CTVT cells.' : 'জটিল বা বাহ্যিক টিউমারের ক্ষেত্রে নিখুঁতভাবে সিটিভিটি জিন শনাক্তকরণ।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              4
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Health & Staging Assessment: ' : 'রক্ত পরীক্ষা (CBC ও বায়োকেমিস্ট্রি): '}</strong>
              <span>{isEn ? 'Complete blood counts (CBC) and biochemistry profiles evaluate overall organ health. Screening for tick-borne Ehrlichia or Babesia ensures safe chemotherapy planning.' : 'কেমোথেরাপির আগে লিভার ও কিডনির কার্যকারিতা এবং রক্তশূন্যতা বা টিক ফিভার যাচাই করা।'}</span>
            </div>
          </li>
        </ol>
      </section>

      {/* SECTION 5: Treatment Guidelines and Prognosis */}
      <section className="space-y-3 pt-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 border-b border-slate-200/70 dark:border-slate-800 pb-2.5 flex items-center gap-2.5 tracking-tight">
          <span>💉</span>
          <span>{isEn ? '5. Gold-Standard Treatment Guidelines & Achieving a Full Cure' : '৫. আধুনিক চিকিৎসা ও শতভাগ সুস্থতা'}</span>
        </h2>

        {/* Information Box 3: Chemotherapy Superiority */}
        <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/90 dark:bg-sky-950/40 border-l-4 border-sky-600 dark:border-sky-400 shadow-xs">
          <div className="flex items-start gap-3">
            <Stethoscope className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-sky-950 dark:text-sky-200 leading-relaxed font-medium">
              <strong className="font-extrabold text-sky-900 dark:text-sky-100">
                {isEn ? '🏆 Why Chemotherapy Outperforms Surgery: ' : '🏆 অস্ত্রোপচার কেন বর্জনীয়? '}
              </strong>
              {isEn ? (
                <>
                  Surgical excision alone carries an unacceptably high <strong className="font-bold">relapse rate of 30% to 35%</strong> because fragile CTVT cells easily exfoliate into the surgical wound margins. Intravenous Vincristine chemotherapy eliminates all cellular foci systemically, achieving over <strong className="font-bold">90% to 95% permanent cure</strong> without surgical trauma.
                </>
              ) : (
                <>
                  অপারেশন বা সার্জারি করলে ৩০% থেকে ৩৫% ক্ষেত্রে টিউমার আবার ফিরে আসে, কারণ অপারেশনের সময় ভঙ্গুর টিউমার কোষ আশপাশের ক্ষতস্থানে ছড়িয়ে পড়ে। কেমোথেরাপি পুরো শরীর থেকে এই কোষগুলোকে সমূলে ধ্বংস করে।
                </>
              )}
            </div>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <span>📋</span>
          <span>{isEn ? 'Vincristine Chemotherapy Protocol Steps' : 'ভিনক্রিস্টিন কেমোথেরাপির নিয়মাবলী'}</span>
        </h3>

        <ol className="space-y-3 my-4 pl-1">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              1
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Weekly Intravenous Infusion: ' : 'সাপ্তাহিক শিরায় ইনজেকশন: '}</strong>
              <span>{isEn ? 'Vincristine sulfate is administered strictly as a weekly intravenous infusion by an experienced veterinarian.' : 'প্রতি সপ্তাহে নির্দিষ্ট দিনে অভিজ্ঞ ভেটেরিনারি সার্জন কর্তৃক শিরায় (IV) ভিনক্রিস্টিন প্রয়োগ।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              2
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Standardized Dosage: ' : 'ওজন অনুযায়ী সঠিক মাত্রা: '}</strong>
              <span>{isEn ? 'Protocol guidelines utilize 0.5 to 0.75 mg/m² of body surface area (approx. 0.025 mg/kg).' : 'প্রতি বর্গমিটার শারীরিক আয়তন হিসেবে ০.৫ থেকে ০.৭৫ মিলিগ্রাম প্রয়োগ।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              3
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Treatment Duration: ' : 'চিকিৎসার সময়কাল: '}</strong>
              <span>{isEn ? 'Complete clinical remission typically requires 4 to 6 weekly treatments (5 to 7 total doses).' : 'সাধারণত ৪ থেকে ৬ সপ্তাহ (মোট ৫ থেকে ৭টি ডোজ) সময় লাগে।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              4
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Remission Safety Extension: ' : 'নিরাপদ নিরাময় প্রটোকল: '}</strong>
              <span>{isEn ? 'Weekly infusions must continue for 1 to 2 doses beyond complete visual disappearance of the mass to eliminate microscopic residual cells.' : 'টিউমার চোখের সামনে সম্পূর্ণ মিলিয়ে যাওয়ার পরও অতিরিক্ত ১-২টি ডোজ দেওয়া বাধ্যতামূলক যাতে ভেতরে থাকা অণুবীক্ষণিক কোষও নির্মূল হয়।'}</span>
            </div>
          </li>
        </ol>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <span>🛡️</span>
          <span>{isEn ? 'Chemotherapy Safety & Side Effect Profile' : 'কেমোথেরাপির নিরাপত্তা ও পার্শ্বপ্রতিক্রিয়া'}</span>
        </h3>

        <ul className="space-y-2.5 my-3 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Zero Fur Loss: ' : 'লোম পড়ার কোনো ঝুঁকি নেই: '}</strong>
              {isEn ? 'Unlike human chemotherapy, dogs do not lose their coats with Vincristine. Standard canine fur remains completely intact.' : 'মানুষের মতো কেমোথেরাপিতে কুকুরের লোম পড়ে না; সাধারণ পশম পুরোপুরি অক্ষত থাকে।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Mild, Transient Reaction: ' : 'মৃদু প্রতিক্রিয়া: '}</strong>
              {isEn ? 'Fewer than 20% of dogs experience mild, temporary lethargy or reduced appetite for 1–2 days post-infusion.' : 'মাত্র ২০% এরও কম কুকুরের ক্ষেত্রে ইনজেকশনের পর ১–২ দিন কিছুটা অবসাদ বা খাবারে অনীহা দেখা দিতে পারে।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Blood Cell Monitoring: ' : 'রক্তকোষের সুরক্ষা: '}</strong>
              {isEn ? 'Fewer than 2% develop clinically significant leukopenia. Weekly pre-chemo blood counts ensure 100% safe administration.' : 'নিয়মিত রক্তের শ্বেতকণিকা পরীক্ষার মাধ্যমে সম্পূর্ণ নিরাপদে চিকিৎসা সম্পন্ন করা হয়।'}
            </span>
          </li>
        </ul>
      </section>

      {/* SECTION 6: Home Care and Prevention */}
      <section className="space-y-3 pt-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 border-b border-slate-200/70 dark:border-slate-800 pb-2.5 flex items-center gap-2.5 tracking-tight">
          <span>🏠</span>
          <span>{isEn ? '6. Home Care Management & Long-Term Prevention' : '৬. ঘরে যত্ন ও দীর্ঘমেয়াদি প্রতিরোধ'}</span>
        </h2>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <HeartHandshake className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>{isEn ? 'Essential Home Care During Active Treatment' : 'চিকিৎসা চলাকালীন যত্ন'}</span>
        </h3>

        <ul className="space-y-2.5 my-3 pl-1">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Strict Canine Isolation: ' : 'অন্যান্য কুকুর থেকে পৃথক রাখা: '}</strong>
              {isEn ? 'Keep your dog isolated from other canines throughout treatment until your vet confirms full cure. Prevent mating, sniffing, and grooming interactions.' : 'চিকিৎসা শেষ না হওয়া পর্যন্ত আক্রান্ত কুকুরকে অন্য কুকুরের সংস্পর্শ থেকে সম্পূর্ণ আলাদা রাখুন।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Strict Adherence to Schedule: ' : 'নিয়মিত সময়সূচি রক্ষা: '}</strong>
              {isEn ? 'Attend every weekly appointment. Delaying infusions by 2 weeks or more increases drug resistance risks.' : 'কোনো অবস্থাতেই কেমোথেরাপির ডোজ ২ সপ্তাহের বেশি পেছানো যাবে না, এতে ওষুধের বিরুদ্ধে প্রতিরোধ ক্ষমতা তৈরি হতে পারে।'}
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
            <span>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Bedding Hygiene: ' : 'পরিচ্ছন্নতা বজায় রাখা: '}</strong>
              {isEn ? 'Regularly clean pet bedding and sanitize discharge-contaminated areas using veterinary-safe disinfectants.' : 'রক্ত লাগা বিছানা ও থাকার জায়গা নিয়মিত জীবাণুনাশক দিয়ে পরিষ্কার রাখুন।'}
            </span>
          </li>
        </ul>

        <h3 className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>{isEn ? 'Proven Long-Term Prevention Strategies' : 'স্থায়ী প্রতিরোধ ব্যবস্থা'}</span>
        </h3>

        <ol className="space-y-3 my-4 pl-1">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              1
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Spay and Neuter: ' : 'স্পেয়িং ও নিউটারিং: '}</strong>
              <span>{isEn ? 'Surgical sterilization eliminates reproductive urges and mating contact, closing the main transmission route for CTVT.' : 'কুকুরকে নির্দিষ্ট বয়সে বন্ধ্যাকরণ করলে যৌন মিলন ও হরমোনের তাড়না বন্ধ হয়ে সংক্রমণের পথ চিরতরে রুদ্ধ হয়।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              2
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Prevent Free-Roaming: ' : 'বেল্ট ও নিয়ন্ত্রিত চলাচল: '}</strong>
              <span>{isEn ? 'Keep dogs securely leashed during walks and contained within fenced yards to prevent contact with roaming or stray animals.' : 'বাইরে হাঁটাতে নিয়ে যাওয়ার সময় সবসময় বেল্ট (Leash) ব্যবহার করুন যাতে ভবঘুরে কুকুরের সাথে সংস্পর্শ না ঘটে।'}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              3
            </span>
            <div>
              <strong className="font-bold text-slate-900 dark:text-white">{isEn ? 'Pre-Breeding Veterinary Exams: ' : 'প্রজননপূর্ব স্বাস্থ্য পরীক্ষা: '}</strong>
              <span>{isEn ? 'Perform thorough veterinary reproductive exams on intact breeding animals prior to any planned mating.' : 'প্রজনন করানোর আগে উভয় কুকুরের জননাঙ্গ অভিজ্ঞ ডাক্তার দিয়ে পরীক্ষা করিয়ে নিন।'}</span>
            </div>
          </li>
        </ol>
      </section>

      {/* SECTION 7: FAQ Accordion Component */}
      <section className="space-y-4 pt-3">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 border-b border-slate-200/70 dark:border-slate-800 pb-2.5 flex items-center gap-2.5 tracking-tight">
          <span>❓</span>
          <span>{isEn ? '7. Frequently Asked Questions (FAQ)' : '৭. সচরাচর জিজ্ঞাসা (FAQ)'}</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = !!openFaqs[idx];
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-850 overflow-hidden shadow-xs transition-all hover:border-teal-300 dark:hover:border-teal-700"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      Q
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-blue-950 dark:text-sky-200 leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider shrink-0 mt-0.5">
                        {isEn ? 'Answer:' : 'উত্তর:'}
                      </span>
                      <p className="flex-1">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  lang,
  onBookConsultation
}) => {
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  if (!article) return null;

  const title = lang === 'en' ? article.titleEn : article.titleBn;
  const content = lang === 'en' ? article.contentEn : article.contentBn;
  const takeaways = lang === 'en' ? article.keyTakeawaysEn : article.keyTakeawaysBn;
  const category = lang === 'en' ? article.category : article.categoryBn;
  const isCtvtArticle = article.id === 'article-ctvt-guide-dog-owners';

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleGenericFaq = (index: number) => {
    setExpandedFaq(prev => prev === index ? null : index);
  };

  // Helper to render bold text inside strings for generic articles
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  // Generic Block Renderer for other articles
  const renderGenericBlock = (block: string, index: number) => {
    const trimmed = block.trim();

    if (trimmed.startsWith('## ')) {
      return (
        <h2 
          key={index} 
          className="text-xl sm:text-2xl font-extrabold text-blue-950 dark:text-sky-200 mt-8 mb-4 pt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-2.5 tracking-tight"
        >
          {trimmed.replace(/^##\s+/, '')}
        </h2>
      );
    }

    if (trimmed.startsWith('### ')) {
      return (
        <h3 
          key={index} 
          className="text-base sm:text-lg font-bold text-blue-900 dark:text-sky-300 mt-5 mb-2.5 tracking-tight"
        >
          {trimmed.replace(/^###\s+/, '')}
        </h3>
      );
    }

    if (trimmed.startsWith('[WARNING_BOX]')) {
      return (
        <div 
          key={index}
          className="my-5 p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border-l-4 border-amber-500 dark:border-amber-400 shadow-xs"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
              {renderFormattedText(trimmed.replace(/^\[WARNING_BOX\]\s*/, ''))}
            </div>
          </div>
        </div>
      );
    }

    if (trimmed.startsWith('[INFO_BOX]')) {
      return (
        <div 
          key={index}
          className="my-5 p-4 sm:p-5 rounded-2xl bg-teal-50/90 dark:bg-teal-950/40 border-l-4 border-teal-600 dark:border-teal-400 shadow-xs"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-teal-950 dark:text-teal-200 leading-relaxed font-medium">
              {renderFormattedText(trimmed.replace(/^\[INFO_BOX\]\s*/, ''))}
            </div>
          </div>
        </div>
      );
    }

    if (trimmed.startsWith('[FAQ]')) {
      const raw = trimmed.replace(/^\[FAQ\]\s*/, '');
      const parts = raw.split('|');
      const question = parts[0]?.trim() || '';
      const answer = parts.slice(1).join('|').trim();
      const isOpen = expandedFaq === index;

      return (
        <div 
          key={index}
          className="my-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 overflow-hidden shadow-xs transition-colors"
        >
          <button
            onClick={() => toggleGenericFaq(index)}
            className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base text-teal-600 dark:text-teal-400 font-bold">Q:</span>
              <span className="text-base sm:text-lg font-bold text-blue-950 dark:text-sky-200 leading-snug">
                {question}
              </span>
            </div>
            {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>
          {isOpen && (
            <div className="px-5 pb-5 pt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800">
              <p>{renderFormattedText(answer)}</p>
            </div>
          )}
        </div>
      );
    }

    if (trimmed.includes('\n• ') || trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(line => line.trim().length > 0);
      return (
        <ul key={index} className="space-y-2.5 my-4 pl-1">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0 mt-2" />
              <span className="flex-1">{renderFormattedText(item.replace(/^[•\-]\s*/, ''))}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n').filter(line => line.trim().length > 0);
      return (
        <ol key={index} className="space-y-3 my-4 pl-1">
          {items.map((item, itemIdx) => {
            const match = item.match(/^(\d+)\.\s*(.*)/);
            const num = match ? match[1] : `${itemIdx + 1}`;
            const cleanText = match ? match[2] : item;
            return (
              <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="w-6 h-6 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {num}
                </span>
                <span className="flex-1">{renderFormattedText(cleanText)}</span>
              </li>
            );
          })}
        </ol>
      );
    }

    return (
      <p key={index} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed my-3.5">
        {renderFormattedText(trimmed)}
      </p>
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 md:p-12 animate-in fade-in zoom-in-95 duration-200 max-h-[94vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Header */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-full font-bold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              {category}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{article.date}</span>
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 dark:text-white leading-[1.2] tracking-tight">
            {title}
          </h1>

          <div className="flex items-center justify-between pt-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {article.author}
                </p>
                <p className="text-[11px] text-teal-700 dark:text-teal-400 font-medium">
                  {lang === 'en' ? 'Evidence-Based Veterinary Care' : 'প্রমাণ-ভিত্তিক প্রাণিচিকিৎসাসেবা'}
                </p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'en' ? 'Link Copied!' : 'লিংক কপি হয়েছে!') : (lang === 'en' ? 'Share Article' : 'শেয়ার করুন')}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 mb-8 bg-slate-100 dark:bg-slate-800 shadow-md">
          <img
            src={article.imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        {isCtvtArticle ? (
          <CtvtArticleContent lang={lang} />
        ) : (
          <div className="article-body">
            {content.map((block, idx) => renderGenericBlock(block, idx))}
          </div>
        )}

        {/* Key Takeaways Box at the End of the Article */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50/60 dark:from-slate-800 dark:to-slate-800/80 border border-teal-200/80 dark:border-teal-800/80 shadow-xs space-y-3.5">
          <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300">
            <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider text-blue-950 dark:text-teal-300">
              {lang === 'en' ? 'Key Takeaways for Pet Parents' : 'মূল স্বাস্থ্য বুলেটিন (Key Takeaways)'}
            </h3>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {takeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Medical Disclaimer Box */}
        <div className="mt-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2.5 leading-relaxed">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-700 dark:text-slate-300 font-semibold">
              {lang === 'en' ? 'Medical Disclaimer: ' : 'চিকিৎসাগত সতর্কতা: '}
            </strong>
            {lang === 'en'
              ? 'This article is for educational purposes only and does not replace professional veterinary consultation.'
              : 'এই নিবন্ধটি শুধুমাত্র সচেতনতা ও শিক্ষামূলক উদ্দেশ্যে প্রণীত এবং এটি সরাসরি ভেটেরিনারি চিকিৎসকের পরামর্শ ও শারীরিক পরীক্ষার বিকল্প নয়।'}
          </p>
        </div>

        {/* Doctor Consultation Action Card */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="font-bold text-base sm:text-lg">
              {lang === 'en' ? 'Have Questions or Need a Pet Consultation?' : 'এই বিষয়ে পরামর্শ বা চিকিৎসা প্রয়োজন?'}
            </h4>
            <p className="text-xs sm:text-sm text-teal-200 mt-1">
              {lang === 'en'
                ? 'Consult with Vet Dr. Sydur Rahaman at Pallabi, Mirpur, Dhaka or via WhatsApp for personalized medical advice.'
                : 'মিরপুর পল্লবীতে ক্লিনিকে ডাক্তার দেখান অথবা জরুরি পরামর্শের জন্য সরাসরি যোগাযোগ করুন।'}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-white hover:to-emerald-200 text-teal-950 font-extrabold text-xs sm:text-sm transition-all shrink-0 shadow-md active:scale-95"
          >
            {lang === 'en' ? 'Book Appointment' : 'সিরিয়াল নিশ্চিত করুন'}
          </button>
        </div>

      </div>
    </div>
  );
};
