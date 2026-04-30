import { SEOHead } from '@/components/seo/SEOHead';
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline';
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  return (
    <>
      <SEOHead title="Experience" description="The career path and engineering experience of Md. Al-Shahreyar." />

      <section className="pt-32 pb-12 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// experience</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">The journey so far.</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From frontend templates to leading plugin architecture, five years of WordPress, PHP and product engineering.
            </p>
          </motion.div>
        </div>
      </section>

      <ExperienceTimeline />
    </>
  );
}
