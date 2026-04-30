import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '@/data/developer';

export function ExperienceTimeline() {
  return (
    <section className="relative py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// 04 — career</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Five years of building things that ship.
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <span
                  className={`absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-foreground text-background ${job.current ? 'ring-4 ring-accent/30' : ''}`}
                >
                  <Briefcase className="h-3.5 w-3.5" />
                </span>

                <div className="rounded-xl border border-border bg-card p-6 md:p-7 shadow-soft">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl md:text-2xl font-semibold">
                      {job.role}
                      <span className="text-muted-foreground"> · </span>
                      <span className="text-accent">{job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                  </div>

                  {job.location && (
                    <p className="font-mono text-xs text-muted-foreground inline-flex items-center gap-1.5 mb-4">
                      <MapPin className="h-3 w-3" /> {job.location}
                      {job.current && (
                        <span className="ml-2 inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> current
                        </span>
                      )}
                    </p>
                  )}

                  <ul className="space-y-2 mb-5">
                    {job.achievements.map((a) => (
                      <li key={a} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-accent font-mono mt-0.5">▸</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-surface text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
