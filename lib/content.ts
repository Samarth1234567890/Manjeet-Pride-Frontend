// ==============================
// MANJEET PRIDE GROUP
// lib/content.ts
// ==============================

import { ReactNode } from "react";
import { Key } from "readline";

export interface SocialLinks {
  pinterest: any;
  twitter: any;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface SiteInfo {
  social: SocialLinks;
  name: string;
  tagline: string;
  foundedYear: number;
  phone: string;
  phoneAlt: string;
  email: string;
  emailCareers: string;
  website: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  hours: string;
  mapEmbedQuery: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  status: string;
  type: string;
  cover: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  configuration: string[];
  rera: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

// ==============================
// SOCIAL LINKS
// ==============================

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "#",
  instagram: "#",
  linkedin: "#",
  youtube: "#",
  pinterest: undefined,
  twitter: undefined
};

export const SITE: SiteInfo = {
  name: "Manjeet Pride Group",
  tagline: "Building Pune's Future Since 1998",
  foundedYear: 1998,

  phone: "+91 98765 43210",
  phoneAlt: "+91 91234 56789",

  email: "info@manjeetpride.com",
  emailCareers: "careers@manjeetpride.com",

  website: "https://www.manjeetpride.com",

  addressLine1: "Manjeet Pride Group",
  addressLine2: "Baner Road",
  addressLine3: "Pune, Maharashtra 411045",

  hours: "Monday – Saturday | 10:00 AM – 7:00 PM",

  mapEmbedQuery: "Manjeet Pride Group Pune",

  social: SOCIAL_LINKS,
};

// ==============================
// COMPANY STATS
// ==============================

export const STATS: Stat[] = [
  {
    label: "Years of Excellence",
    value: 27,
      suffix: "+",
  },
  {
    label: "Projects Delivered",
    value: 35,
      suffix: "+",
  },
  {
    label: "Happy Families",
    value: 4500,
      suffix: "+",
  },
  {
    label: "Sq. Ft. Developed",
    value: 7.5,
      suffix: "M+",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "manjeet-pride-heights",
    name: "Manjeet Pride Heights",
    location: "Baner, Pune",
    status: "Ongoing",
    type: "Luxury Apartments",
    cover: "/images/projects/project1/cover.jpg",
    gallery: [
      "/images/projects/project1/1.jpg",
      "/images/projects/project1/2.jpg",
      "/images/projects/project1/3.jpg",
      "/images/projects/project1/4.jpg",
    ],
    description:
      "A premium residential development offering spacious homes, elegant architecture, landscaped gardens, and world-class amenities in Baner.",
    highlights: [
      "Prime Baner Location",
      "2 & 3 BHK Luxury Homes",
      "Modern Clubhouse",
      "Green Open Spaces",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Clubhouse",
      "Children's Play Area",
      "Jogging Track",
      "Indoor Games",
    ],
    configuration: ["2 BHK", "3 BHK"],
    rera: "P52100012345",
  },

  {
    slug: "manjeet-pride-green",
    name: "Manjeet Pride Green",
    location: "Wakad, Pune",
    status: "Ongoing",
    type: "Residential",
    cover: "/images/projects/project2/cover.jpg",
    gallery: [
      "/images/projects/project2/1.jpg",
      "/images/projects/project2/2.jpg",
      "/images/projects/project2/3.jpg",
    ],
    description:
      "Designed around nature with landscaped gardens, premium amenities, and thoughtfully planned homes.",
    highlights: [
      "Excellent Connectivity",
      "Large Open Spaces",
      "Premium Amenities",
      "Sustainable Design",
    ],
    amenities: [
      "Garden",
      "Multipurpose Hall",
      "Fitness Centre",
      "Yoga Deck",
      "Kids Zone",
    ],
    configuration: ["2 BHK", "3 BHK"],
    rera: "P52100023456",
  },

  {
    slug: "manjeet-pride-elite",
    name: "Manjeet Pride Elite",
    location: "Kharadi, Pune",
    status: "Launching Soon",
    type: "Luxury Residences",
    cover: "/images/projects/project3/cover.jpg",
    gallery: [
      "/images/projects/project3/1.jpg",
      "/images/projects/project3/2.jpg",
      "/images/projects/project3/3.jpg",
    ],
    description:
      "An iconic luxury development combining elegant architecture with premium lifestyle amenities.",
    highlights: [
      "Luxury Living",
      "Sky Lounge",
      "Smart Homes",
      "Premium Interiors",
    ],
    amenities: [
      "Infinity Pool",
      "Business Lounge",
      "Mini Theatre",
      "Gym",
      "Rooftop Deck",
    ],
    configuration: ["3 BHK", "4 BHK"],
    rera: "Coming Soon",
  },

  {
    slug: "manjeet-pride-county",
    name: "Manjeet Pride County",
    location: "Hinjewadi, Pune",
    status: "Ready Possession",
    type: "Township",
    cover: "/images/projects/project4/cover.jpg",
    gallery: [
      "/images/projects/project4/1.jpg",
      "/images/projects/project4/2.jpg",
      "/images/projects/project4/3.jpg",
    ],
    description:
      "A modern integrated township offering contemporary homes, landscaped open spaces, and lifestyle conveniences.",
    highlights: [
      "Ready Homes",
      "Retail Plaza",
      "Large Clubhouse",
      "Secure Community",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Sports Court",
      "Amphitheatre",
      "Kids Play Area",
      "Jogging Track",
    ],
    configuration: ["2 BHK", "3 BHK"],
    rera: "P52100034567",
  },
];

// ==============================
// COMPANY VALUES
// ==============================

export const VALUES: Value[] = [
  {
    title: "Trust",
    description:
      "Every project is built with complete transparency, ethical practices, and long-term customer relationships.",
  },
  {
    title: "Quality",
    description:
      "Premium materials, thoughtful planning, and exceptional craftsmanship define every Manjeet Pride development.",
  },
  {
    title: "Innovation",
    description:
      "Modern architecture, sustainable construction, and future-ready living spaces drive every design decision.",
  },
  {
    title: "Commitment",
    description:
      "We believe in delivering projects on time while maintaining the highest standards of quality and customer satisfaction.",
  },
];

// ==============================
// COMPANY JOURNEY
// ==============================

export const MILESTONES: Milestone[] = [
  {
    year: "1998",
    title: "The Beginning",
    description:
      "Manjeet Pride Group was established with a vision to create premium residential communities across Pune.",
  },
  {
    year: "2005",
    title: "Growing Strong",
    description:
      "Successfully delivered multiple residential projects, earning the trust of hundreds of homeowners.",
  },
  {
    year: "2014",
    title: "Luxury Expansion",
    description:
      "Entered the luxury residential segment with landmark developments featuring premium amenities.",
  },
  {
    year: "2026",
    title: "Building the Future",
    description:
      "Continuing to shape Pune's skyline with innovative, sustainable, and customer-focused developments.",
  },
];

// ==============================
// LEADERSHIP
// ==============================

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const LEADERS: Leader[] = [
  {
    name: "Suresh Agarwal",
    role: "Founder & Chairman",
    bio: "Founded Manjeet Pride Group with the vision of delivering premium homes that combine timeless architecture with uncompromising quality.",
    image: "/images/leaders/chairman.jpg",
  },
  {
    name: "Rajesh Agarwal",
    role: "Managing Director",
    bio: "Leads business strategy, project execution, and long-term growth across all residential developments.",
    image: "/images/leaders/md.jpg",
  },
  {
    name: "Neha Agarwal",
    role: "Director – Design",
    bio: "Heads architectural planning and interior concepts with a focus on luxury and sustainability.",
    image: "/images/leaders/design.jpg",
  },
  {
    name: "Amit Sharma",
    role: "Director – Operations",
    bio: "Ensures quality construction, timely delivery, and operational excellence across every project.",
    image: "/images/leaders/operations.jpg",
  },
];

// ==============================
// TEAM
// ==============================

export interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Architecture Team",
    designation: "Planning & Design",
    image: "/images/team/team1.jpg",
  },
  {
    name: "Engineering Team",
    designation: "Construction",
    image: "/images/team/team2.jpg",
  },
  {
    name: "Sales Team",
    designation: "Customer Relations",
    image: "/images/team/team3.jpg",
  },
  {
    name: "Support Team",
    designation: "Operations",
    image: "/images/team/team4.jpg",
  },
  {
    name: "Marketing Team",
    designation: "Brand & Media",
    image: "/images/team/team5.jpg",
  },
  {
    name: "CRM Team",
    designation: "Customer Support",
    image: "/images/team/team6.jpg",
  },
  {
    name: "Finance Team",
    designation: "Accounts",
    image: "/images/team/team7.jpg",
  },
  {
    name: "Legal Team",
    designation: "Compliance",
    image: "/images/team/team8.jpg",
  },
];

