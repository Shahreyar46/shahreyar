import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { developer } from '@/data/developer';
import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-accent uppercase tracking-widest">
              // get in touch
            </p>
            <h3 className="font-display text-3xl font-semibold leading-tight">
              Have a project in mind?
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              I'm always open to discussing WordPress engineering, plugin
              architecture and SaaS product work.
            </p>
            <a
              href={`mailto:${developer.email}?subject=Hire%20you%20for%20a%20WordPress%20project`}
              className="inline-flex items-center gap-2 mt-2 font-mono text-sm text-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              {developer.email}
            </a>
            <a
              href={developer.cvUrl}
              download
              className="inline-flex items-center gap-2 mt-1 font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              ↓ Download CV (PDF)
            </a>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-accent uppercase tracking-widest">// sitemap</p>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', to: '/' },
                { name: 'Selected Work', to: '/projects' },
                { name: 'About', to: '/about' },
                { name: 'Experience', to: '/experience' },
                { name: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-accent uppercase tracking-widest">// elsewhere</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={developer.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={developer.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={developer.social.wordpress} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <span className="font-mono text-xs">[WP]</span> WordPress.org
              </a>
              <p className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} {developer.name}
          </p>
          <p className="font-mono text-xs text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for select Q3/Q4 work
          </p>
        </div>
      </div>
    </footer>
  );
}
