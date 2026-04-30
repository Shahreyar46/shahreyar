/**
 * Core TypeScript interfaces for Md. Al-Shahreyar's developer portfolio
 */

export type ProjectCategory = 'plugin' | 'saas' | 'integration' | 'ecommerce';

export interface ProjectTech {
  name: string;
}

export interface DevProject {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  url?: string;
  repo?: string;
  slug: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  location?: string;
  achievements: string[];
  stack: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export interface DeveloperInfo {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  heroLine1: string;
  heroLine2: string;
  intro: string;
  bio: string;
  philosophy: string;
  email: string;
  phone: string;
  location: string;
  yearsOfExperience: number;
  pluginsShipped: number;
  productionUsers: string;
  cvUrl: string;
  social: {
    github: string;
    linkedin: string;
    wordpress: string;
  };
}

export interface AiTool {
  name: string;
  use: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
