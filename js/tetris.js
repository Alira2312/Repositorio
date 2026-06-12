/* =========================================================
   tetris.js — Mini Tetris en canvas, sin dependencias.
   API: window.TetrisGame.start({canvas, onScore, onState})
        .stop()  .left() .right() .down() .rotate() .drop() .toggle()
   ========================================================= */
(function () {
  'use strict';

  var COLS = 10, ROWS = 20;
  var COLORS = {
    I: '#4cc9f0', J: '#4361ee', L: '#f0a202', O: '#ffd60a',
    S: '#43aa8b', T: '#c77dff', Z: '#f25c54'
  };
  var SHAPES = {
    I: [[1, 1, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]],
    O: [[1, 1], [1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    T: [[0, 1, 0], [1, 1, 1]],
    Z: [[1, 1, 0], [0, 1, 1]]
  };
  var KEYS = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

  var canvas, ctx, cell, board, piece, score, lines, dropMs, acc, last, raf, running, paused, over;
  var cbScore, cbState, keyHandler, seed = 1;

  // PRNG determinista (no usamos Math.random para variar por jugada)
  function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }

  function emptyBoard() {
    var b = [];
    for (var r = 0; r < ROWS; r++) { b.push(new Array(COLS).fill(0)); }
    return b;
  }

  function newPiece() {
    var k = KEYS[Math.floor(rnd() * KEYS.length)];
    var m = SHAPES[k].map(function (row) { return row.slice(); });
    return { m: m, color: COLORS[k], x: Math.floor((COLS - m[0].length) / 2), y: 0 };
  }

  function collide(p, ox, oy, mat) {
    mat = mat || p.m;
    for (var r = 0; r < mat.length; r++) {
      for (var c = 0; c < mat[r].length; c++) {
        if (!mat[r][c]) { continue; }
        var nx = p.x + c + ox, ny = p.y + r + oy;
        if (nx < 0 || nx >= COLS || ny >= ROWS) { return true; }
        if (ny >= 0 && board[ny][nx]) { return true; }
      }
    }
    return false;
  }

  function merge(p) {
    for (var r = 0; r < p.m.length; r++) {
      for (var c = 0; c < p.m[r].length; c++) {
        if (p.m[r][c] && p.y + r >= 0) { board[p.y + r][p.x + c] = p.color; }
      }
    }
  }

  function rotateMat(m) {
    var rows = m.length, cols = m[0].length, res = [];
    for (var c = 0; c < cols; c++) {
      res.push([]);
      for (var r = rows - 1; r >= 0; r--) { res[c].push(m[r][c]); }
    }
    return res;
  }

  function clearLines() {
    var cleared = 0;
    for (var r = ROWS - 1; r >= 0; r--) {
      if (board[r].every(function (v) { return v; })) {
        board.splice(r, 1);
        board.unshift(new Array(COLS).fill(0));
        cleared++;
        r++;
      }
    }
    if (cleared) {
      lines += cleared;
      score += [0, 100, 300, 500, 800][cleared];
      dropMs = Math.max(120, 700 - Math.floor(lines / 5) * 60);
      if (cbScore) { cbScore(score, lines); }
    }
  }

  function lock() {
    merge(piece);
    clearLines();
    piece = newPiece();
    if (collide(piece, 0, 0)) {
      over = true; running = false;
      if (cbState) { cbState('over'); }
    }
  }

  function step() {
    if (collide(piece, 0, 1)) { lock(); }
    else { piece.y++; }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // fondo grid
    ctx.fillStyle = '#0a1424';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    for (var x = 0; x <= COLS; x++) { ctx.beginPath(); ctx.moveTo(x * cell, 0); ctx.lineTo(x * cell, ROWS * cell); ctx.stroke(); }
    for (var y = 0; y <= ROWS; y++) { ctx.beginPath(); ctx.moveTo(0, y * cell); ctx.lineTo(COLS * cell, y * cell); ctx.stroke(); }
    // celdas fijas
    for (var r = 0; r < ROWS; r++) {
      for (var c = 0; c < COLS; c++) { if (board[r][c]) { drawCell(c, r, board[r][c]); } }
    }
    // pieza actual
    if (piece) {
      for (var pr = 0; pr < piece.m.length; pr++) {
        for (var pc = 0; pc < piece.m[pr].length; pc++) {
          if (piece.m[pr][pc]) { drawCell(piece.x + pc, piece.y + pr, piece.color); }
        }
      }
    }
  }

  function drawCell(c, r, color) {
    if (r < 0) { return; }
    var x = c * cell, y = r * cell;
    ctx.fillStyle = color;
    ctx.fillRect(x + 1, y + 1, cell - 2, cell - 2);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillRect(x + 1, y + 1, cell - 2, Math.max(2, cell * 0.18));
  }

  function loop(ts) {
    if (!running) { return; }
    if (!last) { last = ts; }
    var dt = ts - last; last = ts;
    if (!paused) {
      acc += dt;
      if (acc >= dropMs) { acc = 0; step(); }
      draw();
    }
    raf = requestAnimationFrame(loop);
  }

  function reset() {
    board = emptyBoard();
    piece = newPiece();
    score = 0; lines = 0; dropMs = 700; acc = 0; last = 0;
    over = false; paused = false; running = true;
    if (cbScore) { cbScore(0, 0); }
    if (cbState) { cbState('play'); }
  }

  var api = {
    start: function (opts) {
      canvas = opts.canvas; cbScore = opts.onScore; cbState = opts.onState;
      ctx = canvas.getContext('2d');
      cell = Math.floor(canvas.width / COLS);
      canvas.height = cell * ROWS;
      seed = (seed * 7 + 17) & 0x7fffffff;  // varía la secuencia cada partida
      reset();
      if (!keyHandler) {
        keyHandler = function (e) {
          if (!running) { return; }
          var k = e.key;
          if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', ' '].indexOf(k) === -1) { return; }
          e.preventDefault();
          if (k === 'ArrowLeft') { api.left(); }
          else if (k === 'ArrowRight') { api.right(); }
          else if (k === 'ArrowDown') { api.down(); }
          else if (k === 'ArrowUp') { api.rotate(); }
          else if (k === ' ') { api.drop(); }
        };
        document.addEventListener('keydown', keyHandler);
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    },
    stop: function () {
      running = false; cancelAnimationFrame(raf);
      if (keyHandler) { document.removeEventListener('keydown', keyHandler); keyHandler = null; }
    },
    restart: function () { if (canvas) { api.start({ canvas: canvas, onScore: cbScore, onState: cbState }); } },
    left: function () { if (running && !paused && !collide(piece, -1, 0)) { piece.x--; draw(); } },
    right: function () { if (running && !paused && !collide(piece, 1, 0)) { piece.x++; draw(); } },
    down: function () { if (running && !paused) { step(); draw(); } },
    rotate: function () {
      if (!running || paused) { return; }
      var rot = rotateMat(piece.m);
      var kicks = [0, -1, 1, -2, 2];
      for (var i = 0; i < kicks.length; i++) {
        if (!collide(piece, kicks[i], 0, rot)) { piece.x += kicks[i]; piece.m = rot; draw(); return; }
      }
    },
    drop: function () {
      if (!running || paused) { return; }
      while (!collide(piece, 0, 1)) { piece.y++; }
      lock(); draw();
    },
    toggle: function () {
      if (!running) { return false; }
      paused = !paused; last = 0;
      return paused;
    },
    isOver: function () { return over; }
  };

  window.TetrisGame = api;
})();
