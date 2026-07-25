export interface Project {
  imageUrl: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  bulletPoints?: string[];
}

export const projects: Project[] = [
  {
    imageUrl: "",
    title: "Bulk SMS Manager",
    year: "2025",
    description:
      "Full-stack messaging app for customer engagement via bulk SMS.",
    technologies: ["Laravel", "PHP", "VueJs", "InertiaJS", "Tailwindcss"],
    github: "https://github.com/ezekiel-charo/bulk-sms-manager",
    live: "https://github.com/ezekiel-charo/bulk-sms-manager",
    bulletPoints: [],
  },
  {
    imageUrl: "",
    title: "Money Manager",
    year: "2024",
    description:
      "An offline-first personal income and expense tracker web app.",
    technologies: [
      "Angular",
      "Karma",
      "Jasmine",
      "Tailwind",
      "PouchDB",
      "Material CDK",
      "TypeScript",
    ],
    github: "https://github.com/ezekiel-charo/personal-finance-manager",
    live: "https://money-manager-101.web.app",
    bulletPoints: [
      "Developed modular UI components using Angular CDK for maintainable and scalable code.",
      "Architected an offline-first solution with PouchDB for uninterrupted user experience.",
      "Implemented engaging UI animations with Tailwind CSS.",
      "Wrote unit tests for main services and components to ensure reliability.",
    ],
  },
  {
    imageUrl: "",
    title: "Personal Journaling App",
    year: "2024",
    description:
      "A cross-platform journaling application with a robust backend and intuitive mobile UI.",
    technologies: ["React Native", "NestJS", "Postgres", "TypeScript"],
    github: "https://github.com/ezekiel-charo/Journal",
    live: "https://github.com/ezekiel-charo/Journal",
    bulletPoints: [
      "Developed a REST API with authentication and CRUD endpoints for journals and categories.",
      "Validated backend data using class-validator.",
      "Utilized TypeORM for efficient database querying.",
      "Created comprehensive API documentation with Postman and GitHub README files.",
      "Built a mobile app UI using NativeBase, state management, and Expo's file-based routing.",
    ],
  },
  {
    imageUrl: "/ease-pos.png",
    title: "Ease - Point of Sale",
    year: "2023",
    description:
      "A responsive Point of Sale web application supporting multi-platform use.",
    technologies: [
      "Angular",
      "Typescript",
      "Firebase",
      "BootStrap",
      "CapacitorJs",
    ],
    github: "https://github.com/ezekiel-charo/ease-point-of-sale",
    live: "https://ease-pos.web.app",
    bulletPoints: [
      "Integrated Firebase Authentication and Firestore for secure, scalable data storage.",
      "Streamlined Angular code for Android deployment with CapacitorJS.",
      "Built a responsive UI for mobile, desktop, and Android app experiences.",
      "Implemented granular data security and access control with Firebase rules.",
      "Used transactions to maintain stock consistency during sales.",
      "Added account confirmation and password reset via email.",
      "Admins can manage shops, admins, and employees; employees have independent login and password reset.",
    ],
  },
  {
    imageUrl: "",
    title: "Personal Portfolio Website",
    year: "2025",
    description: "This website where I showcase my projects",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ezekiel-charo/portfolio-website-2025",
    live: "https://ezekiel-charo.github.io",
  },
  {
    imageUrl: "",
    title: "Phonebook Web App",
    year: "2025",
    description:
      "A contact list management web app that demonstrates RxDB capabilities",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "RxDB"],
    github: "https://github.com/ezekiel-charo/phonebook",
    live: "https://phonebook-omega-ruby.vercel.app",
  },
  {
    imageUrl: "",
    title: "Mimea - Plant species identification app",
    year: "2019",
    description:
      "A plant species identification application making use of tensorflow object detection",
    technologies: ["Java", "Android", "Python", "Tensorflow", "Flask"],
    github: "https://github.com/ezekiel-charo/Mimea",
    live: "https://github.com/ezekiel-charo/Mimea",
  },
  {
    imageUrl: "",
    title: "Gikanda farmers website",
    year: "2023",
    description:
      "An informational hub for the Gikanda Coffee Farmers Cooperative Society.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ezekiel-charo/gikanda-farmers-website",
    live: "https://gikanda-farmers.web.app/",
    bulletPoints: [
      "Collaborated with stakeholders to gather content and deliver a visually appealing interface.",
      "Responsiveness.",
    ],
  },
  {
    imageUrl: "",
    title: "Smartmovemovers.com",
    year: "2023",
    description:
      "A marketing website for Smart Move Movers, highlighting their services and brand.",
    technologies: ["JavaScript", "Tailwind CSS", "HTML"],
    github: "https://github.com/ezekiel-charo/smartmove",
    live: "https://smartmove-1b34e.web.app/",
    bulletPoints: [
      "Designed and developed a modern, responsive website to showcase company services.",
    ],
  },
];
