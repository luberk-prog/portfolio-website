"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(`https://formspree.io/f/xwvaplbe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ name, email: email, message: message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl md:text-5xl font-serif uppercase leading-tight mb-8 text-foreground">
          Let's build something <br />
          <span className="text-accent italic">extraordinary</span> together.
        </h3>
        <p className="text-lg text-foreground-muted mb-12 font-sans leading-relaxed">
          Whether you have a question or just want to say hi, my inbox is always open.
          I'm currently looking for new opportunities and would love to hear from you!
        </p>

        <div className="space-y-10">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-accent/10 text-accent rounded-sm"><Mail size={24} /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-1">Email</p>
              <p className="font-serif text-xl">amohdawo123@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="p-4 bg-accent/10 text-accent rounded-sm"><MapPin size={24} /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-1">Location</p>
              <p className="font-serif text-xl">Accra, Ghana</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="p-4 bg-accent/10 text-accent rounded-sm"><Phone size={24} /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-1">Phone</p>
              <p className="font-serif text-xl">0534664043</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <form
          className="space-y-8 p-10 bg-background-alt border border-white/5 rounded-sm relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* Success Overlay */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-10 bg-background/95 flex flex-col items-center justify-center text-center p-8"
            >
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-3xl font-serif uppercase mb-4">Message Sent!</h4>
              <p className="text-foreground-muted mb-8 font-sans">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="px-10 py-3 border border-foreground text-foreground uppercase tracking-widest font-bold text-xs hover:bg-foreground hover:text-background transition-all"
              >
                Send Another
              </button>
            </motion.div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 pl-1">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 bg-background border border-white/10 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans text-foreground placeholder:text-foreground/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 pl-1">Email</label>
              <input
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-background border border-white/10 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans text-foreground placeholder:text-foreground/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 pl-1">Message</label>
              <textarea
                rows={6}
                required
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-4 bg-background border border-white/10 rounded-sm focus:outline-none focus:border-accent transition-colors font-sans text-foreground placeholder:text-foreground/20 resize-none"
              ></textarea>
            </div>
          </div>

          {status === "error" && (
            <p className="text-red-400 text-xs pl-1 font-sans">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-5 bg-accent text-white rounded-sm font-serif text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed group shadow-lg"
          >
            {status === "loading" ? (
              <>
                Sending...
                <Loader2 size={24} className="animate-spin" />
              </>
            ) : (
              <>
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
