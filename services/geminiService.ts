
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateAIResponse = async (prompt: string, systemInstruction?: string) => {
  if (!API_KEY) {
    throw new Error("Clé API manquante. Veuillez vérifier votre configuration.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction || "Tu est un assistant expert en formation pour le secteur public hospitalier français (ANFH). Ton but est d'aider les responsables de formation à gagner du temps et à améliorer la qualité pédagogique.",
        temperature: 0.7,
      },
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'IA. Veuillez réessayer.";
  }
};
