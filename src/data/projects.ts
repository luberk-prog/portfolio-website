export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  underConstruction?: boolean;
}

export const projects: Project[] = [
  {
    id: "bigg78-stream",
    title: "Bigg78 Stream",
    description: "A high-performance, Netflix-inspired watch-party platform with a focus on cinematic immersion. Features include a glassmorphic profile management system, real-time interactive chat, and a robust custom video player with native fullscreen API integration.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Context API"],
    githubUrl: "https://github.com/luberk-prog/bigg78_stream",
    liveUrl: "https://bigg78-stream.onrender.com",
    image: "/projects/bigg78-stream.png",
  },
  {
    id: "ace-collection",
    title: "Ace Collection",
    description: "A premium streetwear e-commerce platform featuring high-end boutique apparel. Includes unique interactive landing pages, product filtering, and a bespoke shopping experience.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/luberk-prog/Ace_collection",
    liveUrl: "https://luberk-prog.github.io/Ace_collection/",
    image: "/projects/ace-collection.png",
  },
  {
    id: "1",
    title: "Student Management System",
    description: "A comprehensive platform for managing student records, course enrollments, and academic performance tracking with a focus on administrative efficiency.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projects/sms.png",
    underConstruction: true,
  },
  {
    id: "2",
    title: "Finance Tracker App",
    description: "Personal finance management tool that allows users to track expenses, set budgets, and visualize spending habits through interactive charts.",
    techStack: ["Next.js", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projects/finance.png",
    underConstruction: true,
  },
  {
    id: "3",
    title: "Creator Platform",
    description: "A digital marketplace for content creators to share, monetize, and manage their creative assets with built-in analytics and community features.",
    techStack: ["React", "Firebase", "Stripe API"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projects/creator.png",
    underConstruction: true,
  },
];
