// Projects Israa has worked on. Text for each language lives in src/i18n/ui.ts under `projects`.
//
// Previews: every card loads a fresh screenshot of the live site in the visitor's browser
// (WordPress mShots) and scrolls through it. `fallback` is shown until that loads, or if it
// can't. Fallback images live in public/work/. `tall: true` means the fallback is a full-page
// capture that should scroll too. Leave `fallback` out to show the "being built" wireframe.
//
// `live: false` turns the live capture off and always shows the fallback image. Use it for
// any site whose live capture shows an error page (blocked bots, firewalls, etc.).

export type ProjectKind = 'progress' | 'store' | 'website';
export type ProjectKey = 'framezone' | 'kira' | 'motrify' | 'v8chrono' | 'zoomiezone' | 'luvalle' | 'albyan';

export type Project = {
  key: ProjectKey;
  name: string;
  url: string;
  domain: string;
  kind: ProjectKind;
  fallback?: string;
  tall?: boolean;
  live?: boolean;
  /** Change this (any text) to force a fresh live capture, e.g. right after the site goes live. */
  refresh?: string;
};

export const projects: Project[] = [
  { key: 'framezone', name: 'FrameZone', url: 'https://framezone.org/', domain: 'framezone.org', kind: 'progress', refresh: 'published' },
  { key: 'kira', name: 'Kira UAE', url: 'https://kira-uae.com/', domain: 'kira-uae.com', kind: 'progress' },
  { key: 'motrify', name: 'Motrify', url: 'https://motrify.com/', domain: 'motrify.com', kind: 'store', fallback: 'work/motrify-1400.webp', live: false },
  { key: 'v8chrono', name: 'V8CHRONO', url: 'https://v8chrono.com/', domain: 'v8chrono.com', kind: 'store', fallback: 'work/v8chrono-1400.webp' },
  { key: 'zoomiezone', name: 'ZoomieZone', url: 'https://zomiezone.com/', domain: 'zomiezone.com', kind: 'store', fallback: 'work/zoomiezone-1400.webp', refresh: 'published' },
  { key: 'luvalle', name: 'Luvalle Beauty Center', url: 'https://luvallebeautycenter.com/', domain: 'luvallebeautycenter.com', kind: 'website', fallback: 'work/luvalle.webp', tall: true },
  { key: 'albyan', name: 'Al Bayan Institute', url: 'https://albyan.institute/', domain: 'albyan.institute', kind: 'website', fallback: 'work/albyan.webp', live: false },
];

export const storeCount = projects.filter((p) => p.kind === 'store').length;
