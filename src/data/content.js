// All page copy lives here so it can be edited without touching layout code.

export const verticals = [
  {
    id: 'staff-augmentation',
    no: '01',
    icon: 'users',
    title: 'Staff Augmentation',
    short: 'Specialists embedded in your team',
    lead: 'Specialist talent, embedded in your team.',
    body: 'Add vetted engineers, designers, data and product specialists to your team for as long as you need them, without the overhead of permanent hiring.',
    points: [
      ['Skills on tap', 'Software, data, AI/ML, cloud, QA, design and product talent for your stack.'],
      ['Vetted to quality', 'Technical and cultural screening before anyone is introduced to you.'],
      ['Integrated, not outsourced', 'Our people work in your tools, rituals and reporting lines.'],
      ['Scale up or down', 'Add or release capacity as your roadmap changes.'],
    ],
    tags: ['Scaling a roadmap', 'Closing skill gaps', 'Backfilling roles', 'Peak demand'],
    tagLabel: 'Ideal for',
  },
  {
    id: 'teams-on-demand',
    no: '02',
    icon: 'squad',
    title: 'Teams on Demand',
    short: 'Full squads, delivered end to end',
    lead: 'Fully integrated squads, ready to deliver.',
    body: 'We deploy integrated software teams, from early requirements to fully deployed applications, anytime, anywhere, for any duration.',
    points: [
      ['Define scope', 'Goals, constraints and the shape of the team.'],
      ['Assemble the squad', 'The right mix of roles, ready to embed.'],
      ['Embed and deliver', 'Agile sprints with continuous demos.'],
      ['Review and adapt', 'Resize or extend as your needs change.'],
    ],
    tags: ['Product Manager', 'Tech Lead / Architect', 'Frontend Engineers', 'Backend Engineers', 'QA & Test Automation', 'DevOps & Cloud', 'UI/UX Designer', 'AI/ML Specialist'],
    tagLabel: 'A typical squad',
    steps: true,
  },
  {
    id: 'direct-placements',
    no: '03',
    icon: 'handshake',
    title: 'Direct Placements',
    short: 'Permanent hires, found and vetted',
    lead: 'Permanent hires, found and vetted for you.',
    body: 'When you want a long term member of your own team, work with a partner that understands the role because we do the work.',
    points: [
      ['Brief and profile', 'Define the role, team fit and what success looks like.'],
      ['Search and screen', 'Targeted sourcing with technical and behavioural screening.'],
      ['Shortlist and interview', 'A curated shortlist and a well managed interview process.'],
      ['Offer and onboard', 'Support through offer, notice period and first days.'],
    ],
    tags: ['Software Engineers', 'Data & AI Talent', 'Cloud & DevOps', 'Product & Design', 'Marketing & Growth', 'Operations & Admin'],
    tagLabel: 'Roles we place',
    steps: true,
  },
  {
    id: 'development',
    no: '04',
    icon: 'code',
    title: 'Development & Technical Support',
    short: 'Build, ship and support solutions',
    lead: 'Build it. Ship it. Keep it running.',
    body: 'From first prototype to production support, we deliver software that works at scale, with AI built in from the start.',
    points: [
      ['Product & prototypes', 'Concept to launch: clickable MVPs, proofs of concept and production ready code.'],
      ['AI models & automation', 'Custom ML, LLM integration and intelligent automation built for production.'],
      ['Digital platforms', 'Web, mobile and SaaS platforms with API first, cloud native architecture.'],
      ['Cloud, DevOps & support', 'CI/CD, infrastructure, monitoring and responsive technical support.'],
    ],
    tags: ['React & Next.js', 'Node.js & Python', 'AWS · Azure · GCP', 'Kubernetes'],
    tagLabel: 'Built with',
  },
  {
    id: 'capability-development',
    no: '05',
    icon: 'cap',
    title: 'Capability Development',
    short: 'Upskill teams and build CoEs',
    lead: 'Build capability inside your organisation.',
    body: 'We assess where your teams are today, close the gaps that matter most and leave lasting capability behind.',
    points: [
      ['Assess', 'Skills and maturity assessment to find the gaps that matter most.'],
      ['Upskill', 'Workshops, bootcamps and mentoring led by practising engineers and marketers.'],
      ['Embed', 'Playbooks, coaching on live projects and Centre of Excellence set up.'],
    ],
    tags: ['AI & Automation', 'Cloud & DevOps', 'Data Engineering', 'Agile & Product', 'Digital Marketing', 'Quality Engineering'],
    tagLabel: 'Focus areas',
    steps: true,
  },
  {
    id: 'marketing',
    no: '06',
    icon: 'megaphone',
    title: 'Marketing & Social Media',
    short: 'Brand, content and growth',
    lead: 'Brand, social and growth marketing.',
    body: 'Strategy and execution under one roof, from positioning and launch through to always on content and performance.',
    points: [
      ['Go to market strategy', 'Market research, positioning and launch roadmaps.'],
      ['Brand & content', 'Brand identity, copywriting and thought leadership.'],
      ['Social media', 'Strategy, content calendars, community management and creative.'],
      ['SEO, SEM & paid media', 'Search and paid campaigns with ongoing performance optimisation.'],
      ['Video & creative', 'Video, motion graphics and campaign creative production.'],
      ['Growth & analytics', 'Conversion optimisation, journey mapping and demand generation.'],
    ],
  },
  {
    id: 'admin-events',
    no: '07',
    icon: 'calendar',
    title: 'Admin, Engagement & Events',
    short: 'Run operations, engage, host events',
    lead: 'Admin, engagement and events, handled.',
    body: 'Dependable people and process for the work that keeps an organisation running and its stakeholders engaged.',
    groups: [
      ['Admin & Business Support', ['Executive and project coordination', 'Documentation and reporting', 'Scheduling and procurement support', 'Back office process management']],
      ['Engagement', ['Stakeholder and community engagement', 'Internal communications', 'Customer and partner programmes', 'Feedback and sentiment tracking']],
      ['Events & Production', ['Concept, planning and budgeting', 'Venue, vendor and speaker management', 'Run of show and on site delivery', 'AV, livestream and hybrid production']],
    ],
  },
];

