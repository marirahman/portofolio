import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Mengaktifkan animasi saat web dimuat
  useEffect(() => {
    AOS.init({
      duration: 800, // Kecepatan animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali saat di-scroll ke bawah
      offset: 100, // Jarak trigger animasi
    });
  }, []);

  return (
    <div className="font-sans bg-slate-950 text-slate-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;