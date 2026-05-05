

// ============================================================
//  forword.js — Forword Page i18n Translations
//  Usage: loaded by your core i18n engine; keys map to
//         data-i18n attributes in forword.html
// ============================================================

import { initLang, NAV_KEYS } from './core.js';

const forwordTranslations = {
  en: {

    // Navigation
    'nav.about'            : 'About',
    'nav.works'            : 'Works',
    'nav.lang'             : '中文',

    /* ── Hero ─────────────────────────────────────────────── */
    "forword.hero.eyebrow":        "2023",
    // hero-title ("Forword") is intentionally excluded

    "forword.hero.desc":
      "FORWORD leverages AI-generated imagery to combat vocabulary forgetfulness. "
      + "By transforming rote memorization into a visual experience, it makes language "
      + "learning both highly efficient and engaging.",

    "forword.hero.location.title": "Independent Project",
    "forword.hero.location.sub":   "End-to-end: Literature Research & Design",

    /* ── About ────────────────────────────────────────────── */
    "forword.about.label":          "About the project",

    "forword.about.industry.label": "Industry",
    "forword.about.industry.value": "Language Learning",

    "forword.about.role.label":     "Role",
    "forword.about.role.value":     "UX Research & UI Design",

    "forword.about.features.label": "Core Features",
    "forword.about.tag.repo":       "Unified Repository",
    "forword.about.tag.social":     "Social Learning",
    "forword.about.tag.ai":         "AI Visual Mnemonics",

    "forword.about.heading":
      "Transforming rote memorization into sensory experience",

    "forword.about.body1":
      "The name Forword—a blend of \"Word\" and \"Forward\"—reflects my core belief: "
      + "that every word mastered is a step toward a student's goals.",

    "forword.about.body2":
      "FORWORD harnesses generative AI to bridge the gap between abstract vocabulary "
      + "and long-term retention. By transforming student-written sentences into personalized "
      + "visual stimuli, the platform turns static word lists into emotionally resonant experiences.",

    /* ── Preliminary Research ─────────────────────────────── */
    "forword.research.label":      "Preliminary Research",

    "forword.research.title":      "Introduction",
    "forword.research.intro":
      "Through interviews with 10 diverse learners, I replaced assumptions with authentic "
      + "insights, uncovering the real-world pain points that drive effective vocabulary acquisition.",

    "forword.problem1.label":      "Problem 1",
    "forword.problem1.title":      "Scattered Resources",
    "forword.problem1.body":
      "\"I write words in my notebook, on sticky notes, and in my phone; when it's time to study, "
      + "<strong>I can never find everything.</strong>\"",
    "forword.problem1.cite":       "— Participant 3",

    "forword.problem2.label":      "Problem 2",
    "forword.problem2.title":      "High Entry Barrier",
    "forword.problem2.body":
      "\"I spend more time typing than studying. Sometimes "
      + "<strong>I skip adding words</strong> simply because the process takes too long.\"",
    "forword.problem2.cite":       "— Participant 8",

    "forword.problem3.label":      "Problem 3",
    "forword.problem3.title":      "Lack of Context",
    "forword.problem3.body":
      "\"Memorizing word lists feels like cramming phone numbers—they "
      + "<strong>don't stick in my mind</strong> without a real connection.\"",
    "forword.problem3.cite":       "— Participant 7",

    /* ── Design Concept ───────────────────────────────────── */
    "forword.design.label":        "Design Concept",

    "forword.solution.title":      "Core Features",
    "forword.solution.tag.repo":   "# Unified Repository",
    "forword.solution.tag.social": "# Social Learning",
    "forword.solution.tag.ai":     "# AI Visual Mnemonics",

    "forword.design1.label":       "Target Audience",
    "forword.design1.title":       "Digital Natives",
    "forword.design1.body":
      "For high schoolers raised on short-form content, traditional learning often fails to "
      + "hold focus. FORWORD addresses this by providing the interactive, visually stimulating, "
      + "and personalized experiences these students need to stay engaged.",

    "forword.design2.label":       "Design Strategy",
    "forword.design2.title":       "Instant Gratification",
    "forword.design2.body":
      "By streamlining input through OCR scanning, we minimize cognitive overload. "
      + "This allows students to focus on the \"High Reward\"—instant AI-generated imagery "
      + "that transforms rote memorization into a dopamine-driven creative loop.",

    "forword.design3.label":       "Color Palette",
    "forword.design3.title":       "Psychology of Blue",
    "forword.design3.body":
      "I chose Sky Blue based on Takashi Ishii's theory that blue acts as a catalyst for memory. "
      + "Known as a \"Connecting Color,\" it fosters neural associations and mental clarity, "
      + "making the UI itself a tool for better information retention.",

    /* ── Summary ──────────────────────────────────────────── */
    "forword.summary.label":        "Summary",

    "forword.summary.industry.label": "Industry",
    "forword.summary.industry.value": "Language Learning",

    "forword.summary.role.label":   "Role",
    "forword.summary.tag.ux":       "UX Research",
    "forword.summary.tag.ui":       "UI Design",

    "forword.summary.tech.label":   "Key Tech",
    "forword.summary.tag.aigc":     "AIGC Integration",
    "forword.summary.tag.proto":    "Interactive Prototype",

    "forword.testimonial":
      "<em>Forword </em>transforms vocabulary learning into a visual journey, "
      + "using generative AI to turn student-written sentences into memorable images—ensuring "
      + "every word learned is<em> a step forward.</em>",

    /* ── Next Project ─────────────────────────────────────── */
    "forword.next.label":          "Next project",
    "forword.next.desc":
      "MemoryFeast is a data-driven meal-ordering platform designed for Taiwan's post-2025 "
      + "ultra-aged society. By integrating physiological data to provide personalized nutritional "
      + "support for seniors managing chronic health, we help users rediscover the joy of "
      + "connection—turning every meal into a meaningful step toward holistic well-being.",
    "forword.next.btn":            "Next Case",

    /* ── Footer ───────────────────────────────────────────── */
    "forword.footer.copy":         "© 2026 YU_XUAN Portfolio. All rights reserved.",
    "forword.footer.back":         "Back to top",
  },

  zh: {

    // Navigation
    'nav.about'            : '關於',
    'nav.works'            : '作品',
    'nav.lang'             : 'EN',

    /* ── Hero ─────────────────────────────────────────────── */
    "forword.hero.eyebrow":        "2023",
    // hero-title ("Forword") 不翻譯

    "forword.hero.desc":
      "FORWORD 運用 AI 生成圖像對抗單字遺忘"
      + "將死記硬背轉化為視覺化體驗，讓語言學習同時兼顧高效與趣味",

    "forword.hero.location.title": "個人專案",
    "forword.hero.location.sub":   "完整流程：文獻研究與設計",

    /* ── About ────────────────────────────────────────────── */
    "forword.about.label":          "關於此專案",

    "forword.about.industry.label": "產業",
    "forword.about.industry.value": "語言學習",

    "forword.about.role.label":     "角色",
    "forword.about.role.value":     "UX 研究與 UI 設計",

    "forword.about.features.label": "核心功能",
    "forword.about.tag.repo":       "統一單字庫",
    "forword.about.tag.social":     "社群學習",
    "forword.about.tag.ai":         "AI 視覺記憶術",

    "forword.about.heading":
      "將死記硬背轉化為感官體驗",

    "forword.about.body1":
      "Forword 這個名字融合了「Word（單字）」與「Forward（前進）」——"
      + "承載著我的核心信念：每一個掌握的單字，都是學生邁向目標的一步",

    "forword.about.body2":
      "FORWORD 運用生成式 AI，填補抽象詞彙與長期記憶之間的鴻溝"
      + "透過將學生自造句子轉化為個人化視覺刺激，讓靜態單字表蛻變為情感共鳴的學習體驗",

    /* ── Preliminary Research ─────────────────────────────── */
    "forword.research.label":      "前期研究",

    "forword.research.title":      "研究背景",
    "forword.research.intro":
      "透過訪談 10 位背景各異的學習者，以真實洞察取代主觀假設，"
      + "挖掘出影響詞彙學習成效的關鍵痛點",

    "forword.problem1.label":      "問題一",
    "forword.problem1.title":      "資源散落四處",
    "forword.problem1.body":
      "「我把單字寫在筆記本、便利貼和手機裡；"
      + "等到要複習時，<strong>卻怎麼也找不齊。</strong>」",
    "forword.problem1.cite":       "— 受訪者 3",

    "forword.problem2.label":      "問題二",
    "forword.problem2.title":      "輸入門檻過高",
    "forword.problem2.body":
      "「打字花的時間比讀書還多。有時候我乾脆"
      + "<strong>放棄新增單字</strong>，因為流程實在太繁瑣了」",
    "forword.problem2.cite":       "— 受訪者 8",

    "forword.problem3.label":      "問題三",
    "forword.problem3.title":      "缺乏情境連結",
    "forword.problem3.body":
      "「背單字清單就像在硬記電話號碼——"
      + "沒有真實連結，<strong>根本記不住</strong>」",
    "forword.problem3.cite":       "— 受訪者 7",

    /* ── Design Concept ───────────────────────────────────── */
    "forword.design.label":        "設計概念",

    "forword.solution.title":      "核心功能",
    "forword.solution.tag.repo":   "# 統一單字庫",
    "forword.solution.tag.social": "# 社群學習",
    "forword.solution.tag.ai":     "# AI 視覺記憶術",

    "forword.design1.label":       "目標族群",
    "forword.design1.title":       "數位原住民",
    "forword.design1.body":
      "對於從小接觸短影音的高中生而言，傳統學習方式難以維持專注"
      + "FORWORD 以互動化、視覺化、個人化的體驗回應這群學習者的需求，讓他們保持高度投入",

    "forword.design2.label":       "設計策略",
    "forword.design2.title":       "即時成就感",
    "forword.design2.body":
      "透過 OCR 掃描簡化輸入流程，降低認知負荷"
      + "讓學生專注於「高回報」——即時生成的 AI 圖像將死記硬背轉化為多巴胺驅動的創意迴圈",

    "forword.design3.label":       "色彩系統",
    "forword.design3.title":       "藍色心理學",
    "forword.design3.body":
      "依據石井孝之的理論，藍色能作為記憶的催化劑，因此選用天空藍作為主色"
      + "這個「連結色」有助於促進神經聯想與思緒清晰，讓介面本身也成為輔助記憶的工具",

    /* ── Summary ──────────────────────────────────────────── */
    "forword.summary.label":        "專案總結",

    "forword.summary.industry.label": "產業",
    "forword.summary.industry.value": "語言學習",

    "forword.summary.role.label":   "角色",
    "forword.summary.tag.ux":       "UX 研究",
    "forword.summary.tag.ui":       "UI 設計",

    "forword.summary.tech.label":   "關鍵技術",
    "forword.summary.tag.aigc":     "AIGC 整合",
    "forword.summary.tag.proto":    "互動原型",

    "forword.testimonial":
      "<em>Forword </em>將詞彙學習轉化為一段視覺旅程，"
      + "運用生成式 AI 將學生的造句化為難忘的圖像——"
      + "讓每一個學會的單字，都成為<em>向前的一步</em>",

    /* ── Next Project ─────────────────────────────────────── */
    "forword.next.label":          "下一個專案",
    "forword.next.title":          "MemoryFeast",
    "forword.next.desc":
      "MemoryFeast 是一套以數據為核心的餐點訂購平台，專為台灣 2025 年後的超高齡社會而設計"
      + "透過整合生理數據，為慢性病長者提供個人化營養支援，協助用戶重拾飲食連結的喜悅——"
      + "讓每一餐都成為邁向全面健康的有意義一步",
    "forword.next.btn":            "下一個案例",

    /* ── Footer ───────────────────────────────────────────── */
    "forword.footer.copy":         "© 2026 YU_XUAN Portfolio. 保留所有權利",
    "forword.footer.back":         "回到頂部",
  },
};

initLang(forwordTranslations);


/**
 * roll-text 按鈕由逐字 <span style="--i:N"> 組成，
 * 切換語言時需解構重建，讓 CSS hover 動畫正常運作。
 */
function applyRollText(lang) {
  const btn = document.getElementById('next-project-btn');
  // 如果這頁沒有 next-project-btn 就直接跳出
  if (!btn) return;

  const text = forwordTranslations[lang]['forword.next.btn'];
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