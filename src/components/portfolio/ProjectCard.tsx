import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { DevProject } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: DevProject;
  index?: number;
  variant?: 'default' | 'large';
}

export function ProjectCard({ project, index = 0, variant = 'default' }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'group relative rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-elevated hover:-translate-y-1',
        variant === 'large' && 'lg:col-span-2'
      )}
    >
      <Link to={`/projects/${project.slug}`} className="block p-6 md:p-8 pb-0">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="space-y-1.5">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-accent">/</span>
              {project.category} · {project.year}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <div className="shrink-0 h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-surface text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="font-mono text-[11px] px-2 py-0.5 text-muted-foreground">
              +{project.tech.length - 5}
            </span>
          )}
        </div>
      </Link>

      <div className="flex items-center justify-between px-6 md:px-8 py-4 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">{project.role}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground hover:text-accent transition-colors"
          >
            Live
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
