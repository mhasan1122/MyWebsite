export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

export interface Award {
  title: string;
  date: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}