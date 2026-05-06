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

// i18n/core.js
const LANG_KEY = 'portfolio-lang';

export const NAV_KEYS = {
  en: {
    'nav-about': 'About',
    'nav-works': 'Works',
    'nav-lang':  '中文',
  },
  zh: {
    'nav-about': '關於',
    'nav-works': '作品集',
    'nav-lang':  'EN',
  },
};

export function applyLang(translations, lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-twin]').forEach(el => {
    const key = el.dataset.i18nTwin;
    if (t[key] !== undefined) {
      el.querySelectorAll('.text-item, .overlay-text-item')
        .forEach(span => span.textContent = t[key]);
    }
  });

  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';

  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } })); // ✅
}

export function initLang(translations) {
  let current = localStorage.getItem(LANG_KEY) || 'en';

  function toggle() {
    current = current === 'en' ? 'zh' : 'en';
    applyLang(translations, current);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-toggle')?.addEventListener('click', toggle);
    document.getElementById('overlay-lang')?.addEventListener('click', e => {
      e.preventDefault(); toggle();
    });
    applyLang(translations, current);
  });
}