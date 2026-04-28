"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

export const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="group flex flex-col bg-background-alt rounded-sm overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500"
        >
          <div className="aspect-[16/10] relative overflow-hidden">
            <Image
              src={getAssetPath(project.image)}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${project.underConstruction ? 'blur-sm grayscale' : 'grayscale group-hover:grayscale-0'}`}
            />
            {!project.underConstruction && (
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-background/90 text-foreground rounded-sm hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                  <Github size={24} />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-background/90 text-foreground rounded-sm hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                  <ExternalLink size={24} />
                </a>
              </div>
            )}
            {project.underConstruction && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <span className="text-white font-serif uppercase tracking-tighter text-3xl rotate-[-5deg] border border-white/40 px-6 py-2 bg-black/50 backdrop-blur-md">
                  COMING SOON
                </span>
              </div>
            )}
          </div>
          
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                  {tech}
                </span>
              ))}
            </div>
            
            {project.underConstruction ? (
              <h3 className="text-3xl font-serif uppercase mb-4 opacity-30 tracking-tight">
                {project.title}
              </h3>
            ) : (
              <Link href={`/projects/${project.id}`}>
                <h3 className="text-3xl font-serif uppercase mb-4 group-hover:text-accent transition-colors cursor-pointer tracking-tight">
                  {project.title}
                </h3>
              </Link>
            )}
            
            <p className="text-foreground-muted text-sm leading-relaxed mb-8 font-sans line-clamp-3">
              {project.description}
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/5">
              {!project.underConstruction ? (
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-foreground group-hover:text-accent transition-colors"
                >
                  Explore Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              ) : (
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/20 font-bold">
                  Under Construction
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
