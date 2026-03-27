import { Code2, Server, Settings } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "RESTful APIs"],
  },
  {
    title: "Tools & Others",
    icon: Settings,
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Agile/Scrum"],
  },
];
