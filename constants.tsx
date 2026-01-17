
import React from 'react';
import { ToolCategory, ToolUseCase } from './types';

export const TOOLS_DATA: ToolUseCase[] = [
  {
    id: 'recueil-besoins',
    title: 'Analyseur de besoins',
    description: 'Synthétiser des entretiens ou des questionnaires de besoins en compétences.',
    category: ToolCategory.ANALYSIS,
    icon: '📊',
    practicalValue: 'Gagnez 4h sur la synthèse de vos plans de formation annuels.',
    aiPromptTemplate: 'Agis comme un expert en ingénierie de formation. Voici les notes brutes de mes entretiens avec les chefs de service : [COLLEZ ICI]. Identifie les 5 axes de formation prioritaires et suggère des objectifs pédagogiques pour chacun.'
  },
  {
    id: 'html-lms',
    title: 'Générateur de Code LMS',
    description: 'Transformer du texte brut en code HTML propre pour vos plateformes de formation (Moodle, etc.).',
    category: ToolCategory.DIGITAL,
    icon: '🌐',
    practicalValue: 'Mettez en page vos cours sans aucune connaissance technique.',
    aiPromptTemplate: 'Transforme le texte suivant en code HTML structuré avec des titres (h2), des paragraphes (p) et des listes à puces (ul). Le style doit être épuré et compatible avec un LMS : [TEXTE]'
  },
  {
    id: 'syllabus-gen',
    title: 'Générateur de Syllabus',
    description: 'Créer une trame de programme de formation complète en quelques secondes.',
    category: ToolCategory.DESIGN,
    icon: '📝',
    practicalValue: 'Structurez instantanément vos cahiers des charges pour les prestataires.',
    aiPromptTemplate: 'Crée un programme de formation détaillé pour une session de 2 jours sur [THEMATIQUE]. Inclus : objectifs, pré-requis, déroulé heure par heure et méthodes pédagogiques actives.'
  },
  {
    id: 'evaluation-mcq',
    title: 'Créateur de QCM',
    description: 'Générer des tests de positionnement ou d\'évaluation des acquis.',
    category: ToolCategory.EVALUATION,
    icon: '✅',
    practicalValue: 'Automatisez la création de vos outils de mesure de l\'efficacité.',
    aiPromptTemplate: 'À partir du contenu suivant : [TEXTE], génère 10 questions de QCM avec 3 options chacune, en indiquant la bonne réponse et une explication pédagogique.'
  },
  {
    id: 'mail-pilotage',
    title: 'Assistant Communication',
    description: 'Rédiger des mails de convocation ou d\'engagement engageants.',
    category: ToolCategory.PILOTAGE,
    icon: '📧',
    practicalValue: 'Améliorez le taux de participation et la clarté de vos échanges.',
    aiPromptTemplate: 'Rédige un mail invitant les soignants à une formation sur la bientraitance. Le ton doit être bienveillant, valorisant et expliquer l\'impact direct sur leur quotidien.'
  },
  {
    id: 'ethics-checker',
    title: 'Vigilance RGPD/IA',
    description: 'Vérifier si votre usage de l\'IA respecte les cadres réglementaires.',
    category: ToolCategory.ETHICS,
    icon: '🛡️',
    practicalValue: 'Sécurisez vos pratiques et protégez les données des agents.',
    aiPromptTemplate: 'Explique-moi les 3 règles d\'or à respecter quand j\'utilise une IA générative avec des données issues d\'un établissement public de santé.'
  }
];
