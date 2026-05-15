import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FadeIn } from './Reveal';

// Custom Social Icons since Lucide removed them
const WhatsAppIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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

const Contact = () => {
  const socials = [
    {
      name: 'WhatsApp',
      Icon: WhatsAppIcon,
      color: 'bg-green-500',
      link: 'https://wa.me/yournumber',
      label: 'Fast Response'
    },
    {
      name: 'Instagram',
      Icon: InstagramIcon,
      color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600',
      link: 'https://instagram.com/yourusername',
      label: '@yourprofile'
    },
    {
      name: 'YouTube',
      Icon: YoutubeIcon,
      color: 'bg-red-600',
      link: 'https://youtube.com/yourchannel',
      label: 'Watch Projects'
    },
    {
      name: 'Facebook',
      Icon: FacebookIcon,
      color: 'bg-blue-600',
      link: 'https://facebook.com/yourprofile',
      label: 'Personal Page'
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-xs mb-3">Contact</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Let's Connect</h3>
            <div className="mt-4 w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socials.map((social, index) => (
            <FadeIn key={social.name} delay={index * 0.15}>
              <motion.a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-10 bg-slate-50 dark:bg-slate-800 rounded-[3rem] border-2 border-slate-100 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-500 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className={`w-20 h-20 ${social.color} text-white rounded-[2rem] flex items-center justify-center text-3xl mb-8 shadow-xl transform group-hover:rotate-12 transition-transform duration-500`}>
                  <social.Icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{social.name}</h4>
                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-6 uppercase tracking-wider">{social.label}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-widest">
                  Connect Now
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* Big Interactive CTA */}
        <FadeIn delay={0.6}>
          <div className="mt-20 relative p-1 lg:p-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-[4rem] animate-gradient-x shadow-2xl overflow-hidden">
            <div className="relative z-10 p-12 lg:p-20 bg-white dark:bg-slate-900 rounded-[3.8rem] text-center overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

              <div className="relative z-20">
                <h4 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                  Have a great project <br /> in mind?
                </h4>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                  I'm currently available for freelance work and full-time positions. Let's create something extraordinary together.
                </p>
                <motion.a 
                  href="mailto:your@email.com" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-12 py-6 bg-blue-600 text-white font-black rounded-3xl shadow-2xl shadow-blue-500/40 hover:bg-blue-700 transition-all gap-3"
                >
                  <Mail className="w-6 h-6" />
                  Send Me An Email
                </motion.a>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Contact;
