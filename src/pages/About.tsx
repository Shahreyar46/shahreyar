import { SEOHead } from '@/components/seo/SEOHead';
import { developer, education, skillGroups } from '@/data/developer';
import portrait from '@/assets/shahreyar-full.png';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <SEOHead title="About" description={developer.intro} />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-elevated">
                <img src={portrait} alt={developer.name} className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Years</p>
                  <p className="font-display text-2xl font-bold">5+</p>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Plugins</p>
                  <p className="font-display text-2xl font-bold">10+</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// about</p>
                <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
                  Engineer of WordPress products at scale.
                </h1>
              </motion.div>

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                {developer.bio.split('\n\n').map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <div className="rounded-2xl border-l-4 border-accent bg-surface p-6">
                <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">// philosophy</p>
                <p className="font-display text-xl md:text-2xl font-medium leading-snug">
                  "{developer.philosophy}"
                </p>
              </div>

              {/* contact card */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a href={`mailto:${developer.email}`} className="rounded-xl border border-border p-5 hover:bg-surface transition-colors">
                  <Mail className="h-5 w-5 text-accent mb-3" />
                  <p className="font-mono text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-sm break-all">{developer.email}</p>
                </a>
                <a href={`tel:${developer.phone}`} className="rounded-xl border border-border p-5 hover:bg-surface transition-colors">
                  <Phone className="h-5 w-5 text-accent mb-3" />
                  <p className="font-mono text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium text-sm">{developer.phone}</p>
                </a>
                <div className="rounded-xl border border-border p-5">
                  <MapPin className="h-5 w-5 text-accent mb-3" />
                  <p className="font-mono text-xs text-muted-foreground">Based in</p>
                  <p className="font-medium text-sm">Dhaka, Bangladesh</p>
                </div>
                <div className="rounded-xl border border-border p-5">
                  <GraduationCap className="h-5 w-5 text-accent mb-3" />
                  <p className="font-mono text-xs text-muted-foreground">Education</p>
                  <p className="font-medium text-sm">B.Eng SE — DIU</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="font-mono">
                  <a href={`mailto:${developer.email}?subject=Hire%20you%20for%20a%20WordPress%20project`}>
                    <Mail className="mr-2 h-4 w-4" /> Hire me
                  </a>
                </Button>
                <Button asChild variant="outline" className="font-mono">
                  <a href={developer.cvUrl} download>
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </a>
                </Button>
                <Button asChild variant="ghost" className="font-mono">
                  <Link to="/experience">View experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education + skills callout */}
      <section className="border-t border-border bg-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-10">
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// education</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6">{education.institution}</h2>
            <p className="text-muted-foreground">{education.degree}</p>
            <p className="text-muted-foreground">{education.faculty}</p>
            <div className="mt-4 flex gap-3 font-mono text-xs">
              <span className="px-2 py-1 rounded border border-border bg-card">CGPA {education.cgpa}</span>
              <span className="px-2 py-1 rounded border border-border bg-card">{education.period}</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// what I bring</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6">Specializations</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Independent & fast execution',
                'Strong attention to detail',
                'Team collaboration',
                'Multitasking & prioritisation',
                'Deadline-driven delivery',
                'Strong PHP & OOP foundation',
                'Clear written communication',
                'Problem-solving mindset',
                'Adaptable to new technologies',
              ].map((s) => (
                <div key={s} className="flex items-center gap-2.5 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
