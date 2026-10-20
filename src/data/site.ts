// Everything about Israa that appears across the site. Edit here, not in the pages.

export const site = {
  brand: 'Israa Shawqi',
  fullName: 'Israa Shawqi',
  email: 'israashawqi824@gmail.com',
  phone: '+971 54 481 2887',
  phoneHref: '+971544812887',
  whatsapp: 'https://wa.me/971544812887',
};

// Tools she works with, grouped for the About page. Labels for each group are in src/i18n/ui.ts.
export const toolGroups = [
  { key: 'platforms', tools: ['Shopify', 'Salla', 'Wix', 'WordPress'] },
  { key: 'payments', tools: ['Ziina', 'Stripe', 'Wise', 'Tabby', 'Tamara', 'PayPal'] },
  { key: 'marketplaces', tools: ['Amazon Seller Central', 'Zendrop', 'DSers'] },
  { key: 'meta', tools: ['Meta Ads Manager', 'Meta Business Suite', 'Meta Pixel', 'Facebook', 'Instagram', 'TikTok'] },
  { key: 'code', tools: ['HTML', 'CSS', 'JavaScript', 'Frameworks'] },
  { key: 'workflow', tools: ['Notion', 'Trello', 'Google Sheets', 'Shopify Inbox', 'Canva', 'AI Tools'] },
] as const;

export type ToolGroupKey = (typeof toolGroups)[number]['key'];

// Two marquee rows on the homepage.
export const marqueeA = [...toolGroups[0].tools, ...toolGroups[1].tools, ...toolGroups[2].tools];
export const marqueeB = [...toolGroups[3].tools, ...toolGroups[4].tools, ...toolGroups[5].tools];
export const platformCount = toolGroups[0].tools.length + 1; // + Amazon
