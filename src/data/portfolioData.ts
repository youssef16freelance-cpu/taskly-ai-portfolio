/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import generated project assets
import noorCafeImg from '../assets/images/noor_cafe_branding_1790858054387.jpg';
import pulseGymImg from '../assets/images/pulse_gym_campaign_1790858070905.jpg';
import kicksCornerImg from '../assets/images/kicks_corner_sneakers_1790858082664.jpg';
import lumenSkinImg from '../assets/images/lumen_skin_cosmetics_1790858094718.jpg';
import vexlumeLogoImg from '../assets/images/vexlume_profile_logo.jpg';

// =========================================================================
// 1. OWNER & STUDIO CONFIGURATION (EDIT YOUR PERSONAL DETAILS HERE)
// =========================================================================

/**
 * Official WhatsApp phone number.
 */
export const WHATSAPP_NUMBER = "+201034474227";

/**
 * Official contact email address.
 */
export const CONTACT_EMAIL = "youssef.16freelance@gmail.com";

/**
 * Replace with your actual social media profiles.
 * These links are wired to the website navigation and contact section.
 */
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/YOUR_INSTAGRAM_URL",
  tiktok: "https://tiktok.com/@YOUR_TIKTOK_URL",
  facebook: "https://facebook.com/YOUR_FACEBOOK_URL"
};

/**
 * Creator Profile Information
 */
export const OWNER_PROFILE = {
  name: "Vexlume",
  studioName: "Taskly AI",
  avatarUrl: vexlumeLogoImg, // Official VEXLUME logo image
  role: {
    en: "Creative Director · Visual Designer · Content Strategist",
    ar: "مدير إبداعي · مصمم بصري · استراتيجي محتوى"
  },
  bio: {
    en: "I build brand identities, high-impact content, and conversion-focused creative assets for modern businesses that want to stand out from the noise.",
    ar: "أبني هويات بصرية ومحتوى عالي التأثير وتصاميم موجهة للنمو للعلامات التجارية التي تسعى للتميز والريادة."
  },
  pillars: {
    en: {
      who: {
        title: "Who I Am",
        text: "I am Vexlume, a multidisciplinary creative designer and the founder of Taskly AI studio. With a focus on visual storytelling and digital identity, I transform brands into unforgettable experiences."
      },
      what: {
        title: "What I Do",
        text: "I create comprehensive visual brand identities, high-performing social media campaigns, scroll-stopping ad creatives, and structured visual design systems tailored for commercial growth."
      },
      difference: {
        title: "What Makes My Work Different",
        text: "I treat design as commercial communication rather than just decoration. Every color harmony, typographical hierarchy, and composition is engineered for retention, clarity, and client trust."
      },
      clients: {
        title: "Who I Work With",
        text: "I collaborate with ambitious startups, boutique retail brands, specialty coffee shops, digital creators, and forward-thinking businesses aiming to build lasting authority."
      }
    },
    ar: {
      who: {
        title: "من أنا",
        text: "أنا Vexlume، مصمم إبداعي ومؤسس استوديو Taskly AI. أركز على السرد البصري وبناء الهوية الرقمية لتحويل العلامات التجارية إلى تجارب بصرية لا تُنسى."
      },
      what: {
        title: "ماذا أقدم",
        text: "أقوم بتصميم هويات بصرية متكاملة، وحملات سوشيال ميديا جذابة، وإعلانات تلفت الأنظار، وأنظمة تصميم بصري مصممة لزيادة التفاعل وبناء المصداقية."
      },
      difference: {
        title: "ما الذي يميز أعمالي",
        text: "أتعامل مع التصميم كأداة تواصل تجاري استراتيجي وليس مجرد زينة. كل تدرج لوني واختيار للخطوط وترتيب بصري مصمم لجذب الانتباه وبناء ثقة العملاء."
      },
      clients: {
        title: "نوعية العملاء والمشاريع",
        text: "أعمل مع الشركات الناشئة الطموحة، المتاجر المتميزة، المقاهي المتخصصة، وصناع المحتوى والشركات التي ترفض القوالب التقليدية وتبحث عن التأثير الحقيقي."
      }
    }
  }
};

// =========================================================================
// 2. SKILLS & TOOLS (EDITABLE LIST)
// =========================================================================

export interface ToolItem {
  name: string;
  category: string;
  categoryAr: string;
  level: string;
}

