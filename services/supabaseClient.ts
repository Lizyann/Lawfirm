import { createClient } from '@supabase/supabase-js';

const getEnv = (key: string, defaultValue: string) => {
  try {
    if (typeof process !== 'undefined' && process?.env && process.env[key]) {
      return process.env[key];
    }
  } catch (e) {
    // Ignore access errors
  }
  return defaultValue;
};

const supabaseUrl = getEnv('SUPABASE_URL', 'https://qdtuqppwpdxurzdmbqak.supabase.co');
const supabaseAnonKey = getEnv('SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkdHVxcHB3cGR4dXJ6ZG1icWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1MTkyOTYsImV4cCI6MjA4MTA5NTI5Nn0.FjI0uQRng7MUS58f1JPW5No9PhDwgCw8Wi5K1np-Q4Y');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);