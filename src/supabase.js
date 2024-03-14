import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mvndrgfkxasueczeakdq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12bmRyZ2ZreGFzdWVjemVha2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxOTEyNzcsImV4cCI6MjAyNTc2NzI3N30.V_JztX0YZrQPQ7mLdn3ZJi4fbAXzwGY69pbJgR4yZbA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