// ==============================
// DIRECTORS
// ==============================

export interface Director {
  name: string;
  designation: string;
  quote: string;
  image: string;
}

export const DIRECTORS: Director[] = [
  {
    name: "Suresh Agarwal",
    designation: "Founder & Chairman",
    quote:
      "Every project should leave a legacy of trust, quality, and timeless living.",
    image: "/images/directors/director1.jpg",
  },
  {
    name: "Rajesh Agarwal",
    designation: "Managing Director",
    quote:
      "Our goal is to build communities where families can thrive for generations.",
    image: "/images/directors/director2.jpg",
  },
  {
    name: "Neha Agarwal",
    designation: "Director – Design",
    quote:
      "Luxury is created through thoughtful design, not excess.",
    image: "/images/directors/director3.jpg",
  },
];

// ==============================
// MEDIA & NEWS
// ==============================

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  featured?: boolean;
}

// ==============================
// MEDIA ARTICLES
// ==============================

export const MEDIA_ARTICLES: Article[] = [
  {
    slug: "future-of-luxury-living",
    title: "The Future of Luxury Living in Pune",
    excerpt:
      "Discover how premium residences are evolving through architecture, sustainability, and smart living.",
    body: [
      "Luxury today extends far beyond premium finishes. Homeowners expect thoughtfully designed spaces that enhance everyday living.",
      "Manjeet Pride Group focuses on natural light, efficient layouts, landscaped open areas, and sustainable construction practices.",
      "Future-ready homes combine smart technology, green infrastructure, and timeless architecture to create lasting value.",
    ],
    author: "Editorial Team",
    category: "Architecture",
    date: "2026-04-18",
    readTime: "5 min read",
    cover: "/images/media/media-1.jpg",
    featured: true,
  },
  {
    slug: "importance-of-green-buildings",
    title: "Why Green Buildings Matter",
    excerpt:
      "Sustainable construction benefits homeowners and the environment alike.",
    body: [
      "Green buildings reduce energy consumption and improve indoor comfort.",
      "Sustainable materials and efficient planning lower long-term maintenance costs.",
      "Our future developments continue to embrace eco-conscious construction practices.",
    ],
    author: "Design Studio",
    category: "Sustainability",
    date: "2026-03-08",
    readTime: "4 min read",
    cover: "/images/media/media-2.jpg",
  },
  {
    slug: "timeless-architecture",
    title: "Designing Homes That Last",
    excerpt:
      "Timeless architecture is created through proportion, quality, and thoughtful planning.",
    body: [
      "Architecture should remain beautiful for decades rather than follow temporary trends.",
      "Durable materials and balanced design create homes that age gracefully.",
    ],
    author: "Architecture Team",
    category: "Design",
    date: "2026-02-12",
    readTime: "6 min read",
    cover: "/images/media/media-3.jpg",
  },
];

