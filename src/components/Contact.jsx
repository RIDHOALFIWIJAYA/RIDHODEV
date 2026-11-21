import { Reveal } from './Reveal';
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from './Icons';

const contacts = [
  { name: 'WhatsApp', label: '6283140470146', Icon: WhatsAppIcon, href: 'https://wa.me/6283140470146' },
  { name: 'GitHub', label: 'RIDHOALFIWIJAYA', Icon: GithubIcon, href: 'https://github.com/RIDHOALFIWIJAYA' },
  { name: 'Instagram', label: '@ridho.alfi.py', Icon: InstagramIcon, href: 'https://www.instagram.com/ridho.alfi.py/' },
  { name: 'YouTube', label: '@rid.xyz1', Icon: YoutubeIcon, href: 'https://youtube.com/@rid.xyz1?si=bNMk5fW51z_gqfnC' },
  { name: 'Facebook', label: 'ridho.770678', Icon: FacebookIcon, href: 'https://www.facebook.com/ridho.770678' },
];

const Contact = () => {
  return (
    <section id="contact" className="border-t border-ink/10 py-20 dark:border-paper/10 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <h2 className="text-section text-ink dark:text-paper">Hubungi saya</h2>
          <p className="mt-4 max-w-md text-lg text-concrete dark:text-ash">
            Untuk diskusi proyek atau kolaborasi, pilih tautan yang paling nyaman untuk Anda.
          </p>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <ul className="border-t border-ink/10 dark:border-paper/10">
            {contacts.map(({ name, label, Icon, href }) => (
              <li key={name} className="border-b border-ink/10 dark:border-paper/10">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center gap-4 py-3 transition-colors hover:text-accent-ink dark:hover:text-accent"
                >
                  <Icon className="h-5 w-5 shrink-0 text-concrete group-hover:text-accent-ink dark:text-ash dark:group-hover:text-accent" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-ink dark:text-paper">{name}</span>
                    <span className="block truncate text-sm text-concrete dark:text-ash">{label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
