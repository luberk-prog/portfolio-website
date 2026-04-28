"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code2, Layers } from "lucide-react";
import { useRouter } from "next/navigation";
import { Project } from "@/data/projects";
import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

export const ProjectDetailClient = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-3 mb-12 text-foreground/50 hover:text-accent transition-all font-sans uppercase tracking-[0.2em] text-xs font-bold"
        >
          <ArrowLeft size={16} />
          Back to Overview
        </motion.button>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-sm overflow-hidden border border-white/5 aspect-[4/3] relative grayscale hover:grayscale-0 transition-all duration-1000 group"
          >
            <Image 
              src={getAssetPath(project.image)} 
              alt={project.title} 
              fill
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif uppercase leading-tight mb-6 tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-1 bg-accent/10 text-accent rounded-sm text-[10px] font-bold uppercase tracking-[0.2em]">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xl text-foreground-muted mb-10 leading-relaxed font-sans">
                {project.description}
              </p>

              <div className="flex gap-6">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-background-alt border border-white/10 text-foreground rounded-sm font-serif text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
                >
                  <Github size={20} /> GitHub
                </a>
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-accent text-white rounded-sm font-serif text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-lg"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-background-alt border border-white/5 rounded-sm"
          >
            <div className="p-4 bg-accent/10 rounded-sm text-accent w-fit mb-6">
              <Code2 size={28} />
            </div>
            <h3 className="text-2xl font-serif uppercase mb-4 tracking-tight">Technical Challenges</h3>
            <p className="text-foreground-muted font-sans leading-relaxed">
              Exploring the core engineering difficulties and architectural decisions made during development.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-background-alt border border-white/5 rounded-sm"
          >
            <div className="p-4 bg-accent/10 rounded-sm text-accent w-fit mb-6">
              <Layers size={28} />
            </div>
            <h3 className="text-2xl font-serif uppercase mb-4 tracking-tight">System Architecture</h3>
            <p className="text-foreground-muted font-sans leading-relaxed">
              Scalable design patterns and efficient data handling implemented to ensure high performance.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-accent/10 border border-accent/20 rounded-sm flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif uppercase mb-4 text-accent italic">"Building for Scalability"</h3>
            <p className="text-accent/80 font-sans leading-relaxed">
              Focusing on clean code and robust backends to create software that lasts.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
