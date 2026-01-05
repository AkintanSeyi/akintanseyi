import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://znjqxlbzjtozewztnpnp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuanF4bGJ6anRvemV3enRucG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0MjQ3NTMsImV4cCI6MjA4MzAwMDc1M30.aMVT6xitKMDk8EZUASjDHx7O18CuEwawzhqJeYVBLyA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)