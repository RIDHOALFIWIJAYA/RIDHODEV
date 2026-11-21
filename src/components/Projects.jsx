import { useEffect, useRef, useState } from 'react';
import { useProjectsReveal, useScrollProgress } from '../lib/motion';
import { clearProjectCache, fetchProjects } from '../lib/projects';
import { Reveal } from './Reveal';

const formatDate = (value) =>
  new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));

const ProjectImage = ({ project }) => {
  const [failed, setFailed] = useState(false);
  if (!project.image || failed) return null;

  return (
    <img
      src={project.image}
      alt={project.imageAlt ?? `Tampilan proyek ${project.name}`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="mt-8 aspect-video w-full max-w-3xl border border-paper/15 object-cover"
    />
  );
};

const RepoLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-11 items-center text-accent-ink hover:underline dark:text-accent"
  >
    Lihat repo
  </a>
);

const ProjectList = ({ projects }) => {
  const listRef = useRef(null);
  useProjectsReveal(listRef);

  const [lead, ...rest] = projects;

  return (
    <div ref={listRef} className="mt-12">
      <article data-project-card className="border border-surface bg-surface p-6 dark:border-paper/15 sm:p-8">
        <p className="text-sm text-accent-ink dark:text-accent">Proyek terbaru</p>
        <h3 className="mt-3 text-3xl text-paper dark:text-paper sm:text-4xl">{lead.name}</h3>
        <p className="mt-5 max-w-3xl text-lg text-ash dark:text-ash">{lead.description}</p>
        <ProjectImage key={lead.id} project={lead} />
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper/15 pt-5 text-sm dark:border-paper/15">
          <span className="text-paper dark:text-paper">{lead.language}</span>
          <span className="text-ash dark:text-ash">Diperbarui {formatDate(lead.updatedAt)}</span>
          <span className="ml-auto">
            <RepoLink href={lead.url} />
          </span>
        </div>
      </article>

      <div className="mt-8 border-t border-ink/10 dark:border-paper/15">
        {rest.map((project, index) => (
          <article
            key={project.id}
            data-project-card
            className="grid gap-3 border-b border-ink/10 py-5 dark:border-paper/15 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6"
          >
            <span className="text-sm text-concrete dark:text-ash">{String(index + 2).padStart(2, '0')}</span>
            <div className="min-w-0">
              <h3 className="text-lg text-ink dark:text-paper">{project.name}</h3>
              <p className="mt-1 text-concrete dark:text-ash">{project.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm sm:justify-end">
              <span className="text-ink dark:text-paper">{project.language}</span>
              <span className="text-concrete dark:text-ash">{formatDate(project.updatedAt)}</span>
              <RepoLink href={project.url} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const contentRef = useRef(null);
  const lineRef = useRef(null);
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useScrollProgress(contentRef, lineRef);

  useEffect(() => {
    const controller = new AbortController();

    fetchProjects({ signal: controller.signal, force: attempt > 0 })
      .then(setProjects)
      .catch((cause) => {
        if (cause.name === 'AbortError') return;
        setError(cause.message.includes('Batas permintaan') ? cause.message : 'Proyek dari GitHub belum bisa dimuat.');
      });

    return () => controller.abort();
  }, [attempt]);

  const retry = () => {
    clearProjectCache();
    setError('');
    setProjects(null);
    setAttempt((value) => value + 1);
  };

  return (
    <section id="projects" className="border-t border-ink/10 py-20 dark:border-paper/10 lg:py-28">
      <div ref={contentRef} className="shell">
        <Reveal>
          <h2 className="text-section text-ink dark:text-paper">Proyek</h2>
          <p className="mt-4 max-w-2xl text-lg text-concrete dark:text-ash">
            Enam repo publik terbaru dari GitHub saya yang punya deskripsi. Sumber data ada di tautan tiap entri.
          </p>
        </Reveal>

        <div
          ref={lineRef}
          aria-hidden="true"
          className="mt-12 h-px w-full origin-left scale-x-0 bg-accent motion-reduce:scale-x-100"
        />

        {projects && projects.length > 0 && <ProjectList projects={projects} />}

        {projects && projects.length === 0 && (
          <p className="mt-6 text-concrete dark:text-ash" role="status">
            Belum ada repo publik dengan deskripsi untuk ditampilkan.
          </p>
        )}

        {error && (
          <div className="mt-6" role="alert">
            <p className="text-ink dark:text-paper">{error}</p>
            <button
              type="button"
              onClick={retry}
              className="mt-4 inline-flex min-h-11 items-center border border-ink px-4 text-sm text-ink transition-colors hover:bg-ink hover:text-paper dark:border-paper dark:text-paper dark:hover:bg-paper dark:hover:text-ink"
            >
              Coba lagi
            </button>
          </div>
        )}

        {!projects && !error && (
          <p className="mt-6 text-concrete dark:text-ash" role="status">
            Memuat proyek dari GitHub...
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
