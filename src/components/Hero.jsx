import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Nama Kamu"; // <-- Jangan lupa ubah ini lagi

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullName.substring(0, text.length + 1));
        if (text === fullName) setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        setText(fullName.substring(0, text.length - 1));
        if (text === '') setIsDeleting(false);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullName]);

  // Fungsi smooth scroll untuk tombol di dalam Hero
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-slate-950 flex items-center justify-center p-4 pt-28 overflow-hidden">
      {/* Menggunakan lg:flex-row dan gap-16 agar jaraknya lebih lega dan rapi */}
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Kiri: Kotak Teks */}
        <div className="flex-1 w-full max-w-2xl bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-slate-800 z-10">
          <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-400 text-xs ml-4 font-mono">profil_saya.exe</span>
          </div>
          
          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-emerald-400 font-mono mb-2">
              <span className="text-pink-500">➜</span> ~ halo, selamat datang!
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-2 h-12 md:h-16">
              Saya <span className="text-cyan-400">{text}</span><span className="text-cyan-400 animate-pulse">|</span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl text-slate-300 font-mono mb-6">
              <span className="text-pink-500">{">"}</span> Web Developer & IT Support
            </h2>
            
            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base font-sans text-justify">
              Saya merancang website yang interaktif dan mudah digunakan, sekaligus memastikan sistem di baliknya berjalan lancar. Saya senang menjembatani antara desain web modern dengan infrastruktur IT yang handal dan aman.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 font-mono">
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 px-6 py-3 hover:bg-cyan-500/20 transition-all rounded text-center text-sm tracking-wide cursor-pointer"
              >
                Lihat Portofolio
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-slate-400 hover:text-white px-6 py-3 transition-all text-center text-sm flex items-center justify-center border border-transparent hover:border-slate-700 rounded tracking-wide cursor-pointer"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>

        {/* Kanan: Foto Profil - Diperbesar & Animasi Melayang */}
        <div className="relative group w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 flex-shrink-0 mx-auto lg:mx-0 transition-transform duration-700 ease-in-out hover:-translate-y-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse"></div>
          
          <div className="relative w-full h-full bg-slate-900 rounded-full p-2 lg:p-3 border border-slate-700 shadow-2xl">
            <img 
              src="portofolio-saya\src\assets\foto_jas-removebg-preview.png" 
              alt="Foto Profil" 
              className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;