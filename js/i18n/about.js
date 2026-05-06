// Copyright (c) 2026 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// i18n/home.js
import { initLang, NAV_KEYS } from './core.js';


// ── 1. 翻譯資料 ───────────────────────────────────────────────────────────────

const translations = {
  en: {
    // Navigation
    'nav.about'            : 'About',
    'nav.works'            : 'Works',
    'nav.lang'             : '中文',

    // Hero（逐詞，對應 6 個 .word > span）
    'hero.w1'              : 'Where',
    'hero.w2'              : 'aesthetic',
    'hero.w3'              : 'vision',
    'hero.w4'              : 'meets',
    'hero.w5'              : 'technical',
    'hero.w6'              : 'precision.',

    // Small but Mighty
    'sm.para1'             : 'I am a designer-developer who bridges the gap between visionary aesthetics, interactive storytelling, and technical execution.',
    'sm.para2'             : 'Rooted in interaction research and shaped by international perspectives, I craft digital products where AI-driven intelligence meets human-centric emotion.',
    'sm.para3'             : 'To me, great design is a balance of fluidity and logic — where a seamless service flow meets clean, modern code, and every micro-interaction is engineered with purpose.',
    'sm.tag'               : 'Strength',
    'sm.t1'                : 'Multidisciplinary.',
    'sm.t2'                : 'Analytical.',
    'sm.t3'                : 'UX Optimization.',

    // Profile
    'profile.eyebrow'      : 'Who I am',
    'profile.title'        : 'Profile',
    'profile.cv'           : 'Check CV',
    'profile.intro'        : "I am a multidisciplinary designer specializing in interaction design and visual storytelling. With a background in foreign languages and a Master's in Interaction Design, I bridge the gap between human communication and digital experiences, creating intuitive interfaces that resonate with users globally.",

    // Education
    'edu.label'            : 'Education',
    'edu.ncku'             : 'National Cheng Kung University',
    'edu.ncku.sub'         : 'B.S. Foreign Language and Literatures, 2018',
    'edu.ntut'             : 'National Taipei University of Technology',
    'edu.ntut.sub'         : 'M.A. Interaction Design, 2022',
    'edu.fhp'              : 'FH Potsdam',
    'edu.fhp.sub'          : 'Exchange. Design, 2024ss',

    // Skills
    'skills.label'         : 'Skills',

    // Experience
    'exp.label'            : 'Experience',
    'exp.jepun.role'       : 'UI UX Designer — Jepun',
    'exp.jepun.date'       : '2025 / 07 - Now',
    'exp.jepun.desc'       : 'Bridging AI-driven concepts and technical execution by delivering end-to-end UX solutions, from complex requirement decomposition and design system management to WCAG-compliant frontend implementation.',
    'exp.woheng.role'      : 'UI UX Intern — Woheng',
    'exp.woheng.date'      : '2024 / 06 - 09',
    'exp.woheng.desc'      : 'Spearheaded crypto-platform optimizations through competitive analysis and iterative user interface design.',

    // Awards
    'award.label'          : 'Awards',
    'award.mf.title'       : 'MemoryFeast',
    'award.mf.date'        : '2023 / 10 / 27',
    'award.mf.desc'        : 'Won Honorable Mention in the 2023 Wellness Science and Technology Innovation and Entrepreneurship Competition.',
    'award.signify.title'  : 'Signify always by your side',
    'award.signify.date'   : '2023 / 07 / 02',
    'award.signify.desc'   : 'Won the Bronze Medal Award in the Signify of Times Young Creative Awards.',

    // Footer
    'footer.cta1'          : "Let's build",
    'footer.cta2'          : 'something',
    'footer.cta3'          : 'great',
    'footer.email.label'   : 'Email',
    'footer.social.label'  : 'Socials',
    'footer.loc.label'     : 'Location',
    'footer.loc.text'      : 'Taipei, Taiwan',
    'footer.copy'          : '© 2026 YU_XUAN Portfolio. All rights reserved.',
    'footer.backtop'       : 'Back to top',
  },

  zh: {
    // Navigation
    'nav.about'            : '關於',
    'nav.works'            : '作品',
    'nav.lang'             : 'EN',

    // Hero（中文斷詞對應原 6 個 span，維持動畫節奏）
    'hero.w1'              : '美學視野',
    'hero.w2'              : '與',
    'hero.w3'              : '技術實踐',
    'hero.w4'              : '的',
    'hero.w5'              : '完美',
    'hero.w6'              : '結合',

    // Small but Mighty
    'sm.para1'             : '我是一位設計師兼開發者，擅長串接前衛美學、互動敘事與技術執行之間的落差',
    'sm.para2'             : '深根互動研究，融合國際視野，我打造 AI 智能驅動與人本情感兼具的數位產品',
    'sm.para3'             : '對我而言，優秀的設計是流動性與邏輯性的平衡——流暢的服務流程搭配簡潔現代的程式碼，每個微互動都有其存在的意義',
    'sm.tag'               : '強項',
    'sm.t1'                : '跨領域',
    'sm.t2'                : '邏輯分析',
    'sm.t3'                : '體驗優化',

    // Profile
    'profile.eyebrow'      : '關於我',
    'profile.title'        : '個人檔案',
    'profile.cv'           : '查看履歷',
    'profile.intro'        : '我是一位多元跨域設計師，專注於互動設計與視覺敘事，擁有外文系學士及互動設計碩士學位，致力於搭建人類溝通與數位體驗之間的橋樑，打造能與全球使用者產生共鳴的直覺介面',

    // Education
    'edu.label'            : '學歷',
    'edu.ncku'             : '國立成功大學',
    'edu.ncku.sub'         : '外國語文學系學士 - 2018',
    'edu.ntut'             : '國立臺北科技大學',
    'edu.ntut.sub'         : '互動設計碩士 - 2022',
    'edu.fhp'              : '波茨坦應用科技大學',
    'edu.fhp.sub'          : '交換生・設計系 - 2024',

    // Skills
    'skills.label'         : '技能',

    // Experience
    'exp.label'            : '工作經歷',
    'exp.jepun.role'       : 'UI UX 設計師 — Jepun',
    'exp.jepun.date'       : '2025 / 07 - 至今',
    'exp.jepun.desc'       : '將複雜 AI 與金融業務需求轉化為直觀的數位體驗，從需求分析、Design System 建立到前端 RWD 與無障礙開發的端到端實作與跨部門溝通能力',
    'exp.woheng.role'      : 'UI UX 設計實習生 — Woheng',
    'exp.woheng.date'      : '2024 / 06 - 09',
    'exp.woheng.desc'      : '透過競品分析與迭代式介面設計，推動加密貨幣平台的使用者體驗優化',

    // Awards
    'award.label'          : '獲獎紀錄',
    'award.mf.title'       : 'MemoryFeast',
    'award.mf.date'        : '2023 / 10 / 27',
    'award.mf.desc'        : '榮獲 2023 健康科技創新創業競賽佳作',
    'award.signify.title'  : 'Signify 永遠陪伴你身旁',
    'award.signify.date'   : '2023 / 07 / 02',
    'award.signify.desc'   : '榮獲 Signify of Times 青年創意大賞銅牌獎',

    // Footer
    'footer.cta1'          : '透過設計與技術',
    'footer.cta2'          : '<em>構築引領未來</em>',
    'footer.cta3'          : '的互動藍圖',
    'footer.email.label'   : '電子郵件',
    'footer.social.label'  : '社群平台',
    'footer.loc.label'     : '所在地',
    'footer.loc.text'      : '台灣・台北',
    'footer.copy'          : '© 2026 YU_XUAN Portfolio. 版權所有。',
    'footer.backtop'       : '回到頂部',
  },
};

