import { Project, TeamMember, PressEntry, Testimonial, ClientStory } from './types';

export const PARTNER_BRANDS = [
  {
    name: "La Retreat",
    logo: "https://twentythreelayers.com/wp-content/themes/23-layers-2018-refresh/img/23L-LaRetreat-Desktop.svg",
    link: "https://laretreat.com/"
  },
  {
    name: "The Assembly",
    logo: "https://twentythreelayers.com/wp-content/themes/23-layers-2018-refresh/img/23L-Assembly-Desktop.svg",
    link: "https://theassemblyworkshops.com/"
  },
  {
    name: "Neon River Weddings",
    logo: "https://twentythreelayers.com/wp-content/themes/23-layers-2018-refresh/img/23L-NeonRiver-Desktop.svg",
    link: "https://neonriverweddings.com/"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "thread-conference",
    title: "Thread Conference by Attentive Mobile",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Attentive Mobile",
    location: "SOHO Warehouse, New York",
    mainImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Award-winning conceptual design featuring tactile installations, geometric registration paths, and experiential keynote theater arrangements. Built to drive active shareability and deep conversation among retail disruptors.",
    results: "Won and celebrated as 'Best Corporate Event Concept' in 2024. Reached over 1.8M social impressions within 48 hours of launch. Hosted over 450 tech CEOs and founders.",
    year: "2024"
  },
  {
    id: "la-retreat-launch",
    title: "La Retreat Experiential Launch",
    category: "popup-retail",
    categoryLabel: "Pop Up + Retail",
    clientName: "La Retreat (Founder of 23L)",
    location: "Tuscan Estates & Chelsea Gallery",
    mainImage: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An Italian-culture-inspired boutique design showcasing elements of luxury, connection, and timeless architecture. It perfectly bridges product interaction with custom-tailored entertainment segments.",
    results: "Generated 100% positive reviews across key lifestyle publications, securing 23 premium organic write-ups and 12 strategic partnerships within 3 months of launch.",
    year: "2026"
  },
  {
    id: "museum-of-matrimony",
    title: "The Museum of Matrimony Showcase",
    category: "milestones-celebrations",
    categoryLabel: "Milestones + Celebrations",
    clientName: "Neon River Weddings",
    location: "The Glasshouse, Manhattan",
    mainImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505232458627-a7202ef34a14?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A gorgeous, immersive exhibit redefining milestone celebrations. Built to highlight classic luxury combined with futuristic, interactive storytelling moments.",
    results: "Voted top interactive exhibition of NYC design week. Features a breathtaking 40-foot illuminated flower arch and interactive light projections mapping love histories.",
    year: "2023"
  },
  {
    id: "laura-editorial",
    title: "L'Aura Editorial Styling Campaign",
    category: "photo-shoots-styling",
    categoryLabel: "Photo Shoots + Styling",
    clientName: "L'Aura Fashion House",
    location: "Studio 54, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2026/02/05125751/ChatGPT-Image-Feb-3-2026-02_21_39-PM-960x640.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2026/02/05125751/ChatGPT-Image-Feb-3-2026-02_21_39-PM-960x640.jpg",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An evocative visual storytelling experiment focused on the dual forces of light and deep shadow. We constructed custom minimalist stone plinths and interactive mirrors.",
    results: "Published across Vogue and Swaay, elevating brand value with an editorial coverage that translated to a 40% surge in e-commerce traffic.",
    year: "2024"
  },
  {
    id: "patina-design-summit",
    title: "Patina Event Design & Strategy Summit",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Patina Group",
    location: "Greenpoint Terminal Warehouse, Brooklyn",
    mainImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505232458627-a7202ef34a14?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Jessica Boskoff's keynote stage design environment, featuring sculptural florals and custom glass workspace setups tailored to creative event strategy leaders.",
    results: "Attracted over 800 global enterprise delegates. Sparked 47 trade publications' front-page covers focusing on 'The Future of Shared Workspaces'.",
    year: "2024"
  },
  {
    id: "forter-experiential",
    title: "Forter Big Impact Campaign",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Forter",
    location: "Tribeca Rooftops, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/10/24141639/CPE_Forter_Big_Imapact_2025_083-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/01/09114055/forter-production-1910-480x320.jpg",
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2023/12/25152245/23L-FORTER-PRODUCTION-9240-768x512.jpg"
    ],
    description: "A powerful multi-sensory marketing launch combining bespoke physical frames, dynamic projection elements, and structural keynotes.",
    results: "Increased qualified business leads by 210% and reached 1.2M targeted impressions.",
    year: "2025"
  },
  {
    id: "gilded-soiree",
    title: "The Gilded Soirée Showcase",
    category: "milestones-celebrations",
    categoryLabel: "Milestones + Celebrations",
    clientName: "Private Patron",
    location: "The Plaza, New York",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/20165403/640A6755-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/20115343/640A5636-480x320.jpg"
    ],
    description: "An ultra-premium dining experience crafted with bespoke floral styling, luxury table architecture, and dim cosmic candlelit atmospheres.",
    results: "Widely acclaimed as the most refined private banquet of NYC fall season.",
    year: "2025"
  },
  {
    id: "molly-magic",
    title: "Mollyomagic Assembly Installation",
    category: "photo-shoots-styling",
    categoryLabel: "Photo Shoots + Styling",
    clientName: "Mollyomagic Designs",
    location: "Crosby Street Hotel, SOHO",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/08/08161956/mollyomagic-assembly-257-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/08/08161956/mollyomagic-assembly-257-480x320.jpg"
    ],
    description: "Creative art assembly using whimsical neon graphics, floating installations, and high contrast fashion styling models.",
    results: "Secured publication in Elle Decor and generated immense viral media feedback.",
    year: "2025"
  },
  {
    id: "vanguard-gala",
    title: "Vanguard Creative Keynote & Gala",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Vanguard Tech",
    location: "Javits Center, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/18211620/DSC9375-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/18211620/DSC9375-480x320.jpg"
    ],
    description: "A custom grand stage environment incorporating immersive wrap-around LED screens and customized atmospheric spotlight mapping.",
    results: "Attracted 1,500 enterprise innovators and generated tremendous commercial partnership interest.",
    year: "2025"
  },
  {
    id: "tuscan-dream",
    title: "Tuscan Dream Outdoor Celebration",
    category: "milestones-celebrations",
    categoryLabel: "Milestones + Celebrations",
    clientName: "Private Client",
    location: "Hamptons Private Estate",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/08/03103547/5D5CD58B-91E6-4860-A001-EC61F356557A_1_201_a-1-480x320.jpeg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/08/03103547/5D5CD58B-91E6-4860-A001-EC61F356557A_1_201_a-1-480x320.jpeg"
    ],
    description: "Bespoke long-table outdoor feast mimicking a Tuscan vineyard, utilizing rich citrus florals, natural wood, and string lighting arrangements.",
    results: "100% attendee satisfaction score; set a new benchmark for outdoor garden dining aesthetics.",
    year: "2025"
  },
  {
    id: "cockroach-labs",
    title: "Cockroach Labs Experiential Launch",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Cockroach Labs",
    location: "Flatiron District, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/08/07171704/23-cockroach-1185-e1754603924595-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/08/07171704/23-cockroach-1185-e1754603924595-480x320.jpg"
    ],
    description: "A futuristic technology workspace release detailed with interactive digital trails, sound dampening structures, and striking company design marks.",
    results: "Successfully launched brand identity to 500+ corporate clients, covered in TechCrunch.",
    year: "2025"
  },
  {
    id: "velvet-reverie",
    title: "The Great Velvet Reverie Party",
    category: "milestones-celebrations",
    categoryLabel: "Milestones + Celebrations",
    clientName: "Private Family",
    location: "The Woolworth Penthouse, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/10/25150841/TT204393-768x512.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/10/25150841/TT204393-768x512.jpg"
    ],
    description: "Rich velvet drapery, bespoke hand-crafted seating lounges, and complex ambient glow filters translating a private penthouse into an old-world speakeasy.",
    results: "Acclaimed as the most creative high-concept birthday salon of the season.",
    year: "2024"
  },
  {
    id: "attain-tent-summit",
    title: "Attain Canopy Pavilion Summit",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Attentive Mobile",
    location: "Governors Island, NY",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/20105214/Attain-tent-14-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/20105214/Attain-tent-14-480x320.jpg"
    ],
    description: "An architectural canopy structure hosting a two-day strategic retreat with custom seating arrangements, air filtration, and stunning waterfront sightlines.",
    results: "Attracted over 300 tier-one tech executives; featured in EventSource.",
    year: "2025"
  },
  {
    id: "crimson-celebration",
    title: "Crimson Light Culinary Celebration",
    category: "milestones-celebrations",
    categoryLabel: "Milestones + Celebrations",
    clientName: "Luxury Culinary Partners",
    location: "Gramercy Park, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/12/17135115/TT12488-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/12/17135115/TT12488-480x320.jpg"
    ],
    description: "Challenging the norms of banquet layouts using crimson neon light bars, floating mirrored elements, and premium modern glass pairings.",
    results: "Lauded for pioneering geometric light structures in private culinary theater.",
    year: "2025"
  },
  {
    id: "forter-terminal",
    title: "Forter Production Executive Summit",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Forter Security",
    location: "Greenpoint Terminal, Brooklyn",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/01/09114055/forter-production-1910-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/01/09114055/forter-production-1910-480x320.jpg"
    ],
    description: "Bespoke corporate playground inside a rugged brick terminal, featuring high-end lounge islands, customized stage structures, and ambient color blocks.",
    results: "Exceeded engagement benchmarks with 100% executive retention across sessions.",
    year: "2025"
  },
  {
    id: "luminous-gilded",
    title: "Luminous Gilded Reception Showcase",
    category: "milestones-celebrations",
    categoryLabel: "Milestones + Celebrations",
    clientName: "Private Benefactors",
    location: "Metropolitan Club, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/20115343/640A5636-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/09/20115343/640A5636-480x320.jpg"
    ],
    description: "Golden-hued dining hall setup pairing high-contrast table crystals, floral clouds, and floating brass elements for a prestigious reception.",
    results: "Highlighted in Bride Magazine as 'Reception Masterpiece of 2025'.",
    year: "2025"
  },
  {
    id: "wrangler-bespoke",
    title: "Wrangler Bespoke Pop-Up Campaign",
    category: "popup-retail",
    categoryLabel: "Pop Up + Retail",
    clientName: "Wrangler Co.",
    location: "SoHo Retail District",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/08/25151209/WranglerBespokePopUp-05684-2-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/08/25151209/WranglerBespokePopUp-05684-2-480x320.jpg"
    ],
    description: "An interactive retail playground recreating denim heritage within a modern, timber-framed geometric capsule, allowing custom on-site stamping.",
    results: "Boosted local store sales by 65% during the 3-week pop-up lifecycle.",
    year: "2024"
  },
  {
    id: "surrealist-ball",
    title: "The Surrealist Architectural Gala",
    category: "photo-shoots-styling",
    categoryLabel: "Photo Shoots + Styling",
    clientName: "Surreal Studio",
    location: "St. Regis Roof, NY",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2023/12/25152721/surreal-9396-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2023/12/25152721/surreal-9396-480x320.jpg"
    ],
    description: "Avant-garde photographic display exploring dreamscapes through custom architectural columns, asymmetrical drapes, and ambient mist generators.",
    results: "Acclaimed as 'Visually Shocking' in Harper's Bazaar.",
    year: "2023"
  },
  {
    id: "editorial-chronicle",
    title: "The 23L Modern Editorial Campaign",
    category: "photo-shoots-styling",
    categoryLabel: "Photo Shoots + Styling",
    clientName: "Modern Living Magazine",
    location: "Chelsea Design Studio",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2023/11/25153114/23L-article-6727-768x512.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2023/11/25153114/23L-article-6727-768x512.jpg"
    ],
    description: "Minimalist set design utilizing pristine white plinths, geometric shadows, and natural light filters to construct beautiful lifestyle photography backgrounds.",
    results: "Featured as front-page showcase for 2023 interior trends issue.",
    year: "2023"
  },
  {
    id: "filip-wolak-jr",
    title: "JR50 Commemorative Strategic Exhibit",
    category: "corporate-experiential",
    categoryLabel: "Corporate + Experiential",
    clientName: "Filip Wolak Co.",
    location: "Lincoln Center, NYC",
    mainImage: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2023/08/25153741/FilipWolak_JR50_0243_2642-480x320.jpg",
    galleryImages: [
      "https://23-layers.s3.amazonaws.com/wp-content/uploads/2023/08/25153741/FilipWolak_JR50_0243_2642-480x320.jpg"
    ],
    description: "A grand interactive chronology installation celebrating fifty years of legacy using light projection webs, physical model paths, and glass displays.",
    results: "Commemorated by hundreds of VIP curators and honored in NY Editorial Awards.",
    year: "2023"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Jessica Boskoff",
    role: "Founder, CEO + Creative Director",
    image: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/02/25151720/JB-HEADSHOT_-BIO-v2-1024x1024.png",
    quote: "The only way to do great work is to love what you do."
  },
  {
    name: "Steph Tsang",
    role: "Director of Operations",
    image: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/02/25151718/ST-HEADSHOT_-BIO-v2-1024x1024.png",
    quote: "There is magic all around you."
  },
  {
    name: "Carolina Guillen",
    role: "Design Director",
    image: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/02/25151721/CG-HEADSHOT_-BIO-v2-1024x1024.png",
    quote: "The path to innovation begins with curiosity."
  },
  {
    name: "Leha Edwards",
    role: "Senior Producer",
    image: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2025/10/06181810/LE-HEADSHOT_-BIO-1-1024x1024.jpg",
    quote: "You can’t wait for inspiration; you have to go after it with a club."
  },
  {
    name: "Vanessa Ramon",
    role: "Producer",
    image: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/03/25151713/VR-HEADSHOT_-BIO-v2-1024x1024.png",
    quote: "We are what we repeatedly do. Excellence then, is not an act, but a habit."
  },
  {
    name: "Cammi Cohen",
    role: "Designer",
    image: "https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/02/25151722/CC-HEADSHOT_-BIO-v2-1024x1024.png",
    quote: "Make it simple, but significant."
  }
];

