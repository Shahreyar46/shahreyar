import { developer } from '@/data/developer';

const logos = [
  'WPPOOL',
  'WPCommerz',
  'ChiliDevs',
  'WordPress.org',
  'WooCommerce',
  'Jitsi',
  'Elementor',
  'Preneur Lab',
];

export function MarqueeBand() {
  return (
    <section className="border-y border-border bg-foreground text-background overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-6">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-3 px-8 font-display text-xl md:text-2xl font-semibold tracking-tight">
            {logo}
            <span className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
