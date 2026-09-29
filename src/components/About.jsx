const About = () => {
  const webSkills = ['React.js', 'Tailwind CSS', 'JavaScript ES6+', 'RESTful API'];
  const itSkills = ['Linux Administration', 'Jaringan Dasar', 'Hardware Diagnostic', 'Tech Support'];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex items-center gap-4 mb-16" data-aos="fade-up">
          <div className="h-px bg-slate-800 flex-1"></div>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-white tracking-widest uppercase">
            <span className="text-cyan-500 mr-2">01.</span>Tentang Saya
          </h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Efek animasi dari kanan */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-700/50 p-8 rounded-xl shadow-2xl" data-aos="fade-right">
            <p className="text-slate-300 leading-relaxed font-sans mb-6 text-justify">
              Saya memiliki ketertarikan besar pada dua dunia: membangun website yang menarik dan fungsional, serta memastikan komputer dan jaringan beroperasi dengan maksimal. Kombinasi ini memungkinkan saya merancang web yang cantik sekaligus memecahkan masalah teknis (troubleshooting) dengan efisien.
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Siap bekerja dan berkontribusi
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {/* Efek animasi dari bawah dengan delay */}
            <div className="bg-slate-900/40 border border-slate-700/50 p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-cyan-400 font-mono mb-4 text-lg">💻 Web Development</h3>
              <ul className="space-y-3 font-mono text-sm text-slate-300">
                {webSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-cyan-500">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/40 border border-slate-700/50 p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-pink-400 font-mono mb-4 text-lg">⚙️ IT Support</h3>
              <ul className="space-y-3 font-mono text-sm text-slate-300">
                {itSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-pink-500">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
