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


const translations = {
  en: {
    /* ── Nav ──────────────────────────── */
    'nav-about':          'About',
    'nav-works':          'Works',
    'nav-lang':           '中文',
 
    /* ── Hero ─────────────────────────── */
    'hero-tag':           'Portfolio — 2026',
    'hero-line1':         'Design the Future',
    'hero-line2':         'of Human-AI <br>Interaction',
    'hero-subtitle':      'Crafting digital experiences through thoughtful design, immersive interactions, and clean engineering.',
    'hero-scroll':        'Scroll',
 
    /* ── About ────────────────────────── */
    'about-label':        'About',
    'about-h2-line1':     'Beyond pixels,',
    'about-h2-line2':     'I focus on <em>human experience</em>',
    'about-body':         'I am a UI/UX designer and creative developer specializing in the intersection of AI applications and front-end engineering. With a Master\'s in Interaction Design and experience in Fintech SaaS,<br>I build memorable digital experiences by merging user-centric research with robust, modern web development.',
    'about-skills-title': 'Skills',
    'exp-label':          'Experience',
    'exp-1':              'Work experience',
    'exp-2':              'Education',
    'exp-3':              'Skills & Languages',
    'exp-4':              'Awards',
 
    /* ── Projects ─────────────────────── */
    'projects-label':     'Selected Works',
    'projects-h2':        'Projects',
    'projects-view-all':  'View all →',
    'proj-1-title':       'Forword — AI English learning app',
    'proj-1-cat':         'APP Design',
    'proj-1-desc':        'FORWORD leverages generative AI to transform abstract vocabulary into personalized visual stimuli, turning static word lists into emotionally resonant experiences for better retention.',
    'proj-1-date':        '2023 — 6 weeks',
    'proj-2-title':       'MemoryFeast — AI senior-care dining app',
    'proj-2-cat':         'UI / UX Design',
    'proj-2-desc':        'MemoryFeast bridges physiological data with AI storytelling to transform restrictive senior diets into a personalized, joyful journey of culinary connection for Taiwan aging society.',
    'proj-2-date':        '2024 — 7 weeks',
    'proj-3-title':       'VistaAI — AI Fintech web',
    'proj-3-cat':         'Web Design',
    'proj-3-desc':        'VistaAI integrates multi-bank connectivity and AI reporting to streamline B2B asset management.',
    'proj-3-date':        '2026 — 10 weeks',
    'proj-4-title':       'BlitzGerman — AI-Powered Grammar Architecture',
    'proj-4-cat':         'Web Design',
    'proj-4-desc':        'BlitzGerman uses AI agents to demystify complex German grammar through intelligent, playful learning.',
    'proj-4-date':        '2026 — 7 weeks',
 
    /* ── Services ─────────────────────── */
    'services-label':     'Services',
    'svc-1-title':        'UX Strategy',
    'svc-1-desc':         'Defining core problems and user pain points to establish a solid foundation for meaningful digital solutions.',
    'svc-2-title':        'Web Design',
    'svc-2-desc':         'Turning static designs into interactive realities using modern frameworks and fluid animations.',
    'svc-3-title':        'AI Co-Creation',
    'svc-3-desc':         'Integrating AI models into the creative process enabling rapid prototyping and seamless design-to-code transitions.',
    'svc-4-title':        'Interface Design',
    'svc-4-desc':         'Building intuitive and responsive digital experiences that prioritize user engagement and clarity.',
    'svc-5-title':        'System Thinking',
    'svc-5-desc':         'Translating business goals and user needs into functional requirements through effective cross-domain collaboration.',
 
    /* ── Contact ──────────────────────── */
    'contact-line1':      "Let's build",
    'contact-highlight':  '<em>something</em>',
    'contact-line3':      'great',
    'contact-email-lbl':  'Email',
    'contact-social-lbl': 'Socials',
    'contact-loc-lbl':    'Location',
    'contact-loc-text':   'Taipei, Taiwan',
 
    /* ── Footer ───────────────────────── */
    'footer-copy':        '© 2025 Creative Portfolio. All rights reserved.',
    'back-top':           'Back to top',
  },
 
  zh: {
    /* ── Nav ──────────────────────────── */
    'nav-about':          '關於',
    'nav-works':          '作品集',
    'nav-lang':           'EN',
 
    /* ── Hero ─────────────────────────── */
    'hero-tag':           '作品集 — 2026',
    'hero-line1':         '設計未來',
    'hero-line2':         '人與 AI 的<br>互動體驗',
    'hero-subtitle':      '透過深思熟慮的設計、沈浸式互動與前端工程，打造令人難忘的數位體驗',
    'hero-scroll':        '滾動',
 
    /* ── About ────────────────────────── */
    'about-label':        '關於',
    'about-h2-line1':     '不只是視覺，',
    'about-h2-line2':     '更專注於<em>人本體驗</em>',
    'about-body':         '我是一名 UI/UX 設計師，專注於 AI 應用與前端工程的整合，擁有互動設計碩士學位及金融科技 SaaS 領域的實務經驗，透過以使用者為核心的研究與現代網頁開發技術，打造令人難忘的數位體驗',
    'about-skills-title': '技能',
    'exp-label':          '經歷',
    'exp-1':              '工作經驗',
    'exp-2':              '學歷',
    'exp-3':              '技能與語言',
    'exp-4':              '獲獎紀錄',
 
    /* ── Projects ─────────────────────── */
    'projects-label':     '精選作品',
    'projects-h2':        '專案',
    'projects-view-all':  '查看全部 →',
    'proj-1-title':       'Forword — AI 英文學習 App',
    'proj-1-cat':         '應用程式設計',
    'proj-1-desc':        'FORWORD 利用生成式 AI 將抽象單詞轉化為個人化視覺刺激，將靜態詞彙表變為有情感共鳴的記憶體驗',
    'proj-1-date':        '2023 — 6 週',
    'proj-2-title':       'MemoryFeast — AI 銀髮飲食 App',
    'proj-2-cat':         'UI / UX 設計',
    'proj-2-desc':        'MemoryFeast 橋接生理數據與 AI 敘事，為台灣高齡社會將限制性的銀髮飲食轉化為個人化且具情感連結的旅程',
    'proj-2-date':        '2024 — 7 週',
    'proj-3-title':       'Vista AI — AI 資產管理平台',
    'proj-3-cat':         '網頁設計',
    'proj-3-desc':        'VistaAI 整合多銀行連線與 AI 報表功能，為 B2B 資產管理打造流暢、高效的作業流程',
    'proj-3-date':        '2026 — 10 週',
    'proj-4-title':       'BlitzGerman — AI 驅動的語法邏輯架構',
    'proj-4-cat':         '網頁設計',
    'proj-4-desc':        'BlitzGerman 利用 AI 代理人，透過智慧且趣味的學習方式，破解複雜的德語語法',
    'proj-4-date':        '2026 — 7 週',
 
    /* ── Services ─────────────────────── */
    'services-label':     '服務項目',
    'svc-1-title':        'UX 策略',
    'svc-1-desc':         '釐清核心問題與使用者痛點，為有意義的數位解決方案奠定堅實基礎',
    'svc-2-title':        '網頁設計',
    'svc-2-desc':         '運用現代框架與流暢動畫，將靜態設計轉化為互動的真實體驗',
    'svc-3-title':        'AI 共創',
    'svc-3-desc':         '將 AI 模型整合進創意流程，實現快速原型製作與無縫的設計轉程式碼工作流',
    'svc-4-title':        '介面設計',
    'svc-4-desc':         '打造直覺且響應式的數位體驗，以提升使用者參與感與介面清晰度為優先',
    'svc-5-title':        '系統思維',
    'svc-5-desc':         '透過有效的跨領域協作，將商業目標與使用者需求轉化為可執行的功能規格',
 
    /* ── Contact ──────────────────────── */
    'contact-line1':      '在人機協作的浪潮',
    'contact-highlight':  '<em>一同構築引領未來</em>',
    'contact-line3':      '的互動藍圖',
    'contact-email-lbl':  '電子郵件',
    'contact-social-lbl': '社群平台',
    'contact-loc-lbl':    '所在地',
    'contact-loc-text':   '台北，台灣',
 
    /* ── Footer ───────────────────────── */
    'footer-copy':        '© 2026 YU_XUAN 作品集 保留所有權利',
    'back-top':           '回到頂部',
  },
};

initLang(translations);