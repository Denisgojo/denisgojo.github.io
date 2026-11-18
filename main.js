const COPY = {
  ru: {
    skip: "Перейти к содержанию", navProjects: "Проекты", navServices: "Услуги", navCalculator: "Калькулятор", navProcess: "Как работаем", discuss: "Обсудить проект",
    heroBadge: "Разработка сайтов за 24–48 часов · Оплата в USDT / Карты", heroKicker: "Веб-разработка для амбициозного бизнеса", heroTitle: "Создаю сайты, которые выглядят дорого и приводят клиентов из поиска и рекламы", heroDescription: "Продающие лендинги, многоязычные сайты для бизнеса и интерактивные веб-сервисы под ключ. Быстрый запуск, адаптив под смартфоны и интеграция с мессенджерами.", seeProjects: "Смотреть проекты", writeTelegram: "Написать в Telegram", statLaunch: "средний срок запуска", statResponsive: "адаптивность и скорость", statPayment: "удобная оплата", buildPreview: "ЖИВОЕ ПРЕВЬЮ", buildLive: "В РАБОТЕ", buildOverline: "ЦИФРОВОЙ ОПЫТ", buildHeading: "Создано для роста", buildHeadingAccent: "бизнеса.", buildChipWeb: "САЙТ", buildChipSpeed: "БЫСТРО", buildStatus: "Проект запущен", noteConversion: "Конверсия", noteConversionSub: "на первом месте", noteFast: "Запуск без пауз", noteFastSub: "от идеи до сайта",
    projectsLabel: "Портфолио", projectsTitle: "Избранные проекты", projectsAside: "Реальные задачи. Продуманные интерфейсы.<br />Результат, который работает на бизнес.", openProject: "Открыть живой сайт", servicesLabel: "Возможности", servicesTitle: "Услуги и форматы", servicesAside: "Выберите решение под свою задачу.<br />Финальная стоимость зависит от объема.", calculatorTitle: "Рассчитайте свой проект", calculatorAside: "Соберите конфигурацию сайта<br />и узнайте ориентировочную цену.", projectType: "Тип проекта", chooseBase: "Выберите основу сайта", extrasTitle: "Дополнительные опции", extrasSub: "Добавьте нужные возможности", estimateLabel: "Предварительная оценка", estimateCaption: "Ваш проект", sendEstimate: "Отправить расчет в Telegram", estimateFootnote: "Точная стоимость уточняется после обсуждения задачи.", processLabel: "Просто и прозрачно", processTitle: "Как мы работаем", processAside: "Короткий путь от первой идеи<br />до работающего сайта.", paymentKicker: "Удобная оплата", paymentText: "Без лишних комиссий: принимаю криптовалюту (USDT TRC-20 / BEP-20 / TON через Binance и Bybit), а также переводы на банковскую карту.", contactLabel: "Связаться", contactTitle: "Готовы запустить сайт, который выделит ваш бизнес?", contactCopy: "Расскажите о задаче — обсудим формат, сроки и стоимость без лишней формальности.", writeWhatsApp: "Написать в WhatsApp", copyright: "© 2026 GOJO DEV · Разработка сайтов под ключ", backTop: "Наверх", base: "Основа", options: "Опции", total: "Итого", selected: "Выбрано", currency: "USDT",
    projects: [
      { name: "ATMOSFERA", place: "Ресторан в Комрате", image: "/images/atmosfera-interior.jpg", alt: "Современный ресторанный интерьер в теплых тонах", description: "Атмосферный лендинг для ресторана с таб-меню (мангал, основные блюда, десерты), презентацией банкетного зала, отзывами и быстрым бронированием в WhatsApp.", tags: ["UI/UX Дизайн", "Таб-меню", "WhatsApp API", "Адаптив"], url: "http://atmosfera-comrat.pages.dev" },
      { name: "Premium Detailing", place: "Студия автодетейлинга · Кишинев", image: "/images/premium-detailing.jpg", alt: "Полировка темного автомобиля в детейлинг-студии", description: "Премиальный сайт автостудии в темной теме с интерактивным смарт-калькулятором стоимости, слайдером отзывов и отправкой расчета в мессенджер.", tags: ["Smart-калькулятор", "Темная тема", "Конверсия", "UI Design"], url: "https://premiumdetail.gojodenis70.workers.dev" },
      { name: "Acasă la mama", place: "Ресторан национальной кухни", image: "/images/acasa-interior.jpg", alt: "Уютный ресторан с деревянной мебелью и мягким светом", description: "Двуязычный (RO/RU) сайт ресторана молдавской кухни с мгновенным переключением языков, афишей живой музыки, разделом меню и удобной формой бронирования.", tags: ["Мультиязычность (RO/RU)", "Брендинг", "Быстрая загрузка"], url: "https://acasa-la-mama.gojodenis70.workers.dev/" }
    ],
    services: [
      { title: "Продающий лендинг", subtitle: "Одностраничный сайт под услуги, локальный бизнес или запуск рекламы.", price: 150, time: "1–2 дня", icon: "↗" },
      { title: "Сайт со Smart-калькулятором", subtitle: "Интерактивный расчет стоимости под вашу нишу с отправкой заявки в Telegram или WhatsApp.", price: 200, time: "Под задачу", icon: "⌘" },
      { title: "Мультиязычный сайт компании", subtitle: "Структура с переключением RU / RO / EN, картами, отзывами и базовой SEO-оптимизацией.", price: 250, time: "Под задачу", icon: "文" },
      { title: "Web3 / Crypto-лендинг", subtitle: "Сайт для криптопроекта, токена или сервиса с дорожной картой и токеномикой.", price: 200, time: "Под задачу", icon: "◇" }
    ],
    baseOptions: [{ id: "landing", title: "Лендинг", price: 150 }, { id: "calculator", title: "Сайт с калькулятором / квизом", price: 200 }, { id: "multilingual", title: "Мультиязычный сайт", price: 250 }],
    extras: [{ id: "language", title: "Дополнительный язык интерфейса", price: 40 }, { id: "copy", title: "Написание продающих текстов под нишу", price: 30 }, { id: "hosting", title: "Подключение домена и настройка хостинга", price: 20 }, { id: "rush", title: "Срочный запуск за 24 часа", price: 50 }],
    stages: [{ title: "Бриф", body: "Обсуждаем задачу, нишу и структуру за 15 минут." }, { title: "Прототип", body: "Собираю дизайн и интерактив, показываю живую демо-версию по ссылке." }, { title: "Правки", body: "Доводим детали, тексты и мобильную версию до идеала." }, { title: "Запуск", body: "Передаю готовый код или разворачиваю сайт на вашем домене." }]
  },
  en: {
    skip: "Skip to content", navProjects: "Projects", navServices: "Services", navCalculator: "Calculator", navProcess: "Process", discuss: "Discuss a project",
    heroBadge: "Websites delivered in 24–48 hours · USDT / card payments", heroKicker: "Web development for ambitious businesses", heroTitle: "I build websites that look premium and bring customers from search and ads", heroDescription: "Conversion-focused landing pages, multilingual business websites, and interactive web services—delivered end to end. Fast launch, mobile-ready design, and messenger integrations.", seeProjects: "Explore projects", writeTelegram: "Message on Telegram", statLaunch: "average time to launch", statResponsive: "responsive and fast", statPayment: "flexible payments", buildPreview: "LIVE PREVIEW", buildLive: "LIVE", buildOverline: "DIGITAL EXPERIENCES", buildHeading: "Built to move", buildHeadingAccent: "business.", buildChipWeb: "WEB", buildChipSpeed: "FAST", buildStatus: "Project launched", noteConversion: "Conversion", noteConversionSub: "comes first", noteFast: "Launch without delays", noteFastSub: "from idea to website",
    projectsLabel: "Portfolio", projectsTitle: "Selected projects", projectsAside: "Real business needs. Thoughtful interfaces.<br />Digital work built to deliver.", openProject: "Open live website", servicesLabel: "What I do", servicesTitle: "Services & formats", servicesAside: "Choose the solution for your goal.<br />Final pricing depends on scope.", calculatorTitle: "Estimate your project", calculatorAside: "Build your website package<br />and see an indicative price.", projectType: "Project type", chooseBase: "Choose your website foundation", extrasTitle: "Optional add-ons", extrasSub: "Add the capabilities you need", estimateLabel: "Initial estimate", estimateCaption: "Your project", sendEstimate: "Send estimate on Telegram", estimateFootnote: "The final price is confirmed after discussing your brief.", processLabel: "Clear and straightforward", processTitle: "How it works", processAside: "A short path from the first idea<br />to a website that works.", paymentKicker: "Convenient payments", paymentText: "No unnecessary fees: I accept cryptocurrency (USDT TRC-20 / BEP-20 / TON via Binance and Bybit), as well as bank-card transfers.", contactLabel: "Get in touch", contactTitle: "Ready to launch a website that sets your business apart?", contactCopy: "Tell me what you need. We’ll discuss the format, timeline, and budget—no unnecessary formalities.", writeWhatsApp: "Message on WhatsApp", copyright: "© 2026 GOJO DEV · End-to-end website development", backTop: "Back to top", base: "Base", options: "Options", total: "Total", selected: "Selected", currency: "USDT",
    projects: [
      { name: "ATMOSFERA", place: "Restaurant · Comrat", image: "/images/atmosfera-interior.jpg", alt: "Modern restaurant interior in warm tones", description: "An atmospheric restaurant landing page with tabbed menus for grill, mains, and desserts, a banquet-hall showcase, reviews, and quick WhatsApp reservations.", tags: ["UI/UX Design", "Tabbed menu", "WhatsApp API", "Responsive"], url: "http://atmosfera-comrat.pages.dev" },
      { name: "Premium Detailing", place: "Auto detailing studio · Chișinău", image: "/images/premium-detailing.jpg", alt: "Dark car being polished in a detailing studio", description: "A premium dark-theme studio website with an interactive smart price calculator, review slider, and messenger-ready quote sharing.", tags: ["Smart calculator", "Dark theme", "Conversion", "UI Design"], url: "https://premiumdetail.gojodenis70.workers.dev" },
      { name: "Acasă la mama", place: "Traditional cuisine restaurant", image: "/images/acasa-interior.jpg", alt: "Cozy restaurant with wooden furniture and warm lighting", description: "A bilingual (RO/RU) Moldovan restaurant website with instant language switching, live music listings, a menu section, and a simple reservation form.", tags: ["Multilingual (RO/RU)", "Branding", "Fast loading"], url: "https://acasa-la-mama.gojodenis70.workers.dev/" }
    ],
    services: [
      { title: "Conversion landing page", subtitle: "A single-page website for services, local businesses, or an ad campaign.", price: 150, time: "1–2 days", icon: "↗" },
      { title: "Smart calculator website", subtitle: "An interactive quote estimator for your niche, with Telegram or WhatsApp lead delivery.", price: 200, time: "As scoped", icon: "⌘" },
      { title: "Multilingual company website", subtitle: "A complete structure with RU / RO / EN switching, maps, reviews, and baseline SEO.", price: 250, time: "As scoped", icon: "文" },
      { title: "Web3 / Crypto landing page", subtitle: "A polished website for a crypto project, token, or service, with roadmap and tokenomics.", price: 200, time: "As scoped", icon: "◇" }
    ],
    baseOptions: [{ id: "landing", title: "Landing page", price: 150 }, { id: "calculator", title: "Calculator / quiz website", price: 200 }, { id: "multilingual", title: "Multilingual website", price: 250 }],
    extras: [{ id: "language", title: "Additional interface language", price: 40 }, { id: "copy", title: "Conversion copywriting for your niche", price: 30 }, { id: "hosting", title: "Domain connection and hosting setup", price: 20 }, { id: "rush", title: "Rush launch within 24 hours", price: 50 }],
    stages: [{ title: "Brief", body: "We discuss your goal, niche, and structure in a 15-minute call." }, { title: "Prototype", body: "I build the design and interactions, then share a live demo link." }, { title: "Revisions", body: "We refine the details, copy, and mobile experience together." }, { title: "Launch", body: "I hand over the finished code or deploy the site to your domain." }]
  }
};

