import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // Fungsi untuk memaksa smooth scroll lewat JavaScript
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Angka 80 adalah jarak agar judul tidak tertutup navbar
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Tutup menu mobile setelah diklik
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 group cursor-pointer">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-bold font-mono tracking-tighter flex items-center gap-1">
              <span className="text-slate-100">PORTOFOLIO</span>
              <span className="w-3 h-6 bg-cyan-500 animate-pulse ml-1"></span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8 font-mono text-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-400 hover:text-cyan-400 transition-colors relative group py-2 cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-500 hover:text-cyan-400 focus:outline-none font-mono text-xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 border-b border-slate-800' : 'max-h-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 font-mono">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-3 text-slate-400 hover:bg-slate-800/50 hover:text-cyan-400 rounded-md border-l-2 border-transparent hover:border-cyan-500 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;