import { Rocket, Code2, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { FadeIn } from './Reveal';
import { GithubIcon, YoutubeIcon, InstagramIcon, FacebookIcon } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px] animate-blob-1" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-[120px] animate-blob-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 border border-blue-100 dark:border-blue-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Projects
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8">
                Turning Vision Into <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-2">
                  Digital Reality.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="font-bold text-slate-900 dark:text-blue-400">Ridho</span>. a Frontend Developer passionate about crafting fast, responsive, and engaging web applications with React & modern web tools.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <a 
                  href="#projects" 
                  className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-2 hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="px-10 py-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-black rounded-2xl transition-all hover:border-blue-500/50 hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  Let's Talk
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="mt-12 flex justify-center lg:justify-start gap-6">
                {[
                  { Icon: GithubIcon, href: "#" },
                  { Icon: YoutubeIcon, href: "#" },
                  { Icon: InstagramIcon, href: "#" },
                  { Icon: FacebookIcon, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="text-slate-400 dark:text-slate-500 hover:text-blue-600 hover:scale-110 hover:rotate-6 transition-all inline-block"
                  >
                    <social.Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="flex-1 relative">
            <FadeIn delay={0.5} direction="left">
              <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] mx-auto group animate-float">
                <div className="absolute inset-[-10%] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
                
                <div className="relative h-full bg-white dark:bg-slate-900 p-5 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:scale-[1.02] hover:rotate-1">
                  <img 
                    src={heroImg} 
                    alt="Ridho Profile" 
                    fetchpriority="high"
                    className="w-full h-full object-cover rounded-[3rem] transition-all duration-700"
                  />
                  
                  <div className="absolute -top-8 -right-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-50 dark:border-slate-700 animate-float" style={{ animationDuration: '4s' }}>
                    <Rocket className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-50 dark:border-slate-700 animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                    <Code2 className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
