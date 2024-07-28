import 'dotenv/config'; 
import { createClient } from '@supabase/supabase-js';


// Ensure the SUPABASE_URL and SUPABASE_ANON_KEY are defined
if (!process.env.SUPABASE_URL) {
    throw new Error('SUPABASE_URL environment variable is not defined');
  }
  if (!process.env.SUPABASE_ANON_KEY) {
    throw new Error('SUPABASE_ANON_KEY environment variable is not defined');
  }

const supabaseUrl :string = process.env.SUPABASE_URL
const supabaseKey : string  = process.env.SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)