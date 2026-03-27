"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-6">Let's build something <br /><span className="gradient-text">extraordinary</span> together.</h3>
        <p className="text-foreground/60 mb-10 font-geist-mono">
          Whether you have a question or just want to say hi, my inbox is always open. 
          I'm currently looking for new opportunities and would love to hear from you!
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-2xl text-primary"><Mail size={20} /></div>
            <div>
              <p className="text-sm opacity-50 uppercase font-bold tracking-tighter">Email</p>
              <p className="font-geist-mono text-xs sm:text-sm">amohdawo123@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-2xl text-primary"><MapPin size={20} /></div>
            <div>
              <p className="text-sm opacity-50 uppercase font-bold tracking-tighter">Location</p>
              <p className="font-geist-mono">Accra, Ghana</p>
            </div>
          </div>
          <div className="flex items-center space-x-8 text-sm opacity-60 font-geist-mono">
          <a href="https://github.com/luberk-prog" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/emmanuel-amoh-dawo" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:amohdawo123@gmail.com" className="hover:text-primary transition-colors">Email</a>
        </div>
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-2xl text-primary"><Phone size={20} /></div>
            <div>
              <p className="text-sm opacity-50 uppercase font-bold tracking-tighter">Phone</p>
              <p className="font-geist-mono">0534664043</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6 p-8 glass rounded-3xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest pl-2">Name</label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-geist-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest pl-2">Email</label>
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-geist-mono"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest pl-2">Message</label>
          <textarea 
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-geist-mono resize-none"
          ></textarea>
        </div>
        <button
          className="w-full py-4 bg-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Send Message
          <Send size={18} />
        </button>
      </motion.form>
    </div>
  );
};
