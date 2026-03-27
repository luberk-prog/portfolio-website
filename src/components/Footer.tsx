export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold gradient-text">EA.</div>
        
        <div className="flex items-center space-x-8 text-sm opacity-60 font-geist-mono">
          <a href="https://github.com/luberk-prog" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/emmanuel-amoh-dawo" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:amohdawo123@gmail.com" className="hover:text-primary transition-colors">Email</a>
        </div>
        
        <div className="text-sm opacity-40 font-geist-mono">
          © {new Date().getFullYear()} Emmanuel Amoh-Dawo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
