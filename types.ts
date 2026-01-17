
export enum ToolCategory {
  ANALYSIS = 'Analyse des Besoins',
  DESIGN = 'Conception Pédagogique',
  PILOTAGE = 'Pilotage & Admin',
  EVALUATION = 'Évaluation des Acquis',
  ETHICS = 'Éthique & RGPD',
  DIGITAL = 'Compétences Numériques'
}

export interface ToolUseCase {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  aiPromptTemplate: string;
  practicalValue: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
