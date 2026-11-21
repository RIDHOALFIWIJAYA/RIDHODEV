import { Reveal } from './Reveal';

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML', 'CSS'] },
  { category: 'Backend dan alat', items: ['Node.js', 'Express', 'PHP', 'Python', 'Git', 'GitHub', 'Postman', 'Vercel'] },
  { category: 'Desain', items: ['Figma', 'Responsive design', 'UI/UX', 'Canva'] },
];

const journey = [
  {
    period: '2023 sampai sekarang',
    role: 'Frontend developer',
    context: 'Proyek mandiri dan freelance',
    description: 'Membangun aplikasi web responsif dengan React dan Tailwind CSS, dengan perhatian pada kecepatan muat.',
  },
  {
    period: '2022 sampai 2023',
    role: 'Belajar arsitektur web',
    context: 'Kursus mandiri',
    description: 'Mempelajari dasar pengembangan web, struktur data, dan arsitektur aplikasi web modern.',
  },
];

const About = () => {
  return (
    <section id="about" className="border-t border-ink/10 py-20 dark:border-paper/10 lg:py-28">
      <div className="shell">
        <Reveal>
          <h2 className="text-section text-ink dark:text-paper">Tentang saya</h2>
          <p className="mt-4 max-w-2xl text-lg text-concrete dark:text-ash">
            Saya bekerja di dua sisi aplikasi, antarmuka dan layanan. Daftar di bawah merangkum alat yang saya pakai, bukan klaim sertifikasi.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal direction="right">
            <h3 className="text-xl text-ink dark:text-paper">Keahlian</h3>
            <dl className="mt-8 space-y-8">
              {skills.map((group) => (
                <div key={group.category} className="border-t border-ink/10 pt-4 dark:border-paper/10">
                  <dt className="text-sm text-ink dark:text-paper">{group.category}</dt>
                  <dd className="mt-2 leading-relaxed text-concrete dark:text-ash">
                    {group.items.join(', ')}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <h3 className="text-xl text-ink dark:text-paper">Perjalanan</h3>
            <ol className="mt-8 space-y-10">
              {journey.map((item) => (
                <li key={item.period} className="border-t border-ink/10 pt-4 dark:border-paper/10">
                  <p className="text-sm text-accent-ink dark:text-accent">{item.period}</p>
                  <p className="mt-2 text-lg text-ink dark:text-paper">{item.role}</p>
                  <p className="text-sm text-concrete dark:text-ash">{item.context}</p>
                  <p className="mt-3 text-concrete dark:text-ash">{item.description}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
