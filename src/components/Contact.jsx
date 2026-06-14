import { Mail, Send } from 'lucide-react';
import { FadeIn } from './Reveal';
import { WhatsAppIcon, YoutubeIcon, InstagramIcon, FacebookIcon } from './Icons';

const Contact = () => {
  const socials = [
    {
      name: 'WhatsApp',
      Icon: WhatsAppIcon,
      color: 'bg-green-500',
      link: 'https://wa.me/6283140470146r',
      label: 'Chat me'
    },
    {
      name: 'Instagram',
      Icon: InstagramIcon,
      color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600',
      link: 'https://www.instagram.com/ridho.alfi.py/',
      label: '@ridho.alfi.py'
    },
    {
      name: 'YouTube',
      Icon: YoutubeIcon,
      color: 'bg-red-600',
      link: 'https://youtube.com/@rid.xyz1?si=bNMk5fW51z_gqfnC',
      label: 'My channel in youtube'
    },
    {
      name: 'Facebook',
      Icon: FacebookIcon,
      color: 'bg-blue-600',
      link: 'https://www.facebook.com/ridho.770678',
      label: 'My facebook page'
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-10 bg-slate-50 dark:bg-slate-800 rounded-[3rem] border-2 border-slate-100 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-500 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:scale-105"
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
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-20 relative p-1 lg:p-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-[4rem] animate-gradient-x shadow-2xl overflow-hidden">
            <div className="relative z-10 p-12 lg:p-20 bg-white dark:bg-slate-900 rounded-[3.8rem] text-center overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

              <div className="relative z-20">
                <h4 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                  Have a great project <br /> in mind?
                </h4>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                  I'm currently available for freelance work and full-time positions. Let's create something extraordinary together.
                </p>
                <a 
                  href="ridhoalfiwijaya@email.com" 
                  className="inline-flex items-center px-12 py-6 bg-blue-600 text-white font-black rounded-3xl shadow-2xl shadow-blue-500/40 hover:bg-blue-700 transition-all gap-3 hover:scale-105 active:scale-95"
                >
                  <Mail className="w-6 h-6" />
                  Send Me An Email
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Contact;
