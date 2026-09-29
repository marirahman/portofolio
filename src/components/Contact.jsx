const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-16" data-aos="fade-up">
          <div className="h-px bg-slate-800 flex-1"></div>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-white tracking-widest uppercase">
            <span className="text-pink-500 mr-2">03.</span>Hubungi Saya
          </h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl max-w-2xl mx-auto relative overflow-hidden" data-aos="zoom-in">
          {/* Aksen garis atas neon */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-pink-500"></div>
          
          <p className="text-slate-400 mb-8 text-center text-sm sm:text-base">
            Tertarik untuk berdiskusi soal pekerjaan atau memiliki pertanyaan teknis? Jangan ragu untuk mengirim pesan.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300 mb-2 font-medium">Nama Lengkap</label>
              <input type="text" id="name" className="w-full bg-slate-950 border border-slate-700 text-slate-200 px-4 py-3 rounded focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Masukkan nama Anda" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 mb-2 font-medium">Email</label>
              <input type="email" id="email" className="w-full bg-slate-950 border border-slate-700 text-slate-200 px-4 py-3 rounded focus:outline-none focus:border-cyan-500 transition-colors" placeholder="email@domain.com" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-slate-300 mb-2 font-medium">Pesan</label>
              <textarea id="message" rows="4" className="w-full bg-slate-950 border border-slate-700 text-slate-200 px-4 py-3 rounded focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            
            <button type="button" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-4 rounded transition-all duration-300">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;