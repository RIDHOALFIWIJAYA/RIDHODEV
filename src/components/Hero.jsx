import { motion } from 'framer-motion';
import { Rocket, Code2, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { FadeIn } from './Reveal';

// Custom Social Icons since Lucide removed them
const GithubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
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
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 w-full h-1.5 bg-blue-600/30 rounded-full origin-left"
                  />
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="font-bold text-slate-900 dark:text-blue-400">Ridho</span>. A creative developer focused on building immersive, high-performance web experiences that leave an impact.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <motion.a 
                  href="#projects" 
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-black rounded-2xl transition-all hover:border-blue-500/50"
                >
                  Let's Talk
                </motion.a>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={1}>
              <div className="mt-12 flex justify-center lg:justify-start gap-6">
                {[
                  { Icon: GithubIcon, href: "#" },
                  { Icon: YoutubeIcon, href: "#" },
                  { Icon: InstagramIcon, href: "#" },
                  { Icon: FacebookIcon, href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10, color: "#2563eb" }}
                    className="text-slate-400 dark:text-slate-500 transition-colors"
                  >
                    <social.Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image / Visual */}
          <div className="flex-1 relative">
            <FadeIn delay={0.5} direction="left">
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] mx-auto group"
              >
                {/* Decorative Background Circles */}
                <div className="absolute inset-[-10%] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
                
                {/* Main Card */}
                <motion.div 
                  whileHover={{ rotateY: 15, rotateX: -10, scale: 1.02 }}
                  className="relative h-full bg-white dark:bg-slate-900 p-5 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 transition-all duration-300 preserve-3d"
                >
                  <img 
                    src={heroImg} 
                    alt="Ridho Profile" 
                    className="w-full h-full object-cover rounded-[3rem] transition-all duration-700 "
                  />
                  
                  {/* Floating Elements on Image */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-8 -right-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-50 dark:border-slate-700"
                  >
                    <Rocket className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-50 dark:border-slate-700"
                  >
                    <Code2 className="w-8 h-8 text-purple-600" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
