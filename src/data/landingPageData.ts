export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  city: string;
  serviceAreas: readonly string[];
  facebookUrl: string;
  canonicalUrl: string;
  googleMapsUrl: string | null;
}

export interface NapInfo {
  name: string;
  phone: string;
  areas: readonly string[];
}

export interface SeoInfo {
  title: string;
  description: string;
  keywords: readonly string[];
  ogImage: string;
}

export interface HeroInfo {
  h1: string;
  subtitle: string;
  trustBullets: readonly string[];
  backgroundImage: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  keywords: readonly string[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface AboutInfo {
  heading: string;
  paragraphs: readonly string[];
}

export interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TestimonialItem {
  quote: string;
  serviceContext?: string;
  authorLabel: string;
}

export interface VideoItem {
  id: string;
  title: string;
  src: string;
  type: string;
}

export interface AreaItem {
  heading: string;
  description: string;
  keywords: readonly string[];
}

export type CtaBlockLocation =
  | "after-services"
  | "after-gallery-testimonials"
  | "before-footer";

export interface CtaBlock {
  id: string;
  heading: string;
  subheading?: string;
  location: CtaBlockLocation;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterAnchorLink {
  label: string;
  href: string;
}

export interface FooterInfo {
  copyright: string;
  siteBuilder: string;
  anchorLinks: readonly FooterAnchorLink[];
}

export interface SchemaAreaServed {
  name: string;
  type: "City" | "AdministrativeArea";
}

export interface SchemaInfo {
  areaServed: readonly SchemaAreaServed[];
  sameAs: readonly string[];
}

export interface AccessibilityLabels {
  resetTitle: string;
  closeTitle: string;
  menuTitle: string;
  increaseText: string;
  decreaseText: string;
  increaseTextSpacing: string;
  decreaseTextSpacing: string;
  increaseLineHeight: string;
  decreaseLineHeight: string;
  invertColors: string;
  grayHues: string;
  underlineLinks: string;
  bigCursor: string;
  readingGuide: string;
  textToSpeech: string;
  speechToText: string;
  disableAnimations: string;
  hotkeyPrefix: string;
}

export interface LandingPageData {
  business: BusinessInfo;
  nap: NapInfo;
  seo: SeoInfo;
  hero: HeroInfo;
  services: readonly ServiceItem[];
  whyChooseUs: readonly WhyChooseUsItem[];
  about: AboutInfo;
  gallery: readonly GalleryItem[];
  testimonials: readonly TestimonialItem[];
  videos: readonly VideoItem[];
  areas: readonly AreaItem[];
  ctaBlocks: readonly CtaBlock[];
  faq: readonly FaqItem[];
  footer: FooterInfo;
  schema: SchemaInfo;
  accessibilityLabels: AccessibilityLabels;
}

export const business: BusinessInfo = {
  name: "אבנא קבלן עבודות עפר",
  tagline: "עבודות עפר, חפירות ותשתיות בירושלים, מודיעין והמרכז",
  phone: "0768005948",
  phoneDisplay: "076-8005948",
  whatsappNumber: "972768005948",
  city: "ירושלים",
  serviceAreas: ["ירושלים והסביבה", "מודיעין והשפלה", "תל אביב והמרכז"],
  facebookUrl: "https://www.facebook.com/placeholder",
  canonicalUrl: "https://example.com",
  googleMapsUrl: null,
};

export const nap: NapInfo = {
  name: business.name,
  phone: business.phoneDisplay,
  areas: business.serviceAreas,
};

export const seo: SeoInfo = {
  title: "אבנא קבלן עבודות עפר | חפירות, בובקט ותשתיות בירושלים והמרכז",
  description:
    "אבנא קבלן עבודות עפר מספקת עבודות חפירה, תשתיות, בובקט, מחפרונים, פיתוח ויישור שטח בירושלים, מודיעין והמרכז. התקשרו להצעת מחיר.",
  keywords: [
    "קבלן עבודות עפר",
    "עבודות עפר בירושלים",
    "עבודות עפר במודיעין",
    "עבודות עפר במרכז",
    "קבלן חפירות",
    "עבודות בובקט",
    "עבודות מחפרון",
    "מיני מחפרון",
    "עבודות תשתית",
    "פיתוח שטח",
    "יישור שטח",
    "קבלן עפר",
  ],
  ogImage: "/og-image.jpg",
};

export const hero: HeroInfo = {
  h1: "קבלן עבודות עפר וחפירות בירושלים והמרכז",
  subtitle:
    "עבודות עפר, חפירות, תשתיות, בובקט ומחפרונים — ביצוע מקצועי, זמינות מהירה והצעת מחיר ללא התחייבות.",
  trustBullets: [
    "זמינות מהירה",
    "ציוד מקצועי",
    "עבודות עפר, חפירה ותשתיות",
    "הצעת מחיר ללא התחייבות",
  ],
  backgroundImage: "/images/hero.webp",
  logo: "/logo-abna.png",
  logoWidth: 673,
  logoHeight: 800,
};

export const services: readonly ServiceItem[] = [
  {
    id: "earthworks",
    title: "עבודות עפר",
    description:
      "עבודות עפר לפרויקטים פרטיים, עסקיים וקבלניים — התאמת ציוד לשטח ולדרישות הפרויקט.",
    icon: "Terrain",
    keywords: ["עבודות עפר", "קבלן עפר"],
  },
  {
    id: "excavation",
    title: "חפירות",
    description: "חפירות ליסודות, מרתפים, בריכות ותשתיות — ביצוע מדויק ובטוח.",
    icon: "Engineering",
    keywords: ["חפירות", "קבלן חפירות"],
  },
  {
    id: "infrastructure",
    title: "תשתיות",
    description: "הכנת תשתיות, חפירות לצנרת, ניקוז ועבודות תשתית לפני בנייה.",
    icon: "Foundation",
    keywords: ["עבודות תשתית", "תשתיות"],
  },
  {
    id: "demolition",
    title: "הריסות",
    description:
      "הריסות מבנים ומבנים ישנים, פינוי פסולת ופינוי שטח לעבודה חדשה.",
    icon: "DeleteForever",
    keywords: ["הריסות", "פינוי שטח"],
  },
  {
    id: "excavators",
    title: "מחפרונים",
    description:
      "עבודות מחפרון לפרויקטים בינוניים וגדולים — חפירה, פיתוח ועבודות עפר.",
    icon: "Agriculture",
    keywords: ["מחפרון", "עבודות מחפרון"],
  },
  {
    id: "mini-excavator",
    title: "מיני מחפרון",
    description: "מיני מחפרון לגישה לשטחים צרים, חצרות ופרויקטים קטנים.",
    icon: "PrecisionManufacturing",
    keywords: ["מיני מחפרון"],
  },
  {
    id: "bobcat",
    title: "עבודות בובקט",
    description:
      "עבודות בובקט לחפירות קטנות, פיתוח שטח, הריסות קלות ועבודות עפר מדויקות.",
    icon: "Construction",
    keywords: ["עבודות בובקט", "בובקט"],
  },
  {
    id: "land-development",
    title: "פיתוח שטח",
    description:
      "פיתוח שטח לפני בנייה — הסרת צמחייה, יישור, חפירות והכנת הקרקע.",
    icon: "Landscape",
    keywords: ["פיתוח שטח"],
  },
  {
    id: "grading",
    title: "יישור שטח",
    description:
      "יישור שטח לגינון, חניה, מגרשים ופרויקטים שונים — תוצאה מדויקת ויציבה.",
    icon: "Straighten",
    keywords: ["יישור שטח"],
  },
];

export const whyChooseUs: readonly WhyChooseUsItem[] = [
  {
    title: "זמינות גבוהה",
    description: "מענה מהיר ותיאום עבודה לפי לוחות הזמנים שלכם.",
    icon: "Schedule",
  },
  {
    title: "עבודה מקצועית ובטיחותית",
    description: "ביצוע מסודר, שמירה על בטיחות בשטח ועבודה לפי דרישות הפרויקט.",
    icon: "VerifiedUser",
  },
  {
    title: "ציוד מתאים",
    description:
      "בחירת הכלי הנכון — מחפרון, מיני מחפרון או בובקט — לכל סוג עבודה.",
    icon: "Build",
  },
  {
    title: "כיסוי אזורי",
    description: "שירות בירושלים והסביבה, מודיעין והשפלה ותל אביב והמרכז.",
    icon: "LocationOn",
  },
];

export const about: AboutInfo = {
  heading: "קצת עלינו",
  paragraphs: [
    "אבנא קבלן עבודות עפר מספקת שירותי חפירה, עבודות עפר, פיתוח שטח, תשתיות והריסות ללקוחות פרטיים, עסקיים וקבלנים.",
    "אנו מקפידים על עבודה מקצועית, התאמת הכלי הנכון לכל פרויקט ומתן מענה מהיר באזורי השירות.",
  ],
};

export const gallery: readonly GalleryItem[] = [
  {
    src: "/images/2.jpeg",
    alt: "עבודות עפר וחפירה בשטח בנייה",
    width: 800,
    height: 600,
  },
  {
    src: "/images/3.jpeg",
    alt: "מחפרון בביצוע חפירות ליסודות",
    width: 800,
    height: 600,
  },
  {
    src: "/images/4.jpeg",
    alt: "עבודות בובקט בפיתוח שטח",
    width: 800,
    height: 600,
  },
  {
    src: "/images/9.jpeg",
    alt: "יישור שטח לפני בנייה",
    width: 800,
    height: 600,
  },
  {
    src: "/images/8.jpeg",
    alt: "עבודות תשתית וחפירות לצנרת",
    width: 800,
    height: 600,
  },
  {
    src: "/images/10.jpeg",
    alt: "עבודות עפר באזור ירושלים",
    width: 800,
    height: 600,
  },
];

export const testimonials: readonly TestimonialItem[] = [
  {
    quote: "שירות מקצועי, מהיר וענייני.",
    serviceContext: "עבודות עפר",
    authorLabel: "לקוח",
  },
  {
    quote: "הגיעו בזמן וביצעו את העבודה כמו שסוכם.",
    serviceContext: "חפירות",
    authorLabel: "לקוח",
  },
  {
    quote: "קיבלנו מענה מהיר והצעת מחיר ברורה.",
    serviceContext: "הצעת מחיר",
    authorLabel: "לקוח",
  },
  {
    quote: "עבודה נקייה ומסודרת בשטח.",
    serviceContext: "פיתוח שטח",
    authorLabel: "לקוח",
  },
];

export const videos: readonly VideoItem[] = [
  {
    id: "excavation-1",
    title: "עבודות עפר וחפירה",
    src: "/videos/video_1.mp4",
    type: "video/mp4",
  },
  {
    id: "excavation-2",
    title: "פיתוח שטח ותשתיות",
    src: "/videos/video_2.mp4",
    type: "video/mp4",
  },
];

export const areas: readonly AreaItem[] = [
  {
    heading: "עבודות עפר בירושלים",
    description:
      "מחפשים קבלן עבודות עפר בירושלים והסביבה? אבנא מבצעת חפירות, עבודות בובקט, תשתיות, פיתוח שטח ויישור שטח לפרויקטים פרטיים ועסקיים באזור ירושלים.",
    keywords: [
      "עבודות עפר בירושלים",
      "חפירות",
      "בובקט",
      "תשתיות",
      "ירושלים והסביבה",
    ],
  },
  {
    heading: "עבודות עפר במודיעין",
    description:
      "שירותי עבודות עפר במודיעין והשפלה — מחפרון, מיני מחפרון, חפירות, פיתוח שטח ועבודות תשתית. זמינות מהירה והצעת מחיר ללא התחייבות.",
    keywords: ["עבודות עפר במודיעין", "מודיעין והשפלה", "מחפרון", "פיתוח שטח"],
  },
  {
    heading: "עבודות עפר במרכז",
    description:
      "קבלן עבודות עפר בתל אביב והמרכז — עבודות עפר, חפירות, הריסות, בובקט ותשתיות. פנו אלינו לקבלת הצעת מחיר ותיאום עבודה.",
    keywords: ["עבודות עפר במרכז", "תל אביב והמרכז", "קבלן עפר"],
  },
];

export const ctaBlocks: readonly CtaBlock[] = [
  {
    id: "cta-after-services",
    heading: "צריכים קבלן עבודות עפר זמין?",
    subheading: "התקשרו או שלחו WhatsApp — נחזור אליכם בהקדם עם הצעת מחיר.",
    location: "after-services",
  },
  {
    id: "cta-after-gallery",
    heading: "התקשרו עכשיו לקבלת הצעת מחיר",
    subheading: "זמינות מהירה בירושלים, מודיעין והמרכז.",
    location: "after-gallery-testimonials",
  },
  {
    id: "cta-before-footer",
    heading: "שלחו WhatsApp ונחזור אליכם בהקדם",
    subheading: "השאירו פרטים או צרו קשר ישירות — אנחנו כאן לעזור.",
    location: "before-footer",
  },
];

export const faq: readonly FaqItem[] = [
  {
    question: "האם אתם מבצעים עבודות עפר בירושלים והסביבה?",
    answer:
      "כן. אנו מספקים שירותי עבודות עפר, חפירות, בובקט ותשתיות בירושלים והסביבה. ניתן ליצור קשר לקבלת הצעת מחיר.",
  },
  {
    question: "האם אתם עובדים גם באזור מודיעין והמרכז?",
    answer:
      "כן. אנו מבצעים עבודות עפר, חפירות ופיתוח שטח גם במודיעין והשפלה ובאזור תל אביב והמרכז.",
  },
  {
    question: "האם ניתן להזמין עבודות בובקט או מחפרון?",
    answer:
      "בהחלט. אנו מבצעים עבודות בובקט, מחפרון ומיני מחפרון — בהתאם לגודל השטח ולסוג העבודה.",
  },
  {
    question: "אילו סוגי עבודות אתם מבצעים?",
    answer:
      "עבודות עפר, חפירות, תשתיות, הריסות, מחפרונים, מיני מחפרון, עבודות בובקט, פיתוח שטח ויישור שטח.",
  },
  {
    question: "איך מקבלים הצעת מחיר?",
    answer:
      "ניתן להתקשר, לשלוח הודעת WhatsApp או למלא את טופס יצירת הקשר בדף. נחזור אליכם בהקדם עם פרטים.",
  },
];

export const footer: FooterInfo = {
  copyright: `© ${new Date().getFullYear()} אבנא קבלן עבודות עפר. כל הזכויות שמורות.`,
  siteBuilder: "בנייה: ליעם גולדרינג",
  anchorLinks: [
    { label: "שירותים", href: "#services" },
    { label: "גלריה", href: "#gallery" },
    { label: "אזורי שירות", href: "#areas" },
    { label: "שאלות נפוצות", href: "#faq" },
    { label: "צור קשר", href: "#contact" },
  ],
};

export const schema: SchemaInfo = {
  areaServed: [
    { name: "ירושלים", type: "City" },
    { name: "מודיעין", type: "City" },
    { name: "תל אביב", type: "City" },
    { name: "המרכז", type: "AdministrativeArea" },
  ],
  sameAs: [business.facebookUrl],
};

export const accessibilityLabels: AccessibilityLabels = {
  resetTitle: "איפוס הגדרות נגישות",
  closeTitle: "סגירת תפריט נגישות",
  menuTitle: "אפשרויות נגישות",
  increaseText: "הגדלת טקסט",
  decreaseText: "הקטנת טקסט",
  increaseTextSpacing: "הגדלת ריווח בין אותיות",
  decreaseTextSpacing: "הקטנת ריווח בין אותיות",
  increaseLineHeight: "הגדלת ריווח בין שורות",
  decreaseLineHeight: "הקטנת ריווח בין שורות",
  invertColors: "היפוך צבעים",
  grayHues: "גווני אפור",
  underlineLinks: "קו תחתון לקישורים",
  bigCursor: "סמן עכבר מוגדל",
  readingGuide: "מדריך קריאה",
  textToSpeech: "הקראת טקסט",
  speechToText: "דיבור לטקסט",
  disableAnimations: "ביטול אנימציות",
  hotkeyPrefix: "קיצור מקלדת: ",
};

export const landingPageData: LandingPageData = {
  business,
  nap,
  seo,
  hero,
  services,
  whyChooseUs,
  about,
  gallery,
  testimonials,
  videos,
  areas,
  ctaBlocks,
  faq,
  footer,
  schema,
  accessibilityLabels,
};

export default landingPageData;
