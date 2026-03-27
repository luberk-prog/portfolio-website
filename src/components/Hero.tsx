"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary filter blur-[120px] opacity-20 rounded-full" />
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-secondary filter blur-[120px] opacity-20 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative inline-block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 glass">
            <Image 
              src={getAssetPath("/profile_original.jpg")} 
              alt="Emmanuel Amoh-Dawo" 
              fill
              className="object-cover scale-110"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium tracking-wide mb-4">
            Hi, I'm Emmanuel Amoh-Dawo
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building scalable and <br />
            <span className="gradient-text">efficient software</span> solutions
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
            Computer Science student focusing on Backend Development and Software Engineering.
            Aspirant developer passionate about solving complex problems.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass rounded-full font-medium hover:bg-white/5 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex items-center justify-center space-x-6 text-foreground/40"
        >
          <a href="https://github.com/luberk-prog" className="hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/emmanuel-amoh-dawo" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:amohdawo123@gmail.com" className="hover:text-primary transition-colors"><Mail size={20} /></a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
