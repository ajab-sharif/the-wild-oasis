
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ajxdcsakqhxjmmfqrfaz.supabase.co'

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqeGRjc2FrcWh4am1tZnFyZmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MDgyMDAsImV4cCI6MjAxODQ4NDIwMH0.4Cj6cMbLCThe-p4aoHMFTuWglgoucFUsH9PZxW6dybY";

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

