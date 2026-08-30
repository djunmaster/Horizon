(function () {
  'use strict';

  /** Replace ⭐️ N/10 with a colored badge in h2, h3, and li elements */
  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';
      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>'
      );
    });
  }

  /** Add semantic classes to tag lines, source lines, and background paragraphs */
  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();

      // Tag line: starts with Tags or 标签 (bold prefix rendered by Markdown)
      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }

      // Source line: pattern like "source · site · date"
      if (/^(rss|reddit|github|hackernews|hn|telegram)\s*·/i.test(text)) {
        p.classList.add('source-line');
        return;
      }
    });
  }

  /** Set up EN/中文 language toggle as a page-level control */
  function setupLanguageToggle() {
    // Create toggle buttons
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.type = 'button';

    var btnZh = document.createElement('button');
    btnZh.textContent = '中文';
    btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);

    // Insert at top of body
    document.body.insertBefore(toggle, document.body.firstChild);

    // Read saved preference, default to zh
    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) { /* noop */ }
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      if (lang === 'en') {
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
      } else {
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
      }
    }

    // Index page: toggle lang-section visibility
    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      if (lang === 'en') {
        enSection.classList.remove('hidden');
        zhSection.classList.add('hidden');
      } else {
        zhSection.classList.remove('hidden');
        enSection.classList.add('hidden');
      }
    }

    // Article page: redirect to the other language version
    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-zh(\.html)?$/, '-en$1').replace(/-zh\/$/, '-en/');
      } else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-en(\.html)?$/, '-zh$1').replace(/-en\/$/, '-zh/');
      }
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) { /* noop */ }
      if (zhSection && enSection) {
        showSection(lang);
      } else {
        switchArticleLang(lang);
      }
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });

    // Initialize
    updateButtons(currentLang);
    if (zhSection && enSection) {
      showSection(currentLang);
    }
  }

  function setupDigestHome() {
    var home = document.querySelector('.digest-home');
    if (!home) return;

    document.body.classList.add('hz-digest-home');

    var lists = home.querySelectorAll('[data-digest-list]');
    lists.forEach(function (list) {
      var section = list.closest('.lang-section') || home;
      var button = section.querySelector('[data-digest-load-more]');
      if (!button) return;

      button.addEventListener('click', function () {
        var hiddenItems = list.querySelectorAll('.digest-row.is-extra-hidden');
        hiddenItems.forEach(function (item, index) {
          if (index < 5) item.classList.remove('is-extra-hidden');
        });

        if (!list.querySelector('.digest-row.is-extra-hidden')) {
          button.hidden = true;
        }
      });
    });
  }

  function summaryDateFromPage(projectTitle) {
    var titleMatch = projectTitle.match(/(?:Horizon Summary|Adam's Daily Digest):\s*(\d{4}-\d{2}-\d{2})/);
    if (titleMatch) return titleMatch[1];

    var classMatch = document.documentElement.className.match(/\bhz-summary-(\d{4}-\d{2}-\d{2})\b/);
    if (classMatch) return classMatch[1];

    var pathMatch = window.location.pathname.match(/\/(\d{4})\/(\d{2})\/(\d{2})\/summary-(?:zh|en)(?:\.html)?$/);
    if (!pathMatch) return null;
    return pathMatch[1] + '-' + pathMatch[2] + '-' + pathMatch[3];
  }

  function setupSummaryPageHero() {
    var projectName = document.querySelector('.page-header .project-name');
    if (!projectName) return;

    var date = summaryDateFromPage(projectName.textContent.trim());
    if (!date) return;

    document.body.classList.add('hz-summary-page');
    var dateNode = document.createElement('span');
    dateNode.className = 'summary-date';
    dateNode.textContent = date;
    projectName.replaceChildren(
      document.createTextNode("Adam's Daily Digest: "),
      dateNode
    );
    document.title = projectName.textContent + ' | Horizon Daily';

    var tagline = document.querySelector('.page-header .project-tagline');
    if (tagline) tagline.textContent = 'AI & research digest';
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupSummaryPageHero();
    setupDigestHome();
    processScoreBadges();
    markSemanticElements();
    setupLanguageToggle();
  });
})();
