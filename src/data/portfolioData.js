// All content below is sourced directly from information provided by
// Hafeez KH. Placeholders are clearly marked and should be replaced
// with real details before deploying.

export const profile = {
  name: 'Hafeez KH',
  role: 'Backend Developer / Python Django Developer',
  tagline: 'Backend Developer | Python & Django',
  heroSupport:
    'Building reliable REST APIs, database-driven applications, and production-ready backend systems.',
  status: 'Available for backend development opportunities',
  summary:
    'MCA graduate and backend developer focused on building REST APIs and scalable web applications using Python, Django, Django REST Framework, PostgreSQL, Docker, Redis, and JWT authentication.',
  about:
    "I'm a backend developer with an MCA background, focused on designing reliable APIs, authentication systems, and database-driven applications. I enjoy working through the details that make a backend predictable in production — clean data models, sensible permissions, and services that hold up under real usage. My day-to-day toolkit centers on Python and Django, backed by PostgreSQL, Docker, and Redis, and I'm continually working to deepen that foundation.",
  email: 'hafeez12kh@gmail.com',
  phone: '+91 9400182500',
  location: 'Kerala, India',
  linkedin: 'https://www.linkedin.com/in/hafeez-kh',
  github: 'https://github.com/hafeez12kh',
  resumeUrl: '/resume.pdf',
  photo: '/hafeez-portrait.jpg',
}

export const skillGroups = [
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework', 'Flask', 'REST API Development'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    id: 'auth',
    label: 'Authentication & Security',
    skills: ['JWT Authentication', 'Django Authentication', 'Password Hashing', 'API Permissions'],
  },
  {
    id: 'devops',
    label: 'DevOps / Infrastructure',
    skills: ['Docker', 'Docker Compose', 'Redis'],
  },
  {
    id: 'languages',
    label: 'Programming Languages',
    skills: ['Python', 'Java', 'PHP', 'C', 'C++'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['HTML', 'CSS'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Docker'],
  },
]

export const projects = [
  {
    id: 'iqraamark-store',
    name: 'IQRAAMARK Store',
    subtitle: 'Live Industry Project — Iqraamark Pvt. Ltd.',
    description:
      'A backend built during a three-month live industry project with Iqraamark Pvt. Ltd., using Docker and Redis as part of the setup.',
    features: [
      'Backend developed as part of a live, real-world product environment',
      'Docker used for the development/deployment setup',
      'Redis used as part of the backend architecture',
      'Built through cross-functional team collaboration and real-world task delivery',
    ],
    tech: ['Python', 'Django', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/hafeez12kh', // Points to profile — replace with the exact repo URL once available
    demoUrl: null,
  },
  {
    id: 'attendx',
    name: 'AttendX',
    subtitle: 'Attendance Management System',
    description:
      'A Flask-based attendance management system with role-based access for HODs, teachers, and students, and QR-based session attendance.',
    features: [
      'Role-based access for HOD, teachers, and students',
      'Attendance session management',
      'QR-based attendance marking',
      'Department / Wi-Fi network restrictions',
      'Proxy-attempt detection and device/IP-based validation',
      'Student attendance tracking with analytics/prediction features',
    ],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/hafeez12kh', // Points to profile — replace with the exact repo URL once available
    demoUrl: null,
  },
  {
    id: 'packagehub',
    name: 'PackageHub',
    subtitle: 'Django Project',
    description:
      'A Django web application for package/product-related functionality, built with a Dockerized development environment and a database-backed architecture.',
    features: [
      'Django web application with full CRUD operations',
      'Package/product-related functionality with normalized database models',
      'Dockerized development environment',
      'PostgreSQL / database-backed architecture',
      'Django + Gunicorn deployment-oriented setup',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Gunicorn'],
    githubUrl: 'https://github.com/hafeez12kh', // Points to profile — replace with the exact repo URL once available
    demoUrl: null,
  },
]

export const experience = [
  {
    id: 'iqraamark',
    company: 'Iqraamark Pvt. Ltd.',
    role: 'Backend Developer',
    period: 'May 2026 – Aug 2026',
    description:
      'Completed a three-month live industry project — IQRAAMARK STORE — as Backend Developer, using Docker and Redis as part of the backend setup. Gained practical exposure to professional workflow, cross-functional team coordination, and real-world task delivery.',
    tech: ['Python', 'Django', 'Docker', 'Redis'],
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
    description:
      'Worked on frontend-backend integration and REST API implementation for client-facing features, testing endpoints with Postman and following Git-based version control with feature branches and code review.',
    tech: ['Python', 'REST APIs', 'Postman', 'Git'],
  },
  {
    id: 'softronics',
    company: 'Softronics, Calicut',
    role: 'Python Intern',
    period: 'Dec 2023 – Jan 2024',
    description:
      'Developed backend modules using Django and integrated MySQL databases for core application features, collaborating with the team via Git branching, pull requests, and code review.',
    tech: ['Python', 'Django', 'MySQL', 'Git'],
  },
]

export const education = [
  {
    id: 'mca',
    degree: 'MCA — Master of Computer Applications',
    institution: 'Dr. Harisingh Gour Central University, Madhya Pradesh',
    period: '2024 – 2026',
    detail: '83%',
  },
  {
    id: 'bsc',
    degree: 'BSc Computer Science',
    institution: 'Mary Matha Arts and Science College, Mananthavady (Kannur University)',
    period: '2021 – 2024',
    detail: null,
  },
]

// Drives the small structural "API response" motif used in the hero.
export const heroSnapshot = {
  endpoint: 'GET /developer/hafeez-kh',
  status: 200,
  payload: {
    role: 'Backend Developer',
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
  {
    id: 'prompt-engineering',
    title: 'AI Prompt Engineering',
    issuer: 'One Million Prompters',
    detail: null,
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    issuer: null,
    detail: null,
  },
  {
    id: 'latex',
    title: 'LaTeX',
    issuer: null,
    detail: null,
  },
]
