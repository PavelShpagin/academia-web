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

  // StabX page
  "stabx.desc": {
    en: "Optical flight stabilization without GPS, compass, or external signals. Tracks terrain in real time, fuses optical flow with IMU data. Holds position, maintains heading, returns home autonomously on signal loss.",
    uk: "Оптична стабілізація польоту без GPS, компаса та зовнішніх сигналів. Відстежує рельєф у реальному часі, поєднує оптичний потік з даними IMU. Утримує позицію, зберігає курс, автономно повертається додому при втраті сигналу.",
  },
  "stabx.modules": { en: "Modules", uk: "Модулі" },
  "stabx.day.desc": { en: "Daytime optical stabilization using visible-light camera.", uk: "Денна оптична стабілізація з камерою видимого спектру." },
  "stabx.night.desc": { en: "Thermal imaging stabilization for night and low-visibility operations.", uk: "Стабілізація на основі тепловізора для нічних та умов обмеженої видимості." },
  "stabx.daynight.desc": { en: "Combined visible and thermal module for 24-hour operation.", uk: "Комбінований модуль видимого та теплового діапазону для цілодобової роботи." },
  "stabx.camera": { en: "Camera", uk: "Камера" },
  "stabx.camera.visible": { en: "Visible light", uk: "Видимий спектр" },
  "stabx.camera.thermal": { en: "Thermal", uk: "Тепловізор" },
  "stabx.camera.both": { en: "Visible + Thermal", uk: "Видимий + Тепловізор" },
  "stabx.buyBrave1": { en: "Buy on Brave1", uk: "Купити на Brave1" },
  "stabx.specs": { en: "Specifications", uk: "Характеристики" },
  "stabx.specs.navAutonomy": { en: "Navigation & Autonomy", uk: "Навігація та автономність" },
  "stabx.specs.stabilization": { en: "Stabilization", uk: "Стабілізація" },
  "stabx.specs.stabilizationVal": { en: "Activates at takeoff, does not interfere with piloting", uk: "Активується при зльоті, не заважає пілотуванню" },
  "stabx.specs.drift": { en: "Azimuth drift", uk: "Дрейф азимуту" },
  "stabx.specs.rtl": { en: "RTL", uk: "RTL" },
  "stabx.specs.rtlVal": { en: "Returns via shortest trajectory (not along flight path)", uk: "Повертається найкоротшою траєкторією (не вздовж маршруту польоту)" },
  "stabx.specs.returnError": { en: "Return error", uk: "Похибка повернення" },
  "stabx.specs.returnErrorVal": { en: "~500m over a 7\u20138 km flight, terrain dependent", uk: "~500 м на дистанції 7\u20138 км, залежить від рельєфу" },
  "stabx.specs.integration": { en: "Integration", uk: "Інтеграція" },
  "stabx.specs.integrationVal": { en: "4 wires and a few parameters in Ardupilot", uk: "4 дроти та кілька параметрів в Ardupilot" },
  "stabx.specs.altDev": { en: "Altitude vs. Horizontal Deviation", uk: "Висота та горизонтальне відхилення" },
  "stabx.specs.hardware": { en: "Hardware", uk: "Обладнання" },
  "stabx.specs.workingAlt": { en: "Working altitude", uk: "Робоча висота" },
  "stabx.specs.weight": { en: "Weight", uk: "Вага" },
  "stabx.specs.power": { en: "Power consumption", uk: "Споживання" },
  "stabx.specs.security": { en: "Security", uk: "Безпека" },
  "stabx.specs.securityVal": { en: "Bluetooth key, encrypted, hardware-bound", uk: "Bluetooth ключ, шифрування, прив\u2019язка до обладнання" },
  "stabx.specs.compatibility": { en: "Compatibility", uk: "Сумісність" },
  "stabx.specs.compatibilityVal": { en: "Most Ardupilot-based UAVs", uk: "Більшість БПЛА на базі Ardupilot" },
  "stabx.cta": { en: "Integrate StabX into\nyour platform", uk: "Інтегруйте StabX\nу вашу платформу" },
  "stabx.contactSales": { en: "Contact Sales", uk: "Зв\u2019язатися з відділом продажів" },
  "stabx.businessInquiries": { en: "Business Inquiries", uk: "Бізнес-запити" },

  // NaviX page
  "navix.inClosedTesting": { en: "In closed testing", uk: "На етапі закритого тестування" },
  "navix.desc": {
    en: "GPS-free visual navigation for UAVs. Determines drone position by matching camera imagery to satellite maps \u2014 no external signals required. 20\u201330m accuracy on a Raspberry Pi 5.",
    uk: "Візуальна навігація без GPS для БПЛА. Визначає позицію дрона, зіставляючи зображення камери з супутниковими картами \u2014 без зовнішніх сигналів. Точність 20\u201330 м на Raspberry Pi 5.",
  },
  "navix.basedOn": { en: "Based on NaviLoc research", uk: "На основі дослідження NaviLoc" },
  "navix.howToUse": { en: "How to use", uk: "Як використовувати" },
  "navix.step1.title": { en: "1 \u2014 Prepare the mission", uk: "1 \u2014 Підготуйте місію" },
  "navix.step1.desc": {
    en: "At home or anywhere with internet, connect to the drone\u2019s web interface. Choose a point on the map, set the coverage radius, and fetch the satellite data. For a 10 km\u00b2 area, preparation takes under 2 minutes.",
    uk: "Вдома або будь-де з інтернетом під\u2019єднайтесь до веб-інтерфейсу дрона. Оберіть точку на карті, задайте радіус покриття та завантажте супутникові дані. Для площі 10 км\u00b2 підготовка займає менше 2 хвилин.",
  },
  "navix.step2.title": { en: "2 \u2014 Fly", uk: "2 \u2014 Летіть" },
  "navix.step2.desc": {
    en: "Once the drone takes off, NaviX automatically uses the prepared data to localize it in real time. At altitudes between 100\u20131000m, the system continuously matches what the camera sees against the satellite map to determine the drone\u2019s true position.",
    uk: "Після зльоту NaviX автоматично використовує підготовлені дані для локалізації в реальному часі. На висотах 100\u20131000 м система безперервно зіставляє те, що бачить камера, з супутниковою картою для визначення справжньої позиції дрона.",
  },
  "navix.step3.title": { en: "3 \u2014 Navigate without GPS", uk: "3 \u2014 Навігація без GPS" },
  "navix.step3.desc": {
    en: "NaviX corrects the drone\u2019s position estimate by nudging it back to where GPS says it should be \u2014 except it does this without GPS. The result is high-precision navigation at any mission scale, even in full GPS denial.",
    uk: "NaviX коригує оцінку позиції дрона, повертаючи її туди, де мала б бути за GPS \u2014 але робить це без GPS. Результат: високоточна навігація для будь-якого масштабу місії, навіть при повному глушінні GPS.",
  },
  "navix.uiCaption": { en: "NaviX interface displaying corrected drone position on the satellite map", uk: "Інтерфейс NaviX з відображенням скоригованої позиції дрона на супутниковій карті" },
  "navix.specs.performance": { en: "Performance", uk: "Продуктивність" },
  "navix.specs.accuracy": { en: "Accuracy", uk: "Точність" },
  "navix.specs.accuracyVal": { en: "20\u201330m average, 50\u201360m worst case", uk: "20\u201330 м середня, 50\u201360 м найгірший випадок" },
  "navix.specs.processing": { en: "Processing", uk: "Обробка" },
  "navix.specs.processingVal": { en: "9 FPS on Raspberry Pi 5", uk: "9 FPS на Raspberry Pi 5" },
  "navix.specs.altitude": { en: "Altitude", uk: "Висота" },
  "navix.specs.operation": { en: "Operation", uk: "Режим" },
  "navix.specs.operationVal": { en: "Day and night", uk: "День і ніч" },
  "navix.specs.retraining": { en: "Retraining", uk: "Перенавчання" },
  "navix.specs.retrainingVal": { en: "Not required \u2014 works on new terrain out of the box", uk: "Не потрібне \u2014 працює на новій місцевості без додаткових налаштувань" },
  "navix.specs.integrationTitle": { en: "Integration", uk: "Інтеграція" },
  "navix.specs.platform": { en: "Platform", uk: "Платформа" },
  "navix.specs.interface": { en: "Interface", uk: "Інтерфейс" },
  "navix.specs.mapPrep": { en: "Map preparation", uk: "Підготовка карти" },
  "navix.specs.mapPrepVal": { en: "<2 min per 10 km\u00b2", uk: "<2 хв на 10 км\u00b2" },
  "navix.joinWaitlist": { en: "Join the NaviX Waitlist", uk: "Приєднатися до списку очікування NaviX" },
  "navix.joinDesc": { en: "NaviX is in closed testing with select partners. Request early access.", uk: "NaviX на етапі закритого тестування з обраними партнерами. Подайте запит на ранній доступ." },
  "navix.requestAccess": { en: "Request Access", uk: "Подати запит" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}
