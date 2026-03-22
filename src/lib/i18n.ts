export type Lang = "en" | "uk";

export function getLang(searchParams: Record<string, string | string[] | undefined>, acceptLanguage?: string | null, cookieLang?: string | null): Lang {
  // 1. Explicit query param wins
  const lang = searchParams?.lang;
  if (lang === "uk") return "uk";
  if (lang === "en") return "en";

  // 2. Cookie from user's toggle choice
  if (cookieLang === "uk") return "uk";
  if (cookieLang === "en") return "en";

  // 3. Auto-detect from Accept-Language header
  if (acceptLanguage) {
    const parts = acceptLanguage.toLowerCase();
    if (parts.includes("uk")) return "uk";
  }

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
    uk: "StabX — стандарт стабілізації в Україні. Навігація NaviX на етапі тестування. Сумісність з більшістю дронів. Від оборони до індустрії.",
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
    uk: "Стабілізація польоту без GPS, якій довіряють 700+ підрозділів ЗСУ. Денний та нічний варіанти. Сумісність з більшістю БПЛА на базі Ardupilot.",
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

  // NaviLoc article page
  "naviloc.title": {
    en: "NaviLoc: Trajectory-Level Visual Localization for GNSS-Denied UAV Navigation",
    uk: "NaviLoc: Візуальна локалізація на рівні траєкторії для навігації БПЛА без GNSS",
  },
  "naviloc.subtitle": {
    en: "Matching drone cameras to satellite maps \u2014 across the entire flight path, not frame by frame",
    uk: "Зіставлення камер дронів із супутниковими картами \u2014 вздовж усієї траєкторії польоту, а не покадрово",
  },
  "naviloc.journal": { en: "Drones (MDPI), Vol. 10, No. 2", uk: "Drones (MDPI), Том 10, № 2" },
  "naviloc.fullPaper": { en: "Full paper on MDPI", uk: "Повна стаття на MDPI" },
  "naviloc.problem": { en: "The problem", uk: "Проблема" },
  "naviloc.problem.p1": {
    en: "Drones rely on GPS to know where they are. When GPS signals get jammed or spoofed \u2014 which is now routine in conflict zones \u2014 drones lose their position fix. They can\u2019t navigate, can\u2019t return home, can\u2019t complete their mission.",
    uk: "Дрони покладаються на GPS для визначення свого місцезнаходження. Коли сигнали GPS глушать або підмінюють \u2014 що зараз є звичайною справою в зонах конфліктів \u2014 дрони втрачають прив\u2019язку до позиції. Вони не можуть навігувати, не можуть повернутися додому, не можуть виконати завдання.",
  },
  "naviloc.problem.p2": {
    en: "One alternative: use the drone\u2019s camera to match what it sees on the ground against satellite imagery and figure out its location visually. The problem is that at low altitudes (50\u2013150 meters), the drone\u2019s view looks very different from satellite photos. Fields, roads, and buildings repeat across the landscape. A single camera frame can easily match the wrong satellite tile \u2014 the system thinks the drone is in one place when it\u2019s actually somewhere else.",
    uk: "Одна з альтернатив: використовувати камеру дрона для зіставлення того, що він бачить на землі, із супутниковими знімками та визначити місцезнаходження візуально. Проблема в тому, що на малих висотах (50\u2013150 метрів) зображення з дрона дуже відрізняється від супутникових фото. Поля, дороги та будівлі повторюються по всьому ландшафту. Один кадр з камери може легко збігтися з неправильним фрагментом супутникового знімку \u2014 система вважає, що дрон в одному місці, коли насправді він зовсім в іншому.",
  },
  "naviloc.problem.p3": {
    en: "Existing methods try to match each frame independently. They fail because of this perceptual aliasing \u2014 too many locations look alike from above.",
    uk: "Існуючі методи намагаються зіставляти кожен кадр незалежно. Вони не справляються через цей перцептивний алайзінг \u2014 занадто багато локацій виглядають однаково зверху.",
  },
  "naviloc.differently": { en: "What NaviLoc does differently", uk: "Що NaviLoc робить інакше" },
  "naviloc.differently.p1": {
    en: "NaviLoc doesn\u2019t trust individual frame matches. Instead, it uses the drone\u2019s entire flight trajectory to determine position.",
    uk: "NaviLoc не довіряє зіставленням окремих кадрів. Натомість він використовує всю траєкторію польоту дрона для визначення позиції.",
  },
  "naviloc.differently.p2": {
    en: "The system combines two sources of information. First: visual place recognition (VPR) \u2014 matching camera frames to geo-referenced satellite tiles using deep learning descriptors. These matches are treated as noisy measurements, not ground truth. Second: visual-inertial odometry (VIO) \u2014 tracking relative motion between frames using the camera and an IMU (accelerometer + gyroscope). VIO is accurate for short distances but drifts over time.",
    uk: "Система поєднує два джерела інформації. Перше: візуальне розпізнавання місця (VPR) \u2014 зіставлення кадрів камери з геоприв\u2019язаними фрагментами супутникових знімків за допомогою дескрипторів глибокого навчання. Ці збіги розглядаються як зашумлені вимірювання, а не як істина. Друге: візуально-інерціальна одометрія (VIO) \u2014 відстеження відносного руху між кадрами за допомогою камери та IMU (акселерометр + гіроскоп). VIO точна на коротких дистанціях, але з часом накопичує дрейф.",
  },
  "naviloc.differently.p3": {
    en: "Neither source is reliable alone. VPR gives approximate global position but frequently matches wrong tiles. VIO gives precise relative motion but accumulates drift. NaviLoc fuses them across the full trajectory so their errors cancel out.",
    uk: "Жодне з джерел не є надійним окремо. VPR дає приблизну глобальну позицію, але часто зіставляє неправильні фрагменти. VIO дає точний відносний рух, але накопичує дрейф. NaviLoc об\u2019єднує їх вздовж усієї траєкторії, щоб їхні похибки компенсувались.",
  },
  "naviloc.stages": { en: "Three stages", uk: "Три етапи" },
  "naviloc.stage1.title": { en: "Stage 1 \u2014 Global Align.", uk: "Етап 1 \u2014 Глобальне вирівнювання." },
  "naviloc.stage1.desc": {
    en: "The VIO trajectory exists in a local coordinate frame \u2014 the drone knows how it moved, but not where in the world it started or which direction it was facing. Stage 1 finds the rotation, translation, and scale that best align this local trajectory to the satellite map. It does this by scanning candidate rotations, computing a robust median translation for each, and picking the alignment where the most camera frames match nearby satellite tiles. The median makes this robust: even if half the frame matches are wrong, the correct ones still dominate.",
    uk: "Траєкторія VIO існує в локальній системі координат \u2014 дрон знає, як він рухався, але не знає, де саме у світі він стартував і в якому напрямку був спрямований. Етап 1 знаходить обертання, зсув і масштаб, які найкраще вирівнюють цю локальну траєкторію з супутниковою картою. Це робиться шляхом перебору кандидатних обертань, обчислення робастного медіанного зсуву для кожного та вибору вирівнювання, при якому найбільше кадрів камери збігається з найближчими фрагментами супутникової карти. Медіана робить це стійким: навіть якщо половина збігів кадрів хибна, правильні все одно домінують.",
  },
  "naviloc.stage2.title": { en: "Stage 2 \u2014 Refinement.", uk: "Етап 2 \u2014 Уточнення." },
  "naviloc.stage2.desc": {
    en: "The global alignment from Stage 1 is coarse. Stage 2 slides a window along the trajectory and applies local geometric corrections using weighted Procrustes analysis. Each window recomputes which satellite tiles best match the camera frames at the current estimated positions, then adjusts the local trajectory segment. A rotation bound prevents overcorrection from noisy matches. Multiple passes converge in 2\u20133 iterations.",
    uk: "Глобальне вирівнювання з Етапу 1 є грубим. Етап 2 ковзає вікном вздовж траєкторії та застосовує локальні геометричні корекції за допомогою зваженого аналізу Прокруста. Кожне вікно перераховує, які фрагменти супутникової карти найкраще збігаються з кадрами камери на поточних оцінених позиціях, а потім коригує локальний сегмент траєкторії. Обмеження обертання запобігає надмірній корекції від зашумлених збігів. Кілька проходів збігаються за 2\u20133 ітерації.",
  },
  "naviloc.stage3.title": { en: "Stage 3 \u2014 Smoothing.", uk: "Етап 3 \u2014 Згладжування." },
  "naviloc.stage3.desc": {
    en: "The final stage formulates a convex optimization problem that fuses VIO motion constraints with the refined position anchors from Stage 2. It detects outlier anchors using z-scores on their visual similarity \u2014 if a match looks statistically worse than the others, it gets clamped to the VIO prior instead. The result is a closed-form linear solve that produces the final trajectory estimate.",
    uk: "Фінальний етап формулює задачу опуклої оптимізації, яка об\u2019єднує обмеження руху VIO з уточненими позиційними якорями з Етапу 2. Він виявляє аномальні якорі за допомогою z-оцінок їхньої візуальної подібності \u2014 якщо збіг статистично гірший за інші, він прив\u2019язується до апріорної оцінки VIO. Результат \u2014 лінійний розв\u2019язок у замкнутій формі, що дає фінальну оцінку траєкторії.",
  },
  "naviloc.satMap": { en: "Satellite map preparation", uk: "Підготовка супутникової карти" },
  "naviloc.satMap.p1": {
    en: "Before flight, satellite imagery of the operating area is downloaded and divided into a grid of tiles (40m spacing in our benchmark). Each tile is processed through a Vision Transformer (DeiT-Tiny-Distilled) to extract a 192-dimensional descriptor \u2014 a compact numerical fingerprint of its visual content. These are stored in a reference database. On our benchmark, 462 tiles cover 1.6 km\u00b2 at 0.3 m/pixel resolution.",
    uk: "Перед польотом супутникові знімки робочої зони завантажуються та розбиваються на сітку фрагментів (крок 40 м у нашому бенчмарку). Кожен фрагмент обробляється через Vision Transformer (DeiT-Tiny-Distilled) для вилучення 192-вимірного дескриптора \u2014 компактного числового відбитку його візуального вмісту. Вони зберігаються в референсній базі даних. У нашому бенчмарку 462 фрагменти покривають 1,6 км\u00b2 з роздільною здатністю 0,3 м/піксель.",
  },
  "naviloc.satMap.p2": {
    en: "During flight, the same model processes each camera frame to produce its descriptor. Matching is then a nearest-neighbor search in descriptor space \u2014 fast enough to run in real time on embedded hardware.",
    uk: "Під час польоту та сама модель обробляє кожен кадр камери для створення його дескриптора. Зіставлення \u2014 це пошук найближчого сусіда в просторі дескрипторів, достатньо швидкий для роботи в реальному часі на вбудованому обладнанні.",
  },
  "naviloc.results": { en: "Results", uk: "Результати" },
  "naviloc.results.intro": {
    en: "We evaluated NaviLoc on a real-world benchmark: 58 frames from a 2.3 km flight over rural terrain in Ukraine at 50\u2013150m altitude. The terrain is challenging \u2014 repetitive agricultural fields and village patterns with few distinctive landmarks.",
    uk: "Ми оцінили NaviLoc на реальному бенчмарку: 58 кадрів з польоту на 2,3 км над сільською місцевістю в Україні на висоті 50\u2013150 м. Місцевість складна \u2014 повторювані сільськогосподарські поля та сільські забудови з небагатьма характерними орієнтирами.",
  },
  "naviloc.results.r1.title": { en: "19.5m mean localization error", uk: "19,5 м середня похибка локалізації" },
  "naviloc.results.r1.desc": {
    en: "Over a 2.3 km trajectory. 16x more accurate than the previous best method (AnyLoc-VLAD, 312m).",
    uk: "На траєкторії 2,3 км. У 16 разів точніше за попередній найкращий метод (AnyLoc-VLAD, 312 м).",
  },
  "naviloc.results.r2.title": { en: "32x better than raw VIO drift", uk: "У 32 рази краще за чистий дрейф VIO" },
  "naviloc.results.r2.desc": {
    en: "VIO alone drifted to 627m error. NaviLoc corrects this to under 20m.",
    uk: "Сам VIO дрейфував до похибки 627 м. NaviLoc виправляє це до менш ніж 20 м.",
  },
  "naviloc.results.r3.title": { en: "9 FPS on Raspberry Pi 5", uk: "9 FPS на Raspberry Pi 5" },
  "naviloc.results.r3.desc": {
    en: "End-to-end inference on a $80 single-board computer. No GPU, no cloud, no internet required.",
    uk: "Наскрізний інференс на одноплатному комп\u2019ютері за $80. Без GPU, без хмари, без інтернету.",
  },
  "naviloc.results.r4.title": { en: "Training-free", uk: "Без навчання" },
  "naviloc.results.r4.desc": {
    en: "Uses off-the-shelf pretrained descriptors. No domain-specific fine-tuning needed for new areas.",
    uk: "Використовує готові попередньо навчені дескриптори. Не потрібне доменне донавчання для нових територій.",
  },
  "naviloc.results.context": {
    en: "To put this in context: 19.5 meters of accuracy over a multi-kilometer flight, at low altitude, over visually repetitive rural terrain, with no GPS, running on a credit-card-sized computer. The previous state-of-the-art scored 312 meters on the same benchmark.",
    uk: "Для контексту: 19,5 метрів точності на багатокілометровому польоті, на малій висоті, над візуально повторюваною сільською місцевістю, без GPS, на комп\u2019ютері розміром з кредитну картку. Попередній найкращий результат на тому ж бенчмарку \u2014 312 метрів.",
  },
  "naviloc.whyMatters": { en: "Why it matters", uk: "Чому це важливо" },
  "naviloc.whyMatters.p1": {
    en: "The core contribution is the trajectory-level approach. Existing methods match frames independently and fail when individual matches are ambiguous. NaviLoc shows that by treating visual matches as noisy measurements and fusing them with motion data across the full flight path, you can get reliable positioning even when most individual matches would be wrong.",
    uk: "Основний внесок \u2014 це підхід на рівні траєкторії. Існуючі методи зіставляють кадри незалежно і зазнають невдачі, коли окремі збіги неоднозначні. NaviLoc демонструє, що розглядаючи візуальні збіги як зашумлені вимірювання та об\u2019єднуючи їх з даними руху вздовж усієї траєкторії польоту, можна отримати надійне позиціонування, навіть коли більшість окремих збігів були б хибними.",
  },
  "naviloc.whyMatters.p2": {
    en: "The algorithm is lightweight and training-free \u2014 it works with any pretrained image descriptor, on any terrain, without collecting domain-specific training data. This makes it practical to deploy in new areas without preparation beyond downloading satellite imagery.",
    uk: "Алгоритм легкий і не потребує навчання \u2014 він працює з будь-яким попередньо навченим дескриптором зображень, на будь-якій місцевості, без збору доменних навчальних даних. Це робить його практичним для розгортання в нових районах без підготовки, окрім завантаження супутникових знімків.",
  },
  "naviloc.whyMatters.p3": {
    en: "NaviLoc is the research foundation behind",
    uk: "NaviLoc \u2014 це дослідницька основа",
  },
  "naviloc.whyMatters.p3b": {
    en: ", our GPS-free navigation product currently in closed testing. NaviX takes these algorithms further \u2014 optimizing for production hardware, expanding the environmental envelope, and integrating with real autopilot systems.",
    uk: ", нашого навігаційного продукту без GPS, що зараз перебуває на етапі закритого тестування. NaviX розвиває ці алгоритми далі \u2014 оптимізація для серійного обладнання, розширення діапазону умов експлуатації та інтеграція з реальними системами автопілоту.",
  },
  "naviloc.cta": {
    en: "NaviLoc powers",
    uk: "NaviLoc лежить в основі",
  },
  "naviloc.ctaB": {
    en: ", our GPS-free navigation product currently in closed testing.",
    uk: ", нашого навігаційного продукту без GPS, що зараз перебуває на етапі закритого тестування.",
  },
  "naviloc.learnNavix": { en: "Learn about NaviX", uk: "Дізнатися про NaviX" },

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
