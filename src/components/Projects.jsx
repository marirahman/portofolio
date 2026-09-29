import { ExternalLink, Code } from 'lucide-react';
import { projectData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-16" data-aos="fade-up">
          <div className="h-px bg-slate-800 flex-1"></div>
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-white tracking-widest uppercase">
            <span className="text-cyan-500 mr-2">02.</span>Portofolio
          </h2>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-500" data-aos="fade-up" data-aos-delay={index * 100}>
              
              <div className="relative h-60 overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 font-mono">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-950 text-cyan-400 border border-slate-800 px-3 py-1 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6 font-mono text-sm border-t border-slate-800 pt-6">
                  <a href={project.githubUrl} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    Lihat Kode
                  </a>
                  <a href={project.liveUrl} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    Kunjungi Web
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;