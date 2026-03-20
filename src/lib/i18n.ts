export type Lang = "en" | "uk";

export function getLang(searchParams: Record<string, string | string[] | undefined>): Lang {
  const lang = searchParams?.lang;
  if (lang === "uk") return "uk";
  return "en";
}

const translations = {
  // Nav
  "nav.products": { en: "Products", uk: "Продукти" },
  "nav.impact": { en: "Impact", uk: "Результати" },
  "nav.research": { en: "Research", uk: "Дослідження" },
  "nav.getInTouch": { en: "Get in touch", uk: "Зв'язатися" },
  "nav.contact": { en: "Contact", uk: "Контакт" },

  // Hero
  "hero.headline": { en: "UAV innovation\non front lines", uk: "UAV інновації\nна передовій" },
  "hero.subtitle": {
    en: "StabX is the stabilization standard in Ukraine. NaviX navigation is in testing. Compatible with most drones. Defense to industry.",
    uk: "StabX — стандарт стабілізації в Україні. Навігація NaviX на етапі тестування. Сумісний з більшістю дронів. Від оборони до індустрії.",
  },
  "hero.cta": { en: "Our Products", uk: "Наші продукти" },

  // Products
  "products.title": { en: "Products", uk: "Продукти" },
  "products.flagship": { en: "Flagship", uk: "Флагман" },
  "products.inTesting": { en: "In Testing", uk: "Тестування" },
  "products.live": { en: "Live", uk: "Активний" },
  "products.stabx.tag": { en: "Optical Stabilization", uk: "Оптична стабілізація" },
  "products.stabx.desc": {
    en: "GPS-free flight stabilization trusted by 700+ Armed Forces units. Day and night variants. Compatible with most Ardupilot-based UAVs.",
    uk: "Стабілізація польоту без GPS, якій довіряють 700+ підрозділів ЗСУ. Денний та нічний варіанти. Сумісний з більшістю БПЛА на базі Ardupilot.",
  },
  "products.stabx.cta": { en: "View modules", uk: "Переглянути модулі" },
  "products.navix.tag": { en: "Visual Navigation", uk: "Візуальна навігація" },
  "products.navix.desc": {
    en: "AI-powered GPS-free navigation matching camera imagery with satellite maps. 20–30m accuracy on Raspberry Pi 5.",
    uk: "Навігація без GPS на основі ШІ, що зіставляє зображення камери з супутниковими картами. Точність 20–30 м на Raspberry Pi 5.",
  },
  "products.navix.cta": { en: "Join waitlist", uk: "Приєднатися до списку очікування" },
  "products.supportbot.tag": { en: "Automated Technical Support", uk: "Автоматизована технічна підтримка" },
  "products.supportbot.desc": {
    en: "Automated technical support bot in Signal powering StabX customer service. Deployable to any product\u2019s support workflow.",
    uk: "Автоматизований бот технічної підтримки в Signal для обслуговування клієнтів StabX. Може бути розгорнутий для підтримки будь-якого продукту.",
  },
  "products.supportbot.cta": { en: "Open SupportBot", uk: "Відкрити SupportBot" },

  // Impact
  "impact.title": { en: "Impact", uk: "Результати" },
  "impact.stat1.value": { en: "700+", uk: "700+" },
  "impact.stat1.label": {
    en: "Armed Forces of Ukraine units running StabX",
    uk: "Підрозділів ЗСУ використовують StabX",
  },
  "impact.stat2.value": { en: "47", uk: "47" },
  "impact.stat2.label": {
    en: "UAV companies with StabX integrated into their platforms",
    uk: "Компаній-виробників БПЛА з інтегрованим StabX",
  },
  "impact.stat3.value": { en: "4", uk: "4" },
  "impact.stat3.label": {
    en: "Retranslator codifications in progress with top-tier manufacturers",
    uk: "Кодифікації ретрансляторів у процесі з провідними виробниками",
  },
  "impact.stat4.value": { en: "Brave1", uk: "Brave1" },
  "impact.stat4.label": {
    en: "StabX modules listed on the Brave1 defense marketplace",
    uk: "Модулі StabX представлені на оборонному маркетплейсі Brave1",
  },

  // Research
  "research.title": { en: "Research", uk: "Дослідження" },
  "research.naviloc.desc": {
    en: "Matching drone cameras to satellite maps across the entire flight path \u2014 19.5m accuracy, 16x improvement over state-of-the-art, 9 FPS on Raspberry Pi 5.",
    uk: "Зіставлення камер дронів із супутниковими картами вздовж усієї траєкторії польоту — точність 19,5 м, покращення у 16 разів порівняно з найкращими аналогами, 9 FPS на Raspberry Pi 5.",
  },

  // Footer
  "footer.rights": { en: "\u00a9 2026 Academia Tech. All rights reserved.", uk: "\u00a9 2026 Academia Tech. Усі права захищені." },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}
