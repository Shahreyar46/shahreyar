import { stats } from '@/data/developer';
import { motion } from 'framer-motion';

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                {s.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-mono">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
