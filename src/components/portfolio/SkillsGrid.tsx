import { motion } from 'framer-motion';
import { Code2, Boxes, Server, Database, GitBranch, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { skillGroups } from '@/data/developer';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Boxes, Server, Database, GitBranch, Sparkles, ShieldCheck, Wordpress: Globe,
};

export function SkillsGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// 02 — capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            A toolbox built for shipping production-grade WordPress products.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Five years of focused work across plugins, SaaS and WooCommerce, from low-level OOP architecture to modern admin UI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-card p-6 md:p-8 hover:bg-surface transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{group.category}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
