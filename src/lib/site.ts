export const site = {
  name: "Magnet Digital LLC",
  title: "Magnet Digital LLC | Digital Marketing & SEO Agency in UAE",
  description:
    "Magnet Digital LLC is a Sharjah-based digital marketing and SEO agency. We build websites, ecommerce stores, and mobile apps, and run Google Ads, Meta Ads, and SEO/GEO campaigns across the UAE.",
  url: "https://www.thedigitalmagnet.com",
  location: "Sharjah (UAE)",
  emails: ["info@thedigitalmagnet.com", "magnetdigitaluae@gmail.com"],
  phones: ["+971 50 1590490", "+971 56 5242459"],
  website: "www.thedigitalmagnet.com",
  partner: {
    name: "Hussaini IT Services",
    location: "India",
    website: "www.hussainiitservices.com",
    url: "https://hussainiitservices.com",
  },
};

export type Service = {
  slug: string;
  title: string;
  navTitle?: string;
  short: string;
  excerpt: string;
  heading: string;
  body: string[];
  features: { title: string; text: string }[];
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact us" },
];

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short:
      "In today’s digital world, your website is your brand’s first impression. We Develop Dubai-based website.",
    excerpt:
      "In today’s digital world, your website is your brand’s first impression. Our Dubai-based website development company specializes in creating responsive, visually stunning, and highly functional websites tailored to your business needs. Whether you’re a startup...",
    heading: "Website Development Services",
    body: [
      "In today’s digital world, your website is your brand’s first impression. Our Dubai-based website development company specializes in creating responsive, visually stunning, and highly functional websites tailored to your business needs. Whether you’re a startup, SME, or a large enterprise, we deliver customized solutions that enhance user experience and drive engagement.",
      "Our team of expert developers uses the latest technologies, including HTML5, CSS3, JavaScript, and popular CMS platforms like WordPress, Shopify, and Magento, to ensure your website is fast, secure, and mobile-friendly. We focus on intuitive design, seamless navigation, and SEO-optimized content to help your business rank higher on search engines.",
      "From e-commerce stores and corporate websites to portfolio and landing pages, we handle every aspect of web development – design, development, testing, and maintenance. Partner with us in Dubai to transform your online presence, attract more customers, and grow your business with a professional website that stands out in the digital landscape.",
    ],
    features: [
      {
        title: "Custom Website Development",
        text: "Develop a unique website tailored to the business requirements, goals, branding, and target audience.",
      },
      {
        title: "Responsive Development",
        text: "Build websites that work seamlessly across desktops, tablets, and mobile devices with flexible and adaptive layouts.",
      },
      {
        title: "Front-End Development",
        text: "Create interactive and visually engaging interfaces using modern HTML, CSS, JavaScript, and front-end frameworks.",
      },
      {
        title: "Back-End Development",
        text: "Develop secure and reliable server-side functionality to manage databases, user accounts, forms, APIs, and business processes.",
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "Custom Ecommerce",
    navTitle: "Custom Ecommerce",
    short:
      "Expand your business online with our custom eCommerce website development services in Dubai.",
    excerpt:
      "Expand your business online with our custom eCommerce website development services in Dubai. We specialize in building robust, user-friendly online stores that drive sales and provide seamless shopping experiences. Our solutions are tailored",
    heading: "Custom Ecommerce Services",
    body: [
      "Expand your business online with our custom eCommerce website development services in Dubai. We specialize in building robust, user-friendly online stores that drive sales and provide seamless shopping experiences. Our solutions are tailored to your brand, whether you are a small retailer, growing SME, or a large enterprise.",
      "Our expert team uses cutting-edge technologies like Shopify, WooCommerce, Magento, and custom solutions to create secure, fast, and mobile-responsive eCommerce websites. From intuitive product catalogs and smooth checkout processes to payment gateway integration and inventory management, we ensure your online store runs flawlessly.",
      "We also focus on SEO-friendly design and performance optimization to help your store rank higher in search results, attract more customers, and increase conversions. Partner with us in Dubai to launch an eCommerce platform that reflects your brand, engages your audience, and boosts online revenue. Your digital storefront success starts here.",
    ],
    features: [
      {
        title: "Custom E-Commerce Development",
        text: "Build a fully customized online store based on your business goals, products, target audience, and unique requirements.",
      },
      {
        title: "User-Friendly Product Catalog",
        text: "Create an organized product catalog with categories, filters, search options, product variations, pricing, and detailed product information.",
      },
      {
        title: "Responsive E-Commerce Design",
        text: "Ensure the online store works smoothly across desktops, tablets, and mobile devices for a seamless shopping experience.",
      },
      {
        title: "Shopping Cart & Checkout",
        text: "Develop a simple and secure shopping cart and checkout process that helps customers complete purchases quickly and easily.",
      },
      {
        title: "Secure Payment Integration",
        text: "Integrate trusted payment gateways to support secure transactions through cards, UPI, wallets, net banking, and other payment methods.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development iOS/Android",
    navTitle: "Mobile App Development",
    short:
      "Build high-performing iOS and Android apps that help your business reach customers on every device.",
    excerpt:
      "Build high-performing iOS and Android apps that help your business reach customers on every device. We design, develop, and launch custom mobile applications tailored to your brand, users, and growth goals.",
    heading: "Mobile App Development Services",
    body: [
      "Build high-performing iOS and Android apps that help your business reach customers on every device. Magnet Digital LLC designs, develops, and launches custom mobile applications tailored to your brand, users, and growth goals.",
      "Our team covers the full app journey: discovery, UI/UX design, native or cross-platform development, API integration, testing, App Store and Google Play publishing, and ongoing support. Whether you need a customer app, booking platform, eCommerce app, or internal business tool, we build solutions that are fast, secure, and easy to use.",
      "From first prototype to store launch, we focus on performance, clean design, and features that support real business results in the UAE market.",
    ],
    features: [
      {
        title: "iOS App Development",
        text: "Create polished iPhone and iPad apps with native performance, App Store guidelines, and a smooth user experience.",
      },
      {
        title: "Android App Development",
        text: "Develop Android apps that work reliably across devices and are ready for Google Play.",
      },
      {
        title: "Cross-Platform Apps",
        text: "Build one codebase for iOS and Android when you need a faster launch without losing quality.",
      },
      {
        title: "UI/UX Design",
        text: "Design clear, modern app interfaces that are easy to navigate and aligned with your brand.",
      },
      {
        title: "App Store Launch & Support",
        text: "Handle testing, store submission, updates, and maintenance after your app goes live.",
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    short:
      "Accelerate your business growth with our professional Google Ads services in Dubai.",
    excerpt:
      "Accelerate your business growth with our professional Google Ads services in Dubai. We create high-performing ad campaigns that place your business at the top of search results, helping you reach customers who are actively looking for your products or services.",
    heading: "Google Ads Services",
    body: [
      "Accelerate your business growth with our professional Google Ads services in Dubai. We create high-performing ad campaigns that place your business at the top of search results, helping you reach customers who are actively looking for your products or services.",
      "Our Google Ads experts handle every aspect of campaign management, including keyword research, ad copy creation, audience targeting, bid strategy, and continuous performance optimization. We focus on maximizing your return on investment by reducing wasted ad spend and increasing qualified leads.",
      "Whether you want to boost website traffic, generate sales, or increase brand awareness, our data-driven approach ensures your campaigns deliver measurable results. We also provide detailed reporting and insights so you can track performance and understand your growth.",
    ],
    features: [
      {
        title: "Google Ads Strategy",
        text: "Create a customized advertising strategy based on your business goals, target audience, industry, location, and advertising budget.",
      },
      {
        title: "Keyword Research",
        text: "Identify relevant and high-intent keywords that potential customers are searching for to find your products or services.",
      },
      {
        title: "Search Ads Campaigns",
        text: "Create targeted search campaigns that display your ads when users actively search for relevant products or services on Google.",
      },
      {
        title: "Display Advertising",
        text: "Reach potential customers across websites, apps, and other digital platforms using visually engaging display advertisements.",
      },
      {
        title: "Shopping Ads",
        text: "Promote products directly in Google search results with product images, prices, business information, and other important details.",
      },
      {
        title: "YouTube Advertising",
        text: "Create targeted video advertising campaigns on YouTube to increase brand awareness, engagement, leads, and conversions.",
      },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    short:
      "Reach the right audience on Facebook and Instagram with high-converting Meta Ads campaigns.",
    excerpt:
      "Reach the right audience on Facebook and Instagram with high-converting Meta Ads campaigns. We plan, launch, and optimize paid social ads that generate leads, sales, and brand awareness.",
    heading: "Meta Ads Services",
    body: [
      "Reach the right audience on Facebook and Instagram with high-converting Meta Ads campaigns. Magnet Digital LLC plans, launches, and optimizes paid social advertising that generates leads, sales, and brand awareness for businesses in Dubai and across the UAE.",
      "We handle campaign structure, audience targeting, creative design, ad copy, pixel setup, retargeting, and performance reporting. Your ads are built around clear goals — whether that is website traffic, messages, app installs, or purchases.",
      "With continuous testing and optimization, we help you spend smarter on Meta and turn social attention into measurable business growth.",
    ],
    features: [
      {
        title: "Facebook & Instagram Ads",
        text: "Create and manage paid campaigns across Facebook, Instagram, and the Meta Audience Network.",
      },
      {
        title: "Audience Targeting",
        text: "Reach people based on location, interests, behavior, lookalikes, and your existing customer data.",
      },
      {
        title: "Creative & Ad Copy",
        text: "Design scroll-stopping visuals, videos, and copy that match your offer and audience.",
      },
      {
        title: "Retargeting Campaigns",
        text: "Reconnect with website visitors, engaged users, and past customers to increase conversions.",
      },
      {
        title: "Tracking & Optimization",
        text: "Set up the Meta Pixel, conversion events, and reporting so every campaign can be improved over time.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    short:
      "Elevate your brand’s online presence with expert social media management across Instagram, Facebook, LinkedIn, and more.",
    excerpt:
      "Elevate your brand’s online presence with expert social media management. We help businesses connect with their audience, build brand awareness, and drive engagement across Instagram, Facebook, LinkedIn, TikTok, and Twitter.",
    heading: "Social Media Management Services",
    body: [
      "Elevate your brand’s online presence with expert social media management. We help businesses connect with their audience, build brand awareness, and drive engagement across platforms like Instagram, Facebook, LinkedIn, TikTok, and Twitter.",
      "Our team handles content calendars, post creation, stories, community replies, and performance reporting so your profiles stay active and on-brand. We focus on consistent publishing and audience engagement, while paid campaigns are handled separately through Meta Ads and Google Ads.",
      "Whether you want stronger brand presence, more website traffic, or a professional social profile that supports sales, our Dubai-based team keeps your channels running with a clear strategy and measurable results.",
    ],
    features: [
      {
        title: "Social Media Strategy",
        text: "Develop a customized social media strategy based on your business goals, target audience, industry, and competitive landscape.",
      },
      {
        title: "Content Calendar & Posting",
        text: "Plan and publish regular posts, stories, reels, and updates that keep your profiles active.",
      },
      {
        title: "Content Creation",
        text: "Create engaging graphics, carousels, videos, reels, stories, and promotional posts for your target audience.",
      },
      {
        title: "Community Management",
        text: "Build stronger relationships by responding to comments, messages, questions, and feedback in a timely manner.",
      },
      {
        title: "Reporting & Insights",
        text: "Track growth, engagement, and content performance so your social strategy keeps improving.",
      },
    ],
  },
  {
    slug: "search-engine-optimization",
    title: "SEO/GEO",
    navTitle: "SEO/GEO",
    short:
      "Boost visibility with SEO and GEO strategies that help you rank in search engines and AI-powered results.",
    excerpt:
      "Boost your online visibility with SEO and GEO. We help businesses improve search rankings, appear in AI-powered answers, attract organic traffic, and increase conversions.",
    heading: "SEO/GEO Services",
    body: [
      "Boost your online visibility with SEO and GEO. We help businesses of all sizes improve search engine rankings, appear in AI-powered results, drive organic traffic, and increase conversions.",
      "Our specialists combine classic SEO — keyword research, on-page optimization, technical SEO, content strategy, and link building — with Generative Engine Optimization (GEO) so your brand is easier to find in Google, maps, and AI search experiences.",
      "We also provide local SEO for Dubai and UAE businesses, helping you reach the right audience and outperform competitors. Regular tracking and strategy updates keep growth measurable over the long term.",
    ],
    features: [
      {
        title: "SEO Strategy & Planning",
        text: "Develop a customized SEO strategy based on business goals, target audience, industry, competitors, and search opportunities.",
      },
      {
        title: "Keyword Research",
        text: "Identify relevant and high-value keywords that potential customers use to search for your products, services, and business.",
      },
      {
        title: "On-Page & Technical SEO",
        text: "Optimize titles, content, site structure, page speed, mobile usability, crawlability, and indexing.",
      },
      {
        title: "GEO – Generative Engine Optimization",
        text: "Structure content so your brand is more likely to appear in AI search answers, overviews, and recommendation engines.",
      },
      {
        title: "Local SEO",
        text: "Improve visibility for location-based searches and help customers in Dubai and the UAE find your business.",
      },
    ],
  },
  {
    slug: "web-hosting",
    title: "Web Hosting",
    short:
      "Ensure your website is always fast, secure, and accessible with our professional web hosting services in Dubai.",
    excerpt:
      "Ensure your website is always fast, secure, and accessible with our professional web hosting services in Dubai. We provide high-performance hosting solutions tailored for businesses of all sizes, from startups to large enterprises.",
    heading: "Web Hosting Services",
    body: [
      "Ensure your website is always fast, secure, and accessible with our professional web hosting services in Dubai. We provide high-performance hosting solutions tailored for businesses of all sizes, from startups to large enterprises.",
      "Our hosting packages include reliable uptime, SSD storage, SSL security, daily backups, malware protection, and expert support. We help you choose the right plan, migrate your website, and keep it running smoothly.",
      "With Magnet Digital LLC, your website stays online, loads quickly, and remains protected — so your customers can reach you anytime.",
    ],
    features: [
      {
        title: "High-Performance Hosting",
        text: "Fast servers, optimized configurations, and reliable uptime for business websites.",
      },
      {
        title: "Security & SSL",
        text: "Protect your website and customer data with SSL, firewalls, and malware monitoring.",
      },
      {
        title: "Backups & Recovery",
        text: "Regular backups so your website can be restored quickly if anything goes wrong.",
      },
      {
        title: "Website Migration",
        text: "Move your existing website to a faster, more stable hosting environment with minimal downtime.",
      },
    ],
  },
  {
    slug: "web-maintenance",
    title: "Web Maintenance",
    short:
      "Keep your website running smoothly and securely with our professional website maintenance services in Dubai.",
    excerpt:
      "Keep your website running smoothly and securely with our professional website maintenance services in Dubai. A well-maintained website ensures optimal performance, faster loading times, and a seamless user experience, helping your business stay.",
    heading: "Website Maintenance Services",
    body: [
      "Keep your website running smoothly and securely with our professional website maintenance services in Dubai. A well-maintained website ensures optimal performance, faster loading times, and a seamless user experience, helping your business stay competitive.",
      "Our maintenance plans cover software updates, security patches, content changes, backups, uptime monitoring, and performance checks. We handle the technical work so you can focus on running your business.",
      "From small content edits to full technical care, Magnet Digital LLC keeps your website current, secure, and ready to convert visitors.",
    ],
    features: [
      {
        title: "Regular Updates",
        text: "Keep CMS, plugins, themes, and dependencies updated to avoid bugs and security issues.",
      },
      {
        title: "Security Monitoring",
        text: "Scan for malware, apply patches, and protect your website from common threats.",
      },
      {
        title: "Content Changes",
        text: "Update text, images, products, and pages whenever your business needs a change.",
      },
      {
        title: "Performance Optimization",
        text: "Improve loading speed, fix broken links, and keep the site running smoothly.",
      },
    ],
  },
  {
    slug: "content-management-system",
    title: "Content Management System",
    short:
      "Simplify your website management with our professional Content Management System (CMS) services in Dubai.",
    excerpt:
      "Simplify your website management with our professional Content Management System (CMS) services in Dubai. We help businesses create, manage, and update their digital content efficiently without requiring technical expertise. Our team specializes in popular CMS platforms.",
    heading: "Content Management System Services",
    body: [
      "Simplify your website management with our professional Content Management System (CMS) services in Dubai. We help businesses create, manage, and update their digital content efficiently without requiring technical expertise. Our team specializes in popular CMS platforms including WordPress, Shopify, Magento, and custom solutions.",
      "We set up clean admin panels, custom post types, user roles, and editorial workflows so your team can publish updates with confidence. Training and documentation are included so you stay independent after launch.",
      "A well-built CMS saves time, reduces errors, and keeps your website growing with your business.",
    ],
    features: [
      {
        title: "CMS Setup & Customization",
        text: "Install and customize WordPress or other CMS platforms around your brand and content needs.",
      },
      {
        title: "Easy Content Editing",
        text: "Create an admin experience that makes pages, blogs, products, and media simple to update.",
      },
      {
        title: "User Roles & Permissions",
        text: "Control who can publish, edit, or manage website content across your team.",
      },
      {
        title: "Training & Support",
        text: "Help your team learn the CMS quickly and keep it running with ongoing support.",
      },
    ],
  },
  {
    slug: "logo-designing",
    title: "Logo Designing",
    short:
      "Make a lasting impression with our creative logo designing services in Dubai.",
    excerpt:
      "Make a lasting impression with our creative logo designing services in Dubai. Your logo is the face of your brand, and we craft unique, memorable designs that reflect your business identity and values. Our team of expert designers specializes in creating custom logos tailored to your brand’s personality, industry.",
    heading: "Logo Designing Services",
    body: [
      "Make a lasting impression with our creative logo designing services in Dubai. Your logo is the face of your brand, and we craft unique, memorable designs that reflect your business identity and values.",
      "Our team of expert designers specializes in creating custom logos tailored to your brand’s personality, industry, and target audience. Whether you need a modern, minimalist, or illustrative logo, we combine creativity with strategic thinking to deliver designs that stand out in Dubai’s competitive market.",
      "We provide complete logo solutions, including concept development, revisions, color palette selection, and final branding assets suitable for print and digital use. Every design is created with versatility in mind, ensuring it looks perfect on websites, social media, business cards, and promotional materials.",
    ],
    features: [
      {
        title: "Custom Logo Design",
        text: "Create a unique and professional logo that represents your brand identity, business values, and overall vision.",
      },
      {
        title: "Creative Concept Development",
        text: "Develop creative logo concepts based on your industry, target audience, brand personality, and market positioning.",
      },
      {
        title: "Brand Identity Integration",
        text: "Design logos that complement your overall brand identity, including colors, typography, imagery, and visual style.",
      },
      {
        title: "Typography Selection",
        text: "Choose appropriate fonts and lettering styles that communicate the right personality and make the logo easy to recognize.",
      },
      {
        title: "Color Selection",
        text: "Use a carefully selected color palette that reflects your brand message while maintaining strong visual appeal and recognition.",
      },
    ],
  },
  {
    slug: "business-card-brochures",
    title: "Business Card/ brochures",
    navTitle: "Business Card/ brochures",
    short:
      "Create a powerful first impression with our professional business card and brochure design services in Dubai.",
    excerpt:
      "Create a powerful first impression with our professional business card and brochure design services in Dubai. We help businesses showcase their brand identity through visually appealing, creative, and professional print materials that leave a lasting impact. Our experienced designers...",
    heading: "Business Card & Brochure Design",
    body: [
      "Create a powerful first impression with our professional business card and brochure design services in Dubai. We help businesses showcase their brand identity through visually appealing, creative, and professional print materials that leave a lasting impact.",
      "Our experienced designers craft layouts that communicate your offer clearly — from compact visiting cards to multi-page brochures, flyers, and company profiles. Every piece is print-ready and aligned with your brand colors, fonts, and tone.",
      "Whether you need a one-off design or a full stationery set, we deliver materials that look premium in the hand and work hard for your sales team.",
    ],
    features: [
      {
        title: "Business Card Design",
        text: "Create memorable visiting cards with a clean layout, strong branding, and print-ready files.",
      },
      {
        title: "Brochure & Flyer Design",
        text: "Design brochures that present your services, offers, and company story in a clear visual flow.",
      },
      {
        title: "Brand Consistency",
        text: "Match print materials with your logo, colors, and website so every customer touchpoint feels unified.",
      },
      {
        title: "Print-Ready Artwork",
        text: "Deliver files with correct sizes, bleeds, and color modes for professional printing.",
      },
    ],
  },
  {
    slug: "flat-web-design",
    title: "Flat Web Design",
    short:
      "Give your website a modern, clean, and user-friendly look with our Flat Web Design services in Dubai.",
    excerpt:
      "Give your website a modern, clean, and user-friendly look with our Flat Web Design services in Dubai. Flat design focuses on simplicity, minimalism, and intuitive navigation, ensuring your website is visually appealing and easy to use across all devices. Our Dubai-based design team specializes.",
    heading: "Flat Web Design Services",
    body: [
      "Give your website a modern, clean, and user-friendly look with our Flat Web Design services in Dubai. Flat design focuses on simplicity, minimalism, and intuitive navigation, ensuring your website is visually appealing and easy to use across all devices.",
      "Our Dubai-based design team specializes in bold color, clear typography, simple iconography, and spacious layouts. The result is a website that loads faster, looks current, and helps users take action without distraction.",
      "Flat design is ideal for startups, SaaS products, corporate sites, and brands that want a contemporary digital presence.",
    ],
    features: [
      {
        title: "Minimal Visual Language",
        text: "Use simple shapes, clean icons, and uncluttered layouts that keep attention on your message.",
      },
      {
        title: "Modern Color & Type",
        text: "Build a distinctive look with strong color contrast and readable typography.",
      },
      {
        title: "Fast, Lightweight UI",
        text: "Reduce visual noise and heavy effects so pages feel faster and easier to scan.",
      },
      {
        title: "Mobile-First Layouts",
        text: "Design interfaces that stay clear and usable on every screen size.",
      },
    ],
  },
  {
    slug: "single-page-web-design",
    title: "Single Page Web Design",
    short:
      "Make a strong impact online with our Single Page Web Design services in Dubai.",
    excerpt:
      "Make a strong impact online with our Single Page Web Design services in Dubai. Perfect for startups, portfolios, and small businesses, single-page websites provide a streamlined, user-friendly experience that presents all your content on one continuous, scrollable page.",
    heading: "Single Page Web Design Services",
    body: [
      "Make a strong impact online with our Single Page Web Design services in Dubai. Perfect for startups, portfolios, and small businesses, single-page websites provide a streamlined, user-friendly experience that presents all your content on one continuous, scrollable page.",
      "We structure your story from hero to contact with smooth scrolling, clear sections, and strong calls to action. The design stays fast, mobile-friendly, and easy to update.",
      "A single-page website is an effective way to launch quickly, present one offer clearly, and convert visitors without extra navigation.",
    ],
    features: [
      {
        title: "Story-Driven Layout",
        text: "Guide visitors through your offer in a natural scroll, from introduction to enquiry.",
      },
      {
        title: "Smooth Section Navigation",
        text: "Add anchor links and a sticky menu so users can jump to services, work, or contact instantly.",
      },
      {
        title: "Fast Launch",
        text: "Deliver a complete website experience on one page without unnecessary complexity.",
      },
      {
        title: "Conversion Focused",
        text: "Place contact forms and CTAs where they convert, without sending users to extra pages.",
      },
    ],
  },
  {
    slug: "video-integration",
    title: "Video Integration",
    short:
      "Enhance your website and digital campaigns with our professional Video Integration services in Dubai.",
    excerpt:
      "Enhance your website and digital campaigns with our professional Video Integration services in Dubai. Videos are a powerful tool to engage visitors, communicate your message effectively, and increase user interaction. Our team specializes in seamlessly embedding videos into websites, landing pages.",
    heading: "Video Integration Services",
    body: [
      "Enhance your website and digital campaigns with our professional Video Integration services in Dubai. Videos are a powerful tool to engage visitors, communicate your message effectively, and increase user interaction. Our team specializes in seamlessly embedding videos into websites, landing pages, and marketing campaigns.",
      "We handle hosting options, lazy loading, custom players, background videos, product demos, and YouTube or Vimeo embeds that stay fast on mobile. Video is placed where it supports the story — not where it slows the page down.",
      "Use video to explain your offer, build trust, and keep visitors on your site longer.",
    ],
    features: [
      {
        title: "Website Video Embeds",
        text: "Add product videos, explainers, and testimonials without hurting page speed.",
      },
      {
        title: "Landing Page Video",
        text: "Use hero and section videos that support conversions on campaign pages.",
      },
      {
        title: "Custom Players",
        text: "Match video controls and thumbnails to your brand for a polished look.",
      },
      {
        title: "Performance Friendly",
        text: "Lazy-load media and serve the right file sizes so pages remain fast.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceLinks = services.map((service) => ({
  slug: service.slug,
  title: service.navTitle ?? service.title,
}));

export const homeServices = services.slice(0, 6);

export const posts = [
  {
    slug: "a-guide-to-google-seo-algorithm-updates",
    title: "A Guide to Google SEO Algorithm",
    date: "August 12, 2026",
    author: "admin",
    comments: 3,
    categories: ["Marketing"],
    image: "/images/blog/post-3.jpg",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish...",
  },
  {
    slug: "best-practices-seo-syndicated-content",
    title: "Best Practices: SEO Syndicated Content",
    date: "August 12, 2026",
    author: "admin",
    comments: 0,
    categories: ["Business"],
    image: "/images/blog/post-6.jpg",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish...",
  },
  {
    slug: "15-seo-best-practices-website-architecture",
    title: "15 SEO Best Practices: Website Architecture",
    date: "August 12, 2026",
    author: "admin",
    comments: 4,
    categories: ["Marketing", "SEO"],
    image: "/images/blog/post-1.jpg",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish...",
  },
  {
    slug: "15-seo-best-practices-website-architectures",
    title: "15 SEO Best Practices: Website Architectures",
    date: "August 12, 2026",
    author: "admin",
    comments: 0,
    categories: ["Marketing", "SEO"],
    image: "/images/blog/post-1.jpg",
    excerpt:
      "The basic premise of search engine reputation management is to use the following three strategies to accomplish...",
  },
] as const;

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const team = [
  { name: "Gina Bruno", role: "CEO of Company", image: "/images/team/mem1.jpg" },
  { name: "David Ferry", role: "WEB Developer", image: "/images/team/mem2.jpg" },
  { name: "Christina Tores", role: "General Manager", image: "/images/team/mem3.jpg" },
  { name: "Robert Cooper", role: "WEB Designer", image: "/images/team/mem4.jpg" },
  { name: "Olivia Chee", role: "Marketing Manager", image: "/images/team/mem5.jpg" },
] as const;

export const blogBody = [
  "One of the principal decisions that startup owners have to make is whether or not to engage in SEO. One common consideration is the cost of investing in an SEO campaign versus possible returns. Another is the daunting list of SEO terminologies, which may overwhelm newcomers to the e-commerce and website scene. If you are a new online entrepreneur but are not convinced of the benefits of SEO, then this article is for you! Here are some of the reasons why SEO is important and why you should consider it as a marketing technique. SEO is less expensive than other online marketing approaches. It also offers higher reward rates when compared to other techniques such as social media marketing, pay per click advertising, and email marketing. While you may need to defray a substantial amount to cover initial SEO planning and processes that include website design, programming, and strategizing, you can be sure to get faster and more long-term results.",
  "Implementing SEO strategies help you to rank higher on the search engine’s results page (SERP). This means that when your target customers search for products and services that your industry offers, they are likely to find your website. When you repeatedly appear on the SERP, users become aware of your site and your business. This increases the chances of landing potential customers on your webpages.",
  "One SEO component called off-site SEO ensures that users of external pages or of social media can find your website. Being optimized for SEO increases the site’s potential to draw customers from other platforms other than the search engine. For instance, when you post content and links to your page on Facebook or Twitter, you are able to promote your website and attract more customers. One of the main goals of SEO is to attract the targeted audience through organic searches. The number of visitors to your site influences your sales and subscriptions. It also promotes the marketing of your products and services. Increased inbound traffic is always good for business because it equates to more conversion opportunities.",
  "Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. It helps you identify popular and valuable keywords so you can decide how to structure or revise your content. It also gives you insights on your market’s behavior such as location, times of activity, frequency of searches, technologies used, product preferences, etc. All these metrics are useful in helping you get to know your audience, their needs, and their expectations.",
];