export const TOOLS: ToolItem[] = [
  { name: "Photoshop", category: "Photo Manipulation & Retouching", categoryAr: "معالجة وتعديل الصور", level: "Expert" },
  { name: "Illustrator", category: "Vector & Brand Identity", categoryAr: "تصميم المتجهات والشعارات", level: "Expert" },
  { name: "Figma", category: "UI/UX & Design Systems", categoryAr: "تصميم واجهات وأنظمة بصرية", level: "Advanced" },
  { name: "After Effects", category: "Motion Graphics & Animation", categoryAr: "موشن جرافيك وتحريك", level: "Advanced" },
  { name: "Premiere Pro", category: "Cinematic Video Editing", categoryAr: "مونتاج الفيديو الاحترافي", level: "Advanced" },
  { name: "Canva", category: "Fast Turnaround Social Kits", categoryAr: "قوالب سريعة للمحتوى", level: "Proficient" }
];

// =========================================================================
// 3. SERVICES (EDITABLE SERVICES LIST)
// =========================================================================

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "branding",
    titleEn: "Branding & Identity",
    titleAr: "الهوية البصرية والعلامة التجارية",
    shortDescEn: "Distinct logo design, color systems, typography hierarchy, and cohesive brand guidelines that look unified everywhere your brand appears.",
    shortDescAr: "تصميم شعارات فريدة، أنظمة ألوان متناسقة، قواعد خطوط، وأدلة استخدام للهوية البصرية لضمان مظهر احترافي وموحد في كل مكان.",
    deliverablesEn: ["Primary & Secondary Logos", "Color Palettes & Typography", "Brand Guidelines Book", "Packaging & Stationery Guidelines"],
    deliverablesAr: ["شعار رئيسي وثانوي", "لوحة ألوان وقواعد خطوط", "دليل استخدام الهوية البصرية", "تصاميم المطبوعات والتغليف"]
  },
  {
    id: "social",
    titleEn: "Social Media Design",
    titleAr: "تصميم السوشيال ميديا",
    shortDescEn: "High-retention social posts, carousels, banner systems, and story layouts designed to stop the scroll and build an engaged following.",
    shortDescAr: "بوستات سوشيال ميديا مدروسة، كاروسيل، بنرات رقمية، وقوالب ستوري مصممة لإيقاف التمرير وبناء جمهور متفاعل.",
    deliverablesEn: ["Instagram Carousel Templates", "Campaign Cover Graphics", "Promotional Story Assets", "Highlight & Profile Systems"],
    deliverablesAr: ["قوالب كاروسيل إنستغرام", "أغلفة وبنرات الحملات", "تصاميم ستوري ترويجية", "أيقونات الهايلايت والبروفايل"]
  },
  {
    id: "content",
    titleEn: "Content Creation",
    titleAr: "صناعة المحتوى الإبداعي",
    shortDescEn: "Strategic visual storytelling, product presentations, and digital content concepts tailored to what your audience actively consumes.",
    shortDescAr: "سرد بصري استراتيجي، أفكار لعرض المنتجات، ومفاهيم محتوى رقمي مبنية على اهتمامات جمهورك الحقيقي.",
    deliverablesEn: ["Creative Concept Decks", "Visual Content Calendars", "Product Presentation Graphics", "Educational Visual Decks"],
    deliverablesAr: ["خطط المحتوى الإبداعي", "جداول نشر المحتوى البصري", "تصاميم عرض المنتجات", "بطاقات بصرية تعليمية"]
  },
  {
    id: "video",
    titleEn: "Video Editing",
    titleAr: "مونتاج الفيديو والموشن",
    shortDescEn: "Short-form video editing, Reels/TikTok cuts, motion typography, and sound design timed for high watch-time and platform virality.",
    shortDescAr: "مونتاج فيديوهات قصيرة، ريلز وتيك توك، نصوص متحركة ومؤثرات صوتية محسوبة لتحقيق أعلى معدل مشاهدة.",
    deliverablesEn: ["TikTok & Reel Short Cuts", "Dynamic Text Animations", "Color Grading & Sound Sync", "Thumbnail & Hook Design"],
    deliverablesAr: ["مونتاج ريلز وتيك توك", "نصوص ومؤثرات حركية", "تصحيح ألوان ومزامنة صوت", "تصميم الصور المصغرة والمقدمات"]
  },
  {
    id: "ui",
    titleEn: "UI / Visual Design",
    titleAr: "تصميم الواجهات البصرية",
    shortDescEn: "Clean landing page layouts, high-converting digital assets, web banners, and modern aesthetic interfaces for digital products.",
    shortDescAr: "تصميم واجهات مواقع وصفحات هبوط عصرية، بنرات إعلانية رقمية، وتجارب استخدام جذابة للخدمات الرقمية.",
    deliverablesEn: ["Landing Page Visuals", "Component Design Systems", "Web Banners & Hero Assets", "Responsive Layout Specs"],
    deliverablesAr: ["تصاميم صفحات الهبوط", "أنظمة المكونات البصرية", "بنرات الويب وأصول الهيدر", "مخططات متجاوبة لجميع الشاشات"]
  }
];

