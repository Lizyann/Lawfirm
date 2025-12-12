import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  try {
    // Defensive check for process and env
    if (typeof process !== 'undefined' && process?.env?.API_KEY) {
      return process.env.API_KEY;
    }
    // Fallback if window.process is set (redundant if polyfill works, but safe)
    if (typeof window !== 'undefined' && (window as any).process?.env?.API_KEY) {
      return (window as any).process.env.API_KEY;
    }
  } catch (e) {
    // Ignore access errors
  }
  return '';
};

// Lazy initialization function
let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = getApiKey();
    // Allow client creation even with empty key to prevent immediate crash, 
    // but API calls will fail gracefully later.
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const evaluateCase = async (userQuery: string): Promise<string> => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error("MISSING_API_KEY");
    }

    const ai = getClient();
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

    // Safely access text property
    const responseText = response?.text;
    
    return responseText || "I apologize, but I couldn't process your request at this time. Please contact our office directly.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    let errorMessage = "Unable to connect to the legal assistant.";
    const rawMessage = error?.message || "";

    // Categorize errors for better user feedback
    if (rawMessage.includes("MISSING_API_KEY")) {
      errorMessage = "System Configuration Error: API Key is missing.";
    } else if (rawMessage.includes("API key not valid") || rawMessage.includes("403")) {
      errorMessage = "Authentication Error: The provided API key is invalid.";
    } else if (rawMessage.includes("429") || rawMessage.includes("quota")) {
      errorMessage = "High Traffic: The system is currently busy. Please try again in a moment.";
    } else if (rawMessage.includes("fetch failed") || rawMessage.includes("NetworkError")) {
      errorMessage = "Connection Error: Please check your internet connection.";
    } else if (rawMessage.includes("safety") || rawMessage.includes("blocked")) {
      errorMessage = "Request Blocked: The query triggered safety filters. Please rephrase your request.";
    }

    throw new Error(errorMessage);
  }
};