initLang(translations);


// ── 2. 特殊元素處理 ───────────────────────────────────────────────────────────

/**
 * roll-text 按鈕由逐字 <span style="--i:N"> 組成，
 * 切換語言時需解構重建，讓 CSS hover 動畫正常運作。
 */
function applyRollText(lang) {
  const btn = document.getElementById('cv-btn');
  if (!btn) return;

  const text   = translations[lang]['profile.cv'];
  const roll   = btn.querySelector('.roll-text');
  if (!roll) return;

  roll.innerHTML = [...text].map((char, i) =>
    `<span style="--i:${i + 1}">${char === ' ' ? '&nbsp;' : char}</span>`
  ).join('');
}



function initRevealAnimation() {
  // 用 id 前綴精準殺掉所有 reveal 相關的 ScrollTrigger
  ScrollTrigger.getAll()
    .filter(st => st.vars.id?.startsWith('reveal-'))
    .forEach(st => st.kill());

  document.querySelectorAll('.reveal').forEach((text, index) => {
    let splitText = new SplitType(text, { type: 'words' });
    text._splitInstance = splitText;

    // 清除 GSAP 殘留的 inline style，避免 opacity 卡住s

    const section = text.closest('section');

    gsap.from(splitText.words, {
      opacity: 0.3,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        id: `reveal-${index}`,  // 加上 id 方便之後精準 kill
        trigger: section,
        start: "top 60%",
        end: "+=800",
        scrub: 1,
        pin: false,
        markers: false,
      }
    });
  });

  // 告訴 ScrollTrigger 重新計算所有位置
  ScrollTrigger.refresh();
}

// ── 4. 語言切換後的後處理 hook ───────────────────────────────────────────────

/**
 * core.js 套用翻譯後呼叫此函式，或在 lang-toggle 的 click 事件後接著執行。
 * 若 core.js 提供 onLangChange callback，請在那裡呼叫 onPageLangChange。
 */
function onPageLangChange(lang) {
  applyRollText(lang);
}

window.addEventListener('langchange', (e) => {
  console.log('langchange received:', e.detail.lang); // ← 加這行
  onPageLangChange(e.detail.lang);
});

// ── 5. DOMContentLoaded：初始化頁面預設語言 ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('portfolio-lang') || 'en';
  applyRollText(currentLang);

  initRevealAnimation();
});