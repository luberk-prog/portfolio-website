"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative aspect-square rounded-2xl overflow-hidden glass">
          <img
            src="/profile_original.jpg"
            alt="Emmanuel Amoh-Dawo"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-500"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4">Software engineering student with a focus on Backend systems.</h3>
        <p className="text-lg text-foreground/70 mb-6 font-geist-mono">
          I am a passionate Computer Science student at Ghana Communication Technology University. 
          My journey in tech is driven by a curiosity for how complex systems work under the hood. 
          I specialize in building scalable and efficient backend solutions, but I also enjoy creating 
          seamless user experiences on the frontend.
        </p>
        <p className="text-lg text-foreground/70 mb-8 font-geist-mono">
          With a strong foundation in Object-Oriented Programming and a problem-solving mindset, 
          I aim to create software that makes a meaningful impact.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 glass rounded-xl">
            <h4 className="font-bold text-primary">Location</h4>
            <p className="text-sm opacity-60 font-geist-mono">Accra, Ghana</p>
          </div>
          <div className="p-4 glass rounded-xl">
            <h4 className="font-bold text-primary">Education</h4>
            <p className="text-sm opacity-60 font-geist-mono">BSc. Computer Science</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
