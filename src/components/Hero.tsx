"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden bg-background">
      {/* Editorial Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <h1 className="text-[18vw] font-serif leading-none uppercase whitespace-nowrap">
          EMMANUEL AMOH-DAWO
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a 
              href="#contact"
              className="group inline-block px-4 py-1 rounded-full border border-accent text-accent text-sm font-medium mb-6 uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
            >
              Available for projects & internships <span className="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 text-foreground uppercase">
              Emmanuel <br />
              <span className="text-accent underline decoration-4 underline-offset-8">Amoh-Dawo</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted max-w-lg mb-10 leading-relaxed font-sans">
              Computer Science student & Software Engineer focused on building 
              <span className="text-foreground"> high-performance backend systems</span> and 
              <span className="text-foreground"> elegant digital experiences</span>.
            </p>

            <div className="flex flex-wrap gap-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-accent text-white rounded-sm font-serif text-xl uppercase tracking-wider flex items-center gap-3 transition-all hover:bg-opacity-90 shadow-lg"
              >
                View Work <ArrowRight size={20} />
              </motion.a>
              
              <motion.a
                href="/cv.pdf" // Placeholder path for CV
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-foreground text-foreground rounded-sm font-serif text-xl uppercase tracking-wider flex items-center gap-3 transition-all hover:bg-foreground hover:text-background"
              >
                Download CV <Download size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center space-x-8 text-foreground/40"
          >
            <a href="https://github.com/luberk-prog" className="hover:text-accent transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/emmanuel-amoh-dawo" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:amohdawo123@gmail.com" className="hover:text-accent transition-colors"><Mail size={24} /></a>
          </motion.div>
        </div>

        {/* Right - Profile Image / Visual Area */}
        <div className="flex-1 order-1 md:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src={getAssetPath("/profile_original.jpg")} 
              alt="Emmanuel Amoh-Dawo" 
              fill
              className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </motion.div>
          
          {/* Decorative Badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-40 h-40 hidden lg:flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full border border-accent/30 rounded-full flex items-center justify-center scale-110">
              <span className="font-serif text-accent text-8xl opacity-10">01</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-10 opacity-30 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-serif uppercase tracking-widest text-[10px] transform rotate-90 mb-8">Scroll Down</span>
          <div className="w-[1px] h-20 bg-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};