// =========================================================================
// 4. MY PROCESS (4-STEP WORKFLOW)
// =========================================================================

export interface ProcessStep {
  number: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    titleEn: "Discover",
    titleAr: "اكتشاف وفهم",
    descriptionEn: "We define your brand positioning, core audience, competitors, and project goals to build a solid foundation.",
    descriptionAr: "نبدأ بفهم أهداف مشروعك، دراسة المنافسين وتحديد الجمهور المستهدف لوضع أساس قوي لكل خطوة قادمة."
  },
  {
    number: "02",
    titleEn: "Strategy",
    titleAr: "تخطيط واستراتيجية",
    descriptionEn: "We develop the creative concept, visual moodboard, color palette direction, and messaging tone before designing.",
    descriptionAr: "نحدد التوجه البصري، لوحة الأفكار (مودبورد)، لوحة الألوان ونبرة الخطاب لضمان وضوح المسار الإبداعي."
  },
  {
    number: "03",
    titleEn: "Create",
    titleAr: "تنفيذ وتصميم",
    descriptionEn: "High-craft execution in industry-standard tools, refining layouts, typography, and motion details with precision.",
    descriptionAr: "تنفيذ التصاميم بدقة عالية باستخدام أفضل الأدوات، وصقل الخطوط والمساحات والحركات بكل عناية."
  },
  {
    number: "04",
    titleEn: "Deliver",
    titleAr: "تسليم ودعم",
    descriptionEn: "Organized export of production-ready assets across all required formats, accompanied by guidelines for consistent application.",
    descriptionAr: "تسليم ملفات العمل المنظمة بجميع الصيغ المطلوبة جاهزة للاستخدام المباشر مع إرشادات التطبيق."
  }
];

// =========================================================================
// 5. PROJECTS & CASE STUDY SYSTEM (EDITABLE DATA STRUCTURE)
// =========================================================================

