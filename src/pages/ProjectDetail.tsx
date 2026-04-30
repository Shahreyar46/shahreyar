import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, projects } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <SEOHead title={project.title} description={project.tagline} />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-mono mb-10">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              / {project.category} · {project.year}
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{project.tagline}</p>

            {project.url && (
              <Button asChild className="mt-8 font-mono">
                <a href={project.url} target="_blank" rel="noreferrer">
                  Visit live plugin
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </motion.div>

          <div className="my-14 grid sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {[
              { label: 'Role', value: project.role },
              { label: 'Year', value: project.year },
              { label: 'Category', value: project.category },
            ].map((m) => (
              <div key={m.label} className="bg-card p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.label}</p>
                <p className="mt-1 font-display text-base font-semibold capitalize">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="prose-styles space-y-6 mb-14">
            <h2 className="font-display text-2xl font-semibold">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-14">
            <h2 className="font-display text-2xl font-semibold mb-5">Key contributions</h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-accent font-mono mt-1">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-14">
            <h2 className="font-display text-2xl font-semibold mb-5">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-sm px-3 py-1.5 rounded-md border border-border bg-surface">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* prev / next */}
          <div className="grid grid-cols-2 gap-3 pt-10 border-t border-border">
            {prev ? (
              <Link to={`/projects/${prev.slug}`} className="group rounded-lg border border-border p-5 hover:bg-surface transition-colors">
                <p className="font-mono text-xs text-muted-foreground inline-flex items-center gap-1.5"><ArrowLeft className="h-3 w-3" /> Previous</p>
                <p className="mt-1 font-display text-lg font-semibold group-hover:text-accent transition-colors">{prev.title}</p>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/projects/${next.slug}`} className="group rounded-lg border border-border p-5 hover:bg-surface transition-colors text-right">
                <p className="font-mono text-xs text-muted-foreground inline-flex items-center gap-1.5">Next <ArrowRight className="h-3 w-3" /></p>
                <p className="mt-1 font-display text-lg font-semibold group-hover:text-accent transition-colors">{next.title}</p>
              </Link>
            ) : <span />}
          </div>
        </div>
      </article>
    </>
  );
}
