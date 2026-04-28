"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Ghana Communication Technology University",
      subtitle: "BSc. Computer Science",
      date: "2022 - Present",
      icon: GraduationCap,
      description: "Focusing on software engineering principles, algorithms, and data structures.",
      courses: ["Object-Oriented Programming", "Operating Systems", "Automata Theory", "Data Structures", "Database Management Systems"]
    },
    {
      title: "Relevant Certifications",
      subtitle: "Professional Development",
      date: "Ongoing",
      icon: Award,
      description: "Continuously enhancing skills through industry-recognized certifications and workshops.",
      courses: ["Full Stack Development", "Cloud Computing Basics", "Version Control with Git"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 before:absolute before:left-[1.375rem] before:top-0 before:bottom-0 before:w-[1px] before:bg-foreground/10"
          >
            <div className="absolute left-0 top-0 w-11 h-11 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center text-accent z-10 transition-transform group-hover:scale-110">
              <exp.icon size={22} />
            </div>
            
            <div className="p-10 bg-background-alt border border-white/5 rounded-sm hover:border-accent/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-3xl font-serif uppercase tracking-tight mb-2">{exp.title}</h3>
                  <p className="text-accent font-sans text-sm uppercase tracking-widest font-bold">{exp.subtitle}</p>
                </div>
                <span className="text-sm font-sans uppercase tracking-[0.2em] text-foreground/40 font-bold">
                  {exp.date}
                </span>
              </div>
              
              <p className="text-foreground-muted mb-8 leading-relaxed font-sans text-lg">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-bold tracking-[0.15em] uppercase py-4 border-t border-white/5">
                <span className="text-accent opacity-60">Focus Areas:</span>
                {exp.courses.map(course => (
                  <span key={course} className="text-foreground-muted">{course}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
