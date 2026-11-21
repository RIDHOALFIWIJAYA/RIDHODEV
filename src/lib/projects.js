const username = 'RIDHOALFIWIJAYA';
const endpoint = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`;
const storageKey = 'ridhodev.projects.v1';

export const projectMedia = {};

let cache = null;

const withMedia = (projects) =>
  projects.map((project) => ({
    ...project,
    ...(projectMedia[project.name] ?? {}),
  }));

const readCache = () => {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    const stored = JSON.parse(raw);
    if (!Array.isArray(stored.projects)) return null;
    cache = withMedia(stored.projects);
    return cache;
  } catch (error) {
    void error;
    return null;
  }
};

const writeCache = (projects) => {
  cache = projects;
  try {
    localStorage.setItem(storageKey, JSON.stringify({ projects }));
  } catch (error) {
    void error;
  }
};

const toProject = (repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  url: repo.html_url,
  language: repo.language ?? 'Bahasa tidak tercatat',
  updatedAt: repo.updated_at,
  ...(projectMedia[repo.name] ?? {}),
});

export async function fetchProjects({ signal, force = false } = {}) {
  if (!force) {
    const stored = readCache();
    if (stored) return stored;
  }

  const response = await fetch(endpoint, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('Batas permintaan GitHub tercapai. Coba lagi beberapa saat.');
    }
    throw new Error('Proyek dari GitHub belum bisa dimuat.');
  }

  const repos = await response.json();
  const projects = withMedia(
    repos
      .filter((repo) => repo.description && !repo.fork && !repo.archived)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6)
      .map(toProject)
  );

  writeCache(projects);
  return projects;
}

export function clearProjectCache() {
  cache = null;
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    void error;
  }
}
