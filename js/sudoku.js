/* =========================================================
   sudoku.js — Sudoku jugable, sin dependencias.
   API: window.SudokuGame.start({mount, onWin})
        .newGame(difficulty)  .stop()
   Construye su propia cuadrícula + teclado numérico dentro de "mount".
   ========================================================= */
(function () {
  'use strict';

  var mount, gridEl, padEl, onWin, keyHandler;
  var solution, cells, fixed, selected = -1, difficulty = 'easy';
  var HOLES = { easy: 36, medium: 46, hard: 54 };

  function idx(r, c) { return r * 9 + c; }

  function shuffled() {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function valid(grid, pos, val) {
    var r = Math.floor(pos / 9), c = pos % 9;
    for (var k = 0; k < 9; k++) {
      if (grid[idx(r, k)] === val) { return false; }
      if (grid[idx(k, c)] === val) { return false; }
    }
    var br = Math.floor(r / 3) * 3, bc = Math.floor(c / 3) * 3;
    for (var i = 0; i < 3; i++) { for (var j = 0; j < 3; j++) { if (grid[idx(br + i, bc + j)] === val) { return false; } } }
    return true;
  }

  function fill(grid, pos) {
    if (pos >= 81) { return true; }
    if (grid[pos]) { return fill(grid, pos + 1); }
    var nums = shuffled();
    for (var n = 0; n < 9; n++) {
      if (valid(grid, pos, nums[n])) {
        grid[pos] = nums[n];
        if (fill(grid, pos + 1)) { return true; }
        grid[pos] = 0;
      }
    }
    return false;
  }

  function generate() {
    solution = new Array(81).fill(0);
    fill(solution, 0);
    cells = solution.slice();
    fixed = new Array(81).fill(true);
    var holes = HOLES[difficulty] || 40, removed = 0, guard = 0;
    while (removed < holes && guard < 1000) {
      var p = Math.floor(Math.random() * 81);
      if (cells[p] !== 0) { cells[p] = 0; fixed[p] = false; removed++; }
      guard++;
    }
    selected = -1;
  }

  function render() {
    mount.innerHTML = '';
    gridEl = document.createElement('div');
    gridEl.className = 'sudoku-grid';
    for (var p = 0; p < 81; p++) {
      (function (p) {
        var cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'sudoku-cell';
        var r = Math.floor(p / 9), c = p % 9;
        if (c % 3 === 0) { cell.classList.add('b-left'); }
        if (r % 3 === 0) { cell.classList.add('b-top'); }
        if (c === 8) { cell.classList.add('b-right'); }
        if (r === 8) { cell.classList.add('b-bottom'); }
        if (fixed[p]) { cell.classList.add('fixed'); cell.textContent = cells[p]; }
        else { cell.textContent = cells[p] ? cells[p] : ''; }
        cell.addEventListener('click', function () { select(p); });
        gridEl.appendChild(cell);
      })(p);
    }
    mount.appendChild(gridEl);

    padEl = document.createElement('div');
    padEl.className = 'sudoku-pad';
    for (var n = 1; n <= 9; n++) {
      (function (n) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'sudoku-key'; b.textContent = n;
        b.addEventListener('click', function () { setVal(n); });
        padEl.appendChild(b);
      })(n);
    }
    var er = document.createElement('button');
    er.type = 'button'; er.className = 'sudoku-key erase'; er.innerHTML = '<i class="bi bi-eraser"></i>';
    er.addEventListener('click', function () { setVal(0); });
    padEl.appendChild(er);
    mount.appendChild(padEl);
  }

  function paint() {
    var nodes = gridEl.children;
    var selVal = selected >= 0 ? cells[selected] : -1;
    for (var p = 0; p < 81; p++) {
      var el = nodes[p];
      el.classList.remove('sel', 'peer', 'same', 'wrong');
      if (selected >= 0) {
        var sr = Math.floor(selected / 9), sc = selected % 9, r = Math.floor(p / 9), c = p % 9;
        var sameBox = Math.floor(sr / 3) === Math.floor(r / 3) && Math.floor(sc / 3) === Math.floor(c / 3);
        if (r === sr || c === sc || sameBox) { el.classList.add('peer'); }
      }
      if (cells[p] && cells[p] === selVal) { el.classList.add('same'); }
      if (!fixed[p] && cells[p] && cells[p] !== solution[p]) { el.classList.add('wrong'); }
      el.textContent = cells[p] ? cells[p] : '';
      if (fixed[p]) { el.classList.add('fixed'); }
    }
    if (selected >= 0) { nodes[selected].classList.add('sel'); }
  }

  function select(p) { if (fixed[p]) { selected = p; paint(); return; } selected = p; paint(); }

  function setVal(n) {
    if (selected < 0 || fixed[selected]) { return; }
    cells[selected] = n;
    paint();
    checkWin();
  }

  function checkWin() {
    for (var p = 0; p < 81; p++) { if (cells[p] !== solution[p]) { return; } }
    if (onWin) { onWin(); }
  }

  var api = {
    start: function (opts) {
      mount = opts.mount; onWin = opts.onWin;
      difficulty = opts.difficulty || 'easy';
      generate(); render(); paint();
      if (!keyHandler) {
        keyHandler = function (e) {
          if (selected < 0) { return; }
          if (e.key >= '1' && e.key <= '9') { e.preventDefault(); setVal(parseInt(e.key, 10)); }
          else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') { e.preventDefault(); setVal(0); }
        };
        document.addEventListener('keydown', keyHandler);
      }
    },
    newGame: function (diff) { difficulty = diff || difficulty; generate(); render(); paint(); },
    stop: function () { if (keyHandler) { document.removeEventListener('keydown', keyHandler); keyHandler = null; } },
    difficulty: function () { return difficulty; }
  };

  window.SudokuGame = api;
})();
