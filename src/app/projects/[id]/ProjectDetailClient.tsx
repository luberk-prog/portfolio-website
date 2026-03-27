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
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-8 text-foreground/60 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Overview
        </motion.button>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl overflow-hidden glass aspect-video relative"
          >
            <Image 
              src={getAssetPath(project.image)} 
              alt={project.title} 
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xl text-foreground/70 mb-8 font-geist-mono leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Github size={20} /> GitHub
                </a>
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 glass rounded-3xl">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary w-fit mb-4">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Technical Challenges</h3>
            <p className="text-foreground/60 font-geist-mono text-sm">
              Exploring the core engineering difficulties and architectural decisions made during development.
            </p>
          </div>
          <div className="p-8 glass rounded-3xl">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary w-fit mb-4">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">System Architecture</h3>
            <p className="text-foreground/60 font-geist-mono text-sm">
              Scalable design patterns and efficient data handling implemented to ensure high performance.
            </p>
          </div>
          <div className="p-8 glass rounded-3xl border-primary/20 bg-primary/5">
            <h3 className="text-xl font-bold mb-4 text-primary italic font-serif">"Building for Scalability"</h3>
            <p className="text-foreground/70 font-geist-mono text-sm">
              Focusing on clean code and robust backends to create software that lasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
