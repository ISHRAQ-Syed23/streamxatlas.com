
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('projects')

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper auth)
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'admin123') {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('Wrong password')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="mb-8">admin panel</h1>
        <form onSubmit={handleAuth} className="max-w-md">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate text-ghost px-4 py-3 mb-4 text-sm opacity-90"
          />
          <button
            type="submit"
            className="w-full border border-ghost px-4 py-3 text-sm hover:bg-ghost hover:text-jet transition-colors"
          >
            unlock
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="mb-8">admin panel</h1>
      <p className="opacity-70 mb-12">
        instead of editing here, go to supabase studio: https://supabase.com/dashboard → table editor
      </p>

      <div className="bg-slate bg-opacity-10 border border-slate border-opacity-20 p-8 rounded">
        <h2 className="text-lg font-bold mb-4">how to manage content</h2>
        <div className="space-y-4 text-sm opacity-80">
          <div>
            <p className="font-bold mb-2">Add a Project</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>Go to Supabase Dashboard → Table Editor → projects</li>
              <li>Click "Insert row"</li>
              <li>Fill: title, description, github_link, demo_link, status</li>
              <li>Save → your site updates in 1-2 seconds</li>
            </ol>
          </div>

          <div>
            <p className="font-bold mb-2">Add a Build Log</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>Table Editor → build_logs</li>
              <li>Insert row</li>
              <li>Fill: week, year, content, highlights</li>
              <li>Save</li>
            </ol>
          </div>

          <div>
            <p className="font-bold mb-2">Add a Tool</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>Table Editor → tools</li>
              <li>Insert row</li>
              <li>Fill: name, category, cost, link, why_using</li>
              <li>Save</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
