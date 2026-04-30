import { motion } from 'framer-motion';
import { Boxes, ShoppingCart, Sparkles, ShieldCheck } from 'lucide-react';
import { services } from '@/data/developer';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Boxes, ShoppingCart, Sparkles, ShieldCheck,
};

export function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// 05 — services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            What I can build for your team.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Boxes;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-7 hover:border-accent/60 hover:shadow-elevated transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="h-12 w-12 rounded-lg bg-foreground text-background flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
