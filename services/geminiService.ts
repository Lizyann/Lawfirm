import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Note: In a production environment, you should handle missing API keys gracefully.
// Here we assume it's injected as per instructions.

const ai = new GoogleGenAI({ apiKey });

export const evaluateCase = async (userQuery: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are a preliminary legal intake assistant for "Alvina and Associates". 
      Your goal is to categorize the user's legal issue and provide a brief, professional summary of potential next steps.
      
      Rules:
      1. Identify the likely Practice Area (e.g., Family Law, Corporate, Criminal Defense, Personal Injury).
      2. Suggest 3 distinct initial steps the user should take (e.g., gather documents, do not speak to insurance, etc.).
      3. Maintain a professional, empathetic, and authoritative tone suitable for a top-tier law firm.
      4. CRITICAL: End with a clear disclaimer that this is an AI evaluation and not formal legal advice.
      5. Keep the response under 150 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, but I couldn't process your request at this time. Please contact our office directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to connect to the legal assistant.");
  }
};