// ==============================
// NEWS ARTICLES
// ==============================

export const NEWS_ARTICLES: Article[] = [
  {
    slug: "new-project-launch",
    title: "Manjeet Pride Launches New Premium Township",
    excerpt:
      "A new residential community offering modern amenities and sustainable living.",
    body: [
      "Manjeet Pride Group has announced the launch of its newest premium township in Pune.",
      "The development features landscaped gardens, clubhouse facilities, children's play areas, and spacious residences.",
      "Bookings are now open with attractive launch offers.",
    ],
    author: "Corporate Communications",
    category: "Project Launch",
    date: "2026-06-10",
    readTime: "3 min read",
    cover: "/images/news/news-1.jpg",
    featured: true,
  },
  {
    slug: "construction-update",
    title: "Construction Progress Update",
    excerpt:
      "Major milestones achieved across ongoing residential developments.",
    body: [
      "Construction continues to progress according to schedule.",
      "Structural work has been completed, with finishing work currently underway.",
    ],
    author: "Project Team",
    category: "Construction",
    date: "2026-05-18",
    readTime: "2 min read",
    cover: "/images/news/news-2.jpg",
  },
  {
    slug: "award-recognition",
    title: "Recognised for Excellence in Real Estate",
    excerpt:
      "Manjeet Pride Group receives recognition for quality construction and customer satisfaction.",
    body: [
      "The company was honoured for delivering high-quality residential developments.",
      "The recognition reflects the dedication of our architects, engineers, and customer support teams.",
    ],
    author: "Corporate Desk",
    category: "Awards",
    date: "2026-01-22",
    readTime: "4 min read",
    cover: "/images/news/news-3.jpg",
  },
];

// ==============================
// HELPER
// ==============================

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ==============================
// RESOURCES • TESTIMONIALS
// ==============================

export interface Resource {
  slug: string;
  title: string;
  description: string;
  type: string;
  size: string;
}

