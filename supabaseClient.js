import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ujgxojoohbnmudohxotp.supabase.co"   // غيرها بالـ URL بتاعك
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZ3hvam9vaGJubXVkb2h4b3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMDE4MDAsImV4cCI6MjA3MDc3NzgwMH0.gJMs_eTzV6q_RgU-sWLt9EppIwQIyI_wf2aiZz3Oqks"                      // غيرها بالـ anon key
export const supabase = createClient(supabaseUrl, supabaseKey)
