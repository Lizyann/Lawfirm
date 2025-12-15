import { createClient } from '@supabase/supabase-js';

// const getEnv = (key: string) => {
//   try {
//     // Check standard process.env
//     if (typeof process !== 'undefined' && process?.env && process.env[key]) {
//       return process.env[key];
//     }
//     // Check window.process polyfill
//     if (typeof window !== 'undefined' && (window as any).process?.env?.[key]) {
//       return (window as any).process.env[key];
//     }
//   } catch (e) {
//     // Ignore access errors
//   }
//   return '';
// };

// const supabaseUrl = getEnv('SUPABASE_URL');
// const supabaseAnonKey = getEnv('SUPABASE_ANON_KEY');

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials are missing. Please ensure SUPABASE_URL and SUPABASE_ANON_KEY are set in your .env file.');
}

// Fallbacks are empty strings; operations will fail gracefully if keys are missing rather than leaking old keys
// export const supabase = createClient(
//   supabaseUrl || 'https://placeholder.supabase.co', 
//   supabaseAnonKey || 'placeholder'
// );

export const supabase = createClient(supabaseUrl, supabaseKey);
