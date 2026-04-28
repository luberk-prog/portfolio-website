"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

export const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-accent/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-foreground/10 grayscale hover:grayscale-0 transition-all duration-700">
          <Image
            src={getAssetPath("/profile_original.jpg")}
            alt="Emmanuel Amoh-Dawo"
            fill
            className="object-cover scale-105 hover:scale-100 transition-all duration-700"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col h-full justify-center"
      >
        <h3 className="text-3xl font-serif uppercase mb-6 leading-tight text-foreground">
          Software engineering student with a focus on <span className="text-accent">Backend systems</span>.
        </h3>
        <div className="space-y-6 text-lg text-foreground-muted leading-relaxed font-sans">
          <p>
            I am a passionate Computer Science student at Ghana Communication Technology University. 
            My journey in tech is driven by a curiosity for how complex systems work under the hood.
          </p>
          <p>
            I specialize in building scalable and efficient backend solutions, but I also enjoy creating 
            seamless user experiences on the frontend. With a strong foundation in Object-Oriented Programming, 
            I aim to create software that makes a meaningful impact.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-foreground/10">
          <div>
            <h4 className="font-serif text-accent uppercase tracking-widest text-sm mb-2">Location</h4>
            <p className="text-lg text-foreground font-medium">Accra, Ghana</p>
          </div>
          <div>
            <h4 className="font-serif text-accent uppercase tracking-widest text-sm mb-2">Education</h4>
            <p className="text-lg text-foreground font-medium">BSc. Computer Science</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
