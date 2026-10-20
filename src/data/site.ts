// Everything about Israa that appears across the site. Edit here, not in the pages.

export const site = {
  brand: 'Israa Shawqi',
  fullName: 'Israa Shawqi',
  email: 'israashawqi824@gmail.com',
  phone: '+971 54 481 2887',
  phoneHref: '+971544812887',
  whatsapp: 'https://wa.me/971544812887',
};

// Tools she works with, grouped for the About page. The flat list feeds the marquee.
export const toolGroups = [
  { key: 'store', tools: ['Shopify', 'Shopify Inbox', 'Adapt'] },
  { key: 'fulfil', tools: ['Zendrop', 'DSers'] },
  { key: 'workflow', tools: ['Notion', 'Trello', 'Google Sheets'] },
  { key: 'content', tools: ['Canva', 'AI Tools'] },
] as const;

export const tools = toolGroups.flatMap((g) => g.tools);
