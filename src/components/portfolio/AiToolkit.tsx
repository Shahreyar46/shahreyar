import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { aiTools } from '@/data/developer';

export function AiToolkit() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> // 03 — ai-driven workflow
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            I build with AI in the loop — every day.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI isn't a buzzword in my workflow — it's a core multiplier. I use frontier models and
            agent tools to scope features, generate test cases, refactor legacy code and review PRs,
            so my teams ship faster without losing engineering rigour.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-xl border border-border bg-card p-5 hover:border-accent/60 hover:shadow-elevated transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <p className="font-display text-lg font-semibold">{tool.name}</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">{tool.use}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { k: 'Clean code', v: 'Every commit reviewed for OOP, readability and testability.' },
            { k: 'Test coverage', v: 'Unit, integration and regression tests baked into delivery.' },
            { k: 'QA automation', v: 'Repeatable test suites that catch regressions before release.' },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">// {s.k}</p>
              <p className="text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
