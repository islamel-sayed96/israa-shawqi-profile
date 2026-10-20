// Shopify stores Israa has managed. Text for each language lives in src/i18n/ui.ts under `stores`.
// Screenshots go in public/work/ as <image>-800.webp and <image>-1400.webp.

export type StoreKey = 'motrify' | 'v8chrono' | 'zoomiezone';

export const stores: { key: StoreKey; name: string; url: string; domain: string; image: string }[] = [
  { key: 'motrify', name: 'Motrify', url: 'https://motrify.com', domain: 'motrify.com', image: 'motrify' },
  { key: 'v8chrono', name: 'V8CHRONO', url: 'https://v8chrono.com', domain: 'v8chrono.com', image: 'v8chrono' },
  { key: 'zoomiezone', name: 'ZoomieZone', url: 'https://zomiezone.com', domain: 'zomiezone.com', image: 'zoomiezone' },
];
