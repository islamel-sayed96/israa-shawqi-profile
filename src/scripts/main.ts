import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
const rtl = root.dir === 'rtl';

/* ---------- Theme ---------- */
const themeBtn = $<HTMLButtonElement>('[data-theme-toggle]');
function syncThemeLabel() {
  if (!themeBtn) return;
  const dark = root.dataset.theme === 'dark';
  themeBtn.setAttribute('aria-label', dark ? themeBtn.dataset.labelLight! : themeBtn.dataset.labelDark!);
}
themeBtn?.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  if (dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  syncThemeLabel();
});
syncThemeLabel();

/* ---------- Mobile menu ---------- */
const menuBtn = $<HTMLButtonElement>('[data-menu]');
const nav = $('#nav');
function closeMenu() { nav?.classList.remove('open'); menuBtn?.setAttribute('aria-expanded', 'false'); }
menuBtn?.addEventListener('click', () => {
  const open = !nav!.classList.contains('open');
  nav!.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) closeMenu(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

/* ---------- Copy buttons ---------- */
$$<HTMLButtonElement>('[data-copy]').forEach((b) => {
  const label = b.textContent;
  b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy!); b.textContent = b.dataset.done!; }
    catch { b.textContent = b.dataset.copy!; }
    setTimeout(() => (b.textContent = label), 1600);
  });
});

/* ---------- Brief form -> WhatsApp with a ready message ---------- */
const brief = $<HTMLFormElement>('[data-brief]');
brief?.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = brief.dataset;
  const data = new FormData(brief);
  const name = String(data.get('name') ?? '').trim();
  const store = String(data.get('store') ?? '').trim();
  const needs = data.getAll('need').map(String);
  const msg = String(data.get('message') ?? '').trim();
  const lines = [d.greeting!];
  if (name) lines.push(`${d.lName}: ${name}`);
  if (store) lines.push(`${d.lStore}: ${store}`);
  if (needs.length) lines.push(`${d.lNeed}: ${needs.join(rtl ? '، ' : ', ')}`);
  if (msg) lines.push('', msg);
  window.open(`https://wa.me/${d.wa}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

/* ---------- Service cards: the green fill grows from the pointer ---------- */
$$('.svc').forEach((card) => {
  card.addEventListener('pointerenter', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

/* ---------- Store dashboard: new activity keeps arriving ---------- */
const dash = $('[data-dash]');
if (dash && !reduce) {
  const list = $('[data-feed]', dash)!;
  const ordersKpi = $('[data-kpi]', dash)!;
  const toast = $('.dash-toast', dash)!;
  let orders = Number(ordersKpi.dataset.kpi);
  let ticks = 0;
  let timer = 0;

  const step = () => {
    const visible = $$('li:not(.queued)', list);
    const next = $('li.queued', list) ?? visible[visible.length - 1];
    // The oldest visible row leaves the queue; the next one arrives at the top.
    visible[visible.length - 1].classList.add('queued');
    list.append(visible[visible.length - 1]);
    next.classList.remove('queued');
    list.prepend(next);
    gsap.fromTo(next, { height: 0, opacity: 0 }, { height: 53, opacity: 1, duration: 0.55, ease: 'power3.out', clearProps: 'height' });
    gsap.fromTo($('.pill', next), { scale: 0.6 }, { scale: 1, duration: 0.5, ease: 'back.out(3)', delay: 0.25 });
    if ($('.pill.fulfilled, .pill.shipped', next)) {
      orders += 1;
      ordersKpi.textContent = String(orders);
      gsap.fromTo(ordersKpi, { y: -6, opacity: 0.3 }, { y: 0, opacity: 1, duration: 0.4 });
    }
    ticks += 1;
    if (ticks % 3 === 0) {
      const msgs: string[] = JSON.parse(toast.dataset.toasts || '[]');
      $('[data-toast-text]', toast)!.textContent = msgs[(ticks / 3 - 1) % msgs.length] ?? '';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2400);
    }
  };
  const start = () => { if (!timer) timer = window.setInterval(step, 2600); };
  const stop = () => { clearInterval(timer); timer = 0; };
  // Only run while the dashboard is on screen and the tab is visible.
  new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop())).observe(dash);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
}

/* ---------- Live previews ----------
   Each project frame asks WordPress mShots for a fresh screenshot of the real site, made
   in the visitor's browser. mShots answers with a small "generating" image the first time,
   so we retry a few times; until a real capture arrives (or if it never does) the
   fallback image or the "being built" wireframe stays in place. Tall images scroll slowly
   from top to bottom and back, like someone browsing; hovering pauses them. */
const SHOT_W = 1000;
const shotUrl = (site: string, attempt: number) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(site)}?w=${SHOT_W}&h=2400&vpw=1280&vph=3072${attempt ? `&r=${attempt}` : ''}`;

function autoScroll(frame: HTMLElement, img: HTMLImageElement) {
  if (reduce) return;
  const view = $('[data-view]', frame)!;
  let tween: gsap.core.Tween | null = null;
  const build = () => {
    tween?.kill();
    gsap.set(img, { y: 0 });
    const distance = img.getBoundingClientRect().height - view.clientHeight;
    if (distance < 40) { frame.classList.remove('scrolls'); return; }
    frame.classList.add('scrolls');
    tween = gsap.to(img, {
      y: -distance, duration: Math.max(6, distance / 55), ease: 'sine.inOut',
      repeat: -1, yoyo: true, repeatDelay: 1.4, delay: 1.2, paused: true,
    });
    if (frame.dataset.inview === '1') tween.play();
  };
  const ready = () => requestAnimationFrame(build);
  if (img.complete && img.naturalHeight) ready(); else img.addEventListener('load', ready, { once: true });
  frame.addEventListener('pointerenter', () => tween?.pause());
  frame.addEventListener('pointerleave', () => { if (frame.dataset.inview === '1') tween?.play(); });
  new IntersectionObserver(([en]) => {
    frame.dataset.inview = en.isIntersecting ? '1' : '0';
    if (en.isIntersecting) tween?.play(); else tween?.pause();
  }).observe(frame);
  let rt = 0;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = window.setTimeout(build, 200); });
}

