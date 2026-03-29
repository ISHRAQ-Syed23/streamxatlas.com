
'use client'

import { useEffect, useState } from 'react'
import { supabase, Tool } from '@/lib/supabase'

export default function Tools() {
  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const { data } = await supabase
          .from('tools')
          .select('*')
          .order('category', { ascending: true })
          .order('name', { ascending: true })

        setTools(data || [])
      } finally {
        setLoading(false)
      }
    }

    fetchTools()
  }, [])

  const categories = Array.from(new Set(tools.map(t => t.category))).filter(Boolean)
  const filteredTools = selectedCategory 
    ? tools.filter(t => t.category === selectedCategory)
    : tools

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-20">
        <h1 className="mb-4">tools & stack</h1>
        <p className="opacity-70 mb-12">
          what i use. why. costs. alternatives i've tested.
        </p>

        {!loading && categories.length > 0 && (
          <div className="mb-12 flex gap-4 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`text-sm px-4 py-2 border transition-colors ${
                selectedCategory === null
                  ? 'bg-ghost text-jet border-ghost'
                  : 'border-slate text-ghost hover:border-ghost'
              }`}
            >
              all
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm px-4 py-2 border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-ghost text-jet border-ghost'
                    : 'border-slate text-ghost hover:border-ghost'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading && <div className="py-20 text-center opacity-60">loading tools...</div>}

        {!loading && filteredTools.length === 0 && (
          <div className="py-20 text-center opacity-60">
            no tools yet.
          </div>
        )}

        {!loading && filteredTools.length > 0 && (
          <div className="space-y-8">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="border-b border-slate border-opacity-20 pb-8 last:border-0">
                <div className="mb-3">
                  <h3 className="text-lg font-bold">{tool.name}</h3>
                  {tool.category && (
                    <p className="text-xs opacity-50 mt-1">{tool.category}</p>
                  )}
                </div>

                {tool.why_using && (
                  <p className="opacity-70 mb-4 max-w-2xl">
                    {tool.why_using}
                  </p>
                )}

                <div className="flex gap-6 text-sm">
                  {tool.cost && (
                    <div>
                      <span className="opacity-60">cost: </span>
                      <span className="font-bold">{tool.cost}</span>
                    </div>
                  )}
                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener"
                      className="border-b border-ghost hover:opacity-70"
                    >
                      website →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
