/* Legal Lab Casebook — engine. Content lives in cases.js. */
'use strict';
const KEY = 'legal-casebook-v1';
const SIZES = [18, 20, 22, 25, 28, 32];
const $ = s => document.querySelector(s);
const app = () => $('#app');
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const G = window.GLOSSARY || {}, CASES = window.CASES || [];

let S; try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { S = {}; }
S.read = S.read || {}; if (S.size == null) S.size = 2;
const save = () => localStorage.setItem(KEY, JSON.stringify(S));
function applySize() { document.documentElement.style.setProperty('--fs', SIZES[S.size] + 'px'); }

// [[key|text]] -> tappable concept
function rich(t) {
  return t.replace(/\[\[([a-z]+)(?:\|([^\]]+))?\]\]/g, (m, k, txt) => {
    const g = G[k]; if (!g) { console.warn('Missing glossary key', k); return txt || k; }
    return `<button class="c" data-k="${k}">${txt || g.term}</button>`;
  });
}
function casesWith(k) { return CASES.filter(c => c.concepts.includes(k) || JSON.stringify(c).includes('[[' + k)); }

/* ---------- concept sheet ---------- */
function openSheet(k, fromCase) {
  const g = G[k]; if (!g) return;
  const others = casesWith(k).filter(c => c.id !== fromCase);
  $('#sheet').innerHTML = `<div class="grab"></div><h3>${esc(g.term)}</h3>
    ${g.lesson ? `<div class="lesson ui">Legal Lab · Lesson ${g.lesson}</div>` : `<div class="lesson ui">Coming in a later unit</div>`}
    <p>${esc(g.def)}</p>
    ${others.length ? `<div class="also ui">Also in: ${others.map(c => `<a data-go="${c.id}">${esc(c.title)}</a>`).join(' · ')}</div>` : ''}`;
  $('#sbg').style.display = 'block';
  requestAnimationFrame(() => $('#sheet').classList.add('open'));
  $('#sheet').querySelectorAll('[data-go]').forEach(a => a.onclick = () => { closeSheet(); go('#/case/' + a.dataset.go); });
}
function closeSheet() { $('#sheet').classList.remove('open'); setTimeout(() => $('#sbg').style.display = 'none', 220); }
$('#sbg').onclick = closeSheet;
let ty = null;
$('#sheet').addEventListener('touchstart', e => ty = e.touches[0].clientY, {passive:true});
$('#sheet').addEventListener('touchend', e => { if (ty != null && e.changedTouches[0].clientY - ty > 60) closeSheet(); ty = null; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

/* ---------- library ---------- */
let filter = 'All', conceptFilter = null;
function library() {
  const kinds = ['All', 'Criminal', 'Civil'];
  let list = CASES.filter(c => filter === 'All' || c.type === filter);
  if (conceptFilter) list = list.filter(c => casesWith(conceptFilter).includes(c));
  const readN = CASES.filter(c => S.read[c.id]).length;
  // concepts present in the book, ordered by lesson
  const used = Object.keys(G).filter(k => casesWith(k).length).sort((a, b) => (G[a].lesson || 99) - (G[b].lesson || 99));
  let h = `<p class="intro">Real Australian cases that bring your Legal Lab lessons to life. Tap any <button class="c" data-k="fairness">highlighted term</button> to see what it means and where it's taught.</p>
    <div class="meta ui">${readN} of ${CASES.length} read</div>
    <div class="chips ui">${kinds.map(k => `<button class="chip ${filter === k ? 'on' : ''}" data-f="${k}">${k}</button>`).join('')}</div>
    <details class="ui" style="margin:0 0 14px" ${conceptFilter ? 'open' : ''}><summary class="meta" style="cursor:pointer;font-size:16px">Find cases by concept${conceptFilter ? ': <b>' + esc(G[conceptFilter].term) + '</b>' : ''}</summary>
      <div class="chips" style="margin-top:8px">${conceptFilter ? `<button class="chip on" data-cf="">✕ Clear</button>` : ''}${used.map(k => `<button class="chip ${conceptFilter === k ? 'on' : ''}" data-cf="${k}">${esc(G[k].term)}</button>`).join('')}</div>
    </details>`;
  h += list.length ? list.map(c => `<a class="card" href="#/case/${c.id}">
      ${S.read[c.id] ? '<span class="read ui">✓ Read</span>' : ''}<span class="type ui ${c.type}">${c.type}</span>
      <h3>${esc(c.title)}</h3><div class="tg">${esc(c.tagline)}</div>
      <div class="meta ui" style="margin-top:6px">${esc(c.year)} · ${esc(c.where)}</div></a>`).join('')
    : `<p class="empty">No cases match yet.</p>`;
  h += `<p class="meta ui" style="margin-top:20px">Casebook v${esc(window.CONTENT_VERSION || '')} · Summaries are written for VCE students and simplified. Check the sources listed in each case for full detail.</p>`;
  app().innerHTML = h;
  app().querySelectorAll('[data-f]').forEach(b => b.onclick = () => { filter = b.dataset.f; library(); });
  app().querySelectorAll('[data-cf]').forEach(b => b.onclick = () => { conceptFilter = b.dataset.cf || null; library(); });
  wireConcepts();
}

/* ---------- case reader ---------- */
function reader(id) {
  const i = CASES.findIndex(c => c.id === id); const c = CASES[i];
  if (!c) return go('#/');
  let h = `<span class="type ui ${c.type}">${c.type}</span> <span class="meta ui">${esc(c.year)}</span>
    <h1>${esc(c.title)}</h1><div class="tag">${esc(c.tagline)}</div>
    <div class="glance ui">${c.glance.map(([a, b]) => `<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
    <h2>The story</h2>${c.story.map(p => `<p>${rich(p)}</p>`).join('')}
    <h2>In court</h2>${c.court.map(p => `<p>${rich(p)}</p>`).join('')}
    <h2>Why it matters for VCE</h2>${c.why.map(p => `<p>${rich(p)}</p>`).join('')}
    <div class="chips ui">${c.concepts.map(k => G[k] ? `<button class="chip" data-k="${k}">${esc(G[k].term)}</button>` : '').join('')}</div>
    <h2>Think it through</h2>
    ${c.think.map((t, n) => `<div class="think"><div class="q">${rich(t.q)}</div><button class="ui" data-show="${n}">Show some points</button><div class="a" id="a${n}" hidden>${rich(t.a)}</div></div>`).join('')}
    <h2>Sources</h2><ul class="src ui">${c.sources.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
    <div class="navrow ui">
      ${i > 0 ? `<button class="btn sec" data-go="${CASES[i-1].id}">← Previous</button>` : ''}
      ${i < CASES.length - 1 ? `<button class="btn" data-go="${CASES[i+1].id}">Next case →</button>` : `<button class="btn" data-home>Back to library</button>`}
    </div>`;
  app().innerHTML = h;
  window.scrollTo(0, 0);
  app().querySelectorAll('[data-show]').forEach(b => b.onclick = () => { $('#a' + b.dataset.show).hidden = false; b.remove(); });
  app().querySelectorAll('[data-go]').forEach(b => b.onclick = () => go('#/case/' + b.dataset.go));
  const hb = app().querySelector('[data-home]'); if (hb) hb.onclick = () => go('#/');
  wireConcepts(c.id);
  // mark as read once they reach the bottom
  const mark = () => { if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) { S.read[c.id] = 1; save(); window.removeEventListener('scroll', mark); } };
  window.addEventListener('scroll', mark, {passive:true}); setTimeout(mark, 500);
}
function wireConcepts(caseId) { app().querySelectorAll('[data-k]').forEach(b => b.onclick = () => openSheet(b.dataset.k, caseId)); }

/* ---------- routing ---------- */
function go(h) { if (location.hash === h) route(); else location.hash = h; }
function route() {
  closeSheet();
  const m = location.hash.match(/^#\/case\/(.+)$/);
  if (m) reader(m[1]); else { library(); window.scrollTo(0, 0); }
}
window.addEventListener('hashchange', route);
$('#home').onclick = () => go('#/');
$('#bigger').onclick = () => { S.size = Math.min(SIZES.length - 1, S.size + 1); applySize(); save(); };
$('#smaller').onclick = () => { S.size = Math.max(0, S.size - 1); applySize(); save(); };
applySize(); route();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      nw && nw.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) {
          const b = document.createElement('div');
          b.className = 'ui';
          b.style.cssText = 'position:fixed;left:0;right:0;bottom:0;background:#3b2a1a;color:#fff;padding:14px;text-align:center;z-index:30;font-size:17px';
          b.innerHTML = 'New cases available. <button style="margin-left:10px;font-size:16px;padding:8px 14px;border-radius:10px;border:0">Update</button>';
          b.querySelector('button').onclick = () => location.reload();
          document.body.appendChild(b);
        }
      });
    });
  }).catch(() => {});
}
