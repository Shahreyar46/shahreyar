import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { developer } from '@/data/developer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;

    const waText = [
      `Hi Shahreyar, I found your portfolio and would like to get in touch.`,
      ``,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      subject ? `*Project type:* ${subject}` : '',
      ``,
      `*Message:*`,
      message,
    ].filter(line => line !== null).join('\n');

    const phone = developer.phone.replace(/\D/g, '');
    setSubmitting(true);
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(waText)}`, '_blank');
      toast.success('Opening WhatsApp with your message...');
      setSent(true);
      setSubmitting(false);
    }, 300);
  };

  return (
    <>
      <SEOHead title="Contact" description={`Get in touch with ${developer.name} for WordPress engineering work.`} />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// get in touch</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Let's build something.</h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-md">
                Whether you've got a WordPress plugin idea, a WooCommerce extension to ship, or a SaaS-style product that needs senior engineering, I'd love to hear about it.
              </p>
            </div>

            <div className="space-y-3">
              <a href={`mailto:${developer.email}`} className="flex items-center gap-4 rounded-xl border border-border p-4 hover:bg-surface transition-colors">
                <span className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center"><Mail className="h-4 w-4" /></span>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">email</p>
                  <p className="font-medium text-sm">{developer.email}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${developer.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hi Shahreyar, I'd like to discuss a project with you.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border p-4 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 transition-colors group"
              >
                <span className="h-10 w-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">whatsapp</p>
                  <p className="font-medium text-sm group-hover:text-[#25D366] transition-colors">{developer.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                <span className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center"><MapPin className="h-4 w-4" /></span>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">based in</p>
                  <p className="font-medium text-sm">{developer.location}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <a href={developer.social.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              <a href={developer.social.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href={developer.social.wordpress} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors font-mono text-xs">WordPress.org</a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft"
          >
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-6">// send a message</p>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-xs">Name</Label>
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-xs">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-mono text-xs">Project type</Label>
                <Input id="subject" name="subject" placeholder="Custom WordPress plugin / WooCommerce extension / SaaS product…" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-xs">Message</Label>
                <Textarea id="message" name="message" rows={6} required placeholder="Tell me a little about your project, timeline and goals." />
              </div>
              <Button type="submit" size="lg" className="w-full font-mono" disabled={submitting || sent}>
                <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" />
                {submitting ? 'Opening WhatsApp...' : sent ? 'Opened WhatsApp ✓' : 'Send via WhatsApp'}
              </Button>
              <p className="font-mono text-xs text-muted-foreground text-center">
                Or email directly: <a href={`mailto:${developer.email}`} className="hover:text-accent transition-colors">{developer.email}</a>
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
