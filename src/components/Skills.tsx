"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export const Skills = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-8 glass rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
            <category.icon size={80} />
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
              <category.icon size={24} />
            </div>
            <h3 className="text-xl font-bold">{category.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
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
