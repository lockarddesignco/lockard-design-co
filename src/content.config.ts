import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ─── Existing flat blog (keeps 3 existing posts working) ─── */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Will Lockard'),
    category: z.enum([
      'Web Design',
      'SEO',
      'Business Growth',
      'Industry Insights',
      'Case Studies',
    ]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    readTime: z.string().optional(),
  }),
});

/* ─── Blog Hubs (pillar pages) ─── */
const blogHubs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-hubs' }),
  schema: z.object({
    title: z.string(),
    titleTag: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    secondaryKeyword: z.string().optional(),
    silo: z.string(),
    publishDate: z.date(),
    updatedDate: z.date(),
    author: z.string().default('Will Lockard'),
    authorImage: z.string().default('/images/authors/will-lockard.jpg'),
    authorTitle: z.string().default('Founder & SEO Strategist'),
    authorLinkedIn: z.string().default('https://www.linkedin.com/in/willlockard'),
    featuredImage: z.string(),
    featuredImageAlt: z.string(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    draft: z.boolean().default(false),
  }),
});

/* ─── Blog Spokes (cluster pages) ─── */
const blogSpokes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-spokes' }),
  schema: z.object({
    title: z.string(),
    titleTag: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    silo: z.string(),
    hubSlug: z.string(),
    publishDate: z.date(),
    updatedDate: z.date(),
    author: z.string().default('Will Lockard'),
    authorImage: z.string().default('/images/authors/will-lockard.jpg'),
    authorTitle: z.string().default('Founder & SEO Strategist'),
    authorLinkedIn: z.string().default('https://www.linkedin.com/in/willlockard'),
    featuredImage: z.string(),
    featuredImageAlt: z.string(),
    nextSpoke: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* ─── Services ─── */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    titleTag: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    parentHub: z.string().optional(),
    serviceType: z.string(),
    phase: z.number().min(1).max(3).default(1),
    draft: z.boolean().default(false),
  }),
});

/* ─── Industries ─── */
const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    titleTag: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    volume: z.number().optional(),
    kd: z.number().optional(),
    phase: z.number().min(1).max(3).default(1),
    featuredImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* ─── Case Studies ─── */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    titleTag: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    location: z.string(),
    services: z.array(z.string()),
    timeline: z.string(),
    heroStat: z.string(),
    heroStatLabel: z.string(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    clientLogo: z.string().optional(),
    clientLogoAlt: z.string().optional(),
    siteScreenshot: z.string().optional(),
    siteScreenshotAlt: z.string().optional(),
    siteScreenshots: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      label: z.string(),
    })).optional(),
    quotable: z.string().optional(),
    publishDate: z.date(),
    draft: z.boolean().default(false),
    clientSummary: z.string().optional(),
    problemItems: z.array(z.string()).optional(),
    architecture: z.array(z.object({
      count: z.string(),
      label: z.string(),
      detail: z.string(),
    })).optional(),
    strategyPoints: z.array(z.object({
      title: z.string(),
      desc: z.string(),
    })).optional(),
    rankings: z.array(z.object({
      keyword: z.string(),
      position: z.string(),
      url: z.string(),
      note: z.string().optional(),
    })).optional(),
    closingTitle: z.string().optional(),
    closingBody: z.string().optional(),
  }),
});

/* ─── Locations ─── */
const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    title: z.string(),
    titleTag: z.string(),
    description: z.string(),
    city: z.string(),
    state: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    phase: z.number().min(1).max(3).default(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  'blog-hubs': blogHubs,
  'blog-spokes': blogSpokes,
  services,
  industries,
  locations,
  'case-studies': caseStudies,
};
