export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technology: string;
  conceptFocus: string[];
  pythonCode: string;
  interactiveType: 'voter' | 'calculator' | 'atm' | 'grade';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Foundational' | 'Currently Exploring' | 'Active Practice';
  }[];
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export interface HackathonStep {
  step: string;
  title: string;
  description: string;
}