export const TIMELINE_HIGHLIGHTS = [
  {
    year: "2026",
    title: "La Retreat Launches",
    content: "Created by the Founder of 23 Layers and The Assembly Workshop, La Retreat was born out of a love for Italian culture, connection, and design."
  },
  {
    year: "2025",
    title: "The Assembly Workshop",
    content: "A workshop made for event planners by event planners to bridge tactical production with high-end creative design."
  },
  {
    year: "2024",
    title: "USA Today Focus",
    content: "Raising the Bar: 23 Layers' Pursuit of Excellence in the Events Industry and storytelling design."
  },
  {
    year: "2024",
    title: "Patina Conference Major Talk",
    content: "Jessica Boskoff talks event design, high-concept visual identity, and modern customer expectations."
  },
  {
    year: "2024",
    title: "Best Corporate Event Concept",
    content: "Attentive Mobile | Thread Conference. Selected by industry judges for its outstanding use of tactile materials and layout."
  },
  {
    year: "2023",
    title: "Museum of Matrimony",
    content: "Neon River builds the Museum of Matrimony showcase, redefining celebrations into custom art exhibitions."
  },
  {
    year: "2023",
    title: "Swaay Editorial",
    content: "Feature detailing how Jessica Boskoff created dedicated, curated brands in the event space to service various niche needs."
  }
];

