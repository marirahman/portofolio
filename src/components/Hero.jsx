import { ArrowRight, Code, User, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-950 flex items-center justify-center p-4 pt-24 overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Kiri: Kotak Teks ala Terminal */}
        <div className="flex-1 w-full bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-slate-800 z-10">
          <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-400 text-xs ml-4 font-mono">profil_saya.exe</span>
          </div>
          
          <div className="p-6 sm:p-8">
            <p className="text-emerald-400 font-mono mb-2">
              <span className="text-pink-500">➜</span> ~ halo, selamat datang!
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-2">
              Saya <span className="text-cyan-400">Nama Kamu</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-300 font-mono mb-6">
              <span className="text-pink-500"></span> Web Developer & IT Support
            </h2>
            
            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base font-sans">
              Saya merancang website yang interaktif dan mudah digunakan, sekaligus memastikan sistem di baliknya berjalan lancar. Saya senang menjembatani antara desain web modern dengan infrastruktur IT yang handal dan aman.
            </p>
            
            {/* Tombol dengan bahasa yang mudah dimengerti */}
            <div className="flex flex-col sm:flex-row gap-4 font-mono">
              <a href="#projects" className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 px-6 py-3 hover:bg-cyan-500/20 transition-all rounded text-center text-sm tracking-wide">
                Lihat Portofolio
              </a>
              <a href="#contact" className="text-slate-400 hover:text-white px-6 py-3 transition-all text-center text-sm flex items-center justify-center border border-transparent hover:border-slate-700 rounded tracking-wide">
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>

        {/* Kanan: Foto Profil dengan Efek Glowing */}
        <div className="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          {/* Latar Belakang Neon (Glowing Orb) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition duration-700 animate-pulse"></div>
          
          {/* Frame Foto */}
          <div className="relative w-full h-full bg-slate-900 rounded-full p-2 border border-slate-700 shadow-2xl">
            <img 
              // GANTI URL DI BAWAH INI DENGAN LINK FOTO KAMU
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
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