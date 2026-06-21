const copy = {
  zh: {
    htmlLang: "zh-Hans",
    title: "SnapTidy - 每天一组，相册轻一点",
    description: "SnapTidy，把相册整理拆成每天一组轻任务。本机处理，不上传照片。",
    toggle: "EN",
    nav: ["功能", "iCloud", "截图", "隐私政策", "用户协议"],
    hero: {
      eyebrow: "Daily Photo Tidy",
      title: ["每天一组，", "相册轻一点。"],
      line: "A calm swipe ritual for a lighter photo library.",
      primary: "查看截图",
      secondary: "隐私优先",
      decisions: ["保留 Keep", "待清 Review", "心动 Love"],
      image: "./web_cn_01.png",
      alt: "SnapTidy 中文产品截图",
    },
    metrics: [
      ["37", "今日轻任务 / today"],
      ["0", "照片上传 / uploads"],
      ["30 天", "最近删除可恢复 / recoverable"],
    ],
    flow: {
      eyebrow: "How it feels",
      title: "不是清理工具，是每天三分钟的相册整理仪式。",
      intro: "Not a one-tap cleaner. A small, safe, repeatable habit.",
      cards: [
        ["从今天这一组开始", "SnapTidy 把庞大的相册拆成每天 20-60 张。你只需要完成眼前这一组。", "One small set at a time."],
        ["一张一秒，滑出判断", "左滑待清，右滑保留，双击心动。决策轻，节奏快。", "Swipe. Keep. Love."],
        ["先标记，再确认", "待清不等于删除。确认后才交给 iOS 移入「最近删除」。", "Review before delete."],
        ["Widget 变成入口", "在桌面或锁屏看下一张、做一次判断，不必先打开 App。", "Home & Lock Screen ready."],
      ],
      image: "./web_cn_01.png",
      imageAlt: "每日任务截图",
    },
    icloud: {
      eyebrow: "iCloud & Offline",
      title: "把等待 iCloud 的时间，变成离线整理的准备。",
      body: "如果照片在 iCloud，SnapTidy 通过 iOS 系统接口预先准备需要整理的内容。照片来自你的 iCloud，判断留在你的设备。",
      note: "Preload from your own iCloud through iOS system APIs. Decide offline. Nothing is uploaded to SnapTidy.",
      label: "出发前准备",
      strong: "Offline set ready",
      bullets: ["飞机、地铁、弱网也能继续整理", "所有决策保存在本机", "不接触 Apple ID 或 iCloud 凭据"],
    },
    screens: {
      eyebrow: "Screens",
      title: "中文与英文，真实产品截图。",
      intro: "Chinese and English product previews.",
      images: [
        ["./web_cn_02.png", "SnapTidy 中文滑卡截图", "滑卡整理 / Swipe deck"],
        ["./web_en_01.png", "SnapTidy English task screenshot", "Daily set / 每日任务"],
        ["./web_cn_05.png", "SnapTidy 中文 Widget 截图", "Widget / 桌面入口"],
      ],
    },
    privacy: {
      eyebrow: "Privacy First",
      title: "本机处理，不上传照片。",
      button: "查看隐私政策",
    },
    footer: ["用户协议", "隐私政策", "联系支持"],
    links: {
      privacy: "./privacy.html",
      terms: "./terms.html",
    },
  },
  en: {
    htmlLang: "en",
    title: "SnapTidy - A lighter photo library, one set a day",
    description: "SnapTidy turns photo cleanup into a small daily swipe habit. On-device processing. No photo uploads.",
    toggle: "中文",
    nav: ["Features", "iCloud", "Screens", "Privacy", "Terms"],
    hero: {
      eyebrow: "Daily Photo Tidy",
      title: ["One set a day,", "a lighter library."],
      line: "A calm swipe ritual for your iPhone photo library.",
      primary: "View Screens",
      secondary: "Privacy First",
      decisions: ["Keep", "Review", "Love"],
      image: "./web_en_01.png",
      alt: "SnapTidy English product preview",
    },
    metrics: [
      ["37", "today's light set"],
      ["0", "photo uploads"],
      ["30 days", "recoverable in Recently Deleted"],
    ],
    flow: {
      eyebrow: "How it feels",
      title: "Not another cleaner. A three-minute daily ritual.",
      intro: "A small, safe, repeatable way to make your library lighter.",
      cards: [
        ["Start with today's set", "SnapTidy breaks a huge library into 20-60 photos a day. Finish the set in front of you.", "One small set at a time."],
        ["One second per photo", "Swipe left to review, right to keep, double-tap to love. Fast rhythm, low pressure.", "Swipe. Keep. Love."],
        ["Mark first, confirm later", "Review does not mean delete. Photos move only after your confirmation through iOS.", "Review before delete."],
        ["Widget as the entry point", "Make a quick decision from your Home or Lock Screen without opening the app first.", "Home & Lock Screen ready."],
      ],
      image: "./web_en_01.png",
      imageAlt: "Daily set screenshot",
    },
    icloud: {
      eyebrow: "iCloud & Offline",
      title: "Turn iCloud waiting into offline preparation.",
      body: "If your photos are in iCloud, SnapTidy prepares the set through iOS system APIs. Photos come from your own iCloud. Decisions stay on your device.",
      note: "Preload before travel. Decide on a plane, subway, or weak network. Nothing is uploaded to SnapTidy.",
      label: "Before you go",
      strong: "Offline set ready",
      bullets: ["Keep tidying on a flight, subway, or weak network", "Every decision stays on device", "No Apple ID or iCloud credential access"],
    },
    screens: {
      eyebrow: "Screens",
      title: "Chinese and English product previews.",
      intro: "Real app screens, not marketing mockups.",
      images: [
        ["./web_en_02.png", "SnapTidy English swipe deck screenshot", "Swipe deck"],
        ["./web_en_01.png", "SnapTidy English daily set screenshot", "Daily set"],
        ["./web_en_05.png", "SnapTidy English widget screenshot", "Widget"],
      ],
    },
    privacy: {
      eyebrow: "Privacy First",
      title: "On-device processing. No photo uploads.",
      button: "Read Privacy Policy",
    },
    footer: ["Terms", "Privacy", "Support"],
    links: {
      privacy: "./privacy-en.html",
      terms: "./terms-en.html",
    },
  },
};

