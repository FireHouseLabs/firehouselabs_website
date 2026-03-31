
import { GoogleGenAI, Type } from "@google/genai";
import { ConsultationResponse } from "../types";

// Service to consult Gemini for a technical roadmap based on project ideas
export const consultProject = async (userPrompt: string): Promise<ConsultationResponse> => {
  // Always use process.env.API_KEY directly for initialization
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Use gemini-3-pro-preview for complex reasoning and technical strategy tasks
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `I am looking to build a software project. Here is my idea: "${userPrompt}". 
    Act as a senior technical consultant at Firehouse Labs. 
    Provide a professional breakdown of how we would approach this.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: {
            type: Type.STRING,
            description: "A high-level overview of the project approach."
          },
          roadmap: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                phase: { type: Type.STRING },
                tasks: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              },
              required: ["phase", "tasks"]
            }
          },
          technologies: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Recommended tech stack."
          }
        },
        required: ["summary", "roadmap", "technologies"]
      }
    }
  });

  // Access the text property directly on the response object
  const text = response.text;
  if (!text) throw new Error("Empty response from AI");
  
  return JSON.parse(text.trim()) as ConsultationResponse;
};
