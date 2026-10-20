import type { StoreKey } from '../data/stores';

export type Lang = 'en' | 'ar';
export const langs: Lang[] = ['en', 'ar'];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Builds a site URL for a page key ('' = home) in a language. */
export function path(lang: Lang, page = '') {
  const p = page ? `${page}/` : '';
  return lang === 'en' ? `${base}/${p}` : `${base}/ar/${p}`;
}
export const asset = (file: string) => `${base}/${file}`;

export type ServiceIcon = 'products' | 'orders' | 'support' | 'organize' | 'research' | 'marketing';
type ToolGroupKey = 'store' | 'fulfil' | 'workflow' | 'content';

type Strings = {
  dir: 'ltr' | 'rtl';
  nav: { work: string; services: string; about: string; contact: string };
  menu: string; langSwitch: string; themeDark: string; themeLight: string; skip: string;
  tag: string;
  name: [string, string];
  heroLede: string;
  ctaWhatsapp: string; ctaEmail: string; ctaWork: string;
  available: string;
  dash: {
    caption: string; store: string; today: string;
    kpis: [string, string, string];
    feedTitle: string;
    events: { id: string; store: string; item: string; status: 'fulfilled' | 'paid' | 'shipped' | 'replied' }[];
    status: Record<'fulfilled' | 'paid' | 'shipped' | 'replied', string>;
    toast: string;
  };
  toolsLabel: string;
  stats: { stores: string; niches: string; based: string; services: string };
  basedValue: string;
  servicesLabel: string; servicesTitle: string;
  services: { icon: ServiceIcon; title: string; text: string }[];
  workLabel: string; workTitle: string; workLede: string; seeAllWork: string; visit: string;
  stores: Record<StoreKey, { niche: string; text: string; tags: string[]; handled: string[] }>;
  processLabel: string; processTitle: string;
  process: { title: string; text: string }[];
  whyTitle: string; why: string[];
  contactLabel: string; contactTitle: [string, string]; contactLede: string;
  email: string; whatsapp: string; copy: string; copied: string;
  form: {
    title: string; name: string; namePh: string; store: string; storePh: string;
    need: string; message: string; messagePh: string; send: string;
    greeting: string; fromLabel: string; storeLabel: string; needLabel: string;
  };
  aboutLabel: string; aboutTitle: string; bio: string[];
  toolsTitle: string; toolGroups: Record<ToolGroupKey, string>;
  workPageLede: string; handledTitle: string; nicheLabel: string; marketLabel: string; market: string;
  ctaBandTitle: string; ctaBandText: string;
  footerRole: string;
  notFoundTitle: string; notFoundText: string; backHome: string;
  meta: Record<'home' | 'work' | 'about' | 'notFound', { title: string; description: string }>;
};

