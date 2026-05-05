

import { initLang, NAV_KEYS } from './core.js';


const vistaTranslations = {
  en: {
    // Navigation
    'nav.about'            : 'About',
    'nav.works'            : 'Works',
    'nav.lang'             : '中文',

    // Hero
    "hero-eyebrow": "2026",
    "hero-desc":
      "A B2B Fintech platform powered by Google Gemini to simplify asset management. VistaAI integrates real-time portfolio tracking, LLM-driven prompt-based reporting, and multi-bank connectivity into one intuitive, intelligent interface.",
    "hero-location-title": "PoC Development Project",
    "hero-location-sub": "Product Strategy, UI/UX Design & Frontend Development",

    // About
    "section-label-about": "About the project",
    "about-industry-label": "Industry",
    "about-industry-value": "B2B Fintech",
    "about-role-label": "Role",
    "about-role-value": "Product Strategy & Full-stack Design",
    "about-features-label": "Core Features",
    "tag-chatbot": "Conversational AI Chatbot",
    "tag-nav": "Real-time NAV Tracking",
    "tag-report": "Prompt-to-Report Engine",
    "about-title": "Simplifying financial oversight with conversational AI",
    "about-body-1":
      "VistaAI is a B2B SaaS PoC that transforms complex financial data into actionable insights. Through an advanced AI chatbot, users can monitor portfolios, net asset values, and transaction histories using simple natural language.",
    "about-body-2":
      "As the sole designer, I architected the entire user journey—from multi-bank API integration to the chatbot interface. I focused on removing the friction from financial reporting, allowing users to generate statements and query balances via a seamless, prompt-driven experience.",

    // Core Features nav cards
    "section-label-features": "Core Features",
    "nav-card-01-title": "Asset Overview",
    "nav-card-01-desc": "Real-time tracking of portfolio trends and P&L across all assets.",
    "nav-card-02-title": "AI Chatbot",
    "nav-card-02-desc": "Conversational queries for NAV, reports, and automated asset entry.",
    "nav-card-03-title": "Asset Management",
    "nav-card-03-desc": "Unified management for real estate, stocks, and funds.",
    "nav-card-04-title": "Report Center",
    "nav-card-04-desc": "Generate, view, and export comprehensive financial statements.",
    "nav-card-05-title": "Bank Integration",
    "nav-card-05-desc": "Securely link accounts and manage profile-based financial data.",

    // Feature Detail 01
    "section-label-asset": "Asset Overview",
    "detail-01-title": "Asset Overview",
    "detail-01-desc":
      "A comprehensive dashboard that tracks real-time asset fluctuations and stock pool performance through interactive weekly, monthly, and annual charts. It provides a centralized view of upcoming transactions with an automated alert system to flag assets nearing expiration.",

    // Feature Detail 02
    "section-label-chatbot": "Conversational AI Assistant",
    "detail-02-title": "Conversational AI Assistant",
    "detail-02-desc":
      "An intelligent chatbot that processes natural language to fetch latest NAVs or export PDF reports. It also supports voice-to-data entry, automatically syncing spoken asset information into the management system.",

    // Design System
    "section-label-design": "Design System",

    // Summary
    "section-label-summary": "Summary",
    "summary-industry-label": "Industry",
    "summary-industry-value": "B2B Fintech",
    "summary-role-label": "Role",
    "summary-tag-ux": "UI/UX Design",
    "summary-tag-fe": "Frontend Development",
    "summary-tag-arch": "System Architecture",
    "summary-tech-label": "Key Tech",
    "summary-tag-scraper": "Async Web Scraper",
    "summary-tag-pdf": "PDF Generation",
    "summary-tag-ds": "Design System",
    "summary-tag-rwd": "RWD & Dark Mode",
    "testimonial-body":
      "VistaAI redefines financial management by merging complex data with conversational intelligence. Utilizing asynchronous scrapers for real-time tracking and automated PDF reporting, it delivers a seamless, dark-mode-ready experience—ensuring every insight is as clear as a vision.",

    // Next Project
    "next-label": "Next project",
    "next-desc":
      "An AI-powered ecosystem designed to demystify complex German grammar. It leverages interactive AI agents and intuitive design to simplify noun genders, case systems, and sentence structures through intelligent synthesis.",
    "vista.next.btn": "Next Case",

    // Footer
    "footer-copy": "© 2026 YU_XUAN Portfolio. All rights reserved.",
    "back-top": "Back to top",
  },

  zh: {
    // Navigation
    'nav.about'            : '關於',
    'nav.works'            : '作品',
    'nav.lang'             : 'EN',

    // Hero
    "hero-eyebrow": "2026",
    "hero-desc":
      "由 Google Gemini 驅動的 B2B 金融科技平台，專為簡化資產管理而生。VistaAI 將即時投資組合追蹤、LLM 提示式報表生成與多銀行連接整合於單一直覺介面",
    "hero-location-title": "概念驗證開發專案",
    "hero-location-sub": "產品策略、UI/UX 設計與前端開發",

    // About
    "section-label-about": "關於此專案",
    "about-industry-label": "產業",
    "about-industry-value": "B2B 金融科技",
    "about-role-label": "角色",
    "about-role-value": "產品策略與全端設計",
    "about-features-label": "核心功能",
    "tag-chatbot": "對話式 AI 聊天機器人",
    "tag-nav": "即時資產淨值追蹤",
    "tag-report": "提示驅動報表引擎",
    "about-title": "以對話式 AI 簡化財務管理",
    "about-body-1":
      "VistaAI 是一款 B2B SaaS 概念驗證產品，將複雜的財務數據轉化為可行動的洞察。透過進階 AI 聊天機器人，用戶可以自然語言監控投資組合、資產淨值與交易紀錄",
    "about-body-2":
      "身為唯一設計師，我架構了完整的使用者旅程——從多銀行 API 串接到聊天機器人介面，致力於消除財務報表流程的摩擦，讓用戶能透過流暢的提示驅動體驗生成對帳單、查詢餘額",

    // Core Features nav cards
    "section-label-features": "核心功能",
    "nav-card-01-title": "資產總覽",
    "nav-card-01-desc": "即時追蹤投資組合趨勢與各資產損益",
    "nav-card-02-title": "AI 聊天助理",
    "nav-card-02-desc": "以對話方式查詢資產淨值、報表，並支援語音建檔",
    "nav-card-03-title": "資產管理",
    "nav-card-03-desc": "統一管理不動產、股票與基金等多元資產",
    "nav-card-04-title": "報表中心",
    "nav-card-04-desc": "生成、檢視並匯出完整的財務報表",
    "nav-card-05-title": "銀行整合",
    "nav-card-05-desc": "安全連結帳戶，管理個人化財務數據",

    // Feature Detail 01
    "section-label-asset": "資產總覽",
    "detail-01-title": "資產總覽",
    "detail-01-desc":
      "完整的儀表板，透過互動式週、月、年圖表即時追蹤資產波動與股票池表現，並提供即將到期交易的集中檢視，搭配自動預警系統標示臨近到期的資產",

    // Feature Detail 02
    "section-label-chatbot": "對話式 AI 助理",
    "detail-02-title": "對話式 AI 助理",
    "detail-02-desc":
      "智慧聊天機器人可解析自然語言，即時查詢最新資產淨值或匯出 PDF 報告，同時支援語音輸入資產資訊，自動同步至資產管理系統",

    // Design System
    "section-label-design": "設計系統",

    // Summary
    "section-label-summary": "專案總結",
    "summary-industry-label": "產業",
    "summary-industry-value": "B2B 金融科技",
    "summary-role-label": "角色",
    "summary-tag-ux": "UI/UX 設計",
    "summary-tag-fe": "前端開發",
    "summary-tag-arch": "系統架構",
    "summary-tech-label": "核心技術",
    "summary-tag-scraper": "非同步爬蟲",
    "summary-tag-pdf": "PDF 自動生成",
    "summary-tag-ds": "設計系統",
    "summary-tag-rwd": "響應式與深色模式",
    "testimonial-body":
      "<em>VistaAI</em> 將複雜數據與對話式智能融合，重新定義財務管理，透過非同步爬蟲實現即時追蹤，結合自動化 PDF 報表生成，提供流暢的深色模式體驗，<em>讓每一個洞察都清晰如現</em>",

    // Next Project
    "next-label": "下一個專案",
    "next-title": "BlitzGerman",
    "next-desc":
      "一套以 AI 為核心的德語學習生態系統，旨在拆解複雜的德語文法。透過互動式 AI 代理與直覺設計，以智慧合成簡化名詞性別、格變化與句型結構",

    "vista.next.btn":  "下一個案例",

    // Footer
    "footer-copy": "© 2026 YU_XUAN Portfolio. 版權所有",
    "back-top": "回到頂部",
  },
};



initLang(vistaTranslations);


/**
 * roll-text 按鈕由逐字 <span style="--i:N"> 組成，
 * 切換語言時需解構重建，讓 CSS hover 動畫正常運作。
 */
function applyRollText(lang) {
  const btn = document.getElementById('next-project-btn');
  // 如果這頁沒有 next-project-btn 就直接跳出
  if (!btn) return;

  const text = vistaTranslations[lang]['vista.next.btn'];
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