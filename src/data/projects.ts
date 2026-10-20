// Projects Israa has worked on. Text for each language lives in src/i18n/ui.ts under `projects`.
//
// Previews: every card loads a fresh screenshot of the live site in the visitor's browser
// (WordPress mShots) and scrolls through it. `fallback` is shown until that loads, or if it
// can't. Fallback images live in public/work/. `tall: true` means the fallback is a full-page
// capture that should scroll too. Leave `fallback` out to show the "being built" wireframe.

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
};

export const projects: Project[] = [
  { key: 'framezone', name: 'FrameZone', url: 'https://framezone.org/', domain: 'framezone.org', kind: 'progress' },
  { key: 'kira', name: 'Kira UAE', url: 'https://kira-uae.com/', domain: 'kira-uae.com', kind: 'progress' },
  { key: 'motrify', name: 'Motrify', url: 'https://motrify.com/', domain: 'motrify.com', kind: 'store', fallback: 'work/motrify-1400.webp' },
  { key: 'v8chrono', name: 'V8CHRONO', url: 'https://v8chrono.com/', domain: 'v8chrono.com', kind: 'store', fallback: 'work/v8chrono-1400.webp' },
  { key: 'zoomiezone', name: 'ZoomieZone', url: 'https://zomiezone.com/', domain: 'zomiezone.com', kind: 'store', fallback: 'work/zoomiezone-1400.webp' },
  { key: 'luvalle', name: 'Luvalle Beauty Center', url: 'https://luvallebeautycenter.com/', domain: 'luvallebeautycenter.com', kind: 'website', fallback: 'work/luvalle.webp', tall: true },
  { key: 'albyan', name: 'Al Bayan Institute', url: 'https://albyan.institute/', domain: 'albyan.institute', kind: 'website', fallback: 'work/albyan.webp' },
];

export const storeCount = projects.filter((p) => p.kind === 'store').length;
