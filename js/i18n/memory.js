
import { initLang, NAV_KEYS } from './core.js';


const memoryTranslations = {
  en: {
    /* ── Nav ──────────────────────────── */
    'nav-about': 'About',
    'nav-works': 'Works',
    'nav-lang': '中文',


    // Hero
    "hero-eyebrow": "2024",
    "hero-desc":
      "A data-driven nutrition platform designed for Taiwan's post-2025 ultra-aged society. MemoryFeast integrates physiological data with AI-powered storytelling to transform restrictive dietary management into a joyful journey of culinary connection.",
    "hero-location-title": "Award-Winning Collaborative Project",
    "hero-location-sub": "UI Design & UX Optimization | 2-Person Team",

    // About
    "section-label-about": "About the project",
    "about-industry-label": "Industry",
    "about-industry-value": "HealthTech",
    "about-role-label": "Role",
    "about-role-value": "UI Design & UX Optimization",
    "about-features-label": "Core Features",
    "tag-nutrition": "Smart Nutrition Integration",
    "tag-memory": "AI Memory Reconstruction",
    "tag-community": "Intergenerational Community",
    "about-title": "Bridging physiological health with emotional well-being",
    "about-body-1":
      "MemoryFeast is an AI-driven platform addressing Taiwan's post-2025 ultra-aged society. We transform restrictive dietary management into a joyful, storytelling experience by integrating physiological data with personalized nutrition.",
    "about-body-2":
      "As the UI/UX lead, I optimized complex workflows and simplified health data inputs. My focus was on creating an intuitive interface for memory-driven AI assistance, enabling seniors to \"recreate lost flavors\" and foster deeper emotional connections.",

    // Concept & Research
    "section-label-concept": "Concept & Research",
    "concept-body":
      "As Taiwan becomes a super-aged society, MemoryFeast uses AI to combine health data with nostalgic flavors. We recreate childhood tastes tailored to modern nutritional needs, ensuring seniors enjoy meals that are both emotionally fulfilling and medically safe.",

    "card-label-philosophy": "Core Philosophy",
    "card-title-proust": "The Proust Effect",
    "card-body-proust":
      "Harnessing taste and smell to trigger positive emotional recall, we use AI to balance nostalgic flavors with precise nutrition, allowing elderly users to eat happily and healthily.",

    "card-label-olfactory": "Olfactory Memory",
    "card-title-scent": "Scent Over Sight",
    "card-body-scent":
      "\"Odors are more potent than visual or verbal cues in eliciting emotional memories... olfactory perception influences how we remember the past.\"",
    "card-cite-scent": "— Rachel S. Herz (Brown University, 2002)",

    "card-label-psychological": "Psychological Impact",
    "card-title-nostalgia": "Nostalgic Well-being",
    "card-body-nostalgia":
      "Nostalgia provides an effective path to enhancing subjective well-being, fostering social connections and mitigating feelings of loneliness among the elderly.",
    "card-cite-nostalgia": "— Polletta & Callahan, 2017; Li et al., 2023",

    // Design Concept
    "section-label-design": "Design Concept",
    "solution-title": "Core Features",
    "solution-tag-1": "# Smart Nutrition Integration",
    "solution-tag-2": "# AI Memory Reconstruction",
    "solution-tag-3": "# Intergenerational Community",

    "card-label-audience": "Target Audience",
    "card-title-audience": "Solitary Seniors",
    "card-body-audience":
      "Seniors with chronic conditions living alone often find cooking for one a \"hassle.\" This leads to poor dietary choices and unhealthy medical reports, creating a gap that requires simple, nutritional intervention.",

    "card-label-strategy": "Design Strategy",
    "card-title-strategy": "Inclusive Simplicity",
    "card-body-strategy":
      "We use large text, high contrast, and oversized buttons to accommodate aging vision. By stripping away UI clutter and simplifying the flow, we ensure the experience is intuitive and stress-free.",

    "card-label-color": "Color Palette",
    "card-title-color": "Warmth & Appetite",
    "card-body-color":
      "Appetizing Orange (#FF641E) on a Warm Yellow base creates a cozy, inviting feel. Dark Coffee text ensures maximum readability while maintaining a soft, organic aesthetic.",

    // Summary
    "section-label-summary": "Summary",
    "summary-industry-label": "Industry",
    "summary-industry-value": "HealthTech",
    "summary-role-label": "Role",
    "summary-tag-research": "UX Research",
    "summary-tag-ui": "UI Design",
    "summary-tag-strategy": "Product Strategy",
    "summary-tech-label": "Key Tech",
    "summary-tag-ai": "AI Nutrition Evaluation",
    "summary-tag-olfactory": "Olfactory UX",
    "summary-tag-inclusive": "Inclusive Design",
    "testimonial-body":
      "<em>MemoryFeast</em> bridges the gap between health and happiness, using AI to transform nostalgic food memories into medically safe, nutritious meals—ensuring that for every senior, <em>every bite is a journey home.</em>",

    // Next Project
    "next-label": "Next project",
    "next-desc":
      "VistaAI — a B2B Fintech platform for intelligent asset management, empowering financial institutions with AI chatbots for real-time portfolio tracking, automated reporting, and seamless multi-bank balance integration.",
    "memory.next.btn":            "Next Case",

    // Footer
    "footer-copy": "© 2026 YU_XUAN Portfolio. All rights reserved.",
    "back-top": "Back to top",
  },

  zh: {
    /* ── Nav ──────────────────────────── */
    'nav-about': '關於',
    'nav-works': '作品',
    'nav-lang': 'EN',

    // Hero
    "hero-eyebrow": "2024",
    "hero-desc":
      "專為台灣 2025 年後超高齡社會打造的數據驅動營養平台。MemoryFeast 將生理數據與 AI 敘事能力結合，把受限的飲食管理，轉化為充滿溫度的飲食記憶旅程",
    "hero-location-title": "得獎協作專案",
    "hero-location-sub": "UI 設計與 UX 優化｜雙人團隊",

    // About
    "section-label-about": "關於此專案",
    "about-industry-label": "產業",
    "about-industry-value": "健康科技",
    "about-role-label": "角色",
    "about-role-value": "UI 設計與 UX 優化",
    "about-features-label": "核心功能",
    "tag-nutrition": "智慧營養整合",
    "tag-memory": "AI 記憶重建",
    "tag-community": "跨世代社群",
    "about-title": "連結生理健康與情感幸福感",
    "about-body-1":
      "MemoryFeast 是一款 AI 驅動平台，專為應對台灣 2025 年後的超高齡社會而生。我們將生理數據與個人化營養結合，把受限的飲食管理轉化為充滿故事性的愉快體驗",
    "about-body-2":
      "身為 UI/UX 主導者，我優化了複雜的操作流程，簡化健康數據輸入介面，專注於打造直覺的 AI 記憶輔助介面，讓長者能「重現失落的味道」，建立更深層的情感連結",

    // Concept & Research
    "section-label-concept": "概念與研究",
    "concept-body":
      "隨著台灣進入超高齡社會，MemoryFeast 透過 AI 結合健康數據與懷舊風味，將童年記憶中的滋味重新詮釋，符合現代營養需求，讓長者既能情感滿足，又能安心飲食",

    "card-label-philosophy": "核心理念",
    "card-title-proust": "普魯斯特效應",
    "card-body-proust":
      "透過味覺與嗅覺喚起正向情感記憶，我們以 AI 平衡懷舊風味與精準營養，讓年長用戶在享受美食的同時，兼顧健康",

    "card-label-olfactory": "嗅覺記憶",
    "card-title-scent": "氣味勝於視覺",
    "card-body-scent":
      "「氣味在喚起情感記憶方面，比視覺或語言線索更具效力……嗅覺感知影響著我們對過去的記憶方式」",
    "card-cite-scent": "— Rachel S. Herz（布朗大學，2002）",

    "card-label-psychological": "心理影響",
    "card-title-nostalgia": "懷舊與幸福感",
    "card-body-nostalgia":
      "懷舊情感是提升主觀幸福感的有效途徑，有助於促進社交連結，並緩解年長者的孤獨感",
    "card-cite-nostalgia": "— Polletta & Callahan, 2017；Li et al., 2023",

    // Design Concept
    "section-label-design": "設計概念",
    "solution-title": "核心功能",
    "solution-tag-1": "# 智慧營養整合",
    "solution-tag-2": "# AI 記憶重建",
    "solution-tag-3": "# 跨世代社群",

    "card-label-audience": "目標族群",
    "card-title-audience": "獨居長者",
    "card-body-audience":
      "患有慢性病的獨居長者常認為「一個人煮飯太麻煩」，因而導致飲食不均衡、健檢報告亮紅燈，需要簡單且具有營養導引的介入方案",

    "card-label-strategy": "設計策略",
    "card-title-strategy": "無障礙簡潔設計",
    "card-body-strategy":
      "採用大字體、高對比與超大按鈕，因應老化視力需求，透過精簡 UI 元素與流程，確保體驗直覺且無壓力",

    "card-label-color": "色彩計畫",
    "card-title-color": "溫暖與食慾感",
    "card-body-color":
      "以橙色（#FF641E）搭配暖黃底色，營造溫馨親切的氛圍。深咖啡色文字確保最佳易讀性，同時維持柔和的有機質感",

    // Summary
    "section-label-summary": "專案總結",
    "summary-industry-label": "產業",
    "summary-industry-value": "健康科技",
    "summary-role-label": "角色",
    "summary-tag-research": "UX 研究",
    "summary-tag-ui": "UI 設計",
    "summary-tag-strategy": "產品策略",
    "summary-tech-label": "核心技術",
    "summary-tag-ai": "AI 營養評估",
    "summary-tag-olfactory": "嗅覺 UX",
    "summary-tag-inclusive": "無障礙設計",
    "testimonial-body":
      "<em>MemoryFeast </em>搭起健康與幸福之間的橋樑，以 AI 將懷舊飲食記憶轉化為安全、營養的餐點——讓每一位長者的每一口<em>都是回家的旅程</em>",

    // Next Project
    "next-label": "下一個專案",
    "next-desc":
      "VistaAI——專為智慧資產管理打造的 B2B 金融科技平台，透過 AI 聊天機器人賦能金融機構，實現即時投資組合追蹤、自動化報表生成與多銀行餘額無縫整合",

    "memory.next.btn": "下一個案例",

    // Footer
    "footer-copy": "© 2026 YU_XUAN Portfolio. 版權所有",
    "back-top": "回到頂部",
  },
};

initLang(memoryTranslations);

/**
 * roll-text 按鈕由逐字 <span style="--i:N"> 組成，
 * 切換語言時需解構重建，讓 CSS hover 動畫正常運作。
 */
function applyRollText(lang) {
  const btn = document.getElementById('next-project-btn');
  // 如果這頁沒有 next-project-btn 就直接跳出
  if (!btn) return;

  const text = memoryTranslations[lang]['memory.next.btn'];
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