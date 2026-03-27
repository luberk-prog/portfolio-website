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
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 before:absolute before:left-6 before:top-0 before:bottom-0 before:w-px before:bg-primary/20"
          >
            <div className="absolute left-0 top-0 w-12 h-12 bg-primary/10 glass rounded-full flex items-center justify-center text-primary z-10 border border-primary/20">
              <exp.icon size={24} />
            </div>
            
            <div className="p-8 glass rounded-3xl group hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.subtitle}</p>
                </div>
                <span className="px-4 py-1 bg-white/5 rounded-full text-sm font-geist-mono opacity-60">
                  {exp.date}
                </span>
              </div>
              
              <p className="text-foreground/70 mb-6 font-geist-mono">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2 text-[11px] font-bold tracking-widest uppercase py-2 border-t border-white/5">
                <span className="text-primary/50 mr-2">Core Courses:</span>
                {exp.courses.map(course => (
                  <span key={course} className="text-foreground/60">{course} •</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
