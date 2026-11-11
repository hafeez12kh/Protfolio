// All content below is sourced directly from information provided by Hafeez KH.

export const profile = {
  name: 'Hafeez KH',
  role: 'Software Developer',
  tagline: 'Software Developer | Python & Django',
  heroSupport:
    'Building reliable REST APIs, database-driven applications, and production-ready systems.',
  status: 'Available for software development opportunities',
  summary:
    'Software Developer (fresher) with internship and live-project experience building web applications and RESTful APIs using Python, Django, Django REST Framework and Flask. Hands-on with JWT authentication, role-based authorization, Razorpay payment integration, PostgreSQL, MySQL, Docker, Postman and Git. MCA graduate seeking a Software Developer role in a product engineering team.',
  about:
    "I'm a software developer with an MCA background, focused on designing reliable APIs, authentication systems, and database-driven applications. I enjoy working through the details that make a system predictable in production — clean data models, sensible permissions, and services that hold up under real usage. My day-to-day toolkit centers on Python and Django, backed by PostgreSQL, Docker, and Redis, and I'm continually working to deepen that foundation.",
  email: 'hafeez12kh@gmail.com',
  phone: '+91 9400182500',
  location: 'Kerala, India',
  linkedin: 'https://linkedin.com/in/hafeez-kh',
  github: 'https://github.com/hafeez12kh',
  resumeUrl: '/Hafeez_KH_Resume.pdf',
  photo: '/hafeez-portrait.jpg',
}

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Django', 'Django REST Framework', 'Flask', 'Django ORM', 'SQLAlchemy'],
  },
  {
    id: 'apis-security',
    label: 'APIs and Security',
    skills: [
      'RESTful APIs',
      'JWT (SimpleJWT)',
      'Role-Based Authorization',
      'Razorpay payment integration',
      'Webhooks',
      'Postman',
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Docker', 'Git', 'GitHub'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap (basic)'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    skills: ['OOP', 'MVT architecture', 'Code review'],
  },
]

export const projects = [
  {
    id: 'iqraamart',
    name: 'IqraaMart',
    subtitle: 'E-commerce Backend API',
    description:
      'RESTful e-commerce backend with JWT authentication, product and category management with search, filtering and pagination, address management, and Razorpay payment order creation, signature verification and webhook handling.',
    features: [
      'Designed a modular API (users, authentication, shop, address, payments) using DRF serializers, permission checks and Django ORM on PostgreSQL.',
      'Implemented JWT authentication (SimpleJWT) with access and refresh tokens, a custom user model and an authenticated profile API.',
      'Built product, category and address APIs with search, filtering, pagination and ordering, including address CRUD with default address support.',
      'Integrated Razorpay order creation, payment signature verification and webhook signature validation; tested with Postman; used Docker, Redis and Git.',
    ],
    tech: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
      'Razorpay',
      'Docker',
      'Redis',
      'Postman',
    ],
    githubUrl: 'https://github.com/hafeez12kh/iqraamart-ecommerce-backend',
    demoUrl: null,
  },
  {
    id: 'attendx',
    name: 'AttendX',
    subtitle: 'AI-Based Attendance Management System',
    description:
      'Role-based attendance system for HOD, teachers and students. Teachers create sessions and students mark attendance by scanning dynamically generated QR codes. Wi-Fi subnet, IP and device checks reduce proxy attendance, and a rule-based AI module flags suspicious attendance patterns and low-attendance students.',
    features: [
      'Built a role-based attendance system for HOD, teachers and students; teachers create sessions and students mark attendance by scanning dynamically generated QR codes.',
      'Added verification to prevent proxy attendance using Wi-Fi subnet restrictions, IP tracking and device information checks.',
      'Implemented a rule-based AI module that flags suspicious attendance patterns and students with low attendance; designed MySQL models with SQLAlchemy and added CSV import for student data.',
    ],
    tech: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/hafeez12kh/AttendX',
    demoUrl: null,
  },
  {
    id: 'packagehub',
    name: 'PackageHub',
    subtitle: 'Travel Destination Finder',
    description:
      'Django web application for browsing and finding travel destinations, with Django ORM models and records managed through Django Admin.',
    features: [
      'Developed a Django web application that lets users browse and find travel destinations, with frontend pages built in HTML and CSS.',
      'Created Django models using the Django ORM and managed destination records through the Django Admin interface.',
    ],
    tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/hafeez12kh/packageHub-django',
    demoUrl: null,
  },
]

export const experience = [
  {
    id: 'iqraamark',
    company: 'Iqraamark Pvt. Ltd.',
    role: 'Backend Developer (Live Industry Project)',
    period: 'May 2026 – Aug 2026',
    description:
      'Built IqraaMart REST APIs with Django, DRF and PostgreSQL; JWT auth; Razorpay payments; used Docker, Redis and Git.',
    tech: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
      'Razorpay',
      'Docker',
      'Redis',
      'Git',
    ],
    credential: {
      label: 'Certificate of Live Project Experience',
      issuer: 'Iqraamark Pvt. Ltd.',
      certificateId: 'IQM-DPE-2026-08',
      issueDate: '17-08-2026',
    },
  },
  {
    id: 'cognifyz',
    company: 'Cognifyz Technologies',
    role: 'Web Development Intern',
    period: 'Feb 2026 – Mar 2026',
    description: 'Developed and styled web pages with HTML5 and CSS3.',
    tech: ['HTML5', 'CSS3'],
  },
  {
    id: 'softronics',
    company: 'Softronics, Calicut',
    role: 'Python Intern',
    period: 'Dec 2023 – Jan 2024',
    description:
      'Django backend modules with MySQL, Git branching, pull requests, code reviews, debugging and unit testing.',
    tech: ['Python', 'Django', 'MySQL', 'Git'],
  },
]

export const education = [
  {
    id: 'mca',
    degree: 'MCA',
    institution: 'Dr. Harisingh Gour Central University, Madhya Pradesh',
    period: '2024 – 2026',
    detail: '83%',
  },
  {
    id: 'bsc',
    degree: 'B.Sc Computer Science',
    institution: 'Mary Matha Arts & Science College',
    period: '2021 – 2024',
    detail: '81%',
  },
  {
    id: 'dca',
    degree: 'Diploma in Computer Applications',
    institution: 'SCALE Kerala',
    period: '2021',
    detail: null,
  },
]

// Drives the small structural "API response" motif used in the hero.
export const heroSnapshot = {
  endpoint: 'GET /developer/hafeez-kh',
  status: 200,
  payload: {
    role: 'Software Developer',
    stack: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'Redis'],
    focus: ['REST APIs', 'Authentication', 'Database design'],
    status: 'available',
  },
}

export const certifications = [
  {
    id: 'iqraamark-cert',
    title: 'Certificate of Live Project Experience',
    issuer: 'Iqraamark Pvt. Ltd.',
    detail: 'ID: IQM-DPE-2026-08',
  },
]