export const RESOURCES: Resource[] = [
  {
    slug: "company-profile",
    title: "Company Profile",
    description:
      "Complete introduction to Manjeet Pride Group, our journey, leadership, and philosophy.",
    type: "PDF",
    size: "6.2 MB",
  },
  {
    slug: "corporate-brochure",
    title: "Corporate Brochure",
    description:
      "Explore our premium residential developments and signature projects.",
    type: "PDF",
    size: "9.1 MB",
  },
  {
    slug: "sustainability-report",
    title: "Sustainability Report",
    description:
      "Learn about our green building initiatives and environmental commitment.",
    type: "PDF",
    size: "4.8 MB",
  },
  {
    slug: "investor-presentation",
    title: "Investor Presentation",
    description:
      "Business overview, milestones, and future growth strategy.",
    type: "PDF",
    size: "7.3 MB",
  },
  {
    slug: "rera-document",
    title: "RERA Information",
    description:
      "Official registrations and regulatory information.",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    slug: "brand-book",
    title: "Brand Book",
    description:
      "Corporate identity, values, and brand guidelines.",
    type: "PDF",
    size: "5.6 MB",
  },
];

// ==============================
// TESTIMONIALS
// ==============================

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amit Kulkarni",
    location: "Baner, Pune",
    rating: 5,
    quote: "From booking to possession, the entire experience was smooth. The construction quality exceeded our expectations.",
    image: "/testimonial.png",

  },
  {
    name: "Sneha Patil",
    location: "Kharadi, Pune",
    rating: 5,
    quote: "Excellent planning, premium amenities, and a very professional team. We are proud to call it our home.",
    image: "/testimonial1.png",
  },
  {
    name: "Rahul Shah",
    location: "Wakad, Pune",
    rating: 5,
    quote: "Manjeet Pride delivers exactly what they promise. Beautiful design and timely possession.",
    image: "/testimonial2.png",
    
  },
  {
    name: "Priya Deshmukh",
    location: "Pashan, Pune",
    rating: 5,
    quote: "The attention to detail and customer support made buying our first home stress-free.",
    image: "/testimonial3.png",
    
  },
  {
    name: "Vikram Mehta",
    location: "Hinjewadi, Pune",
    rating: 5,
    quote: "A builder you can genuinely trust. Quality workmanship and transparent communication.",
    image: "/testimonial4.png",
    
  },
  {
    name: "Neha Joshi",
    location: "Bavdhan, Pune",
    rating: 5,
    quote: "Our family loves every corner of our new home. Spacious layouts and thoughtful design.",
    image: "/testimonial5.png",
   
  },
];

// ==============================
// GROUP COMPANIES
// ==============================

export const GROUP_COMPANIES = [
  "Manjeet Pride Developers",
  "Manjeet Pride Realty",
  "Manjeet Pride Infrastructure",
  "Manjeet Pride Ventures",
];

// ==============================
// NAVIGATION
// ==============================

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
   children: [
  {
    label: "About Us",
    href: "/about#about",
  },
  {
    label: "Our Team",
    href: "/about#team",
  },
  {
    label: "Directors",
    href: "/about#directors",
  },
  {
    label: "Testimonials",
    href: "/about#testimonials",
  },
],
  },
 {
  label: "Projects",
  href: "/projects",
  children: [
    {
      label: "Ongoing Projects",
      href: "/projects#ongoing",
    },
    {
      label: "Completed Projects",
      href: "/projects#completed",
    },
    {
      label: "Upcoming Projects",
      href: "/projects#upcoming",
    },
    {
      label: "Amenities",
      href: "/projects#amenities",
    },
  ],
},
  {
  label: "Media",
  href: "#",
  children: [
    {
      label: "News",
      href: "/media/news",
    },
    {
      label: "Events",
      href: "/media/events",
    },
    {
      label: "Awards",
      href: "/media/awards",
    },
    {
      label: "Gallery",
      href: "/media/gallery",
    },
  ],
},
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      {
        label: "Photos",
        href: "/gallery/photos",
      },
      {
        label: "Videos",
        href: "/gallery/videos",
      },
      {
        label: "Construction Updates",
        href: "/gallery/construction",
      },
      {
        label: "Virtual Tour",
        href: "/gallery/virtual-tour",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Brochures",
        href: "/resources",
      },
      {
        label: "Floor Plans",
        href: "/resources/floor-plans",
      },
      {
        label: "Downloads",
        href: "/resources/downloads",
      },
      {
        label: "FAQs",
        href: "/resources/faqs",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      {
        label: "Contact Us",
        href: "/contact",
      },
      {
        label: "Book Site Visit",
        href: "/contact#visit",
      },
      {
        label: "Office Locations",
        href: "/contact#office",
      },
      {
        label: "FAQs",
        href: "/contact#faq",
      },
    ],
  },
];