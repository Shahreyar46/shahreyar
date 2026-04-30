import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'plugin', label: 'Plugins' },
  { id: 'ecommerce', label: 'WooCommerce' },
  { id: 'integration', label: 'Integrations' },
] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]['id']>('all');

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <SEOHead title="Selected Work" description="A selection of WordPress plugins, WooCommerce extensions and SaaS-style products built by Md. Al-Shahreyar." />

      <section className="pt-32 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// projects</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">Selected Work</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A focused set of WordPress plugins and SaaS-style products I've designed, built and shipped, from solo authorship to large team collaborations.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  'px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider border transition-colors',
                  active === f.id
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20 font-mono">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
