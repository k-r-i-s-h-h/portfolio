import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact'; // Changed from ContactForm
import { Footer } from './components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <section id="projects" className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Portfolio</span>
            <h2 className="text-4xl font-bold mt-4 mb-4">Featured Projects</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A selection of my recent work across web and mobile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
