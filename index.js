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

document.addEventListener("DOMContentLoaded", ()=>{

    /* ─── PRELOADING GSAP ─── */
    // 檢查 sessionStorage 是否有 'hasLoaded' 標記
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    const preloader = document.querySelector(".preloader");

    if (hasLoaded) {
    // --- 情況 A：已經載入過 (從子頁面回來) ---
    // 直接移除或隱藏 Preloader，不執行任何動畫
    if (preloader) {
        preloader.style.display = 'none';
    }
    } else {
    // --- 情況 B：第一次進入網站 ---
    const tl = gsap.timeline({
        onComplete: () => {
        // 動態執行完畢後，存入標記
        sessionStorage.setItem('hasLoaded', 'true');
        }
    });

    tl.to(".loader-percent", {
        innerText: 100,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power2.inOut",
        onUpdate: function() {
        const val = document.querySelector(".loader-percent")?.innerText;
        if (val === undefined) return;
        gsap.set(".loader-bar", { width: val + "%" });
        }
    });

    // 退場動畫
    tl.to(".loader-percent-wrap", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "expo.in"
    });

    tl.to(".loader-bar-wrapper", {
        scaleY: 0,
        opacity: 0,
        duration: 0.5
    });

    tl.to(".preloader", {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut"
    });
    }


    /* ==========================================
   NAVIGATION & MOBILE MENU LOGIC
   ========================================== */
    const nav = document.querySelector('nav');
    const hamburger = document.getElementById('hamburger');
    const navOverlay = document.getElementById('navOverlay');

    // 1. 處理滾動時 nav 的背景變化
    window.addEventListener('scroll', () => {
        // 當滾動超過 50px 且選單「沒有」開啟時，才加入 scrolled class
        // 這樣可以避免開啟選單時背景色與選單重疊的問題
        if (!nav.classList.contains('menu-open')) {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // 2. 鎖定/解鎖捲軸 (防止手機版選單開啟時後方還可以滑動)
    function lockScroll()   { document.body.style.overflow = 'hidden'; }
    function unlockScroll() { document.body.style.overflow = ''; }

    // 3. 開啟選單
    function openMenu() {
        hamburger.classList.add('is-open');
        navOverlay.classList.add('is-open');
        nav.classList.add('menu-open');
        hamburger.setAttribute('aria-expanded', 'true');
        lockScroll();
    }

    // 4. 關閉選單
    function closeMenu() {
        hamburger.classList.remove('is-open');
        navOverlay.classList.remove('is-open');
        nav.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        unlockScroll();
        
        // 關閉後重新檢查滾動位置，確保 nav 背景色正確
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }

    // 5. 點擊漢堡按鈕切換
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.contains('is-open');
            isOpen ? closeMenu() : openMenu();
        });
    }

    // 6. 點擊選單內的任何連結 (About, Works, Contact, 語言) 後自動關閉
        // 這裡包含 .overlay-link 以及切換語言的 #overlay-lang
        // 6. 點擊選單內的連結後關閉選單並導航
    navOverlay.querySelectorAll('.overlay-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // 如果是 # 開頭（例如語言切換），不處理導航
            if (!href || href === '#') return;
            
            e.preventDefault(); // 阻止瀏覽器預設跳轉
            
            closeMenu(); // 先關閉選單（解鎖 scroll）
            
            // 等動畫結束後再跳轉
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });



    // 7. 按下 Escape 鍵關閉
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && navOverlay.classList.contains('is-open')) {
            closeMenu();
        }
    });

    /* ==========================================
    (補充) 語言切換同步
    若你在桌面版切換了語言，手機版文字也應同步切換 (視你的需求而定)
    ========================================== */
    const langToggles = document.querySelectorAll('#lang-toggle, #overlay-lang');
    langToggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = btn.innerText;
            const targetLang = currentLang === '中文' ? 'EN' : '中文';
            
            // 將所有語言按鈕文字同步
            langToggles.forEach(el => el.innerText = targetLang);
            
            // 這裡放你的語言切換邏輯 (例如換網址或換文字)
            console.log('切換語言至:', targetLang);
        });
    });

    /* NAV LOGO */
   const logo = document.querySelector('.nav-logo');
    const maskCircle = document.getElementById('mask-circle');
    const maxRadius = 500;
    let animFrame;

    function animateTo(target) {
    cancelAnimationFrame(animFrame);
    function step() {
        let r = parseFloat(maskCircle.getAttribute('r'));
        const diff = target - r;
        if (Math.abs(diff) < 1) { maskCircle.setAttribute('r', target); return; }
        maskCircle.setAttribute('r', r + diff * 0.12); // easing
        animFrame = requestAnimationFrame(step);
    }
    step();
    }

    logo.addEventListener('mouseenter', () => animateTo(maxRadius));
    logo.addEventListener('mouseleave', () => animateTo(0));

    /* ─── CURSOR ─── */
    const cur = document.getElementById('cursor');
    const curF = document.getElementById('cursorFollower');
    let cx=0,cy=0,fx=0,fy=0;
    document.addEventListener('mousemove', e => { cx=e.clientX; cy=e.clientY; });
    (function loop() {
    requestAnimationFrame(loop);
    fx += (cx-fx)*0.12; fy += (cy-fy)*0.12;
    cur.style.transform = `translate3d(${cx-4}px,${cy-4}px,0)`;
    curF.style.transform = `translate3d(${fx-18}px,${fy-18}px,0)`;
    })();
    document.querySelectorAll('a,.project-card,.service-item,.cta-button').forEach(el => {
    el.addEventListener('mouseenter', () => { curF.style.width='60px'; curF.style.height='60px'; curF.style.backgroundColor='rgba(240,240,240,0.08)'; });
    el.addEventListener('mouseleave', () => { curF.style.width='36px'; curF.style.height='36px'; curF.style.backgroundColor='transparent'; });
    });


        /* ─── MAGNIFIER (放大鏡 cursor) ─── */
    const magnifier   = document.getElementById('magnifier');
    const highlightEl = document.getElementById('highlight');

    let magnifierActive = false;

    // 放大鏡跟隨滑鼠，同時更新 background-position 製造放大鏡視窗感
    document.addEventListener('mousemove', e => {
      if (!magnifierActive || !magnifier || !highlightEl) return;

      // 定位放大鏡中心對準游標
      magnifier.style.left = e.clientX + 'px';
      magnifier.style.top  = e.clientY + 'px';

      // 根據游標在 highlight 元素內的相對位置，移動 gif 背景
      const rect = highlightEl.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width)  * 100;
      const relY = ((e.clientY - rect.top)  / rect.height) * 100;
      const clampedX = Math.max(0, Math.min(100, relX));
      const clampedY = Math.max(0, Math.min(100, relY));
      magnifier.style.backgroundPosition = `${clampedX}% ${clampedY}%`;
    });

    if (highlightEl && magnifier) {
      highlightEl.addEventListener('mouseenter', () => {
        magnifierActive = true;
        magnifier.classList.add('active');
        // 隱藏原本的 cursor
        cur.style.opacity  = '0';
        curF.style.opacity = '0';
      });

      highlightEl.addEventListener('mouseleave', () => {
        magnifierActive = false;
        magnifier.classList.remove('active');
        // 恢復原本的 cursor
        cur.style.opacity  = '1';
        curF.style.opacity = '1';
      });
    }


    /* ─── LANG TOGGLE ─── */
    const langToggle = document.getElementById('lang-toggle');
    const translatableLinks = document.querySelectorAll('.nav-links a[data-en]');
    let isZh = false;

    langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        isZh = !isZh;

        // 切換其他連結的文字
        translatableLinks.forEach(link => {
            link.textContent = isZh ? link.dataset.zh : link.dataset.en;
        });

        // 切換自身文字
        langToggle.textContent = isZh ? 'EN' : '中文';
    });



    document.getElementById('copyBtn').addEventListener('click', function() {
    const emailText = 'yuxuan2300@gmail.com';
    const tooltip = document.getElementById('copyTooltip');

    // 執行複製
    navigator.clipboard.writeText(emailText).then(() => {
        // 顯示提示泡泡
        tooltip.classList.add('show');

        // 2 秒後自動隱藏
        setTimeout(() => {
        tooltip.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('無法複製文字: ', err);
    });
    });
})

