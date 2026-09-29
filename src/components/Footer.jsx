const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Indikator Status */}
        <div className="flex items-center gap-3 border border-slate-800 bg-slate-900 px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
          <span>System Status: <span className="text-green-400">Online</span></span>
        </div>

        {/* Copyright Log */}
        <div className="text-center md:text-left text-slate-500">
          © {new Date().getFullYear()} <span className="text-slate-300">SYS.ADMIN</span> // Compiled with React + Tailwind
        </div>

        {/* Links */}
        <div className="flex gap-6 text-xs uppercase tracking-wider">
          <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <span className="text-slate-800">|</span>
          <a href="#" className="hover:text-pink-400 transition-colors">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;