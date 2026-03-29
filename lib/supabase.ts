
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Project {
  id: string
  title: string
  description: string
  github_link: string
  demo_link: string
  status: 'in-progress' | 'completed' | 'paused'
  created_at: string
}

export interface BuildLog {
  id: string
  week: number
  year: number
  content: string
  highlights: string[]
  created_at: string
}

export interface Tool {
  id: string
  name: string
  category: string
  cost: string
  link: string
  why_using: string
  created_at: string
}
