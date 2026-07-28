import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Navbar />
      
      <main className="relative">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-blue-400/5 rounded-full blur-[120px] animate-blob-1"></div>
          <div className="absolute top-[60%] right-[10%] w-[25vw] h-[25vw] bg-purple-400/5 rounded-full blur-[120px] animate-blob-2"></div>
        </div>

        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              RIDHO.DEV
            </span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
          <p className="border-t border-slate-100 dark:border-slate-800 pt-8">
            &copy; {new Date().getFullYear()} Ridho Project. Dibuat dengan hati dan ketulusan.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionSkeleton() {
  return (
    <div className="py-24 lg:py-32 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default App;