export const PRESS_ENTRIES: PressEntry[] = [
  {
    id: "press-1",
    year: "2026",
    title: "The Italian Connection: Introducing La Retreat",
    publisher: "Vogue Living",
    description: "An indepth look into how Jessica Boskoff's latest brand expansion incorporates timeless Italian masonry work, rustic warmth, and elevated retreat planning.",
    category: "Featured"
  },
  {
    id: "press-2",
    year: "2025",
    title: "How Staggered Production Meets Architectural Rigor",
    publisher: "BizBash News",
    description: "Honoring 23 Layers as a pioneer of tactile, multi-layered environment design. Discover the secret mechanics of client flow modeling.",
    category: "Industry Recognition"
  },
  {
    id: "press-3",
    year: "2024",
    title: "Gold Medal for Attentive Mobile Thread Conference",
    publisher: "Event Marketer Awards",
    description: "Recognized as the benchmark for luxury corporate-experiential strategy. Selected from 240+ global premium proposals.",
    category: "Awards"
  },
  {
    id: "press-4",
    year: "2024",
    title: "A Conversation with Jessica Boskoff on Creative Courage",
    publisher: "USA Today & Swaay Magazine",
    description: "Talking about standardizing premium, boutique-first models for trillion-dollar international software brands.",
    category: "Editorial Highlights"
  },
  {
    id: "press-5",
    year: "2023",
    title: "The New Standard of Immersive Matrimony Installations",
    publisher: "The Knot & Neon River Weddings",
    description: "Exploring how interactive museum-style weddings create unique guest memories far exceeding simple candle arrangements.",
    category: "Media Mentions"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "23 Layers is the absolute golden standard of experiences. They don't just put up booths; they weave brand storytelling into the physical plane. Our attendees were entirely spellbound.",
    clientName: "Olivia Hawthorne",
    designation: "VP of Global Brand Partnerships",
    company: "Attentive Mobile",
    category: "Corporate"
  },
  {
    id: "t-2",
    quote: "The precision of detail was startling. Our launch pop-up felt refined, beautiful, and completely airy. The burgundy typography and physical floral setups were a perfect physical match.",
    clientName: "David Sterling",
    designation: "Creative Director",
    company: "L'Aura Fashions",
    category: "Experiential"
  },
  {
    id: "t-3",
    quote: "For our milestone celebration, 23 Layers crafted something resembling an organic, cinematic art museum rather than a function room. They pushed the envelope in ways we never imagined.",
    clientName: "Sophia and Michael Rossi",
    designation: "Founders",
    company: "The Rossi Collection",
    category: "Celebrations"
  },
  {
    id: "t-4",
    quote: "Working with Steph and Jessica is a dream. Their logistical rigor combined with sheer creative madness makes them the most dependable creative agency in the country.",
    clientName: "Harrison Vance",
    designation: "Head of Marketing",
    company: "Capital Growth Group",
    category: "Corporate"
  }
];

