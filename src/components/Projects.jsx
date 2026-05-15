import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { FadeIn } from './Reveal';

const GithubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality, payment integration, and responsive design.',
      tech: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for managing daily tasks with drag-and-drop features and real-time updates.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1632&auto=format&fit=crop',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather forecasting app that provides real-time data using external APIs.',
      tech: ['JavaScript', 'Vite', 'API Integration'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built for showcase personal projects and skills.',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-xs mb-3">Portfolio</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Featured Projects</h3>
            <div className="mt-4 w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={0.2 * index} direction={index % 2 === 0 ? "right" : "left"}>
              <motion.div 
                whileHover={{ y: -15 }}
                className="group relative bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.15)]"
              >
                {/* Image Area */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-5 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link} 
                        className="p-5 bg-white text-slate-900 rounded-[1.5rem] hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github} 
                        className="p-5 bg-white text-slate-900 rounded-[1.5rem] hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
                      >
                        <GithubIcon className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-black px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800 uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-2 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                      <Layers className="w-5 h-5" />
                      <span className="text-xs font-black uppercase tracking-widest">Case Study</span>
                    </div>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="text-blue-600 dark:text-blue-400 font-black text-sm flex items-center gap-2"
                    >
                      Explore Project <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Dynamic Footer CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-24 text-center">
            <motion.a 
              href="https://github.com/" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-[2rem] hover:shadow-2xl transition-all gap-3"
            >
              <GithubIcon className="w-6 h-6" />
              See More on GitHub
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