const get = (selector) => document.querySelector(selector);
const getAll = (selector) => [...document.querySelectorAll(selector)];

function setText(selector, text) {
  const element = get(selector);
  if (element) element.textContent = text;
}

function setLanguage(lang) {
  const c = copy[lang];
  document.documentElement.lang = c.htmlLang;
  document.title = c.title;
  get('meta[name="description"]')?.setAttribute("content", c.description);
  localStorage.setItem("snaptidy-language", lang);

  setText(".lang-toggle", c.toggle);
  getAll(".nav-links a").forEach((link, index) => {
    if (c.nav[index]) link.textContent = c.nav[index];
  });

  setText(".hero .eyebrow", c.hero.eyebrow);
  getAll(".hero h1 span").forEach((span, index) => {
    span.textContent = c.hero.title[index] || "";
  });
  setText(".hero-line", c.hero.line);
  setText(".hero-actions .primary", c.hero.primary);
  setText(".hero-actions .secondary", c.hero.secondary);
  getAll(".floating-decision").forEach((item, index) => {
    item.textContent = c.hero.decisions[index] || "";
  });
  const heroImage = get(".phone-main");
  if (heroImage) {
    heroImage.src = c.hero.image;
    heroImage.alt = c.hero.alt;
  }

  getAll(".metrics article").forEach((item, index) => {
    item.querySelector("strong").textContent = c.metrics[index][0];
    item.querySelector("span").textContent = c.metrics[index][1];
  });

  setText(".flow-section .section-title .eyebrow", c.flow.eyebrow);
  setText(".flow-section .section-title h2", c.flow.title);
  setText(".flow-section .section-title p:last-child", c.flow.intro);
  const storyCards = getAll(".story-card");
  storyCards.forEach((card, index) => {
    const values = c.flow.cards[index];
    if (!values) return;
    card.querySelector("h3").textContent = values[0];
    card.querySelector("p").textContent = values[1];
    card.querySelector("small").textContent = values[2];
  });
  const storyImage = get(".story-card.large img");
  if (storyImage) {
    storyImage.src = c.flow.image;
    storyImage.alt = c.flow.imageAlt;
  }

  setText(".icloud-copy .eyebrow", c.icloud.eyebrow);
  setText(".icloud-copy h2", c.icloud.title);
  setText(".icloud-copy p:not(.eyebrow):not(.english-line)", c.icloud.body);
  setText(".english-line", c.icloud.note);
  setText(".icloud-panel span", c.icloud.label);
  setText(".icloud-panel strong", c.icloud.strong);
  getAll(".icloud-panel li").forEach((item, index) => {
    item.textContent = c.icloud.bullets[index] || "";
  });

  setText(".screens-section .eyebrow", c.screens.eyebrow);
  setText(".screens-section h2", c.screens.title);
  setText(".screens-section .section-title p:last-child", c.screens.intro);
  getAll(".screen-pairs figure").forEach((figure, index) => {
    const values = c.screens.images[index];
    const image = figure.querySelector("img");
    if (image) {
      image.src = values[0];
      image.alt = values[1];
    }
    figure.querySelector("figcaption").textContent = values[2];
  });

  setText(".privacy-band .eyebrow", c.privacy.eyebrow);
  setText(".privacy-band h2", c.privacy.title);
  setText(".privacy-band .button", c.privacy.button);
  get('.nav-links a[href*="privacy"]')?.setAttribute("href", c.links.privacy);
  get('.nav-links a[href*="terms"]')?.setAttribute("href", c.links.terms);
  get(".privacy-band .button")?.setAttribute("href", c.links.privacy);

  getAll(".site-footer nav a").forEach((link, index) => {
    if (c.footer[index]) link.textContent = c.footer[index];
  });
  const footerLinks = getAll(".site-footer nav a");
  footerLinks[0]?.setAttribute("href", c.links.terms);
  footerLinks[1]?.setAttribute("href", c.links.privacy);
}

const initialLanguage = localStorage.getItem("snaptidy-language") === "en" ? "en" : "zh";
setLanguage(initialLanguage);

get(".lang-toggle")?.addEventListener("click", () => {
  const next = document.documentElement.lang === "en" ? "zh" : "en";
  setLanguage(next);
});
