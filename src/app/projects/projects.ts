export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  bulletPoints?: string[];
}

export const projects: Project[] = [
  {
    imageUrl: "",
    title: "Money Manager",
    description:
      "An offline-first personal income and expense tracker web app.",
    technologies: [
      "Angular",
      "Karma",
      "Jasmine",
      "Tailwind",
      "PouchDB",
      "Material CDK",
    ],
    github: "https://github.com/ezQel/personal-finance-manager",
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
    description:
      "A cross-platform journaling application with a robust backend and intuitive mobile UI.",
    technologies: ["NestJS", "React Native", "Postgres"],
    github: "https://github.com/ezQel/Journal",
    live: "",
    bulletPoints: [
      "Developed a REST API with authentication and CRUD endpoints for journals and categories.",
      "Validated backend data using class-validator.",
      "Utilized TypeORM for efficient database querying.",
      "Created comprehensive API documentation with Postman and GitHub README files.",
      "Built a mobile app UI using NativeBase, state management, and Expo’s file-based routing.",
    ],
  },
  {
    imageUrl: "/ease-pos.png",
    title: "Ease - Point of Sale",
    description:
      "A responsive Point of Sale web application supporting multi-platform use.",
    technologies: ["Angular", "Firebase", "BootStrap", "CapacitorJs"],
    github: "https://github.com/ezQel/ease-point-of-sale",
    live: "https://ease-pos.web.app",
    bulletPoints: [
      "Integrated Firebase Authentication and Firestore for secure, scalable data storage.",
      "Streamlined Angular code for Android deployment with CapacitorJS.",
      "Built a responsive UI for mobile, desktop, and Android app experiences.",
      "Implemented granular data security and access control with Firebase rules.",
      "Used transactions to maintain stock consistency during sales.",
      "Added account confirmation and password reset via email.",
      "Admins can manage shops, admins, and employees; employees have independent login and password reset.",
      "Demo credentials: username ‘ezekiel3499@gmail.com’, password ‘password’.",
    ],
  },
  {
    imageUrl: "",
    title: "Gikandafarmers.com",
    description:
      "An informational hub for the Gikanda Coffee Farmers Cooperative Society.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "https://gikandafarmers.com/",
    bulletPoints: [
      "Collaborated with designers to gather content and deliver a visually appealing interface.",
      "Ensured a pleasant user experience across all device sizes.",
    ],
  },
  {
    imageUrl: "",
    title: "Smartmovemovers.com",
    description:
      "A marketing website for Smart Move Movers, highlighting their services and brand.",
    technologies: ["Tailwind", "11ty", "Handlebars"],
    github: "",
    live: "https://smartmovemovers.com",
    bulletPoints: [
      "Designed and developed a modern, responsive website to showcase company services.",
    ],
  },
];
