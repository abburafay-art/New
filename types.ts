
export interface Tool {
  name: string;
  category: string;
  proficiency: 'Familiar' | 'Proficient';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  description: string;
}
