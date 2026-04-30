import { SEOHead } from '@/components/seo/SEOHead';
import { Hero } from '@/components/portfolio/Hero';
import { StatsBar } from '@/components/portfolio/StatsBar';
import { SkillsGrid } from '@/components/portfolio/SkillsGrid';
import { AiToolkit } from '@/components/portfolio/AiToolkit';
import { Services } from '@/components/portfolio/Services';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline';
import { MarqueeBand } from '@/components/portfolio/MarqueeBand';
import { HireMeButtons } from '@/components/portfolio/HireMeButtons';
import { getFeaturedProjects } from '@/data/projects';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <SEOHead />

      <Hero />

      <StatsBar />

      {/* Featured Work */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// 01 — selected work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Products powering 50,000+ WordPress sites.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A snapshot of plugins and SaaS-style products I've architected and shipped, with quantified impact, real install counts and live WordPress.org links.
              </p>
            </div>
            <Button asChild variant="outline" className="font-mono">
              <Link to="/projects">
                View all <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <MarqueeBand />

      <SkillsGrid />

      <AiToolkit />

      <ExperienceTimeline />

      <Services />

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">// let's work together</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Have a WordPress problem worth solving?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Whether it's a custom plugin, a WooCommerce extension, an AI-powered feature or modernising a legacy codebase, let's talk.
            </p>
            <HireMeButtons className="mt-10 justify-center" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
