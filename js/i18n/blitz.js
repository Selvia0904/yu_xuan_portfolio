

// ============================================================
//  blitz.js — BlitzGerman Page i18n Translations
//  Usage: loaded by your core i18n engine; keys map to
//         data-i18n attributes in blitz.html
// ============================================================

import { initLang, NAV_KEYS } from './core.js';

const blitzTranslations = {
  en: {

    // Navigation
    'nav.about'            : 'About',
    'nav.works'            : 'Works',
    'nav.lang'             : '中文',

    /* ── Hero ─────────────────────────────────────────────── */
    "blitz.hero.eyebrow":         "2026",
    // hero-title ("BlitzGerman") is intentionally excluded

    "blitz.hero.desc":
      "An AI-powered German learning ecosystem designed to demystify complex grammar. "
      + "<strong>BlitzGerman</strong> combines interactive AI Agents with playful design "
      + "elements to simplify noun genders, case systems, and sentence structures through "
      + "intelligent synthesis.",

    "blitz.hero.location.title":  "Personal Side Project (React + Vite)",
    "blitz.hero.location.sub":    "Product Strategy, UI/UX Design & Frontend Development",

    /* ── About ────────────────────────────────────────────── */
    "blitz.about.label":          "About the project",

    "blitz.about.industry.label": "Industry",
    "blitz.about.industry.value": "AI Learning",

    "blitz.about.role.label":     "Role",
    "blitz.about.role.value":     "Product Strategy & Full-stack Development",

    "blitz.about.features.label": "Core Features",
    "blitz.about.tag.grammar":    "AI Grammar Synthesis",
    "blitz.about.tag.plural":     "Visual Plural Mapping",
    "blitz.about.tag.quiz":       "Adaptive Quiz Engine",

    "blitz.about.heading":
      "Demystifying German grammar with playful intelligence",

    "blitz.about.body1":
      "<strong>BlitzGerman</strong> is a React-based platform designed to 'lightning-bolt' "
      + "the language learning process. It combines a visual-first interface with "
      + "high-efficiency AI to transform complex German grammar into an intuitive, "
      + "high-speed experience.",

    "blitz.about.body2":
      "By leveraging <strong>AI long-term memory</strong>, the platform creates a "
      + "personalized learning loop that tracks user progress. From hand-drawn 'Plural Maps' "
      + "to AI agents that synthesize custom content into structured guides, it provides a "
      + "truly adaptive ecosystem for mastering German.",

    /* ── Problem Definition ───────────────────────────────── */
    "blitz.problem.label":        "Problem Definition",

    "blitz.problem.title":        "The Complexity of German Grammar",
    "blitz.problem.intro":
      "Learning German is less about memorizing words and more about mastering a complex "
      + "logic system. Traditional notes can't easily capture its messy web of grammar and syntax.",

    "blitz.problem1.label":       "Problem 1",
    "blitz.problem1.title":       "Chaotic Plural Logic",
    "blitz.problem1.body":
      "\"There are over 10 ways to form a plural in German. Without a "
      + "<strong>visual map</strong>, memorizing them feels like a guessing game with no "
      + "clear patterns.\"",

    "blitz.problem2.label":       "Problem 2",
    "blitz.problem2.title":       "The Case Maze (Kasus)",
    "blitz.problem2.body":
      "\"Nominativ, Akkusativ, Dativ... the articles keep changing. "
      + "<strong>I can't visualize</strong> how the role of a noun shifts within a "
      + "sentence's structure.\"",

    "blitz.problem3.label":       "Problem 3",
    "blitz.problem3.title":       "Rigid vs. Flexible Syntax",
    "blitz.problem3.body":
      "\"Sentence construction feels like solving a puzzle. If I move one piece, the "
      + "<strong>entire grammar logic collapses</strong> without immediate feedback.\"",

    /* ── Core Features ────────────────────────────────────── */
    "blitz.features.label":       "Core Features",

    "blitz.feat1.num":            "01",
    "blitz.feat1.title":          "Grammar\nMastery",
    "blitz.feat1.desc":
      "Systematic breakdown of German cases with structured notes and interactive examples.",

    "blitz.feat2.num":            "02",
    "blitz.feat2.title":          "Interactive\nPlural Map",
    "blitz.feat2.desc":
      "Visualize noun plural rules on a dynamic canvas with real-time mind map synchronization.",

    "blitz.feat3.num":            "03",
    "blitz.feat3.title":          "AI Smart\nTutor",
    "blitz.feat3.desc":
      "Generate personalized learning content and deeper insights based on your progress.",

    "blitz.feat4.num":            "04",
    "blitz.feat4.title":          "Knowledge\nManager",
    "blitz.feat4.desc":
      "Effortlessly organize web findings, practice tests, and recently edited entries in one place.",

    /* ── Summary ──────────────────────────────────────────── */
    "blitz.summary.label":        "Summary",

    "blitz.summary.industry.label": "Industry",
    "blitz.summary.industry.value": "EdTech / Language Learning",

    "blitz.summary.role.label":   "Role",
    "blitz.summary.tag.design":   "Product Design",
    "blitz.summary.tag.frontend": "Frontend Development",
    "blitz.summary.tag.viz":      "Interactive Visualization",

    "blitz.summary.tech.label":   "Key Tech",
    "blitz.summary.tag.ai":       "AI Tutoring System",
    "blitz.summary.tag.data":     "Data-Driven UI",
    "blitz.summary.tag.state":    "Complex State Management",

    "blitz.testimonial":
      "<em>BlitzGerman</em> transforms the 'monster' of German grammar into a logical, "
      + "visual journey. By integrating a <strong>dynamic Plural Map</strong> for real-time "
      + "rule visualization and <strong>AI-driven personalized insights</strong>, it bridges "
      + "the gap between rote memorization and intuitive mastery—making the complex German "
      + "case system <em>as strikes of lightning.</em>",

    /* ── Next Project ─────────────────────────────────────── */
    "blitz.next.label":           "Next project",
    "blitz.next.desc":
      "FORWORD leverages AI-generated imagery to combat vocabulary forgetfulness. "
      + "By transforming rote memorization into a visual experience, it makes language "
      + "learning both highly efficient and engaging.",
    "blitz.next.btn":             "Next Case",

    /* ── Footer ───────────────────────────────────────────── */
    "blitz.footer.copy":          "© 2026 YU_XUAN Portfolio. All rights reserved.",
    "blitz.footer.back":          "Back to top",
  },

  zh: {

     // Navigation
    'nav.about'            : '關於',
    'nav.works'            : '作品',
    'nav.lang'             : 'EN',

    /* ── Hero ─────────────────────────────────────────────── */
    "blitz.hero.eyebrow":         "2026",
    // hero-title ("BlitzGerman") 不翻譯

    "blitz.hero.desc":
      "一套以 AI 驅動的德語學習生態系統，專為破解複雜文法而生"
      + "<strong>BlitzGerman</strong> 結合互動式 AI 助理與趣味視覺設計，"
      + "透過智能綜合分析，讓名詞性別、格變系統與句型結構不再艱澀難懂",

    "blitz.hero.location.title":  "個人專案（React + Vite）",
    "blitz.hero.location.sub":    "產品策略、UI/UX 設計與前端開發",

    /* ── About ────────────────────────────────────────────── */
    "blitz.about.label":          "關於此專案",

    "blitz.about.industry.label": "產業",
    "blitz.about.industry.value": "AI 語言學習",

    "blitz.about.role.label":     "角色",
    "blitz.about.role.value":     "產品策略與全端開發",

    "blitz.about.features.label": "核心功能",
    "blitz.about.tag.grammar":    "AI 文法合成",
    "blitz.about.tag.plural":     "視覺化複數地圖",
    "blitz.about.tag.quiz":       "自適應測驗引擎",

    "blitz.about.heading":
      "以趣味智能破解德語文法之謎",

    "blitz.about.body1":
      "<strong>BlitzGerman</strong> 是一個以 React 構建的學習平台，"
      + "旨在用「閃電速度」重塑語言學習歷程。它以視覺優先的介面結合高效 AI，"
      + "將繁瑣的德語文法轉化為直觀、高速的學習體驗。",

    "blitz.about.body2":
      "藉由 <strong>AI 長期記憶</strong>，平台建立個人化的學習回饋迴圈，持續追蹤學習進度"
      + "從手繪風「複數地圖」到能將自訂內容整合為結構化指南的 AI 代理，"
      + "提供一套真正自適應的德語學習生態系統",

    /* ── Problem Definition ───────────────────────────────── */
    "blitz.problem.label":        "問題定義",

    "blitz.problem.title":        "德語文法的複雜性",
    "blitz.problem.intro":
      "學德語，與其說是在記單字，不如說是在理解一套複雜的邏輯系統"
      + "傳統筆記難以梳理德語文法與句法交織的龐雜脈絡",

    "blitz.problem1.label":       "問題一",
    "blitz.problem1.title":       "混亂的複數規則",
    "blitz.problem1.body":
      "「德語複數構成方式超過 10 種。沒有一張"
      + "<strong>視覺地圖</strong>，死記硬背就像毫無規律的猜謎遊戲。」",

    "blitz.problem2.label":       "問題二",
    "blitz.problem2.title":       "格變迷宮（Kasus）",
    "blitz.problem2.body":
      "「第一格、第四格、第三格⋯⋯冠詞一直在變。"
      + "<strong>我無法視覺化</strong>名詞在句子結構中的角色如何隨之轉換。」",

    "blitz.problem3.label":       "問題三",
    "blitz.problem3.title":       "固定語序 vs. 靈活語序",
    "blitz.problem3.body":
      "「組句子就像在拼拼圖。只要移動一個元素，"
      + "<strong>整個文法邏輯就崩潰了</strong>，而且沒有即時回饋。」",

    /* ── Core Features ────────────────────────────────────── */
    "blitz.features.label":       "核心功能",

    "blitz.feat1.num":            "01",
    "blitz.feat1.title":          "文法\n精通系統",
    "blitz.feat1.desc":
      "以結構化筆記與互動範例，系統性拆解德語格變規則",

    "blitz.feat2.num":            "02",
    "blitz.feat2.title":          "互動式\n複數地圖",
    "blitz.feat2.desc":
      "在動態畫布上視覺化名詞複數規則，並與心智圖即時同步",

    "blitz.feat3.num":            "03",
    "blitz.feat3.title":          "AI 智能\n家教",
    "blitz.feat3.desc":
      "根據學習進度，生成個人化學習內容與深度洞察",

    "blitz.feat4.num":            "04",
    "blitz.feat4.title":          "知識\n管理中心",
    "blitz.feat4.desc":
      "輕鬆整合網路收藏、練習測驗與近期編輯紀錄，一站統一管理",

    /* ── Summary ──────────────────────────────────────────── */
    "blitz.summary.label":        "專案總結",

    "blitz.summary.industry.label": "產業",
    "blitz.summary.industry.value": "教育科技 / 語言學習",

    "blitz.summary.role.label":   "角色",
    "blitz.summary.tag.design":   "產品設計",
    "blitz.summary.tag.frontend": "前端開發",
    "blitz.summary.tag.viz":      "互動視覺化",

    "blitz.summary.tech.label":   "關鍵技術",
    "blitz.summary.tag.ai":       "AI 輔導系統",
    "blitz.summary.tag.data":     "資料驅動 UI",
    "blitz.summary.tag.state":    "複雜狀態管理",

    "blitz.testimonial":
      "<em>BlitzGerman</em> 將德語文法這頭「怪獸」轉化為清晰可循的視覺旅程"
      + "透過整合即時規則視覺化的<strong>動態複數地圖</strong>"
      + "與<strong>AI 驅動的個人化洞察</strong>，"
      + "它彌合了死記硬背與直覺掌握之間的鴻溝——"
      + "讓繁複的德語格變系統<em>如閃電般清晰</em>",

    /* ── Next Project ─────────────────────────────────────── */
    "blitz.next.label":           "下一個專案",
    "blitz.next.title":           "Forword",
    "blitz.next.desc":
      "FORWORD 運用 AI 生成圖像對抗單字遺忘。"
      + "將死記硬背轉化為視覺化體驗，讓語言學習同時兼顧高效與趣味",
    "blitz.next.btn":             "下一個案例",

    /* ── Footer ───────────────────────────────────────────── */
    "blitz.footer.copy":          "© 2026 YU_XUAN Portfolio. 保留所有權利",
    "blitz.footer.back":          "回到頂部",
  },
};

initLang(blitzTranslations);

/**
 * roll-text 按鈕由逐字 <span style="--i:N"> 組成，
 * 切換語言時需解構重建，讓 CSS hover 動畫正常運作。
 */
function applyRollText(lang) {
  const btn = document.getElementById('next-project-btn');
  // 如果這頁沒有 next-project-btn 就直接跳出
  if (!btn) return;

  const text = blitzTranslations[lang]['blitz.next.btn'];
  const roll = btn.querySelector('.roll-text');
  if (!roll || !text) return;

  roll.innerHTML = [...text].map((char, i) =>
    `<span style="--i:${i + 1}">${char === ' ' ? '&nbsp;' : char}</span>`
  ).join('');
}

// 監聽語言切換
window.addEventListener('langchange', (e) => {
  applyRollText(e.detail.lang);
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('portfolio-lang') || 'en';
  applyRollText(currentLang);
});