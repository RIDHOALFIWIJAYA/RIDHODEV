import { Terminal, Briefcase, Award } from 'lucide-react';
import { FadeIn } from './Reveal';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'] },
    { category: 'Backend & Tools', items: ['Node.js', 'Express', 'Git & GitHub', 'Postman', 'Vercel','PHP','Python'] },
    { category: 'Design', items: ['Figma', 'Responsive Design', 'UI/UX Principles','Canva'] },
  ];

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Freelance / Personal Projects',
      period: '2023 - Present',
      description: 'Developing various responsive web applications using React and Tailwind CSS with a focus on performance.',
    },
    {
      role: 'Web Architecture Student',
      company: 'Self-Taught / Online Courses',
      period: '2022 - 2023',
      description: 'Mastering the fundamentals of web development, data structures, and modern frontend architecture.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-xs mb-3">About Me</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Tech stack and my Journey</h3>
            <div className="mt-4 w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-12">
            <FadeIn direction="right">
              <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-500/20">
                  <Terminal className="w-6 h-6" />
                </div>
                Tech Stack
              </h4>
            </FadeIn>
            
            <div className="space-y-10">
              {skills.map((skillGroup, groupIdx) => (
                <div key={skillGroup.category}>
                  <FadeIn delay={0.2 * groupIdx} direction="right">
                    <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5">
                      {skillGroup.category}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-6 py-3 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-[1.25rem] text-sm font-black border-2 border-slate-100 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:scale-105 hover:-translate-y-1 hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          <div>
            <FadeIn direction="left">
              <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-purple-600 text-white rounded-2xl shadow-xl shadow-purple-500/20">
                  <Briefcase className="w-6 h-6" />
                </div>
                Journey
              </h4>
            </FadeIn>
            
            <div className="space-y-10 relative">
              <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-transparent rounded-full opacity-20" />
              
              {experiences.map((exp, index) => (
                <FadeIn key={index} delay={0.3 * index} direction="left">
                  <div className="relative pl-20 group">
                    <div className="absolute left-6 top-0 w-5 h-5 bg-white dark:bg-slate-900 border-4 border-blue-600 rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-xl shadow-blue-500/30" />
                    
                    <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-700 hover:border-blue-500/30 hover:translate-x-2 transition-all shadow-sm group-hover:shadow-2xl group-hover:shadow-blue-500/5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h5 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                          {exp.role}
                        </h5>
                        <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-xs font-black whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-4">{exp.company}</p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.8}>
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] text-white flex items-center gap-6 shadow-2xl shadow-blue-500/20 group">
                <div className="p-4 bg-white/20 rounded-2xl group-hover:rotate-12 transition-transform">
                  <Award className="w-10 h-10" />
                </div>
                <div>
                  <h5 className="text-xl font-black">Certified Web Specialist</h5>
                  <p className="text-blue-100 opacity-80 text-sm">Recognized for building modern frontend architectures.</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
