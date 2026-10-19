export type GccCountry = {
  slug: string;
  name: string;
  shortName: string;
  officialName: string;
  iso: string;
  capital: string;
  title: string;
  description: string;
  keywords: string[];
  cardText: string;
  heading: string;
  intro: string[];
  market: string[];
  cities: string[];
  industries: { title: string; text: string }[];
  servicesFocus: { slug: string; title: string; text: string }[];
  why: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const gccCountries: GccCountry[] = [
  {
    slug: "uae",
    name: "the UAE",
    shortName: "UAE",
    officialName: "United Arab Emirates",
    iso: "AE",
    capital: "Abu Dhabi",
    title: "Best IT Services in UAE",
    description:
      "Best IT services in the UAE from Magnet Digital LLC in Sharjah. Websites, ecommerce, apps, SEO, Google Ads, and Meta Ads for Dubai, Abu Dhabi, and all seven emirates.",
    keywords: [
      "best IT services in UAE",
      "IT company UAE",
      "digital marketing agency Sharjah",
      "website development Dubai",
      "SEO agency UAE",
      "Google Ads UAE",
    ],
    cardText:
      "Sharjah-based websites, SEO, ads, and apps for Dubai, Abu Dhabi, and every emirate.",
    heading: "IT, web, and digital growth for businesses across the UAE",
    intro: [
      "Magnet Digital LLC is a Sharjah-based digital agency delivering some of the best IT services in the UAE for companies that need a stronger website, clearer search visibility, and campaigns that actually bring enquiries. We work with startups, SMEs, and established brands in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
      "The UAE search and ads market is competitive. Customers compare vendors on Google, maps, Instagram, and WhatsApp before they call. We build the digital stack behind that journey: fast websites, ecommerce stores, iOS and Android apps, SEO and GEO, Google Ads, Meta Ads, and social media management — in English and Arabic where your audience needs both.",
      "Because we are based in Sharjah, we understand local buying behaviour, free-zone and mainland business models, and how UAE customers expect speed, trust, and a professional first impression. If you are looking for an IT and digital partner that stays accountable after launch, start here.",
    ],
    market: [
      "UAE buyers research on mobile first. Pages that load slowly, ignore Arabic, or hide contact details lose leads to competitors who look more credible online.",
      "Local SEO still wins high-intent searches such as “near me”, emirate-level service queries, and Google Business Profile results in Dubai and Sharjah. We pair that with paid ads for faster pipeline while organic rankings grow.",
      "From free-zone trading companies to hospitality, real estate, healthcare, education, and professional services, we tailor websites and campaigns to how each sector sells in the Emirates.",
    ],
    cities: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al Quwain",
    ],
    industries: [
      {
        title: "Trade, services, and SMEs",
        text: "Corporate sites, catalogues, and lead forms for trading, contracting, and professional firms that sell across the emirates.",
      },
      {
        title: "Real estate and hospitality",
        text: "Property and hotel websites with enquiry flows, campaign landing pages, and ads that reach residents and visitors.",
      },
      {
        title: "Retail and ecommerce",
        text: "Online stores with secure checkout, product SEO, and shopping ads for brands selling in the UAE.",
      },
      {
        title: "Healthcare and education",
        text: "Clear service pages, appointment or enquiry paths, and compliant local search visibility.",
      },
    ],
    servicesFocus: [
      {
        slug: "website-development",
        title: "Website development in the UAE",
        text: "Responsive, SEO-ready websites built for UAE mobiles, bilingual content, and conversion — not just a brochure.",
      },
      {
        slug: "ecommerce",
        title: "Ecommerce stores for UAE shoppers",
        text: "Custom online stores with catalogues, payments, and a checkout that works for local and GCC customers.",
      },
      {
        slug: "search-engine-optimization",
        title: "SEO and GEO in the Emirates",
        text: "Keyword research, technical SEO, content, local maps, and generative engine optimization so you appear in Google and AI answers.",
      },
      {
        slug: "google-ads",
        title: "Google Ads in Dubai, Sharjah, and Abu Dhabi",
        text: "Search, display, and shopping campaigns aimed at people already looking for your offer in the UAE.",
      },
      {
        slug: "meta-ads",
        title: "Meta Ads for UAE audiences",
        text: "Facebook and Instagram ads with emirate targeting, creative testing, and retargeting.",
      },
      {
        slug: "mobile-app-development",
        title: "iOS and Android apps",
        text: "Customer and operations apps designed, built, and published for UAE users.",
      },
    ],
    why: [
      {
        title: "On the ground in Sharjah",
        text: "You work with a UAE agency, not an offshore template mill. We know how businesses here buy websites and marketing.",
      },
      {
        title: "Full digital stack",
        text: "Web, ecommerce, apps, SEO, ads, and social sit in one plan so your brand does not look different on every channel.",
      },
      {
        title: "Ethical, measurable SEO",
        text: "No ranking tricks. We focus on technical quality, content, and local relevance that last.",
      },
      {
        title: "India delivery partner",
        text: "Complex builds can draw on Hussaini IT Services while Magnet Digital remains your UAE client team.",
      },
    ],
    faqs: [
      {
        q: "Who offers the best IT services in the UAE for websites and SEO?",
        a: "Magnet Digital LLC in Sharjah delivers website development, ecommerce, apps, SEO/GEO, Google Ads, and Meta Ads for businesses across Dubai and the UAE. The right partner depends on your goals; we specialise in digital growth rather than hardware or office networking.",
      },
      {
        q: "Do you only work with companies in Sharjah?",
        a: "No. We are based in Sharjah and serve clients throughout Dubai, Abu Dhabi, and the other emirates, on-site or remotely.",
      },
      {
        q: "Can you build Arabic and English websites?",
        a: "Yes. We plan structure, content, and SEO for bilingual UAE audiences when your customers search in both languages.",
      },
      {
        q: "How do I start a project in the UAE?",
        a: "Use Contact Us, email info@thedigitalmagnet.com, or call +971 56 5242459. We will scope the website, SEO, or ads work and send a clear proposal.",
      },
    ],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    shortName: "Saudi Arabia",
    officialName: "Kingdom of Saudi Arabia",
    iso: "SA",
    capital: "Riyadh",
    title: "Best IT Services in Saudi Arabia",
    description:
      "Best IT services in Saudi Arabia from Magnet Digital LLC. Websites, ecommerce, SEO, Google Ads, and apps for Riyadh, Jeddah, Dammam, and Vision 2030 businesses.",
    keywords: [
      "best IT services in Saudi Arabia",
      "IT company Riyadh",
      "website development Saudi Arabia",
      "SEO agency Jeddah",
      "digital marketing KSA",
      "Google Ads Saudi Arabia",
    ],
    cardText:
      "Arabic-first websites, SEO, and paid ads for Riyadh, Jeddah, Dammam, and Vision 2030 brands.",
    heading: "Digital IT services for Vision 2030 businesses in Saudi Arabia",
    intro: [
      "Saudi Arabia is the largest digital market in the GCC. Companies in Riyadh, Jeddah, the Eastern Province, and emerging destinations need websites, apps, and campaigns that match the Kingdom’s pace — Arabic-first where it matters, fast on mobile, and ready for Google, maps, and social.",
      "Magnet Digital LLC provides IT and digital marketing services for Saudi organisations that want a professional online presence without assembling five different vendors. From Sharjah we plan, build, and optimise websites, ecommerce, SEO/GEO, Google Ads, Meta Ads, and mobile apps for KSA audiences.",
      "Vision 2030 has raised the bar: customers expect polished booking flows, clear service pages, and brands that look credible next to regional competitors. We help you meet that standard with measurable search and advertising, not generic templates.",
    ],
    market: [
      "Search behaviour in Saudi Arabia is heavily mobile and often Arabic. Rankings and ads that ignore dialect, local city names, and high-intent commercial queries waste budget.",
      "Riyadh and Jeddah are dense competitive markets. We combine technical SEO, content, and paid search so you can win visibility while authority is still being built.",
      "Giga-projects, tourism, retail, healthcare, education, and professional services all need different site structures and conversion paths. We do not copy a UAE template onto a KSA brand.",
    ],
    cities: [
      "Riyadh",
      "Jeddah",
      "Dammam",
      "Khobar",
      "Makkah",
      "Madinah",
      "NEOM region",
      "Abha",
    ],
    industries: [
      {
        title: "Enterprise and professional services",
        text: "Corporate websites, careers pages, and lead capture for firms expanding under Vision 2030.",
      },
      {
        title: "Retail, F&B, and ecommerce",
        text: "Stores and catalogues with local payment expectations, product SEO, and shopping campaigns.",
      },
      {
        title: "Tourism, culture, and hospitality",
        text: "Destination and hotel sites with multilingual content and campaign landing pages.",
      },
      {
        title: "Healthcare and education",
        text: "Service and programme pages that help patients and students find you in Google and maps.",
      },
    ],
    servicesFocus: [
      {
        slug: "website-development",
        title: "Website development for Saudi brands",
        text: "Custom sites structured for Arabic and English, city landing pages, and enquiry or booking flows.",
      },
      {
        slug: "search-engine-optimization",
        title: "SEO and GEO in Saudi Arabia",
        text: "Arabic keyword research, technical SEO, content, and AI-search readiness for Riyadh, Jeddah, and nationwide queries.",
      },
      {
        slug: "google-ads",
        title: "Google Ads in KSA",
        text: "Search and display campaigns with city and language targeting, built around qualified leads rather than empty clicks.",
      },
      {
        slug: "ecommerce",
        title: "Ecommerce for the Saudi market",
        text: "Online stores designed for catalogue scale, mobile checkout, and product visibility in search.",
      },
      {
        slug: "meta-ads",
        title: "Meta Ads in Saudi Arabia",
        text: "Facebook and Instagram campaigns for awareness, messages, and conversions with KSA audience targeting.",
      },
      {
        slug: "social-media",
        title: "Social media management",
        text: "Consistent, on-brand publishing and community management that supports your Saudi sales story.",
      },
    ],
    why: [
      {
        title: "Built for the Kingdom, not copied from elsewhere",
        text: "Messaging, keywords, and UX are planned for Saudi cities and Arabic search demand.",
      },
      {
        title: "GCC delivery from the UAE",
        text: "Same time zone, regional context, and a Sharjah team that already works across the Gulf.",
      },
      {
        title: "One owner for web and acquisition",
        text: "The site, SEO, and ads are designed together so paid traffic lands on pages that convert.",
      },
      {
        title: "Transparent reporting",
        text: "You see rankings, traffic, and campaign results in plain language.",
      },
    ],
    faqs: [
      {
        q: "Can a UAE agency deliver the best IT services in Saudi Arabia?",
        a: "Yes. Magnet Digital LLC serves KSA remotely from Sharjah with websites, SEO, ads, and apps tailored to Saudi cities and Arabic search. You do not need a Riyadh office to get a Kingdom-ready digital presence.",
      },
      {
        q: "Do you create Arabic SEO content?",
        a: "We plan Arabic and English keyword strategies and structure sites so both languages can rank. Content can be produced with your team or specialist writers as part of the project.",
      },
      {
        q: "Which Saudi cities do you support?",
        a: "Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, and other markets as your coverage grows, including campaign geo-targeting.",
      },
      {
        q: "How do Saudi businesses start with Magnet Digital?",
        a: "Share your website or campaign goals via our Contact Us page or info@thedigitalmagnet.com. We reply with scope, timeline, and next steps.",
      },
    ],
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    shortName: "Kuwait",
    officialName: "State of Kuwait",
    iso: "KW",
    capital: "Kuwait City",
    title: "Best IT Services in Kuwait",
    description:
      "Best IT services in Kuwait from Magnet Digital LLC. Websites, SEO, Google Ads, Meta Ads, and ecommerce for Kuwait City, Hawalli, Salmiya, and nationwide brands.",
    keywords: [
      "best IT services in Kuwait",
      "IT company Kuwait",
      "website development Kuwait City",
      "SEO agency Kuwait",
      "digital marketing Kuwait",
      "Google Ads Kuwait",
    ],
    cardText:
      "High-trust websites, local SEO, and ads for Kuwait City, Salmiya, Hawalli, and Ahmadi.",
    heading: "IT and digital services for Kuwait’s compact, high-value market",
    intro: [
      "Kuwait is a smaller geography than Saudi Arabia or the UAE, but competition for attention is intense. Households and businesses research on Google and Instagram, expect WhatsApp-ready contact, and judge a company by the quality of its website within seconds.",
      "Magnet Digital LLC delivers IT services in Kuwait focused on digital presence: custom websites, ecommerce, SEO and GEO, Google Ads, Meta Ads, social media, and mobile apps. We help Kuwaiti brands look as professional online as they do in person.",
      "Whether you serve Kuwait City, Salmiya, Hawalli, Ahmadi, or customers across the GCC from Kuwait, we build pages and campaigns around how people actually search for your category — not generic Gulf copy.",
    ],
    market: [
      "High smartphone use means page speed, tap-friendly menus, and clear phone and WhatsApp actions are non-negotiable.",
      "Many categories are relationship-driven. A credible site, reviews, and consistent social proof support referrals instead of replacing them.",
      "Bilingual content (Arabic and English) is often required for mixed audiences of nationals, residents, and regional clients.",
    ],
    cities: ["Kuwait City", "Hawalli", "Salmiya", "Ahmadi", "Farwaniya", "Jahra"],
    industries: [
      {
        title: "Trading houses and family businesses",
        text: "Modern sites that present heritage brands clearly to a new generation of buyers.",
      },
      {
        title: "F&B, retail, and lifestyle",
        text: "Location pages, menus or catalogues, and ads that drive visits and orders.",
      },
      {
        title: "Professional and oil-adjacent services",
        text: "B2B websites that explain capabilities, projects, and contact paths for procurement teams.",
      },
      {
        title: "Healthcare and education",
        text: "Service visibility in local search so patients and parents can find you quickly.",
      },
    ],
    servicesFocus: [
      {
        slug: "website-development",
        title: "Website development in Kuwait",
        text: "Clean, fast sites with strong contact paths, service pages, and mobile layouts for Kuwaiti users.",
      },
      {
        slug: "search-engine-optimization",
        title: "Local SEO in Kuwait",
        text: "Maps, on-page SEO, and content aimed at Kuwait City and governorate-level searches.",
      },
      {
        slug: "google-ads",
        title: "Google Ads in Kuwait",
        text: "Tight geo-targeting so budget stays on Kuwait searchers, not accidental regional clicks.",
      },
      {
        slug: "meta-ads",
        title: "Meta Ads for Kuwait",
        text: "Instagram-first creatives and retargeting for a market that lives on social platforms.",
      },
      {
        slug: "ecommerce",
        title: "Ecommerce websites",
        text: "Stores with clear shipping, payments, and product SEO for Kuwait and GCC delivery.",
      },
      {
        slug: "logo-designing",
        title: "Brand and logo design",
        text: "Identity work that looks premium in a market where presentation is part of trust.",
      },
    ],
    why: [
      {
        title: "Precision in a small market",
        text: "We do not spray nationwide GCC ads. Targeting, keywords, and landing pages are Kuwait-specific.",
      },
      {
        title: "Design quality that matches local taste",
        text: "Kuwaiti clients and customers expect polished visuals. We avoid cheap template looks.",
      },
      {
        title: "SEO plus ads together",
        text: "Organic and paid work as one system so you are visible while rankings compound.",
      },
      {
        title: "Easy to work with from abroad",
        text: "Clear Sharjah-based communication, WhatsApp, and a defined project process.",
      },
    ],
    faqs: [
      {
        q: "Where can I find the best IT services in Kuwait for a new website?",
        a: "Magnet Digital LLC builds websites, SEO, and ads for Kuwaiti businesses from our Sharjah office. We specialise in digital IT — sites, ecommerce, apps, and marketing — rather than computer hardware.",
      },
      {
        q: "Do you visit Kuwait in person?",
        a: "Most projects run remotely with video, WhatsApp, and shared reviews. On-site visits can be discussed for larger retainers.",
      },
      {
        q: "Is local SEO useful in such a small country?",
        a: "Yes. People still search by area and category. Google Business Profile, maps, and city-level pages help you win those clicks.",
      },
      {
        q: "How do we begin?",
        a: "Send your current site or goals through Contact Us or email info@thedigitalmagnet.com.",
      },
    ],
  },
  {
    slug: "qatar",
    name: "Qatar",
    shortName: "Qatar",
    officialName: "State of Qatar",
    iso: "QA",
    capital: "Doha",
    title: "Best IT Services in Qatar",
    description:
      "Best IT services in Qatar from Magnet Digital LLC. Websites, SEO, Google Ads, Meta Ads, and apps for Doha, Lusail, Al Wakrah, and Qatar National Vision 2030 brands.",
    keywords: [
      "best IT services in Qatar",
      "IT company Doha",
      "website development Qatar",
      "SEO agency Doha",
      "digital marketing Qatar",
      "Google Ads Qatar",
    ],
    cardText:
      "Doha-ready websites, SEO, and campaigns for Lusail, Al Wakrah, Al Rayyan, and nationwide brands.",
    heading: "Digital IT services for Doha and Qatar’s next decade of growth",
    intro: [
      "Qatar’s economy is concentrated, international, and visually demanding. Brands in Doha, Lusail, Al Rayyan, and Al Wakrah compete for residents, visitors, and corporate clients who expect world-class websites and campaigns.",
      "Magnet Digital LLC offers IT services in Qatar that cover website development, ecommerce, mobile apps, SEO and GEO, Google Ads, Meta Ads, and social media. We help you show up when someone searches for your category in Doha or plans a visit from the wider GCC.",
      "National Vision 2030, sports, hospitality, education, and energy services all need digital properties that feel as considered as the country’s public realm. We build for that standard: fast, bilingual where needed, and conversion-focused.",
    ],
    market: [
      "Doha dominates demand. We still segment audiences — residents, expats, corporate procurement, and tourists — because one homepage cannot speak to everyone.",
      "Event-driven and seasonal peaks (sports, conferences, tourism) reward landing pages and ads you can switch on quickly.",
      "Quality of design is a trust signal. Thin template sites underperform against regional competitors.",
    ],
    cities: ["Doha", "Lusail", "Al Rayyan", "Al Wakrah", "Al Khor", "Education City"],
    industries: [
      {
        title: "Hospitality, sports, and events",
        text: "Booking-led sites, campaign pages, and ads timed around occupancy and fixtures.",
      },
      {
        title: "Professional and energy services",
        text: "Capability-led websites for contractors, consultants, and B2B suppliers.",
      },
      {
        title: "Education and healthcare",
        text: "Programme and clinic pages with strong local search and enquiry forms.",
      },
      {
        title: "Retail and ecommerce",
        text: "Stores and catalogues for a high-income, mobile-first shopper.",
      },
    ],
    servicesFocus: [
      {
        slug: "website-development",
        title: "Website development in Doha",
        text: "Premium layouts, clear services, and enquiry paths built for Qatari and international audiences.",
      },
      {
        slug: "search-engine-optimization",
        title: "SEO and GEO in Qatar",
        text: "Doha-focused keywords, technical SEO, and content that can appear in Google and AI overviews.",
      },
      {
        slug: "google-ads",
        title: "Google Ads in Qatar",
        text: "Search campaigns with tight Doha and nationwide geo settings and conversion tracking.",
      },
      {
        slug: "meta-ads",
        title: "Meta Ads for Qatar",
        text: "Instagram and Facebook ads for brand and lead goals in a visually competitive feed.",
      },
      {
        slug: "single-page-web-design",
        title: "Campaign and one-page sites",
        text: "Fast-launch pages for offers, events, and seasonal promotions.",
      },
      {
        slug: "video-integration",
        title: "Video on your website",
        text: "Property, brand, and explainer video embedded without slowing the page.",
      },
    ],
    why: [
      {
        title: "Premium presentation",
        text: "Design and UX are treated as part of the product, not an afterthought.",
      },
      {
        title: "GCC context from Sharjah",
        text: "We already work across Gulf markets and understand bilingual, high-expectation buyers.",
      },
      {
        title: "Search plus brand demand",
        text: "SEO captures people ready to buy; ads and social fill the gaps around events and launches.",
      },
      {
        title: "Straightforward engagement",
        text: "Fixed scopes, clear timelines, and a single UAE point of contact.",
      },
    ],
    faqs: [
      {
        q: "Who provides the best IT services in Qatar for digital projects?",
        a: "Magnet Digital LLC delivers websites, SEO, ads, and apps for Doha and Qatar from Sharjah. Choose us when you want a digital marketing and web partner, not a hardware IT desk.",
      },
      {
        q: "Do you work with companies in Lusail and outside Doha?",
        a: "Yes. Targeting, content, and landing pages can focus on Lusail, Al Wakrah, Al Rayyan, and other areas as needed.",
      },
      {
        q: "Can you support English and Arabic sites?",
        a: "Yes. We plan IA and SEO for both languages when your audience searches in both.",
      },
      {
        q: "How do we request a quote?",
        a: "Use the Contact Us form or email info@thedigitalmagnet.com with your goals and current website.",
      },
    ],
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    shortName: "Bahrain",
    officialName: "Kingdom of Bahrain",
    iso: "BH",
    capital: "Manama",
    title: "Best IT Services in Bahrain",
    description:
      "Best IT services in Bahrain from Magnet Digital LLC. Websites, SEO, Google Ads, and ecommerce for Manama, Riffa, Muharraq, Seef, and financial-services brands.",
    keywords: [
      "best IT services in Bahrain",
      "IT company Manama",
      "website development Bahrain",
      "SEO agency Bahrain",
      "digital marketing Manama",
      "Google Ads Bahrain",
    ],
    cardText:
      "Fintech-ready websites, SEO, and ads for Manama, Seef, Muharraq, and Riffa.",
    heading: "IT services for Bahrain’s financial, professional, and SME economy",
    intro: [
      "Bahrain punches above its size as a financial, fintech, and professional-services hub with a short hop to Saudi Arabia. Companies in Manama, Seef, Muharraq, and Riffa need websites that look institutional, load quickly, and generate qualified enquiries.",
      "Magnet Digital LLC provides IT and digital services in Bahrain: website development, CMS, ecommerce, SEO/GEO, Google Ads, Meta Ads, social media, and apps. We help you compete with regional firms that already invest in search and design.",
      "Because the island is compact, wasted ad spend shows up fast. We keep targeting tight, landing pages specific, and SEO focused on how Bahraini and visiting GCC clients actually search.",
    ],
    market: [
      "Banking, insurance, consulting, and startups often need trust-heavy sites: regulation language, team credibility, and clear service lines.",
      "Cross-border intent is common. Some campaigns should capture Saudi and UAE interest as well as local Manama demand — with separate messaging, not one blurry GCC page.",
      "Local SEO still matters for clinics, F&B, retail, and services that win on maps in Seef, Juffair, and Muharraq.",
    ],
    cities: ["Manama", "Riffa", "Muharraq", "Seef", "Juffair", "Isa Town"],
    industries: [
      {
        title: "Financial and professional services",
        text: "Corporate sites that explain offers, compliance posture, and contact for serious buyers.",
      },
      {
        title: "Startups and SaaS",
        text: "Product sites, landing pages, and paid acquisition for companies using Bahrain as a launchpad.",
      },
      {
        title: "Hospitality and retail",
        text: "Location-rich pages and ads for visitors and residents.",
      },
      {
        title: "Healthcare and education",
        text: "Findable service pages and enquiry journeys for local families.",
      },
    ],
    servicesFocus: [
      {
        slug: "website-development",
        title: "Website development in Bahrain",
        text: "Professional sites for Manama brands, with CMS so your team can update content safely.",
      },
      {
        slug: "search-engine-optimization",
        title: "SEO in Bahrain",
        text: "Keyword and technical work aimed at Manama and nationwide queries, plus GEO for AI search.",
      },
      {
        slug: "google-ads",
        title: "Google Ads in Bahrain",
        text: "Careful geo and language settings so a small island budget is not leaked to the wrong country.",
      },
      {
        slug: "content-management-system",
        title: "CMS setup",
        text: "WordPress and similar platforms with roles, training, and a clean editor experience.",
      },
      {
        slug: "meta-ads",
        title: "Meta Ads",
        text: "Facebook and Instagram campaigns for leads and awareness in Bahrain and selected GCC geos.",
      },
      {
        slug: "web-maintenance",
        title: "Website maintenance",
        text: "Updates, backups, and security so a regulated-looking site stays that way.",
      },
    ],
    why: [
      {
        title: "Budget discipline",
        text: "We treat Bahrain’s scale as a feature: precise targeting, not inflated media plans.",
      },
      {
        title: "Trust-first design",
        text: "Layouts and copy support financial and professional credibility.",
      },
      {
        title: "Regional optionality",
        text: "When you want to expand into Saudi or the UAE, the same team already works those markets.",
      },
      {
        title: "Ongoing care",
        text: "Hosting, maintenance, and ads retainers keep the site current after launch.",
      },
    ],
    faqs: [
      {
        q: "What are the best IT services in Bahrain for a new company website?",
        a: "Magnet Digital LLC builds and markets websites for Bahraini businesses from Sharjah — including SEO, Google Ads, and Meta Ads. We are a digital IT partner, not an office-network installer.",
      },
      {
        q: "Can you target Saudi traffic from a Bahrain brand?",
        a: "Yes, with separate campaigns and landing pages so messaging and budget stay controlled.",
      },
      {
        q: "Do you work with fintech and regulated firms?",
        a: "We can build the public website and acquisition layer. Legal and compliance copy remains your responsibility; we implement what your team approves.",
      },
      {
        q: "How do we get started?",
        a: "Contact us at info@thedigitalmagnet.com or through the Contact Us page.",
      },
    ],
  },
  {
    slug: "oman",
    name: "Oman",
    shortName: "Oman",
    officialName: "Sultanate of Oman",
    iso: "OM",
    capital: "Muscat",
    title: "Best IT Services in Oman",
    description:
      "Best IT services in Oman from Magnet Digital LLC. Websites, SEO, Google Ads, and ecommerce for Muscat, Salalah, Sohar, and Vision 2040 businesses.",
    keywords: [
      "best IT services in Oman",
      "IT company Muscat",
      "website development Oman",
      "SEO agency Muscat",
      "digital marketing Oman",
      "Google Ads Oman",
    ],
    cardText:
      "Trust-led websites, local SEO, and ads for Muscat, Salalah, Sohar, and Vision 2040.",
    heading: "IT and digital services for Oman’s Vision 2040 growth",
    intro: [
      "Oman rewards businesses that communicate clearly and patiently. Buyers in Muscat, Salalah, Sohar, and Nizwa still use Google, but they also expect a website that feels genuine — strong photography, readable Arabic and English, and contact details that work.",
      "Magnet Digital LLC delivers IT services in Oman focused on websites, ecommerce, SEO/GEO, Google Ads, Meta Ads, social media, and mobile apps. We help Omani companies and GCC brands selling into Oman look established online without overselling.",
      "Vision 2040, tourism, logistics (Sohar, Duqm), and SME diversification all need digital channels that keep working between seasons. We build for that: findable in search, usable on mobile, and easy to update.",
    ],
    market: [
      "Tourism and hospitality have sharp seasonality, especially around Salalah. Campaigns and landing pages should flex with demand rather than run the same ads all year.",
      "Trust and word of mouth remain powerful. Your site should support referrals with proof, locations, and fast WhatsApp or phone paths.",
      "Logistics, industrial, and government-adjacent suppliers need capability pages that procurement teams can take seriously.",
    ],
    cities: ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Duqm"],
    industries: [
      {
        title: "Tourism and hospitality",
        text: "Hotel, tour, and destination sites with booking or enquiry flows and seasonal ads.",
      },
      {
        title: "Logistics and industrial",
        text: "B2B websites for ports, trading, and contractors serving Oman’s infrastructure story.",
      },
      {
        title: "Retail and local services",
        text: "Store and service pages plus maps SEO for Muscat neighbourhoods and other cities.",
      },
      {
        title: "Education and healthcare",
        text: "Clear programme and clinic information for families searching locally.",
      },
    ],
    servicesFocus: [
      {
        slug: "website-development",
        title: "Website development in Oman",
        text: "Custom sites for Muscat and nationwide brands, built to load well and explain your offer simply.",
      },
      {
        slug: "search-engine-optimization",
        title: "SEO and GEO in Oman",
        text: "Local and national keyword work, technical SEO, and content for Google and AI answers.",
      },
      {
        slug: "google-ads",
        title: "Google Ads in Oman",
        text: "Search campaigns for Muscat and other wilayats, with seasonal plans where tourism matters.",
      },
      {
        slug: "social-media",
        title: "Social media management",
        text: "Steady publishing that matches Omani brand tone and supports sales conversations.",
      },
      {
        slug: "ecommerce",
        title: "Ecommerce",
        text: "Online stores for retailers expanding beyond a single Muscat location.",
      },
      {
        slug: "business-card-brochures",
        title: "Print and brand materials",
        text: "Business cards and brochures aligned with the website for sales teams on the road.",
      },
    ],
    why: [
      {
        title: "Tone that fits Oman",
        text: "We avoid aggressive, generic Gulf marketing copy that does not match how Omani clients buy.",
      },
      {
        title: "Seasonal campaign thinking",
        text: "Ads and landing pages can follow tourism and trading cycles instead of a flat monthly plan.",
      },
      {
        title: "Findable in Muscat and beyond",
        text: "Local SEO for the capital plus coverage for Salalah, Sohar, and other cities you serve.",
      },
      {
        title: "Long-term maintenance",
        text: "Hosting and website care so the investment stays secure after launch.",
      },
    ],
    faqs: [
      {
        q: "Who offers the best IT services in Oman for websites and SEO?",
        a: "Magnet Digital LLC provides website, SEO, ads, and app services for Omani businesses from Sharjah, UAE. We focus on digital IT and marketing, not on-premise hardware support.",
      },
      {
        q: "Do you work outside Muscat?",
        a: "Yes. We support Salalah, Sohar, Nizwa, Sur, Duqm, and other locations with geo-specific pages and ads where they help.",
      },
      {
        q: "Can you handle Arabic content?",
        a: "We structure sites for Arabic and English SEO. Copy can be supplied by your team or arranged during the project.",
      },
      {
        q: "How do we start a project in Oman?",
        a: "Email info@thedigitalmagnet.com or use Contact Us. Tell us whether you need a new website, SEO, or advertising.",
      },
    ],
  },
];

export function getGccCountry(slug: string) {
  return gccCountries.find((country) => country.slug === slug);
}

export const gccCountryLinks = gccCountries.map((country) => ({
  href: `/best-it-services/${country.slug}`,
  label: `Best IT services in ${country.shortName}`,
  slug: country.slug,
}));
