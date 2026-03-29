
'use client'

import { useEffect, useState } from 'react'
import { supabase, Project } from '@/lib/supabase'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          throw error
        }

        setProjects(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-20">
        <h1 className="mb-4">projects</h1>
        <p className="opacity-70 mb-12">
          things i've built. real code. real problems. real lessons.
        </p>

        {loading && (
          <div className="py-20 text-center opacity-60">
            loading projects...
          </div>
        )}

        {error && (
          <div className="py-20 text-center text-red-500">
            error: {error}
          </div>
        )}

        {!loading && projects.length === 0 && (
          <div className="py-20 text-center opacity-60">
            no projects yet. check back soon.
          </div>
        )}

        {!loading && projects.length > 0 && (
          <div className="space-y-12">
            {projects.map((project) => (
              <article
                key={project.id}
                className="border-b border-slate border-opacity-20 pb-12 last:border-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-sm opacity-60 mb-4">{project.status}</p>
                  </div>
                </div>

                <p className="opacity-80 mb-6 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex gap-6">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener"
                      className="text-sm border-b border-ghost pb-1 hover:opacity-70"
                    >
                      github →
                    </a>
                  )}
                  {project.demo_link && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener"
                      className="text-sm border-b border-ghost pb-1 hover:opacity-70"
                    >
                      live →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
