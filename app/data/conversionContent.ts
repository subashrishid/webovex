export const whatsappNumber = "919952019436";

export const whatsappAuditText =
  "Hi Webovex, I want a free website audit and redesign report for my business.";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappAuditText)}`;

export const stats = [
  { icon: "OK", value: "12+", label: "Projects Completed", note: "Manual update" },
  { icon: "IN", value: "6+", label: "Industries Served", note: "Manual update" },
  { icon: "24", value: "Support", label: "Post-launch Availability", note: "Manual update" },
  { icon: "100", value: "Timeline", label: "Delivery Commitment", note: "Manual update" },
] as const;

export const testimonials = [
  {
    name: "Arun Kumar",
    role: "Manufacturing Business Owner",
    quote:
      "Webovex rebuilt our website into a premium enquiry machine. Page speed improved and we started getting better quality leads within the first week.",
  },
  {
    name: "Priya Menon",
    role: "Retail Operations Lead",
    quote:
      "Subash understood our workflow fast and delivered a dashboard that reduced daily manual tracking. The interface is simple enough for our whole team.",
  },
  {
    name: "Naveen Raj",
    role: "Healthcare Store Founder",
    quote:
      "Our e-commerce flow became cleaner, faster, and easier to manage. Webovex delivered exactly what we needed without making the process complicated.",
  },
] as const;

export const portfolio = [
  {
    type: "Healthcare E-Commerce",
    name: "Medicine Store Platform",
    industry: "Healthcare retail",
    stack: "React, Node.js, PostgreSQL, Payment Flow",
    problem: "Manual medicine catalogue and slow order handling made customer follow-up difficult.",
    solution: "Built a clean catalogue, enquiry flow, admin-ready structure, and faster ordering experience.",
    result: "35% faster order handling",
    image: "/technical-dashboard.svg",
  },
  {
    type: "Business Dashboard",
    name: "Operations Command Deck",
    industry: "Small business operations",
    stack: "Next.js, Django, SQL, Role-Based Access",
    problem: "Team updates were scattered across sheets, messages, and manual daily tracking.",
    solution: "Designed a focused dashboard for roles, workflow visibility, and business reporting.",
    result: "50% less manual tracking",
    image: "/technical-architecture.svg",
  },
  {
    type: "Premium Website",
    name: "Service Business Website",
    industry: "Local service company",
    stack: "Next.js, Tailwind CSS, SEO, GitHub Pages",
    problem: "Old site looked outdated, loaded slowly, and did not guide visitors to enquire.",
    solution: "Created a fast premium website with stronger copy, WhatsApp-ready CTAs, and SEO structure.",
    result: "40% faster load time",
    image: "/technical-deployment.svg",
  },
] as const;

export const websiteProblems = [
  "Slow loading speed",
  "Poor mobile experience",
  "Weak SEO structure",
  "Outdated visual design",
  "No WhatsApp conversion path",
  "Confusing enquiry flow",
] as const;

export const leadMagnets = [
  "Website Audit Checklist PDF",
  "SEO Checklist PDF",
  "Website Planning Guide",
] as const;

export const industries = [
  {
    slug: "manufacturing-website-development-chennai",
    name: "Manufacturing Website Development Chennai",
    industry: "manufacturing",
    headline: "Manufacturing website development in Chennai for factories, suppliers, and B2B brands.",
    problem:
      "Many manufacturing websites look outdated, hide capabilities, and fail to generate serious B2B enquiries.",
    outcome: "Turn your factory, process, products, and certifications into a clean lead-generation website.",
  },
  {
    slug: "logistics-website-development-chennai",
    name: "Logistics Website Development Chennai",
    industry: "logistics",
    headline: "Logistics website development in Chennai for transport, warehouse, and supply chain companies.",
    problem:
      "Logistics buyers need trust fast, but many websites miss service areas, fleet details, and enquiry paths.",
    outcome: "Show routes, services, capabilities, and WhatsApp enquiry options in a professional structure.",
  },
  {
    slug: "hospital-website-development-chennai",
    name: "Hospital Website Development Chennai",
    industry: "hospital",
    headline: "Hospital website development in Chennai for clinics, hospitals, and healthcare brands.",
    problem:
      "Healthcare visitors need quick trust, doctor/service clarity, mobile speed, and easy appointment contact.",
    outcome: "Build a patient-friendly website with service pages, doctor profiles, appointment CTAs, and SEO.",
  },
  {
    slug: "school-college-website-development-chennai",
    name: "School & College Website Development Chennai",
    industry: "education",
    headline: "School and college website development in Chennai for admissions and parent trust.",
    problem:
      "Education websites often hide admissions information, campus strengths, and enquiry forms.",
    outcome: "Create a clear admission-focused website with programs, facilities, forms, and announcement areas.",
  },
  {
    slug: "interior-design-website-development-chennai",
    name: "Interior Design Website Development Chennai",
    industry: "interior design",
    headline: "Interior design website development in Chennai for studios that need premium visual trust.",
    problem:
      "Interior design clients decide visually, but weak portfolios and poor mobile layouts reduce enquiries.",
    outcome: "Showcase projects, packages, before-after visuals, and WhatsApp consultation CTAs.",
  },
  {
    slug: "real-estate-website-development-chennai",
    name: "Real Estate Website Development Chennai",
    industry: "real estate",
    headline: "Real estate website development in Chennai for builders, agents, and property brands.",
    problem:
      "Property buyers need location, pricing, gallery, floor plans, and quick contact before they trust a lead form.",
    outcome: "Create project pages, enquiry funnels, WhatsApp CTAs, and SEO-ready property landing pages.",
  },
  {
    slug: "construction-company-website-development-chennai",
    name: "Construction Company Website Development Chennai",
    industry: "construction",
    headline: "Construction company website development in Chennai for contractors and infrastructure firms.",
    problem:
      "Construction websites often fail to communicate project quality, safety, experience, and credibility.",
    outcome: "Build a strong corporate site with project proof, service pages, certifications, and enquiry CTAs.",
  },
  {
    slug: "startup-website-development-chennai",
    name: "Startup Website Development Chennai",
    industry: "startup",
    headline: "Startup website development in Chennai for founders who need fast, credible launches.",
    problem:
      "Startups need to explain the offer clearly, look credible, and launch fast without wasting budget.",
    outcome: "Launch a clean, scalable website with product messaging, SEO basics, and conversion-ready forms.",
  },
] as const;
