import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Attorney {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum EvaluationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}