export interface CaseStudyData {
  overviewEn: string;
  overviewAr: string;
  challengeEn: string;
  challengeAr: string;
  solutionEn: string;
  solutionAr: string;
  processEn: string[];
  processAr: string[];
  resultsEn: string;
  resultsAr: string;
  galleryImages: string[];
  beforeAfter?: {
    beforeLabelEn: string;
    beforeLabelAr: string;
    afterLabelEn: string;
    afterLabelAr: string;
    descriptionEn: string;
    descriptionAr: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  categoryEn: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  tools: string[];
  link?: string;
  isConcept: boolean; // Transparent tag: Concept vs. Client project
  caseStudy: CaseStudyData;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "noor-cafe",
    title: "Noor Café",
    categoryEn: "Branding & Packaging",
    categoryAr: "هوية بصرية وتغليف",
    descriptionEn: "Artisanal specialty coffee visual identity featuring warm earth tones, tactile packaging, and cohesive morning social media aesthetics.",
    descriptionAr: "هوية بصرية متكاملة لمقهى قهوة مختصة تعتمد على الدرجات الدافئة، وتغليف ورقي فاخر، ومحتوى سوشيال ميديا مريح للأعين.",
    image: noorCafeImg,
    tools: ["Illustrator", "Photoshop"],
    link: "#",
    isConcept: true,
    caseStudy: {
      overviewEn: "Noor Café is a specialty coffee brand concept conceived around the idea of mindful mornings and artisan craftsmanship.",
      overviewAr: "مشروع نور كافيه هو مفهوم لهوية مقهى متخصص مبني على فكرة الصباحات الهادئة والاهتمام الفائق بتفاصيل صناعة القهوة.",
      challengeEn: "Coffee shops often suffer from generic dark or overly industrial branding that blends together. The goal was to establish a calm, authentic sanctuary aesthetic.",
      challengeAr: "تعاني العديد من المقاهي من تصاميم صناعية مكررة لا تترك أثراً. كان التحدي هو ابتكار مظهر هادئ وأصيل يعكس دفء المكان.",
      solutionEn: "Developed a custom typographic wordmark, soft amber/kraft color palette, minimalist bag packaging, and morning-focused social media layouts.",
      solutionAr: "ابتكرنا شعاراً نصياً مميزاً، لوحة ألوان ترابية دافئة، تصاميم أكياس بن بسيطة وأنيقة، وقوالب نشر صباحية تجذب عشاق القهوة.",
      processEn: [
        "Researching specialty coffee consumer rituals and aesthetic benchmarks",
        "Developing handcrafted custom lettering and minimalist cup seal iconography",
        "3D packaging mockup rendering and tactile print substrate specifications",
        "Social media carousel framework for seasonal origins and brew guides"
      ],
      processAr: [
        "دراسة سلوك عشاق القهوة المختصة والتوجهات الجمالية العالمية",
        "رسم وتصميم الخطوط الخاصة والأيقونات التوضيحية للأكواب والمنتجات",
        "محاكاة نماذج التغليف ثلاثية الأبعاد واختيار خامات الطباعة الملموسة",
        "تصميم إطار بوستات وكاروسيل لمواقع التواصل تشرح مصادر البن وطرق التحضير"
      ],
      resultsEn: "A balanced, production-ready brand system ready for physical packaging, digital menus, and cohesive social feeds.",
      resultsAr: "نظام هوية بصرية متكامل وقابل للتطبيق الفوري على العبوات الورقية، القوائم الرقمية، وحسابات التواصل الاجتماعي.",
      galleryImages: [noorCafeImg],
      beforeAfter: {
        beforeLabelEn: "Generic Stock Packaging",
        beforeLabelAr: "التغليف التقليدي الشائع",
        afterLabelEn: "Custom Artisanal Identity",
        afterLabelAr: "الهوية الحرفية المخصصة",
        descriptionEn: "Elevating standard generic packaging into a collectible lifestyle brand experience that commands premium pricing.",
        descriptionAr: "الارتقاء بالمنتج من عبوة عادية إلى علامة تجارية ذات قيمة مضافة تبرر الأسعار الممتازة وتكسب ولاء العملاء."
      }
    }
  },
  {
    id: "pulse-gym",
    title: "Pulse Gym",
    categoryEn: "Campaign & Visuals",
    categoryAr: "حملة إعلانية ومحتوى",
    descriptionEn: "High-intensity '30 Days. No Excuses' campaign designed with electric violet and cyan studio lighting to boost membership signups.",
    descriptionAr: "حملة إعلانية حماسية تحت شعار '30 يوم. من غير أعذار' باستخدام إضاءات النيون والسيان لتحفيز الاشتراكات الجديدة.",
    image: pulseGymImg,
    tools: ["Photoshop", "After Effects", "Illustrator"],
    link: "#",
    isConcept: true,
    caseStudy: {
      overviewEn: "Pulse Gym is an athletic performance facility concept focused on functional fitness, high-energy coaching, and disciplined transformation.",
      overviewAr: "مشروع بلس جيم هو مفهوم لمركز تدريب رياضي متطور يركز على اللياقة البدنية والتحول البدني القائم على الانضباط.",
      challengeEn: "Fitness marketing is heavily saturated with cliché stock photos. The client needed visuals with genuine intensity, grit, and urgency.",
      challengeAr: "سوق اللياقة مليء بالصور المكررة والمستهلكة. كان التحدي خلق إحساس قوي بالحماس والجدية والرغبة في البدء فوراً.",
      solutionEn: "Engineered high-contrast visual posters using deep purple shadows, laser cyan rim lighting, and bold condensed typography.",
      solutionAr: "صممنا ملصقات ومحتوى رقمي عالي التباين بظلال بنفسجية عميقة وإضاءات سيان خاطفة وخطوط عريضة ذات طابع رياضي قوي.",
      processEn: [
        "Auditing high-conversion athletic campaign visuals and typography pacing",
        "Compositing high-contrast athlete key visual with customized neon rim glows",
        "Designing modular social ad formats (Reels covers, 1:1 feeds, 9:16 story ads)",
        "Writing crisp, direct copy that creates urgency without sounding aggressive"
      ],
      processAr: [
        "تحليل الحملات الرياضية الأعلى تحويلاً ودراسة إيقاع الخطوط والألوان",
        "معالجة ودمج الصور الرياضية بإضاءات نيون حادة وظلال درامية",
        "تجهيز تصاميم إعلانية متعددة المقاسات (ريلز، بوستات مربعة، وإعلانات ستوري)",
        "صياغة نصوص إعلانية محفزة ومباشرة تدعو لاتخاذ القرار فوراً"
      ],
      resultsEn: "A high-impact campaign toolkit with strong visual cohesion across billboards, digital ads, and community social templates.",
      resultsAr: "حقيبة إعلانية متكاملة ذات طابع بصري موحد جاهزة للاستخدام في الإعلانات الممولة واللافتات ولوحات الصالات.",
      galleryImages: [pulseGymImg],
      beforeAfter: {
        beforeLabelEn: "Cliché Fitness Poster",
        beforeLabelAr: "بوستات الرياضة التقليدية",
        afterLabelEn: "High-Energy Athletic Identity",
        afterLabelAr: "الهوية الرياضية الديناميكية",
        descriptionEn: "Replacing generic gym flyers with a brand campaign that conveys professional athletic prestige.",
        descriptionAr: "استبدال الملصقات العشوائية بحملة رياضية متكاملة تمنح المركز هيبة واحترافية تجذب المشتركين الجادين."
      }
    }
  },
  {
    id: "kicks-corner",
    title: "Kicks Corner",
    categoryEn: "Ad Design & Copywriting",
    categoryAr: "تصميم إعلاني وكتابة",
    descriptionEn: "Minimalist streetwear sneaker campaign focused on clear value propositions ('2 pairs. 1 price') and architectural product composition.",
    descriptionAr: "حملة إعلانية لمتجر أحذية وسنيكرز عصري تركز على وضوح العرض التجاري وتنسيق بصري نظيف ومباشر.",
    image: kicksCornerImg,
    tools: ["Photoshop", "Illustrator"],
    link: "#",
    isConcept: true,
    caseStudy: {
      overviewEn: "Kicks Corner is an urban footwear concept store celebrating contemporary sneaker culture with clean Scandinavian minimalism.",
      overviewAr: "كيكس كورنر هو مفهوم لمتجر سنيكرز شبابي يحتفي بثقافة الأحذية العصرية بأسلوب بصري بسيط وأنيق.",
      challengeEn: "Retail discount promotions often look chaotic, cluttered, and cheap. The challenge was to communicate a promotional offer while keeping high-end sneakerhead credibility.",
      challengeAr: "غالباً ما تبدو العروض الترويجية والخصومات فوضوية وتقلل من قيمة البراند. كان الهدف تقديم عرض مغرٍ مع الحفاظ على الفخامة.",
      solutionEn: "Crafted a clean architectural layout with generous negative space, geometric color blocks, and bold Swiss-style typography.",
      solutionAr: "اعتمدنا تصميماً هندسياً بنظام الشبكات السويسرية، ومساحات فارغة مريحة، وخطوط واضحة تركز على تفاصيل الحذاء والعرض.",
      processEn: [
        "Analyzing luxury streetwear retail aesthetics and promotional hierarchies",
        "Studio lighting retouching to emphasize leather texture and sole profile",
        "A/B layout testing for headline readability on mobile screens",
        "Final packaging stickers and weekend flash-sale social templates"
      ],
      processAr: [
        "تحليل تصاميم متاجر أزياء الشارع العالمية وطريقة إبراز العروض",
        "معالجة إضاءة المنتج لإبراز خامات الجلد والتفاصيل الدقيقة للسنيكر",
        "اختبار وضوح النصوص الترويجية على شاشات الهواتف بمختلف أحجامها",
        "تجهيز قوالب إعلانات عروض نهاية الأسبوع وملصقات التغليف"
      ],
      resultsEn: "A refined commercial campaign that elevates promotional sales into aspirational design pieces.",
      resultsAr: "حملة تجارية أنيقة ترفع من قيمة العرض الترويجي ليظهر كعمل فني مرغوب يزيد من المبيعات.",
      galleryImages: [kicksCornerImg],
      beforeAfter: {
        beforeLabelEn: "Crowded Discount Flyer",
        beforeLabelAr: "فلاير الخصومات العشوائي",
        afterLabelEn: "Editorial Streetwear Promotion",
        afterLabelAr: "إعلان أزياء عصري ونظيف",
        descriptionEn: "Transforming cluttered discount graphics into an editorial-grade campaign that protects brand value.",
        descriptionAr: "تحويل إعلانات التخفيضات المزدحمة إلى إعلانات راقية تحافظ على مكانة العلامة التجارية وتجذب الزبائن."
      }
    }
  },
  {
    id: "lumen-skin",
    title: "Lumen Skin",
    categoryEn: "Brand Identity & Beauty",
    categoryAr: "هوية بصرية وعناية",
    descriptionEn: "Gentle skincare visual identity with soft peach hues, travertine textures, and a calm, transparent 3-step routine concept.",
    descriptionAr: "هوية بصرية هادئة لمستحضرات عناية بالبشرة بألوان الخوخ والبيج الهادئة مع فكرة الروتين البسيط المكون من 3 خطوات.",
    image: lumenSkinImg,
    tools: ["Photoshop", "Illustrator", "Figma"],
    link: "#",
    isConcept: true,
    caseStudy: {
      overviewEn: "Lumen Skin is an organic dermatological skincare concept focusing on gentle, non-irritating essentials.",
      overviewAr: "لومن سكين هو مفهوم لعلامة مستحضرات عناية بالبشرة تركز على المكونات الطبيعية والروتين الهادئ البسيط.",
      challengeEn: "The skincare market is flooded with clinical, overwhelming jargon. The goal was to inspire trust, peace, and everyday simplicity.",
      challengeAr: "سوق العناية مليء بالمصطلحات المعقدة والتصاميم المزدحمة. كان التحدي بناء شعور بالأمان والبساطة والهدوء اليومي.",
      solutionEn: "Developed delicate serif typography, warm travertine stone backdrops, and soft ambient pastel lighting.",
      solutionAr: "صممنا خطوطاً ناعمة وأنيقة، مع خلفيات من أحجار الترافيرتين الطبيعية وإضاءات ناعمة تبرز نقاء المنتج.",
      processEn: [
        "Formulating moodboards centered around morning dew, stone textures, and soft sunlight",
        "Refining custom packaging bottle dropper labels with clear regulatory hierarchy",
        "Designing educational ingredient breakdown carousels for Instagram",
        "Creating e-commerce hero banners with soft water ripple reflections"
      ],
      processAr: [
        "بناء لوحات إلهام بصرية مستوحاة من قطرات الندى وخامات الأحجار وضوء الصباح",
        "تصميم ملصقات عبوات السيروم مع مراعاة الترتيب الواضح للمكونات",
        "تصميم بطاقات تعليمية لشرح فوائد المكونات بأسلوب مبسط وجذاب",
        "تصميم بنرات للمتجر الإلكتروني تعكس النقاء والتأثير المنعش للبشرة"
      ],
      resultsEn: "A serene, production-grade beauty brand ready for physical retail shelves and high-converting online ads.",
      resultsAr: "هوية تجارية متكاملة وجذابة تعطي انطباعاً فورياً بالجودة والنقاء وجاهزة للمتاجر الرقمية والرفوف الفعلية.",
      galleryImages: [lumenSkinImg],
      beforeAfter: {
        beforeLabelEn: "Clinical Laboratory Bottle",
        beforeLabelAr: "العبوات الطبية الجافة",
        afterLabelEn: "Warm Organic Luxury",
        afterLabelAr: "الفخامة الهادئة والطبيعية",
        descriptionEn: "Moving from cold medical packaging to warm, inviting organic beauty that customers love to display on their vanity.",
        descriptionAr: "الانتقال من المظهر الطبي الجاف إلى مظهر جمالي ناعم يشعر المستخدم بالراحة والاعتناء بالنفس."
      }
    }
  }
];