const PROJECT_URL = "https://t.me/NexusWeb_io";
const OPTION_STATE = new Set();
let currentLanguage = "ru";
let selectedBase = "landing";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderText() {
  const copy = COPY[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (copy[key] !== undefined) node.innerHTML = copy[key];
  });
  document.querySelectorAll(".lang-button").forEach(button => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelector(".language-switch")?.setAttribute("aria-label", currentLanguage === "ru" ? "Выбрать язык" : "Choose language");
  document.querySelector(".desktop-nav")?.setAttribute("aria-label", currentLanguage === "ru" ? "Основная навигация" : "Main navigation");
  const menu = document.querySelector(".mobile-nav");
  menu?.setAttribute("aria-label", currentLanguage === "ru" ? "Мобильная навигация" : "Mobile navigation");
  const toggle = document.querySelector(".menu-toggle");
  if (toggle) toggle.setAttribute("aria-label", currentLanguage === "ru" ? (toggle.getAttribute("aria-expanded") === "true" ? "Закрыть меню" : "Открыть меню") : (toggle.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu"));
  document.title = currentLanguage === "ru" ? "GOJO DEV // STUDIO — сайты, которые приводят клиентов" : "GOJO DEV // STUDIO — websites that bring customers";
  renderProjects();
  renderServices();
  renderCalculator();
  renderStages();
}

function renderProjects() {
  const copy = COPY[currentLanguage];
  document.getElementById("project-grid").innerHTML = copy.projects.map((project, index) => `
    <article class="project-card" data-reveal>
      <div class="project-image"><img src="${project.image}" alt="${escapeHtml(project.alt)}" loading="lazy" /><span class="image-overlay"></span><span class="project-number">0${index + 1} / 03</span></div>
      <div class="project-content">
        <div class="project-title-row"><h3>${escapeHtml(project.name)}</h3><span class="project-arrow" aria-hidden="true">↗</span></div>
        <p class="project-place">${escapeHtml(project.place)}</p>
        <p class="project-description">${escapeHtml(project.description)}</p>
        <div class="tag-list">${project.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(copy.openProject)}</span><span aria-hidden="true">↗</span></a>
      </div>
    </article>`).join("");
  observeReveals();
}

function renderServices() {
  const copy = COPY[currentLanguage];
  document.getElementById("services-grid").innerHTML = copy.services.map((service, index) => `
    <article class="service-card" data-reveal>
      <div class="service-top"><span>0${index + 1}</span><span class="service-icon" aria-hidden="true">${service.icon}</span></div>
      <h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.subtitle)}</p>
      <div class="service-bottom"><span class="service-price">от ${service.price} <small>USDT</small></span><span class="service-time">${escapeHtml(service.time)}</span></div>
    </article>`).join("");
  if (currentLanguage === "en") document.querySelectorAll(".service-price").forEach(node => { node.firstChild.textContent = "from " + node.firstChild.textContent.replace("от ", ""); });
  observeReveals();
}

function renderCalculator() {
  const copy = COPY[currentLanguage];
  const baseContainer = document.getElementById("project-options");
  baseContainer.setAttribute("aria-label", currentLanguage === "ru" ? "Тип проекта" : "Project type");
  baseContainer.innerHTML = copy.baseOptions.map(option => `
    <button type="button" class="project-option" role="radio" aria-checked="${selectedBase === option.id}" data-base="${option.id}">
      <span class="option-name">${escapeHtml(option.title)}</span><span class="option-price">${option.price} USDT</span>
    </button>`).join("");
  const extras = document.getElementById("extra-options");
  extras.innerHTML = copy.extras.map(option => `
    <label class="extra-option"><input type="checkbox" value="${option.id}" ${OPTION_STATE.has(option.id) ? "checked" : ""} /><span>${escapeHtml(option.title)}<small class="extra-price">+${option.price} USDT</small></span></label>`).join("");
  baseContainer.querySelectorAll("[data-base]").forEach(button => button.addEventListener("click", () => { selectedBase = button.dataset.base; updateEstimate(); }));
  extras.querySelectorAll("input").forEach(input => input.addEventListener("change", () => {
    if (input.checked) OPTION_STATE.add(input.value); else OPTION_STATE.delete(input.value);
    updateEstimate();
  }));
  updateEstimate();
}

function updateEstimate() {
  const copy = COPY[currentLanguage];
  const base = copy.baseOptions.find(option => option.id === selectedBase) || copy.baseOptions[0];
  const extras = copy.extras.filter(option => OPTION_STATE.has(option.id));
  const total = base.price + extras.reduce((sum, option) => sum + option.price, 0);
  document.querySelectorAll("[data-base]").forEach(button => button.setAttribute("aria-checked", String(button.dataset.base === selectedBase)));
  document.getElementById("estimate-total").textContent = String(total);
  const rows = [{ label: base.title, price: base.price }, ...extras.map(option => ({ label: option.title, price: option.price }))];
  document.getElementById("estimate-breakdown").innerHTML = rows.map(row => `<p class="breakdown-row"><span>${escapeHtml(row.label)}</span><span>${row.price} USDT</span></p>`).join("");
  const message = currentLanguage === "ru"
    ? `Здравствуйте! Хочу обсудить проект.\nФормат: ${base.title}\nОпции: ${extras.length ? extras.map(item => item.title).join(", ") : "без дополнительных опций"}\nИтого: ${total} USDT`
    : `Hello! I'd like to discuss a project.\nPackage: ${base.title}\nAdd-ons: ${extras.length ? extras.map(item => item.title).join(", ") : "none"}\nTotal: ${total} USDT`;
  document.getElementById("estimate-link").href = `${PROJECT_URL}?text=${encodeURIComponent(message)}`;
}

function renderStages() {
  const copy = COPY[currentLanguage];
  document.getElementById("process-grid").innerHTML = copy.stages.map((stage, index) => `
    <article class="process-card" data-reveal><span class="process-number">0${index + 1}</span><h3>${escapeHtml(stage.title)}</h3><p>${escapeHtml(stage.body)}</p></article>`).join("");
  observeReveals();
}

let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-reveal]").forEach(node => node.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
  document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach(node => revealObserver.observe(node));
}

document.querySelectorAll(".lang-button").forEach(button => button.addEventListener("click", () => {
  if (button.dataset.lang === currentLanguage) return;
  currentLanguage = button.dataset.lang;
  renderText();
}));

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-label", currentLanguage === "ru" ? (open ? "Закрыть меню" : "Открыть меню") : (open ? "Close menu" : "Open menu"));
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", currentLanguage === "ru" ? "Открыть меню" : "Open menu");
  document.body.classList.remove("menu-open");
}));

renderText();