export const stats = [
  { value: '16+', label: 'Years delivering for enterprise and public sector clients' },
  { value: '160+', label: 'Engineers across software, data, AI, cloud and design' },
  { value: '10+', label: 'Industries served across APAC and beyond' },
];

export const serviceLines = ['Market Entry', 'Technology & Digital Delivery', 'Operations', 'Trade & Procurement'];

export const models = {
  columns: ['Staff Augmentation', 'Teams on Demand', 'Direct Placement', 'Development & Support'],
  rows: [
    ['Best when', ['You need specific skills inside your own team', 'You need a full squad to deliver a defined scope', 'You want a permanent member of your team', 'You want outcomes, not headcount']],
    ['Who leads', ['Your managers', 'Zynera lead, with your product owner', 'You, from day one', 'Zynera, to agreed outcomes']],
    ['Term', ['Flexible, short to long', 'Project or ongoing', 'Permanent', 'Project or retainer']],
    ['You get', ['Added capacity and skills', 'A delivered scope, on cadence', 'A vetted long term hire', 'Working, supported solutions']],
  ],
};

export const approach = [
  ['Discover', 'Understand your goals, gaps and constraints.'],
  ['Match & design', 'Shape the right model, team and plan.'],
  ['Onboard', 'Fast, smooth integration into your workflow.'],
  ['Deliver', 'Agile delivery with clear, regular reporting.'],
  ['Review & scale', 'Measure outcomes, then scale up or down.'],
];

export const principles = [
  ['user', 'One accountable lead', 'A single point of contact for every engagement.'],
  ['report', 'Transparent reporting', 'Progress, risks and outcomes, reviewed regularly.'],
  ['shield', 'Governance built in', 'Quality, security and accountability from day one.'],
];

