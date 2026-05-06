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
    /* ── Nav ──────────────────────────── */
    'nav-about': 'About',
    'nav-works': 'Works',
    'nav-lang': '中文',

    /* ── Works Hero ───────────────────── */
    'works-hero-1': 'Ideas',
    'works-hero-2': 'into',
    'works-hero-3': 'Reality.',
    'works-sub': 'A curated collection of my journey through design and code, <br> focused on solving problems with a human touch.',


    /* Projects */
    "tag_web_design": "Web design",
    "tag_uiux": "UI/UX Design",
    "tag_app_design": "App Design",
    "explore": "Explore",


    /* ── Footer / Contact ─────────────── */
    'footer.cta1'          : "Let's build",
    'footer.cta2'          : 'something',
    'footer.cta3'          : 'great',
    'footer-email': 'Email',
    'footer-social': 'Socials',
    'footer-loc': 'Location',
    'footer-loc-text': 'Taipei, Taiwan',
    'footer-copy': '© 2026 YU_XUAN Portfolio. All rights reserved.',
    'back-top': 'Back to top',
  },

  zh: {
    /* ── Nav ──────────────────────────── */
    'nav-about': '關於',
    'nav-works': '作品',
    'nav-lang': 'EN',

    /* ── Works Hero ───────────────────── */
    'works-hero-1': '將靈光乍現',
    'works-hero-2': '淬鍊成',
    'works-hero-3': '觸手可及的真實',
    'works-sub': '精選設計與程式交織的實作歷程<br>希望透過人本思維解決複雜問題',

    /* Projects */
    "tag_web_design": "網頁設計",
    "tag_uiux": "UI/UX 設計",
    "tag_app_design": "應用程式",
    "explore": "探索",

    /* ── Footer / Contact ─────────────── */
    // 這裡使用了你之前要求的長句子，增加視覺分量
    'footer.cta1'          : '透過設計與技術',
    'footer.cta2'          : '<em>構築引領未來</em>',
    'footer.cta3'          : '的互動藍圖',
    'footer-email': '電子郵件',
    'footer-social': '社群平台',
    'footer-loc': '所在地',
    'footer-loc-text': '台灣・台北',
    'footer-copy': '© 2026 YU_XUAN 作品集．保留所有權利',
    'back-top': '回到頂部',
  }
};

// 執行初始化
initLang(translations);

