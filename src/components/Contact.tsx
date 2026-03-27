"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://portfolio-website-2cd8.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error("Submission Error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please check your connection.");
    }
  };

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
        className="space-y-6 p-8 glass rounded-3xl relative overflow-hidden"
        onSubmit={handleSubmit}
      >
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 z-10 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
            <p className="text-foreground/60 mb-6">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button 
              type="button"
              onClick={() => setStatus("idle")}
              className="px-6 py-2 glass rounded-xl hover:bg-white/5 transition-colors"
            >
              Send Another
            </button>
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest pl-2">Name</label>
            <input 
              type="text" 
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-geist-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest pl-2">Email</label>
            <input 
              type="email" 
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-geist-mono"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest pl-2">Message</label>
          <textarea 
            rows={5}
            required
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-geist-mono resize-none"
          ></textarea>
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm pl-2">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              Sending...
              <Loader2 size={18} className="animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>
      </motion.form>
    </div>
  );
};
