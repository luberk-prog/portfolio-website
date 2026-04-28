import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <Link
          href="/"
          className="text-3xl font-serif tracking-tighter text-foreground group"
        >
          EA<span className="text-accent group-hover:pl-1 transition-all">.</span>
        </Link>
        
        <div className="flex items-center space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="https://github.com/luberk-prog" className="text-foreground-muted hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/emmanuel-amoh-dawo" className="text-foreground-muted hover:text-accent transition-colors">LinkedIn</a>
          <a href="mailto:amohdawo123@gmail.com" className="text-foreground-muted hover:text-accent transition-colors">Email</a>
        </div>
        
        <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/20 font-bold font-sans">
          © {new Date().getFullYear()} Emmanuel Amoh-Dawo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