// =========================================================================
// 6. TESTIMONIALS (REAL CLIENT REVIEWS PLACEHOLDER SYSTEM)
// =========================================================================

/**
 * IMPORTANT NOTE FOR PORTFOLIO OWNER:
 * We adhere to zero-fake-data principles. These slots are clean, professional placeholders
 * explaining where your real client reviews will appear.
 *
 * To insert a real client testimonial:
 * 1. Change `isPlaceholder: false`
 * 2. Replace the name, role, company, and quote with verified feedback from your real clients.
 */
export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRoleEn: string;
  clientRoleAr: string;
  companyName: string;
  quoteEn: string;
  quoteAr: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-slot-1",
    clientName: "Client Review Slot #01",
    clientRoleEn: "Founder / Marketing Lead",
    clientRoleAr: "مؤسس / مدير تسويق",
    companyName: "Reserved for Your Client",
    quoteEn: "“Real feedback from upcoming client collaboration. Replace this text with your client's authentic review and business results.”",
    quoteAr: "“خانة مخصصة لتقييم عميل حقيقي. استبدل هذا النص بتجربة عميلك الحقيقية ورأيه في نتائج العمل وسرعة التسليم.”",
    isPlaceholder: true
  },
  {
    id: "testimonial-slot-2",
    clientName: "Client Review Slot #02",
    clientRoleEn: "E-Commerce Director",
    clientRoleAr: "مدير متجر إلكتروني",
    companyName: "Reserved for Your Client",
    quoteEn: "“Real feedback from upcoming client collaboration. Replace this text with your client's authentic review and business results.”",
    quoteAr: "“خانة مخصصة لتقييم عميل حقيقي. استبدل هذا النص برأي عميلك وتجربته في تطوير هويته البصرية أو مبيعاته.”",
    isPlaceholder: true
  },
  {
    id: "testimonial-slot-3",
    clientName: "Client Review Slot #03",
    clientRoleEn: "Brand Manager / Creator",
    clientRoleAr: "مدير علامة تجارية / صانع محتوى",
    companyName: "Reserved for Your Client",
    quoteEn: "“Real feedback from upcoming client collaboration. Replace this text with your client's authentic review and business results.”",
    quoteAr: "“خانة مخصصة لتقييم عميل حقيقي. استبدل هذا النص بشهادة شريكك أو عميلك القادم عند تسليم المشروع.”",
    isPlaceholder: true
  }
];

