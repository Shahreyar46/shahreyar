import { Link, useLocation } from 'react-router-dom';
import { Menu, Terminal } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { developer } from '@/data/developer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Work', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="group flex items-center gap-2.5 font-mono text-sm font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="hidden sm:inline tracking-tight">
              shahreyar<span className="text-accent">.dev</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <span className="font-mono text-accent text-xs mr-1.5">/</span>
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-md bg-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ml-2 pl-3 border-l border-border flex items-center gap-2">
              <ThemeToggle />
              <Button asChild size="sm" variant="outline" className="rounded-md font-mono text-xs">
                <a href={developer.cvUrl} download>CV</a>
              </Button>
              <Button asChild size="sm" className="rounded-md font-mono text-xs">
                <Link to="/contact">Hire me</Link>
              </Button>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="size-9" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-2 mt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-3 text-lg font-medium rounded-md hover:bg-secondary"
                    >
                      <span className="font-mono text-accent text-sm mr-2">/</span>
                      {link.name}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 font-mono">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Hire me</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