function typeUrl(frame: HTMLElement) {
  const el = $('[data-typed]', frame);
  if (!el || reduce) return;
  const text = el.dataset.typed!;
  el.textContent = '';
  el.classList.add('typing');
  let i = 0;
  const id = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) { clearInterval(id); setTimeout(() => el.classList.remove('typing'), 600); }
  }, 45);
}

function startLive(frame: HTMLElement) {
  const site = frame.dataset.live!;
  const real = $<HTMLImageElement>('img.real', frame)!;
  const badge = $('[data-badge] span', frame);
  const fallback = $<HTMLImageElement>('img.fallback[data-scroll]', frame);
  if (fallback) autoScroll(frame, fallback);
  typeUrl(frame);
  // Live capture switched off for this project: keep the image, with a slow drift so it
  // doesn't feel static.
  if (frame.hasAttribute('data-still')) { frame.classList.add('still'); return; }
  frame.classList.add('loading');

  let attempt = 0;
  const probe = new Image();
  probe.decoding = 'async';
  probe.onload = () => {
    // A real capture comes back at the requested width; the "generating" placeholder doesn't.
    if (probe.naturalWidth >= SHOT_W * 0.9 && probe.naturalHeight > 400) {
      real.src = probe.src;
      frame.classList.remove('loading');
      frame.classList.add('is-live');
      if (badge) badge.textContent = $('[data-badge]', frame)!.dataset.labelLive!;
      autoScroll(frame, real);
    } else retry();
  };
  probe.onerror = () => retry();
  const retry = () => {
    if (++attempt > 5) { frame.classList.remove('loading'); return; }
    setTimeout(() => (probe.src = shotUrl(site, attempt)), 4000);
  };
  probe.src = shotUrl(site, 0);
}

const liveObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    liveObserver.unobserve(en.target);
    startLive(en.target as HTMLElement);
  });
}, { rootMargin: '300px 0px' });
$$('[data-live]').forEach((f) => liveObserver.observe(f));

/* ---------- Motion ---------- */
if (!reduce) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero: the name rises out of its line masks, the rest fades in, the dashboard slides up.
  const nameLines = $$('[data-hero-name] .line > span, [data-hero-name] .line > em > span');
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  if (nameLines.length) tl.from(nameLines, { yPercent: 110, duration: 1.2, stagger: 0.12 }, 0.1);
  tl.from('[data-hero-fade]', { y: 22, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.05);
  if (dash) {
    tl.from('.dash-card', { y: 50, opacity: 0, rotate: 1.5, duration: 1.1 }, 0.25)
      .from('.bar i', { scaleY: 0, duration: 0.9, stagger: 0.06, ease: 'power3.out' }, 0.6)
      .from('.dash-feed li:not(.queued)', { x: rtl ? -24 : 24, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.7);
    $$('[data-kpi]', dash).forEach((el) => {
      const end = Number(el.dataset.kpi);
      const obj = { v: 0 };
      tl.to(obj, { v: end, duration: 1.4, ease: 'power2.out', onUpdate: () => (el.textContent = String(Math.round(obj.v))) }, 0.6);
    });
  }

  // Sections: content drifts up as it enters.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (els) => gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, clearProps: 'transform,opacity' }),
  });

  // Stat numbers count up once.
  $$('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.4, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => (el.textContent = String(Math.round(obj.v))),
    });
  });

  // The process line draws itself as you scroll past it.
  const process = $('[data-process]');
  if (process) {
    gsap.fromTo(process, { '--progress': 0 }, {
      '--progress': 1, ease: 'none',
      scrollTrigger: { trigger: process, start: 'top 80%', end: 'bottom 60%', scrub: true },
    });
  }

  // Big section titles slide in a little.
  $$('.sec-head h2, .big-title').forEach((h) => {
    gsap.from(h, { x: rtl ? 40 : -40, opacity: 0.15, ease: 'none', scrollTrigger: { trigger: h, start: 'top 95%', end: 'top 60%', scrub: true } });
  });
}