export const stack = [
  ['device', 'Frontend', 'React · Vue · Angular · Next.js · React Native · Flutter'],
  ['server', 'Backend', 'Node.js · Python · Java · Go · .NET · FastAPI'],
  ['brain', 'AI / ML', 'TensorFlow · PyTorch · LangChain · OpenAI · AWS Bedrock · HuggingFace'],
  ['cloud', 'Cloud', 'AWS · GCP · Azure · Kubernetes · Docker · Terraform'],
  ['database', 'Data', 'Snowflake · BigQuery · Databricks · Apache Spark · dbt · Airflow'],
  ['gears', 'DevOps', 'GitHub Actions · ArgoCD · Jenkins · Prometheus · Grafana · ELK'],
];

export const whyUs = [
  ['globe', 'Asian trust, global reach', 'Singapore headquartered, with delivery across APAC and client reach worldwide.'],
  ['link', 'Truly end to end', 'From people and engineering to marketing and events, one accountable partner.'],
  ['brain', 'AI native from day one', 'AI is embedded in how we design, build and operate every solution.'],
  ['handshake', 'Flexible engagement', 'Staff augmentation, full project delivery or Centre of Excellence models.'],
  ['star', 'Proven track record', '16+ years across 10+ industries with a team of 160+ engineers.'],
];

export const industries = [
  'Financial Services', 'Healthcare', 'Education', 'Retail & eCommerce', 'Real Estate',
  'Logistics & Supply Chain', 'Government & Public Sector', 'Media & Entertainment', 'Manufacturing', 'Sustainability & CleanTech',
];

export const regions = [
  ['Singapore', 'Headquarters'],
  ['Australia', 'Active market'],
  ['Sri Lanka', 'Active market'],
  ['APAC', 'Primary delivery hub'],
];

// CAREERS: replace these sample openings with real ones before launch.
// Set `jobs` to an empty array [] to show only the talent network section.
export const jobs = [
  {
    id: 'senior-java-engineer',
    title: 'Senior Software Engineer (Java)',
    team: 'Engineering',
    location: 'Colombo, Sri Lanka · Hybrid',
    type: 'Full time',
    summary: 'Design and build Spring Boot microservices for enterprise and fintech clients across APAC.',
    requirements: ['5+ years with Java and Spring Boot', 'REST APIs, SQL and messaging (Kafka or similar)', 'Experience working directly with client teams'],
  },
  {
    id: 'react-engineer',
    title: 'Frontend Engineer (React)',
    team: 'Engineering',
    location: 'Remote · APAC',
    type: 'Contract or full time',
    summary: 'Build fast, accessible web applications with React and Next.js inside client squads.',
    requirements: ['3+ years with React and TypeScript', 'Strong eye for UI quality and performance', 'Comfortable in agile, demo driven teams'],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps / Cloud Engineer',
    team: 'Cloud',
    location: 'Singapore or Remote',
    type: 'Full time',
    summary: 'Own CI/CD, infrastructure as code and monitoring for production workloads on AWS.',
    requirements: ['AWS, Docker and Kubernetes in production', 'Terraform and GitHub Actions or similar', 'On call mindset and clear communication'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Executive',
    team: 'Marketing',
    location: 'Colombo, Sri Lanka',
    type: 'Full time',
    summary: 'Run social, content and paid campaigns for Zynera and our clients.',
    requirements: ['2+ years in social and performance marketing', 'Hands on with Meta and Google Ads', 'Strong written English'],
  },
];

export const perks = [
  ['globe', 'Regional exposure', 'Work with enterprise and public sector clients across Singapore, Australia and APAC.'],
  ['cap', 'Grow your craft', 'Mentoring from practising engineers, plus time and budget for learning.'],
  ['link', 'Flexible working', 'Remote and hybrid arrangements that fit how you work best.'],
  ['brain', 'Modern stack', 'AI native delivery on current tools, not legacy maintenance.'],
];
