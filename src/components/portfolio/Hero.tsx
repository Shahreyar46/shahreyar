import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { developer } from '@/data/developer';
import { Button } from '@/components/ui/button';
import portrait from '@/assets/shahreyar-portrait.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-muted-foreground">Available for senior engineering work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              {developer.heroLine1}
              <br />
              <span className="text-gradient">{developer.heroLine2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              {developer.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="rounded-md font-mono group">
                <Link to="/projects">
                  View selected work
                  <ArrowDownRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md font-mono">
                <a href={`mailto:${developer.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </a>
              </Button>

              <div className="flex items-center gap-1 ml-2">
                <a href={developer.social.github} target="_blank" rel="noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href={developer.social.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 max-w-xl rounded-lg border border-border bg-code-bg shadow-elevated overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-white/50">~/shahreyar — zsh</span>
              </div>
              <div className="p-5 font-mono text-sm text-code-fg space-y-1.5">
                <p><span className="text-accent">$</span> whoami</p>
                <p className="text-white/80">{developer.name.toLowerCase()} — sr. software engineer · architect</p>
                <p><span className="text-accent">$</span> cat focus.txt</p>
                <p className="text-white/80">wordpress · woocommerce · saas · ai-assisted dev</p>
                <p><span className="text-accent">$</span> ls ai-stack/</p>
                <p className="text-white/80">claude/ cursor/ chatgpt/ antigravity/ lovable/ qwen/ copilot/</p>
                <p><span className="text-accent">$</span> ls quality/</p>
                <p className="text-white/80">clean-code/  unit-tests/  qa-automation/  code-review/</p>
                <p className="terminal-cursor"><span className="text-accent">$</span> </p>
              </div>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
              <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-2xl border-2 border-accent" />
              <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-elevated">
                <img
                  src={portrait}
                  alt={`Portrait of ${developer.name}, Senior Software Engineer`}
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 bottom-10 rounded-lg border border-border bg-card/95 backdrop-blur p-3 shadow-elevated hidden sm:block"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Currently</p>
                <p className="font-mono text-sm font-semibold mt-1">Sr. SE @ WPPOOL</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-10 rounded-lg border border-border bg-card/95 backdrop-blur p-3 shadow-elevated hidden sm:block"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Stack</p>
                <p className="font-mono text-sm font-semibold mt-1">PHP · React · Vue</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
