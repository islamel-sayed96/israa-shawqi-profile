import type { ProjectKey, ProjectKind } from '../data/projects';
import type { ToolGroupKey } from '../data/site';

export type Lang = 'en' | 'ar';
export const langs: Lang[] = ['en', 'ar'];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Builds a site URL for a page key ('' = home) in a language. */
export function path(lang: Lang, page = '') {
  const p = page ? `${page}/` : '';
  return lang === 'en' ? `${base}/${p}` : `${base}/ar/${p}`;
}
export const asset = (file: string) => `${base}/${file}`;

export type ServiceIcon = 'products' | 'orders' | 'payments' | 'amazon' | 'meta' | 'design' | 'support' | 'organize' | 'research';
export type DashStatus = 'fulfilled' | 'paid' | 'shipped' | 'replied' | 'live' | 'synced';

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
    events: { id: string; store: string; item: string; status: DashStatus }[];
    status: Record<DashStatus, string>;
    toasts: string[];
  };
  toolsLabel: string;
  stats: { stores: string; projects: string; platforms: string; based: string };
  basedValue: string;
  servicesLabel: string; servicesTitle: string; servicesLede: string; focus: string;
  services: { icon: ServiceIcon; title: string; text: string; tags: string[] }[];
  workLabel: string; workTitle: string; workLede: string; seeAllWork: string; visit: string;
  kinds: Record<ProjectKind, string>;
  live: { live: string; preview: string; building: string; loading: string; hover: string };
  projects: Record<ProjectKey, { niche: string; text: string; tags: string[]; handled: string[] }>;
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
  toolsTitle: string; toolsLede: string; toolGroups: Record<ToolGroupKey, string>;
  workPageLede: string; handledTitle: string; typeLabel: string; statusLabel: string;
  statusDone: string; statusProgress: string;
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
    tag: 'E-commerce Store Manager',
    name: ['Israa', 'Shawqi'],
    heroLede: 'I run and grow online stores end to end — products, orders, payment gateways and Amazon — and back them with Meta ad campaigns and websites built to sell.',
    ctaWhatsapp: 'WhatsApp me', ctaEmail: 'Send email', ctaWork: 'See my work',
    available: 'Available for new projects',
    dash: {
      caption: 'A normal day in a store I run',
      store: 'Store admin', today: 'Today',
      kpis: ['Orders handled', 'Products live', 'Open tickets'],
      feedTitle: 'Activity',
      events: [
        { id: '#1048', store: 'Motrify · Stripe', item: '4K Dash Cam', status: 'fulfilled' },
        { id: 'Meta', store: 'Ads Manager', item: 'New collection campaign', status: 'live' },
        { id: '#1049', store: 'ZoomieZone · Tabby', item: 'Feather Wand', status: 'paid' },
        { id: 'Amazon', store: 'Seller Central', item: '12 products', status: 'synced' },
        { id: '#1050', store: 'V8CHRONO · Ziina', item: 'Racing Chrono', status: 'shipped' },
        { id: 'Inbox', store: 'ZoomieZone', item: 'Return question', status: 'replied' },
        { id: '#1051', store: 'Motrify · Tamara', item: 'Rear Camera Kit', status: 'paid' },
      ],
      status: { fulfilled: 'Fulfilled', paid: 'Paid', shipped: 'Shipped', replied: 'Replied', live: 'Live', synced: 'Synced' },
      toasts: ['Collection “New arrivals” updated', 'Tabby checkout enabled', 'Meta Pixel connected', 'Amazon listings synced'],
    },
    toolsLabel: 'Tools I use',
    stats: { stores: 'Online stores managed', projects: 'Projects shipped & in progress', platforms: 'Platforms: Shopify, Salla, Wix, WordPress, Amazon', based: 'Based in Dubai' },
    basedValue: 'UAE',
    servicesLabel: 'What I do', servicesTitle: 'Everything your store needs, in one place',
    servicesLede: 'Store management comes first. Everything else is there to make the store sell more.',
    focus: 'Main focus',
    services: [
      { icon: 'products', title: 'Store & Product Management', text: 'Adding and optimizing products, variants, collections, pricing and inventory, so the catalog stays clean and ready to sell.', tags: ['Products', 'Collections', 'Inventory'] },
      { icon: 'orders', title: 'Orders & Fulfillment', text: 'Tracking every order and handling fulfillment via Zendrop, DSers or manually, so customers get their orders on time.', tags: ['Zendrop', 'DSers', 'Shipping'] },
      { icon: 'payments', title: 'Payment Gateways', text: 'Setting up and connecting checkout and payment options, including buy now, pay later.', tags: ['Ziina', 'Stripe', 'Wise', 'Tabby', 'Tamara'] },
      { icon: 'amazon', title: 'Amazon Integration', text: 'Connecting your store to Amazon and syncing products and listings, so you sell on both from one place.', tags: ['Seller Central', 'Listings', 'Sync'] },
      { icon: 'meta', title: 'Meta Ads & Pages', text: 'Running ad campaigns in Ads Manager, setting up the Pixel, and managing your Facebook & Instagram pages and content.', tags: ['Ads Manager', 'Business Suite', 'Content'] },
      { icon: 'design', title: 'Store & Website Design', text: 'Building stores and websites on Shopify, Salla, Wix and WordPress, plus custom landing pages in HTML, CSS and JavaScript.', tags: ['Shopify', 'Salla', 'Wix', 'WordPress', 'Landing pages'] },
      { icon: 'support', title: 'Customer Support', text: 'Answering customer questions professionally, handling returns, and keeping satisfaction high.', tags: ['Inbox', 'Returns'] },
      { icon: 'organize', title: 'Store Organization', text: 'Structuring the store for easy browsing, updating pages, and keeping everything running smoothly.', tags: ['Navigation', 'Pages'] },
      { icon: 'research', title: 'Competitor Research', text: 'Studying competitor products and pricing so you stay ahead in your niche.', tags: ['Products', 'Pricing'] },
    ],
    workLabel: 'My work', workTitle: 'Stores & websites', workLede: 'Live previews of the real sites — move your mouse over one to stop it and look around.',
    seeAllWork: 'See all projects in detail', visit: 'Visit site',
    kinds: { progress: 'Now building', store: 'Online store', website: 'Website' },
    live: { live: 'Live', preview: 'Preview', building: 'Building', loading: 'Loading live preview…', hover: 'Hover to pause' },
    projects: {
      framezone: {
        niche: 'In progress', text: "I'm currently working on this project. More details soon.",
        tags: ['In progress'], handled: ['Setup and build currently in progress'],
      },
      kira: {
        niche: 'In progress', text: "I'm currently working on this project. More details soon.",
        tags: ['In progress'], handled: ['Setup and build currently in progress'],
      },
      motrify: {
        niche: 'Automotive Tech · UAE', text: 'Premium dash cams and car accessories. Managed product listings, collections, and store operations.',
        tags: ['Products', 'Collections', 'Operations'],
        handled: ['Product listings, titles and descriptions', 'Collections that make the catalog easy to browse', 'Day-to-day store operations'],
      },
      v8chrono: {
        niche: 'Watches & Accessories · UAE', text: 'Car-inspired watches and keychains. Handled product organization, listings, and order management.',
        tags: ['Listings', 'Orders', 'Organization'],
        handled: ['Product organization across watches and keychains', 'New listings ready to sell', 'Order management from payment to delivery'],
      },
      zoomiezone: {
        niche: 'Pet Products · UAE', text: 'Fun & interactive cat toys. Managed store setup, product pages, and customer operations.',
        tags: ['Setup', 'Products', 'Support'],
        handled: ['Store setup from the start', 'Product pages for every toy', 'Customer questions and operations'],
      },
      luvalle: {
        niche: 'Beauty Center · Abu Dhabi', text: 'A bilingual website for a ladies beauty center: services, packages, offers and booking on WhatsApp.',
        tags: ['Website', 'Arabic & English', 'Booking'],
        handled: ['Services and packages pages', 'Arabic and English versions', 'Booking straight to WhatsApp'],
      },
      albyan: {
        niche: 'Education', text: 'Website for an educational services institute, with a searchable catalog of diplomas.',
        tags: ['Website', 'Arabic', 'Catalog'],
        handled: ['Diplomas catalog with search', 'Arabic-first layout', 'Downloadable details for each diploma'],
      },
    },
    processLabel: 'How I work', processTitle: 'From messy admin to a store that runs itself',
    process: [
      { title: 'Review', text: 'I go through your products, orders, payments and pages to see what needs attention first.' },
      { title: 'Organize', text: 'Tasks go on a Notion or Trello board, so you always know what is done and what is next.' },
      { title: 'Run & grow', text: 'Listings, orders, payments, Amazon and Meta campaigns — handled every day.' },
      { title: 'Report', text: 'Clear updates in Google Sheets, so you can focus on growing the brand.' },
    ],
    whyTitle: 'Why work with me?',
    why: [
      'Hands-on with Shopify, Salla, Wix, WordPress and Amazon',
      'Payments set up right: Ziina, Stripe, Tabby, Tamara and more',
      'Meta ads and pages managed alongside your store',
      'Organized workflow using Notion & Trello',
      'Based in Dubai — available in UAE timezone',
    ],
    contactLabel: 'Get in touch', contactTitle: ["Let's work", 'together'],
    contactLede: "Ready to take your online store to the next level? I'm available for new projects and would love to help your business grow.",
    email: 'Email', whatsapp: 'WhatsApp', copy: 'Copy', copied: 'Copied',
    form: {
      title: 'Tell me about your store', name: 'Your name', namePh: 'e.g. Sara',
      store: 'Store link', storePh: 'yourstore.com', need: 'What do you need?',
      message: 'Anything else?', messagePh: 'Platform, products, order volume, timeline…', send: 'Send on WhatsApp',
      greeting: 'Hi Israa! I found you through your website.', fromLabel: 'Name', storeLabel: 'Store', needLabel: 'I need help with',
    },
    aboutLabel: 'About', aboutTitle: 'The person behind your store admin',
    bio: [
      "I'm Israa, an e-commerce store manager based in Dubai. I help brands run and grow their online stores — from products and orders to payment gateways and Amazon.",
      'I manage Meta ad campaigns, pages and content, and I build stores and websites on Shopify, Salla, Wix and WordPress, or as custom landing pages in HTML, CSS and JavaScript.',
      'I work in the UAE timezone, keep everything organized in Notion and Trello, and reply fast — so you always know where your store stands.',
    ],
    toolsTitle: 'My toolkit', toolsLede: 'The platforms and tools I use every day.',
    toolGroups: {
      platforms: 'Store platforms', payments: 'Payment gateways', marketplaces: 'Marketplaces & fulfillment',
      meta: 'Meta & social', code: 'Code', workflow: 'Workflow & content',
    },
    workPageLede: 'Every preview is the live site. Hover to pause it, click to visit.',
    handledTitle: 'What I handled', typeLabel: 'Type', statusLabel: 'Status', statusDone: 'Live', statusProgress: 'In progress',
    ctaBandTitle: 'Your store could be next.', ctaBandText: 'Send me a message and tell me what your store needs.',
    footerRole: 'E-commerce Store Manager · Dubai, UAE',
    notFoundTitle: 'This page is out of stock', notFoundText: "The page you're looking for doesn't exist or was moved.", backHome: 'Back to the homepage',
    meta: {
      home: { title: 'Israa Shawqi — E-commerce & Shopify Store Manager in Dubai', description: 'E-commerce store manager in Dubai: products, orders, payment gateways (Ziina, Stripe, Tabby, Tamara), Amazon integration, Meta ads, and stores on Shopify, Salla, Wix and WordPress.' },
      work: { title: 'Work — Stores & websites · Israa Shawqi', description: 'Live previews of the stores and websites Israa Shawqi has worked on: Motrify, V8CHRONO, ZoomieZone, Luvalle Beauty Center, Al Bayan Institute and more.' },
      about: { title: 'About Israa Shawqi — E-commerce Store Manager', description: 'Israa Shawqi runs online stores from Dubai using Shopify, Salla, Wix, WordPress, Amazon Seller Central, Meta Ads Manager and payment gateways like Ziina, Stripe, Tabby and Tamara.' },
      notFound: { title: 'Page not found · Israa Shawqi', description: 'This page does not exist.' },
    },
  },
  ar: {
    dir: 'rtl',
    nav: { work: 'أعمالي', services: 'الخدمات', about: 'عنّي', contact: 'تواصل' },
    menu: 'القائمة', langSwitch: 'English', themeDark: 'الوضع الداكن', themeLight: 'الوضع الفاتح', skip: 'انتقل للمحتوى',
    tag: 'مديرة متاجر إلكترونية',
    name: ['إسراء', 'شوقي'],
    heroLede: 'بدير المتاجر الإلكترونية وبكبّرها من الألف للياء — المنتجات والطلبات وبوابات الدفع وأمازون — ومعاها حملات إعلانية على ميتا ومواقع معمولة عشان تبيع.',
    ctaWhatsapp: 'كلّمني واتساب', ctaEmail: 'ابعتلي إيميل', ctaWork: 'شوف أعمالي',
    available: 'متاحة لمشاريع جديدة',
    dash: {
      caption: 'يوم عادي في متجر بديره',
      store: 'لوحة المتجر', today: 'النهارده',
      kpis: ['طلبات اتنفذت', 'منتجات منشورة', 'رسائل مفتوحة'],
      feedTitle: 'آخر النشاط',
      events: [
        { id: '#1048', store: 'Motrify · Stripe', item: 'كاميرا داش 4K', status: 'fulfilled' },
        { id: 'Meta', store: 'Ads Manager', item: 'حملة الكوليكشن الجديد', status: 'live' },
        { id: '#1049', store: 'ZoomieZone · Tabby', item: 'لعبة الريشة', status: 'paid' },
        { id: 'Amazon', store: 'Seller Central', item: '12 منتج', status: 'synced' },
        { id: '#1050', store: 'V8CHRONO · Ziina', item: 'ساعة Racing', status: 'shipped' },
        { id: 'رسالة', store: 'ZoomieZone', item: 'سؤال عن إرجاع', status: 'replied' },
        { id: '#1051', store: 'Motrify · Tamara', item: 'كاميرا خلفية', status: 'paid' },
      ],
      status: { fulfilled: 'اتنفذ', paid: 'اتدفع', shipped: 'اتشحن', replied: 'اترد عليه', live: 'شغالة', synced: 'اتربط' },
      toasts: ['كوليكشن «وصل حديثاً» اتحدّث', 'الدفع بـ Tabby اتفعّل', 'Meta Pixel اتربط', 'منتجات أمازون اتزامنت'],
    },
    toolsLabel: 'الأدوات اللي بستخدمها',
    stats: { stores: 'متاجر إلكترونية أدرتها', projects: 'مشاريع خلصت وشغالة عليها', platforms: 'منصات: Shopify وسلة وWix وWordPress وأمازون', based: 'مقيمة في دبي' },
    basedValue: 'الإمارات',
    servicesLabel: 'بعمل إيه', servicesTitle: 'كل اللي متجرك محتاجه في مكان واحد',
    servicesLede: 'إدارة المتجر هي الأساس، وكل الباقي موجود عشان المتجر يبيع أكتر.',
    focus: 'التركيز الأساسي',
    services: [
      { icon: 'products', title: 'إدارة المتجر والمنتجات', text: 'إضافة المنتجات وتحسينها، والمقاسات والألوان، والكوليكشنز والأسعار والمخزون، عشان الكتالوج يفضل مرتب وجاهز للبيع.', tags: ['المنتجات', 'الكوليكشنز', 'المخزون'] },
      { icon: 'orders', title: 'الطلبات والشحن', text: 'متابعة كل طلب وتنفيذه عن طريق Zendrop أو DSers أو يدوي، عشان العميل يستلم طلبه في ميعاده.', tags: ['Zendrop', 'DSers', 'الشحن'] },
      { icon: 'payments', title: 'بوابات الدفع', text: 'إعداد وربط طرق الدفع في صفحة الشراء، ومعاها اشتري دلوقتي وادفع بعدين.', tags: ['Ziina', 'Stripe', 'Wise', 'Tabby', 'Tamara'] },
      { icon: 'amazon', title: 'الربط مع أمازون', text: 'ربط متجرك بأمازون ومزامنة المنتجات والليستنج، عشان تبيع على الاتنين من مكان واحد.', tags: ['Seller Central', 'الليستنج', 'المزامنة'] },
      { icon: 'meta', title: 'إعلانات وصفحات ميتا', text: 'إدارة الحملات الإعلانية على Ads Manager، وإعداد البيكسل، وإدارة صفحات فيسبوك وإنستجرام والمحتوى.', tags: ['Ads Manager', 'Business Suite', 'المحتوى'] },
      { icon: 'design', title: 'تصميم المتاجر والمواقع', text: 'بناء متاجر ومواقع على Shopify وسلة وWix وWordPress، ولاندنج بيدج مخصوصة بـ HTML وCSS وJavaScript.', tags: ['Shopify', 'سلة', 'Wix', 'WordPress', 'لاندنج بيدج'] },
      { icon: 'support', title: 'خدمة العملاء', text: 'الرد على استفسارات العملاء باحترافية، والتعامل مع المرتجعات، والحفاظ على رضا العملاء.', tags: ['الرسائل', 'المرتجعات'] },
      { icon: 'organize', title: 'تنظيم المتجر', text: 'ترتيب المتجر عشان التصفح يبقى أسهل، وتحديث الصفحات، وإن كل حاجة تشتغل بسلاسة.', tags: ['التصفح', 'الصفحات'] },
      { icon: 'research', title: 'دراسة المنافسين', text: 'بحث في منتجات وأسعار المنافسين عشان تفضل سابقهم في مجالك.', tags: ['المنتجات', 'الأسعار'] },
    ],
    workLabel: 'أعمالي', workTitle: 'متاجر ومواقع', workLede: 'معاينة حية للمواقع الحقيقية — وقّف الماوس على أي واحد عشان يقف وتتفرج.',
    seeAllWork: 'شوف تفاصيل كل المشاريع', visit: 'زور الموقع',
    kinds: { progress: 'شغالة عليه دلوقتي', store: 'متجر إلكتروني', website: 'موقع' },
    live: { live: 'مباشر', preview: 'معاينة', building: 'تحت الإنشاء', loading: 'بنحمّل المعاينة الحية…', hover: 'وقّف الماوس عشان يقف' },
    projects: {
      framezone: {
        niche: 'شغالة عليه دلوقتي', text: 'بشتغل على المشروع ده حالياً. التفاصيل قريب.',
        tags: ['تحت الإنشاء'], handled: ['التجهيز والبناء شغالين دلوقتي'],
      },
      kira: {
        niche: 'شغالة عليه دلوقتي', text: 'بشتغل على المشروع ده حالياً. التفاصيل قريب.',
        tags: ['تحت الإنشاء'], handled: ['التجهيز والبناء شغالين دلوقتي'],
      },
      motrify: {
        niche: 'تكنولوجيا السيارات · الإمارات', text: 'كاميرات داش وإكسسوارات سيارات. أدرت المنتجات والكوليكشنز وتشغيل المتجر.',
        tags: ['المنتجات', 'الكوليكشنز', 'التشغيل'],
        handled: ['رفع المنتجات وكتابة العناوين والأوصاف', 'كوليكشنز بتخلّي تصفح الكتالوج سهل', 'تشغيل المتجر يوم بيوم'],
      },
      v8chrono: {
        niche: 'ساعات وإكسسوارات · الإمارات', text: 'ساعات وميداليات مستوحاة من السيارات. تنظيم المنتجات ورفعها وإدارة الطلبات.',
        tags: ['رفع المنتجات', 'الطلبات', 'التنظيم'],
        handled: ['تنظيم المنتجات بين الساعات والميداليات', 'منتجات جديدة جاهزة للبيع', 'إدارة الطلبات من الدفع لحد التوصيل'],
      },
      zoomiezone: {
        niche: 'منتجات الحيوانات الأليفة · الإمارات', text: 'ألعاب تفاعلية للقطط. تجهيز المتجر وصفحات المنتجات وتشغيل خدمة العملاء.',
        tags: ['التجهيز', 'المنتجات', 'الدعم'],
        handled: ['تجهيز المتجر من الأول', 'صفحة لكل لعبة', 'أسئلة العملاء والتشغيل'],
      },
      luvalle: {
        niche: 'مركز تجميل · أبوظبي', text: 'موقع بلغتين لمركز تجميل سيدات: الخدمات والباقات والعروض والحجز على واتساب.',
        tags: ['موقع', 'عربي وإنجليزي', 'حجز'],
        handled: ['صفحات الخدمات والباقات', 'نسخة عربي ونسخة إنجليزي', 'الحجز مباشرة على واتساب'],
      },
      albyan: {
        niche: 'تعليم', text: 'موقع لمعهد خدمات تعليمية، فيه كتالوج للدبلومات مع بحث.',
        tags: ['موقع', 'عربي', 'كتالوج'],
        handled: ['كتالوج الدبلومات مع البحث', 'تصميم عربي من الأساس', 'تفاصيل كل دبلومة للتحميل'],
      },
    },
    processLabel: 'طريقة شغلي', processTitle: 'من لوحة تحكم ملخبطة لمتجر ماشي لوحده',
    process: [
      { title: 'مراجعة', text: 'بعدّي على المنتجات والطلبات وطرق الدفع والصفحات عشان أعرف إيه اللي محتاج شغل الأول.' },
      { title: 'تنظيم', text: 'المهام بتتحط على بورد Notion أو Trello، فتبقى عارف إيه اللي خلص وإيه اللي جاي.' },
      { title: 'تشغيل ونمو', text: 'المنتجات والطلبات والدفع وأمازون وحملات ميتا، كل يوم.' },
      { title: 'تقرير', text: 'تحديثات واضحة على Google Sheets، وإنت تركّز على تكبير البراند.' },
    ],
    whyTitle: 'ليه تشتغل معايا؟',
    why: [
      'شغل عملي على Shopify وسلة وWix وWordPress وأمازون',
      'طرق دفع متظبطة صح: Ziina وStripe وTabby وTamara وغيرهم',
      'إعلانات وصفحات ميتا جنب إدارة المتجر',
      'شغل منظم على Notion وTrello',
      'مقيمة في دبي — متاحة بتوقيت الإمارات',
    ],
    contactLabel: 'تواصل معايا', contactTitle: ['يلا نشتغل', 'سوا'],
    contactLede: 'جاهز تنقل متجرك الإلكتروني لمستوى أعلى؟ أنا متاحة لمشاريع جديدة ونفسي أساعد البيزنس بتاعك يكبر.',
    email: 'الإيميل', whatsapp: 'واتساب', copy: 'نسخ', copied: 'اتنسخ',
    form: {
      title: 'احكيلي عن متجرك', name: 'اسمك', namePh: 'مثلاً: سارة',
      store: 'لينك المتجر', storePh: 'yourstore.com', need: 'محتاج مساعدة في إيه؟',
      message: 'حاجة تانية؟', messagePh: 'المنصة، المنتجات، عدد الطلبات، المواعيد…', send: 'ابعت على واتساب',
      greeting: 'أهلاً إسراء! وصلتلك من الموقع.', fromLabel: 'الاسم', storeLabel: 'المتجر', needLabel: 'محتاج مساعدة في',
    },
    aboutLabel: 'عنّي', aboutTitle: 'الشخص اللي ورا لوحة تحكم متجرك',
    bio: [
      'أنا إسراء، مديرة متاجر إلكترونية ومقيمة في دبي. بساعد البراندات تدير متاجرها الإلكترونية وتكبّرها — من المنتجات والطلبات لحد بوابات الدفع وأمازون.',
      'بدير حملات ميتا الإعلانية والصفحات والمحتوى، وببني متاجر ومواقع على Shopify وسلة وWix وWordPress، أو لاندنج بيدج مخصوصة بـ HTML وCSS وJavaScript.',
      'بشتغل بتوقيت الإمارات، وكل حاجة متنظمة على Notion وTrello، وبرد بسرعة — فتبقى دايماً عارف متجرك واقف فين.',
    ],
    toolsTitle: 'أدواتي', toolsLede: 'المنصات والأدوات اللي بستخدمها كل يوم.',
    toolGroups: {
      platforms: 'منصات المتاجر', payments: 'بوابات الدفع', marketplaces: 'الماركت بليس والشحن',
      meta: 'ميتا والسوشيال', code: 'البرمجة', workflow: 'تنظيم الشغل والمحتوى',
    },
    workPageLede: 'كل معاينة هي الموقع الحقيقي. وقّف الماوس عشان يقف، واضغط عشان تزوره.',
    handledTitle: 'اللي عملته', typeLabel: 'النوع', statusLabel: 'الحالة', statusDone: 'شغال', statusProgress: 'تحت الإنشاء',
    ctaBandTitle: 'متجرك ممكن يكون الجاي.', ctaBandText: 'ابعتلي رسالة وقولّي متجرك محتاج إيه.',
    footerRole: 'مديرة متاجر إلكترونية · دبي، الإمارات',
    notFoundTitle: 'الصفحة دي خلصت من المخزون', notFoundText: 'الصفحة اللي بتدور عليها مش موجودة أو اتنقلت.', backHome: 'ارجع للرئيسية',
    meta: {
      home: { title: 'إسراء شوقي — مديرة متاجر إلكترونية وShopify في دبي', description: 'مديرة متاجر إلكترونية في دبي: المنتجات والطلبات وبوابات الدفع (Ziina وStripe وTabby وTamara) والربط مع أمازون وإعلانات ميتا، ومتاجر على Shopify وسلة وWix وWordPress.' },
      work: { title: 'أعمالي — متاجر ومواقع · إسراء شوقي', description: 'معاينة حية للمتاجر والمواقع اللي اشتغلت عليها إسراء شوقي: Motrify وV8CHRONO وZoomieZone ولوفال بيوتي سنتر ومعهد البيان وغيرهم.' },
      about: { title: 'عن إسراء شوقي — مديرة متاجر إلكترونية', description: 'إسراء شوقي بتدير متاجر إلكترونية من دبي باستخدام Shopify وسلة وWix وWordPress وأمازون وMeta Ads Manager وبوابات دفع زي Ziina وStripe وTabby وTamara.' },
      notFound: { title: 'الصفحة مش موجودة · إسراء شوقي', description: 'الصفحة دي مش موجودة.' },
    },
  },
};