export const ui: Record<Lang, Strings> = {
  en: {
    dir: 'ltr',
    nav: { work: 'Work', services: 'Services', about: 'About', contact: 'Contact' },
    menu: 'Menu', langSwitch: 'العربية', themeDark: 'Switch to dark theme', themeLight: 'Switch to light theme', skip: 'Skip to content',
    tag: 'Shopify Store Manager',
    name: ['Israa', 'Shawqi'],
    heroLede: 'I help e-commerce brands run and grow their Shopify stores efficiently — from product management to order operations and store organization.',
    ctaWhatsapp: 'WhatsApp me', ctaEmail: 'Send email', ctaWork: 'See my work',
    available: 'Available for new stores',
    dash: {
      caption: 'A normal day in a store I run',
      store: 'Store admin', today: 'Today',
      kpis: ['Orders handled', 'Products live', 'Open tickets'],
      feedTitle: 'Activity',
      events: [
        { id: '#1048', store: 'Motrify', item: '4K Dash Cam', status: 'fulfilled' },
        { id: '#1049', store: 'ZoomieZone', item: 'Feather Wand', status: 'paid' },
        { id: '#1050', store: 'V8CHRONO', item: 'Racing Chrono', status: 'shipped' },
        { id: 'Inbox', store: 'ZoomieZone', item: 'Return question', status: 'replied' },
        { id: '#1051', store: 'Motrify', item: 'Rear Camera Kit', status: 'fulfilled' },
        { id: '#1052', store: 'V8CHRONO', item: 'Piston Keychain', status: 'paid' },
      ],
      status: { fulfilled: 'Fulfilled', paid: 'Paid', shipped: 'Shipped', replied: 'Replied' },
      toast: 'Collection “New arrivals” updated',
    },
    toolsLabel: 'Tools I use',
    stats: { stores: 'Shopify stores managed', niches: 'Niches covered', based: 'Based in Dubai', services: 'Services in one place' },
    basedValue: 'UAE',
    servicesLabel: 'What I do', servicesTitle: 'Services I offer',
    services: [
      { icon: 'products', title: 'Product Management', text: 'Listing, optimizing titles & descriptions, organizing collections, and keeping your catalog clean and conversion-ready.' },
      { icon: 'orders', title: 'Order Processing', text: 'Tracking orders, managing fulfillment via Zendrop or manually, and ensuring smooth delivery for every customer.' },
      { icon: 'support', title: 'Customer Support', text: 'Responding to customer inquiries professionally, handling returns, and maintaining high satisfaction rates.' },
      { icon: 'organize', title: 'Store Organization', text: 'Structuring your store for better navigation, updating pages, and keeping everything running efficiently.' },
      { icon: 'research', title: 'Competitor Research', text: 'Researching competitor products and pricing to help you stay ahead in your niche.' },
      { icon: 'marketing', title: 'Basic Marketing Support', text: "Helping with TikTok content ideas and social media posts to support your store's growth." },
    ],
    workLabel: 'My work', workTitle: "Stores I've managed", workLede: 'Three Shopify stores in three different niches, all run from the UAE.',
    seeAllWork: 'See the stores in detail', visit: 'Visit store',
    stores: {
      motrify: {
        niche: 'Automotive Tech', text: 'Premium dash cams and car accessories. Managed product listings, collections, and store operations.',
        tags: ['Products', 'Collections', 'Operations'],
        handled: ['Product listings, titles and descriptions', 'Collections that make the catalog easy to browse', 'Day-to-day store operations'],
      },
      v8chrono: {
        niche: 'Watches & Accessories', text: 'Car-inspired watches and keychains. Handled product organization, listings, and order management.',
        tags: ['Listings', 'Orders', 'Organization'],
        handled: ['Product organization across watches and keychains', 'New listings ready to sell', 'Order management from payment to delivery'],
      },
      zoomiezone: {
        niche: 'Pet Products', text: 'Fun & interactive cat toys. Managed store setup, product pages, and customer operations.',
        tags: ['Setup', 'Products', 'Support'],
        handled: ['Store setup from the start', 'Product pages for every toy', 'Customer questions and operations'],
      },
    },
    processLabel: 'How I work', processTitle: 'From messy admin to a store that runs itself',
    process: [
      { title: 'Review', text: 'I go through your products, orders and pages to see what needs attention first.' },
      { title: 'Organize', text: 'Tasks go on a Notion or Trello board, so you always know what is done and what is next.' },
      { title: 'Run', text: 'Listings, orders, fulfillment and customer messages, handled every day.' },
      { title: 'Report', text: 'Clear updates in Google Sheets, so you can focus on growing the brand.' },
    ],
    whyTitle: 'Why work with me?',
    why: [
      'Experienced with 3+ Shopify stores across different niches',
      'Fast communication and reliable delivery',
      'Organized workflow using Notion & Trello',
      'Based in Dubai — available in UAE timezone',
      'Focused on saving your time and growing your store',
    ],
    contactLabel: 'Get in touch', contactTitle: ["Let's work", 'together'],
    contactLede: "Ready to take your Shopify store to the next level? I'm available for new projects and would love to help your business grow.",
    email: 'Email', whatsapp: 'WhatsApp', copy: 'Copy', copied: 'Copied',
    form: {
      title: 'Tell me about your store', name: 'Your name', namePh: 'e.g. Sara',
      store: 'Store link', storePh: 'yourstore.com', need: 'What do you need?',
      message: 'Anything else?', messagePh: 'Products, order volume, timeline…', send: 'Send on WhatsApp',
      greeting: 'Hi Israa! I found you through your website.', fromLabel: 'Name', storeLabel: 'Store', needLabel: 'I need help with',
    },
    aboutLabel: 'About', aboutTitle: 'The person behind your store admin',
    bio: [
      "I'm Israa, a Shopify store manager based in Dubai. I help e-commerce brands run and grow their stores efficiently — from product management to order operations and store organization.",
      "I've managed Shopify stores in automotive tech, watches and pet products. Each niche taught me something new about products, customers and keeping a store tidy as it grows.",
      'I work in the UAE timezone, keep everything organized in Notion and Trello, and reply fast — so you always know where your store stands.',
    ],
    toolsTitle: 'My toolkit',
    toolGroups: { store: 'Store & support', fulfil: 'Fulfillment', workflow: 'Workflow', content: 'Content' },
    workPageLede: 'Here is what I handled in each store. Click through to see them live.',
    handledTitle: 'What I handled', nicheLabel: 'Niche', marketLabel: 'Market', market: 'UAE',
    ctaBandTitle: 'Your store could be next.', ctaBandText: 'Send me a message and tell me what your store needs.',
    footerRole: 'Shopify Store Manager · Dubai, UAE',
    notFoundTitle: 'This page is out of stock', notFoundText: "The page you're looking for doesn't exist or was moved.", backHome: 'Back to the homepage',
    meta: {
      home: { title: 'Israa Shawqi — Shopify Store Manager in Dubai', description: 'Shopify store manager based in Dubai. Product management, order processing, customer support and store organization for e-commerce brands.' },
      work: { title: "Work — Stores I've managed · Israa Shawqi", description: 'Shopify stores managed by Israa Shawqi: Motrify, V8CHRONO and ZoomieZone — listings, collections, orders and customer operations.' },
      about: { title: 'About Israa Shawqi — Shopify Store Manager', description: 'Israa Shawqi helps e-commerce brands run their Shopify stores from Dubai, using Shopify, Zendrop, DSers, Notion, Trello and more.' },
      notFound: { title: 'Page not found · Israa Shawqi', description: 'This page does not exist.' },
    },
  },
  ar: {
    dir: 'rtl',
    nav: { work: 'أعمالي', services: 'الخدمات', about: 'عنّي', contact: 'تواصل' },
    menu: 'القائمة', langSwitch: 'English', themeDark: 'الوضع الداكن', themeLight: 'الوضع الفاتح', skip: 'انتقل للمحتوى',
    tag: 'مديرة متاجر Shopify',
    name: ['إسراء', 'شوقي'],
    heroLede: 'بساعد براندات التجارة الإلكترونية إنها تدير متاجرها على Shopify وتكبّرها بكفاءة — من إدارة المنتجات لحد تشغيل الطلبات وتنظيم المتجر.',
    ctaWhatsapp: 'كلّميني واتساب', ctaEmail: 'ابعتلي إيميل', ctaWork: 'شوف أعمالي',
    available: 'متاحة لمتاجر جديدة',
    dash: {
      caption: 'يوم عادي في متجر بديره',
      store: 'لوحة المتجر', today: 'النهارده',
      kpis: ['طلبات اتنفذت', 'منتجات منشورة', 'رسائل مفتوحة'],
      feedTitle: 'آخر النشاط',
      events: [
        { id: '#1048', store: 'Motrify', item: 'كاميرا داش 4K', status: 'fulfilled' },
        { id: '#1049', store: 'ZoomieZone', item: 'لعبة الريشة', status: 'paid' },
        { id: '#1050', store: 'V8CHRONO', item: 'ساعة Racing', status: 'shipped' },
        { id: 'رسالة', store: 'ZoomieZone', item: 'سؤال عن إرجاع', status: 'replied' },
        { id: '#1051', store: 'Motrify', item: 'كاميرا خلفية', status: 'fulfilled' },
        { id: '#1052', store: 'V8CHRONO', item: 'ميدالية بيستون', status: 'paid' },
      ],
      status: { fulfilled: 'اتنفذ', paid: 'اتدفع', shipped: 'اتشحن', replied: 'اترد عليه' },
      toast: 'كوليكشن «وصل حديثاً» اتحدّث',
    },
    toolsLabel: 'الأدوات اللي بستخدمها',
    stats: { stores: 'متاجر Shopify أدرتها', niches: 'مجالات مختلفة', based: 'مقيمة في دبي', services: 'خدمات في مكان واحد' },
    basedValue: 'الإمارات',
    servicesLabel: 'بعمل إيه', servicesTitle: 'الخدمات اللي بقدّمها',
    services: [
      { icon: 'products', title: 'إدارة المنتجات', text: 'رفع المنتجات، وتحسين العناوين والأوصاف، وتنظيم الكوليكشنز، وإن الكتالوج يفضل مرتب وجاهز للبيع.' },
      { icon: 'orders', title: 'تشغيل الطلبات', text: 'متابعة الطلبات، وتنفيذها عن طريق Zendrop أو يدوي، والتأكد إن كل عميل طلبه يوصله من غير مشاكل.' },
      { icon: 'support', title: 'خدمة العملاء', text: 'الرد على استفسارات العملاء باحترافية، والتعامل مع المرتجعات، والحفاظ على رضا العملاء.' },
      { icon: 'organize', title: 'تنظيم المتجر', text: 'ترتيب المتجر عشان التصفح يبقى أسهل، وتحديث الصفحات، وإن كل حاجة تشتغل بكفاءة.' },
      { icon: 'research', title: 'دراسة المنافسين', text: 'بحث في منتجات وأسعار المنافسين عشان تفضل سابقهم في مجالك.' },
      { icon: 'marketing', title: 'دعم تسويقي بسيط', text: 'أفكار محتوى لتيك توك وبوستات سوشيال ميديا تساعد متجرك يكبر.' },
    ],
    workLabel: 'أعمالي', workTitle: 'متاجر أدرتها', workLede: 'تلات متاجر Shopify في تلات مجالات مختلفة، كلها من الإمارات.',
    seeAllWork: 'شوف تفاصيل المتاجر', visit: 'زور المتجر',
    stores: {
      motrify: {
        niche: 'تكنولوجيا السيارات', text: 'كاميرات داش وإكسسوارات سيارات. أدرت المنتجات والكوليكشنز وتشغيل المتجر.',
        tags: ['المنتجات', 'الكوليكشنز', 'التشغيل'],
        handled: ['رفع المنتجات وكتابة العناوين والأوصاف', 'كوليكشنز بتخلّي تصفح الكتالوج سهل', 'تشغيل المتجر يوم بيوم'],
      },
      v8chrono: {
        niche: 'ساعات وإكسسوارات', text: 'ساعات وميداليات مستوحاة من السيارات. تنظيم المنتجات ورفعها وإدارة الطلبات.',
        tags: ['رفع المنتجات', 'الطلبات', 'التنظيم'],
        handled: ['تنظيم المنتجات بين الساعات والميداليات', 'منتجات جديدة جاهزة للبيع', 'إدارة الطلبات من الدفع لحد التوصيل'],
      },
      zoomiezone: {
        niche: 'منتجات الحيوانات الأليفة', text: 'ألعاب تفاعلية للقطط. تجهيز المتجر وصفحات المنتجات وتشغيل خدمة العملاء.',
        tags: ['التجهيز', 'المنتجات', 'الدعم'],
        handled: ['تجهيز المتجر من الأول', 'صفحة لكل لعبة', 'أسئلة العملاء والتشغيل'],
      },
    },
    processLabel: 'طريقة شغلي', processTitle: 'من لوحة تحكم ملخبطة لمتجر ماشي لوحده',
    process: [
      { title: 'مراجعة', text: 'بعدّي على المنتجات والطلبات والصفحات عشان أعرف إيه اللي محتاج شغل الأول.' },
      { title: 'تنظيم', text: 'المهام بتتحط على بورد Notion أو Trello، فتبقى عارف إيه اللي خلص وإيه اللي جاي.' },
      { title: 'تشغيل', text: 'المنتجات والطلبات والشحن ورسائل العملاء، كل يوم.' },
      { title: 'تقرير', text: 'تحديثات واضحة على Google Sheets، وإنت تركّز على تكبير البراند.' },
    ],
    whyTitle: 'ليه تشتغل معايا؟',
    why: [
      'خبرة في 3+ متاجر Shopify في مجالات مختلفة',
      'تواصل سريع والتزام بالمواعيد',
      'شغل منظم على Notion وTrello',
      'مقيمة في دبي — متاحة بتوقيت الإمارات',
      'هدفي أوفّر وقتك وأكبّر متجرك',
    ],
    contactLabel: 'تواصل معايا', contactTitle: ['يلا نشتغل', 'سوا'],
    contactLede: 'جاهز تنقل متجرك على Shopify لمستوى أعلى؟ أنا متاحة لمشاريع جديدة ونفسي أساعد البيزنس بتاعك يكبر.',
    email: 'الإيميل', whatsapp: 'واتساب', copy: 'نسخ', copied: 'اتنسخ',
    form: {
      title: 'احكيلي عن متجرك', name: 'اسمك', namePh: 'مثلاً: سارة',
      store: 'لينك المتجر', storePh: 'yourstore.com', need: 'محتاج مساعدة في إيه؟',
      message: 'حاجة تانية؟', messagePh: 'المنتجات، عدد الطلبات، المواعيد…', send: 'ابعت على واتساب',
      greeting: 'أهلاً إسراء! وصلتلك من الموقع.', fromLabel: 'الاسم', storeLabel: 'المتجر', needLabel: 'محتاج مساعدة في',
    },
    aboutLabel: 'عنّي', aboutTitle: 'الشخص اللي ورا لوحة تحكم متجرك',
    bio: [
      'أنا إسراء، مديرة متاجر Shopify ومقيمة في دبي. بساعد براندات التجارة الإلكترونية إنها تدير متاجرها وتكبّرها بكفاءة — من إدارة المنتجات لحد تشغيل الطلبات وتنظيم المتجر.',
      'أدرت متاجر Shopify في تكنولوجيا السيارات والساعات ومنتجات الحيوانات الأليفة. كل مجال علّمني حاجة جديدة عن المنتجات والعملاء وإزاي المتجر يفضل مترتب وهو بيكبر.',
      'بشتغل بتوقيت الإمارات، وكل حاجة متنظمة على Notion وTrello، وبرد بسرعة — فتبقى دايماً عارف متجرك واقف فين.',
    ],
    toolsTitle: 'أدواتي',
    toolGroups: { store: 'المتجر والدعم', fulfil: 'تنفيذ الطلبات', workflow: 'تنظيم الشغل', content: 'المحتوى' },
    workPageLede: 'ده اللي عملته في كل متجر. ادخل وشوفهم بنفسك.',
    handledTitle: 'اللي عملته', nicheLabel: 'المجال', marketLabel: 'السوق', market: 'الإمارات',
    ctaBandTitle: 'متجرك ممكن يكون الجاي.', ctaBandText: 'ابعتلي رسالة وقولّي متجرك محتاج إيه.',
    footerRole: 'مديرة متاجر Shopify · دبي، الإمارات',
    notFoundTitle: 'الصفحة دي خلصت من المخزون', notFoundText: 'الصفحة اللي بتدور عليها مش موجودة أو اتنقلت.', backHome: 'ارجع للرئيسية',
    meta: {
      home: { title: 'إسراء شوقي — مديرة متاجر Shopify في دبي', description: 'مديرة متاجر Shopify في دبي. إدارة المنتجات وتشغيل الطلبات وخدمة العملاء وتنظيم المتجر لبراندات التجارة الإلكترونية.' },
      work: { title: 'أعمالي — متاجر أدرتها · إسراء شوقي', description: 'متاجر Shopify أدارتها إسراء شوقي: Motrify وV8CHRONO وZoomieZone — المنتجات والكوليكشنز والطلبات وخدمة العملاء.' },
      about: { title: 'عن إسراء شوقي — مديرة متاجر Shopify', description: 'إسراء شوقي بتساعد براندات التجارة الإلكترونية تدير متاجرها على Shopify من دبي، باستخدام Shopify وZendrop وDSers وNotion وTrello وغيرهم.' },
      notFound: { title: 'الصفحة مش موجودة · إسراء شوقي', description: 'الصفحة دي مش موجودة.' },
    },
  },
};
