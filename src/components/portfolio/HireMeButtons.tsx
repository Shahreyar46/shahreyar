import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { developer } from '@/data/developer';

interface HireMeButtonsProps {
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  variant?: 'solid' | 'inverse';
}

export function HireMeButtons({ className = '', size = 'lg', variant = 'solid' }: HireMeButtonsProps) {
  const isInverse = variant === 'inverse';
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Button
        asChild
        size={size}
        className={`font-mono ${isInverse ? 'bg-background text-foreground hover:bg-background/90' : ''}`}
      >
        <Link to="/contact">
          <Mail className="mr-2 h-4 w-4" />
          Hire me
        </Link>
      </Button>
      <Button asChild size={size} variant="outline" className="font-mono">
        <a href={developer.cvUrl} download>
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </a>
      </Button>
    </div>
  );
}
