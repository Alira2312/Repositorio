/* =========================================================
   app.js — Lógica AngularJS del portafolio (bilingüe ES/EN).
   El contenido vive en data.js; aquí solo está el comportamiento.
   ========================================================= */
(function () {
  'use strict';

  var pendingGame = 'tetris';   // juego elegido al abrir el modal (compartido controller/initUI)

  angular.module('portfolioApp', [])
    .controller('MainController', ['$scope', '$window', '$timeout', '$http', function ($scope, $window, $timeout, $http) {

      var data = $window.PORTFOLIO_DATA || {};
      var contact = data.contact || {};

      // ---- Idioma ----
      function detectLang() {
        try {
          var saved = $window.localStorage.getItem('lang');
          if (saved === 'es' || saved === 'en') { return saved; }
        } catch (e) {}
        var nav = ($window.navigator.language || 'es').toLowerCase();
        return nav.indexOf('en') === 0 ? 'en' : 'es';
      }

      function applyLang(lang) {
        var c = data[lang] || data.es;
        $scope.lang = lang;
        $scope.t = c.ui;                       // etiquetas de interfaz

        // perfil = datos compartidos + textos del idioma
        $scope.profile = angular.extend({}, contact, {
          role: c.role, tagline: c.tagline, availability: c.availability,
          location: c.location, bio: c.bio, highlights: c.highlights,
          whatsappMsg: c.whatsappMsg, experienceYears: contact.experienceYears
        });

        $scope.stats       = c.stats || [];
        $scope.services    = c.services || [];
        $scope.process     = c.process || [];
        $scope.skillGroups = c.skillGroups || [];
        $scope.tools       = c.tools || [];
        $scope.domains     = c.domains || [];
        $scope.projects    = c.projects || [];
        $scope.whyme       = c.whyme || [];
        $scope.cv          = c.cv || {};
        $scope.quote       = c.quote || { types: [], addons: [] };
        if (!$scope.quoteTypeKey && $scope.quote.types.length) { $scope.quoteTypeKey = $scope.quote.types[0].key; }
        if (!$scope.quoteAddons) { $scope.quoteAddons = {}; }

        // enlace de WhatsApp (número compartido + mensaje del idioma)
        $scope.whatsappLink = 'https://wa.me/' + (contact.whatsapp || '') +
          '?text=' + encodeURIComponent(c.whatsappMsg || '');

        // categorías de proyectos (para los filtros)
        var seen = {}, cats = [];
        ($scope.projects).forEach(function (p) {
          if (p.category && !seen[p.category]) { seen[p.category] = true; cats.push(p.category); }
        });
        $scope.categories = cats;
        $scope.activeFilter = 'all';

        $window.document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es-MX');

        // al cambiar idioma, ng-repeat recrea nodos -> reasegura reveal + barras
        $timeout(function () {
          $window.document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
          $window.document.querySelectorAll('.progress-bar[data-level]').forEach(function (bar) {
            bar.style.width = bar.getAttribute('data-level') + '%';
          });
        }, 60);
      }

      $scope.toggleLang = function () {
        var next = $scope.lang === 'en' ? 'es' : 'en';
        try { $window.localStorage.setItem('lang', next); } catch (e) {}
        applyLang(next);
      };

      $scope.year = new Date().getFullYear();

      // ---- Filtro de proyectos ----
      $scope.setFilter = function (cat) { $scope.activeFilter = cat; };
      $scope.filterByCategory = function (project) {
        return $scope.activeFilter === 'all' || project.category === $scope.activeFilter;
      };

      // ---- Detalle de proyecto (modal) ----
      $scope.selected = null;
      $scope.openProject = function (project) {
        $scope.selected = project;
        var el = $window.document.getElementById('projectModal');
        if (el && $window.bootstrap) { $window.bootstrap.Modal.getOrCreateInstance(el).show(); }
      };

      // ---- Formulario de contacto ----
      $scope.form = {}; $scope.submitted = false; $scope.sent = false; $scope.sending = false; $scope.sendError = false;
      function mailtoFallback() {
        var subject = encodeURIComponent('[Portafolio] ' + ($scope.form.subject || 'Contacto'));
        var body = encodeURIComponent(
          ($scope.t.contact.name) + ': ' + ($scope.form.name || '') + '\n' +
          ($scope.t.contact.email) + ': ' + ($scope.form.email || '') + '\n\n' +
          ($scope.form.message || '')
        );
        $window.location.href = 'mailto:' + (contact.email || '') + '?subject=' + subject + '&body=' + body;
      }
      $scope.sendMessage = function (isValid) {
        $scope.submitted = true; $scope.sendError = false;
        if (!isValid) { return; }

        // Si NO hay Access Key configurada -> respaldo: abre el correo del visitante.
        if (!contact.formAccessKey) {
          mailtoFallback();
          $scope.sent = true;
          $scope.sentMessage = ($scope.lang === 'en')
            ? 'Your email app opened to send the message.'
            : 'Se abrió tu correo para enviar el mensaje.';
          $scope.form = {}; $scope.submitted = false;
          return;
        }

        // Con Access Key -> envía a tu correo vía Web3Forms (sin servidor).
        $scope.sending = true;
        $http.post('https://api.web3forms.com/submit', {
          access_key: contact.formAccessKey,
          subject: '[Portafolio] ' + ($scope.form.subject || 'Contacto'),
          from_name: 'Portafolio — ' + ($scope.form.name || ''),
          name: $scope.form.name,
          email: $scope.form.email,
          message: $scope.form.message,
          botcheck: $scope.form.botcheck || ''   // honeypot anti-spam
        }).then(function (res) {
          $scope.sending = false;
          if (res.data && res.data.success) {
            $scope.sent = true;
            $scope.sentMessage = $scope.t.contact.ok;
            $scope.form = {}; $scope.submitted = false;
          } else { $scope.sendError = true; }
        }, function () {
          $scope.sending = false; $scope.sendError = true;
        });
      };

      // ---- Tema claro/oscuro ----
      $scope.theme = $window.document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      $scope.toggleTheme = function () {
        $scope.theme = $scope.theme === 'dark' ? 'light' : 'dark';
        if ($scope.theme === 'dark') { $window.document.documentElement.setAttribute('data-theme', 'dark'); }
        else { $window.document.documentElement.removeAttribute('data-theme'); }
        try { $window.localStorage.setItem('theme', $scope.theme); } catch (e) {}
      };

      // ---- Cotizador ----
      $scope.selectQuoteType = function (key) { $scope.quoteTypeKey = key; };
      $scope.toggleAddon = function (key) { $scope.quoteAddons[key] = !$scope.quoteAddons[key]; };
      function currentType() {
        return ($scope.quote.types || []).filter(function (t) { return t.key === $scope.quoteTypeKey; })[0];
      }
      function quoteTotal() {
        var t = currentType(), sum = t ? t.base : 0;
        ($scope.quote.addons || []).forEach(function (a) { if ($scope.quoteAddons[a.key]) { sum += a.price; } });
        return sum;
      }
      function round100(n) { return Math.round(n / 100) * 100; }
      $scope.quoteMin = function () { return round100(quoteTotal()); };
      $scope.quoteMax = function () { return round100(quoteTotal() * 1.35); };
      $scope.quoteMode = 'once';
      $scope.setQuoteMode = function (m) { $scope.quoteMode = m; };
      $scope.quoteWeeks = function () {
        var t = currentType(), w = t ? t.weeks : 0;
        ($scope.quote.addons || []).forEach(function (a) { if ($scope.quoteAddons[a.key]) { w += (a.weeks || 0); } });
        return w;
      };
      $scope.rentMonthly = function () { return round100(quoteTotal() * ($scope.quote.rentFactor || 0.1)); };
      $scope.quoteItems = function () {
        var t = currentType(), items = [];
        if (t) { items.push({ label: t.label, price: t.base, base: true }); }
        ($scope.quote.addons || []).forEach(function (a) { if ($scope.quoteAddons[a.key]) { items.push({ label: a.label, price: a.price }); } });
        return items;
      };
      $scope.quoteWhatsApp = function () {
        var t = currentType();
        var picked = ($scope.quote.addons || []).filter(function (a) { return $scope.quoteAddons[a.key]; })
          .map(function (a) { return a.label; });
        var lng = $scope.lang === 'en', cur = $scope.t.quote.currency;
        var head = (lng ? 'Hi Alberto, I want to quote: ' : 'Hola Alberto, quiero cotizar: ') + (t ? t.label : '');
        var ex = picked.length ? (lng ? '. Add-ons: ' : '. Extras: ') + picked.join(', ') : '';
        var money = ($scope.quoteMode === 'rent')
          ? (lng ? '. Monthly rental: ' : '. Renta mensual: ') + '$' + $scope.rentMonthly().toLocaleString() + ' ' + cur + $scope.t.quote.perMonth
          : (lng ? '. Estimate: ' : '. Estimado: ') + '$' + $scope.quoteMin().toLocaleString() + ' - $' + $scope.quoteMax().toLocaleString() + ' ' + cur;
        var wk = (lng ? '. Time: ~' : '. Tiempo: ~') + $scope.quoteWeeks() + ' ' + $scope.t.quote.weeksUnit;
        $window.open('https://wa.me/' + (contact.whatsapp || '') + '?text=' + encodeURIComponent(head + ex + money + wk), '_blank');
      };

      // ---- Juegos (Tetris / Sudoku) ----
      $scope.openGame = function (which) {
        pendingGame = (which === 'sudoku') ? 'sudoku' : 'tetris';
        var el = $window.document.getElementById('gameModal');
        if (el && $window.bootstrap) { $window.bootstrap.Modal.getOrCreateInstance(el).show(); }
      };

      // arranca
      applyLang(detectLang());
    }]);

  // --- Efectos de UI fuera de Angular ---
  function initUI() {
    var nav = document.getElementById('mainNav');
    var toTop = document.querySelector('.back-to-top');

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (nav) { nav.classList.toggle('scrolled', y > 60); }
      if (toTop) { toTop.classList.toggle('show', y > 400); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Cierra el menú móvil al hacer clic en un enlace
    document.querySelectorAll('#navContent .nav-link, #navContent .btn').forEach(function (link) {
      link.addEventListener('click', function () {
        var collapse = document.getElementById('navContent');
        if (collapse && collapse.classList.contains('show') && window.bootstrap) {
          new bootstrap.Collapse(collapse).hide();
        }
      });
    });

    var supportsIO = 'IntersectionObserver' in window;

    // Reveal al entrar en viewport
    var revealEls = document.querySelectorAll('.reveal');
    if (supportsIO) {
      var revObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            e.target.querySelectorAll('.progress-bar[data-level]').forEach(function (bar) {
              bar.style.width = bar.getAttribute('data-level') + '%';
            });
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(function (el) { revObserver.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
      document.querySelectorAll('.progress-bar[data-level]').forEach(function (bar) {
        bar.style.width = bar.getAttribute('data-level') + '%';
      });
    }

    // Scrollspy
    var sections = document.querySelectorAll('section[id], header[id]');
    var navLinks = document.querySelectorAll('#navContent .nav-link');
    if (supportsIO && navLinks.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id); });
          }
        });
      }, { threshold: 0.5, rootMargin: '-45% 0px -45% 0px' });
      sections.forEach(function (s) { spy.observe(s); });
    }

    // Conteo animado de las estadísticas
    function animateCount(el) {
      var raw = (el.textContent || '').trim();
      var m = raw.match(/^(\d+)(.*)$/);
      if (!m) { return; }
      var target = parseInt(m[1], 10), suffix = m[2], dur = 1300, startTs = null;
      function tick(ts) {
        if (startTs === null) { startTs = ts; }
        var p = Math.min((ts - startTs) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) { requestAnimationFrame(tick); }
      }
      requestAnimationFrame(tick);
    }
    var statsBand = document.querySelector('.stats-band');
    if (supportsIO && statsBand) {
      var statObs = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            statsBand.querySelectorAll('.stat-number').forEach(animateCount);
            obs.unobserve(statsBand);
          }
        });
      }, { threshold: 0.4 });
      statObs.observe(statsBand);
    }

    // Juegos (Tetris / Sudoku) dentro del modal
    var gameModal = document.getElementById('gameModal');
    if (gameModal) {
      var tetView = document.getElementById('tetrisView');
      var sudView = document.getElementById('sudokuView');
      var tabTet = document.getElementById('tabTetris');
      var tabSud = document.getElementById('tabSudoku');
      var cv = document.getElementById('tetrisCanvas');
      var elScore = document.getElementById('tetScore');
      var elLines = document.getElementById('tetLines');
      var elOver = document.getElementById('tetOver');
      var sudMount = document.getElementById('sudokuMount');
      var sudWin = document.getElementById('sudWin');
      var current = null;

      function stopAll() {
        if (window.TetrisGame) { TetrisGame.stop(); }
        if (window.SudokuGame) { SudokuGame.stop(); }
      }
      function startTetris() {
        if (elOver) { elOver.classList.remove('show'); }
        if (window.TetrisGame) {
          TetrisGame.start({
            canvas: cv,
            onScore: function (s, l) { if (elScore) { elScore.textContent = s; } if (elLines) { elLines.textContent = l; } },
            onState: function (st) { if (st === 'over' && elOver) { elOver.classList.add('show'); } }
          });
        }
      }
      function startSudoku() {
        if (sudWin) { sudWin.classList.remove('show'); }
        if (window.SudokuGame && sudMount) {
          SudokuGame.start({ mount: sudMount, difficulty: 'easy', onWin: function () { if (sudWin) { sudWin.classList.add('show'); } } });
        }
      }
      function show(which) {
        current = which;
        stopAll();
        var tet = which === 'tetris';
        if (tetView) { tetView.classList.toggle('d-none', !tet); }
        if (sudView) { sudView.classList.toggle('d-none', tet); }
        if (tabTet) { tabTet.classList.toggle('active', tet); }
        if (tabSud) { tabSud.classList.toggle('active', !tet); }
        if (tet) { startTetris(); } else { startSudoku(); }
      }

      gameModal.addEventListener('shown.bs.modal', function () { show(pendingGame); });
      gameModal.addEventListener('hidden.bs.modal', stopAll);
      if (tabTet) { tabTet.addEventListener('click', function () { show('tetris'); }); }
      if (tabSud) { tabSud.addEventListener('click', function () { show('sudoku'); }); }

      // Tetris: botones táctiles + pausa + reinicio
      var map = { tetLeft: 'left', tetRight: 'right', tetDown: 'down', tetRotate: 'rotate', tetDrop: 'drop' };
      Object.keys(map).forEach(function (id) {
        var b = document.getElementById(id);
        if (b && window.TetrisGame) { b.addEventListener('click', function () { TetrisGame[map[id]](); }); }
      });
      var btnPause = document.getElementById('tetPause');
      if (btnPause && window.TetrisGame) { btnPause.addEventListener('click', function () { TetrisGame.toggle(); }); }
      var btnRestart = document.getElementById('tetRestart');
      if (btnRestart) { btnRestart.addEventListener('click', startTetris); }

      // Sudoku: nuevo + dificultad
      document.querySelectorAll('[data-sud-diff]').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('[data-sud-diff]').forEach(function (x) { x.classList.remove('active'); });
          b.classList.add('active');
          if (sudWin) { sudWin.classList.remove('show'); }
          if (window.SudokuGame) { SudokuGame.newGame(b.getAttribute('data-sud-diff')); }
        });
      });
    }

    // Red de seguridad
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) { el.classList.add('is-visible'); }
      });
    }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(initUI, 80); });
  } else {
    setTimeout(initUI, 80);
  }
})();
