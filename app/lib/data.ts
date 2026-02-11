import { Project, Skill, Experience, BlogPost, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contact" },
];

export const skills: Skill[] = [
  // Lenguajes
  { name: "Python", icon: "SiPython", category: "languages" },
  { name: "JavaScript", icon: "SiJavascript", category: "languages" },
  { name: "TypeScript", icon: "SiTypescript", category: "languages" },
  { name: "Go", icon: "SiGo", category: "languages" },
  { name: "PHP", icon: "SiPhp", category: "languages" },
  { name: "Rust", icon: "SiRust", category: "languages" },
  // Bases de datos
  { name: "MongoDB", icon: "SiMongodb", category: "databases" },
  { name: "SQL", icon: "SiMysql", category: "databases" },
  { name: "MariaDB", icon: "SiMariadb", category: "databases" },
  { name: "Supabase", icon: "SiSupabase", category: "databases" },
  { name: "Firebase", icon: "SiFirebase", category: "databases" },
  // CMS
  { name: "WordPress", icon: "SiWordpress", category: "cms" },
  { name: "Drupal", icon: "SiDrupal", category: "cms" },
  // Frontend
  { name: "React", icon: "SiReact", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  // Sistemas
  { name: "Linux", icon: "SiLinux", category: "systems" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión E-commerce",
    description: "Plataforma completa de e-commerce con panel de administración, pasarela de pagos integrada y gestión de inventario en tiempo real.",
    image: "/images/projects/project1.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "API REST Microservicios",
    description: "Arquitectura de microservicios escalable construida con Go, implementando autenticación JWT, rate limiting y documentación Swagger.",
    image: "/images/projects/project2.jpg",
    tags: ["Go", "Docker", "PostgreSQL", "Redis"],
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Panel de análisis de datos con visualizaciones interactivas, reportes automatizados y exportación a múltiples formatos.",
    image: "/images/projects/project3.jpg",
    tags: ["React", "TypeScript", "D3.js", "Python"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "CMS Headless WordPress",
    description: "Implementación de CMS headless utilizando WordPress como backend y Next.js como frontend para máximo rendimiento.",
    image: "/images/projects/project4.jpg",
    tags: ["WordPress", "Next.js", "GraphQL", "Tailwind"],
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Sistema de votación descentralizado construido con Rust y blockchain, garantizando transparencia e inmutabilidad.",
    image: "/images/projects/project5.jpg",
    tags: ["Rust", "Solidity", "Web3.js", "React"],
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Automación DevOps",
    description: "Suite de herramientas para automatización de despliegues, monitoreo y gestión de infraestructura en la nube.",
    image: "/images/projects/project6.jpg",
    tags: ["Python", "Linux", "Docker", "Kubernetes"],
    github: "https://github.com",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2022 - Presente",
    description: "Liderando el desarrollo de aplicaciones web escalables, implementando arquitecturas modernas y mentorando al equipo de desarrollo.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    company: "Digital Agency Pro",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Desarrollo de soluciones web personalizadas para clientes enterprise, integración de CMS y optimización de rendimiento.",
    technologies: ["React", "PHP", "WordPress", "Drupal"],
  },
  {
    id: 3,
    company: "StartUp Innovadora",
    position: "Backend Developer",
    period: "2019 - 2020",
    description: "Desarrollo de APIs RESTful y microservicios, implementación de sistemas de autenticación y gestión de bases de datos.",
    technologies: ["Python", "Go", "MongoDB", "Docker"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Construyendo APIs Escalables con Go y Microservicios",
    excerpt: "Aprende a diseñar e implementar arquitecturas de microservicios robustas utilizando Go, Docker y Kubernetes para aplicaciones de alta demanda.",
    date: "15 Ene 2026",
    readTime: "8 min",
    image: "/images/blog/blog1.jpg",
    tags: ["Go", "Microservicios", "Backend"],
  },
  {
    id: 2,
    title: "TypeScript Avanzado: Patrones de Diseño y Buenas Prácticas",
    excerpt: "Descubre cómo aprovechar al máximo TypeScript en proyectos grandes, incluyendo patrones de diseño, generics avanzados y configuración óptima.",
    date: "10 Ene 2026",
    readTime: "12 min",
    image: "/images/blog/blog2.jpg",
    tags: ["TypeScript", "Frontend", "Arquitectura"],
  },
  {
    id: 3,
    title: "De WordPress a Headless: Guía de Migración Completa",
    excerpt: "Guía paso a paso para transformar tu sitio WordPress tradicional en una arquitectura headless moderna con Next.js y GraphQL.",
    date: "5 Ene 2026",
    readTime: "15 min",
    image: "/images/blog/blog3.jpg",
    tags: ["WordPress", "Next.js", "CMS"],
  },
];

export const personalInfo = {
  name: "George Dev",
  title: "Full Stack Developer",
  tagline: "Transformando ideas en código, creando experiencias digitales excepcionales",
  description: "Desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. Especializado en arquitecturas modernas, rendimiento y experiencias de usuario excepcionales.",
  email: "p.pradog25@gmail.com",
  location: "Remoto / Global",
  availability: "Disponible para proyectos",
  stats: {
    yearsExperience: "5+",
    projectsCompleted: "50+",
    happyClients: "30+",
    technologies: "15+",
  },
};
