"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative glass rounded-3xl overflow-hidden"
        >
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-110 ${project.underConstruction ? 'blur-sm grayscale' : 'grayscale group-hover:grayscale-0'}`}
            />
            {project.underConstruction ? (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <span className="text-white font-bold tracking-tighter text-2xl rotate-[-5deg] border-2 border-white/40 px-4 py-2 bg-black/50 backdrop-blur-md">
                  COMING SOON
                </span>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Github size={24} />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <ExternalLink size={24} />
                </a>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[10px] uppercase tracking-wider text-primary font-bold">
                  {tech}
                </span>
              ))}
            </div>
            {project.underConstruction ? (
              <h3 className="text-xl font-bold mb-2 opacity-50">
                {project.title}
              </h3>
            ) : (
              <Link href={`/projects/${project.id}`}>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
              </Link>
            )}
            <p className="text-foreground/60 text-sm line-clamp-3 mb-6 font-geist-mono">
              {project.description}
            </p>
            
            {!project.underConstruction && (
              <Link 
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-2 transition-transform"
              >
                EXPLORE CASE STUDY <ArrowRight size={14} />
              </Link>
            )}
            {project.underConstruction && (
              <span className="text-xs font-bold text-foreground/30 uppercase tracking-widest">
                Under Construction
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