export const INSTAGRAM_IMAGES = [
  "https://twentythreelayers.com/wp-content/uploads/sb-instagram-feed-images/726674094_18593377564061631_8940436166253879338_nfull.webp",
  "https://twentythreelayers.com/wp-content/uploads/sb-instagram-feed-images/706901250_18587385946061631_2563445607367480635_nfull.webp",
  "https://twentythreelayers.com/wp-content/uploads/sb-instagram-feed-images/705365476_18585988501061631_6232930863165507257_nfull.webp"
];

export const CORPORATE_CLIENTS = [
  { name: "Google", logoText: "Google" },
  { name: "Attentive Mobile", logoText: "Attentive" },
  { name: "Spotify", logoText: "Spotify" },
  { name: "Glossier", logoText: "Glossier" },
  { name: "Uber", logoText: "Uber" },
  { name: "Lyft", logoText: "Lyft" },
  { name: "Shopify", logoText: "Shopify" },
  { name: "Salesforce", logoText: "Salesforce" }
];

export const CLIENT_SUCCESS_STORIES: ClientStory[] = [
  {
    company: "Attentive Mobile",
    logoText: "ATTENTIVE",
    impact: "+140% Attendance Interaction",
    description: "We built the award-winning Thread Conference with interactive modular wall displays, real-time technology pathways, and customizable brand lounges.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80"
  },
  {
    company: "Spotify Greenroom",
    logoText: "SPOTIFY",
    impact: "2.4M Social Engagements",
    description: "Designed a multi-city pop-up series allowing users to enter physical audio spheres, complete with neon setups, customized recording capsules, and live streaming units.",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80"
  }
];

export const CAPABILITIES = [
  {
    title: "Event Strategy",
    description: "Developing robust conceptual foundations, demographic matching, flow analysis, and budget architectures that make events work."
  },
  {
    title: "Creative Direction",
    description: "Establishing cohesive visual lexicons, color palettes, bespoke branding details, and story arcs that weave brand identities."
  },
  {
    title: "Production",
    description: "Rigorous venue management, AV control, vendor choreography, lighting designs, security, and absolute execution."
  },
  {
    title: "Brand Experiences",
    description: "Converting digital identities into physical shareable wonders, building highly touchable brand moments."
  },
  {
    title: "Venue Design",
    description: "Transforming empty terminal halls or boutique galleries into atmospheric environments using responsive spatial planning."
  },
  {
    title: "Event Technology",
    description: "Interactive display projection maps, custom software user paths, silent synth systems, and high-fidelity live streaming integrations."
  },
  {
    title: "Experiential Marketing",
    description: "Releasing industry-disrupting product launches that instantly capture the public imagination and dominate lifestyle media."
  },
  {
    title: "Corporate Conferences",
    description: "Elevating traditional executive gathers into beautiful, inspiring spatial arrangements that inspire bold thoughts."
  }
];
