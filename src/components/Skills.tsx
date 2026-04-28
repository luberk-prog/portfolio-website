"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export const Skills = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="p-10 bg-background-alt border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-all duration-500 rounded-sm"
        >
          <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 text-foreground">
            <category.icon size={120} />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-accent/10 text-accent rounded-sm">
              <category.icon size={28} />
            </div>
            <h3 className="text-3xl font-serif uppercase tracking-tight">{category.title}</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-background border border-white/5 rounded-sm text-sm font-sans tracking-wide text-foreground-muted hover:text-foreground hover:border-accent/40 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