// =========================================================================
// 7. COMPREHENSIVE TRANSLATIONS (EN / AR)
// =========================================================================

export const TRANSLATIONS = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      langSwitch: "عربي"
    },
    hero: {
      tagline: "Creative Studio · Visual Design · Content",
      h1Line1: "We make brands",
      h1Line2: "impossible",
      h1Line3: "to scroll past.",
      bio: "Hi, I'm Vexlume. Taskly AI is my studio for design, high-impact content, copywriting, and digital marketing.",
      rotatingLabel: "We create",
      words: ["Branding", "Social Content", "Ad Visuals", "Design Systems", "Motion Assets"],
      ctaWork: "View My Work",
      ctaContact: "Let's Work Together",
      scrollHint: "Scroll to explore"
    },
    marquee: "Branding ✦ Social Content ✦ Visual Systems ✦ Copywriting ✦ Video Editing ✦ Digital Marketing ✦ ",
    services: {
      heading: "What We Do",
      subheading: "Strategic creative services designed to elevate your brand presence and convert attention into results.",
      deliverablesHeader: "Key Deliverables",
      getStarted: "Inquire about this service"
    },
    work: {
      heading: "Selected Work",
      subheading: "A curated selection of brand concepts and design systems demonstrating visual craft and commercial thinking.",
      conceptNotice: "Concept Showcase: These projects are designed to demonstrate our design caliber, aesthetic direction, and creative systems. Real client case studies will be featured here as contracts conclude.",
      viewCaseStudy: "View Case Study",
      toolsUsed: "Tools",
      conceptBadge: "Design Concept"
    },
    caseStudyModal: {
      close: "Close",
      overview: "Project Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      process: "Creative Process",
      tools: "Tools & Software",
      results: "Final Outcome",
      comparison: "Before & After Transformation",
      gallery: "Project Gallery",
      cta: "Interested in a similar project?"
    },
    process: {
      heading: "My Process",
      subheading: "A structured four-step methodology ensuring clarity, speed, and creative excellence from first brainstorm to final delivery."
    },
    skills: {
      heading: "Skills & Tools",
      subheading: "Industry-standard software and creative competencies applied daily to produce production-grade work."
    },
    about: {
      heading: "About Vexlume",
      subheading: "The creator, philosophy, and standards behind Taskly AI studio."
    },
    testimonials: {
      heading: "Client Testimonials",
      subheading: "Reserved for authentic feedback. We do not publish fabricated reviews or simulated statistics.",
      notice: "Transparency Commitment: We strictly believe in genuine client relationships. The placeholders below are reserved for reviews from ongoing and completed commercial partnerships.",
      cta: "Become Our Next Success Story"
    },
    contact: {
      heading: "Have a project in mind?",
      highlight: "Let's make it happen.",
      subheading: "Whether you need a fresh brand identity, scroll-stopping social content, or high-converting ads, let's talk.",
      serviceSelectorLabel: "What services do you need?",
      servicesList: ["Branding & Identity", "Social Media Design", "Content Creation", "Video Editing", "UI / Visual Design", "General Inquiry"],
      messageLabel: "Tell me about your project (optional)",
      messagePlaceholder: "Describe your brand, project goals, estimated timeline, or requirements...",
      whatsappBtn: "Message Me on WhatsApp",
      emailBtn: "Send Me an Email",
      socialsLabel: "Or connect via social channels:"
    },
    footer: {
      rights: "All rights reserved. Designed & built with care.",
      backToTop: "Back to top"
    }
  },
  ar: {
    nav: {
      services: "خدماتنا",
      work: "أعمالنا",
      process: "منهجية العمل",
      skills: "الأدوات",
      about: "عن المصمم",
      contact: "تواصل معنا",
      langSwitch: "EN"
    },
    hero: {
      tagline: "استوديو إبداعي · تصميم بصري · محتوى رقمي",
      h1Line1: "نخلّي براندك",
      h1Line2: "يلفت الأنظار",
      h1Line3: "من أول نظرة.",
      bio: "أهلاً، أنا Vexlume. استوديو Taskly AI هو مساحتي المتخصصة في بناء الهويات البصرية، صناعة المحتوى الجذاب، والكتابة الإعلانية والتسويق الرقمي.",
      rotatingLabel: "نقدم",
      words: ["هويات بصرية", "محتوى رقمي", "تصاميم إعلانية", "أنظمة بصرية", "موشن جرافيك"],
      ctaWork: "تصفح أعمالي",
      ctaContact: "خلّينا نشتغل سوا",
      scrollHint: "مرر للأسفل للاستكشاف"
    },
    marquee: "هوية بصرية ✦ محتوى إبداعي ✦ تصاميم إعلانية ✦ كتابة محتوى ✦ مونتاج فيديو ✦ تسويق رقمي ✦ ",
    services: {
      heading: "خدماتنا الإبداعية",
      subheading: "خدمات تصميم وتسويق استراتيجية تهدف لتعزيز حضور علامتك التجارية وتحويل انتباه المتابعين إلى نتائج ملموسة.",
      deliverablesHeader: "أبرز مخرجات الخدمة",
      getStarted: "اطلب هذه الخدمة الآن"
    },
    work: {
      heading: "أعمال مختارة",
      subheading: "مجموعة منتقاة من المشاريع والتصاميم التي تبرز جودة التنفيذ، الحس الفني، والتفكير التجاري المدروس.",
      conceptNotice: "مشاريع نموذجية: صُممت هذه الأعمال لعرض إمكانياتنا الفنية وأسلوبنا الإبداعي. سيتم إضافة تقييمات ودراسات حالات العملاء الحقيقيين تباعاً بكل شفافية.",
      viewCaseStudy: "عرض دراسة الحالة",
      toolsUsed: "الأدوات المستخدمة",
      conceptBadge: "مشروع استعراضي"
    },
    caseStudyModal: {
      close: "إغلاق",
      overview: "نظرة عامة على المشروع",
      challenge: "التحدي الإبداعي",
      solution: "الحل والتنفيذ",
      process: "خطوات العمل",
      tools: "البرامج والأدوات",
      results: "النتيجة النهائية",
      comparison: "مقارنة قبل وبعد التحسين",
      gallery: "معرض صور المشروع",
      cta: "هل ترغب في مشروع بمستوى مماثل؟"
    },
    process: {
      heading: "منهجية العمل",
      subheading: "خطوات عمل واضحة ومنظمة من أربع مراحل تضمن وضوح الرؤية وسرعة الإنجاز والوصول لأعلى جودة ممكنة."
    },
    skills: {
      heading: "المهارات والبرامج",
      subheading: "الأدوات والبرامج المعتمدة عالمياً التي نعتمد عليها يومياً لإنتاج تصاميم احترافية جاهزة للاستخدام التجاري."
    },
    about: {
      heading: "عن Vexlume والاستوديو",
      subheading: "فلسفة العمل، المعايير، والهدف وراء استوديو Taskly AI."
    },
    testimonials: {
      heading: "آراء وتقييمات العملاء",
      subheading: "خانة مخصصة حصرياً لآراء العملاء الحقيقيين. نلتزم بعدم استخدام أي تقييمات وهمية أو أرقام مصطنعة.",
      notice: "التزام بالشفافية: نؤمن بأن الثقة تبدأ من الصدق. النماذج أدناه محجوزة لآراء شركائنا في المشاريع القائمة والقادمة بمجرد اكتمالها.",
      cta: "كن قصة نجاحنا القادمة"
    },
    contact: {
      heading: "عندك مشروع في بالك؟",
      highlight: "خلّينا نحوله لواقع.",
      subheading: "سواء كنت بحاجة لهوية بصرية جديدة، بوستات سوشيال ميديا متميزة، أو تصاميم إعلانات تحقق مبيعات، يسعدني التحدث معك.",
      serviceSelectorLabel: "ما هي الخدمة التي تحتاجها؟",
      servicesList: ["الهوية البصرية والعلامة التجارية", "تصميم السوشيال ميديا", "صناعة المحتوى الإبداعي", "مونتاج الفيديو والموشن", "تصميم الواجهات البصرية", "استفسار عام"],
      messageLabel: "احكيلي عن مشروعك (اختياري)",
      messagePlaceholder: "اكتب نبذة عن مشروعك، أهدافك، الوقت المقترح للتنفيذ، أو أي متطلبات خاصة...",
      whatsappBtn: "تواصل معي عبر واتساب",
      emailBtn: "راسلني عبر البريد الإلكتروني",
      socialsLabel: "أو تابعني وتواصل معي عبر الحسابات الرسمية:"
    },
    footer: {
      rights: "جميع الحقوق محفوظة. صُمم ونُفذ باحترافية وعناية.",
      backToTop: "العودة للأعلى"
    }
  }
};
