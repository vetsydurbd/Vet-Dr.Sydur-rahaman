import { ServiceItem, PetGuideItem, ArticleItem, TestimonialItem, FaqItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'general-checkup',
    icon: 'Stethoscope',
    titleEn: 'General Health & Preventive Checkups',
    titleBn: 'সাধারণ স্বাস্থ্য পরীক্ষা ও প্রতিরোধমূলক যত্ন',
    shortDescEn: 'Comprehensive physical examination, vital checks, and preventative care to spot hidden health issues early.',
    shortDescBn: 'শারীরিক অঙ্গপ্রত্যঙ্গ, হার্টরেট, তাপমাত্রা ও চোখ-কান পরীক্ষার মাধ্যমে প্রাথমিক পর্যায়ে রোগ শনাক্তকরণ।',
    fullDescEn: 'A thorough head-to-tail clinical evaluation covering heart rhythm, lungs, oral cavity, lymph nodes, abdomen, musculoskeletal posture, and body condition scoring. Includes routine deworming and vaccination counseling based on Dhaka\'s disease prevalence.',
    fullDescBn: 'মাথা থেকে লেজ পর্যন্ত সামগ্রিক ক্লিনিক্যাল পরীক্ষা—যার মধ্যে রয়েছে হৃদস্পন্দন, ফুসফুস, মুখগহ্বর, চোখ, কান ও পেটের পরীক্ষা। ঢাকার পরিবেশ অনুযায়ী কৃমিনাশক ও টিকার সঠিক পরামর্শ প্রদান করা হয়।',
    keyPointsEn: [
      'Comprehensive organ & vital signs assessment',
      'Core & non-core vaccine scheduling',
      'Weight monitoring & body condition scoring',
      'Parasite screening & preventive deworming'
    ],
    keyPointsBn: [
      'শারীরিক অঙ্গ ও ভাইটাল সাইনস পূর্ণাঙ্গ মূল্যায়ন',
      'বয়সভিত্তিক কোর ও নন-কোর টিকা পরিকল্পনা',
      'ওজন পর্যবেক্ষণ ও পুষ্টি পর্যালোচনা',
      'পরজীবী স্ক্রিনিং ও সময়োপযোগী কৃমিনাশক প্রয়োগ'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    badge: 'Essential'
  },
  {
    id: 'surgery',
    icon: 'Scissors',
    titleEn: 'Pet Surgery & Soft Tissue Procedures',
    titleBn: 'অস্ত্রোপচার ও সফট টিস্যু সার্জারি',
    shortDescEn: 'Modern sterile surgical procedures including spay/neuter, lump excision, wound reconstruction, and emergencies.',
    shortDescBn: 'জীবাণুমুক্ত আধুনিক অপারেশন থিয়েটারে স্পে/নিউটারিং, টিউমার অপসারণ, দুর্ঘটনাজনিত ক্ষতের প্লাস্টিক সার্জারি।',
    fullDescEn: 'Dr. Sydur Rahaman specializes in sterile soft-tissue surgeries utilizing modern pre-anesthetic protocols, continuous vital sign monitoring, and proactive multimodal pain management. Procedures include elective spaying/neutering, tumor biopsy/removal, exploratory laparotomy, gastrointestinal foreign body retrieval, and bladder stone extraction.',
    fullDescBn: 'ডা. সাইদুর রাহমান অ্যানাস্থেশিয়া প্রোটোকল ও ভাইটাল মনিটরিং মেনে নিরাপদ সফট-টিস্যু সার্জারিতে পারদর্শী। স্পে/নিউটারিং, সিস্টোটমি (পাথর অপসারণ), টিউমার অপারেশন এবং পেটে আটকে থাকা ফরেন বডি রিমুভাল সফলভাবে সম্পন্ন করা হয়।',
    keyPointsEn: [
      'Pre-op blood panel & anesthesia safety protocol',
      'Sterile instrument autoclave & electrocautery setup',
      'Dedicated post-operative recovery monitoring',
      'Multimodal analgesia for rapid painless healing'
    ],
    keyPointsBn: [
      'অপারেশনের পূর্বে রক্তের সিবিসি/বায়োকেমিস্ট্রি পরীক্ষা',
      'জীবাণুমুক্ত অটোক্লেভড যন্ত্রপাতি ও নিরাপদ অ্যানেস্থেসিয়া',
      'সার্জারি পরবর্তী ইনটেনসিভ রিকভারি কেয়ার',
      'ব্যথামুক্ত ও দ্রুত ক্ষতের আরোগ্য ব্যবস্থাপনা'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    badge: 'Specialized'
  },
  {
    id: 'dental-care',
    icon: 'Smile',
    titleEn: 'Pet Dental Care & Ultrasonic Scaling',
    titleBn: 'দাঁতের চিকিৎসা ও আল্ট্রাসনিক স্কেলিং',
    shortDescEn: 'Plaque and tartar removal, treatment of gingivitis, oral infections, and bad breath relief.',
    shortDescBn: 'দাঁতের টারটার ও প্লাক পরিষ্কার, মাড়ির সংক্রমণ (জিঞ্জিভাইটিস) নিরাময় এবং মুখের দুর্গন্ধ দূরীকরণ।',
    fullDescEn: 'Over 70% of cats and dogs over age 3 suffer from periodontal disease. We provide ultrasonic ultrasonic scaling, tooth polishing, pocket evaluation, and gentle extraction of fractured or severely infected teeth to protect your pet\'s kidneys and heart from systemic bacteria.',
    fullDescBn: '৩ বছরের বেশি বয়সী প্রায় ৭০% পোষ্যের দাঁত ও মাড়ির সমস্যা হয়। আল্ট্রাসনিক স্কেলিং, পলিশিং ও আক্রান্ত দাঁত নিরাপদে অপসারণের মাধ্যমে পোষ্যের দীর্ঘমেয়াদী কিডনি ও হার্টের সুস্থতা বজায় রাখা হয়।',
    keyPointsEn: [
      'Gentle ultrasonic supra- and subgingival scaling',
      'Enamel polishing to slow future plaque buildup',
      'Gingival inflammation & stomatitis treatment',
      'Home dental hygiene tutorials for pet owners'
    ],
    keyPointsBn: [
      'আল্ট্রাসনিক স্কেলিংয়ের মাধ্যমে টারটার অপসারণ',
      'দাঁতের এনামেল পলিশিং ও মসৃণকরণ',
      'মাড়ির প্রদাহ ও মাউথ আলসার নিরাময়',
      'বাসায় দাঁত ব্রাশ করার সঠিক কৌশল নির্দেশনা'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'diagnostics',
    icon: 'Activity',
    titleEn: 'Diagnostic Pathology & Lab Interpretation',
    titleBn: 'প্যাথলজি ডায়াগনস্টিক ও ল্যাব রিপোর্ট বিশ্লেষণ',
    shortDescEn: 'Accurate blood tests (CBC, biochemistry), fecal screening, skin scrapings, and imaging consultation.',
    shortDescBn: 'সঠিক রোগ নির্ণয়ে রক্তের সিবিসি, লিভার-কিডনি প্রোফাইল, মলের পরজীবী টেস্ট ও স্কিন স্ক্র্যাপিং।',
    fullDescEn: 'Accurate diagnostics form the cornerstone of effective veterinary treatment. Dr. Sydur Rahaman interprets detailed hematology, biochemistry serum profiles, urinalysis, skin cytology, and fungal cultures to quickly pinpoint underlying infections, organ dysfunction, or endocrine imbalances.',
    fullDescBn: 'সঠিক রোগ নির্ণয় সফল চিকিৎসার মূল ভিত্তি। রক্তের পূর্ণাঙ্গ সিবিসি, ক্রিয়েটিনিন, এসজিপিটি, চর্মের ছত্রাক ও অ্যালার্জি নির্ণয় করে সুনির্দিষ্ট ওষুধ নির্বাচন করা হয়।',
    keyPointsEn: [
      'Complete Blood Count (CBC) & chemistry profiles',
      'Direct microscopic skin scraping & fungal cytology',
      'Fecal flotation for internal parasites & protozoa',
      'Digital X-ray & ultrasound report interpretation'
    ],
    keyPointsBn: [
      'সিবিসি ও সিরাম বায়োকেমিস্ট্রি প্রোফাইল',
      'মাইক্রোস্কোপিক স্কিন স্ক্র্যাপিং ও ফাঙ্গাল টেস্ট',
      'মলের মাইক্রোস্কোপিক কৃমি ও প্রোটোজোয়া পরীক্ষা',
      'ডিজিটাল এক্স-রে ও আল্ট্রাসনোগ্রাম রিপোর্টের পর্যালোচনা'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pet-nutrition',
    icon: 'Utensils',
    titleEn: 'Pet Nutrition & Weight Management',
    titleBn: 'সুষম পুষ্টি ও খাদ্যতালিকা পরিকল্পনা',
    shortDescEn: 'Tailored dietary regimens for growing puppies, indoor cats, geriatric pets, and therapeutic diets.',
    shortDescBn: 'বাড়ন্ত ছানা, ইনডোর বিড়াল ও বয়স্ক পোষ্যের জন্য সঠিক ক্যালোরি ও পুষ্টিসমৃদ্ধ ডায়েট চার্ট।',
    fullDescEn: 'Improper home feeding can lead to severe nutrient deficiencies, urinary crystals, obesity, and pancreatitis. We formulate scientific, age-appropriate dietary blueprints balancing wet, dry, and veterinarian-approved fresh proteins, vitamins, and minerals.',
    fullDescBn: 'ভুল খাবারের কারণে বিড়াল-কুকুরের কিডনিতে পাথর, স্থূলতা ও পেটের দীর্ঘস্থায়ী রোগ হয়। বয়স, ওজন ও লাইফস্টাইল অনুযায়ী নিরাপদ ও পুষ্টিকর খাবারের তালিকা তৈরি করা হয়।',
    keyPointsEn: [
      'Species-specific calorie & macronutrient calculation',
      'Urinary FLUTD & renal disease therapeutic diets',
      'Food allergy elimination & hypoallergenic plans',
      'Homemade pet food formulation guidelines'
    ],
    keyPointsBn: [
      'প্রজাতি ও বয়সভিত্তিক সঠিক ক্যালোরি নির্ধারণ',
      'কিডনি ও ইউরিনারি ট্র্যাক্ট রোগের চিকিৎসোপযোগী খাদ্য',
      'খাবারের অ্যালার্জি শনাক্তকরণ ও প্রতিষেধক ডায়েট',
      'ঘরে রান্না করা নিরাপদ খাবারের বৈজ্ঞানিক অনুপাত'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parasite-control',
    icon: 'Bug',
    titleEn: 'Flea, Tick & Parasite Management',
    titleBn: 'টিক, ফ্লি ও পরজীবী নিয়ন্ত্রণ সেবা',
    shortDescEn: 'Targeted eradication of ectoparasites and tick-borne fever prevention, especially critical during Dhaka monsoon.',
    shortDescBn: 'কুকুর-বিড়ালের শরীরের উকুন, আঠালি ও টিক-ফিভার প্রতিরোধে নিরাপদ আধুনিক স্পট-অন ও চিকিৎসা।',
    fullDescEn: 'External ticks and fleas transmit deadly hemoparasitic infections (Babesia, Ehrlichia, Anaplasma). We deliver safe topical spot-on treatments, medicated therapeutic baths, and environmental decontamination protocols safe for delicate households.',
    fullDescBn: 'উকুন ও আঠালি থেকে প্রাণঘাতী ব্লাড প্যারাসাইট ও তীব্র রক্তশূন্যতা দেখা দেয়। বিশ্বমানের নিরাপদ স্পট-অন প্রয়োগ ও ঘরোয়া পরিবেশ জীবাণুমুক্ত করার সঠিক গাইডলাইন প্রদান করা হয়।',
    keyPointsEn: [
      'FDA-approved oral chews and topical spot-on therapy',
      'Tick-borne hemoparasite screening & treatment',
      'Ear mite eradication & soothing ear flushes',
      'Multi-pet household infestation clearance protocol'
    ],
    keyPointsBn: [
      'আন্তর্জাতিক মানসম্পন্ন নিরাপদ স্পট-অন ও ওষুধ',
      'রক্তের পরজীবীজনিত তীব্র জ্বর ও রক্তশূন্যতার চিকিৎসা',
      'কানের ক্ষতিকর কানের মাইট (Ear Mite) নিরাময়',
      'একাধিক পোষ্য থাকা বাসায় সংক্রমণ প্রতিরোধের নিয়ম'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'avian-exotic',
    icon: 'Feather',
    titleEn: 'Avian & Exotic Animal Medicine',
    titleBn: 'পাখি ও বিদেশি প্রাণীর বিশেষায়িত চিকিৎসা',
    shortDescEn: 'Gentle diagnostics and medical management for Cockatiels, Budgies, Canaries, Rabbits, and Guinea Pigs.',
    shortDescBn: 'ককাটেল, বাজরিগার, লাভবার্ড, খরগোশ ও গিনিপিগের সংবেদনশীল পরীক্ষা ও ওষুধ প্রয়োগ।',
    fullDescEn: 'Birds and small exotic mammals have rapid metabolisms and mask symptoms until critically ill. Dr. Sydur Rahaman brings specialized knowledge in gentle handling, respiratory disease therapy, beak & wing care, rabbit GI stasis management, and crop stasis in avian patients.',
    fullDescBn: 'পাখি ও খরগোশ অসুস্থতা গোপন রাখতে চেষ্টা করে—তাই সামান্য লক্ষণও সতর্কতার সাথে দেখতে হয়। ড্রপিং পরীক্ষা, শ্বাসকষ্টের চিকিৎসা, খরগোশের জিআই স্ট্যাসিস এবং সুষম বীজের অনুপাত নির্ধারণে বিশেষজ্ঞ সেবা।',
    keyPointsEn: [
      'Low-stress avian examination & weight profiling',
      'Rabbit gastrointestinal stasis emergency therapy',
      'Beak, feather condition & wing trimming guidance',
      'Calcium supplementation & egg-binding resolution'
    ],
    keyPointsBn: [
      'ভীতিহীন সংবেদনশীল স্পর্শে পাখির স্বাস্থ্য পরীক্ষা',
      'খরগোশের খাবার বন্ধ হওয়া ও পেট ফাঁপার জরুরি চিকিৎসা',
      'ঠোঁট ও পালকের পুষ্টি ও স্বাস্থ্য পর্যবেক্ষণ',
      'ক্যালসিয়ামের ঘাটতি ও ডিম আটকার (Egg binding) চিকিৎসা'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    badge: 'Unique Care'
  },
  {
    id: 'emergency-care',
    icon: 'HeartPulse',
    titleEn: 'Emergency Triage & Critical Care Guidance',
    titleBn: 'জরুরি সেবা ও প্রাথমিক জীবনরক্ষা',
    shortDescEn: 'Urgent assessment for toxic ingestion, hit-by-vehicle trauma, urinary blockages, and respiratory distress.',
    shortDescBn: 'বিষক্রিয়া, সড়ক দুর্ঘটনা, প্রস্রাব আটকে যাওয়া এবং তীব্র শ্বাসকষ্টে দ্রুত জীবনরক্ষাকারী দিকনির্দেশনা।',
    fullDescEn: 'Critical minutes can save a pet\'s life. Dr. Sydur Rahaman provides prompt triage advice for emergencies including male cat urethral blockage (FLUTD), chocolate/rat poison ingestion, acute vomiting/diarrhea dehydration, and wound trauma.',
    fullDescBn: 'জরুরি অবস্থায় সঠিক সময়ে সঠিক পদক্ষেপ প্রাণ বাঁচায়। পুরুষ বিড়ালের প্রস্রাব আটকে যাওয়া, বিষাক্ত পদার্থ খাওয়া, তীব্র বমি-ডায়রিয়া এবং যেকোনো শারীরিক ট্রমার জরুরি চিকিৎসা।',
    keyPointsEn: [
      'Cat urinary obstruction catheterization guidance',
      'Poisoning detoxification & fluid therapy protocol',
      'Fracture stabilization & wound bandaging',
      'WhatsApp direct emergency triage advisory'
    ],
    keyPointsBn: [
      'বিড়ালের মূত্রনালী ব্লকেজের তাৎক্ষণিক ক্যাথিটারাইজেশন',
      'টক্সিন বা বিষক্রিয়া পরবর্তী স্যালাইন ও ডিটক্স থেরাপি',
      'হাড় ভাঙা বা ক্ষতের প্রাথমিক ব্যান্ডেজ ও স্থিতিশীলতা',
      'হোয়াটসঅ্যাপে জরুরি পরামর্শ ও গাইডলাইন'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
    badge: 'Urgent'
  }
];

export const petGuidesData: PetGuideItem[] = [
  {
    id: 'guide-dogs',
    species: 'dogs',
    titleEn: 'Complete Canine Health & Wellness Guide',
    titleBn: 'কুকুর ও কুকুরছানার সম্পূর্ণ স্বাস্থ্য গাইড',
    summaryEn: 'Essential guide for raising healthy dogs in Bangladesh, covering vaccination, monsoon care, and heat protection.',
    summaryBn: 'বাংলাদেশে কুকুর পালনের সঠিক পদ্ধতি, বর্ষায় ত্বকের যত্ন ও গরম থেকে সুরক্ষার জরুরি গাইডলাইন।',
    vaccinesEn: [
      '6–8 Weeks: DHPPi (Distemper, Hepatitis, Parvovirus, Parainfluenza) 1st dose',
      '10–12 Weeks: DHPPi 2nd booster dose',
      '14–16 Weeks: DHPPi 3rd dose + Anti-Rabies Vaccine',
      'Annually: Yearly DHPPi booster & Rabies revaccination'
    ],
    vaccinesBn: [
      '৬–৮ সপ্তাহ: ডিএইচপিপিআই (পারভো, ডিসটেম্পার) প্রথম ডোজ',
      '১০–১২ সপ্তাহ: ডিএইচপিপিআই দ্বিতীয় বুস্টার ডোজ',
      '১৪–১৬ সপ্তাহ: ডিএইচপিপিআই তৃতীয় ডোজ + র‍্যাবিস (জলাতঙ্ক) টিকা',
      'প্রতি বছর: বাৎসরিক ডিএইচপিপিআই ও র‍্যাবিস বুস্টার'
    ],
    dietTipsEn: [
      'Never feed onions, garlic, chocolate, grapes, raisins, or cooked chicken bones.',
      'Provide clean drinking water changed at least twice daily in Dhaka’s humid climate.',
      'Incorporate vet-approved lean proteins (boiled chicken, boiled eggs without salt) alongside quality dry kibble.'
    ],
    dietTipsBn: [
      'কখনই পেঁয়াজ, রসুন, চকোলেট, আঙুর, কিসমিস বা শক্ত মুরগির হাড় খেতে দেবেন না।',
      'ঢাকার গরম আবহাওয়ায় দিনে অন্তত ২-৩ বার পাত্রের খাবার পানি পরিবর্তন করুন।',
      'লবণ ছাড়া সিদ্ধ মুরগির মাংস, ডিমের সাদা অংশ ও উন্নত মানের কিবল সুষমভাবে খেতে দিন।'
    ],
    warningSignsEn: [
      'Persistent vomiting or bloody foul-smelling diarrhea (suspected Parvovirus)',
      'Sudden lethargy, pale gums, or dark yellow/red urine (suspected Tick Fever)',
      'Unexplained coughing or labored panting while resting'
    ],
    warningSignsBn: [
      'ঘন ঘন বমি বা তীব্র দুর্গন্ধযুক্ত রক্তমাখা পাতলা পায়খানা (পারভোভাইরাস লক্ষণ)',
      'হঠাৎ অবসাদ, ফ্যাকাশে মাড়ি বা গাঢ় রঙের প্রস্রাব (টিক ফিভারের লক্ষণ)',
      'বিশ্রামের সময় অস্বাভাবিক হাঁপানো বা একটানা কাশি'
    ],
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guide-cats',
    species: 'cats',
    titleEn: 'Feline Care, Indoor Wellness & Spay Guide',
    titleBn: 'বিড়াল ও বিড়ালছানার সঠিক পরিচর্যা ও পুষ্টি',
    summaryEn: 'How to safeguard your cats from feline panleukopenia, urinary blockage, and common indoor ailments.',
    summaryBn: 'প্যানলিউকোপেনিয়া ভাইরাস, কিডনির পাথর এবং লোম পড়া রোধে ইনডোর বিড়ালের আধুনিক পরিচর্যা।',
    vaccinesEn: [
      '8 Weeks: Feline Tricat / 4-in-1 (Panleukopenia, Calicivirus, Rhinotracheitis)',
      '12 Weeks: Tricat booster vaccination',
      '16 Weeks: Anti-Rabies vaccination',
      'Annually: 1 Tricat booster & 1 Rabies booster dose'
    ],
    vaccinesBn: [
      '৮ সপ্তাহ: ট্রাইক্যাট / ৪-ইন-১ প্রথম ডোজ (প্যানলিউকোপেনিয়া, ক্যালিসিভাইরাস)',
      '১২ সপ্তাহ: ট্রাইক্যাট বুস্টার ডোজ',
      '১৬ সপ্তাহ: র‍্যাবিস (জলাতঙ্ক) টিকা',
      'প্রতি বছর: বাৎসরিক ট্রাইক্যাট ও র‍্যাবিস বুস্টার'
    ],
    dietTipsEn: [
      'Cats are obligate carnivores; they require high animal protein and taurine.',
      'Wet food or water fountains encourage hydration to prevent painful urinary crystals.',
      'Avoid cow milk, raw fish diets, processed human snacks, and lilies (lilies are fatally toxic).'
    ],
    dietTipsBn: [
      'বিড়াল নিখাদ মাংসাশী প্রাণী—তাদের খাবারে পর্যাপ্ত টরিন ও প্রাণিজ প্রোটিন আবশ্যক।',
      'ইউরিনারি ক্রিস্টাল রোধে পর্যাপ্ত পানি এবং ভেজা খাবারের (Wet food) ব্যবস্থা রাখুন।',
      'গরুর দুধ, কাঁচা মাছ এবং ঘরে রাখা লিলি ফুল এড়িয়ে চলুন (লিলি বিড়ালের জন্য বিষাক্ত)।'
    ],
    warningSignsEn: [
      'Male cat straining in the litter box without producing urine (CRITICAL EMERGENCY)',
      'Complete loss of appetite for more than 24 hours (risk of hepatic lipidosis)',
      'Open-mouth breathing, wheezing, or hiding in dark corners with drooping ears'
    ],
    warningSignsBn: [
      'পুরুষ বিড়াল লিটার বক্সে বারবার বসেও প্রস্রাব করতে না পারা (মারাত্মক জরুরি অবস্থা)',
      'টানা ২৪ ঘণ্টার বেশি কিছু না খাওয়া (লিভার নষ্ট হওয়ার ঝুঁকি)',
      'মুখ হাঁ করে শ্বাস নেওয়া, তীব্র কাশি বা অন্ধকারে লুকিয়ে থাকা'
    ],
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guide-birds',
    species: 'birds',
    titleEn: 'Avian Nutrition, Cage Hygiene & Illness Detection',
    titleBn: 'পাখির স্বাস্থ্য, খাবার ও রোগ প্রতিরোধ নির্দেশিকা',
    summaryEn: 'Care guide for Cockatiels, Budgerigars, Lovebirds, and Finches in tropical urban environments.',
    summaryBn: 'ককাটেল, বাজরিগার, লাভবার্ডের খাঁচা ব্যবস্থাপনা, সুষম সীডমিক্স ও শ্বাসকষ্টের সতর্কতা।',
    vaccinesEn: [
      'Periodic prophylactic deworming every 3–4 months with vet-calculated micro-doses',
      'Regular oral multivitamin and calcium liquid courses',
      'Quarantine all newly purchased birds for a minimum of 21 days before co-housing'
    ],
    vaccinesBn: [
      'প্রতি ৩–৪ মাস অন্তর ভেটেরিনারি চিকিৎসকের পরামর্শে নিরাপদ কৃমিনাশক কোর্স',
      'নিয়মিত তরল ভিটামিন এবং ক্যালসিয়াম কোর্সের সঠিক অনুপাত',
      'নতুন কেনা পাখিকে অন্তত ২১ দিন আলাদা কোয়ারেন্টিনে রাখা'
    ],
    dietTipsEn: [
      'Seed-only diets cause fatty liver disease; balance with fresh greens (coriander, mint, grated carrot).',
      'Provide clean cuttlefish bone or mineral block for beak maintenance and eggshell calcium.',
      'Never feed avocado, apple seeds, chocolate, salty chips, or onions.'
    ],
    dietTipsBn: [
      'শুধু কাউন/ধান খাওয়ালে ফ্যাটি লিভার হয়—সাথে ধনেপাতা, পুদিনা পাতা, গাজর কুচি দিন।',
      'খাঁচায় সবসময় সমুদ্রের ফেনা (Cuttlefish bone) বা মিনারেল ব্লক ঝুলিয়ে রাখুন।',
      'অ্যাভোকাডো, আপেলের বীজ, চকোলেট ও তেল-মসলাযুক্ত খাবার কখনও দেবেন না।'
    ],
    warningSignsEn: [
      'Sitting puffed up at the bottom of the cage with eyes half-closed',
      'Tail bobbing up and down with each breath (severe respiratory distress)',
      'Watery greenish or foul-smelling droppings adhering to cloacal feathers'
    ],
    warningSignsBn: [
      'পালক ফুলিয়ে খাঁচার তলায় চোখ বন্ধ করে বসে থাকা (তীব্র অসুস্থতার লক্ষণ)',
      'শ্বাস নেওয়ার সাথে সাথে লেজ ওঠানামা করা (শ্বাসকষ্টের লক্ষণ)',
      'সবুজাভ পাতলা ড্রপিং বা মলদ্বারের লোমে মল লেগে থাকা'
    ],
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guide-rabbits',
    species: 'rabbits',
    titleEn: 'Rabbit Gut Motility & Dental Care Handbook',
    titleBn: 'খরগোশের হজম প্রক্রিয়া ও দাঁতের স্বাস্থ্য সুরক্ষা',
    summaryEn: 'Vital instructions for preventing fatal GI stasis and maintaining healthy teeth in domestic rabbits.',
    summaryBn: 'খরগোশের প্রাণঘাতী জিআই স্ট্যাসিস (পেট ফাঁপা) প্রতিরোধ ও সুস্থ রাখার সহজ নিয়মাবলি।',
    vaccinesEn: [
      'Routine external parasite checks (ear mites and fur mites)',
      'Preventive deworming course prescribed by an exotic veterinarian',
      'Early elective neutering/spaying to prevent 80% incidence of uterine adenocarcinoma in females'
    ],
    vaccinesBn: [
      'কানের মাইট ও চামড়ার ক্ষতিকর মাইট পরীক্ষা',
      'ভেটেরিনারি চিকিৎসকের পরামর্শে মৃদু কৃমিনাশক প্রদান',
      'মেয়ে খরগোশের জরায়ুর ক্যান্সার রোধে ৬–৮ মাস বয়সে স্পেয়িং সম্পন্ন করা'
    ],
    dietTipsEn: [
      'Diet MUST be 80% fresh Timothy/orchard hay, 15% leafy greens, and only 5% plain pellets.',
      'Constant hay consumption is required to naturally grind down continuously growing teeth.',
      'Treats like carrots and fruits should be strictly limited to small thumbnail slices weekly.'
    ],
    dietTipsBn: [
      'খাবারের ৮০% হতে হবে শুকনা ঘাস (Hay), ১৫% তাজা সবুজ শাকপাতা এবং মাত্র ৫% পেলেট।',
      'খরগোশের দাঁত আজীবন বাড়ে—ঘাস চিবিয়ে খাওয়ার মাধ্যমেই দাঁত স্বাভাবিক মাপে থাকে।',
      'গাজর বা মিষ্টি ফল সপ্তাহে মাত্র সামান্য এক টুকরা উপহার হিসেবে দেওয়া যেতে পারে।'
    ],
    warningSignsEn: [
      'No fecal pellets produced for 8–12 hours (GI Stasis — Medical Emergency!)',
      'Teeth grinding in pain, hunched posture, refusing favorite treats',
      'Wet chin or drooling indicating overgrown molar spurs'
    ],
    warningSignsBn: [
      'টানা ৮–১২ ঘণ্টা কোনো মল না ত্যাগ করা (জরুরি অবস্থা — কালক্ষেপণ করবেন না)',
      'ব্যথায় দাঁত কিড়মিড় করা, পেট চেপে কুঁকড়ে বসে থাকা',
      'থুতনি ভিজে থাকা বা মুখ দিয়ে লালা পড়া (দাঁত অতিরিক্ত বড় হওয়ার লক্ষণ)'
    ],
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guide-small-mammals',
    species: 'small_mammals',
    titleEn: 'Guinea Pig & Hamster Wellness Handbook',
    titleBn: 'গিনিপিগ ও হ্যামস্টারের বিজ্ঞানসম্মত যত্ন',
    summaryEn: 'Essential Vitamin C requirements, cage bedding safety, and respiratory disease prevention.',
    summaryBn: 'গিনিপিগের ভিটামিন সি এর আবশ্যকতা, নিরাপদ বেডিং ও ত্বকের সুস্থতা রক্ষার উপায়।',
    vaccinesEn: [
      'Regular weigh-ins to track weight changes (even a 30g drop signals illness)',
      'Gentle skin examination for ringworm fungal spores and fur lice',
      'Microscopic stool examination for coccidial parasites'
    ],
    vaccinesBn: [
      'সপ্তাহে অন্তত একবার ওজন মেপে নোট রাখা (সামান্য ওজন হ্রাসও অসুস্থতার পূর্বাভাস)',
      'শরীরের লোমে খোসপাঁচড়া, ফাঙ্গাস বা মাইটের আক্রমণ পর্যবেক্ষণ',
      'মলের মাইক্রোস্কোপিক প্যারাসাইট পরীক্ষা'
    ],
    dietTipsEn: [
      'Guinea pigs cannot synthesize Vitamin C; provide fresh bell peppers or vet-grade drops daily.',
      'Never use cedar or pine wood shavings as bedding (toxic phenols harm lungs).',
      'Use high-dust-extracted paper bedding or washable fleece liners.'
    ],
    dietTipsBn: [
      'গিনিপিগ নিজ দেহে ভিটামিন সি তৈরি করতে পারে না; প্রতিদিন ক্যাপসিকাম বা ভিটামিন ড্রপ দিন।',
      'খাঁচায় কখনও পাইন বা সিডার কাঠের গুঁড়া দেবেন না (এদের ঘ্রাণ ফুসফুস নষ্ট করে)।',
      'পরিষ্কার নরম কাপড় বা ডাস্ট-ফ্রি পেপার বেডিং ব্যবহার করুন।'
    ],
    warningSignsEn: [
      'Crusty discharge around eyes or nose, wheezy breathing sounds',
      'Hair loss with intense itching, scurrying, and biting at the flank',
      'Soft mushy stools or unkempt, greasy matted fur'
    ],
    warningSignsBn: [
      'চোখ বা নাকের পাশে সর্দি বা শক্ত আস্তরণ, সাঁ সাঁ শব্দে শ্বাস নেওয়া',
      'শরীরের লোম উঠে যাওয়া ও তীব্র চুলকানি',
      'পেট খারাপ, নরম মল বা শরীরে দুর্গন্ধ হওয়া'
    ],
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
  }
];

export const articlesData: ArticleItem[] = [
  {
    id: 'article-vaccines-bangladesh',
    slug: 'puppy-kitten-vaccine-schedule-bangladesh',
    category: 'Preventive Care',
    categoryBn: 'প্রতিরোধমূলক যত্ন',
    titleEn: 'Essential Puppy & Kitten Vaccination Schedule in Bangladesh (2026 Guide)',
    titleBn: 'বাংলাদেশে বিড়াল ও কুকুরছানার প্রয়োজনীয় টিকার সময়সূচি ও নিয়মাবলি',
    summaryEn: 'A complete veterinary timeline for DHPPi, Tricat, and Anti-Rabies vaccinations to safeguard your young pets in Dhaka.',
    summaryBn: 'পারভো, ডিসটেম্পার ও জলাতঙ্কের হাত থেকে প্রিয় পোষ্যকে বাঁচাতে সঠিক বয়সে সঠিক ভ্যাকসিনেশনের পূর্ণাঙ্গ শিডিউল।',
    contentEn: [
      'Vaccination is the single most cost-effective and compassionate intervention in veterinary medicine. In an urban metropolis like Dhaka, viral pathogens such as Canine Parvovirus, Canine Distemper, and Feline Panleukopenia thrive in the warm, humid climate and persist on shoe soles and surfaces.',
      'For puppies: The maternal antibodies acquired through mother’s milk gradually wane between 6 to 8 weeks. At 6–8 weeks, administer the first 5-in-1 / DHPPi vaccine. Follow with booster shots at 10–12 weeks and 14–16 weeks. The Anti-Rabies vaccine is administered at 14–16 weeks. Skipping boosters leaves dangerous immune gaps!',
      'For kittens: At 8 weeks of age, kittens should receive their primary Feline Tricat (3-in-1 or 4-in-1) vaccine, followed by a booster dose 3 to 4 weeks later. Anti-Rabies is given at 4 months of age.',
      'Key golden rule: Never vaccinate a sick, feverish, or heavily parasite-infested pet. Always schedule a deworming course at least 7 to 10 days before vaccination to ensure maximum immune response.'
    ],
    contentBn: [
      'পোষা প্রাণীর চিকিৎসায় ভ্যাকসিনের চেয়ে কার্যকর জীবনরক্ষাকারী পদক্ষেপ আর নেই। ঢাকার ঘনবসতিপূর্ণ ও আর্দ্র আবহাওয়ায় ক্যানাইন পারভোভাইরাস, ডিসটেম্পার এবং ফেলাইন প্যানলিউকোপেনিয়া ভাইরাস অত্যন্ত সক্রিয় থাকে এবং মানুষের জুতো বা পোশাকের মাধ্যমে সহজেই ঘরে ছড়ায়।',
      'কুকুরছানার ক্ষেত্রে: মায়ের দুধ থেকে পাওয়া প্রতিরোধ ক্ষমতা ৬ থেকে ৮ সপ্তাহে কমে আসে। তাই ৬–৮ সপ্তাহে প্রথম ৫-ইন-১ (DHPPi) টিকা দিন। এরপর ১০–১২ সপ্তাহে দ্বিতীয় এবং ১৪–১৬ সপ্তাহে তৃতীয় বুস্টার দিন। ১৬ সপ্তাহে জলাতঙ্কের (Rabies) টিকা দিতে হবে। বুস্টার ডোজ বাদ দিলে সুরক্ষার দেয়াল দুর্বল হয়ে পড়ে।',
      'বিড়ালছানার ক্ষেত্রে: ৮ সপ্তাহ বয়সে ট্রাইক্যাট (Tricat) টিকার প্রথম ডোজ এবং এর ৩-৪ সপ্তাহ পর বুস্টার ডোজ দিতে হবে। ৪ মাস বয়সে জলাতঙ্কের টিকা নিশ্চিত করুন।',
      'জরুরি পরামর্শ: অসুস্থ, জ্বর থাকা বা পেটে কৃমিভর্তি পোষ্যকে কখনই ভ্যাকসিন দেবেন না। ভ্যাকসিন দেওয়ার অন্তত ৭–১০ দিন আগে সঠিক কৃমিনাশক প্রয়োগ নিশ্চিত করা বাঞ্ছনীয়।'
    ],
    keyTakeawaysEn: [
      'Complete the full 3-dose puppy or 2-dose kitten series before public exposure.',
      'Deworm at least 7–10 days prior to administering vaccines.',
      'Keep the vaccination passport updated and observe for mild lethargy for 24 hours post-shot.'
    ],
    keyTakeawaysBn: [
      'টিকার সম্পূর্ণ ডোজ শেষ হওয়ার আগে কুকুর বা বিড়ালছানাকে বাইরের প্রাণীর সংস্পর্শে আনবেন না।',
      'টিকা দেওয়ার ৭–১০ দিন পূর্বে কৃমিনাশক কোর্স সম্পন্ন করুন।',
      'টিকার পর ২৪ ঘণ্টা কিছুটা ক্লান্তি স্বাভাবিক, তবে ফোলাভাব বা শ্বাসকষ্ট হলে অবিলম্বে ডাক্তারের শরণাপন্ন হন।'
    ],
    author: 'Dr. Sydur Rahaman, DVM (CVASU)',
    readTime: '5 min',
    date: 'February 2026',
    imageUrl: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'article-heatstroke-pets',
    slug: 'preventing-heatstroke-pets-dhaka-summer',
    category: 'Emergency First Aid',
    categoryBn: 'জরুরি প্রাথমিক চিকিৎসা',
    titleEn: 'Preventing Heatstroke & Dehydration in Pets During Dhaka Summers',
    titleBn: 'ঢাকার তীব্র গরমে পোষা প্রাণীর হিটস্ট্রোক ও পানিশূন্যতা রোধের উপায়',
    summaryEn: 'How to recognize life-threatening heat exhaustion and cool your pets safely without triggering dangerous hypothermic shock.',
    summaryBn: 'অতিরিক্ত গরমে পোষ্যের শরীরের তাপমাত্রা বিপদসীমা ছাড়িয়ে গেলে তাৎক্ষণিক প্রাথমিক চিকিৎসা ও করণীয়।',
    contentEn: [
      'Unlike humans who sweat through skin pores, dogs only sweat minimally through their footpads and cool down primarily via panting. Cats groom and seek cool floors. When ambient Dhaka temperatures surpass 34°C with 80% humidity, pets cannot dissipate body heat effectively.',
      'Symptoms of heatstroke include rapid heavy panting, brick-red or pale tongue/gums, thick ropey saliva, glassy unseeing eyes, wobbly gait, and vomiting. If a pet collapses, body temperature can quickly climb above 41°C (106°F), triggering multi-organ failure.',
      'Immediate First Aid: Move pet into shade or air conditioning immediately. Wet their body with room temperature tap water (DO NOT use ice or ice-cold water, as sudden vasoconstriction traps heat in internal organs). Place a fan in front of them and rush to Dr. Sydur Rahaman or the nearest emergency clinic.'
    ],
    contentBn: [
      'মানুষের মতো পোষা প্রাণী সারা শরীর দিয়ে ঘামতে পারে না। কুকুর কেবল পায়ের তালু দিয়ে সামান্য ঘামে এবং হাঁপানোর মাধ্যমে শরীর ঠান্ডা করে। বিড়াল জিহ্বা দিয়ে লোম ভিজিয়ে শরীরের তাপমাত্রা নিয়ন্ত্রণ করে। ঢাকার উচ্চ আর্দ্রতা ও অতিরিক্ত গরমে তাদের শরীর দ্রুত বিপজ্জনকভাবে উত্তপ্ত হয়ে ওঠে।',
      'হিটস্ট্রোকের লক্ষণ: অতিরিক্ত হাঁপানো, জিহ্বা ও মাড়ি রক্তবর্ণ বা ফ্যাকাশে হওয়া, মুখ থেকে ঘন লালা পড়া, টলমল করে হাঁটা এবং হঠাৎ জ্ঞান হারিয়ে ফেলা। শরীরের তাপমাত্রা ১০৬ ডিগ্রি ফারেনহাইটের উপরে উঠে গেলে কিডনি ও মস্তিষ্ক স্থায়ীভাবে ক্ষতিগ্রস্ত হতে পারে।',
      'তাৎক্ষণিক করণীয়: অবিলম্বে ছায়াযুক্ত বা এসির ঘরে নিয়ে আসুন। স্বাভাবিক তাপমাত্রার পানি দিয়ে পেট, পায়ের পাতা ও শরীর ভিজিয়ে দিন (কখনও বরফ বা বরফ-শীতল পানি ঢালবেন না, এতে হিতে বিপরীত হয়)। ফ্যানের নিচে রাখুন এবং দ্রুত ভেটেরিনারি চিকিৎসকের কাছে নিয়ে আসুন।'
    ],
    keyTakeawaysEn: [
      'Never leave a pet unattended inside a parked vehicle even with windows cracked.',
      'Walk dogs only early morning (before 7:30 AM) or after sunset.',
      'Use room-temperature water for emergency cooling; avoid ice cubes.'
    ],
    keyTakeawaysBn: [
      'গাড়ির ভেতর পোষ্যকে একা রেখে কখনও দরজা-জানালা বন্ধ করবেন না।',
      'সকাল ৭:৩০ টার আগে অথবা সূর্যাস্তের পর কুকুরকে বাইরে হাঁটাতে বের করুন।',
      'শরীর ঠান্ডা করতে স্বাভাবিক পানি ব্যবহার করুন; সরাসরি বরফ দেওয়া নিষেধ।'
    ],
    author: 'Dr. Sydur Rahaman, DVM (CVASU)',
    readTime: '4 min',
    date: 'January 2026',
    imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'article-spay-neuter-benefits',
    slug: 'spaying-neutering-benefits-myths-facts',
    category: 'Surgery Insights',
    categoryBn: 'সার্জারি ও অস্ত্রোপচার',
    titleEn: 'Why Spaying and Neutering Extends Your Pet’s Lifespan',
    titleBn: 'স্পেয়িং ও নিউটারিং: পোষ্যের দীর্ঘায়ু ও সুস্থতায় অস্ত্রোপচারের গুরুত্ব',
    summaryEn: 'Surgical insights into the medical and behavioral benefits of sterilization, busting common myths among pet parents.',
    summaryBn: 'অস্ত্রোপচারের মাধ্যমে বন্ধ্যাকরণ কেন বিড়াল-কুকুরকে প্রাণঘাতী ক্যান্সার ও ইনফেকশন থেকে মুক্ত রাখে।',
    contentEn: [
      'One of the most compassionate choices a pet parent can make is spaying (females) or neutering (males). Aside from humanely preventing unwanted litters in Dhaka, the medical benefits are profound.',
      'In female cats and dogs, spaying prior to their first or second estrus cycle virtually eliminates the risk of mammary gland tumors (which are malignant in 90% of cats and 50% of dogs). Furthermore, it completely prevents Pyometra—a fatal uterine infection commonly affecting unspayed pets over age 4.',
      'In males, neutering eliminates testicular cancer and drastically diminishes aggressive marking, roaming outside the home, and fighting. With modern anesthesia and sterile techniques, recovery takes only 5–7 days with minimal discomfort.'
    ],
    contentBn: [
      'পোষ্যের দীর্ঘ ও নিরুপদ্রব জীবনের জন্য সময়মতো স্পে বা নিউটারিং অত্যন্ত মানবিক ও বৈজ্ঞানিক সিদ্ধান্ত। অবাঞ্ছিত বংশবৃদ্ধি ঠেকানোর পাশাপাশি এটি বড় বড় প্রাণঘাতী রোগ থেকে পোষ্যকে রক্ষা করে।',
      'মেয়ে বিড়াল ও কুকুরের ক্ষেত্রে: প্রথম হিটের আগে স্পেয়িং করলে মেমারি টিউমার (স্তনের ক্যান্সার) হওয়ার ঝুঁকি প্রায় শূন্যের কোঠায় নেমে আসে। এছাড়া পায়োমেট্রা (জরায়ুর পুঁজভর্তি সংক্রমণ)—যা বয়স্ক বিড়ালের মৃত্যুর অন্যতম প্রধান কারণ—তা সম্পূর্ণরূপে প্রতিরোধ হয়।',
      'পুরুষের ক্ষেত্রে: টেস্টিসের ক্যান্সার বন্ধ হয়, ঘরের কোণে প্রস্রাব ছিটিয়ে টেরিটরি মার্ক করার প্রবণতা কমে এবং বাইরে পালিয়ে যাওয়ার অস্থিরতা দূর হয়। আধুনিক নিরাপদ অ্যানেস্থেশিয়ায় মাত্র ৫-৭ দিনের মধ্যে পোষ্য পুরোপুরি স্বাভাবিক জীবনে ফিরে আসে।'
    ],
    keyTakeawaysEn: [
      'Prevents Pyometra, a life-threatening uterine infection.',
      'Drastically slashes risks of mammary and reproductive cancers.',
      'Reduces indoor spraying, aggression, and wandering urges.'
    ],
    keyTakeawaysBn: [
      'পায়োমেট্রার মতো প্রাণঘাতী জরায়ু ইনফেকশন থেকে ১০০% সুরক্ষিত রাখে।',
      'মেমারি টিউমার ও রিপ্রোডাক্টিভ ক্যান্সারের ঝুঁকি দূর করে।',
      'বাসার ভেতর প্রস্রাব ছিটানো ও আগ্রাসী আচরণ উল্লেখযোগ্যভাবে কমায়।'
    ],
    author: 'Dr. Sydur Rahaman, DVM (CVASU)',
    readTime: '6 min',
    date: 'December 2025',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'article-tick-flea-monsoon',
    slug: 'tick-and-flea-prevention-monsoon-bangladesh',
    category: 'Preventive Care',
    categoryBn: 'প্রতিরোধমূলক যত্ন',
    titleEn: 'Flea & Tick Eradication: Protecting Pets During Monsoon Season',
    titleBn: 'বর্ষাকালে কুকুর-বিড়ালের উকুন ও আঠালি (টিক) দূর করার বৈজ্ঞানিক উপায়',
    summaryEn: 'Combatting tick-borne hemoparasites (Babesiosis) and Flea Allergy Dermatitis (FAD) with safe modern veterinary therapies.',
    summaryBn: 'আঠালির কামড় থেকে হওয়া মারাত্মক টিক ফিভার এবং চুলকানি দূরীকরণে প্রমাণিত চিকিৎসার উপায়।',
    contentEn: [
      'Monsoon rains in Bangladesh provide the ideal breeding humidity for Rhipicephalus sanguineus (the brown dog tick) and Ctenocephalides felis (the cat flea). Beyond painful itching, ticks transmit Babesia and Ehrlichia—microscopic parasites that destroy red blood cells, causing acute anemia and internal bleeding.',
      'Common mistake: Many pet owners in Dhaka still use toxic agricultural powders or harsh phenyl washes, which poison the animal through skin absorption and grooming. Never use non-veterinary chemicals!',
      'Safe solutions include veterinary-formulated spot-on pipettes containing Fipronil or Fluralaner, which break the tick lifecycle without harming your pet\'s liver or nerves. Regular combing and environmental washing of pet beds in hot water are equally essential.'
    ],
    contentBn: [
      'বাংলাদেশের বর্ষাকাল ও স্যাঁতসেঁতে পরিবেশ উকুন ও আঠালির বংশবৃদ্ধির জন্য আদর্শ। এই পরজীবীগুলো কেবল রক্তই চুষে নেয় না, বরং ব্যাবেসিয়া ও এহরলিচিয়ার মতো মারাত্মক জীবাণু রক্তের কোষে ছড়িয়ে দেয়—যার ফলে প্রচণ্ড জ্বর ও রক্তশূন্যতা তৈরি হয়।',
      'মারাত্মক ভুল: অনেক পোষ্য মালিক বাজার থেকে বিষাক্ত ফিনাইল বা কীটনাশক পাউডার দিয়ে পোষ্যকে গোসল করান। এটি ত্বকের মাধ্যমে শরীরে শোষিত হয়ে লিভার ও স্নায়ুতন্ত্র অকেজো করে দেয়।',
      'সঠিক সমাধান: ভেটেরিনারি অনুমোদিত নিরাপদ স্পট-অন (Spot-on) বা চিবিয়ে খাওয়ার নিরাপদ ট্যাবলেট ব্যবহার করুন। এটি রক্তে কোনো ক্ষতি না করে মাত্র ২৪ ঘণ্টার মধ্যে পরজীবী ধ্বংস করে। এছাড়া ঘরের বিছানা ও খাঁচা গরম পানিতে নিয়মিত ধুয়ে নিন।'
    ],
    keyTakeawaysEn: [
      'Never use human lice shampoos or agricultural chemicals on pets.',
      'Administer monthly or quarterly veterinary spot-on treatments consistently.',
      'Watch for high fever, orange-colored urine, and white gums.'
    ],
    keyTakeawaysBn: [
      'মানুষের উকুনের তেল বা কীটনাশক পোষা প্রাণীর গায়ে কখনই মাখবেন না।',
      'নিয়মিত ভেটেরিনারি চিকিৎসকের পরামর্শে স্পট-অন ড্রপ ব্যবহার করুন।',
      'তীব্র জ্বর, হলদে প্রস্রাব এবং মাড়ি সাদা হয়ে গেলে দ্রুত রক্ত পরীক্ষা করান।'
    ],
    author: 'Dr. Sydur Rahaman, DVM (CVASU)',
    readTime: '4 min',
    date: 'November 2025',
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'article-avian-feeding-mistakes',
    slug: 'common-bird-feeding-mistakes-avian-health',
    category: 'Avian & Exotics',
    categoryBn: 'পাখি ও বিদেশি প্রাণী',
    titleEn: 'Avian Nutrition 101: Safe Seeds, Fresh Greens & Foods to Avoid',
    titleBn: 'খাঁচার পাখির সঠিক খাবার: পুষ্টিকর শাকসবজি ও বর্জনীয় খাবারের তালিকা',
    summaryEn: 'Why an all-seed diet shortens your pet bird’s life and how to formulate balanced nutrition for Cockatiels and Budgies.',
    summaryBn: 'কেবল ধান-কাউন খাওয়ালে কেন পাখির লিভার নষ্ট হয় এবং কীভাবে সুষম ডায়েট নিশ্চিত করবেন।',
    contentEn: [
      'The vast majority of pet bird diseases treated in veterinary practice originate from malnutrition. An all-sunflower or all-millet seed diet is notoriously deficient in Vitamin A, calcium, and essential amino acids, while heavily loaded with unhealthy fats.',
      'Over time, seed-only birds develop dry scaly nostrils, respiratory infections, poor feathering, and hepatic lipidosis (fatty liver disease). Female birds will often suffer from egg-binding due to low circulating blood calcium.',
      'The ideal daily diet should consist of 50–60% high-grade seed mix, 30% fresh thoroughly washed vegetables (kale, spinach, broccoli, grated carrot, sweet corn), and 10% healthy treats. Fresh water must be provided twice daily in clean cups.'
    ],
    contentBn: [
      'ক্লিনিকে চিকিৎসা নিতে আসা বেশিরভাগ পাখির অসুস্থতার মূল কারণ ভুল খাদ্যাভ্যাস। সবসময় কেবল কাউন, বাজরা বা সূর্যমুখীর বীজ দিলে শরীরে ভিটামিন এ ও ক্যালসিয়ামের তীব্র ঘাটতি দেখা দেয় এবং চর্বি জমে লিভার অকেজো হয়ে পড়ে।',
      'এর ফলে পাখির পালক উঠে যাওয়া, শ্বাসকষ্ট এবং মেয়ে পাখির ক্ষেত্রে ডিম আটকে যাওয়ার (Egg binding) মতো মারাত্মক প্রাণঘাতী জটিলতা তৈরি হয়।',
      'আদর্শ খাদ্যতালিকা: ৫০-৬০% ভালো মানের সীডমিক্স, ৩০% তাজা শাকসবজি (ধনেপাতা, ব্রোকলি, গাজর কুচি, সিদ্ধ মিষ্টি ভুট্টা) এবং নিয়মিত মিনারেল ব্লক বা ক্যাটলফিশ বোন খাঁচায় রাখুন। দিনে অন্তত দুইবার পানি পরিবর্তন করুন।'
    ],
    keyTakeawaysEn: [
      'Avoid all-seed diets; supplement with fresh dark leafy greens daily.',
      'Never feed avocado, apple seeds, chocolate, or salty human crackers.',
      'Provide cuttlefish bone for essential calcium replenishment.'
    ],
    keyTakeawaysBn: [
      'শুধুমাত্র বীজের ওপর নির্ভরশীল না রেখে প্রতিদিন তাজা শাকসবজি দিন।',
      'অ্যাভোকাডো, আপেলের বীজ, চকোলেট ও লবণযুক্ত বিস্কুট পাখির জন্য বিষাক্ত।',
      'ক্যালসিয়ামের জন্য খাঁচায় সবসময় সমুদ্রের ফেনা ঝুলিয়ে রাখুন।'
    ],
    author: 'Dr. Sydur Rahaman, DVM (CVASU)',
    readTime: '5 min',
    date: 'October 2025',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'article-cat-urinary-crystals',
    slug: 'male-cat-urinary-obstruction-flutd-guide',
    category: 'Emergency First Aid',
    categoryBn: 'জরুরি প্রাথমিক চিকিৎসা',
    titleEn: 'Male Cat Urinary Blockage (FLUTD): The Silent Emergency',
    titleBn: 'পুরুষ বিড়ালের প্রস্রাব আটকে যাওয়া: নীরব কিন্তু প্রাণঘাতী জরুরি অবস্থা',
    summaryEn: 'Recognizing Feline Lower Urinary Tract Disease before bladder rupture and toxic potassium buildup occurs.',
    summaryBn: 'লিটার বক্সে বারবার বসেও প্রস্রাব না হওয়া কেন ২৪ ঘণ্টার মধ্যে জরুরি ক্যাথেটারাইজেশন দাবি করে।',
    contentEn: [
      'Feline Lower Urinary Tract Disease (FLUTD) with urethral obstruction is a rapid-onset, life-threatening emergency primarily affecting neutered and indoor male cats due to their narrow, elongated urethra.',
      'Mineral crystals (struvite or calcium oxalate) combine with inflammatory mucus to form a plug. When a cat cannot void urine, toxins and potassium back up into the bloodstream. Within 24–48 hours, hyperkalemia causes cardiac arrest or bladder rupture.',
      'Signs: The cat makes frequent trips to the litter box, vocalizes loudly in pain, licks genital area obsessively, or passes only tiny drops of blood-tinged urine. If your male cat hasn’t urinated in 12 hours, do not wait until morning—seek emergency catheterization immediately!'
    ],
    contentBn: [
      'পুরুষ বিড়ালের মূত্রনালী অত্যন্ত সরু হওয়ায় সেখানে প্রস্রাবের ক্রিস্টাল ও শ্লেষ্মা আটকে গিয়ে প্রস্রাবের পথ সম্পূর্ণ বন্ধ হয়ে যেতে পারে। এটি অত্যন্ত দ্রুত জটিল আকার ধারণ করা একটি জরুরি অবস্থা।',
      'প্রস্রাব বন্ধ থাকলে রক্তে বিষাক্ত পটাশিয়াম ও ইউরিয়া বেড়ে যায়। ২৪ থেকে ৪৮ ঘণ্টার মধ্যে চিকিৎসা না পেলে মূত্রথলি ফেটে যেতে পারে অথবা হার্ট অ্যাটাক হতে পারে।',
      'লক্ষণ: বিড়াল বারবার লিটার বক্সে যেয়ে গোঙায়, লিঙ্গ বারবার চাটে, পেটে হাত দিলে ব্যথা পায় বা কেবল কয়েক ফোঁটা রক্তমিশ্রিত প্রস্রাব বের হয়। ১২ ঘণ্টার বেশি প্রস্রাব বন্ধ থাকলে বিন্দুমাত্র দেরি না করে জরুরিভাবে ক্যাথেটারাইজেশন করাতে হবে।'
    ],
    keyTakeawaysEn: [
      'Straining without urine is an emergency, NOT simple constipation.',
      'Feed high-moisture wet food and increase water fountains at home.',
      'Seek veterinary triage immediately to relieve urethral pressure.'
    ],
    keyTakeawaysBn: [
      'লিটার বক্সে কষ্ট পাওয়াকে কখনই সাধারণ কোষ্ঠকাঠিন্য মনে করবেন না।',
      'ড্রাই ফুডের পাশাপাশি পর্যাপ্ত ভেজা খাবার দিন এবং পানির পাত্র বৃদ্ধি করুন।',
      'লক্ষণ দেখামাত্র বিলম্ব না করে তাৎক্ষণিক ক্যাথেটারাইজেশন সেবা গ্রহণ করুন।'
    ],
    author: 'Dr. Sydur Rahaman, DVM (CVASU)',
    readTime: '5 min',
    date: 'September 2025',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Tanvir Ahmed',
    location: 'Mirpur-10, Dhaka',
    petName: 'Charlie',
    petType: 'Golden Retriever (2 yrs)',
    rating: 5,
    commentEn: 'Dr. Sydur Rahaman performed life-saving emergency surgery on Charlie after he swallowed a foreign plastic object. His calm composure, precise surgical skills, and detailed post-op dressing guidelines brought Charlie back to full energy in just one week. Highly recommended for any surgery in Dhaka!',
    commentBn: 'আমার গোল্ডেন রিট্রিভার চার্লি খেলতে যেয়ে প্লাস্টিক গিলে ফেলেছিল। ডা. সাইদুর রাহমান অত্যন্ত দক্ষতার সাথে পেটের সার্জারি করে সেটি বের করেন। এক সপ্তাহের মধ্যে চার্লি আবার হাসিখুশি ও সুস্থ। ঢাকায় এমন দক্ষ ও আন্তরিক সার্জন পাওয়া সত্যিই ভাগ্যের ব্যাপার!',
    date: 'February 2026',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    clientName: 'Nusrat Jahan',
    location: 'Pallabi, Mirpur, Dhaka',
    petName: 'Snowball',
    petType: 'Persian Cat (1 yr)',
    rating: 5,
    commentEn: 'I was terrified of spaying my Persian female cat Snowball because of anesthesia risks. Dr. Sydur took 20 minutes to explain every step, monitored her vitals, and the incision was so tiny and neat. Snowball recovered smoothly without even needing a plastic cone. Thank you doctor!',
    commentBn: 'আমার পার্সিয়ান বিড়াল স্নোবলের স্পেয়িং অপারেশন নিয়ে খুব চিন্তায় ছিলাম। ডা. সাইদুর ভাই আমাকে প্রতিটি বিষয় বুঝিয়ে বলেন এবং খুব ছোট ইনসিশনে নিখুঁতভাবে সার্জারি করেন। স্নোবল খুব দ্রুত সুস্থ হয়ে ওঠে। ওনার চিকিৎসা সত্যিই অসাধারণ!',
    date: 'January 2026',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    clientName: 'Farhan Kabir',
    location: 'Sector 4, Uttara, Dhaka',
    petName: 'Kiwi',
    petType: 'Cockatiel Bird',
    rating: 5,
    commentEn: 'Finding a vet in Dhaka who truly understands bird medicine is extremely rare. When Kiwi had severe egg-binding and was gasping at the cage bottom, Dr. Sydur saved her life with gentle calcium therapy and micro-care. He is a genuine animal lover.',
    commentBn: 'ঢাকায় পাখির রোগ সঠিকভাবে বোঝেন এমন ভেট ডাক্তার পাওয়া খুব কঠিন। আমার ককাটেল কিউই যখন ডিম আটকা পড়ে খাঁচায় ছটফট করছিল, ডা. সাইদুর ভাইয়ের চিকিৎসায় ও নতুন জীবন পায়। পাখির অভিভাবক হিসেবে আমি তাঁর প্রতি চিরকৃতজ্ঞ।',
    date: 'December 2025',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-4',
    clientName: 'Sharmin Akter',
    location: 'Dhanmondi, Dhaka',
    petName: 'Simba',
    petType: 'French Bulldog (1.5 yrs)',
    rating: 5,
    commentEn: 'Simba suffered from chronic dermatitis and severe ear infections for months. Other clinics kept prescribing random antibiotics. Dr. Sydur did a skin scraping test, identified the fungal problem, and prescribed the right medicated wash and food. Simba stopped scratching in 5 days!',
    commentBn: 'আমার ফ্রেঞ্চ বুলডগ সিম্বা দীর্ঘ কয়েক মাস ধরে ত্বকের অ্যালার্জি ও কানের ইনফেকশনে ভুগছিল। ডা. সাইদুর স্ক্র্যাপিং টেস্ট করে সঠিক ফাঙ্গাল রোগ নির্ণয় করেন। মাত্র ৫ দিনের মধ্যে চুলকানি পুরোপুরি বন্ধ হয়ে যায়।',
    date: 'November 2025',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-5',
    clientName: 'Mahfuzur Rahman',
    location: 'Banani, Dhaka',
    petName: 'Bunny',
    petType: 'Netherland Dwarf Rabbit',
    rating: 5,
    commentEn: 'When my rabbit stopped eating due to overgrown back molars, Dr. Sydur safely trimmed the spurs under gentle sedation. He also designed a balanced hay-based diet. He knows how to handle delicate small pets with exceptional empathy.',
    commentBn: 'দাঁত বড় হয়ে যাওয়ার কারণে আমার খরগোশ খাওয়া বন্ধ করে দিয়েছিল। ডা. সাইদুর ভাই অত্যন্ত যত্ন সহকারে দাঁত ট্রিম করে দেন এবং সঠিক ডায়েট চার্ট তৈরি করে দেন। খরগোশ ও ছোট প্রাণীর জন্য উনি সেরা ডাক্তার।',
    date: 'October 2025',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments & Consultations',
    questionEn: 'Where does Dr. Sydur Rahaman consult patients in Dhaka?',
    questionBn: 'ডা. সাইদুর রাহমান ঢাকায় কোথায় রোগী দেখেন?',
    answerEn: 'Dr. Sydur Rahaman consults as a Veterinary Surgeon at Bingo Pet Care located in Pallabi, Mirpur, Dhaka-1216. You can book an appointment directly through this website or contact him via WhatsApp for priority scheduling and emergency guidance.',
    answerBn: 'ডা. সাইদুর রাহমান ঢাকার মিরপুর পল্লবীতে অবস্থিত বিঙ্গো পেট কেয়ারে নিয়মিত রোগী দেখেন ও সার্জারি করেন। আপনি এই ওয়েবসাইটের মাধ্যমে অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ পাঠিয়ে অ্যাপয়েন্টমেন্ট শিডিউল করতে পারেন।'
  },
  {
    id: 'faq-2',
    category: 'Surgery & Anesthesia',
    questionEn: 'What precautions should I take before my pet’s surgery (Spay/Neuter)?',
    questionBn: 'পোষ্যের অপারেশনের (স্পে/নিউটারিং) আগে কী কী সতর্কতা অবলম্বন করতে হবে?',
    answerEn: 'Pets must be fasted from food for 8–10 hours before elective surgery to prevent aspiration under anesthesia (water may be kept until 2 hours prior). A pre-anesthetic blood count (CBC) is recommended to verify kidney and liver function.',
    answerBn: 'অপারেশনের দিন সকালের ৮–১০ ঘণ্টা আগে থেকে খাবার বন্ধ রাখতে হবে (পানি অপারেশনের ২ ঘণ্টা আগে পর্যন্ত দেওয়া যাবে)। অ্যানেস্থেশিয়ার নিরাপত্তা নিশ্চিত করতে অপারেশনের পূর্বে রক্তের প্রাথমিক সিবিসি পরীক্ষা করা উত্তম।'
  },
  {
    id: 'faq-3',
    category: 'Vaccinations',
    questionEn: 'At what age should I start vaccinating my kitten or puppy in Bangladesh?',
    questionBn: 'বাংলাদেশে বিড়াল বা কুকুরছানাকে কোন বয়স থেকে টিকা দেওয়া শুরু করতে হয়?',
    answerEn: 'Puppies should start their DHPPi vaccine at 6–8 weeks of age, followed by two boosters at 3–4 week intervals and rabies at 4 months. Kittens start their Tricat vaccine at 8 weeks, booster at 11–12 weeks, and rabies at 16 weeks.',
    answerBn: 'কুকুরছানাকে ৬–৮ সপ্তাহ বয়সে প্রথম ৫-ইন-১ টিকা এবং বিড়ালছানাকে ৮ সপ্তাহ বয়সে ট্রাইক্যাট টিকা দিতে হয়। এরপর নির্দিষ্ট সময় পর বুস্টার ও ৪ মাস বয়সে জলাতঙ্কের টিকা দিতে হয়।'
  },
  {
    id: 'faq-4',
    category: 'Emergency Care',
    questionEn: 'What should I do if my pet consumes something toxic like chocolate or rat poison?',
    questionBn: 'পোষ্য বিষাক্ত কিছু যেমন চকোলেট বা ইঁদুরের বিষ খেয়ে ফেললে তাৎক্ষণিক কী করবেন?',
    answerEn: 'Do NOT induce vomiting with salt water as this causes fatal salt toxicity. Keep the packaging/name of the poison, note the exact time of ingestion, and immediately contact Dr. Sydur or rush to an emergency veterinary clinic for systemic antidote therapy and activated charcoal administration.',
    answerBn: 'লবণ-পানি খাইয়ে বমি করানোর চেষ্টা করবেন না, এতে শরীরে লবণের বিষক্রিয়ায় মৃত্যু হতে পারে। কী বিষ বা পদার্থ খেয়েছে তার নাম বা প্যাকেট সাথে রাখুন এবং কালক্ষেপণ না করে দ্রুত ডাক্তারের কাছে নিয়ে আসুন।'
  },
  {
    id: 'faq-5',
    category: 'Diet & General Care',
    questionEn: 'Can I feed cow’s milk to my rescued kitten or puppy?',
    questionBn: 'উদ্ধার করা বিড়াল বা কুকুরছানাকে কি গরুর দুধ খাওয়ানো যাবে?',
    answerEn: 'No! Cow\'s milk contains high lactose levels which puppies and kittens cannot digest, causing severe dehydration, bloating, and diarrhea. Use veterinary-formulated kitten/puppy milk replacer (KMR) or goat milk in consultation with a veterinarian.',
    answerBn: 'না! গরুর দুধে উচ্চমাত্রার ল্যাকটোজ থাকে যা ছানারা হজম করতে পারে না। ফলে মারাত্মক ডায়রিয়া ও ডিহাইড্রেশন হতে পারে। চিকিৎসকের পরামর্শে পেট মিল্ক রিপ্লেসার (KMR) অথবা ছাগলের দুধ ব্যবহার করুন।'
  },
  {
    id: 'faq-6',
    category: 'Appointments & Consultations',
    questionEn: 'Can I request an online teleconsultation or WhatsApp advice?',
    questionBn: 'অনলাইন বা হোয়াটসঅ্যাপের মাধ্যমে কি প্রাথমিক স্বাস্থ্য পরামর্শ নেওয়া সম্ভব?',
    answerEn: 'Yes! For non-emergency guidance, diet reviews, lab report second opinions, and post-surgery recovery check-ins, Dr. Sydur Rahaman offers direct guidance via WhatsApp and video consults.',
    answerBn: 'হ্যাঁ! টেস্ট রিপোর্ট পর্যালোচনা, খাদ্যাভ্যাস ও রুটিন পরামর্শের জন্য হোয়াটসঅ্যাপে সরাসরি পরামর্শ নেওয়ার সুযোগ রয়েছে। তবে জটিল অসুস্থতায় সশরীরে ক্লিনিকে নিয়ে আসা আবশ্যক।'
  }
];
